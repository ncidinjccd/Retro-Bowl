export class Router{
  constructor(app,render){this.app=app;this.render=render;this.cleanup=null;window.addEventListener('hashchange',()=>this.route());}
  navigate(route,sub=''){location.hash=`#/${route}${sub?`/${sub}`:''}`;}
  route(){this.cleanup?.();const parts=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);const route=parts[0]||'home',sub=parts[1]||'';this.cleanup=this.render(route,sub)||null;window.scrollTo(0,0)}
}
