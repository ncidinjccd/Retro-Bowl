import {clamp} from '../utils/random.js';
export function extendPlayer(team,playerId,years,salary){const p=team.roster.find(x=>x.id===playerId);if(!p)throw new Error('Player not found');p.contractYears=clamp(Number(years)||1,1,6);p.salary=Math.max(.5,Number(salary)||p.salary);p.guaranteed=Number((p.salary*p.contractYears*.45).toFixed(1));p.morale=Math.min(99,p.morale+6);return p;}
export function releasePlayer(team,playerId){const i=team.roster.findIndex(p=>p.id===playerId);if(i<0)return null;const[p]=team.roster.splice(i,1);team.finances.expenses+=p.guaranteed*.25;return p;}
