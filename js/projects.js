/* PROJECT TILT */
document.querySelectorAll(".proj-card").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`translateY(-4px) rotateX(${-y*3}deg) rotateY(${x*3}deg)`;
  });
  card.addEventListener("mouseleave",()=>{card.style.transform="";});
});

