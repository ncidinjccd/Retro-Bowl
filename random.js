export function clamp(value,min,max){return Math.max(min,Math.min(max,value));}
export function randomInt(min,max,rng=Math.random){return Math.floor(rng()*(max-min+1))+min;}
export function pick(list,rng=Math.random){return list[Math.floor(rng()*list.length)];}
export function shuffle(list,rng=Math.random){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function weightedPick(entries,rng=Math.random){const total=entries.reduce((s,e)=>s+e.weight,0);let r=rng()*total;for(const e of entries){r-=e.weight;if(r<=0)return e.value;}return entries.at(-1).value;}
export function uid(prefix='id'){return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`;}
export function hashString(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
export function mulberry32(seed){return function(){let t=seed+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
