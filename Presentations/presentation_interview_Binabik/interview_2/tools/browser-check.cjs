const fs=require('node:fs');const path=require('node:path');const assert=require('node:assert/strict');
const {chromium,webkit}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root=path.resolve(__dirname,'..');
const out=process.env.QA_OUTPUT || path.join(require('node:os').tmpdir(),'binabik-interview2-qa');fs.mkdirSync(out,{recursive:true});
const url='file://'+root+'/index.html';
async function layout(p){return p.evaluate(()=>{
 const view=document.querySelector('.slide:not([hidden]) .view:not([hidden])');const vr=view.getBoundingClientRect();const problems=[];
 for(const el of view.querySelectorAll('*')){
  if(el.tagName==='SVG'||el.closest('svg')||el.tagName==='IMG'||el.tagName==='VIDEO')continue;
  const r=el.getBoundingClientRect(),st=getComputedStyle(el);if(!r.width||!r.height||st.position==='absolute')continue;
  if(r.bottom>vr.bottom+2||r.right>vr.right+2||r.left<vr.left-2||r.top<vr.top-2)problems.push({tag:el.tagName,cls:el.className,text:el.textContent.slice(0,80),outside:[r.right-vr.right,r.bottom-vr.bottom]});
  if(el.scrollWidth>el.clientWidth+3&&st.overflowX!=='visible')problems.push({overflow:el.className,text:el.textContent.slice(0,80),w:[el.clientWidth,el.scrollWidth]});
 }
 return problems;
});}
(async()=>{
const b=await chromium.launch({headless:true});const p=await b.newPage({viewport:{width:1920,height:1080}});const errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('requestfailed',r=>errors.push('request '+r.url()+' '+r.failure()?.errorText));await p.goto(url);await p.evaluate(()=>document.fonts.ready);const info=await p.evaluate(()=>({slides:PRESENTATION.slides.length,total:PRESENTATION.totalSeconds,details:PRESENTATION.slides.reduce((a,s)=>a+s.details.length,0)}));assert.deepEqual(info,{slides:31,total:1245,details:108});
assert.equal(await p.locator('[data-slide-number]').count(),0);
assert.equal(await p.getByRole('tab',{name:'Project timeline',exact:true}).count(),0);
assert.equal(await p.getByText('How do these projects fit together?',{exact:true}).count(),0);
assert.equal(await p.locator('.slide-header .eyebrow').evaluateAll(es=>es.every(e=>e.textContent.endsWith('Technical interview')&&!e.textContent.includes('interview 2'))),true);
const records=[];
for(const viewport of [{width:1920,height:1080},{width:1440,height:900}]){
 await p.setViewportSize(viewport);
 for(let n=1;n<=31;n++){
  const id='s'+String(n).padStart(2,'0');await p.evaluate(id=>PRESENTATION.goTo(id),id);await p.waitForTimeout(180);await p.locator(`#${id}-view-overview img`).evaluateAll(async imgs=>Promise.all(imgs.map(i=>i.decode().catch(()=>{}))));
  const bad=await layout(p);records.push({id,viewport,bad});
  if(viewport.width===1920)await p.screenshot({path:`${out}/${id}.png`});
  assert.equal(await p.locator('#counter').textContent(),`${String(n).padStart(2,'0')} / 31`);
 }
}
await p.setViewportSize({width:1920,height:1080});
const detailRecords=[];
const meta=await p.evaluate(()=>PRESENTATION.slides);
for(const s of meta){
 await p.evaluate(id=>PRESENTATION.goTo(id),s.id);const counter=await p.locator('#counter').textContent();const progress=await p.locator('#progress').getAttribute('style');const title=await p.locator(`#${s.id}-title`).textContent();
 for(const d of s.details){
  await p.locator(`#${s.id}-tab-${d.id}`).click();assert.equal(await p.locator('#counter').textContent(),counter);assert.equal(await p.locator('#progress').getAttribute('style'),progress);assert.equal(await p.locator(`#${s.id}-title`).textContent(),title);
  await p.locator(`#${s.id}-view-${d.id} img`).evaluateAll(async imgs=>Promise.all(imgs.map(i=>i.decode().catch(()=>{}))));
  const bad=await layout(p);detailRecords.push({id:s.id+'/'+d.id,bad});
  if(d.id==='d1'||['s10','s15','s19','s20','s21','s22','s25','s29'].includes(s.id))await p.screenshot({path:`${out}/${s.id}-${d.id}.png`});
  await p.locator(`#${s.id}-view-${d.id} [data-back]`).click();assert.equal(await p.evaluate(()=>PRESENTATION.view),'overview');assert.equal(await p.evaluate(()=>document.activeElement.id),`${s.id}-tab-${d.id}`);
 }
}
// Keyboard back, roving focus, main navigation and reset.
await p.evaluate(()=>PRESENTATION.goTo('s15'));await p.locator('#s15-tab-d4').click();await p.keyboard.press('Escape');assert.equal(await p.evaluate(()=>PRESENTATION.view),'overview');assert.equal(await p.evaluate(()=>document.activeElement.id),'s15-tab-d4');
await p.locator('#s15-tab-overview').focus();await p.keyboard.press('ArrowRight');assert.equal(await p.evaluate(()=>PRESENTATION.view),'overview');await p.keyboard.press('Enter');assert.equal(await p.evaluate(()=>PRESENTATION.view),'d1');await p.keyboard.press('PageDown');assert.equal(await p.evaluate(()=>PRESENTATION.current),'s16');assert.equal(await p.evaluate(()=>PRESENTATION.view),'overview');await p.keyboard.press('PageUp');assert.equal(await p.evaluate(()=>PRESENTATION.view),'overview');
await p.keyboard.press('o');assert.equal(await p.locator('#menu-content [data-go]').count(),31);await p.keyboard.press('Escape');assert.equal(await p.locator('#slide-menu').evaluate(x=>x.open),false);
await p.evaluate(()=>PRESENTATION.goTo('s01'));await p.mouse.move(800,500);await p.mouse.wheel(0,100);await p.mouse.wheel(0,-100);await p.waitForTimeout(150);assert.equal(await p.evaluate(()=>PRESENTATION.current),'s01');assert.equal(await p.evaluate(()=>PRESENTATION.view),'overview');
await p.evaluate(()=>PRESENTATION.goTo('s31'));assert.equal(await p.locator('#next').isDisabled(),true);assert.equal(await p.locator('#progress').evaluate(el=>el.style.width),'100%');
// Deep links remain in the parent counter.
await p.goto(url+'#s20/d3');await p.waitForTimeout(180);assert.equal(await p.evaluate(()=>PRESENTATION.current),'s20');assert.equal(await p.evaluate(()=>PRESENTATION.view),'d3');assert.equal(await p.locator('#counter').textContent(),'20 / 31');
// Local videos: decode, play, hidden stop, bounded replay.
const videos=[];
for(const id of ['s22','s26']){
 await p.evaluate(id=>PRESENTATION.goTo(id),id);await p.locator(`#${id} .video-action`).click();await p.waitForFunction(id=>{const v=document.querySelector(`#${id} video`);return !v.paused&&v.readyState>=2},id,{timeout:10000});
 const before=await p.locator(`#${id} video`).evaluate(v=>({duration:v.duration,ready:v.readyState,playing:!v.paused}));
 await p.locator(`#${id}-tab-d1`).click();assert.equal(await p.locator(`#${id} video`).evaluate(v=>v.paused),true);
 await p.locator(`#${id}-tab-overview`).click();await p.locator(`#${id} .video-action`).click();await p.locator(`#${id} video`).evaluate(v=>v.currentTime=9.95);await p.waitForTimeout(400);assert.equal(await p.locator(`#${id} video`).evaluate(v=>v.paused),true);videos.push({id,...before});
}
const missing=await p.locator('img').evaluateAll(imgs=>imgs.filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src));
fs.writeFileSync(out+'/qa.json',JSON.stringify({info,records,detailRecords,errors,missing,videos},null,2));
console.log(JSON.stringify({info,mainIssues:records.filter(x=>x.bad.length),detailIssues:detailRecords.filter(x=>x.bad.length),errors,missing,videos},null,2));
await b.close();
// A second engine smoke test for a file-based bundle.
try{const b2=await webkit.launch({headless:true});const q=await b2.newPage({viewport:{width:1440,height:900}});await q.goto(url+'#s10/d3');assert.equal(await q.locator('#counter').textContent(),'10 / 31');await q.keyboard.press('Escape');assert.equal(await q.evaluate(()=>PRESENTATION.view),'overview');await q.screenshot({path:out+'/webkit.png'});await b2.close();console.log('WebKit file smoke: passed');}catch(e){console.log('WebKit smoke unavailable / failed: '+e.message);}
})().catch(e=>{console.error(e);process.exit(1)});
