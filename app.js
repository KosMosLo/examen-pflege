/* Examen Pflege – App-Logik */
var $=function(s){return document.querySelector(s)},app=$("#app"),S={d:{},q:{}};
try{var _p=JSON.parse(localStorage.getItem("ex")||"");if(_p&&typeof _p=="object")S=_p}catch(e){}
S.d=S.d||{};S.q=S.q||{};S.r=S.r||{};S.qs=S.qs||{};S.n=S.n||{};S.cards=Array.isArray(S.cards)?S.cards:[];
/* Zusatzinhalte zusammenführen */
if(typeof DX!="undefined")Object.keys(DX).forEach(function(k){D[k]=(D[k]||[]).concat(DX[k])});
if(typeof QB2!="undefined")Object.keys(QB2).forEach(function(k){QB[k]=(QB[k]||[]).concat(QB2[k])});
function sv(){try{localStorage.setItem("ex",JSON.stringify(S))}catch(e){}}
function esc(x){return String(x).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function shuf(a){var b=a.slice(),i,j,x;for(i=b.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));x=b[i];b[i]=b[j];b[j]=x}return b}
function deep(id){var d=D[id];return d?'<h3>Vertiefung</h3>'+d.map(function(s){return'<details style="margin:8px 0"><summary><b>'+esc(s[0])+'</b></summary><p>'+esc(s[1])+'</p></details>'}).join(""):''}

/* ---------- Fragen ---------- */
var ALLQ=[];
T.forEach(function(t){[t[4]].concat(QB[t[0]]||[]).forEach(function(q,i){ALLQ.push({q:q,t:t,k:t[0]+"#"+i})})});
function rec(k,ok){var s=S.qs[k]||(S.qs[k]={c:0,w:0});if(ok)s.c++;else s.w++;s.l=ok?1:0;sv()}
function qtype(q){return Array.isArray(q[2])?"m":q[2]==="o"?"o":"s"}
function qz(it,cb,exam){
var q=it.q,ty=qtype(q),d=document.createElement("div"),fin=0,btns=[],perm=shuf(q[1].map(function(_,i){return i})),ch=[];
d.innerHTML="<p><b>"+esc(q[0])+"</b></p>"+(ty=="m"?"<p class=m>Mehrere Antworten sind richtig. Wähle alle richtigen und bestätige.</p>":ty=="o"?"<p class=m>Tippe die Schritte in der richtigen Reihenfolge an.</p>":"");
function done(ok,extra){fin=1;rec(it.k,ok);if(!exam){var f=document.createElement("div");f.className="fb";f.textContent=(ok?"Richtig. ":"Nicht ganz. ")+(extra||"")+q[3];d.appendChild(f)}if(cb)cb(ok)}
perm.forEach(function(oi,p){var b=document.createElement("button");b.className="opt";b.textContent=q[1][oi];btns.push(b);
b.onclick=function(){if(fin)return;
if(ty=="s"){var ok=oi==q[2];if(exam){b.classList.add("sel")}else{b.classList.add(ok?"ok":"no");btns[perm.indexOf(q[2])].classList.add("ok")}done(ok)}
else if(ty=="m"){b.classList.toggle("sel")}
else{if(b.dataset.u)return;ch.push(oi);b.dataset.u=1;b.textContent=ch.length+". "+q[1][oi];b.classList.add("sel");
if(ch.length==q[1].length){var ok=ch.every(function(v,i){return v==i});
if(!exam)btns.forEach(function(x,pp){x.classList.remove("sel");x.classList.add(ch.indexOf(perm[pp])==perm[pp]?"ok":"no")});
if(rs)rs.remove();done(ok,ok?"":"Richtige Reihenfolge: "+q[1].join(" → ")+". ")}}};
d.appendChild(b)});
var rs=null;
if(ty=="m"){var cf=document.createElement("button");cf.className="btn";cf.style.marginTop="6px";cf.textContent="Antwort prüfen";cf.onclick=function(){if(fin)return;
var pick=[];btns.forEach(function(x,p){if(x.classList.contains("sel"))pick.push(perm[p])});if(!pick.length)return;
var ok=pick.length==q[2].length&&pick.every(function(v){return q[2].indexOf(v)>-1});
if(!exam)btns.forEach(function(x,p){var cor=q[2].indexOf(perm[p])>-1,s=x.classList.contains("sel");x.classList.remove("sel");if(cor)x.classList.add("ok");else if(s)x.classList.add("no")});
cf.remove();done(ok)};d.appendChild(cf)}
if(ty=="o"){rs=document.createElement("button");rs.className="btn g";rs.style.marginTop="6px";rs.textContent="Zurücksetzen";rs.onclick=function(){if(fin)return;ch=[];btns.forEach(function(x,p){x.textContent=q[1][perm[p]];delete x.dataset.u;x.classList.remove("sel")})};d.appendChild(rs)}
return d}

/* ---------- Themenliste und Themenseite ---------- */
var flt="A";
function list(){var n=C.filter(function(t){return S.d[t[0]]}).length,h='<h1>Staatsexamen Pflege</h1><div class="bar"><i style="width:'+Math.round(n/C.length*100)+'%"></i></div><p class="m">'+n+' von '+C.length+' Themen gelernt · <a href="#fehler">Fehler wiederholen</a></p><div class="row">';
[["A","Alle"],["S","Schriftlich"],["M","Mündlich"],["E","Extra"]].forEach(function(f){h+='<span class="chip'+(flt==f[0]?" on":"")+'" data-f="'+f[0]+'">'+f[1]+'</span>'});
h+='</div>';T.filter(function(t){return flt=="A"||t[1].indexOf(flt)>-1}).forEach(function(t){h+='<a class="card item" href="#'+t[0]+'"><span>'+(S.d[t[0]]?"✓ ":"")+esc(t[2])+'</span><span>'+t[1].split("").map(function(c){return'<span class="tag"'+(c=="E"?' style="background:#f59e0b;color:#1d2430"':'')+'>'+(c=="E"?"Extra":c)+'</span>'}).join("")+'</span></a>'});
app.innerHTML=h+'<p class="m">S = schriftlich, M = mündlich, Extra = zusätzlich hilfreich, nicht auf deiner Themenliste. Lernhilfe, ersetzt keine Unterrichtsunterlagen.</p>';
app.querySelectorAll(".chip").forEach(function(c){c.onclick=function(){flt=c.dataset.f;list()}})}
function topic(id){var t=T.filter(function(x){return x[0]==id})[0];if(!t)return list();
var h='<p><a href="#themen">← Zurück</a></p><div class="card"><h2>'+esc(t[2])+'</h2>'+(t[1]=="E"?'<p class="tag" style="display:inline-block;background:#f59e0b;color:#1d2430;margin:0 0 6px">Extra-Thema: nicht auf deiner Liste, aber hilfreich</p>':'')+'<h3>Kurz &amp; klar</h3><ul>'+t[3].map(function(p){return'<li>'+esc(p)+'</li>'}).join("")+'</ul>'+deep(id)+'<h3>Teste dich</h3><div id="q"></div><h3>Meine Notizen</h3><textarea id="nt" rows="4" placeholder="Eigene Notizen, Beispiele aus dem Einsatz, Merkhilfen …" style="width:100%;font:inherit;padding:10px;border-radius:10px;border:1px solid var(--l);background:var(--bg);color:var(--t)"></textarea><h3>Quellen zum Nachlesen</h3><ul>'+
t[5].map(function(s){return'<li>'+(s[1]?'<a href="'+esc(s[1])+'" target="_blank" rel="noopener noreferrer">'+esc(s[0])+'</a>':esc(s[0]))+'</li>'}).join("")+'</ul><div class="row"><button class="btn" id="dn">'+(S.d[id]?"Als offen markieren":"Als gelernt markieren")+'</button></div></div>';
app.innerHTML=h;
ALLQ.filter(function(x){return x.t[0]==id}).forEach(function(x,i){var w=document.createElement("div");w.style.cssText="margin:10px 0;padding-top:10px"+(i?";border-top:1px solid var(--l)":"");w.appendChild(qz(x));$("#q").appendChild(w)});
$("#nt").value=S.n[id]||"";$("#nt").oninput=function(){S.n[id]=this.value;sv()};
$("#dn").onclick=function(){if(S.d[id])delete S.d[id];else{S.d[id]=Date.now();S.r[id]=0}sv();topic(id)};window.scrollTo(0,0)}

/* ---------- Quiz ---------- */
var qi=0,sc=0,ord=[],qm="p",wr=[];
function pick(mode){
if(mode=="f")return shuf(ALLQ.filter(function(x){var s=S.qs[x.k];return s&&s.l===0}));
var n=mode=="e"?30:20,pool=ALLQ.slice(),out=[];
while(out.length<n&&pool.length){var w=pool.map(function(x){var s=S.qs[x.k];return mode=="e"?1:!s?3:s.l===0?5:1}),tot=w.reduce(function(a,b){return a+b},0),r=Math.random()*tot,i=0;while(i<pool.length-1&&r>=w[i]){r-=w[i];i++}out.push(pool.splice(i,1)[0])}
return out}
function qmenu(){var ks=Object.keys(S.qs),c=0,w=0,open=0;ks.forEach(function(k){c+=S.qs[k].c;w+=S.qs[k].w;if(S.qs[k].l===0)open++});
app.innerHTML='<h1>Quiz</h1><div class="card"><p class="m">'+ALLQ.length+' Fragen · '+ks.length+' schon beantwortet'+(c+w?' · Trefferquote '+Math.round(c/(c+w)*100)+' %':'')+'</p>'+
'<a class="btn" href="#quizstart">Üben (20 Fragen, Fehler kommen öfter)</a><p class="m">Mit Sofort-Feedback. Neue und zuletzt falsche Fragen werden bevorzugt.</p>'+
'<a class="btn" href="#pruefung">Prüfungsmodus (30 Fragen)</a><p class="m">Kein Feedback während der Fragen, Auswertung nach Themen am Ende.</p>'+
'<a class="btn g" href="#fehler">Fehler wiederholen ('+open+')</a><a class="btn g" href="#karten">Eigene Karten ('+S.cards.length+')</a></div><div class="card"><p class="m">Fragetypen: Einzelauswahl mit 3 bis 5 Optionen, Mehrfachauswahl, Reihenfolge, Fallfragen. Die Antworten werden jedes Mal neu gemischt.</p></div>'}
function quiz(mode,first){
if(first){qm=mode;ord=pick(mode);qi=0;sc=0;wr=[];if(!ord.length){app.innerHTML='<div class="card"><h2>Keine offenen Fehler</h2><p>Noch nichts falsch beantwortet. Starte das Üben oder den Prüfungsmodus.</p><a class="btn" href="#quiz">Zum Quiz</a></div>';return}}
if(qi>=ord.length){var tp={};wr.forEach(function(x){tp[x.t[0]]=x.t[2]});var ids=Object.keys(tp);
app.innerHTML='<div class="card"><h2>Fertig</h2><p><b>'+sc+' von '+ord.length+' richtig</b> ('+Math.round(sc/ord.length*100)+' %)</p>'+(ids.length?'<h3>Nochmal lesen</h3><ul>'+ids.map(function(i){return'<li><a href="#'+i+'">'+esc(tp[i])+'</a></li>'}).join("")+'</ul>':'<p>Keine Fehler. Stark!</p>')+'<div class="row"><button class="btn" id="r">Neu starten</button><a class="btn g" href="#quiz" style="text-decoration:none">Menü</a></div></div>';$("#r").onclick=function(){quiz(qm,1)};window.scrollTo(0,0);return}
var it=ord[qi];app.innerHTML='<p class="m">'+(qm=="e"?"Prüfungsmodus · ":"")+'Frage '+(qi+1)+' von '+ord.length+'</p><div class="card" id="c"></div>';
$("#c").appendChild(qz(it,function(ok){if(ok)sc++;else wr.push(it);
if(qm=="e"){setTimeout(function(){qi++;quiz(qm)},250);return}
var b=document.createElement("button");b.className="btn";b.style.marginTop="8px";b.textContent="Weiter";b.onclick=function(){qi++;quiz(qm)};
var m=document.createElement("p");m.className="m";m.innerHTML='Thema: <a href="#'+it.t[0]+'">'+esc(it.t[2])+'</a>';$("#c").appendChild(m);$("#c").appendChild(b);b.scrollIntoView({block:"nearest"})},qm=="e"));window.scrollTo(0,0)}

/* ---------- Eigene Karten ---------- */
var cfs="width:100%;font:inherit;padding:10px;border-radius:10px;border:1px solid var(--l);background:var(--bg);color:var(--t);margin:4px 0 8px";
function cards(){
var h='<p><a href="#quiz">← Zurück</a></p><h1>Eigene Karten</h1><div class="card"><h3>Neue Karte</h3><input id="cf" placeholder="Frage (z. B. aus deinem Einsatz oder Unterricht)" style="'+cfs+'"><textarea id="cb" rows="3" placeholder="Antwort in eigenen Worten" style="'+cfs+'"></textarea><button class="btn" id="ca">Speichern</button></div>';
h+=S.cards.length?'<a class="btn" href="#kartenueben">Karten üben ('+S.cards.length+')</a><div class="card"><h3>Deine Karten</h3>'+S.cards.map(function(c,i){return'<details style="margin:8px 0"><summary><b>'+esc(c.f)+'</b></summary><p>'+esc(c.b)+'</p><button class="btn g" data-del="'+i+'">Löschen</button></details>'}).join("")+'</div>':'<p class="m">Noch keine Karten. Schreibe Fragen auf, die du dir merken oder besser verstehen willst.</p>';
app.innerHTML=h;
$("#ca").onclick=function(){var f=$("#cf").value.trim(),b=$("#cb").value.trim();if(!f||!b)return;S.cards.push({f:f,b:b,l:null});sv();cards()};
app.querySelectorAll("[data-del]").forEach(function(x){x.onclick=function(){S.cards.splice(+x.dataset.del,1);sv();cards()}})}
var cq=[],ci=0;
function cardsPractice(first){
if(first){cq=shuf(S.cards.map(function(c,i){return i}));cq.sort(function(a,b){return(S.cards[a].l===1?1:0)-(S.cards[b].l===1?1:0)});ci=0}
if(ci>=cq.length){app.innerHTML='<div class="card"><h2>Fertig</h2><a class="btn" href="#karten">Zurück zu den Karten</a></div>';return}
var c=S.cards[cq[ci]];
app.innerHTML='<p class="m">Karte '+(ci+1)+' von '+cq.length+'</p><div class="card"><p><b>'+esc(c.f)+'</b></p><p class="m">Antworte zuerst laut oder im Kopf, dann decke auf.</p><button class="btn" id="cs">Antwort zeigen</button><div id="cr"></div></div>';
$("#cs").onclick=function(){this.remove();$("#cr").innerHTML='<p style="white-space:pre-wrap">'+esc(c.b)+'</p><div class="row"><button class="btn g" id="cy">Gewusst</button><button class="btn g" id="cn">Nicht gewusst</button></div>';
$("#cy").onclick=function(){c.l=1;sv();ci++;cardsPractice()};$("#cn").onclick=function(){c.l=0;sv();ci++;cardsPractice()}}}

/* ---------- Quellen, Export, Import ---------- */
function expo(){var b=new Blob([JSON.stringify(S)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="pflege-lernstand.json";document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href)},1000)}
function impo(f){var r=new FileReader();r.onload=function(){var m=$("#imsg");try{var o=JSON.parse(r.result);if(!o||typeof o!="object"||Array.isArray(o)||(o.d&&typeof o.d!="object"))throw 0;S=o;S.d=S.d||{};S.q=S.q||{};S.r=S.r||{};S.qs=S.qs||{};S.n=S.n||{};S.cards=Array.isArray(S.cards)?S.cards:[];sv();m.textContent="Lernstand geladen."}catch(e){m.textContent="Die Datei konnte nicht gelesen werden."}};r.readAsText(f)}
function info(){app.innerHTML='<div class="card"><h2>Quellen &amp; Stand</h2><p>Inhalte recherchiert am 12.11.2026. Gesetze und Expertenstandards wurden direkt gegen die Quellen geprüft (z. B. § 4 PflBG in der Fassung ab 1.1.2026, DNQP-Stand). Klinische Kernaussagen sind Grundwissen nach gängigen Leitlinien; Versionsstand bitte über den Quellenlink prüfen.</p><p>Zuzahlungs- und Höchstbeträge (SGB V/XI) ändern sich – immer im Gesetz nachsehen.</p><p>Fortschritt wird nur auf diesem Gerät gespeichert. Das ist eine Lernhilfe; maßgeblich sind Unterricht, Curriculum und Prüfungsvorgaben deines Bundeslands.</p></div>'+
'<div class="card"><h2>Lernstand sichern</h2><p class="m">Exportiere deinen Fortschritt als Datei (Backup oder Wechsel auf ein anderes Gerät). Der API-Schlüssel wird nicht exportiert.</p><div class="row"><button class="btn" id="ex">Exportieren</button><label class="btn g" style="display:inline-block">Importieren<input type="file" id="im" accept="application/json,.json" style="display:none"></label></div><p class="m" id="imsg"></p></div>';
$("#ex").onclick=expo;$("#im").onchange=function(){if(this.files[0])impo(this.files[0])}}

/* ---------- Mündlich üben ---------- */
var oh=[],oc=null,osm=null,odc=null,obusy=false,odf=0,otts=false,octl=null,capP=null;
function caps(){if(!capP)capP=(typeof claude!='undefined'?Promise.all([claude.use('sample'),claude.use('dictation')]):Promise.resolve([null,null])).catch(function(){return[null,null]});return capP}
function mkapi(key){return async function(msgs,o){var r;
try{r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",signal:o&&o.signal,headers:{"content-type":"application/json","x-api-key":key,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-sonnet-5-5",max_tokens:1200,messages:msgs})})}
catch(e){var n=new Error("net");n.code=e&&e.name=="AbortError"?"cancelled":"upstream_error";throw n}
if(!r.ok){var er=new Error("http");er.code=r.status==401||r.status==403?"bad_key":r.status==429?"rate_limited":"upstream_error";throw er}
var j=await r.json(),tx=(j.content||[]).map(function(b){return b.text||""}).join("");
if(!tx){var em=new Error("empty");em.code="empty_completion";throw em}
if(o&&o.onText)o.onText({text:tx});return{text:tx}}}
function ctx(t){var s=t[3].join(' ');(D[t[0]]||[]).forEach(function(x){s+=' '+x[1]});return s}
function instr(t,m){var mm={f:'Fachfragen: stelle nacheinander einzelne mündliche Prüfungsfragen.',c:'Fallbeispiel: erfinde zuerst einen realistischen Fall (Alter, Setting, Situation, 4-5 Sätze) und stelle dazu schrittweise Aufgaben, auch mit rechtlichem und interprofessionellem Bezug.',p:'Prüfungsgespräch: stelle genau 5 gemischte Fragen nacheinander, danach eine Gesamtbewertung (sicher, ok oder wackelig) mit 3 Lerntipps.'}[m];return 'Du bist eine freundliche, faire Prüferin in der mündlichen Prüfung zur Pflegefachfrau/zum Pflegefachmann in Deutschland. Thema: '+t[2]+'. Modus: '+mm+' Inhaltliche Grundlage (aus der Lern-App, Stand 12.11.2026): '+ctx(t)+' Regeln: Stelle immer nur eine Frage oder Aufgabe und warte auf die Antwort. Nach jeder Antwort der lernenden Person gib kurz: 1) Wertung (richtig, teilweise, lückenhaft), 2) was gut war, 3) was fehlte oder falsch war, 4) eine Musterantwort in 2-4 Sätzen, 5) die nächste Frage mit steigender Schwierigkeit. Erfinde keine Paragraphen, Zahlen oder Leitlinien; bei Unsicherheit sage das offen und verweise auf Quellen und die Schule. Nutze § 4 PflBG in der Fassung ab 1.1.2026. Schreibe auf Deutsch, kurz, klar, ohne Tabellen.'}
function errtxt(e){var c=e&&e.code||'';if(c=='bad_key'){try{localStorage.removeItem('exk')}catch(x){}}var m={bad_key:'Der API-Schlüssel wurde abgelehnt und gelöscht. Klicke auf Neu und gib ihn erneut ein.',not_granted:'Du hast Claude für diese Seite nicht freigegeben. Lade die Seite neu und erlaube es beim nächsten Senden.',sampling_disabled:'Claude ist für dein Konto hier nicht verfügbar.',rate_limited:'Zu viele Anfragen oder dein Nutzungslimit ist erreicht. Warte kurz und sende dann erneut.',session_expired:'Bitte melde dich bei claude.ai neu an und lade die Seite neu.',refused:'Claude hat diese Anfrage abgelehnt. Formuliere deine Antwort anders.',empty_completion:'Es kam keine Antwort. Sende nochmal.',upstream_error:'Verbindungsproblem. Versuche es nochmal.'};return(m[c]||'Das hat nicht geklappt.')+(c?' ('+c+')':'')}
function oral(){var o='<option value=rand>Zufällig (mündliche Themen)</option>'+T.map(function(t){return'<option value='+t[0]+'>'+esc(t[2])+'</option>'}).join('');var st=`style='width:100%;padding:10px;border-radius:10px;border:1px solid var(--l);background:var(--bg);color:var(--t);font:inherit;margin:4px 0 10px'`;app.innerHTML=`<h1>Mündlich üben</h1><div class='card'><p class='m'>Übe die mündliche Prüfung: Der <b>Selbsttest</b> läuft ohne KI und ohne Schlüssel (Frage wird vorgelesen, du antwortest per Sprache oder Text, die App prüft Stichwörter und zeigt die Musterantwort). Die KI-Modi brauchen einen API-Schlüssel oder den claude.ai-Link. Antworte laut gedacht in ganzen Sätzen, wie in der Prüfung.</p>Thema<select id='ot' ${st}>${o}</select>Modus<select id='om' ${st}><option value='s'>Selbsttest ohne KI (Stichwort-Check)</option><option value='f'>KI: Fachfragen</option><option value='c'>KI: Fallbeispiel</option><option value='p'>KI: Prüfungsgespräch (5 Fragen)</option></select><button class='btn' id='os'>Start</button></div><div id='oc'></div>`;caps();$('#os').onclick=ostart}
function oadd(w,t){var d=document.createElement('div');d.className='card';d.style.whiteSpace='pre-wrap';if(w=='u')d.style.background='var(--ab)';d.textContent=t;$('#ol').appendChild(d);return d}
function turns(){var a=oh.slice();a[0]={role:'user',content:instr(oc.t,oc.m)+' Beginne jetzt mit der ersten Frage bzw. dem Fall.'};return a}
function ospeak(t){if(!otts)return;try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang='de-DE';speechSynthesis.speak(u)}catch(e){}}
async function oask(){obusy=true;octl=new AbortController();var d=oadd('a','Der Prüfer überlegt …'),sb=$('#ostop');if(sb)sb.style.display='';try{var r=await osm(turns(),{onText:function(x){d.textContent=x.text},cache:false,signal:octl.signal});d.textContent=r.text;oh.push({role:'assistant',content:r.text});ospeak(r.text)}catch(e){if(e&&e.code=='cancelled'){d.textContent=(e.text||'')+' [abgebrochen]';if(e.text)oh.push({role:'assistant',content:e.text})}else{d.textContent=errtxt(e);var b=document.createElement('button');b.className='btn g';b.style.marginTop='8px';b.textContent='Erneut versuchen';b.onclick=function(){d.remove();oask()};d.appendChild(document.createElement('br'));d.appendChild(b)}}obusy=false;if(sb)sb.style.display='none';d.scrollIntoView({block:'nearest'})}
async function ostart(){if($('#om').value=='s'){selfStart($('#ot').value);return}var v=$('#ot').value,M=T.filter(function(t){return t[1].indexOf('M')>-1}),t=v=='rand'?M[Math.floor(Math.random()*M.length)]:T.filter(function(x){return x[0]==v})[0];oc={t:t,m:$('#om').value};oh=[{role:'user',content:'start'}];var c=$('#oc');c.innerHTML='<p class=m>Verbinde …</p>';var cp=await caps();osm=cp[0];odc=cp[1];var kk=null;try{kk=localStorage.getItem('exk')}catch(e){}if(!osm&&kk)osm=mkapi(kk);
if(!osm){c.innerHTML=`<div class='card'><p>Außerhalb des claude.ai-Links braucht der KI-Prüfer deinen eigenen Anthropic-API-Schlüssel. Er wird nur auf diesem Gerät gespeichert und nur an api.anthropic.com gesendet. Die Nutzung wird über deinen Schlüssel abgerechnet.</p><input id='ak' type='password' autocomplete='off' placeholder='API-Schlüssel (sk-ant-…)' style='width:100%;padding:10px;border-radius:10px;border:1px solid var(--l);background:var(--bg);color:var(--t);font:inherit;margin:4px 0 8px'><button class='btn' id='sk'>Speichern und starten</button><p class='m'>Ohne Schlüssel: Kopiere die Anweisung in einen Chat mit Claude und antworte dort.</p><button class='btn g' id='cp'>Anweisung kopieren</button></div>`;
$('#sk').onclick=function(){var k=$('#ak').value.trim();if(!k)return;try{localStorage.setItem('exk',k)}catch(e){}ostart()};
$('#cp').onclick=function(){try{navigator.clipboard.writeText(instr(oc.t,oc.m)+' Beginne jetzt mit der ersten Frage bzw. dem Fall.')}catch(e){}this.textContent='Kopiert'};return}
c.innerHTML=`<h2>${esc(t[2])}</h2><div id='ol'></div><div class='card'><textarea id='oa' rows=4 placeholder='Deine Antwort …' style='width:100%;font:inherit;padding:10px;border-radius:10px;border:1px solid var(--l);background:var(--bg);color:var(--t)'></textarea><p class='m' id='ohint'></p><div class='row'><button class='btn' id='ose'>Senden</button>${(odc||SR)?`<button class='btn g' id='omi'>🎤 Sprechen</button>`:''}<button class='btn g' id='ostop' style='display:none'>Stopp</button><button class='btn g' id='ono'>Neu</button></div><label class='m'><input type='checkbox' id='ott'> Fragen vorlesen</label></div>`;
$('#ohint').textContent=(odc||SR)?'':'Spracheingabe ist hier nicht verfügbar. Nutze das Mikrofon deiner Tastatur.';
$('#ose').onclick=function(){var a=$('#oa').value.trim();if(!a||obusy)return;$('#oa').value='';try{speechSynthesis.cancel()}catch(e){}oadd('u',a);oh.push({role:'user',content:a});oask()};
$('#ostop').onclick=function(){if(octl)octl.abort()};
$('#ono').onclick=function(){if(octl)octl.abort();try{speechSynthesis.cancel()}catch(e){}oral()};
$('#ott').onchange=function(){otts=this.checked;if(!otts)try{speechSynthesis.cancel()}catch(e){}};
if(odc){if(!odf){odf=1;odc.onFinal(function(r){var a=$('#oa');if(a)a.value=a.value?a.value+r.text:r.text.trim()});odc.onState(function(x){var b=$('#omi');if(b)b.textContent=x.state=='idle'?'🎤 Sprechen':'⏹ Stopp'})}
$('#omi').onclick=function(){if(odc.active()){odc.stop();return}$('#ohint').textContent='';odc.start({language:'de'}).catch(function(e){var h=$('#ohint');if(h)h.textContent={not_granted:'Mikrofon nicht erlaubt. Erlaube es in den Berechtigungen der Seite.',unavailable:'Spracheingabe für Deutsch ist hier nicht verfügbar. Nutze das Mikrofon deiner Tastatur.',rate_limited:'Zu viele Spracheingaben. Warte kurz.',stopped:'',dismissed:''}[e&&e.code]||'Spracheingabe hat nicht geklappt. Nutze das Mikrofon deiner Tastatur.'})}}
else if(SR){$('#omi').onclick=function(){micToggle($('#oa'),$('#omi'),$('#ohint'))}}
oask()}

/* ---------- Selbsttest ohne KI, Spracheingabe im Browser ---------- */
var SR=window.SpeechRecognition||window.webkitSpeechRecognition,webrc=null;
function micToggle(ta,btn,hint){
if(!SR){hint.textContent='Spracherkennung wird von diesem Browser nicht unterstützt (am besten Chrome oder Edge). Nutze das Mikrofon deiner Tastatur.';return}
if(webrc){webrc.stop();return}
var base=ta.value?ta.value.trim()+' ':'',r=new SR();webrc=r;r.lang='de-DE';r.continuous=true;r.interimResults=true;hint.textContent='';
r.onresult=function(e){var t='';for(var i=0;i<e.results.length;i++)t+=e.results[i][0].transcript;ta.value=base+t};
r.onerror=function(e){var m={'not-allowed':'Mikrofon nicht erlaubt. Erlaube es in den Berechtigungen der Seite.','service-not-allowed':'Mikrofon nicht erlaubt. Erlaube es in den Berechtigungen der Seite.','audio-capture':'Kein Mikrofon gefunden.','network':'Spracherkennung braucht eine Internetverbindung.'}[e.error];if(m)hint.textContent=m};
r.onend=function(){webrc=null;btn.textContent='🎤 Sprechen'};
btn.textContent='⏹ Stopp';try{r.start()}catch(x){webrc=null;btn.textContent='🎤 Sprechen'}}
function nrm(s){return String(s).toLowerCase().replace(/ä/g,'a').replace(/ö/g,'o').replace(/ü/g,'u').replace(/ß/g,'ss').replace(/[^a-z0-9 \-]/g,' ')}
var SQ={q:[],i:0,t:null,id:null};
function selfStart(v){var ids=Object.keys(OQ),id=v=='rand'?ids[Math.floor(Math.random()*ids.length)]:v,c=$('#oc');
if(!OQ[id]){c.innerHTML="<div class='card'><p>Für dieses Thema gibt es noch keinen Selbsttest. Wähle ein Thema mit mündlicher Prüfung (M) oder „Zufällig“.</p></div>";return}
SQ={q:shuf(OQ[id]),i:0,t:T.filter(function(x){return x[0]==id})[0],id:id};selfq()}
function selfq(){var c=$('#oc'),s=SQ,it=s.q[s.i];try{speechSynthesis.cancel()}catch(e){}
if(!it){c.innerHTML="<div class='card'><h2>Durch</h2><p>Du hast alle Fragen zu „"+esc(s.t[2])+"“ bearbeitet.</p><button class='btn' id='sa2'>Nochmal</button></div>";$('#sa2').onclick=function(){selfStart(s.id)};return}
c.innerHTML="<h2>"+esc(s.t[2])+"</h2><div class='card'><p class='m'>Frage "+(s.i+1)+" von "+s.q.length+"</p><p><b>"+esc(it[0])+"</b></p><div class='row'><button class='btn g' id='sv'>🔊 Vorlesen</button></div><textarea id='sa' rows=5 placeholder='Deine Antwort, am besten laut und in ganzen Sätzen …' style='width:100%;font:inherit;padding:10px;border-radius:10px;border:1px solid var(--l);background:var(--bg);color:var(--t)'></textarea><p class='m' id='sh'></p><div class='row'>"+(SR?"<button class='btn g' id='sm'>🎤 Sprechen</button>":"")+"<button class='btn' id='sk2'>Antwort prüfen</button></div></div><div id='sr'></div>";
if(!SR)$('#sh').textContent='Spracheingabe wird von diesem Browser nicht unterstützt. Nutze das Mikrofon deiner Tastatur oder tippe.';
$('#sv').onclick=function(){try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(it[0]);u.lang='de-DE';speechSynthesis.speak(u)}catch(e){}};
if(SR)$('#sm').onclick=function(){micToggle($('#sa'),$('#sm'),$('#sh'))};
$('#sk2').onclick=function(){if(webrc)webrc.stop();var txt=nrm($('#sa').value),hits=it[2].map(function(k){var ok=k.split('|').some(function(a){return txt.indexOf(nrm(a).trim())>-1});return[k.split('|')[0],ok]}),n=hits.filter(function(h){return h[1]}).length;
$('#sr').innerHTML="<div class='card'><h3>Stichwort-Check: "+n+" von "+hits.length+"</h3><p>"+hits.map(function(h){return(h[1]?"✓ ":"✗ ")+esc(h[0])}).join("<br>")+"</p><p class='m'>Das ist nur ein grober Hinweis auf Begriffe. Ob deine Antwort inhaltlich stimmt, vergleichst du selbst mit der Musterantwort.</p><h3>Musterantwort</h3><p>"+esc(it[1])+"</p><div class='row'><button class='btn g' id='sv2'>🔊 Musterantwort vorlesen</button></div><h3>Wie sicher warst du?</h3><div class='row'><button class='btn g' id='sj'>Sicher</button><button class='btn g' id='sw'>Wackelig</button></div><button class='btn' id='sn'>Weiter</button></div>";
$('#sv2').onclick=function(){try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(it[1]);u.lang='de-DE';speechSynthesis.speak(u)}catch(e){}};
function rate(j){S.os=S.os||{};S.os[s.id+'#'+s.i]=j;sv();$('#sj').classList.toggle('on',j==1);$('#sw').classList.toggle('on',j==0)}
$('#sj').onclick=function(){rate(1)};$('#sw').onclick=function(){rate(0)};
$('#sn').onclick=function(){s.i++;selfq()};$('#sn').scrollIntoView({block:'nearest'})}}

/* ---------- Lernplan ---------- */
function pd(v){var d=new Date(typeof v=='number'?v:v+'T00:00:00');d.setHours(0,0,0,0);return d.getTime()}
function addDay(t){var d=new Date(t);d.setDate(d.getDate()+1);d.setHours(0,0,0,0);return d.getTime()}
function sched(){var D1=864e5,sM=pd(S.s),W=pd(S.w),W2=pd(S.w2||S.w),O=pd(S.o),SL=C.filter(function(t){return t[1].indexOf('S')>-1}),ML=C.filter(function(t){return t[1]=='M'}),tot=Math.round((W-sM)/D1),rev=Math.max(0,Math.min(3,Math.floor(tot/4))),ln=Math.max(1,tot-rev),per=Math.ceil(SL.length/ln),bm=Math.min(rev,3),afterN=Math.max(1,Math.round((O-W2)/D1)-2),rest=ML.slice(bm),out=[];
for(var t=sM,i=0;t<=O;t=addDay(t),i++){var tp=[],n='';
if(t<W){if(i<ln){tp=SL.slice(i*per,(i+1)*per);n='Neu lernen (schriftliche Themen)'}else{var k=i-ln;tp=k<bm?ML.slice(k,k+1):[];n='Wiederholen: Quiz, Fehler wiederholen'+(tp.length?' und ein neues mündliches Thema':'')}}
else if(t<=W2){n='Schriftliche Prüfung. Abends höchstens 15 Minuten Quiz oder Fehler wiederholen, dann Pause.'}
else if(t<O){var j=Math.round((t-W2)/D1)-1;if(j<afterN){tp=rest.slice(Math.floor(j*rest.length/afterN),Math.floor((j+1)*rest.length/afterN));n='Mündliche Themen neu lernen und im Üben-Tab abfragen lassen'}else n='Nur wiederholen: 2 Prüfungsgespräche im Üben-Tab, früh schlafen'}
else n='Mündliche Prüfung. Morgens kurz die Merksätze ansehen, dann ruhig bleiben.';
out.push({t:t,tp:tp,n:n})}return out}
function plan(){if(!S.w){S.w='2026-11-25';S.w2='2026-11-27';S.o='2026-12-02';S.p='2026-12-07';S.s=Date.now();sv()}
var D1=864e5,now=Date.now(),td=pd(now),fs='font:inherit;padding:9px;border-radius:10px;border:1px solid var(--l);background:var(--bg);color:var(--t);width:100%;margin:4px 0 8px;display:block';
function inp(id,l,v){return`<label class='m'>${l}<input type='date' id='${id}' value='${esc(v||'')}' style='${fs}'></label>`}
function cd(l,v){if(!v)return'';var n=Math.round((pd(v)-td)/D1);return n>=0?`<li>${l}: ${n==0?'heute':'in '+n+(n==1?' Tag':' Tagen')}</li>`:''}
function fd(t){return new Date(t).toLocaleDateString('de-DE',{weekday:'short',day:'numeric',month:'numeric'})}
function tl(a){return a.map(function(t){return`<li><a href='#${t[0]}'>${S.d[t[0]]?'✓ ':''}${esc(t[2])}</a></li>`}).join('')}
var h=`<h1>Lernplan</h1><div class='card'><h2>Deine Prüfungstermine</h2>${inp('dw','Schriftlich ab',S.w)}${inp('dw2','Schriftlich bis',S.w2)}${inp('do','Mündlich',S.o)}${inp('dp','Praktisch',S.p)}<p class='m'>Ändern erstellt den Plan ab heute neu.</p></div><div class='card'><h2>Countdown</h2><ul>${cd('Schriftlich',S.w)}${cd('Mündlich',S.o)}${cd('Praktisch',S.p)}</ul></div>`;
try{var sc2=S.w&&S.o?sched():[],k=-1;sc2.forEach(function(e,i){if(e.t==td)k=i});if(k<0&&sc2.length&&td<sc2[0].t)k=0;
if(k>=0){var e=sc2[k];h+=`<div class='card'><h2>Heute (${fd(e.t)})</h2><p>${esc(e.n)}</p>${e.tp.length?'<ul>'+tl(e.tp)+'</ul>':''}</div><div class='card'><h2>Die nächsten Tage</h2>`+sc2.slice(k+1,k+4).map(function(e){return`<p><b>${fd(e.t)}</b>: ${esc(e.n)}${e.tp.length?'<br>'+e.tp.map(function(t){return esc(t[2])}).join(', '):''}</p>`}).join('')+`</div>`}
else if(sc2.length)h+=`<div class='card'><p>Für die schriftliche und mündliche Prüfung ist kein Lerntag mehr offen.</p></div>`}catch(x){}
if(S.p)h+=`<div class='card'><h2>Praktische Prüfung</h2><p>Dafür gibt es in der App noch keinen Lernbereich. Plane in den Tagen nach der mündlichen Prüfung Zeit für Übungen an Fällen aus deinem Einsatz ein.</p></div>`;
var due=T.filter(function(t){var id=t[0];if(!S.d[id])return false;var iv=[1,7,21][S.r[id]||0];return iv&&now-(S.d[id]>1e12?S.d[id]:0)>=iv*D1});
h+=`<div class='card'><h2>Zu wiederholen</h2>`+(due.length?due.map(function(t){return`<div class='item' style='margin:8px 0'><a href='#${t[0]}'>${esc(t[2])}</a><button class='btn g' data-w='${t[0]}'>Wiederholt</button></div>`}).join(''):'<p class=m>Nichts fällig. Wiederholt wird nach 1 Tag, 1 Woche und 3 Wochen.</p>')+`</div><div class='card'><h2>So lernst du am besten</h2><ul><li>Neue Themen in kleinen Portionen, danach sofort die Testfragen.</li><li>Mündlich laut üben, in ganzen Sätzen, mit dem Prüfer im Üben-Tab.</li><li>Mit Fällen lernen: Prophylaxe, Pflegeprozess und Schmerz an einem Patienten verbinden.</li><li>Rechtliches genau lernen. Das PflBG gilt seit 1.1.2026 mit neuem § 4 und § 4a, frag die Schule nach der Prüfungsfassung.</li><li>Am Tag vor einer Prüfung nur wiederholen und ausreichend schlafen.</li></ul></div>`;
app.innerHTML=h;
[['dw','w'],['dw2','w2'],['do','o'],['dp','p']].forEach(function(m){var e=$('#'+m[0]);if(e)e.onchange=function(){S[m[1]]=this.value;S.s=Date.now();sv();plan()}});
app.querySelectorAll('[data-w]').forEach(function(b){b.onclick=function(){var id=b.dataset.w;S.r[id]=(S.r[id]||0)+1;S.d[id]=Date.now();sv();plan()}})}

/* ---------- Routing ---------- */
function route(){var h=location.hash.slice(1);["n1","n2","n3","n4","n5"].forEach(function(i){$("#"+i).classList.remove("on")});
if(h=="quiz"){$("#n2").classList.add("on");qmenu()}
else if(h=="quizstart"){$("#n2").classList.add("on");quiz("p",1)}
else if(h=="pruefung"){$("#n2").classList.add("on");quiz("e",1)}
else if(h=="fehler"){$("#n2").classList.add("on");quiz("f",1)}
else if(h=="karten"){$("#n2").classList.add("on");cards()}
else if(h=="kartenueben"){$("#n2").classList.add("on");cardsPractice(1)}
else if(h=="plan"){$("#n4").classList.add("on");plan()}
else if(h=="muendlich"){$("#n5").classList.add("on");oral()}
else if(h=="info"){$("#n3").classList.add("on");info()}
else if(h&&h!="themen"){$("#n1").classList.add("on");topic(h)}
else{$("#n1").classList.add("on");list()}}
window.addEventListener("hashchange",route);route();
if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register("sw.js").catch(function(){});
