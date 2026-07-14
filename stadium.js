const UPGRADES={Seats:{cost:18,field:'stadiumLevel'},Training:{cost:20,field:'trainingLevel'},Medical:{cost:22,field:'medicalLevel'}};
export function buyUpgrade(team,type){const u=UPGRADES[type];if(!u)throw new Error('Unknown upgrade');if(team.finances.cash<u.cost)throw new Error('Not enough cash');team.finances.cash-=u.cost;team.finances[u.field]++;return u;}
export {UPGRADES};
