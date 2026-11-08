# Oral guide — Binabik technical interview 2

All main wording and optional answers are in simple American English. The complete main sequence is budgeted at **20:45 / 1,245 seconds**, including videos, pauses and transitions. Questions and internal views are outside that budget. These are rehearsal targets, not certified speech durations.

Use the talking points as reminders; do not read them in addition to the suggested wording. Speak the exact transition once. Every detail link opens inside its parent slide; Escape or **Back to slide** returns to Overview. Main navigation always resets the destination to Overview.

## Timing map

| Section | Slides | Target | Cumulative end |
|---|---|---:|---:|
| Introduction | 01–02 | 1:00 | 1:00 |
| Singapore | 03–23 | 14:45 | 15:45 |
| FANUC | 24–27 | 2:30 | 18:15 |
| Unitree G1 | 28–29 | 1:30 | 19:45 |
| Closing | 30–31 | 1:00 | 20:45 |

## Main presentation

### 01 — From research to real robots

**Target:** 0:25 · **Main timeline:** 0:00–0:25 · [Open Overview](index.html#s01)

**Main message:** I turn a robotics idea into a system I can measure and improve.

**Talking points**

- **Understand** the task
- **Build** the full chain
- **Measure** what happens

**Main wording**

Thank you for meeting with me again. I'd like to show how I approach a robotics problem: understand the task, make decisions, build the system, and measure its behavior. I'll focus on my completed work in Singapore.

**Visual pause — 2 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “Then I'll connect it to industrial automation and my current project.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [My background](index.html#s01/d2) — **What prepared you for this work?** My preparatory classes gave me a strong scientific foundation through intensive math, physics, and engineering science. At Arts et Métiers, I learned how industrial processes work and what constraints matter in practice. That helped me recognize opportunities for automation, like the pouring task in my FANUC project. I also built foundations in mechanics, modeling, and control. I then joined a research master's program at Sorbonne Université to strengthen the foundations of robotics.

### 02 — What I'll show today

**Target:** 0:35 · **Main timeline:** 0:25–1:00 · [Open Overview](index.html#s02)

**Main message:** Three projects show implementation, industrial thinking, and current learning.

**Talking points**

- **Singapore:** the technical core
- **FANUC:** an industrial task
- **G1:** ongoing manipulation work

**Main wording**

I’ll focus mainly on my research project in Singapore, covering trajectory planning, online correction, and real-robot testing. I’ll explain the engineering decisions I made, the main challenges I faced, and how I overcame them.
Then, I’ll present my industrial automation study with FANUC. Finally, I’ll briefly introduce my current Unitree G1 project.

**Exact transition:** “I'll start with the research problem behind the Singapore testbed.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Why these projects?](index.html#s02/d1) — **Why did you choose these examples?** They show three useful parts of my experience: physical integration, task feasibility, and learning a new robotics field.

### 03 — Singapore: the research context

**Target:** 0:30 · **Main timeline:** 1:00–1:30 · [Open Overview](index.html#s03)

**Main message:** Digital twins for Singapore · drone trajectory planning

**Talking points**

- **DesCartes / CNRS@CREATE**
- **Digital twins** for urban systems
- **Drones** and trajectory planning

**Main wording**

The DesCartes project in Singapore aims to build a digital twin of the city. One research area focuses on drones, as you can see in this fifteen-second excerpt.

**Video — 15 seconds:** Click Play with sound on. Play the entire local clip without cutting it off. Stay quiet until playback finishes, then say the transition.

**Optional source link:** The discreet YouTube link opens the full DesCartes program video: https://youtu.be/sFYLavyD_sc. If useful: “You can find more about the DesCartes project in the full video linked here.” This is optional and outside the main wording.

**Exact transition:** “My work focused on planning and ground-rover validation.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Research context](index.html#s03/d1) — **How does this relate to drones?** The research motivation concerned drone trajectory planning, while the reported physical experiments use ground rovers.
- [Ground-robot scope](index.html#s03/d2) — **What was physically validated?** One controlled rover moved among one or two independently driven physical agents in a bounded indoor arena.
- [Initial knowledge](index.html#s03/d3) — **What did you have to learn?** I learned the planning and local-correction methods from papers, then connected them to experiments.
- [Learning from papers](index.html#s03/d4) — **How did you turn papers into code?** I separated the model, numerical choices, interfaces and measurable outcomes.

### 04 — One robot, independent moving agents

**Target:** 0:35 · **Main timeline:** 1:30–2:05 · [Open Overview](index.html#s04)

**Main message:** The controlled robot must reach its goal without access to the true future of other agents.

**Talking points**

- **One** robot chooses the avoidance motion
- **Independent** agents disturb the path
- **Success = safe arrival**

**Main wording**

This simulation illustrates the task: one controlled robot and independent moving agents. The agents did not coordinate their avoidance with my robot. My rover had to reach a goal while avoiding fixed obstacles, moving agents, and the arena boundary. It could use their current observed positions, but not their true future motion. I evaluated both arrival and clearance, because staying still can look safe while completely failing the task.

**Video — narrated simulation:** Click Play and explain the scene while the full simulation clip plays. This is simulation media, not a physical trial. No additional silent window is added to the slide target.

**Exact transition:** “To evaluate that behavior, I first need to define success.”

**Optional hook:** None needed. Continue without waiting for a question.

**Oral clarification:** These are binary indicators: 1 when the condition holds, 0 otherwise.


### 05 — Defining success

**Target:** 0:45 · **Main timeline:** 2:05–2:50 · [Open Overview](index.html#s05)

**Main message:** Success means reaching the goal safely.

**Talking points**

- **Clearance:** center distance minus both safety radii
- **Safe:** no collision, no arena exit, no execution error
- **Goal:** final position within the chosen tolerance
- **Joint success:** safety and arrival together

**Main wording**

To evaluate the robot, I first defined what success means. I model the robot and each obstacle or agent as circles. Clearance is the distance between their centers, minus both radii. Positive clearance means the circles are separated. Zero means they touch; negative clearance means the modeled envelopes overlap. Then I use three binary indicators. I safe is one when there is no collision, no arena exit, and no execution error. I goal is one when the robot finishes within the goal tolerance. I joint is their product. So a successful run must be safe and reach the goal.

**Exact transition:** “With those criteria defined, I can explain the system's assumptions and limits.”

**Optional hook:** Safety alone is not enough: a robot that never moves can still fail the task.

**Oral clarification:** These are binary indicators: 1 when the condition holds, 0 otherwise.


### 06 — What the system had to handle

**Target:** 0:30 · **Main timeline:** 2:50–3:20 · [Open Overview](index.html#s06)

**Main message:** The planner, online state and physical drivetrain have different kinds of limits.

**Talking points**

- **Local observation** of moving agents
- **Soft penalties** in the nominal plan
- **Online clipping** before wheel conversion

**Main wording**

I had local agent observations, a bounded arena, and a robot that couldn't move sideways. The offline plan used soft speed and acceleration penalties. Online, I clipped internal acceleration and velocity. These mechanisms are different, and they don't prove universal bounds on physical motion.

**Exact transition:** “I organized the system into an offline plan and an online correction.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Perception radius](index.html#s06/d1) — **What does the 0.60 m radius mean?** In the physical adapter, moving-agent influence is limited using edge-to-edge clearance of 0.60 m.
- [Speed / acceleration](index.html#s06/d2) — **Why are offline and online numbers different?** The draft uses 0.35 m/s and 0.8 m/s² as offline penalty thresholds, and 0.25 m/s and 1.0 m/s² for online clipping.
- [Hardware limits](index.html#s06/d3) — **Were those physical bounds verified for all motion?** No. I verified the command logic and measured the drivetrain, but did not establish a universal physical envelope.
- [Assumptions](index.html#s06/d4) — **What assumptions matter most?** The testbed is planar, externally localized, relatively slow, and uses marked obstacles and robots.

### 07 — The two-layer architecture

**Target:** 0:45 · **Main timeline:** 3:20–4:05 · [Open Overview](index.html#s07)

**Main message:** The nominal plan handles the known static scene; current observations drive the local correction.

**Talking points**

- **Offline:** build a nominal trajectory
- **Online:** react to current observations
- **Physical loop:** observe → command → measure

**Main wording**

The first layer builds a nominal trajectory using the static scene: the start, goal, fixed obstacles, and arena. Moving agents are excluded. The second layer runs during execution. It combines attraction toward the nominal path with repulsion from current observations and damping. I then convert that planar request into wheel commands. The overhead camera closes the loop, and the logs let me inspect positions, forces, commands, and timing afterward. This separation kept the global path problem away from the real-time loop.

**Exact transition:** “Before looking inside each layer, here is what I contributed.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Full data flow](index.html#s07/d1) — **Where does information travel?** Basler frames reach the Raspberry Pi over the access point and Wi-Fi; Python computes poses and commands; onboard serial drives the motor board.
- [Why two layers?](index.html#s07/d2) — **Why split planning and correction?** The static plan provides global direction; the local stage reacts to information that is only available during the run.
- [Nav2 analogy](index.html#s07/d3) — **Is this a Nav2 implementation?** No. The useful analogy is a planner supplying a reference to a controller. PACO does not use the Nav2 stack.
- [Alternatives](index.html#s07/d4) — **What would you compare against?** I would compare a reactive baseline, periodic replanning and a model-predictive controller under the same sensing and task protocol.

### 08 — My contribution

**Target:** 0:30 · **Main timeline:** 4:05–4:35 · [Open Overview](index.html#s08)

**Main message:** I connected methods, implementation and measured robot behavior.

**Talking points**

- **I implemented and integrated** the chain
- **I measured and diagnosed** the testbed
- **Mathis selected the coefficients**

**Main wording**

I turned the methods into an experimental chain: implementation, camera localization, command conversion, physical tests and analysis. I used published ideas and existing libraries. Mathis selected the coefficients. My focus was checking how the full system behaved once those pieces were connected.

**Visual pause — 3 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “First, let me explain how I built the nominal path.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [My implementation](index.html#s08/d1) — **Which parts do you mean by implementation?** I worked across the nominal solver, local-correction integration, vision-to-metric chain, command conversion and experimental analysis.
- [Mathis's role](index.html#s08/d2) — **Who selected the coefficients?** Mathis selected the coefficients. I do not claim that contribution.
- [Libraries](index.html#s08/d3) — **What did you reuse?** SciPy provides numerical optimization, NumPy supports numerical operations, and OpenCV supplies camera and ArUco tools.
- [Research references](index.html#s08/d4) — **Which ideas came from the literature?** Variational trajectory costs and artificial potential-field avoidance are established ideas. My evidence is in implementation and experimental validation.

### 09 — Why plan offline?

**Target:** 0:35 · **Main timeline:** 4:35–5:10 · [Open Overview](index.html#s09)

**Main message:** A nominal route gives the local corrector a useful global reference.

**Talking points**

- **Known geometry** before the run
- **Global reference** around fixed obstacles
- **Local correction** during execution

**Main wording**

The offline route gives the robot global direction through the known scene. The online stage follows a path that already accounts for fixed obstacles, while remaining free to deviate. A moving agent can still cross that path. The plan is a useful reference, with local optimization limits, rather than a solution to every disturbance.

**Visual pause — 2 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “The next question is what the optimizer actually minimizes.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Static scene](index.html#s09/d1) — **What is included in the nominal world?** Fixed obstacles, arena bounds and the start and goal are included; moving agents are excluded.
- [Nominal reference](index.html#s09/d2) — **Is the nominal trajectory a command?** It is a reference, not a direct wheel command. The online controller can deviate from it.
- [No-plan ablation](index.html#s09/d3) — **What if you remove the nominal plan?** The no-plan comparison attracts directly toward the goal. It tests what the local corrector can do by itself.
- [Replanning](index.html#s09/d4) — **Why not continually recompute the route?** That is a possible architecture, but it adds repeated optimization and needs a clear model of new information.

### 10 — What I optimized

**Target:** 0:50 · **Main timeline:** 5:10–6:00 · [Open Overview](index.html#s10)

**Main message:** I optimized interior trajectory points with a discrete cost and fixed endpoints.

**Talking points**

- **Variables:** 2(N − 1) interior coordinates
- **Cost:** motion + potential + smoothing
- **Speed / acceleration:** soft penalties

**Main wording**

I discretized the path into points over a fixed horizon. The first and last points stayed fixed, so the optimizer changed only the interior coordinates. The cost combines a kinetic term, the static-scene potential, a smoothing term, and penalties for speed and acceleration violations. The potential attracts toward the goal and discourages obstacles and walls. One important detail is the difference between a penalty and a hard constraint. A high cost discourages a violation; it doesn't make that violation impossible. I supplied an analytical gradient to the local optimizer and checked it against finite differences.

**Exact transition:** “The starting path also matters, because the optimization is local.”

**Optional hook:** One important detail is the difference between a penalty and a hard constraint.

**If asked — optional, outside the main presentation**

- [Variables](index.html#s10/d1) — **What exactly is the decision vector?** It contains x and y for each interior point: 2(N−1) scalar coordinates, with the endpoints reconstructed unchanged.
- [Cost terms](index.html#s10/d2) — **What is the discrete objective?** The midpoint action is combined with discrete smoothing and normalized violation penalties.
- [Soft vs hard](index.html#s10/d3) — **Did L-BFGS-B impose the speed bounds?** No. Speed and acceleration enter as penalties; the inspected minimize call does not pass explicit coordinate bounds either.
- [Analytical gradient](index.html#s10/d4) — **How did you verify the gradient?** The implementation supplies the gradient of the same discrete objective; centered finite differences provide a numerical reference.

### 11 — From candidate paths to a nominal route

**Target:** 0:45 · **Main timeline:** 6:00–6:45 · [Open Overview](index.html#s11)

**Main message:** I screen candidate shapes, then optimize the best retained warm start.

**Talking points**

- **Generate:** straight and sinusoidal shapes
- **Screen:** geometry and initial cost
- **Optimize:** one selected warm start

**Main wording**

I generated a straight path and sinusoidal deviations on either side. I checked the geometry and initial cost, then selected the best retained candidate as a warm start for L-BFGS-B. The inspected code runs one complete local optimization from that selected path. The starting shape matters because different sides of an obstacle can lead to different local solutions. I kept the selection diagnostics to understand the choice.

**Visual pause — 3 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “That led to a second numerical issue: the shape of the obstacle potential.”

**Optional hook:** The starting path mattered, because this optimizer finds a local solution.

**If asked — optional, outside the main presentation**

- [L-BFGS-B](index.html#s11/d1) — **What does L-BFGS-B do here?** It uses local gradient information and a limited-memory approximation of curvature to reduce the discrete cost.
- [Warm-start selection](index.html#s11/d2) — **Is this full multistart optimization?** The current code screens several initial candidates, picks the lowest-cost retained one, and optimizes that one.
- [Initial candidates](index.html#s11/d3) — **Are candidates rejected for obstacle penetration?** The draft and implementation retain finite obstacle costs; arena validity and candidate integrity are checked separately.
- [Stopping](index.html#s11/d4) — **What do you check after the solve?** I inspect the solver status, objective value, iteration counts, path geometry and constraint-related diagnostics.

### 12 — Making the offline problem usable

**Target:** 0:45 · **Main timeline:** 6:45–7:30 · [Open Overview](index.html#s12)

**Main message:** I replaced the earlier inverse-distance potential with a smooth compact potential.

**Talking points**

- **Issue:** singular / rough numerical behavior
- **Change:** compact polynomial potential
- **Check:** gradient continuity and route diagnostics

**Main wording**

The earlier inverse-distance potential created difficult numerical behavior near obstacles. I moved to a compact polynomial potential. With exponent three, its value, slope and curvature go to zero at the cutoff, giving the optimizer a smoother objective. I kept a finite obstacle-core treatment and checked the gradient and route diagnostics. This formulation change is documented, but I don't have an isolated convergence benchmark. I explain the numerical reason without claiming a measured speedup.

**Exact transition:** “Once the nominal route was available, I had to react during execution.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Earlier formulation](index.html#s12/d1) — **What was wrong with inverse distance?** Near-zero distance can create extreme gradients; a cutoff can also create poor smoothness if handled badly.
- [Evidence](index.html#s12/d2) — **What evidence supports the change?** The code retains both inverse-distance and compact-polynomial functions, and the draft explains why the smoother version was introduced.
- [Smooth cutoff](index.html#s12/d3) — **Why exponent three?** At d=R, the compact cubic in 1−(d/R)² has zero value, first derivative and second derivative.
- [Validation boundary](index.html#s12/d4) — **How would you measure the improvement?** I would rerun the same initial paths, scenes and stopping tolerances with both potentials and compare convergence and feasible routes.

### 13 — What the online corrector sees

**Target:** 0:40 · **Main timeline:** 7:30–8:10 · [Open Overview](index.html#s13)

**Main message:** Each update starts from measured robot state and current obstacle snapshots.

**Talking points**

- **Robot:** position, heading, estimated velocity
- **Reference:** a point ahead on the nominal
- **Agents:** current observed positions

**Main wording**

Each update starts from the robot position and heading measured by the camera. Velocity is estimated and filtered from observations. Moving obstacles arrive as current snapshots with freshness information. The corrector also gets a point ahead on the nominal. On hardware, this reference follows measured path progress, so it doesn't simply run away in time while the robot falls behind. No agent future is needed.

**Exact transition:** “Here is how those inputs become the correction force.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [State inputs](index.html#s13/d1) — **Which inputs are actually measured?** Position and marker yaw come from ArUco; velocity is estimated from successive observations.
- [Look-ahead](index.html#s13/d2) — **Is the reference purely time-based?** The simulation helper queries current time plus look-ahead; the physical controller uses monotonic path progress with time/space look-ahead.
- [Observation timing](index.html#s13/d3) — **Are observations instantaneous?** No. Frame reception, processing and command transmission introduce age and delay.
- [Filtering / memory](index.html#s13/d4) — **What happens to noisy or briefly missing observations?** The adapter filters observed velocity and can retain mobile snapshots for a bounded interval, with freshness recorded.

### 14 — How the correction is built

**Target:** 0:55 · **Main timeline:** 8:10–9:05 · [Open Overview](index.html#s14)

**Main message:** Attraction, three repulsions and damping combine before acceleration clipping.

**Talking points**

- **Attract** toward the nominal reference
- **Repel** agents, obstacles and walls
- **Damp** motion, then clip acceleration

**Main wording**

The correction has five contributions. Attraction pulls toward the look-ahead reference. Moving-agent repulsion reacts to the currently observed disturbance. Fixed-obstacle and boundary terms add local protection around the planned route. Damping opposes the estimated velocity. I sum these terms, divide by the model mass, and clip the acceleration. The repulsion uses edge-to-edge clearance, with a small numerical floor, and falls to zero at its influence limit. This is a soft force model. Strong repulsion can dominate attraction or keep the response saturated, so the force plot is useful for understanding poor progress. It is not a formal collision-avoidance proof.

**Exact transition:** “I'll show the order of operations for one update.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Attraction](index.html#s14/d1) — **What pulls the robot back toward the route?** A proportional force points from the measured position to the nominal look-ahead reference.
- [Agent repulsion](index.html#s14/d2) — **What is the mobile-repulsion law?** It points away from the agent and increases as the modeled clearance decreases.
- [Static / wall forces](index.html#s14/d3) — **Why keep static repulsion after planning?** The real robot may depart from the nominal, so local static and wall terms remain active during execution.
- [Damping](index.html#s14/d4) — **What does damping do?** It adds −c_d v, opposing the estimated current velocity and moderating motion.

### 15 — One control step

**Target:** 0:55 · **Main timeline:** 9:05–10:00 · [Open Overview](index.html#s15)

**Main message:** The physical experiment uses semi-implicit Euler, followed by real wheel-command conversion.

**Talking points**

- **Observe → force → a = F/m**
- **Clip acceleration, then velocity**
- **Update with the new velocity**

**Main wording**

The experimental corrector uses semi-implicit Euler. I compute the force from the current observation, divide by the model mass, and limit the acceleration norm. Then I update and limit the velocity. The position update uses that new velocity, which is the semi-implicit part. On hardware, that position is a one-step intention; I don't replace the next camera measurement with it. The physical controller reconciles its internal velocity with observed motion, then converts the request into heading and wheel commands. Velocity-Verlet and stiff repulsion are comparison variants in the study. I don't present them as three controllers deployed on the bench.

**Exact transition:** “The next distinction is what information this update is allowed to use.”

**Optional hook:** The order matters: acceleration is limited before the velocity update.

**If asked — optional, outside the main presentation**

- [Step by step](index.html#s15/d1) — **Can you walk through one update?** Yes: observe, choose the nominal reference, sum forces, divide by mass, clip, integrate, convert and transmit.
- [Integration scheme](index.html#s15/d2) — **Why call it semi-implicit Euler?** The velocity is updated before the position, and the position uses the updated velocity.
- [Saturation](index.html#s15/d3) — **Is each component independently clipped?** The state limiter clips vector norm; it preserves direction when reducing a vector to the maximum norm.
- [Code excerpt](index.html#s15/d4) — **Which lines implement the numerical update?** These lines update velocity first, clip its norm, and form the one-step position from the measured position.

### 16 — Causal does not mean blind

**Target:** 0:35 · **Main timeline:** 10:00–10:35 · [Open Overview](index.html#s16)

**Main message:** Looking ahead on my stored plan is different from knowing an agent’s true future.

**Talking points**

- **Known:** my stored reference path
- **Observed:** current agent positions
- **Unavailable:** true future agent motion

**Main wording**

Causal means the controller doesn't read an agent's true future position. Looking ahead on its own stored path is allowed: that plan is already known. The physical interface receives current obstacle snapshots. Prediction from past observations could also be causal, but it is different from reading a scenario's future. I keep that information boundary explicit.

**Exact transition:** “Even with that information boundary, a local controller can still fail.”

**Optional hook:** Looking ahead on my own path is different from knowing where another agent will go.

**If asked — optional, outside the main presentation**

- [Interfaces](index.html#s16/d1) — **How does the interface enforce the boundary?** The offline builder excludes agents, and the physical corrector accepts ObservedMobileObstacle snapshots.
- [Reference look-ahead](index.html#s16/d2) — **Why is reference look-ahead allowed?** The nominal is already known. Querying it at a later reference time does not reveal later world observations.
- [Future queries](index.html#s16/d3) — **Do simulations store agent trajectories?** The scenario generator can know trajectories for simulation and evaluation, but the controller must consume only the current state.
- [Testing separation](index.html#s16/d4) — **How would you test the information boundary?** Hold current observations fixed while changing the hidden future. The current command should remain unchanged.

### 17 — A safe run could still stall

**Target:** 0:40 · **Main timeline:** 10:35–11:15 · [Open Overview](index.html#s17)

**Main message:** An early physical adapter timed out with weak translation; later work addressed the force-to-motion chain.

**Talking points**

- **Observed:** correction active, little translation
- **Diagnosed:** inspect force → motion conversion
- **Improved:** explicit dynamics and wheel mapping

**Main wording**

An early physical trial had active repulsion and no collision, but translation stayed weak and the run timed out. A nonzero force wasn't enough. I inspected how that force became motion and wheel commands. The later chain used force over mass, velocity integration, a progress-based reference and a characterized drivetrain. Several settings evolved, so I don't attribute later success to one isolated fix.

**Exact transition:** “To explain that integration work, let me show the physical testbed.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Failure evidence](index.html#s17/d1) — **Was stalling an observed problem?** Yes. The July 14 report records active correction with weak translation and a controlled timeout, without collision.
- [Force vs motion](index.html#s17/d2) — **Why can strong forces still give poor progress?** Forces can oppose each other, remain clipped, or map poorly through heading and drivetrain constraints.
- [Safety stop](index.html#s17/d3) — **Did every safety option run during the final trials?** No. Stop options are configurable; a supported option must not be presented as always enabled.
- [MPC extension](index.html#s17/d4) — **Could MPC help?** Possibly. It would optimize a sequence over a receding horizon using a robot model, then apply the first action and repeat.

### 18 — Building the physical testbed

**Target:** 0:30 · **Main timeline:** 11:15–11:45 · [Open Overview](index.html#s18)

**Main message:** I integrated external vision, onboard computation and serial actuation into one measured loop.

**Talking points**

- **Basler** overhead camera
- **Raspberry Pi 5** on the rover
- **Serial** link to the motor board

**Main wording**

The overhead Basler camera observes the marked arena. Its stream reaches the rover's Raspberry Pi through an access point and Wi-Fi. The Pi runs vision and control, then sends wheel commands over onboard serial. This made the full chain visible and measurable.

**Visual pause — 2 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “The next challenge was converting a planar request into real wheel motion.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Hardware choices](index.html#s18/d1) — **Why this testbed?** It made repeated low-speed navigation experiments and external measurement possible with the available rover platforms.
- [Overhead vision](index.html#s18/d2) — **Why use an overhead camera?** It provided a common metric frame for the controlled robot, agents and obstacles in this indoor experiment.
- [Why not LiDAR?](index.html#s18/d3) — **Why did you not use LiDAR?** The chosen experiment needed shared external pose measurement. A LiDAR-based onboard system would be a different sensing and localization project.
- [Communication](index.html#s18/d4) — **What is the actual communication chain?** The run summaries record Basler GigE → access point → Wi-Fi → Raspberry Pi; wheel commands leave over onboard serial.

### 19 — From a planar command to wheel motion

**Target:** 0:45 · **Main timeline:** 11:45–12:30 · [Open Overview](index.html#s19)

**Main message:** I implemented heading and wheel conversion above the supplier’s motor execution.

**Talking points**

- **Desired velocity → heading error**
- **Translation + rotation → left / right**
- **Supplier firmware** executes motor inputs

**Main wording**

A planar velocity isn't a wheel command. I turn its direction into a desired heading and compare it with the measured forward direction. The controller chooses driving or pivoting, then combines translation and rotation into left and right commands. It rescales, limits and smooths the pair. Reverse is available with switching thresholds. I implemented this high-level conversion; supplier firmware executes the motor inputs. With no wheel encoders, feedback came from the camera.

**Exact transition:** “That made position accuracy a central part of the control problem.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Heading conversion](index.html#s19/d1) — **How do you get heading from velocity?** The desired heading is atan2(v_y,v_x); the error is wrapped relative to measured robot-forward yaw.
- [Wheel mapping](index.html#s19/d2) — **How are wheel commands formed?** The nominal pair is linear minus angular on the left, and linear plus angular on the right, followed by joint rescaling, floors and smoothing.
- [Reverse motion](index.html#s19/d3) — **What does reverse change?** When the heading error crosses an entry threshold, the controller reverses the drive sign and reflects the desired heading by π.
- [Provided firmware](index.html#s19/d4) — **Was the low-level control a black box?** The supplier source is available. It contains multiple motor paths; the no-encoder rover uses external camera feedback rather than wheel-level feedback in this experiment.

### 20 — Diagnosing position error

**Target:** 0:50 · **Main timeline:** 12:30–13:20 · [Open Overview](index.html#s20)

**Main message:** Lens distortion and raised-marker parallax produced two different measured errors.

**Talking points**

- **Ground:** 36.3 → 5.8 mm · ~84%
- **Raised marker:** 60.8 → 11.6 mm · ~81%
- **Different causes. Different protocols.**

**Main wording**

I found two position-error problems. First, lens distortion remained after homography. I calibrated the intrinsics and recomputed the mapping. Across nine ground positions, mean error fell from 36.3 to 5.8 millimeters. Second, the raised rover marker caused parallax because it was above the ground plane. After height correction, mean error fell from 60.8 to 11.6 millimeters across five rover positions. These are separate measurements. The residual error still matters when interpreting small clearances.

**Visual pause — 3 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “Position accuracy was one part of the problem. I also had to keep the loop fast enough.”

**Optional hook:** Calibration and marker height caused two different errors.

**If asked — optional, outside the main presentation**

- [Intrinsics](index.html#s20/d1) — **What did intrinsic calibration change?** It estimated camera parameters and lens distortion from twenty valid calibration-board views before metric mapping.
- [Homography](index.html#s20/d2) — **Why recompute the homography?** The homography must map the distortion-corrected image coordinates to the ground plane.
- [Parallax geometry](index.html#s20/d3) — **How did marker height cause error?** A raised marker projects along a camera ray to the wrong point on the ground mapping. I applied radial height correction about the principal point.
- [Measurement protocol](index.html#s20/d4) — **Are the two percentage reductions comparable?** They are separate within-protocol improvements, not two estimates of the same final accuracy.

### 21 — Finding the real-time bottleneck

**Target:** 0:45 · **Main timeline:** 13:20–14:05 · [Open Overview](index.html#s21)

**Main message:** Vision dominated the measured loop budget; the correction itself was small.

**Talking points**

- **Vision:** 32.94 ms · detection 29.07 ms
- **Serial:** 8.43 ms
- **Corrector:** 0.72 ms

**Main wording**

I profiled the whole loop. In the single-agent block, vision averaged about 33 milliseconds, including 29 for detection. Serial took about 8.4 milliseconds; correction took 0.72. Perception was the bottleneck. I tried downscaling before detection. The sessions showed faster processing, but scenarios and agent behavior also differed, so this wasn't an isolated causal test. And a near-20 Hz rate does not establish 50-millisecond sensor-to-action latency.

**Visual pause — 3 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “Once the full chain was running, I tested how repeatable the behavior was.”

**Optional hook:** The bottleneck was perception, rather than the correction itself.

**If asked — optional, outside the main presentation**

- [Timing breakdown](index.html#s21/d1) — **Can those numbers be added together?** Only the top-level categories should be added. Marker detection is already inside vision.
- [Detection resolution](index.html#s21/d2) — **What did the resolution comparison show?** Full-resolution and downscaled sessions had different detection times; the comparison is descriptive because scenes and sessions also differed.
- [Serial cost](index.html#s21/d3) — **Why does serial transmission matter?** It takes about 8.43 ms in the measured iteration, close to 17% of the 50 ms target period.
- [Age / latency](index.html#s21/d4) — **Does 20 Hz mean 50 ms latency?** No. Frame age, processing time, transport, and command emission are different quantities.

### 22 — Testing repeatability on real robots

**Target:** 0:55 · **Main timeline:** 14:05–15:00 · [Open Overview](index.html#s22)

**Main message:** Forty successful physical outcomes cover two frozen tasks, not forty different environments.

**Talking points**

- **40/40** goal arrivals · no observed contact
- **1–2** independent moving agents
- **6.3 cm** minimum agent clearance

**Main wording**

Here is a short physical example. One rover is controlled, and the other robots provide independent disturbances.

**Playback audio:** Muted clip.

**Video / silence — 10 seconds included (10 s clip + 0 s visual pause):** Click Play on the visible clip. Show `assets/videos/avoidance.mp4`, 00–10 s. Stay quiet while it plays; the player stops at the set end. Use any additional visual-pause seconds to let the audience inspect the final frame. If playback fails, use the poster for the same 10 seconds and point out the task. Do not silently remove this time from the main budget.

**Continue after the clip:**

Across two frozen task blocks, all forty runs reached the goal, with no observed contact or negative modeled clearance. Minimum agent clearance was 6.3 centimeters; median loop rates were close to 20 Hz. One run used a different obstacle layout. It remains in the forty outcomes, but not in comparable-layout aggregates. These measurements cover a limited testbed.

**Exact transition:** “Those results also show where the validation stops.”

**Optional hook:** I also looked at how the behavior changed between repeated runs.

**If asked — optional, outside the main presentation**

- [Test protocol](index.html#s22/d1) — **What exactly does 40/40 cover?** Twenty runs of one frozen task and twenty of another, using the same physical coefficient set on one day.
- [All trajectories](index.html#s22/d2) — **Can we see repeated trajectories?** Yes. These original figures show measured trajectories and clearance histories from the campaign.
- [Clearances](index.html#s22/d3) — **How was 6.3 cm computed?** It is the lowest logged moving-agent edge-to-edge clearance over the physical run summaries.
- [Repeatability statistics](index.html#s22/d4) — **Why do some tables use 39 trials?** One B BIS run retained the preceding obstacle layout. It succeeded, but does not belong in the same-layout repeatability aggregate.

### 23 — Results, limits, and what I learned

**Target:** 0:45 · **Main timeline:** 15:00–15:45 · [Open Overview](index.html#s23)

**Main message:** The strongest evidence is the complete measured chain; the tested domain remains narrow.

**Talking points**

- **Measured:** localization and repeated arrivals
- **Diagnosed:** planning, sensing and command limits
- **Remaining:** broader tasks and physical models

**Main wording**

This work taught me to test the whole chain. I improved localization, profiled timing, and measured repeated physical behavior. Simulation didn't directly describe the robot: heading constraints, actuation and delay changed the motion. Forty successful outcomes don't erase earlier stalls or marker-loss stops; they describe the selected tasks and settings. The transferable process is to inspect a failure, change a specific part, and measure again with a clear protocol.

**Exact transition:** “My FANUC project gave me another view of robotics: starting from an industrial task.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Simulation study](index.html#s23/d1) — **Can we compare simulation success with 40/40?** No. The twelve architecture combinations use a separate simulated scenario bank and tuning protocol.
- [Sim-to-real gap](index.html#s23/d2) — **What explains the difference between simulated and real paths?** Nonholonomic motion, imperfect command response, asymmetry, sensing delay and possible planning differences all contribute.
- [Failure taxonomy](index.html#s23/d3) — **Which failures are worth separating?** I separate goal misses, unsafe modeled clearance, perception stops and execution errors.
- [Remaining limits](index.html#s23/d4) — **What would you validate next?** More layouts, more varied disturbances, a better drivetrain model, and a paired perception benchmark.

### 24 — FANUC: start from the industrial task

**Target:** 0:35 · **Main timeline:** 15:45–16:20 · [Open Overview](index.html#s24)

**Main message:** I turned an observed manual pouring operation into an automation concept.

**Talking points**

- **Observed:** manual crucible handling
- **Task:** transport, position, pour
- **Deliverable:** cell concept and simulation

**Main wording**

After a foundry lab, I wanted to explore automating manual crucible handling and pouring. I broke the task into transport, positioning, pouring and return. Then I considered the robot, gripper, layout and sequence together. The result was an academic design and ROBOGUIDE simulation. Physical and industrial validation were still ahead.

**Visual pause — 4 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “The task requirements drove the robot and gripper choices.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Actual operation](index.html#s24/d1) — **What did the real task involve?** The observed lab operation involved manually moving and pouring molten alloy from a crucible into a mold.
- [Automation assumptions](index.html#s24/d2) — **Which assumptions shaped the concept?** Handling, reach, wrist load, grip opening, heat exposure and synchronization drove the study.
- [My role](index.html#s24/d3) — **What did you personally do?** I worked on the task concept, robot/tool choices and simulation. The financial analysis was done by another student.
- [Feasibility](index.html#s24/d4) — **What does feasibility mean at this stage?** It means checking whether the chosen robot, tool and layout can support the intended sequence in simulation.

### 25 — Choosing the robot and gripper

**Target:** 0:40 · **Main timeline:** 16:20–17:00 · [Open Overview](index.html#s25)

**Main message:** The tool and robot must be selected around the complete handled load and geometry.

**Talking points**

- **Robot:** FANUC M-20iD/25 selected
- **Gripper:** opening, force and heat exposure
- **Layout:** reachable approach and pouring poses

**Main wording**

I selected the FANUC M-20iD/25 in the study, considering work envelope and wrist load. The load includes the tool, crucible and alloy. For the gripper, I considered opening, contact geometry, force and heat exposure. Before a final selection, I'd check wrist moments, thermal exposure and the loaded grip physically. The useful work here was linking the robot, tool and task geometry in one modeled cell.

**Visual pause — 3 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “I then checked that integration through the simulated sequence.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Payload / reach](index.html#s25/d1) — **How would you justify the robot choice?** Use the full wrist load, center of mass, inertia and reachable task poses, then check the manufacturer’s load diagram.
- [Gripper geometry](index.html#s25/d2) — **How did you reason about the grip?** I considered opposed contacts around the crucible and a simplified static friction model to relate normal force to the load.
- [Cell layout](index.html#s25/d3) — **What did the layout need to accommodate?** Two furnace stations, the robot, conveyor, crucible table and protective boundaries.
- [Trade-offs](index.html#s25/d4) — **Why not choose the largest robot or strongest gripper?** Capacity has to match geometry, wrist loading, thermal conditions and integration constraints.

### 26 — Simulating the cell in ROBOGUIDE

**Target:** 0:40 · **Main timeline:** 17:00–17:40 · [Open Overview](index.html#s26)

**Main message:** The simulation made the sequence and geometric integration visible.

**Talking points**

- **Approach → grip → transport → pour**
- **Check:** poses and cell clearance
- **Programming:** adapted from a supplied template

**Main wording**

I modeled approach, gripping, transport and pouring. I adapted a teacher-provided programming template to this task. This excerpt shows the modeled cell and sequence. It helped check geometry and motion order, while fluid behavior and production performance still needed validation.

**Playback audio:** Muted clip.

**Video / silence — 13 seconds included (10 s clip + 3 s visual pause):** Click Play on the visible clip. Show `assets/videos/fanuc.mp4`, 00–10 s. Stay quiet while it plays; the player stops at the set end. Use any additional visual-pause seconds to let the audience inspect the final frame. If playback fails, use the poster for the same 13 seconds and point out the task. Do not silently remove this time from the main budget.

**Exact transition:** “That leaves a clear set of checks before any physical cell.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Cycle sequence](index.html#s26/d1) — **What sequence did you model?** Approach, descend, grip, transport, position, pour, and return or set down.
- [Paths / reachability](index.html#s26/d2) — **What could the simulation check?** It could show task poses, relative equipment placement, motion order and modeled geometric clearance.
- [Template adaptation](index.html#s26/d3) — **How much programming was original?** My notes recall a teacher-provided template that I reused and adapted to make this task sequence work.
- [Simulation evidence](index.html#s26/d4) — **What artifacts remain?** The report, presentation, original images and videos document the modeled cell and sequence.

### 27 — What the simulation could not prove

**Target:** 0:35 · **Main timeline:** 17:40–18:15 · [Open Overview](index.html#s27)

**Main message:** Heat, gripping, fluid behavior and repeated physical execution remain to be validated.

**Talking points**

- **Grip:** slip and heat exposure
- **Process:** pouring and synchronization
- **Execution:** repeated cycles and recovery

**Main wording**

Before a physical cell, I'd test the loaded grip, thermal protection, pouring and conveyor synchronization, then repeated cycles and recovery. The study's cycle time was estimated. I don't claim an installed cell or verified ROI; another student did the financial analysis. I learned to make the remaining validation explicit.

**Visual pause — 3 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “I'm now moving toward manipulation and robot learning through my G1 project.”

**Optional hook:** The simulation helped me check the concept, but several points still needed physical testing.

**If asked — optional, outside the main presentation**

- [Physical validation](index.html#s27/d1) — **What would you test first?** Start with safe handling tests using a representative cold load, then validate process-specific conditions under appropriate supervision.
- [Safety assumptions](index.html#s27/d2) — **Do barriers in the model prove a safe cell?** No. They show a layout intention; the installed system would require its own risk assessment and validated protective functions.
- [Cycle-time limits](index.html#s27/d3) — **Why not use the claimed productivity gain?** The report estimates a cycle but no timing export or comparable production trial was recovered.
- [Economic study](index.html#s27/d4) — **Did you do the financial analysis?** No, another student did that part. I can explain the robot and cell concept, but I don't have a verified ROI to claim.

### 28 — Unitree G1: my current direction

**Target:** 0:45 · **Main timeline:** 18:15–19:00 · [Open Overview](index.html#s28)

**Main message:** My current project is at the reading and preparation stage, with manipulation as the goal.

**Talking points**

- **Done:** literature and project framing
- **In progress:** task and interface preparation
- **Next:** demonstrations and evaluation

**Main wording**

My current master's project targets assistive manipulation with the G1, supervised by Professor Olivier Bruneau. I'm reading papers, understanding policies, and preparing the work. The proposal covers demonstrations, data, adaptation and robot evaluation. I don't yet have a trained policy or measured result. My priority is choosing a manageable task, confirming the interfaces and access, and defining the test. I want to make the experiment concrete before interpreting results.

**Visual pause — 2 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “The intended pipeline is simple to draw, but each interface needs work.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Actual status](index.html#s28/d1) — **What have you done on the G1?** I'm reading papers, framing the task, and preparing the pipeline. I don't yet have a trained policy or a measured G1 result to show.
- [Hardware setup](index.html#s28/d2) — **Is the G1 setup ready?** I'm targeting the G1. I still need to establish the practical teleoperation route and robot-control interface.
- [Before the internship](index.html#s28/d3) — **How could this prepare you for Binabik?** I want to gain practical experience in demonstration data, robot interfaces and evaluation before the internship.
- [Academic scope](index.html#s28/d4) — **What is the project organization?** The proposal plans a team of four to five students with overlapping setup, learning and evaluation phases.

### 29 — Learning manipulation from demonstrations

**Target:** 0:45 · **Main timeline:** 19:00–19:45 · [Open Overview](index.html#s29)

**Main message:** I want to connect demonstration quality, policy adaptation and measured robot behavior.

**Talking points**

- **Demonstrations → dataset → adaptation → evaluation**
- **Candidate model:** OpenPI / π₀ family
- **Transfer:** methods and skills, with robot-specific work

**Main wording**

I plan to collect demonstrations, prepare a dataset, adapt a policy and evaluate it. OpenPI and the pi-zero family are candidate foundations. A towel-folding task has been discussed; the final choice must fit the robot and evaluation setup. I'd record success, failures, interventions and timing. Those skills can transfer to industry. A policy doesn't automatically transfer between robots: observations, actions, geometry and low-level control still have to match.

**Visual pause — 4 seconds included:** Let the audience look at the visual before continuing.

**Exact transition:** “These are the engineering habits I would bring to Binabik.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Demonstration pipeline](index.html#s29/d1) — **What must a demonstration contain?** Synchronized observations, robot state, actions, task instruction and clear episode boundaries.
- [Policy adaptation](index.html#s29/d2) — **Have you fine-tuned OpenPI?** No. It is the candidate adaptation route, with robot-specific data and interfaces still to establish.
- [Evaluation protocol](index.html#s29/d3) — **How would you avoid judging one good demo?** Use a fixed task definition, repeated trials, held-out object configurations, and explicit failure and intervention logging.
- [Transfer between robots](index.html#s29/d4) — **What transfers to another robot?** Data discipline, integration methods and evaluation habits transfer. A policy needs compatibility work and fresh validation on the new platform.

### 30 — How I could contribute at Binabik

**Target:** 0:35 · **Main timeline:** 19:45–20:20 · [Open Overview](index.html#s30)

**Main message:** I can bring integration and experimental diagnosis while building manipulation expertise.

**Talking points**

- **Integration:** connect sensors, software and hardware
- **Experiments:** measure and diagnose failures
- **Task evaluation:** test repeatability and limits

**Main wording**

I'd bring practical integration and experimental diagnosis. Singapore shows sensing, decisions and commands connected through measurements. FANUC shows task-based robot and tool reasoning. I heard your concerns about compliant manipulation and consistent success in factories. I still need hands-on depth there, and I'd like to build it while contributing to integration, testing and task evaluation.

**Exact transition:** “That's the kind of challenge I'd like to take on with your team.”

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [First weeks](index.html#s30/d1) — **What could you do in your first weeks?** Understand one task, reproduce the current setup, agree on success criteria, and help instrument repeatable tests.
- [Integration / testing](index.html#s30/d2) — **What is your strongest evidence for that?** The rover chain combines external vision, command conversion, timing instrumentation and repeated physical trials.
- [Learning needs](index.html#s30/d3) — **What do you still need to learn?** I need hands-on experience in compliant manipulation, task-specific grasping and reliable execution on the team’s platforms.
- [Project alignment](index.html#s30/d4) — **Could you align the G1 project with our priorities?** I could discuss a focused, useful direction with my supervisor, subject to the academic scope and available equipment.

### 31 — Ready for the challenge

**Target:** 0:25 · **Main timeline:** 20:20–20:45 · [Open Overview](index.html#s31)

**Main message:** I want to bring this energy and engineering approach to a six-month internship.

**Talking points**

- **Build** something useful
- **Learn** from difficult problems
- **Measure** the result

**Main wording**

I'd really like to bring that energy to your team: take responsibility for a concrete problem, learn the missing pieces, and keep testing until I understand what works. Give me a challenging goal for these six months, and I'll do everything I can to achieve it — and hopefully exceed your expectations.

**Closing:** Stop after the final sentence. Keep slide 31 visible and let the discussion begin. No extra transition.

**Optional hook:** None needed. Continue without waiting for a question.

**If asked — optional, outside the main presentation**

- [Six months](index.html#s31/d1) — **What availability are you proposing?** I am proposing a six-month internship starting in February 2027, as discussed in the first interview.
- [Questions for the team](index.html#s31/d2) — **What would you like to understand next?** I would like to understand the concrete task, the main current failure mode, and how the team measures progress.

## Internal views — prepared optional answers

Open these only for questions. The short answer is enough for a brief response; use the reasoning and visual when more depth is useful. All views preserve the parent slide title, ID, counter and progress.

### 01/d2 — My background

[Open this view](index.html#s01/d2) · **Personal background**

**Likely question:** What prepared you for this work?

**Short answer:** My preparatory classes gave me a strong scientific foundation through intensive math, physics, and engineering science. At Arts et Métiers, I learned how industrial processes work and what constraints matter in practice. That helped me recognize opportunities for automation, like the pouring task in my FANUC project. I also built foundations in mechanics, modeling, and control. I then joined a research master's program at Sorbonne Université to strengthen the foundations of robotics.

**Open the detail:** “Let me show the my background detail.”

**Reasoning**

- Preparatory classes: a strong foundation in math, physics, and engineering science.
- Arts et Métiers: industrial processes and constraints, automation opportunities, and foundations in mechanics, modeling, and control.
- Sorbonne Université: a research master to strengthen the foundations of robotics.

- **Preparatory classes — Strong scientific foundation**: Intensive math, physics & engineering science
- **Arts et Métiers — Industrial & mechanical engineering**: Industrial processes & constraints; Automation & control fundamentals
- **Sorbonne Université — Research master in robotics**: Strengthening the foundations of robotics

**Return to the main thread:** “I'll focus on the completed experimental work now.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 02/d1 — Why these projects?

[Open this view](index.html#s02/d1) · **Project evidence**

**Likely question:** Why did you choose these examples?

**Short answer:** They show three useful parts of my experience: physical integration, task feasibility, and learning a new robotics field.

**Open the detail:** “Let me show the why these projects? detail.”

**Reasoning**

- Singapore provides the strongest measured evidence.
- FANUC connects robot choices to a physical process.


| Question | Example |
| --- | --- |
| Can I integrate and diagnose? | Singapore |
| Can I frame an industrial task? | FANUC |
| What am I learning now? | G1 |

**Return to the main thread:** “Singapore is the main technical example, so I'll return to it.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 03/d1 — Research context

[Open this view](index.html#s03/d1) · **Project evidence**

**Likely question:** How does this relate to drones?

**Short answer:** The research motivation concerned drone trajectory planning, while the reported physical experiments use ground rovers.

**Open the detail:** “Let me show the research context detail.”

**Reasoning**

- The mathematical study is planar here.
- I do not treat rover trials as flight validation.


| Motivation | Physical evidence |
| --- | --- |
| Drone collision avoidance | 2D ground rover |
| Planning research | External-camera testbed |

**Return to the main thread:** “The physical evidence here is the ground-rover testbed.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 03/d2 — Ground-robot scope

[Open this view](index.html#s03/d2) · **Project evidence**

**Likely question:** What was physically validated?

**Short answer:** One controlled rover moved among one or two independently driven physical agents in a bounded indoor arena.

**Open the detail:** “Let me show the ground-robot scope detail.”

**Reasoning**

- The camera supplies external localization.
- This is not onboard perception or SLAM.

Media: `assets/images/arena.jpg` — Original test arena

**Return to the main thread:** “The physical evidence here is the ground-rover testbed.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 03/d3 — Initial knowledge

[Open this view](index.html#s03/d3) · **Personal experience**

**Likely question:** What did you have to learn?

**Short answer:** I learned the planning and local-correction methods from papers, then connected them to experiments.

**Open the detail:** “Let me show the initial knowledge detail.”

**Reasoning**

- My math and mechanics foundations helped.
- I had to check implementation details rather than stop at equations.

Diagram: Read the method → Implement it → Test behavior

**Return to the main thread:** “The physical evidence here is the ground-rover testbed.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 03/d4 — Learning from papers

[Open this view](index.html#s03/d4) · **Implementation approach**

**Likely question:** How did you turn papers into code?

**Short answer:** I separated the model, numerical choices, interfaces and measurable outcomes.

**Open the detail:** “Let me show the learning from papers detail.”

**Reasoning**

- I checked variables, units and endpoint conditions.
- I used small examples and gradient checks before interpreting full results.


| Paper idea | Implementation check |
| --- | --- |
| Action functional | Discrete cost |
| Potential field | Force terms |
| Numerical method | Gradient / step update |

**Return to the main thread:** “The physical evidence here is the ground-rover testbed.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 06/d1 — Perception radius

[Open this view](index.html#s06/d1) · **Project evidence**

**Likely question:** What does the 0.60 m radius mean?

**Short answer:** In the physical adapter, moving-agent influence is limited using edge-to-edge clearance of 0.60 m.

**Open the detail:** “Let me show the perception radius detail.”

**Reasoning**

- The camera can see more than the corrector uses.
- A global sensor does not make the decision rule nonlocal.

Equation: d = ‖x − c‖ − r_agent − r_robot
F_mobile = 0 when d ≥ 0.60 m

**Return to the main thread:** “Those limits belong to different stages of the chain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 06/d2 — Speed / acceleration

[Open this view](index.html#s06/d2) · **Project evidence**

**Likely question:** Why are offline and online numbers different?

**Short answer:** The draft uses 0.35 m/s and 0.8 m/s² as offline penalty thresholds, and 0.25 m/s and 1.0 m/s² for online clipping.

**Open the detail:** “Let me show the speed / acceleration detail.”

**Reasoning**

- They belong to different stages.
- A penalty threshold is not a hard bound.


| Stage | Speed | Acceleration |
| --- | --- | --- |
| Offline penalties | 0.35 m/s | 0.8 m/s² |
| Online state clipping | 0.25 m/s | 1.0 m/s² |

**Return to the main thread:** “Those limits belong to different stages of the chain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 06/d3 — Hardware limits

[Open this view](index.html#s06/d3) · **Project evidence**

**Likely question:** Were those physical bounds verified for all motion?

**Short answer:** No. I verified the command logic and measured the drivetrain, but did not establish a universal physical envelope.

**Open the detail:** “Let me show the hardware limits detail.”

**Reasoning**

- The command-to-motion response is imperfect.
- Wheel commands, modeled velocity and observed velocity are distinct.

Media: `assets/images/motor-identification.png` — Open-loop drivetrain measurements

**Return to the main thread:** “Those limits belong to different stages of the chain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 06/d4 — Assumptions

[Open this view](index.html#s06/d4) · **Project evidence**

**Likely question:** What assumptions matter most?

**Short answer:** The testbed is planar, externally localized, relatively slow, and uses marked obstacles and robots.

**Open the detail:** “Let me show the assumptions detail.”

**Reasoning**

- Marker visibility and calibrated geometry matter.
- The campaign covers a small set of repeatable tasks.


| Assumption | Consequence |
| --- | --- |
| Overhead markers | Visibility required |
| Planar arena | No 3D validation |
| Low speed | Limited dynamic scope |

**Return to the main thread:** “Those limits belong to different stages of the chain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 07/d1 — Full data flow

[Open this view](index.html#s07/d1) · **Project evidence**

**Likely question:** Where does information travel?

**Short answer:** Basler frames reach the Raspberry Pi over the access point and Wi-Fi; Python computes poses and commands; onboard serial drives the motor board.

**Open the detail:** “Let me show the full data flow detail.”

**Reasoning**

- The camera is external; computation is carried on the controlled rover.
- Agents use their own independent command link.

Diagram: Basler → AP → Wi-Fi → Raspberry Pi: pose + control → USB serial → motor board

**Return to the main thread:** “The key is how the offline and online layers work together.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 07/d2 — Why two layers?

[Open this view](index.html#s07/d2) · **Project evidence**

**Likely question:** Why split planning and correction?

**Short answer:** The static plan provides global direction; the local stage reacts to information that is only available during the run.

**Open the detail:** “Let me show the why two layers? detail.”

**Reasoning**

- The offline solution cannot include unknown true future motion.
- The local method is fast but can still stall.


| Offline plan | Online correction |
| --- | --- |
| Known static scene | Current observed scene |
| Global direction | Immediate reaction |
| Local optimum | No global safety guarantee |

**Return to the main thread:** “The key is how the offline and online layers work together.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 07/d3 — Nav2 analogy

[Open this view](index.html#s07/d3) · **Conceptual comparison**

**Likely question:** Is this a Nav2 implementation?

**Short answer:** No. The useful analogy is a planner supplying a reference to a controller. PACO does not use the Nav2 stack.

**Open the detail:** “Let me show the nav2 analogy detail.”

**Reasoning**

- Nav2 has planner/controller servers and broader navigation infrastructure.
- The analogy explains responsibilities, not software equivalence.


| Role | PACO | Nav2 analogy |
| --- | --- | --- |
| Plan | Offline nominal | Planner |
| Follow / react | Local corrector | Controller |
| Integration | Custom Python loop | ROS 2 servers |

**Return to the main thread:** “The key is how the offline and online layers work together.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 07/d4 — Alternatives

[Open this view](index.html#s07/d4) · **Proposed comparison**

**Likely question:** What would you compare against?

**Short answer:** I would compare a reactive baseline, periodic replanning and a model-predictive controller under the same sensing and task protocol.

**Open the detail:** “Let me show the alternatives detail.”

**Reasoning**

- Use shared success and clearance definitions.
- Measure computation and model mismatch too.


| Option | Potential benefit | Cost / risk |
| --- | --- | --- |
| Reactive only | No offline solve | Local traps |
| Replanning | Update route | Repeated solve |
| MPC | Explicit prediction / limits | Model + solve budget |

**Return to the main thread:** “The key is how the offline and online layers work together.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 08/d1 — My implementation

[Open this view](index.html#s08/d1) · **Project evidence**

**Likely question:** Which parts do you mean by implementation?

**Short answer:** I worked across the nominal solver, local-correction integration, vision-to-metric chain, command conversion and experimental analysis.

**Open the detail:** “Let me show the my implementation detail.”

**Reasoning**

- I can trace each block from its inputs to the logged outputs.
- I can explain the interfaces and verification for each block.

Diagram: Planning code → Physical adapter → Experimental analysis

**Return to the main thread:** “My focus is the implementation and experimental chain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 08/d2 — Mathis's role

[Open this view](index.html#s08/d2) · **Project evidence**

**Likely question:** Who selected the coefficients?

**Short answer:** Mathis selected the coefficients. I do not claim that contribution.

**Open the detail:** “Let me show the mathis's role detail.”

**Reasoning**

- The simulation tuning profiles and physical override are distinct.
- A run records its actual coefficient set.


| Contribution | Attribution |
| --- | --- |
| Coefficient selection | Mathis |
| Theory / algorithms | Published methods |
| Implementation / experiments | My implementation and experiments |

**Return to the main thread:** “My focus is the implementation and experimental chain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 08/d3 — Libraries

[Open this view](index.html#s08/d3) · **Project evidence**

**Likely question:** What did you reuse?

**Short answer:** SciPy provides numerical optimization, NumPy supports numerical operations, and OpenCV supplies camera and ArUco tools.

**Open the detail:** “Let me show the libraries detail.”

**Reasoning**

- I configured, connected and tested these components.
- Using a solver is different from inventing its algorithm.


| Component | Role |
| --- | --- |
| SciPy | Local optimization |
| NumPy | Numerical arrays |
| OpenCV | Calibration / marker processing |
| Supplier firmware | Motor-board execution |

**Return to the main thread:** “My focus is the implementation and experimental chain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 08/d4 — Research references

[Open this view](index.html#s08/d4) · **Method attribution**

**Likely question:** Which ideas came from the literature?

**Short answer:** Variational trajectory costs and artificial potential-field avoidance are established ideas. My evidence is in implementation and experimental validation.

**Open the detail:** “Let me show the research references detail.”

**Reasoning**

- The draft cites the underlying methods.
- I do not claim sole invention of these theories.


| Idea | Project use |
| --- | --- |
| Variational cost | Nominal path |
| Potential fields | Local correction |
| Quasi-Newton optimization | Numerical solve |

**Return to the main thread:** “My focus is the implementation and experimental chain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 09/d1 — Static scene

[Open this view](index.html#s09/d1) · **Project evidence**

**Likely question:** What is included in the nominal world?

**Short answer:** Fixed obstacles, arena bounds and the start and goal are included; moving agents are excluded.

**Open the detail:** “Let me show the static scene detail.”

**Reasoning**

- The dedicated builder returns an empty agents list.
- This prevents future agent trajectories from entering the plan.

Code:
```text
return World(
    xlim=tuple(env.xlim),
    ylim=tuple(env.ylim),
    obstacles=list(static_obstacles),
    agents=[],
    ...
)
```

**Return to the main thread:** “The nominal gives the local controller a useful reference.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 09/d2 — Nominal reference

[Open this view](index.html#s09/d2) · **Project evidence**

**Likely question:** Is the nominal trajectory a command?

**Short answer:** It is a reference, not a direct wheel command. The online controller can deviate from it.

**Open the detail:** “Let me show the nominal reference detail.”

**Reasoning**

- In simulation, time look-ahead evaluates the stored trajectory.
- The physical runner synchronizes the reference to path progress.


| Reference | Physical execution |
| --- | --- |
| Stored nominal path | Measured robot pose |
| Look-ahead point | Corrected velocity |
| No wheel dynamics | Wheel conversion required |

**Return to the main thread:** “The nominal gives the local controller a useful reference.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 09/d3 — No-plan ablation

[Open this view](index.html#s09/d3) · **Project evidence**

**Likely question:** What if you remove the nominal plan?

**Short answer:** The no-plan comparison attracts directly toward the goal. It tests what the local corrector can do by itself.

**Open the detail:** “Let me show the no-plan ablation detail.”

**Reasoning**

- It is a simulation ablation.
- Safe stalling must be counted separately from success.

Equation: With plan: F_att = k_a (x_ref − x)
No plan: F_att = k_a (x_goal − x)

**Return to the main thread:** “The nominal gives the local controller a useful reference.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 09/d4 — Replanning

[Open this view](index.html#s09/d4) · **Proposed extension**

**Likely question:** Why not continually recompute the route?

**Short answer:** That is a possible architecture, but it adds repeated optimization and needs a clear model of new information.

**Open the detail:** “Let me show the replanning detail.”

**Reasoning**

- It could help with persistent blockage.
- I would compare it with the same sensing delay and goals.

Diagram: Observe updated scene → Replan if needed → Execute and recheck

**Return to the main thread:** “The nominal gives the local controller a useful reference.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 10/d1 — Variables

[Open this view](index.html#s10/d1) · **Project evidence**

**Likely question:** What exactly is the decision vector?

**Short answer:** It contains x and y for each interior point: 2(N−1) scalar coordinates, with the endpoints reconstructed unchanged.

**Open the detail:** “Let me show the variables detail.”

**Reasoning**

- N intervals create N+1 points.
- For N=30, there are 58 decision variables.

Equation: z = [x₁, y₁, …, xₙ₋₁, yₙ₋₁]
x₀ = start, xₙ = goal
N = 30 → dim(z) = 58

**Return to the main thread:** “The cost discourages violations; it does not guarantee feasibility.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 10/d2 — Cost terms

[Open this view](index.html#s10/d2) · **Project evidence**

**Likely question:** What is the discrete objective?

**Short answer:** The midpoint action is combined with discrete smoothing and normalized violation penalties.

**Open the detail:** “Let me show the cost terms detail.”

**Reasoning**

- The kinetic weight is a numerical path weight, not robot mass.
- The potential enters with a positive sign in this cost.

Equation: J_h = Σ Δt [ α/2 ‖(xₖ₊₁−xₖ)/Δt‖²
                  + V((xₖ₊₁+xₖ)/2) ]
        + λ_s J_s + J_v + J_a

**Return to the main thread:** “The cost discourages violations; it does not guarantee feasibility.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 10/d3 — Soft vs hard

[Open this view](index.html#s10/d3) · **Project evidence**

**Likely question:** Did L-BFGS-B impose the speed bounds?

**Short answer:** No. Speed and acceleration enter as penalties; the inspected minimize call does not pass explicit coordinate bounds either.

**Open the detail:** “Let me show the soft vs hard detail.”

**Reasoning**

- The method can support bounds, but the method name does not prove they were used.
- Online norm clipping belongs to another stage.


| Mechanism | What is enforced? |
| --- | --- |
| Fixed endpoints | By reconstruction |
| Offline J_v / J_a | Penalized violations |
| L-BFGS-B call | No explicit bounds passed |
| Online clip | Internal vector norm limit |

**Return to the main thread:** “The cost discourages violations; it does not guarantee feasibility.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 10/d4 — Analytical gradient

[Open this view](index.html#s10/d4) · **Implementation verification**

**Likely question:** How did you verify the gradient?

**Short answer:** The implementation supplies the gradient of the same discrete objective; centered finite differences provide a numerical reference.

**Open the detail:** “Let me show the analytical gradient detail.”

**Reasoning**

- Check interior coordinates, including smoothing and penalties.
- Agreement checks implementation, not global optimality.

Equation: g_i,FD ≈ [J(z + εe_i) − J(z − εe_i)] / (2ε)
Compare with ∂J/∂z_i

**Return to the main thread:** “The cost discourages violations; it does not guarantee feasibility.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 11/d1 — L-BFGS-B

[Open this view](index.html#s11/d1) · **Project evidence**

**Likely question:** What does L-BFGS-B do here?

**Short answer:** It uses local gradient information and a limited-memory approximation of curvature to reduce the discrete cost.

**Open the detail:** “Let me show the l-bfgs-b detail.”

**Reasoning**

- SciPy supplies the algorithm.
- A successful termination does not certify the best route or collision-free feasibility.

Diagram: Cost + gradient → Local quasi-Newton steps → Stopping diagnostics

**Return to the main thread:** “The selected initial shape feeds one local optimization.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 11/d2 — Warm-start selection

[Open this view](index.html#s11/d2) · **Project evidence**

**Likely question:** Is this full multistart optimization?

**Short answer:** The current code screens several initial candidates, picks the lowest-cost retained one, and optimizes that one.

**Open the detail:** “Let me show the warm-start selection detail.”

**Reasoning**

- This is cheaper than solving from every seed.
- The draft’s multistart wording is broader than the exact code behavior.


| Stage | Count |
| --- | --- |
| Candidate generation | Several paths |
| Initial cost scoring | Each retained candidate |
| Full local solve | One selected warm start |

**Return to the main thread:** “The selected initial shape feeds one local optimization.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 11/d3 — Initial candidates

[Open this view](index.html#s11/d3) · **Project evidence**

**Likely question:** Are candidates rejected for obstacle penetration?

**Short answer:** The draft and implementation retain finite obstacle costs; arena validity and candidate integrity are checked separately.

**Open the detail:** “Let me show the initial candidates detail.”

**Reasoning**

- Clearance is a diagnostic, not a blanket collision rejection rule.
- The finite core cost helps retain a usable numerical objective.

Media: `assets/images/nominal-family.png` — Actual candidate-generation figure / simulation

**Return to the main thread:** “The selected initial shape feeds one local optimization.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 11/d4 — Stopping

[Open this view](index.html#s11/d4) · **Project evidence**

**Likely question:** What do you check after the solve?

**Short answer:** I inspect the solver status, objective value, iteration counts, path geometry and constraint-related diagnostics.

**Open the detail:** “Let me show the stopping detail.”

**Reasoning**

- Solver success means a numerical stopping condition was met.
- It is separate from online arrival and physical clearance.


| Numerical | Task / geometry |
| --- | --- |
| success / message | Obstacle clearance |
| nit / nfev / njev | Speed / acceleration violations |
| Final objective | Usable route and endpoints |

**Return to the main thread:** “The selected initial shape feeds one local optimization.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 12/d1 — Earlier formulation

[Open this view](index.html#s12/d1) · **Project evidence**

**Likely question:** What was wrong with inverse distance?

**Short answer:** Near-zero distance can create extreme gradients; a cutoff can also create poor smoothness if handled badly.

**Open the detail:** “Let me show the earlier formulation detail.”

**Reasoning**

- The draft documents the replacement.
- The exact quantitative effect was not isolated in a paired benchmark.

Equation: Earlier family: V(d) ∝ 1/d²
Near contact: rapidly increasing value and gradient

**Return to the main thread:** “The formulation became smoother, with no isolated speedup claimed.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 12/d2 — Evidence

[Open this view](index.html#s12/d2) · **Project evidence**

**Likely question:** What evidence supports the change?

**Short answer:** The code retains both inverse-distance and compact-polynomial functions, and the draft explains why the smoother version was introduced.

**Open the detail:** “Let me show the evidence detail.”

**Reasoning**

- This supports the implementation decision.
- It does not supply a measured before/after runtime gain.

Code:
```text
normalized_distance = distance / influence_radius
compact_base = max(0.0, 1.0 - normalized_distance**2)
return compact_base**power
```

**Return to the main thread:** “The formulation became smoother, with no isolated speedup claimed.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 12/d3 — Smooth cutoff

[Open this view](index.html#s12/d3) · **Project evidence**

**Likely question:** Why exponent three?

**Short answer:** At d=R, the compact cubic in 1−(d/R)² has zero value, first derivative and second derivative.

**Open the detail:** “Let me show the smooth cutoff detail.”

**Reasoning**

- That gives C² continuity at the support boundary.
- The core still needs its separate finite definition.

Equation: V(d) = γ [1 − (d/R)²]³,  0 < d < R
V(d) = 0,  d ≥ R
V(R) = V′(R) = V″(R) = 0

**Return to the main thread:** “The formulation became smoother, with no isolated speedup claimed.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 12/d4 — Validation boundary

[Open this view](index.html#s12/d4) · **Proposed test, not a completed result**

**Likely question:** How would you measure the improvement?

**Short answer:** I would rerun the same initial paths, scenes and stopping tolerances with both potentials and compare convergence and feasible routes.

**Open the detail:** “Let me show the validation boundary detail.”

**Reasoning**

- Keep weights and computation budget explicit.
- Record failures as well as timing.


| Hold fixed | Measure |
| --- | --- |
| Scenes / seeds | Convergence failures |
| Tolerance / budget | Cost evaluations / time |
| Geometry protocol | Clearance / route quality |

**Return to the main thread:** “The formulation became smoother, with no isolated speedup claimed.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 13/d1 — State inputs

[Open this view](index.html#s13/d1) · **Project evidence**

**Likely question:** Which inputs are actually measured?

**Short answer:** Position and marker yaw come from ArUco; velocity is estimated from successive observations.

**Open the detail:** “Let me show the state inputs detail.”

**Reasoning**

- Robot-forward yaw includes the identified marker-axis offset.
- Velocity is not wheel-encoder feedback.


| Signal | Origin |
| --- | --- |
| Position | Camera + calibration |
| Heading | Marker yaw + offset |
| Velocity | Filtered observation difference |
| Agent positions | Current marker snapshots |

**Return to the main thread:** “The real update stays anchored to current measurements.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 13/d2 — Look-ahead

[Open this view](index.html#s13/d2) · **Project evidence**

**Likely question:** Is the reference purely time-based?

**Short answer:** The simulation helper queries current time plus look-ahead; the physical controller uses monotonic path progress with time/space look-ahead.

**Open the detail:** “Let me show the look-ahead detail.”

**Reasoning**

- These implementations share the intent but not an identical reference rule.
- The planned path is known offline.


| Simulation | Physical runner |
| --- | --- |
| t + lookahead_steps × Δt | Measured progress projection |
| Interpolated stored path | Monotonic progress + look-ahead |

**Return to the main thread:** “The real update stays anchored to current measurements.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 13/d3 — Observation timing

[Open this view](index.html#s13/d3) · **Project evidence**

**Likely question:** Are observations instantaneous?

**Short answer:** No. Frame reception, processing and command transmission introduce age and delay.

**Open the detail:** “Let me show the observation timing detail.”

**Reasoning**

- A near-20 Hz loop does not imply 50 ms sensor-to-action latency.
- Freshness and timing must be logged separately.

Diagram: Exposure / transport → Frame received + processing → Command sent

**Return to the main thread:** “The real update stays anchored to current measurements.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 13/d4 — Filtering / memory

[Open this view](index.html#s13/d4) · **Project evidence**

**Likely question:** What happens to noisy or briefly missing observations?

**Short answer:** The adapter filters observed velocity and can retain mobile snapshots for a bounded interval, with freshness recorded.

**Open the detail:** “Let me show the filtering / memory detail.”

**Reasoning**

- Retention is not a true future trajectory prediction.
- Stop behavior depends on the active run configuration.


| Mechanism | Purpose |
| --- | --- |
| Velocity filtering | Reduce noisy differences |
| Snapshot age | Track freshness |
| Bounded memory | Bridge short losses |
| Stop flags | Configured response to loss |

**Return to the main thread:** “The real update stays anchored to current measurements.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 14/d1 — Attraction

[Open this view](index.html#s14/d1) · **Project evidence**

**Likely question:** What pulls the robot back toward the route?

**Short answer:** A proportional force points from the measured position to the nominal look-ahead reference.

**Open the detail:** “Let me show the attraction detail.”

**Reasoning**

- A larger gain increases the request, not necessarily physical speed.
- Clipping and wheel conversion follow.

Equation: F_att = k_a (x_ref − x)
k_a = 5.0 in the reported physical profile

**Return to the main thread:** “I combine those forces before limiting the acceleration.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 14/d2 — Agent repulsion

[Open this view](index.html#s14/d2) · **Project evidence**

**Likely question:** What is the mobile-repulsion law?

**Short answer:** It points away from the agent and increases as the modeled clearance decreases.

**Open the detail:** “Let me show the agent repulsion detail.”

**Reasoning**

- The physical adapter applies the 0.60 m cutoff.
- The epsilon floor avoids division by zero; it is not a safety margin.

Equation: F_rep = g max(0, 1/d_ε² − 1/H²) n̂
d_ε = max(d, ε),  H = 0.60 m
F_rep = 0 for d ≥ H

**Return to the main thread:** “I combine those forces before limiting the acceleration.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 14/d3 — Static / wall forces

[Open this view](index.html#s14/d3) · **Project evidence**

**Likely question:** Why keep static repulsion after planning?

**Short answer:** The real robot may depart from the nominal, so local static and wall terms remain active during execution.

**Open the detail:** “Let me show the static / wall forces detail.”

**Reasoning**

- Fixed obstacles use their own influence range.
- The boundary term uses signed distance to an effective wall.

Equation: F_total = F_att + F_mobile + F_static
                + F_wall − c_d v
H_static = 0.07 m; H_wall = 0.20 m

**Return to the main thread:** “I combine those forces before limiting the acceleration.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 14/d4 — Damping

[Open this view](index.html#s14/d4) · **Project evidence**

**Likely question:** What does damping do?

**Short answer:** It adds −c_d v, opposing the estimated current velocity and moderating motion.

**Open the detail:** “Let me show the damping detail.”

**Reasoning**

- Too much damping can reduce progress.
- It is distinct from wheel-command smoothing.

Media: `assets/images/forces.png` — Measured force decomposition · original research figure

**Return to the main thread:** “I combine those forces before limiting the acceleration.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 15/d1 — Step by step

[Open this view](index.html#s15/d1) · **Project evidence**

**Likely question:** Can you walk through one update?

**Short answer:** Yes: observe, choose the nominal reference, sum forces, divide by mass, clip, integrate, convert and transmit.

**Open the detail:** “Let me show the step by step detail.”

**Reasoning**

- Measured state anchors every physical update.
- Command saturation is another stage after state clipping.

Diagram: Observed state + reference → Forces → a → v_next → Heading → wheels → serial

**Return to the main thread:** “That is one update; the next one returns to the camera.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 15/d2 — Integration scheme

[Open this view](index.html#s15/d2) · **Project evidence**

**Likely question:** Why call it semi-implicit Euler?

**Short answer:** The velocity is updated before the position, and the position uses the updated velocity.

**Open the detail:** “Let me show the integration scheme detail.”

**Reasoning**

- One force evaluation is needed.
- The physical runner uses measured position at each update.

Equation: aₖ = clip_a(Fₖ / m)
vₖ₊₁ = clip_v(vₖ + Δt aₖ)
x_intention = x_measured + Δt vₖ₊₁

**Return to the main thread:** “That is one update; the next one returns to the camera.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 15/d3 — Saturation

[Open this view](index.html#s15/d3) · **Project evidence**

**Likely question:** Is each component independently clipped?

**Short answer:** The state limiter clips vector norm; it preserves direction when reducing a vector to the maximum norm.

**Open the detail:** “Let me show the saturation detail.”

**Reasoning**

- Wheel commands later use pair rescaling and effective floors.
- Internal limits do not prove a global physical speed guarantee.

Equation: clip_c(u) = u,                 ‖u‖ ≤ c
clip_c(u) = c u/‖u‖,     ‖u‖ > c

**Return to the main thread:** “That is one update; the next one returns to the camera.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 15/d4 — Code excerpt

[Open this view](index.html#s15/d4) · **Project evidence**

**Likely question:** Which lines implement the numerical update?

**Short answer:** These lines update velocity first, clip its norm, and form the one-step position from the measured position.

**Open the detail:** “Let me show the code excerpt detail.”

**Reasoning**

- The acceleration was already norm-clipped.
- The next iteration returns to the camera measurement.

Code:
```text
next_velocity = _clip_norm(
    self._newton_velocity_m_s + acceleration * dt,
    self.config.max_speed_m_s,
)
self._newton_velocity_m_s = next_velocity.copy()
next_position = position + next_velocity * dt
```

**Return to the main thread:** “That is one update; the next one returns to the camera.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 16/d1 — Interfaces

[Open this view](index.html#s16/d1) · **Project evidence**

**Likely question:** How does the interface enforce the boundary?

**Short answer:** The offline builder excludes agents, and the physical corrector accepts ObservedMobileObstacle snapshots.

**Open the detail:** “Let me show the interfaces detail.”

**Reasoning**

- The snapshot has center, radius, age and freshness.
- It has no future-trajectory method.

Code:
```text
class ObservedMobileObstacle:
    marker_id: int | None
    center_x_m: float
    center_y_m: float
    radius_m: float
    age_s: float = 0.0
    fresh: bool = True
```

**Return to the main thread:** “The reference is known, while an agent's true future is not.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 16/d2 — Reference look-ahead

[Open this view](index.html#s16/d2) · **Project evidence**

**Likely question:** Why is reference look-ahead allowed?

**Short answer:** The nominal is already known. Querying it at a later reference time does not reveal later world observations.

**Open the detail:** “Let me show the reference look-ahead detail.”

**Reasoning**

- The physical path-progress rule is also based on current robot position.
- Known reference and unknown disturbance are different signals.


| Allowed | Unavailable |
| --- | --- |
| Stored nominal point ahead | True agent position at t+Δt |
| Current measured agent center | Pre-recorded future motion in control |
| Past observations | Ground-truth future disturbance |

**Return to the main thread:** “The reference is known, while an agent's true future is not.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 16/d3 — Future queries

[Open this view](index.html#s16/d3) · **Project evidence**

**Likely question:** Do simulations store agent trajectories?

**Short answer:** The scenario generator can know trajectories for simulation and evaluation, but the controller must consume only the current state.

**Open the detail:** “Let me show the future queries detail.”

**Reasoning**

- Do not pass recorded future paths to the live corrector.
- Replay data can be used after the run for analysis.

Diagram: Scenario / replay truth → Current snapshot boundary → Controller sees present only

**Return to the main thread:** “The reference is known, while an agent's true future is not.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 16/d4 — Testing separation

[Open this view](index.html#s16/d4) · **Verification reasoning**

**Likely question:** How would you test the information boundary?

**Short answer:** Hold current observations fixed while changing the hidden future. The current command should remain unchanged.

**Open the detail:** “Let me show the testing separation detail.”

**Reasoning**

- Inspect the static-world builder separately.
- Treat this as an interface test, not a safety proof.


| Test input | Expected result |
| --- | --- |
| Same present, different future | Same current command |
| Agents in original scene | Absent from nominal world |
| No snapshot future API | No future query possible |

**Return to the main thread:** “The reference is known, while an agent's true future is not.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 17/d1 — Failure evidence

[Open this view](index.html#s17/d1) · **Project evidence**

**Likely question:** Was stalling an observed problem?

**Short answer:** Yes. The July 14 report records active correction with weak translation and a controlled timeout, without collision.

**Open the detail:** “Let me show the failure evidence detail.”

**Reasoning**

- This was an early adapter stage.
- It is separate from the later 40-run BIS campaign.


| Early trial | Recorded outcome |
| --- | --- |
| Correction | Active |
| Translation | Weak |
| Termination | Controlled timeout |
| Contact | None reported |

**Return to the main thread:** “The observed problem was weak progress despite an active correction.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 17/d2 — Force vs motion

[Open this view](index.html#s17/d2) · **Diagnostic reasoning**

**Likely question:** Why can strong forces still give poor progress?

**Short answer:** Forces can oppose each other, remain clipped, or map poorly through heading and drivetrain constraints.

**Open the detail:** “Let me show the force vs motion detail.”

**Reasoning**

- Inspect attraction, repulsion, damping and saturation together.
- Then inspect whether the wheel pair can realize the requested direction.

Diagram: Force balance → State clipping → Heading / wheel limits

**Return to the main thread:** “The observed problem was weak progress despite an active correction.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 17/d3 — Safety stop

[Open this view](index.html#s17/d3) · **Project evidence**

**Likely question:** Did every safety option run during the final trials?

**Short answer:** No. Stop options are configurable; a supported option must not be presented as always enabled.

**Open the detail:** “Let me show the safety stop detail.”

**Reasoning**

- The paper records a marker-loss safety stop in exploration.
- The early proximity-stop test is not the final campaign protocol.


| Evidence | Scope |
| --- | --- |
| Early proximity stop | Dedicated early test |
| Marker-loss stop | Exploratory event |
| Campaign success | Separate frozen tasks |

**Return to the main thread:** “The observed problem was weak progress despite an active correction.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 17/d4 — MPC extension

[Open this view](index.html#s17/d4) · **Conceptual extension**

**Likely question:** Could MPC help?

**Short answer:** Possibly. It would optimize a sequence over a receding horizon using a robot model, then apply the first action and repeat.

**Open the detail:** “Let me show the mpc extension detail.”

**Reasoning**

- It could express motion constraints explicitly.
- Model error, obstacle prediction and runtime still need validation.

Equation: min Σ ℓ(xₖ, uₖ) + ℓ_f(x_H)
subject to xₖ₊₁ = f(xₖ, uₖ), limits
Apply u₀ → observe again → solve again

**Return to the main thread:** “The observed problem was weak progress despite an active correction.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 18/d1 — Hardware choices

[Open this view](index.html#s18/d1) · **Project evidence**

**Likely question:** Why this testbed?

**Short answer:** It made repeated low-speed navigation experiments and external measurement possible with the available rover platforms.

**Open the detail:** “Let me show the hardware choices detail.”

**Reasoning**

- Marked geometry gives an accessible reference.
- The testbed trades deployment realism for observability.

Media: `assets/images/system.jpg` — Original integrated system photograph

**Return to the main thread:** “The whole chain is sensing, onboard computation, and serial actuation.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 18/d2 — Overhead vision

[Open this view](index.html#s18/d2) · **Project evidence**

**Likely question:** Why use an overhead camera?

**Short answer:** It provided a common metric frame for the controlled robot, agents and obstacles in this indoor experiment.

**Open the detail:** “Let me show the overhead vision detail.”

**Reasoning**

- It supports repeatable observation.
- It requires visibility and calibration, and is not onboard perception.

Media: `assets/images/camera.jpg` — Original overhead-camera setup

**Return to the main thread:** “The whole chain is sensing, onboard computation, and serial actuation.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 18/d3 — Why not LiDAR?

[Open this view](index.html#s18/d3) · **Design rationale**

**Likely question:** Why did you not use LiDAR?

**Short answer:** The chosen experiment needed shared external pose measurement. A LiDAR-based onboard system would be a different sensing and localization project.

**Open the detail:** “Let me show the why not lidar? detail.”

**Reasoning**

- I did not run a camera-versus-LiDAR benchmark.
- I would choose sensors from the deployment task and observability needs.


| This bench | Possible onboard setup |
| --- | --- |
| External metric frame | Robot-relative sensing |
| Marked agents | Detection / tracking needed |
| Controlled indoor tasks | Additional localization work |

**Return to the main thread:** “The whole chain is sensing, onboard computation, and serial actuation.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 18/d4 — Communication

[Open this view](index.html#s18/d4) · **Project evidence**

**Likely question:** What is the actual communication chain?

**Short answer:** The run summaries record Basler GigE → access point → Wi-Fi → Raspberry Pi; wheel commands leave over onboard serial.

**Open the detail:** “Let me show the communication detail.”

**Reasoning**

- Image transport and agent command links are separate.
- Communication delay belongs in the measured loop budget.

Diagram: Camera → AP → Wi-Fi → Pi: OpenCV + controller → Serial → supplier board

**Return to the main thread:** “The whole chain is sensing, onboard computation, and serial actuation.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 19/d1 — Heading conversion

[Open this view](index.html#s19/d1) · **Project evidence**

**Likely question:** How do you get heading from velocity?

**Short answer:** The desired heading is atan2(v_y,v_x); the error is wrapped relative to measured robot-forward yaw.

**Open the detail:** “Let me show the heading conversion detail.”

**Reasoning**

- The marker-to-forward axis offset is calibrated.
- Yaw-rate feed-forward and heading feedback form the turn request.

Equation: φ = atan2(v_y, v_x)
e_ψ = wrap(φ − ψ_robot)
ω_req = sat(κ_ff φ̇; k_ω) + 2 k_θ k_ω e_ψ

**Return to the main thread:** “My high-level conversion sits above the supplier's motor execution.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 19/d2 — Wheel mapping

[Open this view](index.html#s19/d2) · **Project evidence**

**Likely question:** How are wheel commands formed?

**Short answer:** The nominal pair is linear minus angular on the left, and linear plus angular on the right, followed by joint rescaling, floors and smoothing.

**Open the detail:** “Let me show the wheel mapping detail.”

**Reasoning**

- Rescaling preserves the pair ratio before later floors.
- Command units are normalized driver inputs, not measured wheel velocities.

Equation: u_L = u_v − u_ω
u_R = u_v + u_ω
Then: joint limit → effective floor → smoothing

**Return to the main thread:** “My high-level conversion sits above the supplier's motor execution.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 19/d3 — Reverse motion

[Open this view](index.html#s19/d3) · **Project evidence**

**Likely question:** What does reverse change?

**Short answer:** When the heading error crosses an entry threshold, the controller reverses the drive sign and reflects the desired heading by π.

**Open the detail:** “Let me show the reverse motion detail.”

**Reasoning**

- It exits at a separate threshold and clears smoothing history.
- Both final blocks use about 92° thresholds; no disabled-reverse ablation isolates its benefit.


| Physical profile | Value |
| --- | --- |
| Reverse entry | 1.6058 rad |
| Reverse exit | 1.6052 rad |
| A/B BIS | Same thresholds |
| Isolated benefit | Not measured |

**Return to the main thread:** “My high-level conversion sits above the supplier's motor execution.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 19/d4 — Provided firmware

[Open this view](index.html#s19/d4) · **Project evidence**

**Likely question:** Was the low-level control a black box?

**Short answer:** The supplier source is available. It contains multiple motor paths; the no-encoder rover uses external camera feedback rather than wheel-level feedback in this experiment.

**Open the detail:** “Let me show the provided firmware detail.”

**Reasoning**

- setGoalSpeed has a PID branch for mainType==3 and an open-loop branch otherwise.
- I did not write or retune that supplier firmware; the flashed build digest is missing.

Code:
```text
if (mainType == 3) {
  usePIDCompute = true;
  ...
} else {
  usePIDCompute = false;
  leftCtrl(inputLeft * 512 * spd_rate_A);
  rightCtrl(inputRight * 512 * spd_rate_B);
}
```

**Return to the main thread:** “My high-level conversion sits above the supplier's motor execution.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 20/d1 — Intrinsics

[Open this view](index.html#s20/d1) · **Project evidence**

**Likely question:** What did intrinsic calibration change?

**Short answer:** It estimated camera parameters and lens distortion from twenty valid calibration-board views before metric mapping.

**Open the detail:** “Let me show the intrinsics detail.”

**Reasoning**

- The reported reprojection RMS is 0.191 pixels.
- That pixel residual is not the metric rover-position error.


| Metric | Protocol |
| --- | --- |
| 0.191 px RMS | 20 calibration views |
| 5.8 mm mean | 9 ground positions |
| 11.6 mm mean | 5 raised-marker positions |

**Return to the main thread:** “The ground error and raised-marker error remain separate measurements.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 20/d2 — Homography

[Open this view](index.html#s20/d2) · **Project evidence**

**Likely question:** Why recompute the homography?

**Short answer:** The homography must map the distortion-corrected image coordinates to the ground plane.

**Open the detail:** “Let me show the homography detail.”

**Reasoning**

- Four ground markers establish the metric reference.
- A plane mapping cannot by itself remove height parallax.

Equation: x̃_metric = H x̃_undistorted
x_metric = [x̃₁/x̃₃, x̃₂/x̃₃]ᵀ

**Return to the main thread:** “The ground error and raised-marker error remain separate measurements.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 20/d3 — Parallax geometry

[Open this view](index.html#s20/d3) · **Project evidence**

**Likely question:** How did marker height cause error?

**Short answer:** A raised marker projects along a camera ray to the wrong point on the ground mapping. I applied radial height correction about the principal point.

**Open the detail:** “Let me show the parallax geometry detail.”

**Reasoning**

- The draft assumes an approximately normal optical axis.
- The controlled marker height is 0.1585 m; camera height is 2.07 m.

Equation: k_π = 1 − h_marker / h_camera
= 1 − 0.1585/2.07 ≈ 0.9234

**Return to the main thread:** “The ground error and raised-marker error remain separate measurements.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 20/d4 — Measurement protocol

[Open this view](index.html#s20/d4) · **Project evidence**

**Likely question:** Are the two percentage reductions comparable?

**Short answer:** They are separate within-protocol improvements, not two estimates of the same final accuracy.

**Open the detail:** “Let me show the measurement protocol detail.”

**Reasoning**

- Ground: nine known positions, intrinsics plus recomputed homography.
- Raised: five positions, before and after parallax correction.

Media: `assets/images/calibration-errors.png` — Original ground / raised-marker error maps

**Return to the main thread:** “The ground error and raised-marker error remain separate measurements.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 21/d1 — Timing breakdown

[Open this view](index.html#s21/d1) · **Project evidence**

**Likely question:** Can those numbers be added together?

**Short answer:** Only the top-level categories should be added. Marker detection is already inside vision.

**Open the detail:** “Let me show the timing breakdown detail.”

**Reasoning**

- Table 10 reports means across the A block.
- The plotted Figure 14 reports medians and interquartile dispersion.


| Stage | Mean ms |
| --- | --- |
| Vision total | 32.94 |
| Serial | 8.43 |
| Frame wait | 0.83 |
| Corrector | 0.72 |
| Logging | 0.20 |
| Remaining target margin | 6.88 |

**Return to the main thread:** “Perception dominates this measured loop budget.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 21/d2 — Detection resolution

[Open this view](index.html#s21/d2) · **Project evidence**

**Likely question:** What did the resolution comparison show?

**Short answer:** Full-resolution and downscaled sessions had different detection times; the comparison is descriptive because scenes and sessions also differed.

**Open the detail:** “Let me show the detection resolution detail.”

**Reasoning**

- Acquisition stayed 1500×1200.
- Detection was downscaled to 1000×800 in the reported campaign.


| Quantity | Earlier | BIS |
| --- | --- | --- |
| Runs | 12 | 20 |
| Detection image | 1500×1200 | 1000×800 |
| Detection ms | 72.81 | 29.07 |
| Vision total ms | 74.54 | 32.94 |

**Return to the main thread:** “Perception dominates this measured loop budget.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 21/d3 — Serial cost

[Open this view](index.html#s21/d3) · **Project evidence**

**Likely question:** Why does serial transmission matter?

**Short answer:** It takes about 8.43 ms in the measured iteration, close to 17% of the 50 ms target period.

**Open the detail:** “Let me show the serial cost detail.”

**Reasoning**

- That cost is larger than the corrector computation.
- The JSON path and transport are part of integration.

Code:
```text
{"T":1,"L":0.12,"R":0.14}

# Illustrative payload values only
# One newline terminates each command
```

**Return to the main thread:** “Perception dominates this measured loop budget.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 21/d4 — Age / latency

[Open this view](index.html#s21/d4) · **Project evidence**

**Likely question:** Does 20 Hz mean 50 ms latency?

**Short answer:** No. Frame age, processing time, transport, and command emission are different quantities.

**Open the detail:** “Let me show the age / latency detail.”

**Reasoning**

- The draft’s latency discussion gives a lower-bound estimate, not a full timestamped exposure-to-action measurement.
- Latest-frame overwrites also differ from network packet loss.

Diagram: Image age at receive → Vision + control + serial → Command reaches hardware

**Return to the main thread:** “Perception dominates this measured loop budget.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 22/d1 — Test protocol

[Open this view](index.html#s22/d1) · **Project evidence**

**Likely question:** What exactly does 40/40 cover?

**Short answer:** Twenty runs of one frozen task and twenty of another, using the same physical coefficient set on one day.

**Open the detail:** “Let me show the test protocol detail.”

**Reasoning**

- Start, goal and scene are held within each task block.
- This is one controlled rover, not forty independent environments or coordinated robots.


| Block | Outcomes | Comparable repeats |
| --- | --- | --- |
| A BIS | 20 successful | 20 |
| B BIS | 20 successful | 19 |
| Total | 40 successful | 39 |

**Return to the main thread:** “The result is forty successful outcomes in two frozen tasks.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 22/d2 — All trajectories

[Open this view](index.html#s22/d2) · **Project evidence**

**Likely question:** Can we see repeated trajectories?

**Short answer:** Yes. These original figures show measured trajectories and clearance histories from the campaign.

**Open the detail:** “Let me show the all trajectories detail.”

**Reasoning**

- Overlays expose dispersion that a single video cannot.
- The two-agent figure excludes run 1 from layout-comparable aggregates.

Media: `assets/images/repeatability-dual.png` — Original two-agent campaign figure · 19 comparable trials

**Return to the main thread:** “The result is forty successful outcomes in two frozen tasks.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 22/d3 — Clearances

[Open this view](index.html#s22/d3) · **Project evidence**

**Likely question:** How was 6.3 cm computed?

**Short answer:** It is the lowest logged moving-agent edge-to-edge clearance over the physical run summaries.

**Open the detail:** “Let me show the clearances detail.”

**Reasoning**

- Recomputed minimum: 0.0630853 m in the B BIS block.
- The circular envelope and localization uncertainty limit interpretation.

Equation: min over 40 runs, all sampled instants:
min_mobile_clearance = 0.0630853 m
≈ 6.3 cm

**Return to the main thread:** “The result is forty successful outcomes in two frozen tasks.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 22/d4 — Repeatability statistics

[Open this view](index.html#s22/d4) · **Project evidence**

**Likely question:** Why do some tables use 39 trials?

**Short answer:** One B BIS run retained the preceding obstacle layout. It succeeded, but does not belong in the same-layout repeatability aggregate.

**Open the detail:** “Let me show the repeatability statistics detail.”

**Reasoning**

- Keep outcome counting and repeated-scene analysis separate.
- The original figure generator explicitly excludes B run 1.

Code:
```text
EXCLUDED_RUNS = (1,)
prefix = "test_B_bis_"
... create_campaign_figure(
    prefix, required_agents=2, excluded=EXCLUDED_RUNS
)
```

**Return to the main thread:** “The result is forty successful outcomes in two frozen tasks.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 23/d1 — Simulation study

[Open this view](index.html#s23/d1) · **Project evidence**

**Likely question:** Can we compare simulation success with 40/40?

**Short answer:** No. The twelve architecture combinations use a separate simulated scenario bank and tuning protocol.

**Open the detail:** “Let me show the simulation study detail.”

**Reasoning**

- Quarantine can change which scenarios contribute to scores.
- Safety, goal arrival and joint success must stay separate.

Media: `assets/images/sim-outcomes.png` — Original simulation outcome decomposition · separate study

**Return to the main thread:** “The measurements are useful within that limited test domain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 23/d2 — Sim-to-real gap

[Open this view](index.html#s23/d2) · **Project evidence**

**Likely question:** What explains the difference between simulated and real paths?

**Short answer:** Nonholonomic motion, imperfect command response, asymmetry, sensing delay and possible planning differences all contribute.

**Open the detail:** “Let me show the sim-to-real gap detail.”

**Reasoning**

- A geometric comparison ignores timing shift.
- The available data do not isolate each cause.

Media: `assets/images/sim-real.png` — Original geometric simulation / real comparison

**Return to the main thread:** “The measurements are useful within that limited test domain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 23/d3 — Failure taxonomy

[Open this view](index.html#s23/d3) · **Project evidence**

**Likely question:** Which failures are worth separating?

**Short answer:** I separate goal misses, unsafe modeled clearance, perception stops and execution errors.

**Open the detail:** “Let me show the failure taxonomy detail.”

**Reasoning**

- A safe stall is a task failure.
- An envelope overlap does not by itself prove physical contact.


| Category | Why distinct |
| --- | --- |
| Safe but goal missed | Progress failed |
| Negative envelope clearance | Modeled margin lost |
| Marker-loss stop | Perception unavailable |
| Execution error | System did not complete |

**Return to the main thread:** “The measurements are useful within that limited test domain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 23/d4 — Remaining limits

[Open this view](index.html#s23/d4) · **Proposed work**

**Likely question:** What would you validate next?

**Short answer:** More layouts, more varied disturbances, a better drivetrain model, and a paired perception benchmark.

**Open the detail:** “Let me show the remaining limits detail.”

**Reasoning**

- Use held-out tasks and a clear stop/failure definition.
- Measure observed physical limits and sensor-to-action delay directly.


| Next test | Question |
| --- | --- |
| Held-out layouts | Does success generalize? |
| Paired image benchmark | Resolution effect? |
| Improved motion model | What explains path error? |
| Timestamped chain | Actual action latency? |

**Return to the main thread:** “The measurements are useful within that limited test domain.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 24/d1 — Actual operation

[Open this view](index.html#s24/d1) · **Project evidence**

**Likely question:** What did the real task involve?

**Short answer:** The observed lab operation involved manually moving and pouring molten alloy from a crucible into a mold.

**Open the detail:** “Let me show the actual operation detail.”

**Reasoning**

- The cell concept addresses the transport and pouring sequence.
- It was not installed in that workshop.

Media: `assets/images/foundry-task.png` — Original foundry photograph from the report

**Return to the main thread:** “The industrial task drove the cell concept.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 24/d2 — Automation assumptions

[Open this view](index.html#s24/d2) · **Project evidence**

**Likely question:** Which assumptions shaped the concept?

**Short answer:** Handling, reach, wrist load, grip opening, heat exposure and synchronization drove the study.

**Open the detail:** “Let me show the automation assumptions detail.”

**Reasoning**

- Numerical mass assumptions conflict in the report.
- I keep those unresolved values out of performance claims.


| Requirement | Engineering question |
| --- | --- |
| Load | Tool + crucible + alloy? |
| Geometry | Reach and clearance? |
| Heat | Tool protection and exposure? |
| Timing | Robot / conveyor synchronization? |

**Return to the main thread:** “The industrial task drove the cell concept.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 24/d3 — My role

[Open this view](index.html#s24/d3) · **Project evidence**

**Likely question:** What did you personally do?

**Short answer:** I worked on the task concept, robot/tool choices and simulation. The financial analysis was done by another student.

**Open the detail:** “Let me show the my role detail.”

**Reasoning**

- The original report lists four authors.
- My notes recall adapting a teacher-provided template.


| Work | Attribution |
| --- | --- |
| Task / cell / simulation | My design and simulation work |
| Program starting point | Teacher template, per notes |
| Financial analysis | Another student |

**Return to the main thread:** “The industrial task drove the cell concept.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 24/d4 — Feasibility

[Open this view](index.html#s24/d4) · **Project evidence**

**Likely question:** What does feasibility mean at this stage?

**Short answer:** It means checking whether the chosen robot, tool and layout can support the intended sequence in simulation.

**Open the detail:** “Let me show the feasibility detail.”

**Reasoning**

- It is an early engineering filter.
- It does not establish process quality or production reliability.

Diagram: Task requirements → Robot + tool + layout → Simulated sequence

**Return to the main thread:** “The industrial task drove the cell concept.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 25/d1 — Payload / reach

[Open this view](index.html#s25/d1) · **Project evidence**

**Likely question:** How would you justify the robot choice?

**Short answer:** Use the full wrist load, center of mass, inertia and reachable task poses, then check the manufacturer’s load diagram.

**Open the detail:** “Let me show the payload / reach detail.”

**Reasoning**

- The study selected M-20iD/25.
- The report’s 25 kg catalog rating alone is not a complete application validation.


| Check | Why |
| --- | --- |
| Tool + crucible + melt | Total wrist load |
| Center of mass / inertia | Wrist moments |
| Approach and pouring poses | Reach / orientation |
| Thermal exposure | Protection needs |

**Return to the main thread:** “Robot, tool and geometry have to be checked together.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 25/d2 — Gripper geometry

[Open this view](index.html#s25/d2) · **Project evidence**

**Likely question:** How did you reason about the grip?

**Short answer:** I considered opposed contacts around the crucible and a simplified static friction model to relate normal force to the load.

**Open the detail:** “Let me show the gripper geometry detail.”

**Reasoning**

- Contact force depends on actual mass, friction and dynamics.
- Final sizing needs consistent mass, friction, dynamic load and thermal assumptions.

Equation: Conceptual static model:
2 μ N ≥ m g
Add dynamic, thermal and loss-of-pressure checks

**Return to the main thread:** “Robot, tool and geometry have to be checked together.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 25/d3 — Cell layout

[Open this view](index.html#s25/d3) · **Project evidence**

**Likely question:** What did the layout need to accommodate?

**Short answer:** Two furnace stations, the robot, conveyor, crucible table and protective boundaries.

**Open the detail:** “Let me show the cell layout detail.”

**Reasoning**

- Reach matters at both pickup and pouring orientation.
- Layout also needs access, clearance and synchronization.

Media: `assets/images/fanuc-cell.png` — Original ROBOGUIDE cell layout

**Return to the main thread:** “Robot, tool and geometry have to be checked together.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 25/d4 — Trade-offs

[Open this view](index.html#s25/d4) · **Engineering reasoning**

**Likely question:** Why not choose the largest robot or strongest gripper?

**Short answer:** Capacity has to match geometry, wrist loading, thermal conditions and integration constraints.

**Open the detail:** “Let me show the trade-offs detail.”

**Reasoning**

- A larger nominal rating does not solve access or gripping.
- The concept needs physical checks before selection is final.


| Choice | Must also check |
| --- | --- |
| Payload | Moments / tool mass |
| Reach | Orientation / clearance |
| Gripping force | Crucible stress / slip |
| Protection | Heat exposure / service access |

**Return to the main thread:** “Robot, tool and geometry have to be checked together.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 26/d1 — Cycle sequence

[Open this view](index.html#s26/d1) · **Project evidence**

**Likely question:** What sequence did you model?

**Short answer:** Approach, descend, grip, transport, position, pour, and return or set down.

**Open the detail:** “Let me show the cycle sequence detail.”

**Reasoning**

- The report differentiates loaded and empty travel.
- Conveyor timing must be coordinated with the robot.

Diagram: Approach + grip → Transport + pour → Set down + next mold

**Return to the main thread:** “The simulation made the sequence visible, with physical testing still ahead.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 26/d2 — Paths / reachability

[Open this view](index.html#s26/d2) · **Project evidence**

**Likely question:** What could the simulation check?

**Short answer:** It could show task poses, relative equipment placement, motion order and modeled geometric clearance.

**Open the detail:** “Let me show the paths / reachability detail.”

**Reasoning**

- TCP, tool geometry and setup assumptions affect the result.
- Simulated clearance needs physical confirmation.

Media: `assets/images/fanuc-gripper.png` — Original modeled robot / gripper view

**Return to the main thread:** “The simulation made the sequence visible, with physical testing still ahead.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 26/d3 — Template adaptation

[Open this view](index.html#s26/d3) · **Project evidence**

**Likely question:** How much programming was original?

**Short answer:** My notes recall a teacher-provided template that I reused and adapted to make this task sequence work.

**Open the detail:** “Let me show the template adaptation detail.”

**Reasoning**

- I can claim adaptation and integration.
- The exact source template and program diff were not recovered.


| Supported | Not established |
| --- | --- |
| Template adaptation | Whole stack written from scratch |
| Task sequence in simulation | Exact changed program lines |
| Modeled cell | Physical commissioning |

**Return to the main thread:** “The simulation made the sequence visible, with physical testing still ahead.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 26/d4 — Simulation evidence

[Open this view](index.html#s26/d4) · **Project evidence**

**Likely question:** What artifacts remain?

**Short answer:** The report, presentation, original images and videos document the modeled cell and sequence.

**Open the detail:** “Let me show the simulation evidence detail.”

**Reasoning**

- The excerpt is authentic project media.
- A video alone does not provide a reproducible timing export.

Media: `assets/images/fanuc-mold.png` — Original mold CAD illustration from the project report

**Return to the main thread:** “The simulation made the sequence visible, with physical testing still ahead.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 27/d1 — Physical validation

[Open this view](index.html#s27/d1) · **Proposed work**

**Likely question:** What would you test first?

**Short answer:** Start with safe handling tests using a representative cold load, then validate process-specific conditions under appropriate supervision.

**Open the detail:** “Let me show the physical validation detail.”

**Reasoning**

- Check grip retention, pose accuracy and repeated execution.
- Thermal and molten-material tests require a separately validated setup.


| Stage | Evidence needed |
| --- | --- |
| Cold load | Grip / slip / repeatability |
| Integrated sequence | Clearance / synchronization |
| Process conditions | Thermal / pouring behavior |

**Return to the main thread:** “Those checks are what separate this concept from a validated cell.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 27/d2 — Safety assumptions

[Open this view](index.html#s27/d2) · **Simulation boundary**

**Likely question:** Do barriers in the model prove a safe cell?

**Short answer:** No. They show a layout intention; the installed system would require its own risk assessment and validated protective functions.

**Open the detail:** “Let me show the safety assumptions detail.”

**Reasoning**

- I do not claim compliance or certification from the simulation.
- Process hazards include heat, spill, collision and access.


| Modeled element | Still required |
| --- | --- |
| Barrier geometry | Validated protective function |
| Emergency stop idea | Installed response testing |
| Thermal screen | Actual exposure validation |

**Return to the main thread:** “Those checks are what separate this concept from a validated cell.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 27/d3 — Cycle-time limits

[Open this view](index.html#s27/d3) · **Project evidence**

**Likely question:** Why not use the claimed productivity gain?

**Short answer:** The report estimates a cycle but no timing export or comparable production trial was recovered.

**Open the detail:** “Let me show the cycle-time limits detail.”

**Reasoning**

- Waits, resets, faults and process quality affect throughput.
- I omit the dramatic calculated gain and ROI.


| Available | Missing |
| --- | --- |
| Simulation video | Timestamp export |
| Cycle estimate | Equivalent operation boundary |
| Concept sequence | Repeated production data |

**Return to the main thread:** “Those checks are what separate this concept from a validated cell.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 27/d4 — Economic study

[Open this view](index.html#s27/d4) · **Project evidence**

**Likely question:** Did you do the financial analysis?

**Short answer:** No, another student did that part. I can explain the robot and cell concept, but I don't have a verified ROI to claim.

**Open the detail:** “Let me show the economic study detail.”

**Reasoning**

- Costs, availability, scrap and demand need a credible industrial model.
- My contribution is the task and robotics study.


| My focus | Separate work |
| --- | --- |
| Task + integration concept | Financial analysis |
| Robot / tool reasoning | Verified ROI not established |

**Return to the main thread:** “Those checks are what separate this concept from a validated cell.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 28/d1 — Actual status

[Open this view](index.html#s28/d1) · **Project evidence**

**Likely question:** What have you done on the G1?

**Short answer:** I'm reading papers, framing the task, and preparing the pipeline. I don't yet have a trained policy or a measured G1 result to show.

**Open the detail:** “Let me show the actual status detail.”

**Reasoning**

- At the first interview, I hadn't started working hands-on with the G1.
- My next step is to make the task, interfaces and evaluation setup concrete.


| Status | Supported scope |
| --- | --- |
| Done | Reading / framing |
| In progress | Task and pipeline preparation |
| Next | Robot setup / demonstrations |

**Return to the main thread:** “My G1 project is still at the preparation stage.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 28/d2 — Hardware setup

[Open this view](index.html#s28/d2) · **Project evidence**

**Likely question:** Is the G1 setup ready?

**Short answer:** I'm targeting the G1. I still need to establish the practical teleoperation route and robot-control interface.

**Open the detail:** “Let me show the hardware setup detail.”

**Reasoning**

- The proposal allowed a fallback platform.
- The supervisor email discusses possible motion capture and access planning.


| Target | To confirm |
| --- | --- |
| Unitree G1 | Exact configuration / interfaces |
| Teleoperation or motion capture | Available route |
| Lab access | Dates / sessions |

**Return to the main thread:** “My G1 project is still at the preparation stage.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 28/d3 — Before the internship

[Open this view](index.html#s28/d3) · **Intended preparation**

**Likely question:** How could this prepare you for Binabik?

**Short answer:** I want to gain practical experience in demonstration data, robot interfaces and evaluation before the internship.

**Open the detail:** “Let me show the before the internship detail.”

**Reasoning**

- Any project alignment would need the supervisor’s agreement.
- It is preparation, not a promise of a completed capability.

Diagram: Focused academic task → Document interfaces / failures → Bring practical learning

**Return to the main thread:** “My G1 project is still at the preparation stage.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 28/d4 — Academic scope

[Open this view](index.html#s28/d4) · **Project evidence**

**Likely question:** What is the project organization?

**Short answer:** The proposal plans a team of four to five students with overlapping setup, learning and evaluation phases.

**Open the detail:** “Let me show the academic scope detail.”

**Reasoning**

- My exact phase ownership is not established in the proposal.
- I do not claim to be the named project leader.


| Phase | Planned work |
| --- | --- |
| Setup | Interfaces + demonstrations |
| Learning | Dataset + adaptation |
| Evaluation | Robot tests + failures |

**Return to the main thread:** “My G1 project is still at the preparation stage.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 29/d1 — Demonstration pipeline

[Open this view](index.html#s29/d1) · **Planned method**

**Likely question:** What must a demonstration contain?

**Short answer:** Synchronized observations, robot state, actions, task instruction and clear episode boundaries.

**Open the detail:** “Let me show the demonstration pipeline detail.”

**Reasoning**

- Data quality and coordinate conventions matter before training.
- Motion capture alone is not a ready-to-train VLA dataset.

Diagram: Observation + state + instruction → Actions + timestamps + episodes → Quality checks + dataset

**Return to the main thread:** “The pipeline is planned, and each robot interface needs validation.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 29/d2 — Policy adaptation

[Open this view](index.html#s29/d2) · **Planned method**

**Likely question:** Have you fine-tuned OpenPI?

**Short answer:** No. It is the candidate adaptation route, with robot-specific data and interfaces still to establish.

**Open the detail:** “Let me show the policy adaptation detail.”

**Reasoning**

- The primary repository documents adaptation to own datasets.
- Compatibility, compute and the exact checkpoint remain open.


| Candidate step | Needed input |
| --- | --- |
| Data conversion | Observation/action schema |
| Fine-tuning | Selected checkpoint + config |
| Robot inference | Action adapter + timing |
| Evaluation | Held-out tasks / scenes |

**Return to the main thread:** “The pipeline is planned, and each robot interface needs validation.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 29/d3 — Evaluation protocol

[Open this view](index.html#s29/d3) · **Proposed evaluation**

**Likely question:** How would you avoid judging one good demo?

**Short answer:** Use a fixed task definition, repeated trials, held-out object configurations, and explicit failure and intervention logging.

**Open the detail:** “Let me show the evaluation protocol detail.”

**Reasoning**

- Define success before testing.
- Separate a policy failure from interface or execution failures.


| Measure | Question |
| --- | --- |
| Task success | Did the full task finish? |
| Interventions | Was help required? |
| Failure categories | What failed? |
| Timing / reset | Can it run repeatedly? |

**Return to the main thread:** “The pipeline is planned, and each robot interface needs validation.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 29/d4 — Transfer between robots

[Open this view](index.html#s29/d4) · **Conceptual transfer boundary**

**Likely question:** What transfers to another robot?

**Short answer:** Data discipline, integration methods and evaluation habits transfer. A policy needs compatibility work and fresh validation on the new platform.

**Open the detail:** “Let me show the transfer between robots detail.”

**Reasoning**

- Morphology, action space and controller behavior differ.
- Industrial compliance and reliability remain learning areas for me.


| Transferable | Robot-specific |
| --- | --- |
| Dataset checks | Sensor / observation schema |
| Failure analysis | Action space / kinematics |
| Evaluation protocol | Controller / contact behavior |

**Return to the main thread:** “The pipeline is planned, and each robot interface needs validation.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 30/d1 — First weeks

[Open this view](index.html#s30/d1) · **Possible contribution**

**Likely question:** What could you do in your first weeks?

**Short answer:** Understand one task, reproduce the current setup, agree on success criteria, and help instrument repeatable tests.

**Open the detail:** “Let me show the first weeks detail.”

**Reasoning**

- Start from the team’s actual priority.
- Use a small concrete experiment to learn the interfaces.

Diagram: Understand workflow → Reproduce + instrument → Measure one failure mode

**Return to the main thread:** “That is the integration and testing approach I'd bring to the team.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 30/d2 — Integration / testing

[Open this view](index.html#s30/d2) · **Project evidence**

**Likely question:** What is your strongest evidence for that?

**Short answer:** The rover chain combines external vision, command conversion, timing instrumentation and repeated physical trials.

**Open the detail:** “Let me show the integration / testing detail.”

**Reasoning**

- It is a small research testbed.
- The engineering process is transferable, while the industrial stack will be new.

Media: `assets/images/system.jpg` — Evidence already shown: integrated physical testbed

**Return to the main thread:** “That is the integration and testing approach I'd bring to the team.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 30/d3 — Learning needs

[Open this view](index.html#s30/d3) · **Personal learning boundary**

**Likely question:** What do you still need to learn?

**Short answer:** I need hands-on experience in compliant manipulation, task-specific grasping and reliable execution on the team’s platforms.

**Open the detail:** “Let me show the learning needs detail.”

**Reasoning**

- I have control foundations and experimental habits.
- I do not claim a deployed impedance controller.


| Current evidence | Next learning |
| --- | --- |
| Navigation integration | Manipulation interfaces |
| Calibration / measurement | Contact / force behavior |
| Repeatability analysis | Industrial failure recovery |

**Return to the main thread:** “That is the integration and testing approach I'd bring to the team.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 30/d4 — Project alignment

[Open this view](index.html#s30/d4) · **Conditional preparation**

**Likely question:** Could you align the G1 project with our priorities?

**Short answer:** I could discuss a focused, useful direction with my supervisor, subject to the academic scope and available equipment.

**Open the detail:** “Let me show the project alignment detail.”

**Reasoning**

- I would first understand your actual needs.
- I would not promise that a policy transfers directly.

Diagram: Discuss team priority → Agree academic feasibility → Define a focused experiment

**Return to the main thread:** “That is the integration and testing approach I'd bring to the team.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 31/d1 — Six months

[Open this view](index.html#s31/d1) · **Availability**

**Likely question:** What availability are you proposing?

**Short answer:** I am proposing a six-month internship starting in February 2027, as discussed in the first interview.

**Open the detail:** “Let me show the six months detail.”

**Reasoning**

- Confirm the exact dates with the team and school.
- The engineering goal should fit the agreed internship duration.


| Proposed duration | Start discussed |
| --- | --- |
| Six months | February 2027 |

**Return to the main thread:** “I'd like to hear more about the challenge you have in mind.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

### 31/d2 — Questions for the team

[Open this view](index.html#s31/d2) · **Discussion questions**

**Likely question:** What would you like to understand next?

**Short answer:** I would like to understand the concrete task, the main current failure mode, and how the team measures progress.

**Open the detail:** “Let me show the questions for the team detail.”

**Reasoning**

- That helps connect my contribution to a useful experiment.
- These questions open discussion after the closing statement.


| Question | Purpose |
| --- | --- |
| What task matters first? | Choose useful scope |
| Where does execution fail? | Focus diagnosis |
| What defines progress? | Agree measurable goals |

**Return to the main thread:** “I'd like to hear more about the challenge you have in mind.”
Press Escape, choose Overview, or click Back to slide. Continue with the parent slide’s transition.

## Rehearsal calibration

Run the main presentation once with a clock. Mark each section boundary at 1:00, 15:45, 18:15, 19:45 and 20:45. Use the 15-second DesCartes excerpt with sound, the two 10-second video windows and all visual pauses as budgeted. If a question interrupts, pause the main rehearsal clock or record the interruption separately. Adjust the wording after a real rehearsal; word counts are only a preparation check.

Content is synchronized with `deck.json`; `tools/content.py` is the editable authority. Rebuild with `python3 tools/build.py`.
