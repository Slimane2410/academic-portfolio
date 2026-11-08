# V1 validation — November 7, 2026

The presentation was opened and exercised locally. No publishing or push was performed.

## Timing and content

- 30 main slides; 112 optional internal views; 142 content views including Overviews.
- Main budgets: introduction **60 s**, Singapore **840 s**, FANUC **150 s**, G1 **90 s**, closing **60 s**; total **1,200 s / 20:00**.
- The main wording has 2,208 counted words. The timing includes **59 s of planned silence**: two 10-second clips and 39 seconds of visual pauses. This is a rehearsal target, not a certified delivery time.
- IDs, titles, timing, exact transitions and all 114 optional answers are generated from the same content source. The last spoken sentence matches the requested sentence exactly.
- No bicopter content is in the runtime or oral guide. No final appendix sequence exists. No fine-tuned or deployed G1 result, verified FANUC ROI, or implemented Nav2/MPC is claimed.

## Runtime and navigation

Chromium checks covered all 30 main slides at **1920×1080** and **1440×900**, and every one of the 114 detail buttons. WebKit received a file-opening, deep-link and keyboard-return smoke check; this is not a claim of a complete Safari-device test.

- Every detail opens in its parent frame, retaining the title, ID, counter and progress.
- Every Back to slide button returns to Overview and restores focus to its opening tab.
- Escape return, manual keyboard tab activation, Page Up / Down, main-slide reset, index opening/closing and direct `#s19/d3` linking passed.
- The index contains exactly 30 main entries. Slide 30 shows **30 / 30**, **100%**, and disabled Next; Previous is disabled on slide 1.
- Fullscreen was entered and exited through the button. An index jump to slide 30 opened its Overview.
- No duplicate DOM IDs, JavaScript errors, missing images or failed requests in the final Chromium file run.
- HTTP loopback opening also passed. Inter and Manrope both loaded locally. Runtime HTML/CSS/JS contains no external request URL.

## Videos and media

- PACO physical source: `paco-showcase/assets/video/anticollision_multi_agent_v01.mp4`, 11.266016 s; visible main window **0–10 s**.
- FANUC source: the existing `diaporama_v1/presentation_html/assets/fanuc-excerpt.mp4`, 10 s. The original presentation documents this as **6–16 s of the full original**; the copied clip's visible window is **0–10 s**.
- Both clips decoded and played locally. Hidden-view stop, replay and automatic end-window pause passed. The shared pause function also runs on slide change, document hiding and window blur.
- All 33 copied/rasterized media in `assets/MEDIA_MANIFEST.json` exist and match their recorded checksums. No synthetic image is used as experimental evidence.

## Visual inspection

All 30 main slides were reviewed through browser captures. Representative details included architecture, cost/constraints, compact potential, Euler code, supplier firmware, parallax, timing, repeatability, FANUC gripper reasoning and G1 status/transfer. The added parallax diagram was separately reviewed at 1440×900.

The final geometry checks found **no content outside its view frame** in either main-slide viewport or in any detail at 1920×1080. Tables, code and equations use editable text. Analytical diagrams are labeled as explanatory; measured figures retain their provenance. Font preloads were removed after a file-navigation request issue; CSS font loading passed in the final run.

## Repository and source preservation

- The first presentation's 42 files were compared with a pre-authoring SHA-256 snapshot: **42/42 byte-identical**.
- The portfolio's `ruby tools/validate-local-links.rb` passed for its 38 checked files. That existing checker is supplemented by the deck-specific checks below; it does not replace them.
- `python3 tools/validate.py`, `node --check app.js`, `node --check content.js` and `git diff --check` passed.
- Changes created for this task are confined to `Presentations/presentation_interview_Binabik/interview_2/`. A separately appearing untracked source-folder note was preserved without modification.

## Repeat checks

```bash
python3 tools/build.py
python3 tools/validate.py
node --check app.js
node --check content.js
```

The browser test is retained in `tools/browser-check.cjs`; it requires an existing Playwright installation and installed browsers. Point `PLAYWRIGHT_MODULE` to that module if it is outside this folder. Screenshots go to the system temporary directory by default. The run record is in `validation/browser-results.json`.

Remaining factual checks are limited to the final section of `SOURCES_ET_VERIFICATIONS.md`: precise personal allocation, unresolved FANUC design details, newer G1 progress, and the exact flashed motor-firmware build. They do not prevent local use of this V1.

## Follow-up edit — numbered navigation

- The header on all 30 slides now reads **TECHNICAL INTERVIEW**, without the final 2.
- Thirty persistent number buttons open their matching slide Overview and highlight the active number. All 30 buttons were clicked at 1920×1080 and 1440×900.
- Project timeline and its question were removed. My background retains its existing `#s01/d2` link; the deleted `#s01/d1` resolves to Overview.
- The synchronized guide and evidence mapping now contain 114 optional details. Main timing remains 1,200 seconds.
- Chromium: no main/detail overflow, missing images, failed requests or JavaScript errors. WebKit smoke passed.

## Opening visual — first-presentation composition

Slide 01 now reuses the first deck’s rover + Unitree G1 composition, with the original local photographs and the captions “Software + physical hardware”, “Collision avoidance · Singapore / Research internship”, and “Unitree G1 / Ongoing VLA project”. The first deck remains unchanged.

Focused Chromium checks at 1920×1080 and 1440×900 passed: both images decoded; visual and captions fit the frame; numbered navigation and Overview return worked; no JavaScript errors. The final opening screenshot was visually inspected.

## Follow-up edit — simplified navigation

The persistent 1–30 button row and its extra footer space were removed. The wheel/trackpad slide-change handler was deleted. Scrolling no longer changes the main slide or its selected detail. Arrow controls, keyboard navigation and the slide index remain available. Earlier numbered-navigation checks above describe the previous revision.

## My background — three education pillars

The `s01/d2` view now uses three full-width columns: Prépa, Arts et Métiers, and Sorbonne Université. The audience view contains only the approved education labels and short supporting text, plus Back to slide; the question and longer explanation remain in the oral guide. The new renderer is selected only by the `education-pillars` visual type.

Focused Chromium checks passed at 1920×1080 and 1440×900: no overflow or clipped text, three columns present, no visible question/old paragraph/vertical diagram, working `#s01/d2` deep link, Back and Escape returns with focus restoration. Another detail retained its normal question layout. No JavaScript errors. The final 1920×1080 capture was visually inspected. Thirty main slides and the 1,200-second main budget remain unchanged.

## Compact upper-right tabs

All 30 main slides now place Overview and detail tabs in the upper-right corner, with 14 px type, smaller spacing and padding, transparent inactive backgrounds, and a subdued blue selected state. The slide ID sits below the tab row beside the title.

At 1920×1080 and 1440×900, all 30 tab bars fit without overlapping titles, section labels or slide IDs. Tab activation, Escape, focus restoration, the 114 detail views, local videos and WebKit smoke checks passed; no JavaScript errors or missing media. The opening capture was visually reviewed. The full checker’s only overflow warning is the existing intentional 500 px G1 image crop within its 220 px container; its caption and frame remain fully visible.

## Slide 02 — requested image replacements

Singapore now uses the local copy `assets/images/arena.jpg` of `paco-showcase/assets/images/arena_overview_v01.jpg`. The G1 image supplied on the Desktop was copied byte-for-byte to `assets/images/g1-portrait-user.png` and used only in slide 02. Its original source is preserved and the manifest records the path and checksum.

Both images decoded locally and the slide fit without overflow at 1920×1080 and 1440×900. The final screenshot was visually reviewed. The new G1 portrait is an illustration of the platform, not experimental evidence from the ongoing project.

## Slide 02 — FANUC screenshot

The user’s screenshot was copied unchanged to `assets/images/fanuc-cell-user.png` and replaces only the FANUC project image on slide 02. The media manifest records the exact Desktop source and SHA-256. The frame uses a centered CSS cover crop. Local decoding, layout checks at 1920×1080 and 1440×900, and visual inspection passed.

## Slide 02 — remove two internal views

Completed vs ongoing (`s02/d2`) and My contribution (`s02/d3`) were removed from the editable source, runtime, guide and mapping. Slide 02 retains Overview and Why these projects?. The deck still has 30 main slides and a 1,200-second main budget; the optional-detail count is now 112. Focused Chromium checks passed for the remaining detail, Escape, counter, and fallback to Overview from a removed detail link.

### Slide 03 — DesCartes excerpt (2026-11-07)
- Replaced the main photograph with a local 15-second H.264/AAC MP4 derived from the supplied MOV; original MOV preserved. Added a discreet full-video YouTube link.
- Chromium playback verified: unmuted, volume 1, no media error, automatic stop at 15 s, replay, pause on internal-view change, Escape back to Overview. No JavaScript errors.
- Visually inspected at 1920×1080 and 1440×900; video and source link fit within the slide.
- Guide, source audit and media mapping regenerated; 30 main slides, 112 internal views, 1,200 seconds and original section budgets preserved. Slide 03 remains 30 s, including the 15 s excerpt; its spoken target is 144 words/minute and needs rehearsal.
- Official DesCartes program and demo pages checked for the digital-twin / drone context. The excerpt is program context, not footage of the candidate's own experiment.

### Full DesCartes clip retained
- User requested full playback while retaining the displayed/spoken “15 seconds” wording. Removed the temporal trim during transcoding and extended the playback endpoint to the full MOV duration (18.428333 s; MP4 container 18.444 s).
- Private timing data records the actual video duration. Main slide target remains 30 s and total target 1,200 s; this makes slide 03's spoken pacing tighter and should be checked at rehearsal.

### Slide 04 — large simulation video (2026-11-08)
- Replaced the explanatory arena diagram with the complete user-selected simulation_lagrange_newton_v01.mp4 (19.233333 s, 1920×1080, silent). Unchanged local copy and poster are included in assets.
- Removed the large-note sentence and hid slide 04's footer to maximize video area; global navigation counter and internal tabs remain.
- Visually inspected at 1920×1080 and 1440×900, with full frame preserved (contain). Chromium playback, pause on internal-view change, Escape return and absence of JavaScript errors verified.
- Guide explicitly introduces the visual as simulation and calls for narration during playback; no added silence or change to the 1,200-second main budget.

### New slide 05 — Defining success (2026-11-08)
- Added a 45-second main slide after slide 04: circular safety envelopes, edge-to-edge clearance, binary safety / arrival indicators and their product. Definitions checked against draft equations (1)–(4) and cost.py surface_clearance.
- Removed Robot geometry, Clearance and Goal and success from slide 04; Independent agents remains. Renumbered former slides 05–30 to 06–31, including scoped styling, guide links, index, footer, End key and regression fixtures.
- Current target: 31 main slides, 109 internal views, 1,245 s (20:45). Section targets: 60 / 885 / 150 / 90 / 60 s. User explicitly deferred compression to 20 minutes.
- Full browser regression: all main slides at 1920×1080 and 1440×900, all 109 internal views, focus restoration, counters, index, keyboard, no wheel navigation, video controls; Chromium passed, WebKit smoke passed. No JavaScript errors or missing images. Sole geometry flag remains the intentionally cropped G1 image on slide 01.
- Current browser results saved in validation/browser-results.json. New slide visually inspected; equations and labels fit.

### Removed slide 04 Independent agents view (2026-11-08)
- Removed the last internal view of slide 04; its main simulation video remains. Regenerated guide, mapping and audit. Current count: 31 main slides, 108 internal views, 1,245-second target.
- Targeted Chromium check: slide 04 has Overview only and retains its video; deleted #s04/d1 falls back to Overview, counter stays 04 / 31. Structural/media/document validation passed.
