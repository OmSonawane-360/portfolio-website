/* CONTRIB GRID */
(function(){
  const g=document.getElementById("cgrid");
  if(!g)return;
  for(let i=0;i<364;i++){
    const c=document.createElement("div");c.className="cc";
    const r=Math.random();
    if(r>.85)c.classList.add("l4");
    else if(r>.65)c.classList.add("l3");
    else if(r>.45)c.classList.add("l2");
    else if(r>.28)c.classList.add("l1");
    g.appendChild(c);
  }
})();

