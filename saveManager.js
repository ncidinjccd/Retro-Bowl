import {ACTIVE_SLOT_KEY,MAX_SAVE_SLOTS,SAVE_PREFIX,VERSION} from '../config.js';
import {validateSave} from '../utils/validation.js';
export function saveGame(state,slot=state.slot||1){state.slot=slot;state.meta={...state.meta,version:VERSION,lastSaved:new Date().toISOString(),playTime:Math.round((state.meta?.playTime||0)+1)};localStorage.setItem(`${SAVE_PREFIX}${slot}`,JSON.stringify(state));localStorage.setItem(ACTIVE_SLOT_KEY,String(slot));return state;}
export function loadGame(slot){const raw=localStorage.getItem(`${SAVE_PREFIX}${slot}`);if(!raw)return null;return validateSave(JSON.parse(raw));}
export function listSaves(){return Array.from({length:MAX_SAVE_SLOTS},(_,i)=>{const slot=i+1;try{const s=JSON.parse(localStorage.getItem(`${SAVE_PREFIX}${slot}`)||'null');return s?{slot,teamId:s.userTeamId,season:s.league?.season,week:s.league?.week,lastSaved:s.meta?.lastSaved,difficulty:s.settings?.difficulty,record:(()=>{const t=s.league?.teams?.find(x=>x.id===s.userTeamId);return t?`${t.wins}-${t.losses}`:'-'})()}:null}catch{return{slot,corrupt:true}}});}
export function deleteSave(slot){localStorage.removeItem(`${SAVE_PREFIX}${slot}`)}
export function duplicateSave(from,to){const raw=localStorage.getItem(`${SAVE_PREFIX}${from}`);if(raw)localStorage.setItem(`${SAVE_PREFIX}${to}`,raw)}
export function exportSave(slot){const raw=localStorage.getItem(`${SAVE_PREFIX}${slot}`);if(!raw)throw new Error('No save in this slot');return new Blob([raw],{type:'application/json'});}
export async function importSave(slot,file){const data=validateSave(JSON.parse(await file.text()));localStorage.setItem(`${SAVE_PREFIX}${slot}`,JSON.stringify(data));return data;}
