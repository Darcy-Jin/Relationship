export const initialRelationshipState = () => ({
  connection: 0,
  trust: 0,
  autonomy_balance: 0,
  resentment: 0,
  commitment: 0,
  exit_constraint: 0,
});

export function band(value) {
  if (value <= 3) return 'LOW';
  if (value >= 8) return 'HIGH';
  return 'MID';
}

export const tagEffects = {
  RESPONSIVE: { connection: 1, trust: 1, resentment: -1, commitment: 1 },
  PARTIAL_RESPONSE: {},
  UNRESPONSIVE: { connection: -1, trust: -1, resentment: 1, commitment: -1 },
  RELIABLE: { connection: 1, trust: 2, resentment: -1, commitment: 1 },
  UNRELIABLE: { connection: -1, trust: -2, resentment: 2, commitment: -1 },
  SPACE_RESPECTED: { trust: 1, autonomy_balance: 2, resentment: -1 },
  SPACE_PRESSURED: { connection: -1, trust: -1, autonomy_balance: -2, resentment: 1, commitment: -1 },
  FAIR: { trust: 1, resentment: -1, commitment: 1 },
  UNFAIR: { connection: -1, trust: -1, resentment: 2, commitment: -1 },
  PREDICTABLE: { trust: 1 },
  UNPREDICTABLE: { trust: -1, resentment: 1 },
  TOGETHER_POSITIVE: { connection: 2, resentment: -1, commitment: 1 },
  DISTANCE: { connection: -1, commitment: -1 },
  SHARED_COST: { exit_constraint: 1 },
  MAJOR_SHARED_COST: { exit_constraint: 2 },
};

const clamp = (n) => Math.max(-10, Math.min(10, n));

export function applyTags(state, tags = []) {
  const next = { ...state };
  for (const tag of tags) {
    const effect = tagEffects[tag] || {};
    for (const [key, delta] of Object.entries(effect)) next[key] = clamp(next[key] + delta);
  }
  return next;
}

export function resolveResponse(candidate, pressure = 'MID') {
  const responsiveness = band(candidate.traits.responsiveness);
  const autonomy = band(candidate.traits.autonomy_need);
  if (responsiveness === 'HIGH') {
    if (pressure === 'HIGH' && autonomy === 'HIGH') return 'NEGOTIATE_BOUNDARY';
    return 'ACCEPT';
  }
  if (responsiveness === 'MID') {
    if (pressure === 'LOW') return 'ACCEPT';
    if (pressure === 'MID') return 'PARTIAL';
    return 'RESIST';
  }
  return 'RESIST';
}

export function responseTags(code) {
  if (code === 'ACCEPT') return ['RESPONSIVE'];
  if (code === 'NEGOTIATE_BOUNDARY') return ['RESPONSIVE', 'SPACE_RESPECTED'];
  if (code === 'PARTIAL') return ['PARTIAL_RESPONSE'];
  return ['UNRESPONSIVE'];
}

export function resolveWeekend(candidate, action) {
  const social = band(candidate.traits.social_energy);
  const family = band(candidate.traits.family_investment);
  const availability = band(candidate.traits.daily_availability);
  const autonomy = band(candidate.traits.autonomy_need);
  const defaultPlan = social === 'HIGH' ? 'SOCIAL_PLAN'
    : family === 'HIGH' && availability === 'HIGH' ? 'COUPLE_PLAN'
    : autonomy === 'HIGH' ? 'INDEPENDENT_PLAN' : 'MIXED_PLAN';

  if (action === 'JOIN') return { code: 'JOIN', tags: ['TOGETHER_POSITIVE'], defaultPlan };
  if (action === 'SEPARATE') {
    const tags = autonomy === 'HIGH' ? ['SPACE_RESPECTED'] : (band(candidate.traits.family_investment) === 'HIGH' ? ['DISTANCE'] : []);
    return { code: 'SEPARATE', tags, defaultPlan };
  }
  const pressure = action === 'PROTEST' ? 'HIGH' : 'MID';
  const code = resolveResponse(candidate, pressure);
  const tags = responseTags(code);
  if (action === 'NEGOTIATE' && ['ACCEPT','NEGOTIATE_BOUNDARY'].includes(code)) tags.push('TOGETHER_POSITIVE');
  if (action === 'PROTEST' && code === 'RESIST') tags.push('SPACE_PRESSURED');
  return { code, tags, defaultPlan };
}

export function resolveCohabitation(candidate, action) {
  const fairness = band(candidate.traits.fairness);
  const initial = fairness === 'HIGH' ? ['FAIR'] : fairness === 'LOW' ? ['UNFAIR'] : [];
  if (action === 'ACCEPT_SPLIT') return { code: 'ACCEPT_SPLIT', tags: initial };
  const pressure = action === 'SET_ROTATION' && fairness !== 'HIGH' ? 'HIGH' : 'MID';
  const response = resolveResponse(candidate, pressure);
  const tags = [...initial, ...responseTags(response)];
  if (['ACCEPT','NEGOTIATE_BOUNDARY'].includes(response)) tags.push('FAIR');
  if (action === 'SET_ROTATION' && ['ACCEPT','NEGOTIATE_BOUNDARY'].includes(response)) tags.push('PREDICTABLE');
  if (action === 'WITHDRAW') tags.push('DISTANCE');
  return { code: response, tags };
}

export function resolveCareer(candidate, action) {
  const career = band(candidate.traits.career_intensity);
  const responsiveness = band(candidate.traits.responsiveness);
  if (action === 'SUPPORT') {
    if (career === 'HIGH' && responsiveness === 'HIGH') return { code:'PURSUE_WITH_PLAN', tags:['RESPONSIVE','PREDICTABLE','SHARED_COST'] };
    if (career === 'HIGH') return { code:'PURSUE', tags:['PARTIAL_RESPONSE','SHARED_COST'] };
    return { code:'DISCUSS', tags:['RESPONSIVE','SHARED_COST'] };
  }
  if (action === 'NEGOTIATE_TERMS') {
    const response = resolveResponse(candidate, 'MID');
    if (['ACCEPT','NEGOTIATE_BOUNDARY'].includes(response)) return { code:'PURSUE_WITH_PLAN', tags:['RESPONSIVE','PREDICTABLE','SHARED_COST'] };
    if (response === 'PARTIAL') return { code:'PARTIAL_PLAN', tags:['PARTIAL_RESPONSE','SHARED_COST'] };
    return { code:'PURSUE_ANYWAY', tags:['UNRESPONSIVE','UNPREDICTABLE','SHARED_COST'] };
  }
  if (action === 'OPPOSE') {
    if (career === 'LOW') return { code:'RELATIONSHIP_FIRST', tags:['RESPONSIVE'] };
    const response = career === 'HIGH' && responsiveness === 'HIGH' ? 'NEGOTIATE_BOUNDARY' : resolveResponse(candidate,'HIGH');
    return { code: response, tags: responseTags(response) };
  }
  const response = band(candidate.traits.predictability) === 'HIGH' && responsiveness !== 'LOW' ? 'ACCEPT' : resolveResponse(candidate,'MID');
  const tags = responseTags(response);
  if (response === 'ACCEPT') tags.push('PREDICTABLE');
  return { code: response, tags };
}

export function resolveCrisis(candidate, action) {
  if (action === 'HANDLE_SELF') return { code:'NO_PROBE', tags:[], probeValidity:'PARTIAL' };
  const reliability = band(candidate.traits.crisis_reliability);
  const response = band(candidate.traits.responsiveness);
  const tags = reliability === 'HIGH' ? ['RELIABLE'] : reliability === 'LOW' ? ['UNRELIABLE'] : ['PARTIAL_RESPONSE'];
  if (response === 'HIGH') tags.push('RESPONSIVE');
  if (response === 'LOW') tags.push('UNRESPONSIVE');
  return { code: reliability === 'HIGH' ? 'SHOWS_UP' : reliability === 'LOW' ? 'DOES_NOT_SHOW' : 'PARTIAL_HELP', tags, probeValidity:'FULL' };
}

export function recordHiddenEvent(session, payload) {
  const before = { ...session.relationshipState };
  const after = applyTags(before, payload.tags || []);
  session.relationshipState = after;
  session.events.push({ ...payload, before, after });
  return session;
}

export function choiceMapSnapshot(session) {
  const state = session.relationshipState;
  const strengths = [];
  const frictions = [];
  if (state.trust >= 3) strengths.push('你们在重要事情上逐渐建立了信任。');
  if (state.connection >= 3) strengths.push('你们之间有明显的亲密和连接感。');
  if (state.autonomy_balance >= 2) strengths.push('这段关系给了你比较舒服的个人空间。');
  if (state.resentment >= 3) frictions.push('一些问题已经从不爽变成了反复累积的消耗。');
  if (state.trust <= -2) frictions.push('你越来越难放心依赖这个人。');
  if (state.autonomy_balance <= -2) frictions.push('你开始觉得自己的空间被压缩。');
  return { strengths, frictions };
}

export function resolveWorkweek(candidate, action) {
  const tags = [];
  const availability = band(candidate.traits.daily_availability);
  const predictability = band(candidate.traits.predictability);
  if (predictability === 'HIGH') tags.push('PREDICTABLE');
  if (predictability === 'LOW') tags.push('UNPREDICTABLE');
  if (action === 'ACCEPT') return { code: availability === 'LOW' ? 'LOW_TIME' : 'OK_TIME', tags };
  const pressure = action === 'REQUEST_FIXED_TIME' ? 'LOW' : action === 'REQUEST_MORE_TIME' ? 'MID' : 'HIGH';
  const response = resolveResponse(candidate, pressure);
  tags.push(...responseTags(response));
  if (action === 'REQUEST_FIXED_TIME' && ['ACCEPT','NEGOTIATE_BOUNDARY'].includes(response)) tags.push('PREDICTABLE');
  return { code: response, tags };
}

export function resolvePlanChange(candidate, action) {
  const tags = [];
  const predictability = band(candidate.traits.predictability);
  if (predictability === 'LOW') tags.push('UNPREDICTABLE');
  if (predictability === 'HIGH') tags.push('PREDICTABLE');
  if (action === 'ACCEPT') return { code:'ACCEPT', tags };
  const pressure = action === 'PROTEST' ? 'HIGH' : 'MID';
  const response = resolveResponse(candidate, pressure);
  tags.push(...responseTags(response));
  if (['NEGOTIATE','KEEP_ORIGINAL'].includes(action) && ['ACCEPT','NEGOTIATE_BOUNDARY'].includes(response)) tags.push('PREDICTABLE');
  return { code: response, tags };
}

export function resolveFriendGathering(candidate, action) {
  const autonomy = band(candidate.traits.autonomy_need);
  const boundary = band(candidate.traits.boundary_respect);
  if (action === 'SKIP') return { code:'SKIP', tags: autonomy === 'HIGH' ? ['SPACE_RESPECTED'] : autonomy === 'LOW' ? ['DISTANCE'] : [] };
  if (action === 'JOIN') return { code:'JOIN', tags:['TOGETHER_POSITIVE'] };
  if (action === 'DISCUSS_BOUNDARY') {
    if (boundary === 'HIGH') return { code:'BOUNDARY_RESPECTED', tags:['RESPONSIVE','PREDICTABLE'] };
    if (boundary === 'MID') return { code:'BOUNDARY_PARTIAL', tags:['PARTIAL_RESPONSE'] };
    return { code:'BOUNDARY_RESISTED', tags:['UNRESPONSIVE'] };
  }
  const response = resolveResponse(candidate,'HIGH');
  return { code:response, tags:responseTags(response) };
}

export function resolveExpressSpace(candidate, action) {
  const autonomy = band(candidate.traits.autonomy_need);
  const family = band(candidate.traits.family_investment);
  const pressure = action === 'ASK_ONE_NIGHT' ? 'LOW' : 'MID';
  if (autonomy === 'HIGH') return { code:'SPACE_RESPECTED', tags:['SPACE_RESPECTED'] };
  const response = resolveResponse(candidate, pressure);
  if (autonomy === 'LOW' && family === 'HIGH' && response === 'RESIST') return { code:'SPACE_PRESSURED', tags:['SPACE_PRESSURED','UNRESPONSIVE'] };
  return { code:response, tags:responseTags(response) };
}
