/* NAV + MENU */
const nb=document.getElementById("nav");
window.addEventListener("scroll",()=>{
  nb.classList.toggle("scrolled",window.scrollY>20);
  let c="";
  document.querySelectorAll("section[id]").forEach(s=>{if(window.scrollY>=s.offsetTop-120)c=s.id;});
  document.querySelectorAll(".nav-links a").forEach(a=>{
    const h=a.getAttribute("href");
    if(!h)return;
    a.classList.toggle("active",h==="#"+c);
  });
});
function tick(){
  const n=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"}));
  document.getElementById("navTime").textContent=String(n.getHours()).padStart(2,"0")+":"+String(n.getMinutes()).padStart(2,"0")+" IST";
}
tick();
setInterval(tick,1000);
document.getElementById("fyear").textContent=new Date().getFullYear();

/* THEME TOGGLE */
(function(){
  const btn=document.getElementById("themeToggle");
  if(!btn)return;
  const root=document.documentElement;
  const stored=localStorage.getItem("theme");
  if(stored==="light"){root.setAttribute("data-theme","light");btn.textContent="Dark";}
  btn.addEventListener("click",()=>{
    const isLight=root.getAttribute("data-theme")==="light";
    if(isLight){
      root.removeAttribute("data-theme");
      localStorage.setItem("theme","dark");
      btn.textContent="Light";
    }else{
      root.setAttribute("data-theme","light");
      localStorage.setItem("theme","light");
      btn.textContent="Dark";
    }
  });
})();

function toggleMenu(){
  const m=document.getElementById("mobMenu"),h=document.getElementById("hamBtn");
  m.classList.toggle("open");
  h.classList.toggle("open");
}
function closeMenu(){
  document.getElementById("mobMenu").classList.remove("open");
  document.getElementById("hamBtn").classList.remove("open");
}

