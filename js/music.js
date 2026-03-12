/* MUSIC PLAYER */
let isPlaying=false,progressInt=null,progress=0;
const audioEl=document.getElementById("bgTrack");
const tracks=[
  {name:"lofi hip hop radio",artist:"Lofi Girl · chill beats"},
  {name:"coffee shop ambience",artist:"Study Beats · lo-fi"},
  {name:"night city vibes",artist:"Chill Hop · beats"}
];
let ti=0;

function togglePlayer(){
  document.getElementById("playerExpand").classList.toggle("open");
}
function togglePlay(e){
  e.stopPropagation();
  isPlaying=!isPlaying;
  const vinyl=document.getElementById("vinyl");
  const icon=document.getElementById("playIcon");
  const wave=document.getElementById("playerWave");
  if(isPlaying){
    if(audioEl){audioEl.play();}
    vinyl.classList.add("spinning");
    wave.classList.remove("paused");
    icon.innerHTML='<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    startProgress();
  } else {
    if(audioEl){audioEl.pause();}
    vinyl.classList.remove("spinning");
    wave.classList.add("paused");
    icon.innerHTML='<polygon points="5,3 19,12 5,21"/>';
    clearInterval(progressInt);
  }
}
function startProgress(){
  clearInterval(progressInt);
  if(audioEl){
    progressInt=setInterval(()=>{
      const dur=audioEl.duration||0;
      const cur=audioEl.currentTime||0;
      progress=dur? (cur/dur)*100 : 0;
      if(progress>=100){progress=0;nextTrack();}
      document.getElementById("progressBar").style.width=progress+"%";
    },200);
  } else {
    progressInt=setInterval(()=>{
      progress+=0.15;
      if(progress>=100){progress=0;nextTrack();}
      document.getElementById("progressBar").style.width=progress+"%";
    },200);
  }
}
function nextTrack(){
  ti=(ti+1)%tracks.length;
  document.getElementById("trackName").textContent=tracks[ti].name;
}

