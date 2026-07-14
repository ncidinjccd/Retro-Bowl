import {generateLeague} from '../league/leagueGenerator.js';
import {initializeSeason} from '../league/seasonManager.js';
import {loadSettings} from './settingsManager.js';
import {refreshFreeAgents} from '../management/freeAgency.js';
export function createNewGame(userTeamId,slot=1){const league=generateLeague();const state={slot,userTeamId,league,schedule:[],draftClass:[],trainingFocus:'Balanced',settings:loadSettings(),news:[{title:'Welcome to Ironfield Dynasty',body:'Build a champion through smart management and decisive play.'}],meta:{createdAt:new Date().toISOString(),lastSaved:null,version:'1.0.0',playTime:0},debugUnlocked:false};initializeSeason(state);refreshFreeAgents(state);return state;}
