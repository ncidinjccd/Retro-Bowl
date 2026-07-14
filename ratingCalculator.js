import {validateRating} from '../utils/validation.js';
const WEIGHTS={
QB:{shortAccuracy:.15,mediumAccuracy:.15,deepAccuracy:.13,throwPower:.12,awareness:.18,decisionMaking:.15,pressureResistance:.12},
RB:{speed:.16,acceleration:.15,vision:.15,carrying:.13,agility:.13,breakTackle:.15,elusiveness:.13},
FB:{strength:.22,runBlocking:.22,carrying:.14,awareness:.14,breakTackle:.14,toughness:.14},
WR:{catching:.19,routeRunning:.18,speed:.17,release:.14,contestedCatch:.16,awareness:.16},
TE:{catching:.18,runBlocking:.18,passBlocking:.12,strength:.15,routeRunning:.17,contestedCatch:.2},
OT:{passBlocking:.28,runBlocking:.22,strength:.18,awareness:.14,stamina:.1,technique:.08},
OG:{runBlocking:.26,passBlocking:.22,strength:.2,awareness:.14,stamina:.1,technique:.08},
C:{awareness:.23,passBlocking:.22,runBlocking:.22,strength:.15,stamina:.1,technique:.08},
DE:{passRush:.23,blockShedding:.21,strength:.16,tackling:.16,awareness:.12,speed:.12},
DT:{strength:.25,blockShedding:.23,runDefense:.19,tackling:.16,awareness:.1,passRush:.07},
LB:{tackling:.2,zoneCoverage:.14,manCoverage:.09,awareness:.17,speed:.13,blockShedding:.14,pursuit:.13},
CB:{manCoverage:.21,zoneCoverage:.19,speed:.18,agility:.14,awareness:.15,ballSkills:.13},
S:{zoneCoverage:.22,awareness:.2,tackling:.15,speed:.14,ballSkills:.16,pursuit:.13},
K:{kickPower:.3,kickAccuracy:.35,pressure:.2,consistency:.15},
P:{kickPower:.34,kickAccuracy:.3,pressure:.16,consistency:.2}
};
export function calculateOverall(position,attributes){const weights=WEIGHTS[position]||WEIGHTS.LB;let total=0,weightTotal=0;for(const [key,w] of Object.entries(weights)){total+=(attributes[key]??attributes.awareness??60)*w;weightTotal+=w;}return validateRating(total/weightTotal);}
export function ratingClass(value){if(value>=90)return'elite';if(value>=80)return'star';if(value>=70)return'starter';if(value<60)return'low';return'';}
export {WEIGHTS};
