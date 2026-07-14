import {generatePlayer} from '../players/playerGenerator.js';
import {POSITIONS} from '../constants.js';
import {pick,randomInt} from '../utils/random.js';
export function generateDraftClass(year){return Array.from({length:168},(_,i)=>{const p=generatePlayer(pick(POSITIONS),null,randomInt(20,23));p.id=`draft-${year}-${i+1}`;p.salary=Number((.8+(168-i)/80).toFixed(1));p.scouted=Math.random()<.15?70:25;p.projectedRound=Math.ceil((i+1)/24);return p;}).sort((a,b)=>(b.potential+b.overall)-(a.potential+a.overall));}
export function scoutPlayer(state,id){const p=state.draftClass.find(x=>x.id===id);if(!p)return;p.scouted=Math.min(100,p.scouted+25);return p;}
export function draftPlayer(state,id){const p=state.draftClass.find(x=>x.id===id);const team=state.league.teams.find(t=>t.id===state.userTeamId);if(!p||!team)throw new Error('Invalid draft pick');state.draftClass=state.draftClass.filter(x=>x.id!==id);p.teamId=team.id;p.contractYears=4;team.roster.push(p);return p;}
export function runAIDraft(state){if(!state.draftClass?.length)return;for(const team of state.league.teams.filter(t=>t.id!==state.userTeamId)){const p=state.draftClass.shift();if(!p)break;p.teamId=team.id;p.contractYears=4;team.roster.push(p);}}
