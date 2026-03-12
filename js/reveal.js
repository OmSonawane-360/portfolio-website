/* REVEAL */
const obs=new IntersectionObserver(
  es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");}),
  {threshold:.07}
);
document.querySelectorAll(".reveal,.tl-item").forEach(el=>obs.observe(el));

