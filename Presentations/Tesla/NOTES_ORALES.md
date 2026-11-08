# Tesla — Speaking notes

17 slides principales ; 7 annexes accessibles séparément.

Notes reprises de la présentation source.

## S01 — From ideas to working robots.

15 seconds

- Engineering student at Arts et Métiers, also pursuing a research master’s in robotics at Sorbonne.
- What I enjoy most is turning an idea into a physical system that I can test and improve.

Transition: That starts with understanding the physical task.

## S02 — Start with the physical task

20 seconds

- At Arts et Métiers, I worked on casting, machining and dimensional inspection in a team manufacturing project.
- That gave me a concrete view of accuracy, process constraints and the work operators do.

Transition: I also explored how that kind of operation could be automated.

## S03 — Design the automation

20 seconds

- We studied an automated FANUC casting cell as a team.
- I can discuss robot selection, the gripper concept, the layout and operation sequence, including reach and thermal constraints. This remained a design and simulation study.

Transition: These projects also gave me a foundation in mechanical engineering.

## S04 — From mechanics to robotics

10 seconds

- At Arts et Métiers, projects like this taught me CAD and engineering calculations.

Transition: I then chose robotics, which led to my Singapore internship.

## S05 — Make it work on a real robot

25 seconds

- During my research project in Paris and internship in Singapore, I worked with another student on trajectory planning and collision avoidance.
- What I especially enjoyed was connecting algorithms, perception and physical hardware. The experiments shown here were on ground rovers.

Transition: We had to connect the whole chain.

## S06 — Connect the whole robotics loop

25 seconds

- The nominal trajectory was computed offline. An overhead camera estimated the robot’s position and heading.
- The online corrector used the observed state, sent serial commands to the rover and recorded experiment logs. This was a causal corrector, not a completed MPC.

Transition: The nominal path gave the robot a route to follow.

## S07 — Plan the path, then correct the motion

20 seconds

- We used Python and SciPy for offline trajectory optimization, taking the goal and obstacles into account.
- The nominal phase produces the reference path around fixed obstacles. The causal correction phase adjusts the current motion when a mobile agent is observed. These two plots illustrate the method; they are not the physical validation campaigns.

Transition: To follow it, we first needed a trustworthy estimate of the robot’s pose.

## S08 — Turn pixels into metric positions

25 seconds

- We used an external overhead Basler camera with OpenCV and ArUco markers.
- The paper figure shows the raw frame on the left and detected marker IDs with metric coordinates on the right. We converted image measurements into positions in the arena frame. This was external visual localization, not onboard SLAM.

Transition: The first challenge was making those measurements accurate enough.

## S09 — Improve the measurement, improve the system

30 seconds

- On an independent nine-point ground grid, mean localization error fell from 36.3 to 5.8 mm, an 84% reduction.
- We used intrinsic calibration, distortion correction and metric homography, then validated the geometry again. These are ground-grid errors, distinct from reprojection RMS and raised-marker error.

Transition: Accuracy was one part. Timing was another.

## S10 — Make sensing and action fit together

20 seconds

- The measured physical-loop median was 19.84–19.86 Hz.
- Profiling showed why image processing and serial communication mattered to the whole loop. This is an observed median, not a hard real-time guarantee.

Transition: This is what that integrated system looked like in motion.

## S11 — Watch the physical system respond

25 seconds

- This is a physical multi-agent avoidance trial: one controlled rover moving among other moving robots.
- Point out the task and the observed response, then leave a few seconds for the video.

Transition: One demonstration is useful, but we also needed repeated trials.

## S12 — Check repeatability

25 seconds

- The two frozen confirmatory tasks were each repeated twenty times. Across those forty runs, there were forty goal arrivals and zero collisions.
- These were team results in those experimental scenarios. The figure shows the twenty-run block with one moving agent: trajectories on the left and edge-to-edge clearance on the right. Exploratory trials outside the frozen campaigns also exposed failures.

Transition: The useful part was the engineering process behind those numbers.

## S13 — Measure, diagnose, change, re-test

20 seconds

- The engineering process was to measure the problem, diagnose it, change the system and re-test under controlled conditions.
- That included calibration, processing bottlenecks and co-developed Python unit, numerical and regression checks.

Transition: I had already developed that interest in experiments through an individual project.

## S14 — Build the experiment, analyze the data

25 seconds

- I designed and built this impact-testing rig myself, with a 46 cm pendulum and four interchangeable contact geometries.
- I filmed the experiments and analyzed positions in Python using regressions and measurement uncertainty. This individual project predates Singapore.

Transition: Today, I’m building on that hands-on background through my robotics master’s.

## S15 — What I’m learning now

30 seconds

- I’m now specializing in robotics through my research master’s at Sorbonne.
- The four areas are state estimation and sensor fusion, perception and mobile robotics, manipulation and control, and machine learning.
- Examples: deterministic and Bayesian linear estimation; EKF, NEKF, UKF and particle filters; camera perception and SLAM; manipulator kinematics, dynamics, Jacobians and DH conventions; classical and nonlinear control; deep learning, PyTorch, backpropagation and reinforcement learning. Choose two or three examples during the main presentation.

Transition: My main master’s project brings these foundations together through humanoid robot learning.

## S16 — Bring that mindset to humanoid learning

20 seconds

- That’s the direction of our VLA project: assistive manipulation on a Unitree G1. We have a G1 available for the project.
- Right now, I’m reviewing papers, learning the methods and preparing our first experiments.

Transition: The goal is to work through the complete demonstration-to-robot pipeline.

## S17 — From demonstrations to robot behavior

25 seconds

- We are considering two routes: robot demonstrations through teleoperation, and an extension using human motion capture. Olivier Bruneau proposed a future system with six high-frequency cameras.
- The human-motion route would retarget fine movements to feasible G1 motions and explore AI motion optimization in MuJoCo or Isaac Sim / Isaac Lab. The resulting demonstrations would also need aligned observations, instructions and robot actions for VLA learning.
- Both routes aim towards policy learning, deployment and evaluation. These are project directions, not completed collection, training or deployment results. The teleoperation interface is still to be selected; no UMI system is currently available according to the email.

## A01 — VLA project: current work and directions

- The G1 is available. I’m starting with literature review, learning the methods and preparing the project. The aim is an end-to-end assistive-manipulation pipeline.
- Prof. Olivier Bruneau proposed a future six-camera high-frequency motion-capture system, followed by retargeting and possible motion optimization in MuJoCo or the Isaac environment mentioned in his email. This is a prospective route, not an already operating collection system.
- OpenPI π₀/π₀.₅ is an earlier target in my project context, not a final checkpoint specified in the proposal or supervisor’s email. No UMI system is documented as available.
- Possible alignment topics include demonstration quality, reproducible policy evaluation and variation in object pose. Discuss one useful direction within the academic project.

## A02 — Exploring Synthetic Data Generation for Humanoid Robotics

- Discussion only, about 30 seconds: I recently came across HumanoidMimicGen from NVIDIA and UT Austin. It explores generating many synthetic demonstrations from a teleoperated source demonstration using whole-body planning. It made me think of Binabik: reducing collection effort when adapting robots to new industrial tasks is a problem I would love to explore. I am still learning about these approaches.
- Scope of the number: Section 6.1 and Table 1 report one human-teleoperated source demonstration and 1,000 generated successful trajectories per task in the simulated G1 benchmark. The source is not markerless human motion capture. The real-world evaluation also uses real robot data for sim-and-real co-training, so this is not a claim that one demo alone solves real-world deployment.
- Possible opening question: When adapting your solution to a new machine or task, how much of the process is automated, and how much still requires manual configuration? If data collection or policy learning comes up, offer this appendix rather than inserting it into the timed presentation.
- Potential industrial relevance is my discussion question, not evidence of Binabik using this method or of my having implemented it. No personal mastery, benchmark result or deployment is claimed.

## A03 — Research interests: from VLA to reliable robots

- Discussion only, 35–45 seconds: I am starting to explore several papers on VLA models and humanoid robotics. What interests me is how the pieces fit together: adapting a policy, collecting useful data, understanding contact failures, and connecting high-level decisions to physical control. OpenVLA and Psi-Zero raise adaptation questions; HumanoidMimicGen explores synthetic data; FACT studies precision and force failures; LeVERB separates high-level policy and whole-body control. I would like to build on my experimental robotics experience while learning about these approaches.
- Discussion question: For your industrial tasks, where is the biggest bottleneck today: data, policy adaptation, or reliable execution? Listen before selecting a detailed paper view. These are personal research interests, not assumptions about Binabik’s internal priorities or technology.
- No cross-paper success-rate comparison: benchmarks and tasks differ. No implementation or mastery claim. OpenVLA is manipulation-focused; HumanoidMimicGen amplification is a simulation-benchmark result; FACT needs suitable force measurements; human video in Psi-Zero is not MoCap; LeVERB does not establish fine industrial manipulation. The controller interface and resources for my project remain to be selected.

## A04 — Calibration: which error are we measuring?

- Twenty ChArUco views were used for camera calibration. Reprojection RMS was 0.191 px.
- Mean ground-grid error was evaluated on an independent nine-point grid: 36.3 to 5.8 mm. Raised-marker error was evaluated across five positions: 60.8 to 11.6 mm.
- These are three separate measurements with different units and protocols.

## A05 — What sits inside a near-20 Hz loop?

- The figure shows the measured budget across the real loop, including vision, correction, serial I/O and logging.
- The 19.84–19.86 Hz figures are observed medians. Before/after camera sessions were not a strictly paired benchmark.
- The corrector was causal, without a completed MPC horizon. Python tests were co-developed; 64 test files does not mean 64 passing test cases.

## A06 — Repeatability and limits

- One controlled rover was physically tested among one or two moving agents. Six controlled agents were simulation-only.
- One two-agent run used the wrong obstacle layout and was excluded from its aggregates, while its successful arrival remains in the 40/40 total. Exploratory failures prevent a universal safety claim.

## A07 — Individual experimental work and physical design

- TIPE: individually designed 46 cm pendulum rig, four contact geometries and Python video analysis. In the specified 12 mm cylinder, 3 psi case, a 2.2 m/s striker produced a measured 4.0 m/s ball exit speed.
- Aircraft brake: individual preliminary CAD design, not a validated prototype.
- FAB: team manufacturing project. Two of four inspected characteristics were conforming; two nonconformities were documented and diagnosed.

