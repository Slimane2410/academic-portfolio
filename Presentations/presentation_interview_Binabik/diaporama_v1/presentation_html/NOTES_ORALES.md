# Binabik — Speaking notes

20 slides · Target 7 min 15 · 28 October 2026

These are speaking cues, not a script. The slides advance manually. Keep these notes outside the shared presentation window.

## S01 — From ideas to working robots.

15 seconds · End at 0:15

- Engineering student at Arts et Métiers, also pursuing a research master’s in robotics at Sorbonne.
- What I enjoy most is turning an idea into a physical system that I can test and improve.

Transition: “That starts with understanding the physical task.”

Sources: [Fil rouge](../../FIL_ROUGE_INTERVIEW_BINABIK.md), [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex).

Image credit for S01: [Unitree Robotics — G1 official product image](https://shop.unitree.com/products/unitree-g1). This identifies the platform; it is not a photograph of our project. The rover photograph remains a separate experimental image.

## S02 — Start with the physical task

20 seconds · End at 0:35

- At Arts et Métiers, I worked on casting, machining and dimensional inspection in a team manufacturing project.
- That gave me a concrete view of accuracy, process constraints and the work operators do.

Transition: “I also explored how that kind of operation could be automated.”

Sources: [Fil rouge](../../FIL_ROUGE_INTERVIEW_BINABIK.md), [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [Pages projets](../../../../en/projects.html).

## S03 — Design the automation

20 seconds · End at 0:55

- We studied an automated FANUC casting cell as a team.
- I can discuss robot selection, the gripper concept, the layout and operation sequence, including reach and thermal constraints. This remained a design and simulation study.

Transition: “These projects also gave me a foundation in mechanical engineering.”

Sources: [Fil rouge](../../FIL_ROUGE_INTERVIEW_BINABIK.md), [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [Pages projets](../../../../en/projects.html).

## S04 — From mechanics to robotics

10 seconds maximum · End at 1:05

“At Arts et Métiers, projects like this taught me CAD and engineering calculations. I then chose robotics, which led to my Singapore internship.”

The four numbered visuals show the drawing, simulation, foam machining and finished car. Use them as a quick visual progression; do not narrate each image. The sentence includes the transition to S05.

Sources: [F1 in Schools](../../../../en/projects/f1.html), [original drawing PDF](assets/pres_F1/1.pdf), [simulation](assets/pres_F1/2.png), [machining](assets/pres_F1/3.png), [finished car](assets/pres_F1/4.png). Supplied by Slimane; the PDF is rendered to PNG for the slide. This is an example of engineering education, without claiming sole ownership of all stages.

## S05 — Make it work on a real robot

25 seconds · End at 1:30

- During my research project in Paris and internship in Singapore, I worked with another student on trajectory planning and collision avoidance.
- What I especially enjoyed was connecting algorithms, perception and physical hardware. The experiments shown here were on ground rovers.

Transition: “We had to connect the whole chain.”

Sources: [Fil rouge](../../FIL_ROUGE_INTERVIEW_BINABIK.md), [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex), [PACO et médias authentiques](../../../../paco-showcase/index.html).

## S06 — Connect the whole robotics loop

25 seconds · End at 1:55

- The nominal trajectory was computed offline. An overhead camera estimated the robot’s position and heading.
- The online corrector used the observed state, sent serial commands to the rover and recorded experiment logs. This was a causal corrector, not a completed MPC.

Transition: “The nominal path gave the robot a route to follow.”

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [PACO et médias authentiques](../../../../paco-showcase/index.html).

## S07 — Plan the path, then correct the motion

20 seconds · End at 2:15

- We used Python and SciPy for offline trajectory optimization, taking the goal and obstacles into account.
- The nominal phase produces the reference path around fixed obstacles. The causal correction phase adjusts the current motion when a mobile agent is observed. These two plots illustrate the method; they are not the physical validation campaigns.

Transition: “To follow it, we first needed a trustworthy estimate of the robot’s pose.”

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [PACO et médias authentiques](../../../../paco-showcase/index.html).

## S08 — Turn pixels into metric positions

25 seconds · End at 2:40

- We used an external overhead Basler camera with OpenCV and ArUco markers.
- The paper figure shows the raw frame on the left and detected marker IDs with metric coordinates on the right. We converted image measurements into positions in the arena frame. This was external visual localization, not onboard SLAM.
- Visual source: [original paper figure f4](assets/paco-f4-camera.pdf), rendered in full for the slide.

Transition: “The first challenge was making those measurements accurate enough.”

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex), [PACO et médias authentiques](../../../../paco-showcase/index.html).

## S09 — Improve the measurement, improve the system

30 seconds · End at 3:10

- On an independent nine-point ground grid, mean localization error fell from 36.3 to 5.8 mm, an 84% reduction.
- We used intrinsic calibration, distortion correction and metric homography, then validated the geometry again. These are ground-grid errors, distinct from reprojection RMS and raised-marker error.

Transition: “Accuracy was one part. Timing was another.”

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex).

## S10 — Make sensing and action fit together

20 seconds · End at 3:30

- The measured physical-loop median was 19.84–19.86 Hz.
- Profiling showed why image processing and serial communication mattered to the whole loop. This is an observed median, not a hard real-time guarantee.

Transition: “This is what that integrated system looked like in motion.”

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex), [PACO et médias authentiques](../../../../paco-showcase/index.html).

## S11 — Watch the physical system respond

25 seconds · End at 3:55

- This is a physical multi-agent avoidance trial: one controlled rover moving among other moving robots.
- Point out the task and the observed response, then leave a few seconds for the video.

Transition: “One demonstration is useful, but we also needed repeated trials.”

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [PACO et médias authentiques](../../../../paco-showcase/index.html).

## S12 — Check repeatability

25 seconds · End at 4:20

- The two frozen confirmatory tasks were each repeated twenty times. Across those forty runs, there were forty goal arrivals and zero collisions.
- These were team results in those experimental scenarios. The figure shows the twenty-run block with one moving agent: trajectories on the left and edge-to-edge clearance on the right. Exploratory trials outside the frozen campaigns also exposed failures.
- Figure: [original f15 PDF](assets/paco-f15-repeatability.pdf). Clearance is measured between conservative bounding discs; zero marks disc contact.

Transition: “The useful part was the engineering process behind those numbers.”

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex), [PACO et médias authentiques](../../../../paco-showcase/index.html).

## S13 — Measure, diagnose, change, re-test

20 seconds · End at 4:40

- The engineering process was to measure the problem, diagnose it, change the system and re-test under controlled conditions.
- That included calibration, processing bottlenecks and co-developed Python unit, numerical and regression checks.

Transition: “I had already developed that interest in experiments through an individual project.”

Sources: [Fil rouge](../../FIL_ROUGE_INTERVIEW_BINABIK.md), [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex).

## S14 — Build the experiment, analyze the data

25 seconds · End at 5:05

- I designed and built this impact-testing rig myself, with a 46 cm pendulum and four interchangeable contact geometries.
- I filmed the experiments and analyzed positions in Python using regressions and measurement uncertainty. This individual project predates Singapore.

Transition: “Today, I’m building on that hands-on background through my robotics master’s.”

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex), [Pages projets](../../../../en/projects.html).

## S15 — What I’m learning now

30 seconds · End at 5:35

- I’m now specializing in robotics through my research master’s at Sorbonne.
- The four areas are state estimation and sensor fusion, perception and mobile robotics, manipulation and control, and machine learning.
- Examples: deterministic and Bayesian linear estimation; EKF, NEKF, UKF and particle filters; camera perception and SLAM; manipulator kinematics, dynamics, Jacobians and DH conventions; classical and nonlinear control; deep learning, PyTorch, backpropagation and reinforcement learning. Choose two or three examples during the main presentation.

Transition: “My main master’s project brings these foundations together through humanoid robot learning.”

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex), User clarification, 28 October 2026.

## S16 — Bring that mindset to humanoid learning

20 seconds · End at 5:55

- That’s the direction of our VLA project: assistive manipulation on a Unitree G1. We have a G1 available for the project.
- Right now, I’m reviewing papers, learning the methods and preparing our first experiments.

Transition: “The goal is to work through the complete demonstration-to-robot pipeline.”

Sources: [Proposition VLA](../../projet_VLA_infos/Project_PING_Ahmidach_Chemsdine_.odt), [Mail de Prof. Olivier Bruneau](../../projet_VLA_infos/mail_olivier_bruneau.rtf), User clarification, 28 October 2026.

## S17 — From demonstrations to robot behavior

25 seconds · End at 6:20

**Spoken cue:** “We’re considering two routes: robot demonstrations through teleoperation, and human motion capture with six high-frequency cameras. Human movements would be retargeted to the G1 and optimized in MuJoCo or Isaac Sim and Isaac Lab. Both routes would support policy learning, deployment and evaluation.”

**Preparation notes:**

- Route A collects robot demonstrations and aligns images, state, actions and instructions. The teleoperation interface is still to be selected; the email does not establish an available UMI system.
- Route B is an extension proposed with Prof. Olivier Bruneau. His email announces a future acquisition of six high-frequency motion-capture cameras, including fine human motions and retargeting to different robots. The slide focuses on feasible G1 motions for this project.
- AI motion optimization in MuJoCo or Isaac Sim / Isaac Lab is a proposed direction. Retargeted movements must also be associated with the observations, instructions and robot actions needed for VLA demonstrations. Motion capture alone is not a complete VLA dataset.
- Policy learning, deployment and evaluation remain project goals. Do not present them as completed results.

Transition: “There may also be a useful way to connect this project with the internship.”

Sources: [Project proposal](../../projet_VLA_infos/Project_PING_Ahmidach_Chemsdine_.odt), [Olivier Bruneau email](../../projet_VLA_infos/mail_olivier_bruneau.rtf), two-route diagram approved by Slimane on 30 October 2026.

## S18 — Use the project to prepare for the internship

20 seconds · End at 6:40

- If useful, I’d be happy to explore a direction suggested by your team in this project, so I can arrive better prepared and contribute sooner.
- Demonstration quality and policy evaluation are possible discussion topics, subject to the academic project’s scope and the team’s priorities.

Transition: “That connection is one reason Binabik interests me.”

Sources: User clarification, 28 October 2026.

## S19 — Why Binabik

20 seconds · End at 7:00

- I’m interested in the combination of industrial use cases, physical robotics and learning-based approaches.
- That connects with my mechanical background, perception and integration experience, and current direction in robot learning.

Transition: “That’s the combination I’d like to contribute to.”

Sources: [Fil rouge](../../FIL_ROUGE_INTERVIEW_BINABIK.md), [Recherche Binabik](../../general%20data/Company_Research_Binabik_AI.md), [Orientation industrielle](../../BINABIK_PREUVES_ORIENTATION_INDUSTRIELLE.md).

## S20 — Where I’d like to contribute

15 seconds · End at 7:15

- I’d like to contribute to robotics software on real hardware and learn closely with the team.
- I’m open to your priorities across perception and integration, robot learning and data, or experiments and debugging. I’m available for six months from February 2027.

Transition: “Pause and invite Giovanni’s response.”

Sources: [Fil rouge](../../FIL_ROUGE_INTERVIEW_BINABIK.md), [Échanges Binabik](../../general%20data/mail_binabik.rtf), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex).

## Appendices — only if useful for the discussion

### A1 — VLA project: current work and directions

- The G1 is available. I’m starting with literature review, learning the methods and preparing the project. The aim is an end-to-end assistive-manipulation pipeline.
- Prof. Olivier Bruneau proposed a future six-camera high-frequency motion-capture system, followed by retargeting and possible motion optimization in MuJoCo or the Isaac environment mentioned in his email. This is a prospective route, not an already operating collection system.
- OpenPI π₀/π₀.₅ is an earlier target in my project context, not a final checkpoint specified in the proposal or supervisor’s email. No UMI system is documented as available.
- Possible alignment topics include demonstration quality, reproducible policy evaluation and variation in object pose. Discuss one useful direction within the academic project.

Sources: [Proposition VLA](../../projet_VLA_infos/Project_PING_Ahmidach_Chemsdine_.odt), [Mail de Prof. Olivier Bruneau](../../projet_VLA_infos/mail_olivier_bruneau.rtf), [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), User clarification, 28 October 2026.

### A2 — Exploring Synthetic Data Generation for Humanoid Robotics

Discussion only · About 30 seconds · Outside the main presentation

“I recently came across HumanoidMimicGen from NVIDIA and UT Austin. It generates synthetic demonstrations using whole-body planning, starting from a teleoperated demonstration. It made me think of Binabik: reducing data collection when adapting robots to new industrial tasks seems like an important challenge. I’m still learning about these approaches, and I’d love to explore that problem.”

**Optional transition:** “That reminds me of a paper I recently came across. I have a slide about it in the appendix, if you’re interested.” Use this only if data collection or policy learning comes up in the discussion.

**Possible question before introducing the paper:** “When adapting your solution to a new machine or task, how much of the process is automated, and how much still requires manual configuration?” Listen to the response before offering the appendix.

**Preparation facts:**

- Lin et al., NVIDIA and UT Austin, 2026. Source: the PDF supplied by Slimane, arXiv:2605.27724v1. The title excerpt is from page 1; the overview is Figure 1 on page 2.
- Section 6.1 and Table 1: one human-teleoperated source demonstration per task, then 1,000 generated successful trajectories in the simulated G1 benchmark. This is not markerless human motion capture and not a universal real-world amplification ratio.
- Section 6.4 also uses real demonstrations for sim-and-real co-training. Do not imply that a single demonstration alone achieves real deployment.
- The industrial question is personal interest, not evidence that Binabik uses this method or that Slimane has implemented it. No mastery claim or promise of measured industrial adaptation speed.

Sources: [Project website](https://humanoidmimicgen.github.io/), [paper](https://arxiv.org/abs/2605.27724), supplied local PDF in Zotero `8FMF84SH`.

### A3 — Research interests: from VLA to reliable robots

Discussion only · Overview: 35–45 seconds · Outside the main presentation

“I’m starting to explore several papers on VLA models and humanoid robotics. What interests me is how the pieces fit together: adapting a policy, collecting useful data, understanding contact failures, and connecting high-level decisions to physical control. OpenVLA and Psi-Zero raise adaptation questions; HumanoidMimicGen explores synthetic data; FACT studies precision and force failures; LeVERB connects a high-level policy with whole-body control. I’d like to build on my experimental robotics experience while learning about these approaches.”

**Then ask:** “For your industrial tasks, where is the biggest bottleneck today: data, policy adaptation, or reliable execution?” Listen before choosing a detailed view. These are possible discussion topics, not assumptions about Binabik’s internal priorities.

**Paper-specific cues:**

- **OpenVLA:** a pretrained VLA adapted through robot demonstrations. My interest is understanding fine-tuning for my project. The paper focuses on manipulation, not full humanoid locomotion. Figure 1, page 1. [Kim et al., 2024](https://openvla.github.io/).
- **HumanoidMimicGen:** whole-body planning expands source demonstrations into new scenes. The 1 → 1,000 result is per task in the simulated benchmark; the real-world study also uses real data. Follow the link to A2 if more context is useful. Figure 1, page 2, reused from A2. [Lin et al., 2026](https://humanoidmimicgen.github.io/).
- **FACT:** distinguish precision failures and force failures rather than relying only on overall success. My interest is reproducible testing and failure diagnosis, drawing on experimental robotics. Suitable force sensing is required for the force-aware approach. Figure 2, page 4. [Parés-Morlans et al., 2026](https://stanford-iprl-lab.github.io/fact/).
- **Ψ₀ / Psi-Zero:** pretrain on human video, then learn robot actions from robot data. This is distinct from the motion-capture route in my project, and human video does not directly give robot joint commands. Figure 2, page 3. [Wei et al., 2026](https://psi-lab.ai/Psi0).
- **LeVERB:** a high-level vision-language policy produces latent actions for a whole-body controller. My interest is the interface between learning, physical control and integration. Do not present it as demonstrated precision industrial manipulation. Figure 1, page 2. [Xue et al., 2025](https://arxiv.org/abs/2506.13751).

Source PDFs supplied by Slimane in `/Users/slimaneaouanouk/Desktop/temp_papers`. Do not compare success rates across these different benchmarks. Do not imply that I have implemented or mastered the methods, or that Binabik uses them. No additional equipment or final model choice is inferred for the master’s project.

### A4 — Calibration: which error are we measuring?

- Twenty ChArUco views were used for camera calibration. Reprojection RMS was 0.191 px.
- Mean ground-grid error was evaluated on an independent nine-point grid: 36.3 to 5.8 mm. Raised-marker error was evaluated across five positions: 60.8 to 11.6 mm.
- These are three separate measurements with different units and protocols.

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex).

### A5 — What sits inside a near-20 Hz loop?

- The figure shows the measured budget across the real loop, including vision, correction, serial I/O and logging.
- The 19.84–19.86 Hz figures are observed medians. Before/after camera sessions were not a strictly paired benchmark.
- The corrector was causal, without a completed MPC horizon. Python tests were co-developed; 64 test files does not mean 64 passing test cases.

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex), [PACO et médias authentiques](../../../../paco-showcase/index.html).

### A6 — Repeatability and limits

- One controlled rover was physically tested among one or two moving agents. Six controlled agents were simulation-only.
- One two-agent run used the wrong obstacle layout and was excluded from its aggregates, while its successful arrival remains in the 40/40 total. Exploratory failures prevent a universal safety claim.

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [PACO et médias authentiques](../../../../paco-showcase/index.html).

### A7 — Individual experimental work and physical design

- TIPE: individually designed 46 cm pendulum rig, four contact geometries and Python video analysis. In the specified 12 mm cylinder, 3 psi case, a 2.2 m/s striker produced a measured 4.0 m/s ball exit speed.
- Aircraft brake: individual preliminary CAD design, not a validated prototype.
- FAB: team manufacturing project. Two of four inspected characteristics were conforming; two nonconformities were documented and diagnosed.

Sources: [Contexte V1.9](../../../../V1.9_PORTFOLIO_CONTEXT.md), [CV transmis](../../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex), [Pages projets](../../../../en/projects.html).

## Presentation boundaries

The G1 is available, as specified by Slimane. The project is starting; reading, learning and preparing experiments are current activities. Demonstration collection, policy adaptation and robot evaluation describe the project direction. FANUC is simulated; the aircraft-brake design is preliminary; physical rover results are collaborative and limited to the specified campaigns.
