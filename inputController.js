export class InputController{
  constructor(canvas){this.keys=new Set();this.justPressed=new Set();this.pointer={x:0,y:0,down:false};this.vector={x:0,y:0};this.handlers=[];this.onKeyDown=e=>{if(!this.keys.has(e.code))this.justPressed.add(e.code);this.keys.add(e.code);if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault()};this.onKeyUp=e=>this.keys.delete(e.code);window.addEventListener('keydown',this.onKeyDown,{passive:false});window.addEventListener('keyup',this.onKeyUp);if(canvas){canvas.addEventListener('pointerdown',e=>{this.pointer.down=true;this.updatePointer(e,canvas)});canvas.addEventListener('pointermove',e=>this.updatePointer(e,canvas));window.addEventListener('pointerup',()=>this.pointer.down=false)} }
  updatePointer(e,canvas){const r=canvas.getBoundingClientRect();this.pointer.x=(e.clientX-r.left)*canvas.width/r.width;this.pointer.y=(e.clientY-r.top)*canvas.height/r.height}
  axis(){let x=0,y=0;if(this.keys.has('KeyA')||this.keys.has('ArrowLeft'))x--;if(this.keys.has('KeyD')||this.keys.has('ArrowRight'))x++;if(this.keys.has('KeyW')||this.keys.has('ArrowUp'))y--;if(this.keys.has('KeyS')||this.keys.has('ArrowDown'))y++;x+=this.vector.x;y+=this.vector.y;const l=Math.hypot(x,y)||1;return{x:x/l,y:y/l}}
  consume(code){const hit=this.justPressed.has(code);this.justPressed.delete(code);return hit}
  setTouchVector(x,y){this.vector={x,y}}
  trigger(code){this.justPressed.add(code)}
  endFrame(){this.justPressed.clear()}
  destroy(){window.removeEventListener('keydown',this.onKeyDown);window.removeEventListener('keyup',this.onKeyUp)}
}
