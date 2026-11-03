// retourne [{pre,stem,end}] pour mise en valeur
function conj(v,t){const d=V[v],inf=v,st=inf.slice(0,-2);let r=[];
 for(let i=0;i<6;i++){
  if(t==="perf"){const p=d.part||st+(d.t==="ar"?"ado":"ido");r.push({pre:HAB[i]+" ",stem:"",end:"",full:p,hl:HAB[i]+" "});r[i]={a:HAB[i],b:" "+p,hl:HAB[i]};continue}
  if(t==="fut"){const s=d.fs||inf;r.push({a:s,b:E.fut[i],hl:E.fut[i]});continue}
  if(d[t]){r.push({a:d[t][i],b:"",hl:d[t][i],irr:1});continue}
  r.push({a:st,b:E[t][d.t][i],hl:E[t][d.t][i]});
 }return r}
const flat=c=>c.a+c.b;
let tense="pres",verb="hablar",qt="pres",cur,ok=0,n=0;
const $=id=>document.getElementById(id);
function tabs(el,fn,sel){el.innerHTML="";for(const k in T){const b=document.createElement("button");b.textContent=T[k].n;b.className=k===sel()?"on":"";b.onclick=()=>fn(k);el.appendChild(b)}}
function render(){
 tabs($("tabs"),k=>{tense=k;render()},()=>tense);
 const t=T[tense],d=V[verb];
 $("rule").innerHTML=`<h2>${t.n}</h2><div class="tag">En français : ${t.fr}</div><p>${t.use}</p><p><b>Mots-signaux :</b> <i>${t.mk}</i></p><p>${t.ex.map(e=>"• "+e).join("<br>")}</p>
 <b>Terminaisons réguliers :</b><div class="endings">${["ar","er","ir"].map(g=>`<span><b>-${g}</b> : ${t.end[g]}</span>`).join("")}</div>`;
 $("verbs").innerHTML="";
 for(const k in V){const b=document.createElement("button");b.textContent=k+(V[k].irr?" ★":"");b.className=k===verb?"on":"";b.onclick=()=>{verb=k;render()};$("verbs").appendChild(b)}
 $("vt").textContent=`${verb} (${d.fr})${d.irr?" – irrégulier ★":""}`;
 const c=conj(verb,tense);
 $("tbl").innerHTML=c.map((x,i)=>{const pron=P[i][0];
  const w=x.hl?`${x.a.endsWith(x.hl)&&!x.b?x.a.slice(0,-x.hl.length)+`<mark>${x.hl}</mark>`:x.a}${x.b&&tense==="perf"?x.b:""}`:"";
  let html;
  if(tense==="perf")html=`<mark>${x.a}</mark>${x.b}`;
  else if(tense==="fut")html=`${x.a}<mark>${x.b}</mark>`;
  else if(x.irr)html=`<mark>${x.a}</mark>`;
  else html=`${x.a}<mark>${x.b}</mark>`;
  return `<tr><td class="p">${pron}<small>${P[i][1]}</small></td><td>${html}</td></tr>`}).join("");
}
function ptabs(){tabs($("ptabs"),k=>{qt=k;ptabs();next()},()=>qt)}
function next(){const vs=Object.keys(V),v=vs[Math.random()*vs.length|0],i=Math.random()*6|0;cur={v,i,t:qt,a:flat(conj(v,qt)[i])};
 $("q").innerHTML=`<b>${T[qt].n}</b><br>${v} (${V[v].fr}) → <b>${P[i][0].split(" / ")[0]}</b> <span class="tag">(${P[i][1].split(" / ")[0]})</span>`;
 $("ans").value="";$("msg").textContent="";$("msg").className="msg";$("ans").focus()}
const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
function check(){const a=$("ans").value.trim().toLowerCase();if(!a)return;n++;const m=$("msg");
 if(a===cur.a){ok++;m.className="msg ok";m.textContent="¡Correcto! ✔️"}
 else if(norm(a)===norm(cur.a)){m.className="msg ko";m.textContent=`Presque ! Attention aux accents : ${cur.a}`}
 else{m.className="msg ko";m.textContent=`✗ La bonne réponse : ${cur.a}`}
 $("score").textContent=`Score : ${ok} / ${n}`;setTimeout(next,1600)}
["á","é","í","ó","ú","ñ"].forEach(c=>{const b=document.createElement("button");b.textContent=c;b.onclick=()=>{$("ans").value+=c;$("ans").focus()};$("acc").appendChild(b)});
$("go").onclick=check;$("ans").onkeydown=e=>{if(e.key==="Enter")check()};
function mode(p){$("learn").classList.toggle("hide",p);$("play").classList.toggle("hide",!p);$("mLearn").className=p?"":"on";$("mPlay").className=p?"on":"";if(p){ptabs();next()}}
$("mLearn").onclick=()=>mode(false);$("mPlay").onclick=()=>mode(true);
render();
