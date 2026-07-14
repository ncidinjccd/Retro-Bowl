export function payroll(team){return Number(team.roster.reduce((s,p)=>s+p.salary,0).toFixed(1));}
export function capSpace(team){return Number((team.cap-payroll(team)).toFixed(1));}
export function canAfford(team,player){return capSpace(team)>=player.salary;}
