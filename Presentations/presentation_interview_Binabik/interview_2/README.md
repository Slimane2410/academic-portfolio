# Binabik — technical interview 2

Editable V1 · 31 main slides · 108 optional detail views · 20:45 current main target.

## Open

Open **`index.html`** in a modern browser. The bundle includes its fonts, images and four video clips. No network connection or build step is needed to present.

For a local server, from this directory:

```bash
python3 -m http.server 8872 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8872/>. Use **F** or the fullscreen button. The stage keeps a 16:9 ratio, including on a 1440×900 screen.

## Navigate

- **← / →**, **Page Up / Page Down**, **↑ / ↓**: move between main slides. Space advances when focus is on the slide itself.
- The compact tabs in the **upper-right corner** open Overview and the optional details.
- **Overview**: the current slide's main content. A detail tab opens inside this same slide.
- **Escape** or **Back to slide**: close a detail and restore focus to its opening tab. The title, ID, main counter and progress stay fixed.
- When a tab has focus, **← / → / Home / End** moves tab focus. **Enter / Space** opens the focused tab. Page Up / Page Down still moves between main slides.
- **O** or the grid button: main-slide index. It contains 31 entries. Escape closes it and restores focus.
- **Home / End** outside the tab strip: first / last main slide.
- **F** or the fullscreen button: fullscreen on / off.
- Click **Play / Pause / Replay** on a video. The DesCartes excerpt plays in full with sound; its displayed label remains “15 s.” The physical-test and FANUC clips each use a muted 10-second window. Changing views, slides, tabs or window focus pauses playback. Slide 04 plays the full simulation clip while you explain it. Clips do not autoplay.

Scrolling or swiping the trackpad does not change slides.

Normal navigation always opens the destination's Overview. Details are never additional main slides. Direct links are stable: `index.html#s19` and `index.html#s19/d3`.

## Rehearse

Read **`GUIDE_ORAL_INTERVIEW_2_BINABIK.md`**. It has the main wording, exact transitions, section timing, video/silence windows, and optional Q&A for all 108 details. Target boundaries are 1:00, 15:45, 18:15, 19:45 and 20:45. Rehearse with a clock: the budget is a target, not a certified duration.

The final spoken sentence is preserved exactly. Optional answers and questions are outside the main presentation.

## Edit and rebuild

- **`tools/content.py`**: editable titles, timings, main wording, details, evidence and media choices.
- **`app.js`**: rendering, explanatory diagrams and navigation.
- **`styles.css`**: the existing presentation's Inter/Manrope theme, adapted to internal views on every slide.
- **`assets/`**: local media and fonts. `MEDIA_MANIFEST.json` records original paths and media checksums.

After editing content:

```bash
python3 tools/build.py
python3 tools/validate.py
node --check app.js
node --check content.js
```

`build.py` uses the Python standard library and generates `deck.json`, `content.js`, the oral guide, the enriched fil rouge and the private evidence matrix. `deck.json` is a readable snapshot; edits there are overwritten by the build. Do not edit generated documents without also changing the content source or generator.

## Files for preparation

- **`FIL_ROUGE_INTERVIEW_2_BINABIK.md`**: supplied brief, corrected final decisions, final storyboard and real media mapping.
- **`GUIDE_ORAL_INTERVIEW_2_BINABIK.md`**: main delivery and optional answers, in English.
- **`SOURCES_ET_VERIFICATIONS.md`**: private evidence/attribution audit. It is not loaded into the presentation.
- **`VALIDATION.md`**: focused runtime, media and visual checks.
- **`SPEECH_CALIBRATION.json`**: word-count preparation data. It does not certify oral timing.

The first presentation is preserved. This task creates a local bundle; nothing is published or pushed. No PDF is included; the interactive HTML is the presentation authority.
