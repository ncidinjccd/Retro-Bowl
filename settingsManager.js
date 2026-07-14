import {SETTINGS_KEY} from '../config.js';
const defaults={difficulty:'Pro',graphics:'Standard',music:35,effects:70,stadium:70,replays:true,cameraShake:true,reducedMotion:false,highContrast:false,colorblind:false,uiScale:1,defenseMode:'play'};
export function loadSettings(){try{return{...defaults,...JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}')}}catch{return{...defaults}}}
export function saveSettings(settings){localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings));applySettings(settings)}
export function applySettings(s){document.documentElement.style.setProperty('--ui-scale',String(s.uiScale||1));document.body.classList.toggle('reduced-motion',!!s.reducedMotion);document.body.classList.toggle('high-contrast',!!s.highContrast);document.body.classList.toggle('colorblind',!!s.colorblind)}
export {defaults as DEFAULT_SETTINGS};
