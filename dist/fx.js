"use strict";
// Lightweight HUD-independent canvas effects. No assets, spritesheets or audio downloads.
// Uses the same orthographic 480 × 222 coordinates as the Three.js camera.
(function(){
  let canvas=null, ctx=null, host=null, width=0, height=0, scale=1, last=-1000;
  const isReduced=typeof matchMedia==='function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const colors=['#ffbf85','#b2f5c9','#ffe0b0','#c6e9fb','#ffc38e','#eac4f2'];
  const seed=n=>{const x=Math.sin(n*91.7+11.3)*43758.5453;return x-Math.floor(x)};
  function attach(target){
    if(canvas && host===target && canvas.parentNode===target)return;
    if(canvas)canvas.remove();
    host=target;canvas=document.createElement('canvas');canvas.className='flight-fx';
    canvas.setAttribute('aria-hidden','true');canvas.style.pointerEvents='none';
    target.appendChild(canvas);ctx=canvas.getContext('2d',{alpha:true});width=height=0;
  }
  function sync(){
    const w=host.clientWidth,h=host.clientHeight;
    if(!w || !h)return false;
    if(w===width && h===height)return true;
    width=w;height=h;scale=Math.min(window.devicePixelRatio||1,1.5);
    canvas.width=Math.max(1,Math.round(width*scale));canvas.height=Math.max(1,Math.round(height*scale));
    canvas.style.width=width+'px';canvas.style.height=height+'px';
    ctx.setTransform(scale,0,0,scale,0,0);return true;
  }
  function position(x,y){
    const ratio=width/height,worldWidth=Math.max(480,222*ratio),worldHeight=Math.max(222,480/ratio);
    return [(x-240)/worldWidth*width+width/2,(y-111)/worldHeight*height+height/2];
  }
  function orb(x,y,r,color,opacity){
    ctx.globalAlpha=opacity;ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
  }
  function stroke(x,y,length,color,opacity,thickness=1){
    ctx.globalAlpha=opacity;ctx.strokeStyle=color;ctx.lineWidth=thickness;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+length,y);ctx.stroke();ctx.globalAlpha=1;
  }
  function ring(x,y,r,color,alpha=1){
    ctx.strokeStyle=color;ctx.lineWidth=2;ctx.globalAlpha=alpha;
    ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
  }
  window.resetFlightEffects=function(){
    if(canvas && ctx){ctx.clearRect(0,0,width,height);canvas.hidden=true;}
  };
  window.drawFlightEffects=function(run,level,particles,target){
    if(!run||!level||!target||target.hidden)return;
    const tick=performance.now();if(tick-last< (isReduced?65:29))return;last=tick;
    attach(target);if(!ctx||!sync())return;canvas.hidden=false;
    ctx.clearRect(0,0,width,height);
    const t=run.t||0;
    // Distant ambient motes use deterministic phase, not per-frame allocations.
    const light=colors[level.region%colors.length];
    for(let i=0;i<(isReduced?7:20);i++){
      const x=((seed(i+level.id*8)*width-t*(5+seed(i*7)*11))%(width+40)+width+40)%(width+40);
      const y=height*(.15+.7*seed(i*13+level.id));
      orb(x,y,1+seed(i+33)*1.6,light,.09+.15*seed(i+5));
    }
    // Motion streaks respond to dodges, without ever hiding hitboxes.
    if(run.p){
      const [px,py]=position(run.p.x,run.p.y);
      if(run.p.dash>0){
        for(let i=0;i<9;i++){
          const offset=(i+1)*11,side=(i%2===0?1:-1)*(3+seed(i*11)*18);
          stroke(px-offset,py+side,-(12+seed(i*3)*32),'#fae7b2',.25+seed(i)*.28,1.2);
        }
        ring(px,py,19+Math.sin(t*18)*4,'#fff2d0',.38);
      }
      if(run.p.inv>.05){
        ring(px,py,20,'#f9e5a5',Math.min(.35,run.p.inv*.17));
      }
    }
    // Combat projectiles gain a subtle ember trail; bullet speed stays unchanged.
    for(const s of (run.shots||[]).slice(-22)){
      const [x,y]=position(s.x,s.y);
      if(x<0||x>width||y<0||y>height)continue;
      stroke(x-9,y,9,s.special?'#9de4fe':'#ffab65',.48,2);
      orb(x,y,s.special?3.6:2.5,s.special?'#a0f7ff':'#fff0c4',.6);
    }
    for(const b of (run.bullets||[]).slice(-26)){
      const [x,y]=position(b.x,b.y);
      if(x<0||x>width||y<0||y>height)continue;
      const direction=Math.sign(b.vx||-1);
      stroke(x-direction*10,y,direction*10,'#ff8ca1',.28,1.6);
      const hazardColors={thorn:'#b7e9a8',crystal:'#d7c7ff',frost:'#a4edff',lava:'#ff9876',shadow:'#e3b5f7',ember:'#ffd18a'};
      orb(x,y,b.kind?3:2.1,hazardColors[b.kind]||'#ffc0a4',b.kind?.85:.47);
    }
    // Hits and pickups reuse the existing capped particle array.
    for(const p of (particles||[]).slice(-40)){
      const [x,y]=position(p.x,p.y),a=Math.min(.75,Math.max(0,(p.life||0)*1.9));
      orb(x,y,1.2+(1-a)*2.8,p.col||'#ffe0a5',a);
    }
    // Small telegraphs for archers, sentinels and charging brutes.
    // These signals stay inside the already capped FX canvas and never affect hitboxes.
    let signals=0;
    for(const enemy of (run.entities||[])) {
      if(signals>=12)break;
      if(enemy.dead || enemy.ai?.state!=='windup')continue;
      const [ex,ey]=position(enemy.x,enemy.y);
      if(ex<0 || ex>width || ey<0 || ey>height)continue;
      signals++;
      const intensity=.45+.25*Math.sin(t*13+signals);
      ring(ex,ey,enemy.kind==='bruto'?22:17,'#ffc475',intensity);
      const [,aimY]=position(enemy.x,enemy.ai.aimY??enemy.y);
      stroke(ex-35,aimY,30,'#ffbb84',.28,1.4);
    }
    const boss=(run.entities||[]).find(e=>e.kind==='boss'&&!e.dead);
    if(boss){
      const [x,y]=position(boss.x,boss.y);
      const realmColors=['#ffb36d','#b6e1a0','#d9c6ff','#a5e9ff','#ff9675','#e0a5e5'];
      const aura=realmColors[(level.id/4-1)|0]||'#ffe9bd';
      // Weak spots are tied to actual boss armor hitboxes and disappear when destroyed.
      for(const part of (boss.parts||[])) {
        const [cx,cy]=position(boss.x-17,boss.y+part.offsetY);
        if(part.broken){
          ring(cx,cy,5,'#74636f',.42);
          continue;
        }
        const pulse=Math.sin(t*8+(part.id==='upper'?0:Math.PI))*1.5;
        ring(cx,cy,10+pulse,aura,.73);
        orb(cx,cy,5.4,aura,.75);
        const fraction=Math.max(0,part.hp/part.max);
        stroke(cx-8,cy+13,16*fraction,'#fff0d4',.86,2.3);
      }
      if(boss.state==='transform') {
        const pulse=(Math.sin(t*22)+1)*.5;
        ring(x,y,34+pulse*16,aura,.65);
        ring(x,y,51+pulse*14,'#fff4da',.19+pulse*.3);
        for(let i=0;i<7;i++){
          const theta=t*2+i*Math.PI*2/7;
          orb(x+Math.cos(theta)*47,y+Math.sin(theta)*27,2.5,aura,.7);
        }
      }

      if(boss.state==='warning'){
        const pulse=(Math.sin(t*15)+1)/2;
        ring(x,y,25+pulse*6,aura,.5+pulse*.24);
        ring(x,y,38+pulse*9,'#ff7f65',.15+pulse*.13);
      }else if(boss.state==='recover'){
        ring(x,y,31,'#9fe8bf',.43);
        for(let j=0;j<6;j++){
          const angle=t*1.6+j*Math.PI/3;
          orb(x+Math.cos(angle)*26,y+Math.sin(angle)*19,2.1,'#bdffcd',.7);
        }
      }
    }
  };
})();
