/* AI CHAT */
const qa={
  stack:"Om's stack: React.js, Node.js, Express.js, MongoDB for full-stack. Python, LangChain, LangGraph, FAISS, RAG Pipelines for AI/ML. Also Next.js, FastAPI, Firebase, Flutter, Figma. 💻",
  ai:"Om built a Codebasics Q&A System using LangChain + FAISS + Google GenAI — a RAG pipeline answering learner queries instantly. Also worked on NLP text classification and CV deep learning. 🤖",
  work:"Yes! Actively looking for full-time roles at Google, Amazon, Microsoft, Nvidia, Netflix and more. Available onsite and remote globally. 🚀",
  unique:"Om is a rare Hybrid Engineer — architects full-stack products AND builds the AI layer. From React frontends to RAG pipelines and LLM agents across the full modern stack. ⚡",
  exp:"Interned as Full-Stack Engineer (Jul–Dec 2025) building a production MVP. Freelancing since Nov 2023 across AI/ML, UI/UX, and full-stack projects. 📋",
  edu:"B.Tech CS from R.C. Patel Institute (2020–2025). Oracle OCI GenAI cert, Google GenAI cert, full AI/ML bootcamp from Udemy. 🎓"
};
function getR(q){
  q=q.toLowerCase();
  if(q.includes("stack")||q.includes("tech")||q.includes("skill"))return qa.stack;
  if(q.includes("ai")||q.includes("project")||q.includes("langchain")||q.includes("rag"))return qa.ai;
  if(q.includes("open")||q.includes("work")||q.includes("hire")||q.includes("job"))return qa.work;
  if(q.includes("unique")||q.includes("different"))return qa.unique;
  if(q.includes("experience")||q.includes("intern"))return qa.exp;
  if(q.includes("edu")||q.includes("college")||q.includes("cert"))return qa.edu;
  return "Om is a Full-Stack + AI Engineer in Pune — builds web apps AND intelligent AI systems. Ask about his projects, skills, or availability! 💡";
}
function addMsg(t,type){
  const b=document.getElementById("chatMsgs");
  const d=document.createElement("div");
  d.className="msg "+type;
  d.innerHTML=`<div class="msg-avatar">${type==="bot"?"AI":"You"}</div><div class="msg-bubble">${t}</div>`;
  b.appendChild(d);
  b.scrollTop=b.scrollHeight;
}
function showTyping(){
  const b=document.getElementById("chatMsgs");
  const d=document.createElement("div");
  d.className="msg bot";
  d.id="typing";
  d.innerHTML='<div class="msg-avatar">AI</div><div class="msg-bubble"><div class="typing"><span></span><span></span><span></span></div></div>';
  b.appendChild(d);
  b.scrollTop=b.scrollHeight;
}
function sendMsg(){
  const i=document.getElementById("chatIn");
  const q=i.value.trim();
  if(!q)return;
  addMsg(q,"user");
  i.value="";
  showTyping();
  setTimeout(()=>{
    const t=document.getElementById("typing");
    if(t)t.remove();
    addMsg(getR(q),"bot");
  },700+Math.random()*500);
}
document.getElementById("chatIn").addEventListener("keydown",e=>{if(e.key==="Enter")sendMsg();});
function askQ(el){
  document.getElementById("chatIn").value=el.textContent;
  sendMsg();
}

