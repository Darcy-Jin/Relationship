import { initialRelationshipState, recordHiddenEvent } from './logic.js';

export const candidateData = await fetch('../spec/v0/candidates.json').then(r => {
  if (!r.ok) throw new Error('候选人物数据加载失败');
  return r.json();
});
export const candidates = Object.fromEntries(candidateData.candidates.map(c => [c.id, c]));
export const firstFour = ['P01','P02','P03','P04'];

export const state = {
  screen:'intro', encounterIndex:0, encounterLine:null, reactions:{}, shortlistRejected:new Set(), selectedCandidateId:null,
  dateIndex:0, relationshipState:initialRelationshipState(), events:[], memories:[], lightIndex:0, lightEvents:[], majorStep:0, finalDecision:null,
};

const phaseNames={intro:'开始',encounter:'遇见',select:'选择',date:'约会',threeMonths:'三个月后',light:'相处',lightResult:'相处',montage:'半年后',recurring:'一年后',cohabit:'一起生活',career:'人生转折',crisis:'真正需要的时候',final:'几年以后',memory:'这一段人生'};
export const currentCandidate=()=>candidates[state.selectedCandidateId];
export const portraitClass=id=>id.toLowerCase();
export const initialOf=c=>c.presentation.name.slice(0,1);
export function year(){if(['intro','encounter','select','date'].includes(state.screen))return'第一年';if(['threeMonths','light','lightResult'].includes(state.screen))return'第 1 年';if(['montage','recurring','cohabit'].includes(state.screen))return'第 1～2 年';if(['career','crisis'].includes(state.screen))return'第 2～3 年';if(['final','memory'].includes(state.screen))return'第 4 年';return'';}
export function shell(content){document.querySelector('#app').innerHTML=`<div class="shell"><header class="topbar"><div class="brand">Relationship</div><div>${phaseNames[state.screen]||'人生'} · <span class="year">${year()}</span></div></header><section class="stage">${content}</section></div>`;}
export function largePortrait(c){return `<div class="portrait ${portraitClass(c.id)}" data-initial="${initialOf(c)}"><div class="portrait-meta"><h2>${c.presentation.name}</h2><p>${c.presentation.age} 岁 · ${c.presentation.summary}</p></div></div>`;}
export function miniPortrait(c){return `<div class="mini-avatar ${portraitClass(c.id)}">${initialOf(c)}</div>`;}
export function addMemory(title,detail){state.memories.push({title,detail});}
export function hiddenRecord({eventId,action,tags=[],tolerance=null,reasonCode=null,responseCode=null,memoryTitle=null,memoryDetail=null}){recordHiddenEvent(state,{eventId,action,tags,tolerance,reasonCode,responseCode});if(memoryTitle)addMemory(memoryTitle,memoryDetail||'');}
export function showToast(text){const n=document.createElement('div');n.className='toast';n.textContent=text;document.body.appendChild(n);setTimeout(()=>n.remove(),1800);}
export function requestRender(){window.dispatchEvent(new Event('relationship:render'));}
export function navigate(screen){state.screen=screen;requestRender();}
export function resetLife(){Object.assign(state,{screen:'intro',encounterIndex:0,encounterLine:null,reactions:{},shortlistRejected:new Set(),selectedCandidateId:null,dateIndex:0,relationshipState:initialRelationshipState(),events:[],memories:[],lightIndex:0,lightEvents:[],majorStep:0,finalDecision:null});requestRender();}
