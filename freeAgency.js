import {generatePlayer} from '../players/playerGenerator.js';
import {POSITIONS} from '../constants.js';
import {pick,randomInt} from '../utils/random.js';
import {canAfford} from './salaryCap.js';
export function refreshFreeAgents(state){state.league.freeAgents=Array.from({length:60},()=>generatePlayer(pick(POSITIONS),null,randomInt(23,33))).map(p=>({...p,contractYears:1}));}
export function signFreeAgent(state,teamId,playerId){const team=state.league.teams.find(t=>t.id===teamId),i=state.league.freeAgents.findIndex(p=>p.id===playerId);if(!team||i<0)throw new Error('Invalid signing');const player=state.league.freeAgents[i];if(!canAfford(team,player))throw new Error('Not enough cap space');if(team.roster.length>=58)throw new Error('Roster limit reached');state.league.freeAgents.splice(i,1);player.teamId=teamId;team.roster.push(player);return player;}
