import {Router} from './ui/router.js';
import {renderScreen} from './ui/screens.js';
import {loadSettings,applySettings} from './state/settingsManager.js';
const app=document.querySelector('#app');const settings=loadSettings();applySettings(settings);const ctx={app,state:null,settings,router:null,toast(message){console.info(message)}};ctx.router=new Router(app,(route,sub)=>renderScreen(route,sub,ctx));ctx.router.route();if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(console.warn));
