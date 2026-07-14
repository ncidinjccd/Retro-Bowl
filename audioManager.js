let ctx;
export function beep(freq=440,duration=.08,volume=.05){try{ctx??=new (window.AudioContext||window.webkitAudioContext)();const o=ctx.createOscillator(),g=ctx.createGain();o.frequency.value=freq;g.gain.value=volume;o.connect(g).connect(ctx.destination);o.start();g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+duration);o.stop(ctx.currentTime+duration)}catch{}}
export function crowdBurst(level=1){beep(120+level*30,.15,.025*level)}
