const data={
student:{name:"Anuj Sharma",id:"MCA2026-042",program:"MCA",semester:"Semester 1",email:"anuj.student@example.com",department:"Computer Applications",year:"2026–27"},
cgpa:8.42,sgpa:8.67,attendance:86.4,
subjects:[
{name:"Web Technology",faculty:"Dr. Mehta",credits:4,attendance:92,grade:"A"},
{name:"Advanced DSA",faculty:"Prof. Sharma",credits:4,attendance:88,grade:"A-"},
{name:"Information Security",faculty:"Dr. Kapoor",credits:4,attendance:84,grade:"B+"},
{name:"Salesforce",faculty:"Mr. Verma",credits:3,attendance:81,grade:"B+"},
{name:"Operating Systems",faculty:"Dr. Singh",credits:4,attendance:86,grade:"A-"},
{name:"Research Methodology",faculty:"Dr. Joshi",credits:3,attendance:90,grade:"A"}],
placement:{readiness:78,companies:24,interviews:3,highest:"18 LPA"},
applications:[
{company:"Accenture",role:"Software Associate",package:"6.5 LPA",date:"02 Oct 2026",status:"Interview"},
{company:"TCS",role:"System Engineer",package:"7.2 LPA",date:"28 Sep 2026",status:"Applied"},
{company:"Infosys",role:"Technology Analyst",package:"8 LPA",date:"24 Sep 2026",status:"Selected"},
{company:"Wipro",role:"Project Engineer",package:"6 LPA",date:"20 Sep 2026",status:"Applied"}],
skills:[
{name:"JavaScript",area:"Frontend Development",score:85,level:"Advanced"},
{name:"C++ & DSA",area:"Programming",score:78,level:"Intermediate"},
{name:"DBMS & MySQL",area:"Database",score:72,level:"Intermediate"},
{name:"UI/UX Design",area:"Design",score:68,level:"Intermediate"},
{name:"Python",area:"Programming",score:61,level:"Learning"},
{name:"HTML & CSS",area:"Web Development",score:90,level:"Advanced"}],
events:[
"Tech Symposium 2026 — October 12, 10:00 AM, Auditorium",
"Hackathon 3.0 — October 16, 9:00 AM, Innovation Lab",
"Placement Drive — October 21, 11:00 AM, Seminar Hall",
"Campus Fest — October 25, 5:00 PM, Main Ground"],
notices:[
"Mid-Semester Examination Schedule Released",
"Web Technology assignment deadline extended to October 12, 2026",
"Registrations open for Hackathon 3.0",
"Infosys recruitment results available"]};

const saved=JSON.parse(localStorage.getItem("campus360Applications")||"null");
if(saved)data.applications=saved;

const nav=document.querySelectorAll(".nav-item");
const pages=document.querySelectorAll(".page");
function showPage(id){
 pages.forEach(p=>p.classList.remove("active-page"));
 document.getElementById(id)?.classList.add("active-page");
 nav.forEach(n=>n.classList.toggle("active",n.dataset.page===id));
 document.getElementById("sidebar").classList.remove("open");
 window.scrollTo({top:0,behavior:"smooth"});
}
nav.forEach(n=>n.onclick=()=>showPage(n.dataset.page));
document.getElementById("mobileMenu").onclick=()=>document.getElementById("sidebar").classList.toggle("open");

function toast(msg){
 const el=document.getElementById("toast");el.textContent=msg;el.classList.add("show");
 setTimeout(()=>el.classList.remove("show"),2500);
}

function renderSubjects(){
 document.getElementById("subjectTable").innerHTML=data.subjects.map(s=>`<tr><td><b>${s.name}</b></td><td>${s.faculty}</td><td>${s.credits}</td><td>${s.attendance}%</td><td><span class="pill blue">${s.grade}</span></td><td><span class="pill green">${s.attendance>=85?"Good":"Improve"}</span></td></tr>`).join("");
 document.getElementById("attendanceList").innerHTML=data.subjects.map(s=>`<div class="attendance-row"><div><b>${s.name}</b><small>${s.attendance>=85?"Attendance is healthy":"Consider attending upcoming classes"}</small><b>${s.attendance}%</b></div><div class="bar"><i style="width:${s.attendance}%"></i></div></div>`).join("");
}
renderSubjects();

function renderSkills(){
 document.getElementById("skillGrid").innerHTML=data.skills.map(s=>`<div class="card skill-card"><header><div class="skill-icon">${s.name.slice(0,3).toUpperCase()}</div><b>${s.score}%</b></header><h3>${s.name}</h3><p>${s.area}</p><div class="bar"><i style="width:${s.score}%"></i></div><small>${s.level}</small></div>`).join("");
}
renderSkills();

function renderApps(filter="all"){
 const list=filter==="all"?data.applications:data.applications.filter(x=>x.status===filter);
 document.getElementById("appTable").innerHTML=list.length?list.map((a,i)=>`<tr><td><b>${esc(a.company)}</b></td><td>${esc(a.role)}</td><td>${esc(a.package)}</td><td>${esc(a.date)}</td><td><span class="pill ${a.status==="Selected"?"green":"blue"}">${esc(a.status)}</span></td><td><button class="link" onclick="deleteApp(${data.applications.indexOf(a)})">Delete</button></td></tr>`).join(""):`<tr><td colspan="6" style="text-align:center">No applications found.</td></tr>`;
 document.getElementById("appCount").textContent=data.applications.length;
}
renderApps();
document.getElementById("appFilter").onchange=e=>renderApps(e.target.value);
function saveApps(){localStorage.setItem("campus360Applications",JSON.stringify(data.applications))}
function deleteApp(i){if(confirm("Delete this application?")){data.applications.splice(i,1);saveApps();renderApps();toast("Application deleted.");}}

document.getElementById("addApp").onclick=()=>document.getElementById("appModal").classList.add("show");
document.getElementById("closeModal").onclick=()=>document.getElementById("appModal").classList.remove("show");
document.getElementById("appForm").onsubmit=e=>{
 e.preventDefault();
 const d=new Date();
 data.applications.push({
  company:document.getElementById("company").value.trim(),
  role:document.getElementById("role").value.trim(),
  package:document.getElementById("package").value.trim(),
  status:document.getElementById("status").value,
  date:d.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})
 });
 saveApps();renderApps();e.target.reset();document.getElementById("appModal").classList.remove("show");toast("Application added.");
};

function registerEvent(btn){btn.textContent="Registered ✓";btn.style.background="#ecfdf5";btn.style.color="#059669";toast("Event registration saved.");}

function esc(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

/* AI CHAT */
const aiFab=document.getElementById("aiFab"),aiChat=document.getElementById("aiChat"),closeAi=document.getElementById("closeAi");
aiFab.onclick=()=>{aiChat.classList.add("open");document.getElementById("chatInput").focus()};
closeAi.onclick=()=>aiChat.classList.remove("open");

document.querySelectorAll(".suggestions button").forEach(b=>b.onclick=()=>{document.getElementById("chatInput").value=b.textContent;document.getElementById("chatForm").requestSubmit()});

const messages=[];
document.getElementById("chatForm").onsubmit=async e=>{
 e.preventDefault();
 const input=document.getElementById("chatInput"),q=input.value.trim();
 if(!q)return;
 input.value="";
 addMessage(q,"user");
 messages.push({role:"user",content:q});
 const typing=addMessage("Thinking...","bot",true);
 try{
  const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
   message:q,
   history:messages.slice(-10),
   campusData:data,
   currentPage:document.querySelector(".page.active-page")?.id||"dashboard"
  })});
  const out=await res.json();
  typing.remove();
  if(!res.ok)throw new Error(out.error||"Server error");
  addMessage(out.reply,"bot");
  messages.push({role:"assistant",content:out.reply});
 }catch(err){
  typing.remove();
  addMessage("I couldn't connect to the AI server. Make sure the Node.js server is running and your OPENAI_API_KEY is configured.","bot");
 }
};

function addMessage(text,role,typing=false){
 const wrap=document.createElement("div");wrap.className=`msg ${role}`;
 const bubble=document.createElement("div");bubble.className="bubble"+(typing?" typing":"");
 bubble.innerHTML=role==="bot"?formatAI(text):esc(text);
 wrap.appendChild(bubble);document.getElementById("chatMessages").appendChild(wrap);
 const box=document.getElementById("chatMessages");box.scrollTop=box.scrollHeight;return wrap;
}
function formatAI(text){return esc(text).replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/\n/g,"<br>");}

/* Search navigates to the most relevant section */
document.getElementById("globalSearch").onkeydown=e=>{
 if(e.key!=="Enter")return;
 const q=e.target.value.toLowerCase();
 const map=[["attendance","attendance"],["cgpa","results"],["result","results"],["timetable","timetable"],["class","timetable"],["placement","placements"],["company","placements"],["skill","skills"],["event","events"],["notice","notices"],["profile","profile"],["subject","academics"],["academic","academics"]];
 const found=map.find(x=>q.includes(x[0]));
 if(found){showPage(found[1]);toast(`Opened ${found[1]}.`)}else{toast("Ask Campus360 AI for a detailed answer.");aiChat.classList.add("open");document.getElementById("chatInput").value=e.target.value;document.getElementById("chatInput").focus();}
};