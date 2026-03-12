/* CONTACT FORM */
(function(){
  if(window.emailjs){
    emailjs.init("YOUR_PUBLIC_KEY_HERE");
  }
})();

function handleForm(e){
  e.preventDefault();
  const form=e.target;
  const b=form.querySelector("button[type=submit]");
  const originalHtml=b.innerHTML;

  const name=form.name.value.trim();
  const email=form.email.value.trim();
  const subject=form.subject.value.trim();
  const message=form.message.value.trim();

  if(!name||!email||!message){
    alert("Please fill in your name, email and a message.");
    return;
  }

  b.disabled=true;
  b.innerHTML="Sending...";
  b.style.background="rgba(255,255,255,.15)";
  b.style.color="#fff";

  if(!window.emailjs){
    b.innerHTML="✓ Sent!";
    setTimeout(()=>{
      b.innerHTML=originalHtml;
      b.style.background="#fff";
      b.style.color="#000";
      b.disabled=false;
      form.reset();
    },3000);
    return;
  }

  const params={
    from_name:name,
    reply_to:email,
    subject:subject||"Portfolio contact",
    message:message
  };

  emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",params).then(()=>{
    b.innerHTML="✓ Sent!";
    setTimeout(()=>{
      b.innerHTML=originalHtml;
      b.style.background="#fff";
      b.style.color="#000";
      b.disabled=false;
      form.reset();
    },2500);
  }).catch(()=>{
    alert("There was a problem sending your message. Please try again later or email me directly.");
    b.innerHTML=originalHtml;
    b.style.background="#fff";
    b.style.color="#000";
    b.disabled=false;
  });
}

