'use strict';

// Content and source media. All paths stay inside the existing portfolio checkout.
const ROOT = '../../../../';
const MEDIA = {
  M01:'paco-showcase/assets/images/rover_aruco_v01.jpg',
  M02:'assets/videos/projects/fab/foundry-pour.mp4', M03:'assets/images/projects/fab/foundry-pour-poster.webp',
  M04:'assets/images/projects/fab/mocn-machining.webp', M05:'assets/videos/projects/fanuc/presentation.mp4',
  M06:'assets/images/projects/fanuc/cover.png', M07:'assets/images/projects/aircraft-brake/assembly-front.webp',
  M08:'paco-showcase/assets/images/system_chain_v01.jpg', M09:'paco-showcase/assets/images/arena_overview_v01.jpg',
  M10:'paco-showcase/assets/images/phase5_bis_v1_01_fixed.jpg',
  M11:'paco-showcase/assets/images/Brut_tracking_aruco_metric_v01.jpg',
  M12:'paco-showcase/assets/images/tracking_aruco_metric_v01.jpg',
  M13:'paco-showcase/assets/video/anticollision_multi_agent_v01.mp4',
  M14:'assets/images/projects/tipe/test-bench-rig.webp', M15:'assets/images/projects/tipe/impact-chronophotography.webp',
  M16:'assets/images/projects/tipe/ball-regression-contact.webp',
  M17:'paco-showcase/assets/images/camera_arena_setup_v01.jpg',
  M18:'paco-showcase/assets/figures/realtime_budget.png', M19:'paco-showcase/assets/figures/campaign_single_agent.png',
  M20:'paco-showcase/assets/figures/campaign_dual_agent.png', M21:'paco-showcase/assets/figures/anticollision_twin_vs_real.png',
  M22:'assets/images/projects/tipe/impactor-geometries.webp', M23:'assets/images/projects/tipe/speed-ratio-comparison.webp',
  M24:'assets/images/projects/fab/casting-defect.webp',
  M40:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/research-openvla.png',
  M41:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/research-fact.png',
  M42:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/research-psi0.png',
  M43:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/research-leverb.png',
  M38:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/humanoidmimicgen-title.png',
  M39:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/humanoidmimicgen-overview.png',
  M37:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/binabik-humanoid-user.png',
  M36:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/unitree-g1-assistive-user.png',
  M35:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/paco-f15-repeatability.png',
  M34:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/paco-f4-camera-b.png',
  M33:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/paco-f4-camera.png',
  M32:'paco-showcase/assets/images/phase5_bis_v1_01_bis_mobile.jpg',
  M28:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/pres_F1/1-plan.png', M29:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/pres_F1/2.png', M30:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/pres_F1/3.png', M31:'Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/pres_F1/4.png',
  M26:'assets/images/projects/fab/foundry-mould.webp', M27:'assets/images/projects/fab/machining-origin.webp'
};
const MEDIA_DIMENSIONS = {"M01":[4032,2268],"M02":[1080,1920],"M03":[1080,1920],"M04":[1190,1586],"M05":[1728,1072],"M06":[1431,1044],"M07":[900,1059],"M08":[4032,2268],"M09":[3024,4032],"M10":[708,712],"M11":[1500,1200],"M12":[1500,1200],"M13":[1920,1080],"M14":[1536,1024],"M15":[1348,424],"M16":[955,573],"M17":[2737,4032],"M18":[1033,730],"M19":[1232,623],"M20":[1347,623],"M21":[936,1016],"M22":[768,738],"M23":[565,537],"M24":[1600,728],"M26":[1600,2134],"M27":[860,1146],"M28":[2000,1126],"M29":[2592,768],"M30":[1806,1414],"M31":[1798,1542],"M32":[706,713],"M33":[2400,1300],"M34":[1168,1218],"M35":[2400,1213],"M36":[1672,941],"M37":[1672,941],"M38":[1350,490],"M39":[1350,380],"M40":[1420,770],"M41":[1360,285],"M42":[1830,490],"M43":[1280,850]};
const SHAPES = {
  right:'<path d="M6 12h12m-5-5 5 5-5 5"/>', left:'<path d="M18 12H6m5-5-5 5 5 5"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  full:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>', play:'<path d="m8 5 11 7-11 7Z"/>',
  pause:'<path d="M8 5v14M16 5v14"/>', replay:'<path d="M4 10a8 8 0 1 1 1.8 7.1M4 4v6h6"/>',
  camera:'<path d="m8 5 1.5-2h5L16 5h4v15H4V5Z"/><circle cx="12" cy="12" r="4"/>',
  pose:'<path d="M4 20V4m0 16h16M4 20l9-9"/><path d="m8 11 5 0 0 5"/><circle cx="17" cy="6" r="2"/>',
  arm:'<path d="M3 21h12M7 21v-4l5-5-5-5 3-4 8 8-4 5 4 3m0-8 3-3m-4-1 4 1-1 4"/><circle cx="8" cy="7" r="2"/><circle cx="13" cy="12" r="2"/>',
  network:'<circle cx="5" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="12" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="20" cy="12" r="2"/><path d="m7 5 3 2m-3 12 3-2M7 7l3 9M7 17l3-9m4-1 4 4m-4 6 4-4"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  ruler:'<path d="m3 16 13-13 5 5L8 21Zm8-8 2 2m1-5 2 2m-8 4 2 2m-5 1 2 2"/>',
  search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6M7 10h6m-3-3v6"/>',
  wrench:'<path d="M14 4a6 6 0 0 0-7 7L2 16a3 3 0 0 0 4 4l5-5a6 6 0 0 0 7-7l-4 4-3-3Z"/>',
  repeat:'<path d="M4 8h15l-4-4m4 4-4 4M20 16H5l4 4m-4-4 4-4"/>',
  sensor:'<circle cx="12" cy="12" r="3"/><path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.5 5.5l3 3m7 7 3 3M5.5 18.5l3-3m7-7 3-3"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5Z"/>',
  data:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
  object:'<path d="m12 3 8 5v9l-8 5-8-5V8Zm-8 5 8 5 8-5m-8 5v9"/>',
  hand:'<path d="M5 14V8a2 2 0 0 1 4 0v4-8a2 2 0 0 1 4 0v8-6a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v6c0 5-3 7-7 7h-2c-4 0-5-3-8-6a2 2 0 0 1 1-3Z"/>',
  signal:'<path d="M3 17h3l3-10 5 14 3-10h4"/>',
  speech:'<path d="M4 3h16v13H9l-5 5Z"/><path d="M8 8h8m-8 4h5"/>'
};
function icon(name, cls='icon') { return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SHAPES[name] || SHAPES.target}</svg>`; }
const asset = id => ROOT + MEDIA[id];
function image(id, alt, cls='', caption='') {
  const [width,height]=MEDIA_DIMENSIONS[id];
  return `<div class="media-slot ${cls}" style="--media-ratio:${width}/${height}" data-ratio="${width/height}"><figure class="media image-frame"><img src="${asset(id)}" width="${width}" height="${height}" alt="${alt}" loading="lazy" decoding="async">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure></div>`;
}
// Crop the displayed viewport of an existing photo; keep source files unchanged.
function croppedImage(id, alt, ratio, cls='') {
  const [width,height]=MEDIA_DIMENSIONS[id];
  return `<div class="media-slot ${cls}" style="--media-ratio:${ratio}" data-ratio="${ratio}" data-crop="true"><figure class="media image-frame"><img src="${asset(id)}" width="${width}" height="${height}" alt="${alt}" loading="lazy" decoding="async"></figure></div>`;
}
function video(id, poster, start, end, label, sourceOverride='') {
  const [width,height]=MEDIA_DIMENSIONS[id];
  return `<div class="media-slot video-slot" style="--media-ratio:${width}/${height}" data-ratio="${width/height}"><figure class="media dark video-wrap"><video muted playsinline preload="none" poster="${poster}" data-src="${sourceOverride || asset(id)}" data-start="${start}" data-end="${end}" aria-label="${label}"></video><span class="video-status">${label}</span><button class="video-action" type="button" aria-label="Play video">${icon('play')}<span>Play</span></button><span class="error-message" hidden>Video unavailable<br><small>You can continue with the next slide.</small></span></figure></div>`;
}
function header(title, eyebrow='', badge='') { return `<header class="slide-header"><div>${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}<h1 tabindex="-1">${title}</h1></div>${badge ? `<span class="badge">${badge}</span>` : ''}</header>`; }
function frame(title, body, {eyebrow='', badge='', caption=''}={}) { return `${header(title,eyebrow,badge)}<div class="slide-body">${body}</div>${caption ? `<footer class="slide-caption">${caption}</footer>` : ''}`; }
function appendixHeader(id, title) { return `<header class="slide-header appendix-header"><div><p class="eyebrow">Appendix ${id.toUpperCase().replace('0','')}</p><h1 tabindex="-1">${title}</h1></div><button class="return-button" data-return>${icon('left')}Back to presentation</button></header>`; }
function diagram(label, content, viewBox='0 0 1400 550') { return `<svg class="diagram" viewBox="${viewBox}" role="img" aria-label="${label}">${content}</svg>`; }
function systemDiagram() {
  const boxes=[['Camera','Basler / OpenCV',30],['Pose','Position + heading',375],['Online correction','Current observed state',720],['Rover','Serial wheel commands',1065]];
  const nodes=boxes.map(([label,sub,x])=>`<rect class="${x===720?'node-blue':'node'}" x="${x}" y="215" width="285" height="145" rx="15"/><text class="label" x="${x+142}" y="275" text-anchor="middle">${label}</text><text class="sub" x="${x+142}" y="316" text-anchor="middle">${sub}</text>`).join('');
  return diagram('Integrated robotics loop',`<rect class="node-blue" x="720" y="15" width="285" height="115" rx="15"/><text class="label" x="862" y="65" text-anchor="middle">Offline plan</text><text class="sub" x="862" y="102" text-anchor="middle">Nominal trajectory</text><path class="wire" d="M862 130V195m-7-9 7 9 7-9"/>${nodes}<path class="wire" d="M315 287h45m-9-7 9 7-9 7M660 287h45m-9-7 9 7-9 7M1005 287h45m-9-7 9 7-9 7M1207 360v112H172V379m-7 9 7-9 7 9"/><text class="sub" x="690" y="506" text-anchor="middle">Physical motion observed by the overhead camera</text><path class="wire-muted" d="M862 360v38h140"/><text class="sub" x="1015" y="405">Logs</text>`);
}
function vlaDiagram(compact=false) {
  return diagram('VLA project concept',`<rect class="node" x="15" y="65" width="395" height="230" rx="18"/><rect class="node-blue" x="505" y="65" width="360" height="230" rx="18"/><rect class="node" x="960" y="65" width="410" height="230" rx="18"/><g class="outline"><path d="M133 115h58v42h-58Zm11 0 6-9h21l7 9"/><circle cx="162" cy="136" r="10"/><path d="M236 108h58v42h-31l-12 11v-11h-15Z"/><path d="M661 115h49v46h-49Zm-10 10h10m49 0h10m-69 23h10m49 0h10m-44-43v10m19-10v10m-19 46v10m19-10v10"/><path d="M1135 162h72m-54 0v-14l25-23-19-16 11-15 33 30-22 23 24 10m-4-34 22-15m-13-5 13 5-3 14"/></g><text class="large-label" x="212" y="219" text-anchor="middle">Vision + Instruction</text><text class="sub" x="212" y="260" text-anchor="middle">Observations and task</text><text class="large-label" x="685" y="219" text-anchor="middle">VLA policy</text><text class="sub" x="685" y="260" text-anchor="middle">Learning from demonstrations</text><text class="large-label" x="1165" y="219" text-anchor="middle">Robot action</text><text class="sub" x="1165" y="260" text-anchor="middle">Assistive manipulation</text><path class="wire" d="M425 180h62m-10-8 10 8-10 8M880 180h62m-10-8 10 8-10 8"/>`,compact?'0 40 1400 280':'0 0 1400 350');
}
function vlaRoutesDiagram() {
  const node=(title,description)=>`<div class="vla-route-node"><h3>${title}</h3><p>${description}</p></div>`;
  return `<div class="vla-routes"><div class="vla-routes-diagram" role="group" aria-label="Two demonstration routes converge on policy learning, deployment and evaluation">
    <svg class="vla-route-wires" viewBox="0 0 1472 600" fill="none" aria-hidden="true"><defs><marker id="vla-route-blue-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 10 5 0 10Z" fill="#0284c7"/></marker><marker id="vla-route-orange-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 10 5 0 10Z" fill="#b56831"/></marker></defs>
      <g stroke="#0284c7" stroke-width="2.5" marker-end="url(#vla-route-blue-arrow)"><path d="M222 168H277"/><path d="M542 168H730Q765 168 765 203V312Q765 347 797 347"/><path d="M1017 347H1052"/><path d="M1247 347H1282"/></g>
      <g stroke="#b56831" stroke-width="2.5" marker-end="url(#vla-route-orange-arrow)"><path d="M212 482H242"/><path d="M457 482H487"/><path d="M742 482H750Q765 482 765 467V364Q765 347 797 347"/></g>
    </svg>
    <section class="vla-route-group vla-route-a" aria-labelledby="vla-route-a-title"><h2 id="vla-route-a-title">Route A <span>— Robot demonstrations</span></h2><div class="vla-route-nodes">${node('Teleoperation','Robot demonstrations')}${node('Dataset','Images + state<br>+ actions + instructions')}</div></section>
    <section class="vla-route-group vla-route-b" aria-labelledby="vla-route-b-title"><h2 id="vla-route-b-title">Route B <span>— Human motion-capture extension</span></h2><div class="vla-route-nodes">${node('Human MoCap','6 high-frequency<br>cameras')}${node('Retargeting','Fine human motions<br>→ feasible G1 motions')}${node('Simulation','AI motion optimization<br><span class="vla-sim-tools">MuJoCo / Isaac Sim / Isaac Lab</span>')}</div></section>
    <section class="vla-route-group vla-route-shared" aria-labelledby="vla-route-shared-title"><h2 id="vla-route-shared-title">Shared learning pipeline</h2><div class="vla-route-nodes">${node('Policy learning','Adapt selected<br>VLA / baseline')}${node('Deployment','Robot commands')}${node('Evaluation','Success · Safety<br>· Robustness')}</div></section>
  </div></div>`;
}
function fourSteps(steps, cls='pipeline-steps') { return `<div class="${cls}">${steps.map((s,i)=>`<div class="pipeline-node"><span class="step-no">0${i+1}</span>${icon(s[0])}<h2>${s[1]}</h2></div>`).join('')}</div>`; }
function calibrationGeometry() { return diagram('Camera ground plane and raised marker',`<g class="outline"><path d="M590 50h180v100H590Z"/><circle cx="680" cy="100" r="30"/><path d="M680 150 250 490m430-340 430 340M80 490h1210M785 490V330h95v160"/><path d="M680 150 830 330" stroke-dasharray="9 9"/></g><text class="label" x="800" y="105">Overhead camera</text><text class="sub" x="160" y="535">Ground reference plane</text><text class="sub" x="940" y="300">Raised marker</text><text class="sub" x="940" y="340">Height causes parallax</text>`); }
function fitLearningDiagram() {
  return diagram('Demonstrations to learned robot behavior',`<rect class="node" x="30" y="20" width="340" height="80" rx="13"/><rect class="node" x="30" y="140" width="340" height="80" rx="13"/><rect class="node-blue" x="30" y="260" width="340" height="80" rx="13"/><rect class="node" x="30" y="380" width="340" height="80" rx="13"/><g style="font-size:27px;font-weight:600;text-anchor:middle"><text x="200" y="69">Demonstrations</text><text x="200" y="189">Data</text><text x="200" y="309">VLA adaptation</text><text x="200" y="429">Robot behavior</text></g><path class="wire" d="M200 105v27m-7-8 7 8 7-8M200 225v27m-7-8 7 8 7-8M200 345v27m-7-8 7 8 7-8"/>`,'0 0 400 480');
}

const slides = [
  {id:'s01',title:'From ideas to working robots.',section:'Introduction',duration:15,sources:['S01','S02','S05','S12','https://shop.unitree.com/products/unitree-g1'],
    notes:['Engineering student at Arts et Métiers, also pursuing a research master’s in robotics at Sorbonne.','What I enjoy most is turning an idea into a physical system that I can test and improve.'],transition:'That starts with understanding the physical task.',
    html:`<div class="hero"><div class="hero-copy"><p class="eyebrow">Robotics & AI engineering</p><h1 tabindex="-1">From ideas<br>to working<br><em>robots.</em></h1><p class="hero-name">Slimane Aouanouk</p><p class="hero-school">Arts et Métiers<br>Sorbonne Université</p><p class="hero-role">Robotics · Perception · Experiments</p></div><div class="hero-media-pair"><div class="hero-rover"><figure class="media hero-visual system-photo"><img src="${asset('M08')}" alt="The physical research rover beside the computer running its software interface" fetchpriority="high"><span class="hero-location">Software + physical hardware</span></figure><p class="hero-project-caption">Collision avoidance · Singapore<small>Research internship</small></p></div><figure class="g1-visual"><img src="assets/unitree-g1-official.jpg" alt="Official Unitree G1 product image, illustrating the platform of the current VLA project" fetchpriority="high"><figcaption>Unitree G1<small>Ongoing VLA project</small></figcaption></figure></div></div>`},
  {id:'s02',title:'Start with the physical task',section:'Industrial foundation',duration:20,sources:['S01','S02','S11'],
    notes:['At Arts et Métiers, I worked on casting, machining and dimensional inspection in a team manufacturing project.','That gave me a concrete view of accuracy, process constraints and the work operators do.'],transition:'I also explored how that kind of operation could be automated.',
    html:frame('Start with the physical task',`<div class="split foundry-grid">${video('M02',asset('M03'),0,4.15,'Foundry workshop')}<div class="fab-gallery">${image('M26','Sand mould cavity prepared for casting the bearing housing','','Sand mould')}${image('M27','Dial indicator used to establish the machining origin','','Machining origin')}${image('M04','Machining the bearing housing on a CNC machine','','CNC machining')}</div></div>`,{eyebrow:'Arts et Métiers / Manufacturing',caption:'Foundry <span class="blue">→</span> CNC <span class="blue">→</span> Inspection <span class="dot"></span> Hands-on manufacturing'})},
  {id:'s03',title:'Design the automation',section:'Industrial foundation',duration:20,sources:['S01','S02','S11'],
    notes:['We studied an automated FANUC casting cell as a team.','I can discuss robot selection, the gripper concept, the layout and operation sequence, including reach and thermal constraints. This remained a design and simulation study.'],transition:'These projects also gave me a foundation in mechanical engineering.',
    html:frame('Design the automation',`<div class="side-media"><div class="word-stack"><span>Robot</span><span>Gripper</span><span>Layout</span><span>Sequence</span></div>${video('M05','assets/fanuc-poster.jpg',0,10,'RobotGuide simulation','assets/fanuc-excerpt.mp4')}</div>`,{eyebrow:'FANUC casting cell',badge:'Simulation'})},
  {id:'s04',title:'From mechanics to robotics',section:'Mechanical foundations',duration:10,sources:['S11'],
    notes:['At Arts et Métiers, projects like this taught me CAD and engineering calculations.'],transition:'I then chose robotics, which led to my Singapore internship.',
    html:frame('From mechanics to robotics',`<div class="f1-gallery"><div class="f1-step"><p><span>01</span> CAD drawing ${icon('right')}</p>${image('M28','Dimensioned engineering drawing of the F1 in Schools car')}</div><div class="f1-step"><p><span>02</span> Simulation</p>${image('M29','Aerodynamic simulation views of the F1 in Schools car')}</div><div class="f1-step"><p><span>03</span> Foam machining ${icon('right')}</p>${image('M30','CNC machine cutting the F1 car body from foam')}</div><div class="f1-step"><p><span>04</span> Finished car</p>${image('M31','Assembled F1 in Schools car with a foam body')}</div></div>`,{eyebrow:'Arts et Métiers / F1 in Schools',caption:'CAD <span class="dot"></span> Simulation <span class="dot"></span> Engineering calculations <span class="blue">→ Robotics</span>'})},
  {id:'s05',title:'Make it work on a real robot',section:'Paris–Singapore research',duration:25,sources:['S01','S02','S05','S12'],
    notes:['During my research project in Paris and internship in Singapore, I worked with another student on trajectory planning and collision avoidance.','What I especially enjoyed was connecting algorithms, perception and physical hardware. The experiments shown here were on ground rovers.'],transition:'We had to connect the whole chain.',
    html:frame('Make it work on a real robot',`<div class="research-grid">${image('M08','Computer and rover used in the physical research system')}${image('M09','Actual physical test arena with ground rovers')}</div>`,{eyebrow:'PIMM / CNRS@CREATE',caption:'Paris <span class="blue">→</span> Singapore <span class="dot"></span> Jan–Aug 2026 <span class="dot"></span> Collaborative research'})},
  {id:'s06',title:'Connect the whole robotics loop',section:'Paris–Singapore research',duration:25,sources:['S02','S12'],
    notes:['The nominal trajectory was computed offline. An overhead camera estimated the robot’s position and heading.','The online corrector used the observed state, sent serial commands to the rover and recorded experiment logs. This was a causal corrector, not a completed MPC.'],transition:'The nominal path gave the robot a route to follow.',
    html:frame('Connect the whole robotics loop',`<div class="system-diagram">${systemDiagram()}</div><div class="system-note"><img src="${asset('M08')}" alt="The physical computer-to-rover setup" loading="lazy"><span>Planning, perception, correction and hardware in one measured system.</span></div>`,{eyebrow:'Integrated physical system'})},
  {id:'s07',title:'Plan the path, then correct the motion',section:'Planning and correction',duration:20,sources:['S02','S12'],
    notes:['We used Python and SciPy for offline trajectory optimization, taking the goal and obstacles into account.','The nominal phase produces the reference path around fixed obstacles. The causal correction phase adjusts the current motion when a mobile agent is observed. These two plots illustrate the method; they are not the physical validation campaigns.'],transition:'To follow it, we first needed a trustworthy estimate of the robot’s pose.',
    html:frame('Plan the path, then correct the motion',`<div class="phase-comparison"><div class="phase-column"><h2>The nominal phase</h2>${image('M10','PACO Showcase nominal trajectory plot around the fixed central obstacle')}</div><div class="phase-column"><h2>The causal correction phase</h2>${image('M32','PACO Showcase causal correction plot with a moving agent and a locally adjusted trajectory')}</div></div>`,{eyebrow:'Trajectory planning and correction'})},
  {id:'s08',title:'Turn pixels into metric positions',section:'Visual localization',duration:25,sources:['S02','S05','S12'],
    notes:['We used an external overhead Basler camera with OpenCV and ArUco markers.','The paper figure shows the raw frame on the left and detected marker IDs with metric coordinates on the right. We converted image measurements into positions in the arena frame. This was external visual localization, not onboard SLAM.'],transition:'The first challenge was making those measurements accurate enough.',
    html:frame('Turn pixels into metric positions',`${image('M33','Paper figure f4: (a) raw overhead camera frame; (b) detected ArUco markers with identifiers and metric coordinates')}`,{eyebrow:'Basler camera / OpenCV',caption:'(a) Raw frame <span class="dot"></span> (b) ArUco IDs + metric coordinates <span class="dot"></span> External overhead camera'})},
  {id:'s09',title:'Improve the measurement, improve the system',section:'Calibration',duration:30,sources:['S02','S05'],
    notes:['On an independent nine-point ground grid, mean localization error fell from 36.3 to 5.8 mm, an 84% reduction.','We used intrinsic calibration, distortion correction and metric homography, then validated the geometry again. These are ground-grid errors, distinct from reprojection RMS and raised-marker error.'],transition:'Accuracy was one part. Timing was another.',
    html:frame('Improve the measurement,<br>improve the system',`<div class="metric-layout"><div><div class="metric-number blue">84<small>%</small></div><p class="metric-label">Lower mean<br><strong>localization error</strong></p></div><div class="calibration-chart" role="img" aria-label="Mean ground-grid localization error reduced from 36.3 mm to 5.8 mm, represented on the same scale"><div class="bar-row"><p class="bar-value">36.3 mm <span>Before</span></p><div class="bar-track"><div class="bar before"></div></div></div><div class="bar-row"><p class="bar-value blue">5.8 mm <span>After</span></p><div class="bar-track"><div class="bar after"></div></div></div><p class="chart-origin">0 <span class="muted"> / Same scale</span></p><div class="calibration-small"><img src="${asset('M34')}" width="1168" height="1218" alt="Panel B of paper figure f4: ArUco marker identifiers and metric coordinates" loading="lazy"><span>Independent ground grid<br>Mean error in millimetres</span></div></div></div>`,{eyebrow:'Measure / diagnose / recalibrate'})},
  {id:'s10',title:'Make sensing and action fit together',section:'Physical integration',duration:20,sources:['S02','S05','S12'],
    notes:['The measured physical-loop median was 19.84–19.86 Hz.','Profiling showed why image processing and serial communication mattered to the whole loop. This is an observed median, not a hard real-time guarantee.'],transition:'This is what that integrated system looked like in motion.',
    html:frame('Make sensing and action fit together',`<div class="runtime"><div><div class="metric-number">≈20<span class="blue" style="font-size:.48em;letter-spacing:-4px"> Hz</span></div><p class="metric-label">Measured physical loop</p><p class="caption" style="margin-top:18px">19.84–19.86 Hz median</p></div><div class="runtime-flow"><div class="runtime-step">${icon('camera')}<div><strong>Vision</strong><p>Observe the robot</p></div></div><div class="runtime-step">${icon('signal')}<div><strong>Correction</strong><p>Use the measured state</p></div></div><div class="runtime-step">${icon('arm')}<div><strong>Serial commands</strong><p>Act on physical hardware</p></div></div></div></div>`,{eyebrow:'Profile the complete system'})},
  {id:'s11',title:'Watch the physical system respond',section:'Physical demonstration',duration:25,sources:['S02','S12'],
    notes:['This is a physical multi-agent avoidance trial: one controlled rover moving among other moving robots.','Point out the task and the observed response, then leave a few seconds for the video.'],transition:'One demonstration is useful, but we also needed repeated trials.',
    html:frame('Watch the physical system respond',`<div class="cinema">${video('M13','assets/multi-agent-poster.jpg',0,11.27,'Multi-agent avoidance trial')}</div>`,{eyebrow:'Real experiment',caption:'One controlled rover <span class="dot"></span> Moving robots'})},
  {id:'s12',title:'Check repeatability',section:'Experimental evidence',duration:25,sources:['S02','S05','S12'],
    notes:['The two frozen confirmatory tasks were each repeated twenty times. Across those forty runs, there were forty goal arrivals and zero collisions.','These were team results in those experimental scenarios. The figure shows the twenty-run block with one moving agent: trajectories on the left and edge-to-edge clearance on the right. Exploratory trials outside the frozen campaigns also exposed failures.'],transition:'The useful part was the engineering process behind those numbers.',
    html:frame('Check repeatability',`<div class="repeatability-layout"><div class="repeatability-metrics"><div><p class="repeatability-number"><span class="blue">40</span>/40</p><p class="result-label">Goal arrivals</p></div><div><p class="repeatability-number blue">0</p><p class="result-label">Collisions</p></div><p class="repeatability-scope">Two frozen tasks<br>20 runs each</p></div><div class="repeatability-evidence">${image('M35','Paper figure f15: repeated measured arena trajectories and edge-to-edge clearance over twenty physical runs with one moving agent')}<p class="caption">Shown: one moving agent · 20 physical runs</p></div></div>`,{eyebrow:'Frozen confirmatory campaigns'})},
  {id:'s13',title:'Measure, diagnose, change, re-test',section:'Engineering approach',duration:20,sources:['S01','S02','S05'],
    notes:['The engineering process was to measure the problem, diagnose it, change the system and re-test under controlled conditions.','That included calibration, processing bottlenecks and co-developed Python unit, numerical and regression checks.'],transition:'I had already developed that interest in experiments through an individual project.',
    html:frame('Measure, diagnose, change, re-test',`<div class="method-grid">${[['ruler','Measure','Grid error'],['search','Diagnose','Camera geometry'],['wrench','Change','Processing'],['repeat','Re-test','Repeatable trials']].map((s,i)=>`<div class="method-step"><span class="step-no">0${i+1}</span>${icon(s[0])}<h2>${s[1]}</h2><p>${s[2]}</p></div>`).join('')}</div><p class="method-bottom">Geometry · Timing · Software</p>`,{eyebrow:'Experimental engineering'})},
  {id:'s14',title:'Build the experiment, analyze the data',section:'Individual TIPE',duration:25,sources:['S02','S05','S11'],
    notes:['I designed and built this impact-testing rig myself, with a 46 cm pendulum and four interchangeable contact geometries.','I filmed the experiments and analyzed positions in Python using regressions and measurement uncertainty. This individual project predates Singapore.'],transition:'Today, I’m building on that hands-on background through my robotics master’s.',
    html:frame('Build the experiment, analyze the data',`<div class="tipe-overview">${croppedImage('M14','Left-hand view of the pendulum impact rig built individually by Slimane',768/1024,'tipe-rig-left')}${croppedImage('M22','Four orange interchangeable impactor tips, shown from the side',768/432,'tipe-tips')}${image('M15','Four successive phases of the recorded impact','tipe-impact-sequence')}</div>`,{eyebrow:'Individual TIPE project',caption:'Build <span class="blue">→</span> Film <span class="blue">→</span> Analyze in Python <span class="dot"></span> 46 cm / 4 contact geometries'})},
  {id:'s15',title:'What I’m learning now',section:'Current SAR master’s',duration:30,sources:['S02','S05','User clarification, 28 October 2026'],
    notes:['I’m now specializing in robotics through my research master’s at Sorbonne.','The four areas are state estimation and sensor fusion, perception and mobile robotics, manipulation and control, and machine learning.','Examples: deterministic and Bayesian linear estimation; EKF, NEKF, UKF and particle filters; camera perception and SLAM; manipulator kinematics, dynamics, Jacobians and DH conventions; classical and nonlinear control; deep learning, PyTorch, backpropagation and reinforcement learning. Choose two or three examples during the main presentation.'],transition:'My main master’s project brings these foundations together through humanoid robot learning.',
    html:frame('What I’m learning now',`<div class="learning-layout"><div class="learning-grid">${[['sensor','State estimation<br>& sensor fusion'],['compass','Perception<br>& mobile robotics'],['arm','Manipulation<br>& control'],['network','Machine learning']].map(([i,t])=>`<div class="learning-item">${icon(i)}<h2>${t}</h2></div>`).join('')}</div><div class="learning-bridge"><span class="bridge-line"></span><span>Master project</span>${icon('right')}<strong>VLA</strong></div></div>`,{eyebrow:'Sorbonne / M2 SAR',badge:'Current coursework'})},
  {id:'s16',title:'Bring that mindset to humanoid learning',section:'Current VLA project',duration:20,sources:['S09','S10','User clarification, 28 October 2026'],
    notes:['That’s the direction of our VLA project: assistive manipulation on a Unitree G1. We have a G1 available for the project.','Right now, I’m reviewing papers, learning the methods and preparing our first experiments.'],transition:'The goal is to work through the complete demonstration-to-robot pipeline.',
    html:frame('Bring that mindset<br>to humanoid learning',`<div class="vla-intro-with-photo"><div class="vla-context"><strong>Unitree G1</strong><span>Assistive manipulation</span></div>${image('M36','User-supplied illustration of a Unitree G1 reaching towards a glass on a table','vla-g1-photo')}<div class="vla-diagram">${vlaDiagram(true)}</div><div class="vla-status"><span><span class="status-dot"></span>Literature review <span class="blue">→</span> Project setup</span><span>Supervised by Prof. Olivier Bruneau</span></div></div>`,{eyebrow:'Sorbonne Université / Master project',badge:'Ongoing'})},
  {id:'s17',title:'From demonstrations to robot behavior',section:'VLA project direction',duration:25,sources:['S09','S10','User-approved two-route diagram, 30 October 2026'],
    notes:['We are considering two routes: robot demonstrations through teleoperation, and an extension using human motion capture. Olivier Bruneau proposed a future system with six high-frequency cameras.','The human-motion route would retarget fine movements to feasible G1 motions and explore AI motion optimization in MuJoCo or Isaac Sim / Isaac Lab. The resulting demonstrations would also need aligned observations, instructions and robot actions for VLA learning.','Both routes aim towards policy learning, deployment and evaluation. These are project directions, not completed collection, training or deployment results. The teleoperation interface is still to be selected; no UMI system is currently available according to the email.'],transition:'There may also be a useful way to connect this project with the internship.',
    html:frame('From demonstrations to robot behavior',vlaRoutesDiagram(),{eyebrow:'Demonstration-to-robot pipeline',badge:'Project direction'})},
  {id:'s18',title:'Use the project to prepare for the internship',section:'Preparing a potential internship',duration:20,sources:['User clarification, 28 October 2026'],
    notes:['If useful, I’d be happy to explore a direction suggested by your team in this project, so I can arrive better prepared and contribute sooner.','Demonstration quality and policy evaluation are possible discussion topics, subject to the academic project’s scope and the team’s priorities.'],transition:'That connection is one reason Binabik interests me.',
    html:frame('Use the project to prepare<br>for the internship',`<div class="alignment"><div class="alignment-flow"><div class="alignment-step"><span>01 / DISCUSS</span>${icon('speech')}<h2>Your<br>priorities</h2></div><div class="alignment-step"><span>02 / EXPLORE</span>${icon('search')}<h2>A focused<br>experiment</h2><div class="tags"><span class="tag">Demonstration quality</span><span class="tag">Policy evaluation</span></div></div><div class="alignment-step"><span>03 / PREPARE</span>${icon('right')}<h2>A stronger<br>start</h2></div></div><p class="alignment-note">An opportunity to explore a useful direction before joining the team.</p></div>`,{eyebrow:'A possible connection with Binabik'})},
  {id:'s19',title:'Why Binabik',section:'Company fit',duration:20,sources:['S01','S07','S08'],
    notes:['I’m interested in the combination of industrial use cases, physical robotics and learning-based approaches.','That connects with my mechanical background, perception and integration experience, and current direction in robot learning.'],transition:'That’s the combination I’d like to contribute to.',
    html:frame('Why Binabik',`<div class="fit-grid"><div class="fit-column">${image('M04','Real CNC machining from the manufacturing project')}<h2>Industrial tasks</h2><p>Understand the task</p></div><div class="fit-column">${image('M08','The physical research rover and computer')}<h2>Real robots</h2><p>Integrate and measure</p></div><div class="fit-column"><div class="media">${fitLearningDiagram()}</div><h2>Learning-based behavior</h2><p>Develop adaptability</p></div></div>`,{eyebrow:'Where the experience connects'})},
  {id:'s20',title:'Where I’d like to contribute',section:'Discussion',duration:15,sources:['S01','S04','S05'],
    notes:['I’d like to contribute to robotics software on real hardware and learn closely with the team.','I’m open to your priorities across perception and integration, robot learning and data, or experiments and debugging. I’m available for six months from February 2027.'],transition:'Pause and invite Giovanni’s response.',
    html:frame('Where I’d like to contribute',`<div class="closing"><div><div class="contribution-list"><div class="contribution">${icon('camera')}Perception & integration</div><div class="contribution">${icon('network')}Robot learning & data</div><div class="contribution">${icon('ruler')}Experiments & debugging</div></div><p class="availability">6-month internship / February 2027</p><div class="closing-identity"><span>Slimane Aouanouk</span><a href="https://slimaneaouanouk.com" target="_blank" rel="noopener noreferrer">slimaneaouanouk.com</a></div></div>${image('M37','User-supplied image of a humanoid robot with Binabik AI branding in an industrial setting')}</div>`,{eyebrow:'Let’s discuss where I could be useful'})}
];

function researchOverview() {
  const axes=[['network','Policy adaptation','How can we adapt a pretrained policy?','OpenVLA · Ψ₀'],['data','Data efficiency','How can we reduce demonstration collection?','HumanoidMimicGen · Ψ₀'],['target','Contact precision & reliability','How can we diagnose and reduce failures?','FACT'],['arm','Whole-body execution','How can high-level decisions become stable movements?','LeVERB']];
  return `<div class="research-overview"><div class="research-axes">${axes.map(([symbol,title,question,papers])=>`<div class="research-axis">${icon(symbol)}<div><h2>${title}</h2><p>${question}</p><span class="research-references">${papers}</span></div></div>`).join('')}</div><div class="research-question"><span>For your industrial tasks</span><p>Where is the biggest bottleneck today: data, policy adaptation, or reliable execution?</p></div></div>`;
}
function researchPaperView(paper) {
  return `<div class="research-detail"><div class="research-detail-main"><div class="research-figure">${image(paper.media,paper.alt)}<p class="research-paper-source">${paper.credit} · <a href="${paper.url}" target="_blank" rel="noopener noreferrer">Paper / project</a></p></div><div class="research-paper-summary"><h2>${paper.title}</h2><dl><div><dt>Research question</dt><dd>${paper.question}</dd></div><div><dt>Main idea</dt><dd>${paper.idea}</dd></div><div><dt>Why it interests me</dt><dd>${paper.interest}</dd></div></dl></div></div><p class="research-scope"><strong>Scope</strong> ${paper.scope}${paper.more?' <a href="#a02">More on this example → A2</a>':''}</p></div>`;
}

const annexes = [
  {id:'a01',title:'VLA project: current work and directions',section:'VLA discussion',duration:0,sources:['S09','S10','S02','User clarification, 28 October 2026'],
    notes:['The G1 is available. I’m starting with literature review, learning the methods and preparing the project. The aim is an end-to-end assistive-manipulation pipeline.','Prof. Olivier Bruneau proposed a future six-camera high-frequency motion-capture system, followed by retargeting and possible motion optimization in MuJoCo or the Isaac environment mentioned in his email. This is a prospective route, not an already operating collection system.','OpenPI π₀/π₀.₅ is an earlier target in my project context, not a final checkpoint specified in the proposal or supervisor’s email. No UMI system is documented as available.','Possible alignment topics include demonstration quality, reproducible policy evaluation and variation in object pose. Discuss one useful direction within the academic project.'],
    html:`${appendixHeader('a01','VLA project: current work and directions')}<div class="slide-body"><div class="vla-appendix"><div class="vla-appendix-main"><h2>Unitree G1 / Assistive manipulation</h2><p><strong>Current work</strong><br>Literature review & project setup</p>${vlaDiagram(true)}<div class="tags"><span class="tag">Demonstration quality</span><span class="tag">Policy evaluation</span></div></div><div class="optional-route"><span class="optional-label">Possible acquisition route</span>${icon('sensor')}<h2>Motion capture<br><span class="blue">→</span> Retargeting</h2><p>Proposed by Prof. Olivier Bruneau.<br>Future six-camera system.</p><p>Possible motion optimization<br>in MuJoCo / Isaac.</p><span class="badge neutral">To be explored</span></div></div></div>`},
  {id:'a02',title:'Exploring Synthetic Data Generation for Humanoid Robotics',section:'Research reading / Data generation',duration:0,sources:['Lin et al., HumanoidMimicGen, 2026, arXiv:2605.27724v1; supplied PDF, pp. 1–2, 7–9'],
    notes:['Discussion only, about 30 seconds: I recently came across HumanoidMimicGen from NVIDIA and UT Austin. It explores generating many synthetic demonstrations from a teleoperated source demonstration using whole-body planning. It made me think of Binabik: reducing collection effort when adapting robots to new industrial tasks is a problem I would love to explore. I am still learning about these approaches.','Scope of the number: Section 6.1 and Table 1 report one human-teleoperated source demonstration and 1,000 generated successful trajectories per task in the simulated G1 benchmark. The source is not markerless human motion capture. The real-world evaluation also uses real robot data for sim-and-real co-training, so this is not a claim that one demo alone solves real-world deployment.','Possible opening question: When adapting your solution to a new machine or task, how much of the process is automated, and how much still requires manual configuration? If data collection or policy learning comes up, offer this appendix rather than inserting it into the timed presentation.','Potential industrial relevance is my discussion question, not evidence of Binabik using this method or of my having implemented it. No personal mastery, benchmark result or deployment is claimed.'],
    html:`${appendixHeader('a02','Exploring Synthetic Data Generation<br>for Humanoid Robotics')}<div class="slide-body"><div class="paper-annex"><div class="paper-annex-main"><div class="paper-excerpts">${image('M38','First-page excerpt: HumanoidMimicGen paper title, authors and NVIDIA / UT Austin affiliations')}${image('M39','Paper Figure 1: teleoperated simulated source demonstration, synthetic data generation through whole-body planning, and sim-and-real co-training')}<p class="paper-credit">Lin et al. · 2026 · <a href="https://humanoidmimicgen.github.io/" target="_blank" rel="noopener noreferrer">Paper & project</a></p></div><div class="paper-summary"><div class="paper-heading"><h2>HumanoidMimicGen</h2><p>NVIDIA & UT Austin · 2026</p></div><dl><div><dt>Challenge</dt><dd>Limited real-world demonstrations</dd></div><div><dt>Approach</dt><dd>Synthetic data generation through<br>whole-body planning</dd></div><div><dt>Key idea</dt><dd><span class="blue">1 teleoperated demo → 1,000 synthetic demos</span><small>Per task in the simulation benchmark</small></dd></div><div><dt>Potential impact</dt><dd>Less data collection effort<br>when adapting to new tasks</dd></div></dl></div></div><div class="paper-interest"><strong>My interest</strong><p>How can we reduce the data collection effort when deploying robots to new industrial tasks?</p></div></div></div>`},
  {id:'a03',title:'Research interests: from VLA to reliable robots',section:'Research reading / Industrial questions',duration:0,
    sources:['Kim et al., OpenVLA, 2024, arXiv:2406.09246v3','Lin et al., HumanoidMimicGen, 2026, arXiv:2605.27724v1','Parés-Morlans et al., FACT, 2026, arXiv:2608.01402v2','Wei et al., Psi-Zero, 2026, arXiv:2603.12263v1','Xue et al., LeVERB, 2025, arXiv:2506.13751v3'],
    notes:['Discussion only, 35–45 seconds: I am starting to explore several papers on VLA models and humanoid robotics. What interests me is how the pieces fit together: adapting a policy, collecting useful data, understanding contact failures, and connecting high-level decisions to physical control. OpenVLA and Psi-Zero raise adaptation questions; HumanoidMimicGen explores synthetic data; FACT studies precision and force failures; LeVERB separates high-level policy and whole-body control. I would like to build on my experimental robotics experience while learning about these approaches.','Discussion question: For your industrial tasks, where is the biggest bottleneck today: data, policy adaptation, or reliable execution? Listen before selecting a detailed paper view. These are personal research interests, not assumptions about Binabik’s internal priorities or technology.','No cross-paper success-rate comparison: benchmarks and tasks differ. No implementation or mastery claim. OpenVLA is manipulation-focused; HumanoidMimicGen amplification is a simulation-benchmark result; FACT needs suitable force measurements; human video in Psi-Zero is not MoCap; LeVERB does not establish fine industrial manipulation. The controller interface and resources for my project remain to be selected.'],
    views:[{label:'Overview',html:researchOverview()},{label:"OpenVLA",html:researchPaperView({"label": "OpenVLA", "media": "M40", "title": "OpenVLA", "alt": "OpenVLA Figure 1: pretrained vision-language-action model, robot datasets and adaptation to manipulation tasks", "credit": "Kim et al. · 2024 · Fig. 1, p. 1", "url": "https://openvla.github.io/", "question": "How can we adapt a pretrained policy to a new task?", "idea": "Fine-tune a pretrained VLA using robot demonstrations.", "interest": "Understand policy adaptation for my VLA project.", "scope": "Manipulation policies; not full humanoid locomotion or whole-body control."})},{label:"HumanoidMimicGen",html:researchPaperView({"label": "HumanoidMimicGen", "media": "M39", "title": "HumanoidMimicGen", "alt": "HumanoidMimicGen Figure 1: source demonstration, whole-body planning and synthetic data generation", "credit": "Lin et al. · 2026 · Fig. 1, p. 2", "url": "https://humanoidmimicgen.github.io/", "question": "How can we expand a small set of demonstrations?", "idea": "Generate synthetic demonstrations through whole-body planning and adaptation.", "interest": "Explore data efficiency when adapting the G1 to new scenes.", "scope": "1 source demo → 1,000 generated demos per task in simulation; real-world evaluation also uses real data.", "more": true})},{label:"FACT",html:researchPaperView({"label": "FACT", "media": "M41", "title": "FACT", "alt": "FACT Figure 2: successful plug insertion, precision failure and force failure with force magnitude profiles", "credit": "Parés-Morlans et al. · 2026 · Fig. 2, p. 4", "url": "https://stanford-iprl-lab.github.io/fact/", "question": "Why do VLA policies fail during contact?", "idea": "Separate precision failures from force failures; improve fine actions and force conditioning.", "interest": "Build reproducible tests and diagnose failure modes.", "scope": "Contact-rich manipulation with suitable force sensing; not a general reliability guarantee."})},{label:"Ψ₀",html:researchPaperView({"label": "Ψ₀", "media": "M42", "title": "Ψ₀ — Psi-Zero", "alt": "Psi-Zero Figure 2: human video pretraining, robot action expert post-training and whole-body deployment", "credit": "Wei et al. · 2026 · Fig. 2, p. 3", "url": "https://psi-lab.ai/Psi0", "question": "How can human videos support humanoid learning?", "idea": "Pretrain on human videos, then learn robot actions from robot data.", "interest": "Understand how human demonstrations can inform robot learning.", "scope": "Human video pretraining is distinct from motion capture and does not directly supply robot joint commands."})},{label:"LeVERB",html:researchPaperView({"label": "LeVERB", "media": "M43", "title": "LeVERB", "alt": "LeVERB Figure 1: benchmark, real-world whole-body behaviors and hierarchical vision-language / dynamics architecture", "credit": "Xue et al. · 2025 · Fig. 1, p. 2", "url": "https://arxiv.org/abs/2506.13751", "question": "How can high-level instructions produce stable movements?", "idea": "Link a vision-language policy to a whole-body controller through latent actions.", "interest": "Connect robot learning with physical control and integration.", "scope": "Whole-body behaviors and control; not a method demonstrated for fine industrial manipulation."})}]},
  {id:'a04',title:'Calibration: which error are we measuring?',section:'Calibration',duration:0,sources:['S02','S05'],
    notes:['Twenty ChArUco views were used for camera calibration. Reprojection RMS was 0.191 px.','Mean ground-grid error was evaluated on an independent nine-point grid: 36.3 to 5.8 mm. Raised-marker error was evaluated across five positions: 60.8 to 11.6 mm.','These are three separate measurements with different units and protocols.'],
    html:`${appendixHeader('a04','Calibration: which error are we measuring?')}<div class="slide-body"><div class="calibration-detail"><div class="measures"><div class="measurement"><p>Reprojection RMS</p><strong>0.191 <small>px</small></strong></div><div class="measurement"><p>Ground-grid mean error</p><strong>36.3 <span class="blue">→ 5.8</span> <small>mm</small></strong></div><div class="measurement"><p>Raised-marker mean error</p><strong>60.8 <span class="blue">→ 11.6</span> <small>mm</small></strong></div></div><div class="calibration-geometry">${image('M17','Actual overhead camera and arena setup')}${calibrationGeometry()}</div></div></div>`},
  {id:'a05',title:'What sits inside a near-20 Hz loop?',section:'Timing and integration',duration:0,sources:['S02','S05','S12'],
    notes:['The figure shows the measured budget across the real loop, including vision, correction, serial I/O and logging.','The 19.84–19.86 Hz figures are observed medians. Before/after camera sessions were not a strictly paired benchmark.','The corrector was causal, without a completed MPC horizon. Python tests were co-developed; 64 test files does not mean 64 passing test cases.'],
    html:`${appendixHeader('a05','What sits inside a near-20 Hz loop?')}<div class="slide-body">${image('M18','Original measured runtime figure with loop budget and vision processing breakdown','appendix-figure')}</div><footer class="slide-caption">Vision · Correction · Serial I/O · Logging <span class="dot"></span> Observed medians</footer>`},
  {id:'a06',title:'Repeatability and limits',section:'Physical validation',duration:0,sources:['S02','S12'],
    notes:['One controlled rover was physically tested among one or two moving agents. Six controlled agents were simulation-only.','One two-agent run used the wrong obstacle layout and was excluded from its aggregates, while its successful arrival remains in the 40/40 total. Exploratory failures prevent a universal safety claim.'],
    views:[
      {label:'One moving agent',media:'M19',alt:'Original twenty-run single-agent trajectories and clearance figure',caption:'Frozen task / 20 physical runs. Clearance is defined between safety discs.'},
      {label:'Two moving agents',media:'M20',alt:'Original two-agent physical trajectories and clearance figure',caption:'19 runs in the aggregate after one layout exclusion. The excluded run still reached its goal.'}
    ]},
  {id:'a07',title:'Individual experimental work and physical design',section:'Mechanical and experimental depth',duration:0,sources:['S02','S05','S11'],
    notes:['TIPE: individually designed 46 cm pendulum rig, four contact geometries and Python video analysis. In the specified 12 mm cylinder, 3 psi case, a 2.2 m/s striker produced a measured 4.0 m/s ball exit speed.','Aircraft brake: individual preliminary CAD design, not a validated prototype.','FAB: team manufacturing project. Two of four inspected characteristics were conforming; two nonconformities were documented and diagnosed.'],
    views:[
      {label:'TIPE rig',media:'M14',alt:'Personally built impact rig',caption:'Individual TIPE / 46 cm pendulum / Video-based measurements'},
      {label:'Contact geometries',media:'M22',alt:'Four interchangeable striker geometries',caption:'Individual TIPE / Four contact geometries'},
      {label:'Regressions',media:'M16',alt:'Original position-time regressions with measurement uncertainty',caption:'Individual TIPE / Position fits before and after impact, with uncertainty'},
      {label:'Speed comparison',media:'M23',alt:'Original measured and theoretical speed-ratio comparison',caption:'Individual TIPE / Interpret the experimental conditions before generalizing'},
      {label:'CAD design',media:'M07',alt:'Preliminary individual aircraft-brake CAD assembly',caption:'Individual preliminary design / Fusion 360 / No validated physical prototype'},
      {label:'Manufacturing',media:'M24',alt:'Manufactured housing with annotated casting nonconformity',caption:'Team manufacturing project / Nonconformities diagnosed and documented'}
    ]}

];

// Browser controller. Content above also supplies the separate speaking-notes file.
const stage = document.getElementById('stage');
const menu = document.getElementById('slide-menu');
const allSlides = [...slides,...annexes];
let currentId = 's01';
let lastMainId = 's01';
let activation = 0;
let menuOpener = null;

function renderAnnex(item) {
  if (!item.views) return item.html;
  return `${appendixHeader(item.id,item.title)}<div class="slide-body"><div class="annex-body"><div class="annex-tabs" role="tablist" aria-label="Appendix views">${item.views.map((v,i)=>`<button role="tab" id="${item.id}-tab-${i}" aria-selected="${i===0}" aria-controls="${item.id}-view-${i}" tabindex="${i===0?0:-1}" data-view="${i}">${v.label}</button>`).join('')}</div>${item.views.map((v,i)=>`<div class="annex-view${v.html ? ' annex-custom-view' : ''}" id="${item.id}-view-${i}" role="tabpanel" aria-labelledby="${item.id}-tab-${i}" ${i?'hidden':''}>${v.html ?? `${image(v.media,v.alt,'appendix-figure')}<p class="caption">${v.caption}</p>`}</div>`).join('')}</div></div>`;
}
stage.innerHTML = allSlides.map(item=>`<section class="slide" id="${item.id}" data-duration="${item.duration}" aria-label="${item.title.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" hidden>${item.views ? renderAnnex(item) : item.html}</section>`).join('');
document.getElementById('previous').innerHTML=icon('left');
document.getElementById('next').innerHTML=icon('right');
document.getElementById('overview').innerHTML=icon('grid');
document.getElementById('fullscreen').innerHTML=icon('full');
document.getElementById('close-menu').innerHTML=icon('close');

// Allocate space for the layout, but draw each frame only at the media's actual ratio.
function fitMedia(scope=stage) {
  scope.querySelectorAll('.media-slot').forEach(slot=>{
    if(!slot.getClientRects().length)return;
    const media=slot.querySelector('img,video');
    const nativeWidth=media.naturalWidth||media.videoWidth;
    const nativeHeight=media.naturalHeight||media.videoHeight;
    const ratio=slot.dataset.crop==='true'?Number(slot.dataset.ratio):(nativeWidth&&nativeHeight?nativeWidth/nativeHeight:Number(slot.dataset.ratio));
    if(!ratio||!slot.clientWidth||!slot.clientHeight)return;
    slot.style.setProperty('--media-ratio',String(ratio));
    const width=Math.min(slot.clientWidth,slot.clientHeight*ratio);
    const frame=slot.querySelector('.media');
    frame.style.width=`${width}px`;
    frame.style.height=`${width/ratio}px`;
  });
}
const mediaObserver=new ResizeObserver(()=>fitMedia());
stage.querySelectorAll('.media-slot').forEach(slot=>{
  mediaObserver.observe(slot);
  const media=slot.querySelector('img,video');
  media.addEventListener(media.tagName==='IMG'?'load':'loadedmetadata',()=>fitMedia(slot.closest('.slide')));
});

function fitStage() {
  const shell=document.querySelector('.stage-shell');
  if (matchMedia('(max-width:640px) and (orientation:portrait)').matches) {
    shell.style.width='100%';shell.style.height='auto';stage.style.transform='none';fitMedia();return;
  }
  const workspace=document.querySelector('.workspace');
  const scale=Math.min((workspace.clientWidth-48)/1600,(workspace.clientHeight-34)/900);
  shell.style.width=`${1600*scale}px`;shell.style.height=`${900*scale}px`;
  stage.style.transform=`scale(${scale})`;
  fitMedia();
}
function updateVideoButton(v, state) {
  const button=v.closest('.video-wrap').querySelector('.video-action');
  const name=state==='playing'?'pause':state==='ended'?'replay':'play';
  const label=state==='playing'?'Pause':state==='ended'?'Replay':'Play';
  button.innerHTML=`${icon(name)}<span>${label}</span>`;button.setAttribute('aria-label',`${label} video`);
}
function stopVideos() { activation++;stage.querySelectorAll('video').forEach(v=>v.pause()); }
async function playVideo(v, restart=false) {
  const token=activation;
  try {
    if (!v.getAttribute('src')) {v.src=v.dataset.src;v.preload='metadata';v.load();}
    if (v.readyState<1) await new Promise((resolve,reject)=>{v.addEventListener('loadedmetadata',resolve,{once:true});v.addEventListener('error',reject,{once:true});});
    if(token!==activation || v.closest('.slide').hidden)return;
    const start=Number(v.dataset.start);
    if(restart || v.currentTime<start || v.currentTime>=Number(v.dataset.end)-.1)v.currentTime=start;
    await v.play();
    if(token!==activation || v.closest('.slide').hidden)v.pause();
  } catch {
    if(!v.error)updateVideoButton(v,'paused');
  }
}
stage.querySelectorAll('video').forEach(v=>{
  v.muted=true;
  v.addEventListener('playing',()=>updateVideoButton(v,'playing'));
  v.addEventListener('pause',()=>updateVideoButton(v,v.dataset.complete==='true'?'ended':'paused'));
  v.addEventListener('ended',()=>{v.dataset.complete='true';updateVideoButton(v,'ended');});
  v.addEventListener('timeupdate',()=>{if(v.currentTime>=Number(v.dataset.end)){v.dataset.complete='true';v.pause();updateVideoButton(v,'ended');}});
  v.addEventListener('error',()=>{v.closest('.video-wrap').querySelector('.error-message').hidden=false;v.closest('.video-wrap').querySelector('.video-action').hidden=true;});
  v.closest('.video-wrap').querySelector('.video-action').addEventListener('click',()=>{
    if(v.paused){const restart=v.dataset.complete==='true';v.dataset.complete='false';playVideo(v,restart);}else v.pause();
  });
});

function goTo(id,{focus=true,writeHash=true}={}) {
  if(!allSlides.some(s=>s.id===id))id='s01';
  stopVideos();currentId=id;
  if(id.startsWith('s'))lastMainId=id;
  stage.querySelectorAll('.slide').forEach(el=>{el.hidden=el.id!==id;el.classList.remove('entering');});
  const active=document.getElementById(id);active.classList.add('entering');
  const inAnnex=id.startsWith('a');
  const group=inAnnex?annexes:slides;
  const index=group.findIndex(s=>s.id===id);
  document.getElementById('counter').textContent=inAnnex?`A${index+1} / A${annexes.length}`:`${String(index+1).padStart(2,'0')} / 20`;
  document.querySelector('.controls').classList.toggle('in-appendix',inAnnex);
  document.getElementById('progress').style.width=`${(slides.findIndex(s=>s.id===lastMainId)+1)*5}%`;
  document.getElementById('previous').disabled=index===0;
  document.getElementById('next').disabled=index===group.length-1;
  document.title=`${inAnnex?'A'+(index+1):String(index+1).padStart(2,'0')} · ${group[index].title} — Slimane Aouanouk`;
  if(writeHash){try{history.replaceState(null,'',`#${id}`);}catch{location.hash=id;}}
  if(focus)active.querySelector('h1')?.focus({preventScroll:true});
  document.querySelector('.workspace').scrollTop=0;
  active.querySelectorAll('img').forEach(img=>img.loading='eager');
  active.querySelectorAll('video').forEach(v=>{v.dataset.complete='false';playVideo(v,true);});
  fitMedia(active);
  const next=group[index+1];
  if(next){const nextEl=document.getElementById(next.id);nextEl.querySelectorAll('img').forEach(img=>img.loading='eager');nextEl.querySelectorAll('video').forEach(v=>{if(!v.getAttribute('src')){v.src=v.dataset.src;v.preload='metadata';v.load();}});}
}
function step(direction) {const group=currentId.startsWith('a')?annexes:slides;const index=group.findIndex(s=>s.id===currentId);const next=group[index+direction];if(next)goTo(next.id);}
function closeMenu() {if(menu.open)menu.close();menuOpener?.focus({preventScroll:true});}
function showMenu(kind) {
  if(menu.open)menu.close();
  stopVideos();menuOpener=document.activeElement;
  const isAnnex=kind==='appendices';const group=isAnnex?annexes:slides;
  document.getElementById('menu-title').textContent=isAnnex?'Appendices':'Slide overview';
  document.getElementById('menu-kicker').textContent=isAnnex?'For the discussion':'20 slides / About 7 min 15';
  document.getElementById('menu-content').innerHTML=group.map((s,i)=>`<button class="menu-card ${s.id===currentId?'current':''}" data-go="${s.id}" ${s.id===currentId?'aria-current="true"':''}><span class="menu-number">${isAnnex?'A'+(i+1):String(i+1).padStart(2,'0')}</span><strong>${s.title}</strong><small>${isAnnex?s.section:s.duration+' seconds / '+s.section}</small></button>`).join('');
  menu.showModal();
}
async function toggleFullscreen() {try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{/* Native browser fullscreen remains available. */}}
document.getElementById('previous').addEventListener('click',()=>step(-1));
document.getElementById('next').addEventListener('click',()=>step(1));
document.getElementById('overview').addEventListener('click',()=>showMenu('overview'));
document.getElementById('appendices').addEventListener('click',()=>showMenu('appendices'));
document.getElementById('fullscreen').addEventListener('click',toggleFullscreen);
document.getElementById('close-menu').addEventListener('click',closeMenu);
menu.addEventListener('click',e=>{const button=e.target.closest('[data-go]');if(button){const id=button.dataset.go;menu.close();goTo(id);}else if(e.target===menu){const r=menu.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeMenu();}});
menu.addEventListener('cancel',e=>{e.preventDefault();closeMenu();});
stage.addEventListener('click',e=>{
  if(e.target.closest('[data-return]'))goTo(lastMainId);
  const tab=e.target.closest('[data-view]');if(tab)selectView(tab);
});
function selectView(tab) {
  const section=tab.closest('.slide');const tabs=[...section.querySelectorAll('[data-view]')];
  tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;section.querySelector('#'+t.getAttribute('aria-controls')).hidden=!selected;});
  section.querySelectorAll('.annex-view:not([hidden]) img').forEach(img=>img.loading='eager');
  fitMedia(section);
}
document.addEventListener('keydown',e=>{
  if(e.altKey||e.ctrlKey||e.metaKey||e.repeat)return;
  if(menu.open)return;
  const target=e.target;
  if(target.closest('input,textarea,select,[contenteditable="true"],video'))return;
  const tab=target.closest('[role="tab"]');
  if(tab&&['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){
    e.preventDefault();const tabs=[...tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')];let i=tabs.indexOf(tab);i=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;selectView(tabs[i]);tabs[i].focus();return;
  }
  if(e.key===' '&&target.closest('button,a'))return;
  const key=e.key.toLowerCase();
  if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();step(1);}
  else if(e.key==='ArrowLeft'){e.preventDefault();step(-1);}
  else if(key==='o'){e.preventDefault();showMenu('overview');}
  else if(key==='a'){e.preventDefault();showMenu('appendices');}
  else if(key==='f'){e.preventDefault();toggleFullscreen();}
});
document.addEventListener('fullscreenchange',()=>{const button=document.getElementById('fullscreen');button.setAttribute('aria-label',document.fullscreenElement?'Exit fullscreen':'Enter fullscreen');fitStage();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopVideos();});
window.addEventListener('resize',fitStage);
window.addEventListener('hashchange',()=>{if(location.hash.slice(1)!==currentId)goTo(location.hash.slice(1),{writeHash:false});});
fitStage();goTo(location.hash.slice(1)||'s01',{focus:false});
window.PRESENTATION=Object.freeze({slides:slides.map(({html,...s})=>s),annexes:annexes.map(({html,views,...s})=>s),get current(){return currentId;},get lastMain(){return lastMainId;}});
