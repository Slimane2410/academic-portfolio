'use strict';
// All visible content is local. Subviews never enter the main slide array.
const deck = window.DECK;
const slides = deck.slides;
const stage = document.getElementById('stage');
const menu = document.getElementById('slide-menu');
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const bold = text => esc(text).replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
const idLabel = id => id.slice(1);
const math = value => esc(value).replace(/([A-Za-zΑ-ω][A-Za-z0-9α-ω]*?)_([A-Za-z0-9α-ω]+)/g,'$1<sub>$2</sub>');
function media(v, cls='') {
 return `<figure class="media ${v.crop==='cover'?'cover':''} ${cls}"><img src="${esc(v.file)}" alt="${esc(v.caption || 'Project photograph')}" loading="lazy" decoding="async">${v.caption?`<figcaption>${esc(v.caption)}</figcaption>`:''}</figure>`;
}
function visual(v) {
 const cap = v.caption ? `<p class="caption">${esc(v.caption)}</p>` : '';
 if (v.type==='image') return media(v);
 if (v.type==='parallax') return `<div class="visual-wrap"><div class="parallax-visual">${parallaxDiagram()}</div><div class="math-block parallax-equation">${v.text.split('\n').map(x=>`<div class="mathline">${math(x)}</div>`).join('')}<p class="equation-caption">${esc(v.caption)}</p></div></div>`;
 if (v.type==='equation') return `<div class="visual-wrap"><div class="math-block">${v.text.split('\n').map(x=>`<div class="mathline">${math(x)}</div>`).join('')}<p class="equation-caption">${esc(v.caption)}</p></div></div>`;
 if (v.type==='code') return `<div class="visual-wrap"><pre class="native-code"><code>${esc(v.text)}</code></pre>${cap}</div>`;
 if (v.type==='table') return `<div class="visual-wrap"><div class="table-wrap"><table class="native-table"><thead><tr>${v.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${v.rows.map(r=>`<tr>${r.map(x=>`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${cap}</div>`;
 if (v.type==='flow') return `<div class="visual-wrap"><div class="flow-visual">${v.nodes.map((n,i)=>`${i?'<div class="flow-arrow" aria-hidden="true">↓</div>':''}<div class="flow-node">${esc(n)}</div>`).join('')}</div>${cap}</div>`;
 return '';
}
function svg(label,body,viewBox='0 0 1400 480') {
 return `<svg class="diagram" viewBox="${viewBox}" role="img" aria-label="${esc(label)}">${body}</svg>`;
}
svg.count=0;
function node(x,y,w,h,title,sub='',blue=false) {
 return `<rect class="${blue?'node-blue':'node'}" x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/><text class="label" x="${x+w/2}" y="${y+h/2-(sub?6:-9)}" text-anchor="middle">${title}</text>${sub?`<text class="sub" x="${x+w/2}" y="${y+h/2+32}" text-anchor="middle">${sub}</text>`:''}`;
}
function wire(d){return `<path class="wire" d="${d}"/>`;}
function arrow(x1,y1,x2,y2,color='#0284c7') {
 const a=Math.atan2(y2-y1,x2-x1),r=13;
 return `<path d="M${x1} ${y1}L${x2} ${y2}M${x2-r*Math.cos(a-.55)} ${y2-r*Math.sin(a-.55)}L${x2} ${y2}L${x2-r*Math.cos(a+.55)} ${y2-r*Math.sin(a+.55)}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
}
function architecture() {
 return svg('Offline nominal plan feeds a measured perception, correction and wheel-command loop',
 node(475,5,410,105,'Offline nominal','Static scene only',true)+arrow(680,110,680,181)+
 node(25,200,285,125,'Camera → pose','Measured state')+node(375,200,370,125,'Online correction','Current observations',true)+node(810,200,270,125,'Wheel conversion','Heading + limits')+node(1145,200,235,125,'Rover','Supplier board')+
 arrow(310,262,360,262)+arrow(745,262,795,262)+arrow(1080,262,1130,262)+
 wire('M1262 326V420H168V342')+`<text class="sub" x="705" y="462" text-anchor="middle">Physical motion is measured again · positions, forces, commands and timing are logged</text>`);
}
function arenaDiagram(mode='task') {
 const hasRef = mode==='forces'||mode==='observation';
 let b='<rect x="245" y="20" width="800" height="430" fill="#fff" stroke="#d0dce5" stroke-width="2" rx="7"/>';
 b+='<path d="M290 400 C400 410 440 80 600 100 S850 160 1000 55" fill="none" stroke="#9aacbf" stroke-width="4" stroke-dasharray="10 9"/>';
 b+='<circle cx="615" cy="285" r="56" fill="#e8edf2" stroke="#8797ab" stroke-width="2"/><text class="sub" x="615" y="292" text-anchor="middle">Fixed</text>';
 b+='<circle cx="455" cy="208" r="120" fill="#0284c709" stroke="#80bddd" stroke-width="2" stroke-dasharray="8 7"/>';
 b+='<circle cx="455" cy="208" r="29" fill="#0284c7"/><text class="sub" x="288" y="180">Robot</text>';
 b+='<circle cx="760" cy="180" r="30" fill="#9ca9b8"/>'+arrow(760,180,690,221,'#8a9aaf');
 b+='<circle cx="940" cy="340" r="30" fill="#9ca9b8"/>'+arrow(940,340,850,319,'#8a9aaf');
 b+='<circle cx="995" cy="60" r="15" fill="none" stroke="#0284c7" stroke-width="3"/><text class="sub" x="1070" y="67">Goal</text>';
 if(hasRef){b+='<circle cx="547" cy="108" r="10" fill="#0284c7"/>';b+=arrow(455,208,537,119);b+='<text class="sub" x="548" y="80">Reference</text>';}
 if(mode==='forces') {
  b+=arrow(455,208,368,165,'#b16a55')+arrow(455,208,392,310,'#7b8798');
  b+='<text class="sub" x="280" y="134">Repulsion</text><text class="sub" x="280" y="347">Damping</text>';
 }
 b+='<text class="sub" x="700" y="492" text-anchor="middle">Explanatory geometry · not a recorded trajectory</text>';
 return svg('Explanatory task geometry with nominal route and independently moving agents',b,'0 0 1400 515');
}
function parallaxDiagram() {
 return svg('Pinhole camera ray through a raised marker intersects the ground beyond its true vertical projection',`
 <path d="M100 350H820" stroke="#9cacbd" stroke-width="3"/><text class="sub" x="105" y="382">Ground plane</text>
 <circle cx="270" cy="42" r="11" fill="#0284c7"/><text class="label" x="310" y="43">Camera</text>
 <path d="M270 42L270 350" stroke="#b6c4d2" stroke-width="2" stroke-dasharray="7 6"/>
 <path d="M270 42L750 350" stroke="#0284c7" stroke-width="3"/>
 <circle cx="630" cy="273" r="10" fill="#0284c7"/><text class="sub" x="565" y="237">Raised marker</text>
 <path d="M630 273V350" stroke="#b16a55" stroke-width="3" stroke-dasharray="7 6"/>
 <circle cx="630" cy="350" r="7" fill="#b16a55"/><circle cx="750" cy="350" r="7" fill="#0284c7"/>
 <text class="sub" x="615" y="410" text-anchor="middle">True ground</text><text class="sub" x="615" y="439" text-anchor="middle">projection</text>
 <text class="sub" x="800" y="410" text-anchor="middle">Apparent</text><text class="sub" x="800" y="439" text-anchor="middle">ground point</text>
 <text class="sub" x="55" y="190">h_camera</text><text class="sub" x="658" y="310">h_marker</text>
 <text class="sub" x="450" y="490" text-anchor="middle">Explanatory geometry · not to scale</text>`,'0 0 900 510');
}
function potentialPlot() {
 const points=Array.from({length:101},(_,i)=>{const x=i/100;return `${250+850*x},${390-300*Math.pow(1-x*x,3)}`;}).join(' ');
 return svg('Normalized compact polynomial potential, an analytical explanatory curve',`<path d="M250 45V390H1190" stroke="#9cacbd" stroke-width="2" fill="none"/><polyline points="${points}" fill="none" stroke="#0284c7" stroke-width="5"/><text class="label" x="90" y="85">V / γ</text><text class="sub" x="226" y="424">0</text><text class="sub" x="1088" y="424">1</text><text class="label" x="1185" y="440">d / R</text><text class="label" x="600" y="100">[1 − (d/R)²]³</text><text class="sub" x="680" y="157">Zero value, slope and curvature at the cutoff</text><circle cx="1100" cy="390" r="7" fill="#0284c7"/><text class="sub" x="700" y="485" text-anchor="middle">Analytical curve, 0 ≤ d/R ≤ 1 · not a measured before/after result</text>`,'0 0 1400 510');
}
function video(v) {
 return `<figure class="media dark video-wrap"><video ${v.sound?'':'muted'} playsinline preload="none" poster="${esc(v.poster)}" data-src="${esc(v.file)}" data-start="${v.start}" data-end="${v.end}" aria-label="${esc(v.label)}"></video>${v.hideCaption?'':`<span class="video-caption">${esc(v.label)}</span>`}<button class="video-action" type="button" aria-label="Play video">▶ Play</button><p class="video-error" hidden>Video unavailable. Continue with the poster.</p></figure>`;
}
function points(s){return `<ul class="main-points">${s.points.map(p=>`<li>${bold(p)}</li>`).join('')}</ul>`;}
function split(s,v=s.visual,wide=false){return `<div class="split-layout ${wide?'wide':''}"><div class="split-copy"><h2 class="lead">${esc(s.message)}</h2>${points(s)}</div>${visual(v)}</div>`;}
function columns(items) {return `<div class="flat-columns">${items.map(([title,body],i)=>`<div class="flat-col"><p class="number">0${i+1}</p><h2>${title}</h2><p>${body}</p></div>`).join('')}</div>`;}
function mainContent(s) {
 const v=s.visual;
 if(s.layout==='hero')return `<div class="hero-layout"><div><h2 class="lead">Understand.<br>Build.<br><span class="blue">Measure.</span></h2><p class="hero-name">Slimane Aouanouk</p><p class="hero-sub">Technical interview · November 2026</p></div><div class="hero-media-pair"><div class="hero-rover"><figure class="media hero-system-photo"><img src="assets/images/system.jpg" alt="The physical research rover beside the computer running its software interface" loading="eager"></figure><p class="hero-project-caption">Collision avoidance · Singapore<small>Research internship</small></p></div><figure class="hero-g1"><img src="assets/images/g1.jpg" alt="Official Unitree G1 product image, illustrating the platform of my ongoing VLA project" loading="eager"><figcaption>Unitree G1<small>Ongoing VLA project</small></figcaption></figure></div></div>`;
 if(v.type==='descartes-video')return `<div class="split-layout descartes-layout"><div class="split-copy"><h2 class="lead">Digital twins<br>for Singapore</h2>${points(s)}</div><div class="descartes-media">${video(s.video)}<a class="source-video-link" href="${esc(s.video.source_url)}" target="_blank" rel="noopener noreferrer">DesCartes Program · Full video on YouTube ↗</a></div></div>`;
 if(v.type==='image')return split(s);
 if(v.type==='projects')return `<div class="projects">${[['Singapore','Completed physical research','arena.jpg','Technical deep dive'],['FANUC','Design and simulation','fanuc-cell-user.png','Industrial perspective'],['Unitree G1','Ongoing master project','g1-portrait-user.png','Manipulation direction']].map(([name,status,file,scope])=>`<div class="project">${media({file:'assets/images/'+file,caption:'',crop:'cover'},name==='Unitree G1'?'g1-photo':'')}<div><h2>${name}</h2><p>${status}</p><p class="status">${scope}</p></div></div>`).join('')}</div>`;
 if(v.type==='success-definition')return `<div class="success-layout"><div class="clearance-panel"><p class="success-kicker">01 · Edge-to-edge clearance</p><div class="clearance-equation">d = ‖x − c‖ − r<sub>robot</sub> − r<sub>entity</sub></div>${svg('Two circular safety envelopes and their edge-to-edge clearance',`<circle cx="265" cy="190" r="100" fill="#eaf5fc" stroke="#0284c7" stroke-width="3"/><circle cx="700" cy="190" r="75" fill="#edf0f4" stroke="#8b9bad" stroke-width="3"/><path d="M265 190H700" stroke="#9aaabc" stroke-dasharray="7 7" stroke-width="2"/><circle cx="265" cy="190" r="5" fill="#0284c7"/><circle cx="700" cy="190" r="5" fill="#74869b"/><path d="M265 190H365 M625 190H700" stroke="#74869b" stroke-width="3"/><path d="M365 165V215 M625 165V215 M365 190H625" stroke="#0284c7" stroke-width="4"/><text x="495" y="165" text-anchor="middle" class="label">d</text><text x="265" y="325" text-anchor="middle" class="label">Robot · x</text><text x="700" y="325" text-anchor="middle" class="label">Obstacle / agent · c</text><text x="305" y="227" class="sub">r_robot</text><text x="650" y="227" class="sub">r_entity</text>`,'100 50 760 320')}<p class="clearance-signs"><span>d &gt; 0 · separated</span><span>d = 0 · touching</span><span>d &lt; 0 · overlap</span></p></div><div class="success-indicators"><p class="success-kicker">02 · Binary run indicators</p><div class="success-indicator"><h2>I<sub>safe</sub> = 1</h2><p>No collision · no arena exit<br>No execution error</p></div><div class="success-indicator"><h2>I<sub>goal</sub> = 1</h2><p>‖x(T) − x<sub>goal</sub>‖ ≤ τ</p><small>τ depends on the evaluation protocol</small></div><div class="success-joint"><h2>I<sub>joint</sub> = I<sub>safe</sub> × I<sub>goal</sub></h2><p>Both conditions must hold.</p></div></div></div>`;
 if(v.type==='simulation-video')return `<div class="simulation-video-layout">${video({...s.video,hideCaption:true})}</div>`;
 if(v.type==='arena')return `<div class="diagram-layout"><div class="svg-wrap">${arenaDiagram()}</div><p class="large-note">One controlled rover · independent disturbances · safe arrival</p></div>`;
 if(v.type==='limits')return columns([['Observe locally','Current agent positions within an influence region'],['Plan offline','Static geometry with soft motion penalties'],['Execute physically','A nonholonomic rover and imperfect actuation']]);
 if(v.type==='architecture')return `<div class="diagram-layout"><div class="svg-wrap">${architecture()}</div><p class="concept-label">Explanatory architecture · no agent future enters the controller</p></div>`;
 if(v.type==='ownership')return `<div class="diagram-layout">${columns([['Implement','Nominal planner and correction interfaces'],['Integrate','Camera calibration, command conversion and timing'],['Evaluate','Physical trials, logs and repeatability']])}<p class="large-note"><span class="blue">Mathis:</span> coefficient selection · <span class="muted">Published methods and supplier firmware retain their original attribution.</span></p></div>`;
 if(v.type==='offline-cost')return `<div class="math-main"><div>${visual({type:'equation',text:'J_h = action + λ_s J_s + J_v + J_a\n\naction = Σ Δt [α/2 ‖vₖ‖² + V(x_mid)]',caption:'Compact notation of draft Eq. (13) · penalties remain soft'})}<p class="support">Fixed endpoints · 2(N − 1) interior coordinates</p></div><div>${media({file:'assets/images/nominal-family.png',caption:'Simulation example'})}</div></div>`;
 if(v.type==='potential')return `<div class="diagram-layout"><div class="svg-wrap">${potentialPlot()}</div><p class="large-note">Smoother objective at the cutoff · no isolated convergence gain claimed</p></div>`;
 if(v.type==='observation')return `<div class="split-layout wide"><div><h2 class="lead">Current state.<br>Known reference.</h2>${points(s)}</div>${media({file:'assets/images/metric-tracking.jpg',caption:'Original camera-based metric tracking'})}</div>`;
 if(v.type==='forces')return `<div class="diagram-layout"><div class="svg-wrap">${arenaDiagram('forces')}</div><div class="mathline" style="font-size:31px;text-align:center">${math('F = F_att + F_mobile + F_static + F_wall − c_d v')}</div></div>`;
 if(v.type==='integration')return `<div class="math-main"><div>${visual({type:'equation',text:'aₖ = clip_a(Fₖ / m)\nvₖ₊₁ = clip_v(vₖ + Δt aₖ)\nx_intention = x_measured + Δt vₖ₊₁',caption:'Semi-implicit Euler · next physical update returns to the camera'})}</div><div>${visual({type:'flow',nodes:['Observe + build force','Clip a → update v → clip v','Heading → wheels → serial'],caption:'Experimental update order'})}</div></div>`;
 if(v.type==='causality')return columns([['Known in advance','My stored nominal path'],['Observed now','Agent position snapshots'],['Not available','An agent’s true future trajectory']]);
 if(v.type==='incident')return `<div class="diagram-layout">${columns([['Observed','Active repulsion, weak translation, controlled timeout'],['Diagnosed','Inspect how force becomes a realizable motion'],['Developed','Explicit dynamics, path progress and wheel conversion']])}<p class="caption">Early physical trial, July 14 · later BIS campaign uses an evolved chain · no single-change causal claim</p></div>`;
 if(v.type==='hardware')return `<div class="split-layout wide"><div>${points(s)}<p class="support">Camera → AP → Wi-Fi → Pi<br>Pi → onboard serial → motor board</p></div><div class="dual-photo">${media({file:'assets/images/camera.jpg',caption:'Overhead camera'})}${media({file:'assets/images/system.jpg',caption:'Original system photograph',crop:'cover'})}</div></div>`;
 if(v.type==='wheel')return `<div class="math-main"><div>${visual({type:'flow',nodes:['Planar velocity → desired heading','Heading error → translation + turn','Left / right → limits → smoothing'],caption:'My high-level conversion'})}</div><div>${visual({type:'equation',text:'u_L = u_v − u_ω\nu_R = u_v + u_ω',caption:'Supplier firmware executes these motor inputs'})}<p class="support">External camera feedback<br>No wheel encoders on this platform</p></div></div>`;
 if(v.type==='calibration')return `<div class="calibration-layout"><div class="calibration-case"><h2>Ground plane</h2><div class="calibration-value">36.3 <span class="muted">→</span> <span class="blue">5.8</span> <span style="font-size:34px">mm</span></div><div><div class="bar-track"><div class="bar-fill" style="width:${5.8/36.3*100}%"></div></div><div class="bar-labels"><span>After / before error</span><span>~84% lower</span></div></div><p>Intrinsics + recomputed homography<br>9 known ground positions</p></div><div class="calibration-case"><h2>Raised rover marker</h2><div class="calibration-value">60.8 <span class="muted">→</span> <span class="blue">11.6</span> <span style="font-size:34px">mm</span></div><div><div class="bar-track"><div class="bar-fill" style="width:${11.6/60.8*100}%"></div></div><div class="bar-labels"><span>After / before error</span><span>~81% lower</span></div></div><p>Parallax correction<br>5 known rover positions</p></div></div>`;
 if(v.type==='timing')return `<div class="timing-layout"><div class="timing-bars">${[['Vision',32.94,false],['Serial',8.43,true],['Corrector',.72,true]].map(([label,ms,gray])=>`<div class="timing-bar"><div class="timing-bar-head"><span>${label}</span><strong>${ms.toFixed(2)} ms</strong></div><div class="bar-track"><div class="bar-fill ${gray?'gray':''}" style="width:${ms/50*100}%"></div></div></div>`).join('')}<p class="timing-budget">Same scale: 50 ms target period · means from the 20-run single-agent block</p></div><div class="timing-aside"><div class="metric-big blue">≈20 <small>Hz</small></div><p class="metric-label">Measured physical loop</p><p class="small-stat">Detection: <strong>29.07 ms</strong><br>already included in vision</p><p class="caption" style="margin-top:25px">Rate and sensor-to-action latency are different measurements.</p></div></div>`;
 if(v.type==='repeatability')return `<div class="repeat-layout">${video(s.video)}<div class="repeat-side"><div><div class="metric-big blue">40/40</div><p class="metric-label">Physical goal arrivals</p></div><div class="metrics-row"><div><div class="metric-big" style="font-size:65px">6.3 <small>cm</small></div><p class="metric-label">Minimum agent clearance</p></div></div><p class="caption">Two frozen tasks · 1–2 moving agents<br>No observed contact or negative clearance<br>39 comparable-layout repeats for some aggregates</p></div></div>`;
 if(v.type==='results')return `<div class="split-layout wide"><div><h2 class="lead">Measure the whole chain.</h2>${points(s)}</div>${media({file:'assets/images/sim-real.png',caption:'Original simulation / real geometric comparison'})}</div>`;
 if(v.type==='fanuc-task')return `<div class="split-layout wide"><div><h2 class="lead">Transport.<br>Position.<br><span class="blue">Pour.</span></h2>${points(s)}</div><div class="task-pair">${media({file:'assets/images/foundry-task.png',caption:'Observed lab operation'})}${media({file:'assets/images/fanuc-mold.png',caption:'Original mold CAD'})}</div></div>`;
 if(v.type==='fanuc-choice')return `<div class="split-layout wide"><div><h2 class="lead">Robot + tool + task geometry</h2>${points(s)}</div>${media({file:'assets/images/fanuc-gripper.png',caption:'Original modeled robot and gripping geometry'})}</div>`;
 if(v.type==='fanuc-video')return `<div class="split-layout"><div><h2 class="lead">A concrete sequence in a modeled cell</h2>${points(s)}</div>${video(s.video)}</div>`;
 if(v.type==='fanuc-limits')return `<div class="split-layout wide"><div><h2 class="lead">The physical checks come next.</h2>${points(s)}</div>${media({file:'assets/images/fanuc-cell.png',caption:'ROBOGUIDE model · not an installed cell'})}</div>`;
 if(v.type==='g1-status')return `<div class="status-layout">${media({file:'assets/images/g1.jpg',caption:'Unitree G1 · platform reference'},'g1-photo clean')}<div class="status-rows">${[['Done','Literature reading and project framing'],['In progress','Task choice and pipeline preparation'],['Next','Interfaces, demonstrations, adaptation and evaluation']].map(([h,p])=>`<div class="status-row"><h2>${h}</h2><p>${p}</p></div>`).join('')}<p class="caption">Current project · no trained policy or measured robot result shown</p></div></div>`;
 if(v.type==='g1-pipeline')return `<div class="pipeline-main"><div class="pipeline-nodes">${['Demonstrations','Dataset','Policy adaptation','Robot evaluation'].map((n,i)=>`<div class="pipeline-node"><span>0${i+1}</span><h2>${n}</h2></div>`).join('')}</div><p class="pipeline-foot"><strong class="blue">Planned pipeline</strong> · OpenPI / π₀ family as a candidate foundation<br>Transfer the methods and evaluation habits; validate each new robot interface.</p></div>`;
 if(v.type==='fit')return columns([['Robot integration','Connect sensing, decisions and physical execution'],['Experimental diagnosis','Use logs and measurements to understand failures'],['Task evaluation','Define success, test repeatability and expose limits']]);
 if(v.type==='closing')return `<div class="closing-layout"><div><blockquote class="closing-quote">${esc(v.text)}</blockquote><p class="closing-name">Slimane Aouanouk · Six-month internship</p></div>${media({file:'assets/images/system.jpg',caption:'',crop:'cover'})}</div>`;
 return '';
}
function detailContent(v) {
 if(v.visual.type==='education-pillars')return `<div class="background-toolbar"><button class="return-button" data-back>← Back to slide</button></div><div class="education-pillars" role="list" aria-label="My educational background">${v.visual.stages.map(stage=>`<div class="education-pillar" role="listitem"><h2 class="education-name">${esc(stage.name)}</h2><h3 class="education-headline">${esc(stage.headline)}</h3><div class="education-details">${stage.details.map(line=>`<p>${esc(line)}</p>`).join('')}</div></div>`).join('')}</div>`;
 return `<div class="detail-top"><div><span class="detail-kind">${esc(v.kind)}</span><h2>${esc(v.question)}</h2></div><button class="return-button" data-back>← Back to slide</button></div><div class="detail-grid"><div class="detail-copy"><p class="detail-answer">${esc(v.answer)}</p><ul class="detail-reason">${v.reason.map(r=>`<li>${esc(r)}</li>`).join('')}</ul></div>${visual(v.visual)}</div>`;
}
// Only main slides are sections. Each owns its tab panels.
stage.innerHTML=slides.map(s=>{
 const all=[{id:'overview',label:'Overview'},...s.details];
 return `<section class="slide" id="${s.id}" aria-labelledby="${s.id}-title" hidden><header class="slide-header"><div><p class="eyebrow">${esc(s.section)} · Technical interview</p><h1 id="${s.id}-title" tabindex="-1">${esc(s.title)}</h1></div><span class="slide-id">${idLabel(s.id)}</span></header><div class="tabs" role="tablist" aria-label="Details for slide ${idLabel(s.id)}">${all.map((v,i)=>`<button type="button" role="tab" id="${s.id}-tab-${v.id}" aria-selected="${i===0}" aria-controls="${s.id}-view-${v.id}" tabindex="${i===0?0:-1}" data-view="${v.id}">${esc(v.label)}</button>`).join('')}</div><div class="views">${all.map((v,i)=>`<div class="view" id="${s.id}-view-${v.id}" data-view-id="${v.id}" role="tabpanel" aria-labelledby="${s.id}-tab-${v.id}" ${i?'hidden':''}>${i?detailContent(v):mainContent(s)}</div>`).join('')}</div><footer class="slide-footer"><span class="footer-note">${esc(s.message)}</span><span class="footer-section">${idLabel(s.id)} / ${slides.length}</span></footer></section>`;
}).join('');
let currentId='s01', currentView='overview',menuOpener=null;
const detailOpeners=new Map();
let playbackEpoch=0;
function stopVideos() {playbackEpoch++;stage.querySelectorAll('video').forEach(v=>v.pause());}
function updateVideo(v,done=false) {
 const b=v.closest('.video-wrap').querySelector('.video-action');
 b.textContent=done?'↻ Replay':v.paused?'▶ Play':'Ⅱ Pause';b.setAttribute('aria-label',done?'Replay video':v.paused?'Play video':'Pause video');
}
stage.querySelectorAll('video').forEach(v=>{
 const button=v.closest('.video-wrap').querySelector('.video-action');
 v.addEventListener('playing',()=>updateVideo(v));v.addEventListener('pause',()=>updateVideo(v,v.dataset.complete==='true'));
 v.addEventListener('timeupdate',()=>{if(v.currentTime>=Number(v.dataset.end)){v.dataset.complete='true';v.pause();updateVideo(v,true);}});
 v.addEventListener('ended',()=>{v.dataset.complete='true';updateVideo(v,true);});
 v.addEventListener('error',()=>{v.closest('.video-wrap').querySelector('.video-error').hidden=false;});
 button.addEventListener('click',async()=>{
  if(!v.paused){v.pause();return;}
  stopVideos();const epoch=playbackEpoch;
  try {
   if(!v.hasAttribute('src')){v.src=v.dataset.src;v.load();}
   if(v.dataset.complete==='true'||v.currentTime<Number(v.dataset.start)||v.currentTime>=Number(v.dataset.end))v.currentTime=Number(v.dataset.start);
   v.dataset.complete='false';await v.play();
   if(epoch!==playbackEpoch||v.closest('.slide').hidden||v.closest('.view').hidden)v.pause();
  } catch {updateVideo(v);}
 });
});
function writeHash(){const h='#'+currentId+(currentView==='overview'?'':'/'+currentView);if(location.hash!==h)history.replaceState(null,'',h);}
function selectView(viewId,{focus=false,restore=false,write=true}={}) {
 const section=document.getElementById(currentId),valid=section.querySelector(`[data-view="${viewId}"]`);
 if(!valid)viewId='overview';
 if(viewId!=='overview')detailOpeners.set(currentId,section.querySelector(`[data-view="${viewId}"]`));
 stopVideos();currentView=viewId;
 section.querySelectorAll('[role="tab"]').forEach(t=>{const selected=t.dataset.view===viewId;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;});
 section.querySelectorAll('.view').forEach(p=>p.hidden=p.dataset.viewId!==viewId);
 const panel=section.querySelector(`.view[data-view-id="${viewId}"]`);panel.querySelectorAll('img').forEach(i=>i.loading='eager');
 if(write)writeHash();
 if(restore){const opener=detailOpeners.get(currentId);(opener||section.querySelector('[data-view="overview"]')).focus({preventScroll:true});}
 else if(focus)section.querySelector(`[data-view="${viewId}"]`).focus({preventScroll:true});
}
function goTo(id,{focus=true,view='overview',write=true}={}) {
 if(!slides.some(s=>s.id===id))id='s01';
 stopVideos();currentId=id;currentView='overview';
 stage.querySelectorAll('.slide').forEach(s=>{s.hidden=s.id!==id;s.classList.remove('entering');});
 const active=document.getElementById(id);active.classList.add('entering');
 selectView(view,{write:false});
 const i=slides.findIndex(s=>s.id===id);
 document.getElementById('counter').textContent=`${String(i+1).padStart(2,'0')} / ${slides.length}`;
 document.getElementById('progress').style.width=`${(i+1)/slides.length*100}%`;
 document.getElementById('previous').disabled=i===0;document.getElementById('next').disabled=i===slides.length-1;
 document.title=`${String(i+1).padStart(2,'0')} · ${slides[i].title} — Slimane Aouanouk`;
 if(write)writeHash();
 if(focus)active.querySelector('h1').focus({preventScroll:true});
}
function step(direction){const i=slides.findIndex(s=>s.id===currentId),s=slides[i+direction];if(s)goTo(s.id);}
function fitStage(){const w=document.querySelector('.workspace'),style=getComputedStyle(w),availableW=w.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight),availableH=w.clientHeight-parseFloat(style.paddingTop)-parseFloat(style.paddingBottom),scale=Math.min(availableW/1600,availableH/900);document.querySelector('.stage-shell').style.cssText=`width:${1600*scale}px;height:${900*scale}px`;stage.style.transform=`scale(${scale})`;}
function closeMenu(){if(menu.open)menu.close();menuOpener?.focus({preventScroll:true});}
function showMenu(){stopVideos();menuOpener=document.activeElement;document.getElementById('menu-content').innerHTML=slides.map((s,i)=>`<button class="menu-card ${s.id===currentId?'current':''}" data-go="${s.id}"><span class="menu-number">${String(i+1).padStart(2,'0')}</span><strong>${esc(s.title)}</strong><small>${esc(s.section)} · ${s.duration} seconds</small></button>`).join('');menu.showModal();document.getElementById('close-menu').focus();}
async function full(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{/* Native browser fullscreen remains available. */}}
stage.addEventListener('click',e=>{const b=e.target.closest('[data-view]');if(b)selectView(b.dataset.view);if(e.target.closest('[data-back]'))selectView('overview',{restore:true});});
document.getElementById('previous').addEventListener('click',()=>step(-1));document.getElementById('next').addEventListener('click',()=>step(1));
document.getElementById('overview').addEventListener('click',showMenu);document.getElementById('close-menu').addEventListener('click',closeMenu);document.getElementById('fullscreen').addEventListener('click',full);
menu.addEventListener('cancel',e=>{e.preventDefault();closeMenu();});menu.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b){menu.close();goTo(b.dataset.go);}else if(e.target===menu){const r=menu.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeMenu();}});
document.addEventListener('keydown',e=>{
 if(e.altKey||e.ctrlKey||e.metaKey||e.repeat||menu.open)return;
 const t=e.target;if(t.closest('input,textarea,select,[contenteditable="true"]'))return;
 const key=e.key.toLowerCase();
 if(e.key==='Escape'){if(currentView!=='overview'){e.preventDefault();selectView('overview',{restore:true});}return;}
 const tab=t.closest('[role="tab"]');
 // Manual tab activation: arrows move focus; Enter / Space opens the detail.
 if(tab&&['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){
  e.preventDefault();const tabs=[...tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')];let i=tabs.indexOf(tab);i=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs.forEach(x=>x.tabIndex=x===tabs[i]?0:-1);tabs[i].focus();return;
 }
 if(e.key==='PageDown'||e.key==='ArrowDown'){e.preventDefault();step(1);}
 else if(e.key==='PageUp'||e.key==='ArrowUp'){e.preventDefault();step(-1);}
 else if((e.key==='ArrowRight'||e.key===' ')&&!t.closest('button,a,video')){e.preventDefault();step(1);}
 else if(e.key==='ArrowLeft'&&!tab){e.preventDefault();step(-1);}
 else if(key==='o'){e.preventDefault();showMenu();}
 else if(key==='f'){e.preventDefault();full();}
 else if(key==='home'&&!tab){e.preventDefault();goTo('s01');}
 else if(key==='end'&&!tab){e.preventDefault();goTo('s31');}
});
window.addEventListener('resize',fitStage);document.addEventListener('fullscreenchange',()=>{fitStage();document.getElementById('fullscreen').setAttribute('aria-label',document.fullscreenElement?'Exit fullscreen':'Enter fullscreen');});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopVideos();});
window.addEventListener('blur',stopVideos);
function fromHash(){const [id,view]=location.hash.slice(1).split('/');goTo(id||'s01',{view:view||'overview',focus:false,write:false});}
window.addEventListener('hashchange',fromHash);fitStage();fromHash();
window.PRESENTATION=Object.freeze({slides:slides.map(s=>({id:s.id,title:s.title,section:s.section,duration:s.duration,details:s.details.map(d=>({id:d.id,label:d.label}))})),totalSeconds:deck.total_seconds,get current(){return currentId;},get view(){return currentView;},goTo});
