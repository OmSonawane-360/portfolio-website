/* CURSOR */
(function(){
  const dot=document.getElementById("cursorDot")||document.getElementById("cursor");
  const ring=document.getElementById("cursorOutline")||document.getElementById("cursor-ring");
  if(!dot||!ring)return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+"px";dot.style.top=my+"px";});
  (function aR(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(aR);})();
  document.querySelectorAll("a,button,.chip,.proj-card,.bc,.ct-link").forEach(el=>{
    el.addEventListener("mouseenter",()=>{dot.style.width="18px";dot.style.height="18px";ring.style.width="48px";ring.style.height="48px";ring.style.borderColor="rgba(255,255,255,.6)";});
    el.addEventListener("mouseleave",()=>{dot.style.width="8px";dot.style.height="8px";ring.style.width="32px";ring.style.height="32px";ring.style.borderColor="rgba(255,255,255,.35)";});
  });
})();

