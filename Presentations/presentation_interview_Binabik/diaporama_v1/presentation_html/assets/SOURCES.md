# Source du visuel Unitree G1

- **Fichier local :** `unitree-g1-official.jpg`.
- **Origine :** boutique officielle Unitree, [fiche Unitree G1](https://shop.unitree.com/products/unitree-g1).
- **Image originale :** https://cdn.shopify.com/s/files/1/0620/4932/1193/files/1_968fd08b-9aaf-4f32-b895-5c786285ee52.jpg?v=1717575256
- **Consultation :** 28 octobre 2026.
- **Crédit :** Unitree Robotics.
- **Usage :** illustration du modèle de robot sur la slide d’ouverture. Ce n’est pas une photo du projet de Slimane.
- **Traitement :** fichier conservé à l’identique ; cadrage et intégration au fond clair réalisés uniquement en CSS. La photo de l’expérience rover n’est pas retouchée ni fusionnée avec ce visuel.

Les deux posters vidéo et l’extrait FANUC proviennent des enregistrements authentiques référencés dans le brief. Les licences des polices sont conservées dans `fonts/`.

## PACO paper figure f4 — slide 8

- Original supplied by Slimane: `/Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/redaction_V1/f4.pdf`.
- Preserved locally as `paco-f4-camera.pdf`; one page rendered to `paco-f4-camera.png` with Poppler (`pdftoppm -f 1 -singlefile -scale-to 2400 -png`), without cropping or altering its annotations.
- The paper caption identifies (a) the raw acquired overhead frame and (b) detected markers with identifiers, metric frame and reconstructed poses. The slide highlights the visible marker IDs and metric coordinates.

### Panel B reused on slide 9

`paco-f4-camera-b.png` is the right-hand image of the same preserved PDF, rendered with Poppler at `-scale-to 2400 -x 1224 -y 8 -W 1168 -H 1218`. Only panel B is retained, without the (a)/(b) labels or adjacent panel. Its original marker annotations are unchanged. It replaces the previous tracking thumbnail; the independent-grid error values remain documented separately.

## Multi-agent video poster — slide 11

`multi-agent-poster.jpg` is an authentic frame extracted at 0.5 seconds from `paco-showcase/assets/video/anticollision_multi_agent_v01.mp4`. The complete video lasts 11.266016 seconds and shows the mother rover among moving robots, as described in the PACO Showcase. The prior `avoidance-poster.jpg` is retained for slide 12.

## PACO paper figure f15 — slide 12

Original supplied by Slimane: `/Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/redaction_V1/f15.pdf`. Preserved as `paco-f15-repeatability.pdf`; rendered in full with Poppler at `-scale-to 2400` to `paco-f15-repeatability.png` without changing annotations. The paper caption describes twenty physical runs with one moving agent, arena trajectories and edge-to-edge clearances between conservative bounding discs. This figure illustrates one of the two blocks summarized by 40/40 on the slide.

## G1 illustration supplied by Slimane — slide 16

`unitree-g1-assistive-user.png` is the exact image attached by Slimane when requesting its use on slide 16 (1672 × 941 px). It illustrates the assistive-manipulation theme; it is not evidence of a completed project experiment. Preserved without image modification.

## Closing image supplied by Slimane — slide 20

`binabik-humanoid-user.png` is the exact image attached by Slimane for the replacement of the closing-slide rover image (1672 × 941 px). Preserved without image modification and displayed in full. It illustrates the intended company context; it does not document work already performed by the candidate.

## HumanoidMimicGen paper excerpts — appendix A2

Supplied PDF: `/Users/slimaneaouanouk/Zotero/storage/8FMF84SH/Lin et al. - 2026 - HumanoidMimicGen Data Generation for Loco-Manipulation via Whole-Body Planning.pdf`.

Lin et al., NVIDIA and The University of Texas at Austin, 2026. arXiv:2605.27724v1. Project: https://humanoidmimicgen.github.io/ .

Poppler render at `-scale-to 2400`:

- `humanoidmimicgen-title.png`: page 1, crop `-x 175 -y 120 -W 1350 -H 490`, retaining title, authors and affiliations.
- `humanoidmimicgen-overview.png`: Figure 1 on page 2, crop `-x 175 -y 250 -W 1350 -H 380`, retaining the complete overview and its own labels.

No figure annotations were modified. Section 6.1 and Table 1 substantiate one source demonstration to 1,000 generated trajectories per task in simulation. Real-world evaluation in section 6.4 uses additional real demonstrations for sim-and-real co-training. Appendix A2 presents a research discussion, not candidate implementation results.

## Research paper figures — appendix A3

The five source PDFs were supplied by Slimane in `/Users/slimaneaouanouk/Desktop/temp_papers`. Four figures were rendered directly with Poppler (`pdftoppm`, `-scale-to 2800`) and cropped to retain their complete visual content and labels; captions are replaced by explicit slide credits. No scientific annotation or result was altered. HumanoidMimicGen reuses the existing Figure 1 asset from A2 (`humanoidmimicgen-overview.png`).

| Asset | Paper | PDF page / figure | Crop x, y, width, height |
|---|---|---|---|
| research-openvla.png | Kim et al., OpenVLA, 2024, arXiv:2406.09246v3 | 1 / Fig. 1 | 370, 710, 1420, 770 |
| research-fact.png | Parés-Morlans et al., FACT, 2026, arXiv:2608.01402v2 | 4 / Fig. 2 | 390, 270, 1360, 285 |
| research-psi0.png | Wei et al., Psi-Zero, 2026, arXiv:2603.12263v1 | 3 / Fig. 2 | 170, 175, 1830, 490 |
| research-leverb.png | Xue et al., LeVERB, 2025, arXiv:2506.13751v3 | 2 / Fig. 1 | 440, 235, 1280, 850 |

Exact supplied source filenames:

- `/Users/slimaneaouanouk/Desktop/temp_papers/Parés-Morlans et al. - 2026 - Demystifying When and Why VLAs Fail in Contact-Rich Tasks and How to Fix Them.pdf`
- `/Users/slimaneaouanouk/Desktop/temp_papers/Xue et al. - 2025 - LeVERB Humanoid Whole-Body Control with Latent Vision-Language Instruction.pdf`
- `/Users/slimaneaouanouk/Desktop/temp_papers/Wei et al. - 2026 - $Ψ_0$ An Open Foundation Model Towards Universal Humanoid Loco-Manipulation.pdf`
- `/Users/slimaneaouanouk/Desktop/temp_papers/Kim et al. - 2024 - OpenVLA An Open-Source Vision-Language-Action Model.pdf`

A3 is a discussion of exploratory reading and personal interests, not candidate implementation results or a comparison of cross-paper benchmark scores.
