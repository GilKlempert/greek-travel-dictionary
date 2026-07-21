/* =========================================================
   Greek Travel Dictionary – לוגיקה ראשית
   מחולק למודולים לוגיים: Storage, Speech, Search, UI/Router.
   ========================================================= */

/* ---------- 1. אחסון מקומי (storage) ---------- */
const Store = {
  FAV:"gtd_favorites", RECENT:"gtd_recent", THEME:"gtd_theme",
  get(key,def){ try{ return JSON.parse(localStorage.getItem(key)) ?? def; }catch{ return def; } },
  set(key,val){ try{ localStorage.setItem(key,JSON.stringify(val)); }catch{} },

  favorites(){ return this.get(this.FAV,[]); },
  isFav(id){ return this.favorites().includes(id); },
  toggleFav(id){
    const f=this.favorites(); const i=f.indexOf(id);
    if(i>=0) f.splice(i,1); else f.push(id);
    this.set(this.FAV,f); return i<0;               // true אם נוסף
  },
  recent(){ return this.get(this.RECENT,[]); },
  pushRecent(id){
    let r=this.recent().filter(x=>x!==id);
    r.unshift(id); r=r.slice(0,20);
    this.set(this.RECENT,r);
  },
  theme(){ return this.get(this.THEME,null); },
  setTheme(t){ this.set(this.THEME,t); }
};

/* ---------- 2. הגייה קולית (speech) ---------- */
const Speak = {
  warned:false,
  // בחירת קול יווני מהרשימה העדכנית (נטענת אסינכרונית באנדרואיד)
  greekVoice(){
    const vs=speechSynthesis.getVoices();
    return vs.find(v=>v.lang==="el-GR")
        || vs.find(v=>v.lang && v.lang.toLowerCase().startsWith("el"))
        || null;
  },
  init(){
    // חימום רשימת הקולות
    speechSynthesis.getVoices();
    if(speechSynthesis.onvoiceschanged!==undefined)
      speechSynthesis.onvoiceschanged=()=>speechSynthesis.getVoices();
  },
  say(text,{slow=false}={}){
    if(!("speechSynthesis" in window)){ toast("הדפדפן לא תומך בהשמעה"); return; }
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang="el-GR"; u.rate=slow?0.6:0.95;
    const v=this.greekVoice();
    if(v){ u.voice=v; }
    else if(!this.warned){
      // אין קול יווני מותקן — הדפדפן ייפול למבטא זר. מודיעים פעם אחת.
      this.warned=true;
      toast("להגייה יוונית: התקינו קול יווני בהגדרות הטלפון");
    }
    speechSynthesis.speak(u);
  }
};

/* ---------- 3. עזרי נתונים ---------- */
const byId = id => PHRASES.find(p=>p.id===id);
const catById = id => CATEGORIES.find(c=>c.id===id);
const catCount = id => PHRASES.filter(p=>p.category===id).length;

/* ---------- 4. חיפוש (search) ---------- */
// נרמול: הורדת ניקוד עברי, טונוסים יווניים ואותיות קטנות,
// כדי שחיפוש "נרו" יתאים ל"נֶרוֹ" ו"γεια" ל"Γεια".
function normalize(s){
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0591-\u05C7]/g,"")   // ניקוד עברי
    .replace(/[\u0300-\u036f]/g,"")   // טונוסים/דיאקריטים לטיניים-יווניים
    .replace(/[.,!?;:'"()]/g,"")
    .trim();
}
function search(q){
  q=normalize(q);
  if(!q) return [];
  return PHRASES.filter(p=>
    normalize(p.hebrew).includes(q) ||
    normalize(p.greek).includes(q) ||
    normalize(p.transliteration).includes(q)
  );
}

/* ---------- 5. רכיבי UI ---------- */
function speakerIcon(){ return `<span class="material-icons-round">volume_up</span>`; }

function phraseCard(p){
  const fav=Store.isFav(p.id)?"on":"";
  return `
  <div class="phrase" data-id="${p.id}">
    <div class="phrase__main">
      <p class="phrase__he">${p.hebrew}</p>
      <p class="phrase__gr">${p.greek}</p>
      <p class="phrase__tr">${p.transliteration}</p>
    </div>
    <div class="phrase__actions">
      <button class="pbtn pbtn--speak" data-act="speak" aria-label="השמעה">${speakerIcon()}</button>
      <button class="pbtn pbtn--slow" data-act="slow" aria-label="השמעה איטית"><span class="material-icons-round">slow_motion_video</span></button>
      <button class="pbtn pbtn--fav ${fav}" data-act="fav" aria-label="מועדף"><span class="material-icons-round">favorite</span></button>
    </div>
  </div>`;
}

function phraseList(list){
  if(!list.length) return emptyState("לא נמצאו ביטויים");
  return list.map(phraseCard).join("");
}

function emptyState(msg,icon="search_off"){
  return `<div class="empty"><span class="material-icons-round">${icon}</span><p>${msg}</p></div>`;
}

/* ---------- 6. תצוגות (views) ---------- */
const app=document.getElementById("app");
let currentView="home";
let currentCat=null;

function renderHome(){
  const favN=Store.favorites().length, recN=Store.recent().length;
  app.className="app";
  app.innerHTML=`
    <div class="section-title"><span class="material-icons-round">bolt</span>גישה מהירה</div>
    <div class="quickgrid">
      <button class="quick" data-go="categories"><span class="material-icons-round">grid_view</span><b>קטגוריות</b><small>${PHRASES.length} ביטויים</small></button>
      <button class="quick" data-go="favorites"><span class="material-icons-round">favorite</span><b>מועדפים</b><small>${favN} שמורים</small></button>
      <button class="quick" data-go="recent"><span class="material-icons-round">history</span><b>אחרונים</b><small>${recN} נצפו</small></button>
      <button class="quick quick--emergency" data-go="emergency"><span class="material-icons-round">emergency</span><b>חירום</b><small>ביטויים חיוניים</small></button>
    </div>
    <div class="section-title"><span class="material-icons-round">casino</span>ביטוי אקראי</div>
    <div id="randomHost"></div>
    <div class="section-title"><span class="material-icons-round">grid_view</span>כל הקטגוריות</div>
    <div class="catgrid">${CATEGORIES.map(catCardHome).join("")}</div>
  `;
  renderRandom();
}

function catCardHome(c){
  return `<button class="cat" data-cat="${c.id}">
    <div class="cat__ic" style="background:${c.color}"><span class="material-icons-round">${c.icon}</span></div>
    <b>${c.he}</b><small>${catCount(c.id)} ביטויים</small>
  </button>`;
}

function renderRandom(){
  const p=PHRASES[Math.floor(Math.random()*PHRASES.length)];
  const host=document.getElementById("randomHost");
  if(!host) return;
  host.innerHTML=`
    <div class="random" data-id="${p.id}">
      <p class="random__he">${p.hebrew}</p>
      <p class="random__gr">${p.greek}</p>
      <p class="random__tr">${p.transliteration}</p>
      <div class="random__row">
        <button data-act="speak"><span class="material-icons-round">volume_up</span>השמעה</button>
        <button data-act="another"><span class="material-icons-round">refresh</span>אחר</button>
      </div>
    </div>`;
}

function renderCategories(){
  app.className="app";
  setTitle("קטגוריות");
  app.innerHTML=`<div class="catgrid">${CATEGORIES.map(catCardHome).join("")}</div>`;
}

function renderCategory(id){
  const c=catById(id); currentCat=id;
  app.className="app";
  setTitle(c.he);
  const list=PHRASES.filter(p=>p.category===id);
  app.innerHTML=phraseList(list);
}

function renderFavorites(){
  app.className="app";
  setTitle("מועדפים");
  const list=Store.favorites().map(byId).filter(Boolean);
  app.innerHTML=list.length?phraseList(list)
    :emptyState("עדיין אין מועדפים. הקישו על ♥ בכל ביטוי","favorite_border");
}

function renderRecent(){
  app.className="app";
  setTitle("נצפו לאחרונה");
  const list=Store.recent().map(byId).filter(Boolean);
  app.innerHTML=list.length?phraseList(list)
    :emptyState("עדיין לא נצפו ביטויים","history");
}

function renderEmergency(){
  app.className="app emergency-view";
  setTitle("חירום");
  const list=PHRASES.filter(p=>p.category==="emergency");
  app.innerHTML=phraseList(list);
}

function renderSearch(q){
  app.className="app";
  const list=search(q);
  app.innerHTML=list.length?phraseList(list)
    :emptyState(`לא נמצאו תוצאות עבור "${q}"`);
}

/* ---------- 7. ניתוב (router) ---------- */
function setTitle(t){ document.getElementById("topTitle").textContent=t; }

function go(view,arg){
  currentView=view; currentCat=null;
  document.getElementById("searchInput").value="";
  document.getElementById("clearSearch").hidden=true;
  window.scrollTo(0,0);

  // סרגל תחתון פעיל
  document.querySelectorAll(".tab").forEach(t=>{
    t.classList.toggle("tab--active", t.dataset.view===view);
  });
  // כפתור חזרה
  const back=document.getElementById("backBtn");
  const isSub = ["category","recent"].includes(view);
  back.hidden = !isSub;

  switch(view){
    case "home": setTitle("מילון יווני 🇬🇷"); renderHome(); break;
    case "categories": renderCategories(); break;
    case "category": renderCategory(arg); break;
    case "favorites": renderFavorites(); break;
    case "recent": renderRecent(); break;
    case "emergency": renderEmergency(); break;
  }
}

/* ---------- 8. אירועים ---------- */
// חיפוש חי
const searchInput=document.getElementById("searchInput");
searchInput.addEventListener("input",e=>{
  const q=e.target.value;
  document.getElementById("clearSearch").hidden=!q;
  if(q.trim()){ renderSearch(q); document.getElementById("backBtn").hidden=false; }
  else go(currentView==="category"?"categories":currentView);
});
document.getElementById("clearSearch").onclick=()=>{
  searchInput.value=""; document.getElementById("clearSearch").hidden=true;
  searchInput.focus(); go("home");
};

// כפתור חזרה
document.getElementById("backBtn").onclick=()=>{
  if(searchInput.value){ searchInput.value=""; document.getElementById("clearSearch").hidden=true; }
  go(currentView==="category"?"categories":"home");
};

// ניווט תחתון
document.querySelectorAll(".tab").forEach(t=>{
  t.onclick=()=>go(t.dataset.view);
});

// לחיצות בתוך התוכן (delegation)
let pressTimer=null, longFired=false;
app.addEventListener("click",e=>{
  const actBtn=e.target.closest("[data-act]");
  const card=e.target.closest(".phrase");
  const catBtn=e.target.closest("[data-cat]");
  const goBtn=e.target.closest("[data-go]");
  const randomBox=e.target.closest(".random");

  if(goBtn){ go(goBtn.dataset.go); return; }
  if(catBtn){ go("category",catBtn.dataset.cat); return; }

  // ביטוי אקראי
  if(randomBox && actBtn){
    const p=byId(+randomBox.dataset.id);
    if(actBtn.dataset.act==="speak"){ Speak.say(p.greek); Store.pushRecent(p.id); }
    if(actBtn.dataset.act==="another"){ renderRandom(); }
    return;
  }

  if(!card) return;
  const p=byId(+card.dataset.id);
  if(actBtn){
    const a=actBtn.dataset.act;
    if(a==="speak"){ Speak.say(p.greek); Store.pushRecent(p.id); }
    if(a==="slow"){ Speak.say(p.greek,{slow:true}); Store.pushRecent(p.id); }
    if(a==="fav"){
      const added=Store.toggleFav(p.id);
      actBtn.classList.toggle("on",added);
      toast(added?"נוסף למועדפים ♥":"הוסר מהמועדפים");
      if(currentView==="favorites" && !added) card.remove();
    }
    return;
  }
  // הקשה רגילה על כרטיס = השמעה + שמירה באחרונים
  if(!longFired){ Speak.say(p.greek); Store.pushRecent(p.id); }
});

// לחיצה ארוכה => תצוגה גדולה
["touchstart","mousedown"].forEach(ev=>{
  app.addEventListener(ev,e=>{
    const card=e.target.closest(".phrase");
    if(!card || e.target.closest("[data-act]")) return;
    longFired=false;
    pressTimer=setTimeout(()=>{ longFired=true; openBig(+card.dataset.id); },500);
  },{passive:true});
});
["touchend","touchmove","mouseup","mouseleave"].forEach(ev=>{
  app.addEventListener(ev,()=>clearTimeout(pressTimer),{passive:true});
});

/* ---------- 9. תצוגה גדולה ---------- */
function openBig(id){
  const p=byId(id); Store.pushRecent(id);
  document.getElementById("bigHe").textContent=p.hebrew;
  document.getElementById("bigGr").textContent=p.greek;
  document.getElementById("bigTr").textContent=p.transliteration;
  const bc=document.getElementById("bigcard");
  bc.hidden=false;
  document.getElementById("bigSpeak").onclick=()=>Speak.say(p.greek);
  Speak.say(p.greek);
}
function closeBig(){ speechSynthesis.cancel(); document.getElementById("bigcard").hidden=true; }
document.getElementById("bigClose").addEventListener("click",closeBig);
// נגיעה על הרקע (מחוץ לתוכן הכרטיס) סוגרת גם היא
document.getElementById("bigcard").addEventListener("click",e=>{
  if(e.target.id==="bigcard") closeBig();
});

/* ---------- 10. מצב כהה ---------- */
function applyTheme(t){
  document.documentElement.setAttribute("data-theme",t);
  document.getElementById("themeIcon").textContent = t==="dark"?"light_mode":"dark_mode";
  document.querySelector('meta[name="theme-color"]').setAttribute("content", t==="dark"?"#0c1420":"#005BBB");
}
(function initTheme(){
  const saved=Store.theme();
  const t=saved || (matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");
  applyTheme(t);
})();
document.getElementById("themeBtn").onclick=()=>{
  const t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";
  applyTheme(t); Store.setTheme(t);
};

/* ---------- 11. טוסט ---------- */
let toastTimer;
function toast(msg){
  const el=document.getElementById("toast");
  el.textContent=msg; el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove("show"),1800);
}

/* ---------- 12. PWA: Service Worker + התקנה ---------- */
if("serviceWorker" in navigator){
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  });
}
let deferredPrompt=null;
window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault(); deferredPrompt=e;
  if(!sessionStorage.getItem("gtd_install_dismissed"))
    document.getElementById("installBanner").hidden=false;
});
document.getElementById("installBtn").onclick=async()=>{
  document.getElementById("installBanner").hidden=true;
  if(deferredPrompt){ deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; }
};
document.getElementById("installDismiss").onclick=()=>{
  document.getElementById("installBanner").hidden=true;
  sessionStorage.setItem("gtd_install_dismissed","1");
};

/* ---------- 13. אתחול ---------- */
Speak.init();
go("home");
