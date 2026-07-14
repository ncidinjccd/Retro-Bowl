const routes=['Slant','Curl','Out','Post','Corner','Go','Drag','Wheel','Screen'];
export const OFFENSIVE_PLAYS = Array.from({length:100},(_,i)=>({
 id:`O${String(i+1).padStart(3,'0')}`,
 name:i%4===0?`Power ${i%2?'Right':'Left'}`:`${routes[i%routes.length]} Concept ${Math.floor(i/routes.length)+1}`,
 type:i%4===0?'run':'pass',
 risk:1+(i%5),
 yards:i%4===0?4+(i%7):6+(i%18),
 description:i%4===0?'A physical gap run with a pulling blocker.':'A layered route concept attacking multiple zones.'
}));
const coverages=['Cover 1','Cover 2','Cover 3','Cover 4','Nickel Man','Zone Blitz','Edge Blitz','Spy','Goal Line','Prevent'];
export const DEFENSIVE_PLAYS = Array.from({length:40},(_,i)=>({id:`D${String(i+1).padStart(3,'0')}`,name:`${coverages[i%coverages.length]} ${Math.floor(i/coverages.length)+1}`,type:i%5===0?'blitz':'coverage',aggression:1+(i%5)}));
