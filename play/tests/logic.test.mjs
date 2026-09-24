import test from 'node:test';
import assert from 'node:assert/strict';
import { initialRelationshipState, band, resolveResponse, resolveWeekend, resolveCohabitation, resolveCareer, resolveCrisis, applyTags } from '../logic.js';

const candidate = (traits) => ({ traits: { economic_stability:6, career_intensity:6, daily_availability:6, responsiveness:6, crisis_reliability:6, autonomy_need:6, family_investment:6, social_energy:6, predictability:6, fairness:6, boundary_respect:6, ...traits } });

test('band boundaries', () => {
  assert.equal(band(3),'LOW'); assert.equal(band(4),'MID'); assert.equal(band(7),'MID'); assert.equal(band(8),'HIGH');
});

test('high responsiveness accepts medium pressure', () => {
  assert.equal(resolveResponse(candidate({responsiveness:9, autonomy_need:5}),'MID'),'ACCEPT');
});

test('high responsiveness + high autonomy negotiates high pressure', () => {
  assert.equal(resolveResponse(candidate({responsiveness:9, autonomy_need:9}),'HIGH'),'NEGOTIATE_BOUNDARY');
});

test('weekend separate respects space for autonomy high', () => {
  const r = resolveWeekend(candidate({autonomy_need:9}),'SEPARATE');
  assert.ok(r.tags.includes('SPACE_RESPECTED'));
});

test('cohabitation low fairness exposes unfairness', () => {
  const r = resolveCohabitation(candidate({fairness:2}),'ACCEPT_SPLIT');
  assert.ok(r.tags.includes('UNFAIR'));
});

test('career negotiate with high responsiveness creates plan', () => {
  const r = resolveCareer(candidate({career_intensity:9,responsiveness:9}),'NEGOTIATE_TERMS');
  assert.equal(r.code,'PURSUE_WITH_PLAN');
  assert.ok(r.tags.includes('PREDICTABLE'));
});

test('crisis uses reliability rather than availability', () => {
  const r = resolveCrisis(candidate({daily_availability:2,crisis_reliability:9,responsiveness:8}),'ASK_DIRECTLY');
  assert.ok(r.tags.includes('RELIABLE'));
});

test('tags update independent state without total score', () => {
  const s = applyTags(initialRelationshipState(), ['RESPONSIVE','RELIABLE']);
  assert.equal(s.trust,3); assert.equal(s.connection,2); assert.equal(s.resentment,-2);
});

import { resolveWorkweek, resolvePlanChange, resolveFriendGathering, resolveExpressSpace } from '../logic.js';

test('workweek fixed time becomes predictable with responsive partner', () => {
  const r = resolveWorkweek(candidate({responsiveness:9,predictability:5}),'REQUEST_FIXED_TIME');
  assert.ok(r.tags.includes('PREDICTABLE'));
});

test('plan change keeps unpredictability separate from social energy', () => {
  const r = resolvePlanChange(candidate({predictability:2,social_energy:10,responsiveness:5}),'ACCEPT');
  assert.ok(r.tags.includes('UNPREDICTABLE'));
});

test('friend boundary respects explicit boundary trait', () => {
  const r = resolveFriendGathering(candidate({social_energy:10,boundary_respect:9}),'DISCUSS_BOUNDARY');
  assert.equal(r.code,'BOUNDARY_RESPECTED');
});

test('space request can feel pressured when autonomy low and response low', () => {
  const r = resolveExpressSpace(candidate({autonomy_need:2,family_investment:9,responsiveness:2}),'ASK_WEEKLY_SPACE');
  assert.ok(r.tags.includes('SPACE_PRESSURED'));
});
