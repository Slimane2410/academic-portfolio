# Binabik AI — Application Strategy and Evidence

Prepared: 25 October 2026. CV project selection revised: 27 October 2026. English application materials; six-month, full-time internship starting February 2027.

## Company Information

- **Public name:** Binabik AI. **Swiss legal name:** Binabik AG, as reported in the supplied research from registry-derived sources; no legal filing independently retrieved for this package.
- **Location:** Winterthur, Switzerland; the official contact page publishes Technoparkstrasse 2 / Trakt B, 8406 Winterthur, with a second office in Espoo, Finland.
- **Website:** https://binabik.ai/
- **Core activity:** A software intelligence platform for humanoids and mobile manipulators in existing industrial environments, particularly machine tending and box handling. This is the company's stated product scope, not independently verified production performance.
- **Relevant technology:** Reusable robot skills, learning from demonstrations, industrial workflow integration, and edge/on-premise deployment. The Academy advertises Unitree G1 teleoperation, demonstration-data preparation, simulation, and VLA policy training/inference.
- **Research input:** [Company_Research_Binabik_AI.md](Company_Research_Binabik_AI.md), supplied research dated 25 October 2026. Preserved unchanged, including its original source classifications.

## Application Type

**Speculative Internship Application — No specific advertised position targeted**

The official careers page was checked on 25 October 2026 and states that no positions are currently open, while explicitly accepting spontaneous applications at `careers@binabik.ai`. No internship availability is assumed.

The research's earlier Robotics Research Engineer, Forward Deployed Robotics Engineer, and Master Thesis teleoperation/data-generation advertisements are contextual recruitment evidence only. Their technical requirements and their present availability were not independently revalidated here; none is treated as an open role or targeted vacancy.

## Proposed Internship Positioning

- **Primary:** Perception and localization for autonomous mobile robotics, with motion-planning experience and current state-estimation/SLAM coursework.
- **Complementary:** Humanoid robot learning and VLA integration, grounded in the ongoing Unitree G1 semester project rather than completed policy training.
- **Supporting capability:** Instrumented robot integration, debugging, repeatable physical experiments, and numerical/software tests. These support engineering development rather than define a testing-only application.
- **Duration/start:** Six months, full time, February 2027. This explicit current instruction overrides the portfolio's older January availability.
- **Potential technical contact:** Pascal Sager, co-founder and CTO; the official team page verifies his role and address. No formal perception team, internship supervisor, reporting relationship, or official job title is inferred.

The primary direction follows Slimane's preferred contribution order and strongest demonstrated work. Binabik's public emphasis is broader humanoid automation and robot learning: localization and planning are a plausible contribution to mobile robots, not a confirmed internal hiring need. The VLA complement is particularly relevant because the Academy explicitly describes the G1 demonstration-to-policy workflow.

### Central narrative

Making robots useful around existing industrial machines requires connecting perception and decisions to real hardware. Slimane's measured camera-localization and mobile-navigation work provides a credible foundation for autonomy development; his ongoing G1 VLA project connects that foundation to learning-based manipulation. Individual impact experimentation and Python video analysis add measurement and data-analysis depth; physical manufacturing/metrology adds process understanding.

### Strategic technical concepts

| Concept | Company basis | Candidate evidence and limit |
|---|---|---|
| Visual perception and localization | Relevant to mobile humanoid operation; exact internal pipeline unknown | Demonstrated OpenCV/ArUco localization with an external overhead camera |
| Camera calibration and geometric error | Proposed contribution to robot perception; no specific company calibration problem asserted | 20 ChArUco views, 0.191 px reprojection RMS; independent ground-grid error 36.3 to 5.8 mm |
| Navigation and motion planning | Mobile platforms in product descriptions; algorithms and specific needs undisclosed | Implemented trajectory optimization and feedback navigation; current SLAM coursework |
| State estimation | Candidate interest; no company EKF/SLAM stack confirmed | Current Bayesian estimation, EKF/UKF and particle-filter coursework, not deployed sensor fusion |
| Vision-Language-Action policies | Official careers and G1 Academy programme | Ongoing project; OpenPI fine-tuning remains a target |
| Teleoperation and demonstrations | Explicit Academy curriculum and historical recruitment context | Planned/current G1 project direction; no acquired dataset or operational teleoperation result documented |
| Imitation learning and multimodal data | Academy's demonstration-to-policy workflow | G1 project targets language, RGB/RGB-D and actions; no trained policy claimed |
| Real-robot integration and timing | Official careers describes work on physical platforms | Integrated camera, localization, serial control and logs at 19.84–19.86 Hz median |
| Reproducible experiments and debugging | Proposed way to support real-robot development | Two frozen 20-run physical campaigns, 39 paired physical/digital-twin runs, co-developed pytest checks |
| Physical measurements and metrology | Proposed support for measured robot development and industrial process understanding | Individual TIPE impact rig and Python video analysis; manufactured and CMM-inspected bearing-support part |

These are relevance concepts, not an invented ATS specification. ROS 2 is a public technology/recruitment theme in the supplied research; Slimane's use remains current coursework. No ROS 2 production experience is inferred.

## Company–Candidate Fit

| Matching point | Documented candidate evidence | Potential contribution, not an offered project |
|---|---|---|
| Perception linked to physical behaviour | Team visual-localization pipeline; mean independent ground-grid error reduced 84%, 36.3 to 5.8 mm | Camera/localization work and diagnosis of geometric errors in mobile-robot tasks |
| Planning connected to a running robot | Integrated navigation loop, 19.84–19.86 Hz medians; 40/40 arrivals with zero collisions on two frozen tasks | Motion-planning and robot-software integration under sensing/timing constraints |
| G1 and learning-based manipulation | Current Sorbonne project supervised by Prof. Olivier Bruneau, targeting G1, teleoperation, multimodal datasets and OpenPI adaptation | Contribute to demonstration preparation or policy integration while learning the company's tools |
| Measured development feedback | 39 paired physical/digital-twin runs and co-developed pytest unit/regression checks | Instrument experiments, inspect logs and evaluate changes reproducibly |
| Individual experimental analysis | TIPE: 46 cm pendulum-style rig, four contact geometries, Python pre/post-impact regressions and position-uncertainty plots; 4.0 m/s ball exit speed from a 2.2 m/s impactor in the specified 12 mm-cylinder, 3 psi test | Design controlled measurements and interpret experimental data |
| Industrial process context | Physical casting/machining and CMM inspection of four tolerances | Understand measurement-driven debugging and process constraints |

The rover results are collaborative and concern a controlled arena, not general industrial reliability. A 0.191 px reprojection RMS, 5.8 mm ground-grid error and 11.6 mm elevated-marker error are separate measurements. Experience on a rover or an impact-testing rig does not establish deployed humanoid manipulation expertise.

## Resume Tailoring Strategy

- **Starting source:** Only `CV_reference/V8.5_Resume_AOUANOUK_Slimane.tex`; copied into a new application file. Document class, 10 pt typography, geometry, section style, colours, hyperlink conventions and spacing settings retained.
- **Opening:** Exact required availability sentence retained immediately beneath the contact header. The summary contains no company name and prioritizes visual localization, motion planning, mobile robotics, and the ongoing G1 project.
- **Protected research:** The complete linked Paris/Singapore entry, institution/supervisor line and all eight bullets are retained byte-for-byte from V8.5, in the original order. No research bullet was adapted.
- **Selected VLA:** **Long, four-bullet version**, copied exactly from `Applications/25_Duatic/Resume_Slimane_AOUANOUK_Duatic.tex`. The short source at `Applications/LATER/27_Volorio/Resume_Slimane_AOUANOUK_Voliro.tex` was also read. The long version is warranted by Binabik's explicitly documented G1/VLA, teleoperation, demonstration-data and manipulation activities, rather than by space alone. Title, date, supervision, wording, bullet order and emphasis are unchanged. Development, fine-tuning and evaluation remain ongoing/targeted, not completed outcomes.
- **Selected TIPE:** Replaced the previous industrial-robot entry with the TIPE presentation from `Applications/30_Sunflower_labs/Resume_Slimane_AOUANOUK_Sunflower_Labs.tex`, as explicitly requested on 27 October 2026. The full source block overflowed to two pages; condensed only the TIPE into two bullets, retaining the individual rig, 46 cm length, four contact geometries, Python/NumPy/SciPy/Matplotlib analysis, pre/post-impact regressions, position uncertainty and the scoped 4.0/2.2 m/s measurement. Omitted the separate subtitle and restitution-model discussion to retain one page. The named source supplies the detailed TIPE facts for this revision; older generic TIPE summaries do not override it.
- **Retained supporting project:** Foundry, Machining and Metrology, explicitly physical team work with four inspected tolerances and two nonconformities.
- **Removed:** The reference turbine entry and inactive commented project/volunteering blocks. The selected TIPE adds individual experimental/Python evidence alongside manufacturing/metrology. Other mechanical projects, CNAM and leadership are omitted to keep the protected research and long VLA readable on one page.
- **Education:** Current robotics/estimation/learning coursework condensed; ENSAM course list focused on relevant engineering subjects. Rank and dates retained. Combined GPA explicitly scoped to CPGE–ENSAM.
- **Skills:** Python, NumPy/SciPy, pytest, OpenCV/ArUco, calibration, motion planning, robot integration and CMM. ROS 2, SLAM, Bayesian estimation, PyTorch and Linux explicitly labelled current coursework. CAD and Simulink retained as supporting engineering tools.
- **Exclusions:** Applied all user-specified project exclusions throughout the CV, email and narrative, including indirect project-derived skill claims. The default solver-name omission in Skills is respected. No GitHub profile or private research-repository link appears in recruiter-facing materials.
- **Order:** Education, protected research, long VLA, TIPE, manufacturing/metrology, skills. The narrative remains autonomy-first, with robot learning as a close company-specific complement.

## Email Strategy

- **To:** `pascal@binabik.ai`, publicly listed on the official team page and the CTO's personal site.
- **Recipient:** Pascal Sager, co-founder and CTO. His stated responsibility for learning architecture, data strategy and engineering makes him relevant to the proposed direction; his website also invites joining-Binabik inquiries.
- **Alternative official channel:** `careers@binabik.ai`, confirmed by the careers page. No additional recipient or CC is needed in this primary draft.
- **Company-specific hook:** The Academy's published Unitree G1 VLA programme: teleoperation, demonstrations, learning and real-robot execution. The email does not claim that Slimane attended it or that its advertised outcomes were independently observed.
- **Evidence:** Collaborative Paris/Singapore mobile-robot work and one selected numerical result, the 84% reduction in mean calibration-grid error. The first-author manuscript remains under journal review. The project is introduced before the descriptive video/project link.
- **Interest order:** Navigation/localization/planning, current state-estimation/SLAM studies, then ongoing G1/VLA work, then logs and physical tests. Explicit openness to other suitable roles avoids assuming a particular opening or internal team need.
- **Voice:** Followed `z_skills/REDACTION_MAIL_STARTUP.md`, the startup-email-voice guide and the supplied LOXO-style example. Personal interest in making real robots work, rapid learning, close collaboration and possible continuation after graduation is expressed as motivation, not a company promise.
- **Call to action:** Ask whether a suitable internship could exist and invite a brief discussion. Six months, full time, February 2027; correct PDF attachment named. Two useful links only: project breakdown/videos and portfolio.
- **Delivery:** One local, ready-to-copy English draft. No email sent and no online mail draft created.

## Skill Gaps and Uncertainties

- **Candidate gaps:** Production ROS 2/C++ development, deployed SLAM/sensor fusion, manipulation kinematics and humanoid interfaces, operational Unitree teleoperation, VLA training, retargeting and policy deployment are not established by the current evidence. Current courses and project targets are labelled accordingly; no unsupported skill is added.
- **G1 maturity:** No selected task, available hardware configuration, collected dataset, trained checkpoint, completed deployment, generalization result or achieved performance metric is documented. MuJoCo/Isaac and motion capture remain exploratory/envisaged in the protected source wording.
- **Software tests:** Research unit/regression tests are supported; a file inventory is not a current pass count or CI/CD result. No new robotics tests or simulations were run for this application.
- **Company unknowns:** Exact private algorithms, models, SLAM/estimation stack, data schemas, hardware configuration, customer deployments, performance, internship capacity, supervision and conversion prospects remain unknown. Company marketing claims are not treated as independently validated outcomes.
- **Historical research details:** The supplied company research refers to portfolio V1.7 and contains older candidate recommendations; V1.8 and the explicit current request govern this package. Detailed architecture descriptions attributed to the CTO in that research are retained as research context, not presented as freshly reverified product internals.
- **Protected experience discrepancy:** No material contradiction found between the exact V8.5 block and the current specialized PACO evidence. Older generic authorship/publication notes in V1.8 are explicitly superseded by the October 19 confirmation and the specialized evidence bank.
- **Administrative scope:** Work authorization, internship agreement, compensation and exact placement arrangements are not asserted.

### Clarifications that could strengthen a later revision

1. **Practical ROS 2:** Which nodes, topics, transforms or bag-recording tools has Slimane personally implemented in current Mobile Robotics work, rather than only studied? A runnable repository, launch file or recorded experiment would justify a specific hands-on claim relevant to robot integration.
2. **Current G1 progress:** Has Slimane personally set up a robot/simulator interface, recorded demonstrations or implemented preprocessing since the portfolio snapshot? Code, dataset schema, logs and exact personal responsibility would justify a more specific email claim, while retaining the mandated VLA block unless explicitly authorised otherwise.

These questions do not block the completed evidence-bound application.

## Sources

### Local candidate and writing sources

- `CV_reference/V8.5_Resume_AOUANOUK_Slimane.tex` — sole resume base and exact protected research wording.
- `documentation/V1.8_PORTFOLIO_CONTEXT.md` — latest authoritative context, especially §§0–4, 6, 7.1, 7.6–7.7, 7.17, 8–9 and 17.
- `documentation/PACO_CV_EVIDENCE_BANK.md` — publication/attribution, vision and calibration, timing, physical campaigns, digital twin, software/testing, central metrics and claim boundaries.
- `Applications/25_Duatic/Resume_Slimane_AOUANOUK_Duatic.tex` — exact long VLA block only, rechecked on 27 October 2026.
- `Applications/30_Sunflower_labs/Resume_Slimane_AOUANOUK_Sunflower_Labs.tex` — user-nominated TIPE wording and detailed experimental facts for the 27 October revision; condensed only where needed for the one-page layout.
- `Applications/LATER/27_Volorio/Resume_Slimane_AOUANOUK_Voliro.tex` — short VLA alternative reviewed, not used as a template.
- `z_skills/REDACTION_MAIL_STARTUP.md` and `Applications/21_Loxo/EMAIL_DRAFT.md` — mandatory writing guide and designated email example; old availability, file names or employer facts were not transferred.
- [Company_Research_Binabik_AI.md](Company_Research_Binabik_AI.md) — complete company research read before drafting; its primary/secondary source classifications retained.

### Official sources checked on 25 October 2026

- [Product](https://binabik.ai/) — industrial machine tending/box handling, mobile humanoids, reusable skills and deployment claims.
- [Team](https://binabik.ai/team) — Pascal Sager, CTO, and verified professional email; spontaneous application channel.
- [Careers](https://binabik.ai/open-positions) — no current openings; spontaneous applications welcomed.
- [Contact](https://binabik.ai/contact) — Winterthur and Espoo offices.
- [VLA with Humanoid Robots](https://academy.binabik.ai/courses/vla-humanoid-robots) — advertised G1 programme, teleoperation, data preparation, simulation and VLA; advertised dates 22–24 September 2026, actual delivery not independently verified.
- [Pascal Sager](https://sagerpascal.github.io/) — co-founder/CTO, learning/data/engineering responsibility and invitation to contact him about joining Binabik.

## Validation

Validation rerun on 27 October 2026 after the TIPE replacement.

- **Compilation:** Two final `pdflatex` passes completed successfully; final log has no warnings, overfull/underfull boxes, missing-character messages or errors.
- **PDF:** Exactly one US Letter page (612 × 792 pt), verified with `pdfinfo`. Original 10 pt typography and reference geometry/spacing settings retained.
- **Visual inspection:** The final rendered PNG was inspected after the last source change. Sections, text and links are legible, with no clipping, overlap or large bottom gap. The text span covers approximately **98.85% of the reference usable page height** (top 15.85 pt, bottom 761.76 pt; usable height 754.56 pt), corroborating the visual fullness check.
- **Text and fonts:** `pdftotext -layout` confirms selectable/extractable content, availability, dates and key metrics; `pdffonts` confirms all fonts are embedded with Unicode mappings. Decorative Font Awesome icons can extract as nonsemantic glyphs; names, contact text and technical content remain extractable.
- **Links:** PDF contains six expected URI annotations: email, LinkedIn, portfolio, research showcase, TIPE and manufacturing/metrology. Original portfolio/research/manufacturing links were checked on 25 October; the TIPE URL is inherited from the user-nominated source and returned HTTP 200 on 27 October 2026. LinkedIn returned its automated-access HTTP 999 response, so live profile accessibility could not be confirmed; the reference's original URL was preserved. Mailto address matches the verified candidate email.
- **Protected research:** All 2,114 bytes of the complete eight-bullet entry match V8.5 exactly. SHA-256: `fb1137bbb5477021fb33dfb85fb062672da066678f993b81c1d0fda5040d71f8`.
- **VLA:** All 990 bytes of the title, date, supervision and four-bullet long block match the Duatic source exactly. SHA-256: `dfe39c2af74107e67b3beb3bd93f1ce904300170047867d4f6f7698e9fa9e11d`.
- **Content checks:** Exact availability sentence and placement confirmed; no target-company name in the introduction; all project exclusions respected; default omitted solver name absent from Skills; current-course labels retained.
- **Email review:** One speculative English draft, approximately 343 words including greeting/signature; verified recipient, correct attachment, two contextual links, coherent evidence, ordered contribution interests and explicit openness to other roles. Reviewed against the PDF; no completed G1 deployment or advertised internship is implied. **Not sent.**
- **Input preservation:** SHA-256 comparisons confirm V8.5 `.tex` and `.pdf`, V1.8 context, PACO evidence bank, both VLA source resumes and supplied company research are unchanged.
- **Version-control scope:** Current branch `main`; the revision includes only the tailored `.tex`, recompiled `.pdf` and this strategy note. The email, company research, reference resume and source application resumes remain unchanged.

### Deliverables

- [Tailored resume PDF](Resume_Slimane_AOUANOUK_Binabik_AI.pdf)
- [Editable LaTeX source](Resume_Slimane_AOUANOUK_Binabik_AI.tex)
- [Ready-to-copy email draft](EMAIL_DRAFT.md)
- This strategy and evidence note, `APPLICATION_INFO.md`.
