export const money=v=>`$${Number(v).toFixed(1)}M`;
export const record=t=>`${t.wins}-${t.losses}${t.ties?`-${t.ties}`:''}`;
export function ordinal(n){const s=['th','st','nd','rd'],v=n%100;return `${n}${s[(v-20)%10]||s[v]||s[0]}`;}
export function timeString(seconds){const s=Math.max(0,Math.ceil(seconds));return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;}
