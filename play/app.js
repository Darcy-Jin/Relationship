import { state } from './runtime.js';
import { renderIntro,renderEncounter,renderSelect,renderDate,renderThreeMonths } from './encounter.js';
import { renderLight,renderLightResult,renderMontage,renderRecurring,renderCohabit } from './life.js';
import { renderCareer,renderCrisis,renderFinal,renderMemory } from './major.js';

const routes={intro:renderIntro,encounter:renderEncounter,select:renderSelect,date:renderDate,threeMonths:renderThreeMonths,light:renderLight,lightResult:renderLightResult,montage:renderMontage,recurring:renderRecurring,cohabit:renderCohabit,career:renderCareer,crisis:renderCrisis,final:renderFinal,memory:renderMemory};
function render(){(routes[state.screen]||renderIntro)();}
window.addEventListener('relationship:render',render);
render();
