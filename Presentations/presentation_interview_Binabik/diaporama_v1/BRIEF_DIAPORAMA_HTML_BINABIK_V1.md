# Brief de génération — Diaporama HTML pour l’entretien Binabik

**Version :** 28 octobre 2026  
**Candidat :** Slimane AOUANOUK  
**Entretien :** 29 octobre 2026, échange introductif de 30 minutes avec Giovanni Toffetti  
**Livrable à générer ensuite :** une présentation HTML locale, visuelle, pilotée à la main et adaptée au partage d’écran.  
**Format retenu :** 20 slides principales, cible de **7 min 15**, plus 7 annexes pour les questions.  
**Langues :** consignes de ce brief en français ; slides et repères oraux en anglais américain.

> Ce document est le brief opérationnel de la V1. Il fixe les choix éditoriaux, visuels et fonctionnels pour que l’IA suivante puisse construire le diaporama sans refaire la sélection des projets. Il ne demande pas de modifier le portfolio existant.

## 1. Les décisions qui priment

- La demande actuelle de Slimane remplace la recommandation ancienne de 4–5 minutes et 3–4 slides : préparer **20 slides présentées en 6–8 minutes**, avec peu de texte et des changements de visuels fréquents.
- Suivre le fil rouge : **comprendre le besoin physique → concevoir → intégrer un robot réel → mesurer et améliorer → approfondir aujourd’hui la robotique en master SAR → rassembler ces acquis dans le projet VLA → contribuer à Binabik**. C’est une cohérence narrative, pas une chronologie causale stricte.
- Singapour est la preuve technique principale. FAB/FANUC et la CAO apportent le contexte physique ; le TIPE prouve une démarche expérimentale personnelle ; la spécialisation actuelle en SAR introduit naturellement le projet VLA.
- **Cours actuels :** consacrer une slide de 30 secondes à « What I’m learning now », immédiatement avant le VLA. Regrouper les enseignements en quatre domaines lisibles, puis présenter le VLA comme le projet de master qui permet de les mettre en relation. Les cours décrivent un apprentissage actuel, distinct des réalisations déjà montrées à Singapour.
- **Unitree G1 disponible :** c’est la base de présentation expressément demandée par Slimane le 28 octobre. Ne pas reprendre les anciennes formulations « robot à confirmer » ou proposer un robot de remplacement. Cette décision ne signifie pas que la collecte, l’entraînement ou le déploiement ont déjà été réalisés.
- **État actuel du VLA confirmé par Slimane :** démarrage du projet, lecture d’articles, apprentissage des méthodes et préparation de la démarche. Le présenter comme un projet actuel et structurant, avec une ambition concrète ; éviter une succession de réserves qui le ferait paraître secondaire.
- Intégrer l’ouverture suivante : Slimane serait intéressé par une piste proposée par Binabik qu’il pourrait explorer dans son projet académique avant un éventuel stage, pour arriver mieux préparé et contribuer plus vite. C’est une proposition d’alignement, pas une mission déjà convenue.
- Les repères oraux sont des points d’appui courts, pas un script intégral à réciter. Le candidat garde la main sur le rythme.

## 2. Sources et résolution des différences

### 2.1 Sources locales à lire

Tous les liens locaux de ce brief sont relatifs au présent dossier `diaporama_v1/`. Les mêmes chemins fonctionneront depuis un futur `index.html` placé ici.

| ID | Source | Usage |
|---|---|---|
| S01 | [Fil rouge](../FIL_ROUGE_INTERVIEW_BINABIK.md) | Histoire, hiérarchie des projets, transitions, positionnement professionnel |
| S02 | [Contexte factuel V1.9](../../V1.9_PORTFOLIO_CONTEXT.md) | Faits, métriques, dates, travail individuel/collectif et limites techniques |
| S03 | [Roadmap](../ROADMAP_INTERVIEW_BINABIK.md) | Contexte de l’entretien et préparation ; son ancien format court est remplacé par ce brief |
| S04 | [Échanges Binabik](../general%20data/mail_binabik.rtf) | Demande de Pascal, invitation de Giovanni, contenu déjà présenté par Slimane |
| S05 | [CV transmis](../general%20data/Resume_Slimane_AOUANOUK_Binabik_AI.tex) | Cohérence avec ce que l’interlocuteur a reçu |
| S06 | [Informations de candidature](../general%20data/APPLICATION_INFO.md) | Positionnement et attributions ; privilégier les versions récentes |
| S07 | [Recherche Binabik](../general%20data/Company_Research_Binabik_AI.md) | Contexte public documenté, avec les dates et limites de cette recherche |
| S08 | [Orientation industrielle](../BINABIK_PREUVES_ORIENTATION_INDUSTRIELLE.md) | Justification du lien FAB/FANUC et applications industrielles déclarées |
| S09 | [Proposition du projet VLA](../projet_VLA_infos/Project_PING_Ahmidach_Chemsdine_.odt) | Objectif d’assistance, collecte, adaptation de modèle, exécution et évaluation |
| S10 | [Mail d’Olivier Bruneau](../projet_VLA_infos/mail_olivier_bruneau.rtf) | Motion capture envisagée, six caméras haute fréquence, retargeting et optimisation ; slide 17 et annexe A1 |
| S11 | [Page FAB](../../en/projects/fab.html), [FANUC](../../en/projects/fanuc.html), [F1 in Schools](../../en/projects/f1.html), [frein d’avion](../../en/projects/aircraft-brake.html), [TIPE](../../en/projects/tipe.html) | Légendes, contexte des images, preuves projet |
| S12 | [PACO Showcase](../../paco-showcase/index.html), [README](../../paco-showcase/README.md), [provenance des médias](../../paco-showcase/MEDIA_GENERATION.md) | Métriques, médias authentiques, périmètre des validations |
| S13 | [Thème actuel](../../assets/css/style.css), [accueil du portfolio](../../en/index.html) | Direction visuelle claire, typographies et palette |
| S14 | [Unitree G1 — produit officiel](https://shop.unitree.com/products/unitree-g1), [provenance locale](presentation_html/assets/SOURCES.md) | Visuel de plateforme ajouté à la slide 01 à la demande de Slimane ; illustration constructeur |

**Ordre de décision :** dernière instruction de Slimane → faits techniques des sources originales → fil rouge pour la narration → présent brief pour la réalisation. Les anciennes incertitudes de disponibilité du G1 sont remplacées par la décision du §1. Les autres équipements mentionnés dans S09/S10 ne deviennent pas disponibles par extension.

Le mail de Bruneau est adressé à Chemsdine et la proposition porte son nom : ne pas en déduire que Slimane dirige seul le projet. Le projet est collectif ; le TIPE, lui, est individuel.

Les références publiques sur Binabik sont celles du dossier fourni. Ce brief ne prétend pas avoir revérifié leurs pages en ligne. Pour les slides, rester sur le lien général documenté entre applications industrielles, robots physiques et apprentissage ; ne pas présenter un besoin privé ou un déploiement client comme connu.

### 2.2 Expériences et formation retenues

| Élément | Fonction | Place |
|---|---|---|
| FAB | Comprendre les opérations, les machines et la précision | Slide 02 ; rappel possible dans la démarche expérimentale |
| FANUC | Passer d’une opération physique à une étude d’automatisation | Slide 03 |
| F1 in Schools | Rappeler les bases en mécanique, CAO et calcul avant la spécialisation en robotique | Slide 04 : transition de 10 secondes |
| PIMM / CNRS@CREATE | Prouver perception, logiciel, intégration et expérimentation sur robot réel | Slides 05–13 ; centre de gravité |
| TIPE | Montrer un banc et une analyse développés personnellement | Slide 14 ; résultats détaillés en A7 |
| Master SAR | Montrer la spécialisation actuelle en robotique et préparer la transition vers le VLA | Slide 15 |
| Unitree G1 / VLA | Projet actuel, apprentissage en cours et préparation possible du stage | Slides 16–18 |

Ne pas ajouter le réducteur, la turbine, le bicoptère, les autres projets scolaires ou un assistant LLM industriel. La slide SAR donne une vue d’ensemble structurée ; réserver la liste des méthodes aux repères de préparation ci-dessous. Le stage ouvrier peut être évoqué oralement en une courte phrase si cela vient naturellement, sans nouvelle slide et sans le présenter comme un stage en usine.

### 2.3 Ce que Slimane apprend actuellement en master SAR

**Source :** précisions directement données par Slimane le 28 octobre 2026, cohérentes avec le cursus décrit dans S02/S05. Employer le nom public approuvé **Research Master’s (M2) in Advanced Systems & Robotics (SAR), Sorbonne Université**.

| Enseignement actuel | Notions à garder dans les notes de préparation | Famille affichée sur la slide 15 |
|---|---|---|
| Estimation d’état | Linear Estimation Theory : méthodes déterministes et bayésiennes ; estimation non linéaire : EKF, NEKF, UKF et particle filters (PF) | State estimation & sensor fusion |
| Fusion de capteurs | Sensor fusion, combinaison d’informations de mesure pour l’estimation | State estimation & sensor fusion |
| Perception et robotique mobile | Vision caméra, SLAM, robotique mobile | Perception & mobile robotics |
| Robots manipulateurs | Cinématique, dynamique, Jacobiennes, conventions de Denavit–Hartenberg (DH) | Manipulation & control |
| Commande | Contrôle classique et commande non linéaire | Manipulation & control |
| Machine learning | Deep learning, PyTorch, backpropagation, reinforcement learning | Machine learning |

**Usage à l’oral :** annoncer les quatre familles, donner deux ou trois exemples au maximum, puis passer au projet VLA. Si Giovanni demande un approfondissement, utiliser cette liste pour préciser le cours concerné. Ne pas réciter les six lignes ou développer chaque filtre pendant la présentation.

**Lien avec le VLA :** la formation élargit les bases pour comprendre perception, état du robot, mouvement, commande et apprentissage ; le projet offre un cadre pour les relier sur un système physique. Cela n’implique pas que chaque méthode étudiée est déjà implémentée, ni qu’un VLA remplace tous ces éléments ou nécessite chacun des filtres cités. Parler de spécialisation actuelle et de mise en pratique progressive.

## 3. Direction visuelle

### 3.1 Parenté avec le portfolio

S’inspirer du **thème clair effectivement appliqué à `.homepage`**, et non de l’ancien thème sombre encore présent au début de la feuille CSS.

| Élément | Choix |
|---|---|
| Fond principal | `#f6f7f8` |
| Surfaces | `#ffffff` ; légers aplats `#eef1f4` pour un schéma ou une légende |
| Titres | `#0f1115` ou `#111827`, Manrope 700/800 |
| Texte secondaire | `#596170`, Inter 400/500 |
| Bordures | `#d9dee5`, fines et discrètes |
| Accent fonctionnel | Bleu `#0284c7` pour une flèche, une valeur ou un focus ; emploi limité |
| Formes | Coins arrondis de 12–16 px, ombres très légères |
| Typographies de repli | `system-ui, -apple-system, BlinkMacSystemFont, sans-serif` |

L’identité vient de la typographie, des proportions et des espaces. Ne pas recopier la sidebar du portfolio dans le diaporama. Les styles de présentation restent dans une feuille dédiée : ne pas modifier ni charger globalement les milliers de lignes de CSS du portfolio.

### 3.2 Règles de composition

- Dessiner pour un cadre **16:9**, référence 1920 × 1080, mis à l’échelle dans la fenêtre sans déformation.
- Prévoir environ 80 px de marge au format de référence ; titre 56–68 px, mots clés 28–36 px, légendes utiles 22–24 px. Éviter toute information essentielle en microtexte.
- Afficher une seule idée forte et, le plus souvent, **15–30 mots** hors légendes et crédits. Les textes exacts du storyboard sont le point de départ ; ne pas les compléter avec des paragraphes.
- Donner 65–80 % de la surface utile aux médias dans les slides de démonstration. Les slides de méthode utilisent un schéma simple à 4–5 éléments.
- Alterner quatre compositions : grand média ; deux vues comparées ; chiffre et preuve ; chaîne de traitement. Ne pas réduire toutes les slides à des cartes identiques.
- Conserver les figures et vues techniques avec `object-fit: contain`. Les cadrages photographiques peuvent être plus serrés si aucun robot, outil ou détail utile n’est coupé.
- Le cadre visible de chaque photo ou vidéo épouse exactement son ratio, sans fond ou bordure autour d’une zone vide. Conserver le média entier ; les espaces de composition restent à l’extérieur du cadre. Appliquer cette règle à toutes les slides et aux vues des annexes.
- Une photo verticale reste verticale : la placer à côté d’une seconde vue ou de mots clés. Ne pas l’étirer en arrière-plan 16:9.
- Ne pas afficher le code, des captures d’un document complet ou une page entière du portfolio. Exploiter les médias sources.
- Utiliser une transition de fondu de 150–220 ms, sans effet de caméra ni mouvement permanent. Respecter `prefers-reduced-motion`.
- Les notes orales, sources détaillées et précautions sont séparées de la composition projetée. Les qualificatifs essentiels tels que **Simulation**, **Ongoing** et le périmètre des 40 essais restent visibles.

## 4. Médias sélectionnés

Les fichiers ci-dessous existent dans le dépôt. Les images clés et des images extraites des vidéos ont été inspectées lors de la préparation du brief. Les durées ont été relevées avec `ffprobe`. Les extraits doivent être relus en mouvement lors de la réalisation HTML.

### 4.1 Registre des médias principaux

| ID | Fichier exact | Emploi et cadrage |
|---|---|---|
| M01 | [Rover](../../paco-showcase/assets/images/rover_aruco_v01.jpg) | Ancienne vignette de conclusion, remplacée par M37 ; l’ouverture utilise M08 |
| M02 | [Coulée FAB](../../assets/videos/projects/fab/foundry-pour.mp4) | Slide 02 : vidéo verticale entière, **0–4,15 s**, muette, une lecture |
| M03 | [Poster FAB](../../assets/images/projects/fab/foundry-pour-poster.webp) | Image de remplacement de M02 |
| M04 | [Usinage CNC](../../assets/images/projects/fab/mocn-machining.webp) | Slide 02 : conserver la pièce et la zone d’usinage ; ne pas étirer |
| M05 | [Simulation FANUC](../../assets/videos/projects/fanuc/presentation.mp4) | Slide 03 : extrait **6–16 s** du fichier de 23,10 s ; préserver la cellule entière |
| M06 | [Vue FANUC](../../assets/images/projects/fanuc/cover.png) | Poster de M05 et remplacement fixe |
| M07 | [Assemblage frein](../../assets/images/projects/aircraft-brake/assembly-front.webp) | Annexe A7, vue CAD design : conception préliminaire conservée hors du parcours principal |
| M08 | [Chaîne matérielle](../../paco-showcase/assets/images/system_chain_v01.jpg) | Slides 01/05/06 : montrer ordinateur et rover ; ne pas présenter ce laptop comme preuve d’un calcul embarqué |
| M09 | [Arène](../../paco-showcase/assets/images/arena_overview_v01.jpg) | Slides 05/11/12 : vue réelle du dispositif, sans prétendre que tous les robots visibles sont contrôlés par la même pile |
| M10 | [Trajectoire nominale](../../paco-showcase/assets/images/phase5_bis_v1_01_fixed.jpg) | Slide 07 : conserver axes, obstacle et trajectoire ; pas d’équations ajoutées |
| M11 | [Image caméra brute](../../paco-showcase/assets/images/Brut_tracking_aruco_metric_v01.jpg) | Ancienne comparaison S08, remplacée par M33 |
| M12 | [Image caméra annotée](../../paco-showcase/assets/images/tracking_aruco_metric_v01.jpg) | Rappel de tracking sur S09 ; ancienne comparaison S08 remplacée par M33 |
| M13 | [Essai physique multi-agent](../../paco-showcase/assets/video/anticollision_multi_agent_v01.mp4) | Slide 11 : **0–11,27 s**, vidéo entière, muette, une lecture |
| M14 | [Banc TIPE](../../assets/images/projects/tipe/test-bench-rig.webp) | Slide 14 : conserver la moitié gauche du montage, sans la seconde vue de droite ; montage complet en A7 |
| M15 | [Chronophotographie](../../assets/images/projects/tipe/impact-chronophotography.webp) | Slide 14 : bande horizontale sous le banc, quatre phases dans l’ordre |
| M16 | [Régressions TIPE](../../assets/images/projects/tipe/ball-regression-contact.webp) | Détail de mesure réservé à A7 : figure entière, axes et barres d’incertitude lisibles ; pas de nouvelle valeur déduite à vue |
| M40 | [OpenVLA, figure 1](presentation_html/assets/research-openvla.png) | A3 : figure de la page 1, modèle préentraîné et adaptation à la manipulation |
| M41 | [FACT, figure 2](presentation_html/assets/research-fact.png) | A3 : figure de la page 4, succès et deux types d’échecs en insertion |
| M42 | [Ψ₀, figure 2](presentation_html/assets/research-psi0.png) | A3 : figure de la page 3, apprentissage et déploiement |
| M43 | [LeVERB, figure 1](presentation_html/assets/research-leverb.png) | A3 : figure de la page 2, benchmark, robot réel et architecture hiérarchique |
| M38 | [En-tête HumanoidMimicGen](presentation_html/assets/humanoidmimicgen-title.png) | A2 : titre, auteurs et affiliations, extrait de la première page du PDF fourni |
| M39 | [Figure 1 HumanoidMimicGen](presentation_html/assets/humanoidmimicgen-overview.png) | A2 : figure principale extraite de la page 2 ; téléopération simulée, génération et co-entraînement sim/réel |
| M37 | [Humanoïde Binabik fourni par Slimane](presentation_html/assets/binabik-humanoid-user.png) | Slide 20 : image jointe dans la conversation, remplace le rover à droite ; proportions conservées |
| M36 | [G1 fourni par Slimane](presentation_html/assets/unitree-g1-assistive-user.png) | Slide 16 : illustration fournie dans la conversation, robot près d’un verre ; image entière, sans la présenter comme un essai du projet |
| M35 | [Répétabilité f15](presentation_html/assets/paco-f15-repeatability.png), [PDF](presentation_html/assets/paco-f15-repeatability.pdf) | Slide 12 : figure entière, vingt essais avec un agent mobile ; trajectoires et distance de séparation |
| M34 | [Vue B de f4](presentation_html/assets/paco-f4-camera-b.png) | Slide 09 : petite vignette sous le graphique, extraite uniquement du panneau B de M33 ; conserver son ratio |
| M33 | [Figure caméra f4](presentation_html/assets/paco-f4-camera.png), [PDF original](presentation_html/assets/paco-f4-camera.pdf) | Slide 08 : figure entière du papier, vue brute (a) et identifiants/coordonnées métriques (b) ; source fournie par Slimane |
| M32 | [Correction causale](../../paco-showcase/assets/images/phase5_bis_v1_01_bis_mobile.jpg) | Slide 07 : figure entière à droite de M10, comme dans la section méthode du PACO Showcase |
| M26 | [Moule de fonderie](../../assets/images/projects/fab/foundry-mould.webp) | Slide 02 : photo entière à droite de la vidéo, légende “Sand mould” |
| M27 | [Prise d’origine d’usinage](../../assets/images/projects/fab/machining-origin.webp) | Slide 02 : photo entière à droite de la vidéo, légende “Machining origin” |
| M25 | [Unitree G1 — visuel officiel](presentation_html/assets/unitree-g1-official.jpg) | Slide 01 : robot en entier sur le fond clair, à côté de la photo du rover ; légende “Unitree G1 / Ongoing VLA project” ; crédit Unitree Robotics |

### 4.2 Médias des annexes

| ID | Fichier exact | Emploi |
|---|---|---|
| M17 | [Installation caméra](../../paco-showcase/assets/images/camera_arena_setup_v01.jpg) | A4 : relation caméra / plan de référence / hauteur des marqueurs |
| M18 | [Budget temporel](../../paco-showcase/assets/figures/realtime_budget.png) | A5 : figure entière sur une grande surface |
| M19 | [Campagne un agent](../../paco-showcase/assets/figures/campaign_single_agent.png) | A6 : répétabilité, trajectoires et clairance |
| M20 | [Campagne deux agents](../../paco-showcase/assets/figures/campaign_dual_agent.png) | A6 : complément à afficher dans une seconde vue de l’annexe |
| M21 | [Jumeau numérique / réel](../../paco-showcase/assets/figures/anticollision_twin_vs_real.png) | Source historique : onglet Digital twin retiré d’A6 à la demande de Slimane |
| M22 | [Géométries TIPE](../../assets/images/projects/tipe/impactor-geometries.webp) | Slide 14 : vue latérale des quatre embouts (partie supérieure) ; A7 : montage complet des quatre contacts et protocole |
| M23 | [Comparaison des vitesses TIPE](../../assets/images/projects/tipe/speed-ratio-comparison.webp) | A7 : modèle / expérience, sans universaliser un cas particulier |
| M24 | [Défaut de pièce FAB](../../assets/images/projects/fab/casting-defect.webp) | A7 : preuve secondaire de diagnostic de non-conformité, accessible à la demande |

**Médias délibérément non retenus :** `screen_to_rover_handoff_v01.mp4` dure 62,57 s et apporte moins de lisibilité immédiate que M08 ; les vidéos à six agents concernent la simulation ; les courbes scientifiques très denses ne servent pas l’introduction. `hero_rover_curve_v01.mp4` et `anticollision_multi_agent_v01.mp4` sont deux fichiers identiques : ne pas les présenter comme deux expériences distinctes.

**G1/VLA :** aucun média propre à ce projet n’a été trouvé dans le dossier fourni. À la demande de Slimane, la slide 01 utilise désormais M25, un visuel produit officiel Unitree, pour identifier la plateforme. Le présenter à côté de la photo du rover, sans le fusionner dans cette expérience ni le faire passer pour une photo du projet. Les slides 16–18 conservent leurs schémas vectoriels, légendés comme démarche du projet. Ne pas emprunter une démonstration Unitree/Binabik et la laisser passer pour une réalisation de Slimane. Ne pas générer de fausse photo de laboratoire.

## 5. Storyboard des 20 slides principales

Le texte entre guillemets dans **À l’écran** est destiné aux slides. Les phrases de **Repères oraux** sont indicatives : conserver le sens, parler naturellement. Les durées incluent les vidéos et les transitions, mais pas une discussion déclenchée par une question de Giovanni.

### Slide 01 — From ideas to working robots.

**Durée : 15 s · Cumul : 00:15**

- **Message :** présenter immédiatement l’identité et le goût pour les systèmes physiques, sans longue page de titre.
- **À l’écran :** “From ideas to working robots.” ; “Slimane Aouanouk” ; “Arts et Métiers · Sorbonne Université” ; “Robotics · Perception · Experiments”.
- **Composition :** titre et identité à gauche ; à droite, M08 et M25 côte à côte, en conservant le rover, l’ordinateur et le G1 entiers. Le cadre de M08 épouse exactement son ratio 16:9, sans bande blanche interne, avec la légende “Software + physical hardware”. Sous la photo, ajouter “Collision avoidance · Singapore” puis “Research internship”, avec la même hiérarchie typographique que la légende du G1. M25 est intégré au fond clair, hors de la scène photographiée, avec la légende “Unitree G1 / Ongoing VLA project”. Slogan, photo et ajout du G1 demandés explicitement par Slimane.
- **Repères oraux :** engineering student + research master’s in robotics ; “What I enjoy most is turning an idea into a physical system that I can test and improve.”
- **Transition :** “That starts with understanding the physical task.”
- **Sources / vigilance :** S01/S02/S05 ; ne pas se présenter comme diplômé ni expert confirmé en robot learning.

### Slide 02 — Start with the physical task

**Durée : 20 s · Cumul : 00:35**

- **Message :** l’ancrage industriel vient d’opérations réellement pratiquées.
- **À l’écran :** “Start with the physical task” ; “Foundry → CNC → Inspection” ; “Hands-on manufacturing”.
- **Composition :** M02 vertical à gauche ; galerie de trois photos à droite : M26 (“Sand mould”), M27 (“Machining origin”), puis M04 (“CNC machining”), réduite pour accueillir les deux nouvelles vues. Chaque cadre épouse le ratio de son média, sans bandes vides ni déformation. Aucune liste de cours. M03 remplace la vidéo si nécessaire. Sur téléphone, empiler la vidéo puis la galerie.
- **Repères oraux :** “At Arts et Métiers, I worked on casting, machining and dimensional inspection.” ; practical constraints, accuracy, operators’ work.
- **Transition :** “I also explored how that kind of operation could be automated.”
- **Sources / vigilance :** S01/S02/S11 ; FAB collectif, pièce non entièrement conforme. Ne pas inventer de réussite industrielle complète.

### Slide 03 — Design the automation

**Durée : 20 s · Cumul : 00:55**

- **Message :** savoir raisonner sur une cellule robotisée et ses contraintes.
- **À l’écran :** “Design the automation” ; “Robot · Gripper · Layout · Sequence” ; badge visible “RobotGuide simulation”.
- **Composition :** M05 occupe environ 80 % de la zone utile ; commencer à 6 s et arrêter à 16 s. M06 reste le poster. Titre au-dessus, quatre mots clés en dessous.
- **Repères oraux :** team study of a FANUC casting cell ; robot selection, gripper concept, reach and thermal constraints ; design and simulation.
- **Transition :** “Mechanical interfaces matter just as much as the software.”
- **Sources / vigilance :** S01/S02/S11 ; ni cellule installée ni gains de productivité physiquement mesurés.

### Slide 04 — From mechanics to robotics

**Durée : 10 s · Cumul : 01:05**

- **Message :** Arts et Métiers a apporté les bases en mécanique, CAO et calcul d’ingénieur ; la spécialisation choisie est la robotique. Cette slide sert uniquement de transition rapide vers Singapour.
- **À l’écran :** “From mechanics to robotics” ; quatre étapes “CAD drawing → Simulation → Foam machining → Finished car” ; “CAD · Simulation · Engineering calculations → Robotics”.
- **Composition :** quatre médias numérotés du dossier `presentation_html/assets/pres_F1`, dans l’ordre 1–4, en deux rangées : plan puis simulation ; usinage dans la mousse puis voiture assemblée. Cadres ajustés aux ratios, médias entiers. Le plan `1.pdf`, une page, est rendu dans `1-plan.png` pour l’affichage HTML ; l’original est conservé. Les autres sources sont `2.png`, `3.png`, `4.png`. La page portfolio `../../assets/images/projects/f1/portfolio-pages/page-03.webp` reste une référence de contexte, les quatre visuels fournis constituent le montage demandé.
- **Repère oral (10 secondes maximum, transition comprise) :** “At Arts et Métiers, projects like this taught me CAD and engineering calculations. I then chose robotics, which led to my Singapore internship.”
- **Transition :** la slide suivante ouvre directement sur le projet de recherche Paris–Singapour.
- **Sources / vigilance :** S11, page F1 et quatre fichiers numérotés fournis par Slimane. Présenter un exemple de formation, sans détailler ni revendiquer seul toutes les étapes. Le corps de la voiture est usiné dans la mousse. Le frein d’avion ne figure plus sur cette slide.

### Slide 05 — Make it work on a real robot

**Durée : 25 s · Cumul : 01:30**

- **Message :** installer la preuve principale : recherche Paris–Singapour et rover physique.
- **À l’écran :** “Make it work on a real robot” ; “PIMM → CNRS@CREATE” ; “Paris → Singapore · Jan–Aug 2026”.
- **Composition :** M08 en grand, avec M09 en petite vue secondaire. Garder ordinateur et rover visibles pour expliquer le dispositif.
- **Repères oraux :** research on trajectory planning and collision avoidance ; work with another student ; move from algorithms to an integrated physical system.
- **Transition :** “We had to connect the whole chain.”
- **Sources / vigilance :** S01/S02/S05/S12 ; contexte DesCartes, essais terrestres. Ne pas suggérer des essais de vol ni une réalisation individuelle de toute la pile.

### Slide 06 — Connect the whole robotics loop

**Durée : 25 s · Cumul : 01:55**

- **Message :** montrer les interfaces entre planning, perception, correction et hardware.
- **À l’écran :** “Connect the whole robotics loop” ; “Offline plan” ; “Camera → Pose → Online correction → Rover” ; “Logs”.
- **Composition :** schéma SVG/HTML. Branche supérieure “Offline plan” vers le correcteur ; boucle principale caméra / pose / correcteur / rover, avec retour de la caméra. “Logs” en branche secondaire. Petite vignette M08 dans un coin, sans réduire le schéma.
- **Repères oraux :** nominal path computed offline ; overhead-camera localization ; causal online correction ; serial commands and experiment logs.
- **Transition :** “The nominal path gave the robot a route to follow.”
- **Sources / vigilance :** S02/S12 ; séparer planning hors ligne et correction en ligne. Ne pas dessiner une caméra embarquée, un MPC ou une architecture ROS 2 non documentée.

### Slide 07 — Plan the path, then correct the motion

**Durée : 20 s · Cumul : 02:15**

- **Message :** distinguer le chemin nominal préparé hors ligne de la correction causale à partir de l’observation courante.
- **À l’écran :** “Plan the path, then correct the motion” ; au-dessus des deux figures : “The nominal phase” et “The causal correction phase”. Aucun texte latéral ni badge limité au planning hors ligne.
- **Composition :** deux figures originales du PACO Showcase côte à côte, colonnes égales : M10 à gauche, M32 à droite. Conserver les figures entières avec axes et trajectoires, dans des cadres ajustés aux ratios. Sur téléphone, empiler les deux vues.
- **Repères oraux :** Python/SciPy offline trajectory optimization ; reference around fixed obstacles ; causal correction adjusts current motion when a mobile agent is observed.
- **Transition :** “To follow it, we first needed a trustworthy estimate of the robot’s pose.”
- **Sources / vigilance :** S02/S12 et section méthode du PACO Showcase. Les deux figures illustrent la méthode ; ne pas les confondre avec la campagne physique de 40 essais, ni annoncer d’optimalité globale garantie.

### Slide 08 — Turn pixels into metric positions

**Durée : 25 s · Cumul : 02:40**

- **Message :** rendre la localisation visuelle concrète et intelligible.
- **À l’écran :** “Turn pixels into metric positions” ; “(a) Raw frame · (b) ArUco IDs + metric coordinates · External overhead camera”.
- **Composition :** M33 entière, sans recadrage ni surimpression : les deux vues et leurs repères (a)/(b) sont déjà dans le PDF. Rendu PNG de la page unique, largeur maximale 2400 px, pour l’affichage HTML ; PDF original conservé dans les assets. Source : `/Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/redaction_V1/f4.pdf`. Cadre ajusté au ratio de la figure.
- **Repères oraux :** overhead Basler camera ; OpenCV/ArUco ; left: raw camera frame ; right: marker identifiers and metric coordinates ; image-to-arena transformation.
- **Transition :** “The first challenge was making those measurements accurate enough.”
- **Sources / vigilance :** S02/S05/S12 ; perception externe, pas SLAM ou fusion LiDAR–IMU.

### Slide 09 — Improve the measurement, improve the system

**Durée : 30 s · Cumul : 03:10**

- **Message :** donner un exemple mesuré de diagnostic et d’amélioration.
- **À l’écran :** “Improve the measurement, improve the system” ; “36.3 → 5.8 mm” ; “84% lower mean localization error” ; “Independent ground grid”.
- **Composition :** deux barres SVG de même origine et de même échelle, valeurs 36,3 et 5,8 mm ; titre de mesure explicite. Petite vignette M12 en support. Ne pas inventer de points individuels ni de barres d’incertitude.
- **Repères oraux :** independent validation grid ; intrinsic calibration, distortion correction and metric homography ; measure, change the geometry, validate again.
- **Transition :** “Accuracy was one part; timing was another.”
- **Sources / vigilance :** S02/S05 ; erreur moyenne sur grille au sol. Ne pas la confondre avec 0,191 px de reprojection ou 11,6 mm sur marqueur surélevé. Employer une attribution compatible avec le travail d’équipe.

- **Vignette :** utiliser M34, uniquement la vue B de la figure f4 de la slide précédente, à la place de l’ancienne capture de tracking. Garder le texte et les valeurs du graphique ; la vignette illustre le tracking et ne constitue pas la mesure sur grille indépendante.

### Slide 10 — Make sensing and action fit together

**Durée : 20 s · Cumul : 03:30**

- **Message :** l’intégration dépend aussi de la mesure des temps de traitement.
- **À l’écran :** “Make sensing and action fit together” ; “≈20 Hz” ; “Measured physical loop” ; “Vision → Correction → Serial commands”.
- **Composition :** chiffre principal très grand ; petite chaîne à trois blocs. Pas de pseudo-chronogramme suggérant des durées strictement constantes. Le graphique détaillé M18 reste en A5.
- **Repères oraux :** median loop frequency 19.84–19.86 Hz ; image processing and serial communication matter ; profiling guides integration work.
- **Transition :** “This is what that integrated system looked like in motion.”
- **Sources / vigilance :** S02/S05/S12 ; médiane mesurée, pas garantie de période ou certification temps réel dur.

### Slide 11 — Watch the physical system respond

**Durée : 25 s · Cumul : 03:55**

- **Message :** laisser voir le comportement physique plutôt que le décrire longuement.
- **À l’écran :** “Watch the physical system respond” ; “Multi-agent avoidance trial” ; “One controlled rover · Moving robots”.
- **Composition :** M13 quasiment plein cadre, sans couper les trajectoires ; lecture de 0 à 11,27 s. `presentation_html/assets/multi-agent-poster.jpg`, extrait à 0,5 s de cette vidéo, sert de poster. Rejouer uniquement sur commande.
- **Repères oraux :** identify the task and observed response ; “This is a physical trial, with the robot responding to the observed situation.” ; laisser quelques secondes au visuel.
- **Transition :** “One demonstration is useful, but we also needed repeated trials.”
- **Sources / vigilance :** S02/S12 ; ne pas transformer les autres agents visibles en robots simultanément autonomes sous la même pile.

### Slide 12 — Check repeatability

**Durée : 25 s · Cumul : 04:20**

- **Message :** relier la démonstration à un protocole reproductible et borné.
- **À l’écran :** “Check repeatability” ; “40/40 goal arrivals” ; “0 collisions” ; “Two frozen tasks · 20 runs each” ; “Shown: one moving agent · 20 physical runs”.
- **Composition :** résultats 40/40 et 0 collisions compacts à gauche ; M35, figure entière du papier f15, à droite, sans coupe ni déformation. Retirer “Team result” du visuel. La légende précise que la figure illustre les 20 essais avec un agent mobile, tandis que les chiffres couvrent deux campagnes de 20. Les autres détails restent en A6. Le PDF fourni par Slimane est conservé et rendu en PNG de 2400 px pour le HTML.
- **Repères oraux :** two frozen confirmatory campaigns ; same reported tasks repeated ; logs and trajectories used to inspect results ; evidence applies to these scenarios.
- **Transition :** “The useful part was the engineering process behind those numbers.”
- **Sources / vigilance :** S02/S05/S12 ; 40/40 et zéro collision n’établissent pas une sécurité universelle. Il existe des échecs exploratoires hors de ces campagnes.

### Slide 13 — Measure, diagnose, change, re-test

**Durée : 20 s · Cumul : 04:40**

- **Message :** faire apparaître la méthode expérimentale comme compétence de développement.
- **À l’écran :** “Measure → Diagnose → Change → Re-test” ; “Geometry · Timing · Software”.
- **Composition :** boucle simple en quatre étapes ; sous chacune, un exemple bref : “Grid error”, “Camera geometry”, “Processing”, “Repeatable trials”. Aucun paragraphe.
- **Repères oraux :** calibration and processing bottlenecks ; controlled comparisons ; co-developed Python unit/numerical/regression checks ; testing helps improve the system.
- **Transition :** “I had already developed that interest in experiments through an individual project.”
- **Sources / vigilance :** S01/S02/S05 ; ne pas annoncer « 64 tests passés », une CI ou une couverture de tests non établie. Ne pas présenter Slimane uniquement comme test engineer.

### Slide 14 — Build the experiment, analyze the data

**Durée : 25 s · Cumul : 05:05**

- **Message :** apporter une preuve personnelle qui va de la conception d’un banc à l’analyse des mesures.
- **À l’écran :** “Build the experiment, analyze the data” ; “Individual TIPE project” ; “Build → Film → Analyze in Python”.
- **Composition :** conserver uniquement la moitié gauche de M14, agrandie à gauche ; retirer la vue de droite du banc. À droite, afficher en haut la photo latérale des quatre embouts (partie supérieure de M22, correspondant à la photo fournie par Slimane), puis M15 en bande horizontale en dessous. Les recadrages sont des fenêtres CSS : fichiers originaux et vue complète en annexe conservés. Cadres ajustés aux proportions. Repère discret “46 cm · 4 contact geometries”. Les régressions M16 restent en A7.
- **Repères oraux :** “I designed and built this impact-testing rig myself.” ; interchangeable geometries ; video positions, Python regressions and measurement uncertainty. Une seule phrase sur l’analyse suffit pour le déroulé principal.
- **Transition :** “Today, I’m building on that hands-on background through my robotics master’s.”
- **Sources / vigilance :** S02/S05/S11 ; projet 2022–2024, antérieur à Singapour. Ne pas inventer le nombre d’essais ou la cadence de la caméra. Les résultats chiffrés détaillés restent en A7.

### Slide 15 — What I’m learning now

**Durée : 30 s · Cumul : 05:35**

- **Message :** montrer la spécialisation actuelle en robotique et installer le contexte académique du VLA.
- **À l’écran :** “What I’m learning now” ; “Sorbonne · M2 SAR” ; “State estimation & sensor fusion” ; “Perception & mobile robotics” ; “Manipulation & control” ; “Machine learning”.
- **Composition :** quatre groupes aérés disposés en deux rangées. Associer de petits pictogrammes SVG originaux : mesures combinées, caméra/trajectoire, chaîne articulée, réseau simple. Une liaison fine converge vers un repère “Master project → VLA” en bas. Ne pas ajouter de nuage de sigles, d’équations ou une seconde rangée de logiciels.
- **Repères oraux :** “I’m now specializing in robotics through my research master’s at Sorbonne.” ; les quatre familles ; exemples possibles : Bayesian/nonlinear estimation, robot kinematics and dynamics, SLAM, deep and reinforcement learning. Garder DH, Jacobiennes, chaque variante de filtre, backpropagation et PyTorch disponibles dans les notes du §2.3 pour une relance, sans tous les réciter.
- **Transition :** “My main master’s project brings these foundations together through humanoid robot learning.”
- **Sources / vigilance :** précisions actuelles de Slimane et S02/S05. Dire “I’m learning / studying”, sans convertir le cursus en expérience de déploiement professionnel. Le contrôle reste un élément de la formation parmi les autres.

### Slide 16 — Bring that mindset to humanoid learning

**Durée : 20 s · Cumul : 05:55**

- **Message :** présenter le VLA comme l’étape actuelle, ambitieuse et cohérente du parcours.
- **À l’écran :** “Bring that mindset to humanoid learning” ; “Unitree G1 · Assistive manipulation” ; “Literature review → Project setup” ; badge discret “Ongoing”.
- **Composition :** grand schéma original à trois blocs : “Vision + Instruction → Policy → Robot action”. Sous-titre “Sorbonne Université · Supervised by Prof. Olivier Bruneau”. Ce schéma explique le principe, il ne représente pas une interface déjà développée.
- **Repères oraux :** “That’s the direction of our VLA project: assistive manipulation on a Unitree G1.” ; “We have a G1 available for the project.” ; “Right now, I’m reviewing papers, learning the methods and preparing our first experiments.”
- **Transition :** “The goal is to work through the complete demonstration-to-robot pipeline.”
- **Sources / vigilance :** S09/S10 et mise à jour de Slimane du 28 octobre. Ne pas remettre la disponibilité du G1 en doute. Parler du travail actuel avec précision, sans annoncer un apprentissage ou une exécution déjà achevés.

- **Ajout visuel demandé :** M36 en haut à droite, contexte Unitree G1 / Assistive manipulation à gauche, schéma VLA en bande horizontale dessous et statut du projet en bas. Conserver le titre, le badge Ongoing et la supervision. L’image illustre le thème ; le projet reste en phase de lectures et préparation.

### Slide 17 — From demonstrations to robot behavior

**Durée : 25 s · Cumul : 06:20**

- **Message :** deux voies de démonstration envisagées convergent vers l’apprentissage, le déploiement et l’évaluation du robot.
- **À l’écran, voie A :** “Route A — Robot demonstrations” ; “Teleoperation / Robot demonstrations” → “Dataset / Images + state + actions + instructions”.
- **À l’écran, voie B :** “Route B — Human motion-capture extension” ; “Human MoCap / 6 high-frequency cameras” → “Retargeting / Fine human motions → feasible G1 motions” → “Simulation / AI motion optimization / MuJoCo / Isaac Sim / Isaac Lab”.
- **Chaîne commune :** “Policy learning / Adapt selected VLA / baseline” → “Deployment / Robot commands” → “Evaluation / Success · Safety · Robustness”.
- **Composition :** nœuds HTML éditables et connexions SVG ; deux voies à gauche et convergence vers trois nœuds communs à droite. Bleu portfolio pour A, orange discret pour B, bleu clair pour la chaîne commune ; conserver fond clair, Manrope/Inter et badge “Project direction”. Retirer les anciennes quatre étapes et le bandeau “Object handover”. Sur téléphone, empiler A, B puis la chaîne commune, avec flèches verticales entre étapes de chaque groupe.
- **Repère oral, environ 25 s :** “We’re considering two routes: robot demonstrations through teleoperation, and human motion capture with six high-frequency cameras. Human movements would be retargeted to the G1 and optimized in MuJoCo or Isaac Sim and Isaac Lab. Both routes would support policy learning, deployment and evaluation.”
- **Notes de préparation :** système MoCap annoncé pour une acquisition prochaine par Olivier Bruneau ; pas de disponibilité confirmée par extension de celle du G1. La téléopération et son interface restent à sélectionner, sans UMI déjà disponible. Les mouvements adaptés devront être associés aux observations, instructions et actions nécessaires pour construire des démonstrations utilisables pour le VLA. La collecte, l’apprentissage et le déploiement restent des directions de projet.
- **Transition :** “There may also be a useful way to connect this project with the internship.”
- **Sources :** S09, S10 et schéma à deux voies approuvé par Slimane le 30 octobre 2026.

### Slide 18 — Use the project to prepare for the internship

**Durée : 20 s · Cumul : 06:40**

- **Message :** transformer le démarrage du projet en proposition proactive de préparation.
- **À l’écran :** “Use the project to prepare for the internship” ; “Your priorities → A focused experiment → A stronger start”.
- **Composition :** trois blocs très aérés. Deux petits exemples sous le bloc central : “Demonstration quality” et “Policy evaluation”. Ce sont des pistes de discussion, pas des besoins attribués à Binabik.
- **Repères oraux :** “If useful, I’d be happy to explore a direction suggested by your team in this project, so I can arrive better prepared and contribute sooner.” ; choisir un axe compatible avec le projet académique.
- **Transition :** “That connection is one reason Binabik interests me.”
- **Sources / vigilance :** souhait exprimé par Slimane le 28 octobre. Ne pas annoncer un stage obtenu, une collaboration officielle, un projet industriel confié ou une promesse de transfert de données/code.

### Slide 19 — Why Binabik

**Durée : 20 s · Cumul : 07:00**

- **Message :** faire le lien avec l’entreprise à partir de preuves personnelles déjà montrées.
- **À l’écran :** “Why Binabik” ; “Industrial tasks” ; “Real robots” ; “Learning-based behavior”.
- **Composition :** trois colonnes sobres avec une petite preuve chacune : M04 ; M08 ; le schéma VLA de la slide 17. Une courte liaison sous chaque preuve : “Understand the task”, “Integrate and measure”, “Develop adaptability”.
- **Repères oraux :** interest in the combination of industrial use cases, physical robotics and learning ; mechanical understanding + perception/integration + growing robot-learning experience.
- **Transition :** “That’s the combination I’d like to contribute to.”
- **Sources / vigilance :** S01/S07/S08 ; décrire les domaines publics, pas une architecture privée, un portefeuille client ou des performances non établies. Ne pas raconter l’entreprise à son propre cofondateur pendant une minute.

### Slide 20 — Where I’d like to contribute

**Durée : 15 s · Cumul : 07:15**

- **Message :** ouvrir la discussion sur une contribution concrète et adaptable.
- **À l’écran :** “Where I’d like to contribute” ; “Perception & integration” ; “Robot learning & data” ; “Experiments & debugging” ; “6-month internship · February 2027”.
- **Composition :** trois lignes de contribution, beaucoup d’espace blanc ; grande image M37 fournie par Slimane, à droite, conservée entière ; lui réserver environ 57 % de la largeur des colonnes avec un écart de 48 px au format de référence. Nom et portfolio discrets en pied.
- **Repères oraux :** contribute to real robotics software, learn closely with the team ; open to the team’s priorities ; laisser ensuite Giovanni réagir.
- **Sources / vigilance :** S01/S04/S05 et souhait actuel ; propositions de contribution, pas descriptif d’une offre confirmée. Garder le titre principal de profil en robotique, sans conclure à une spécialisation en contrôle pur ou QA.

- **Visuel de conclusion :** M37, image de l’humanoïde avec marquage Binabik fournie par Slimane, remplace le rover à droite. Image entière, cadre au ratio natif ; conserver le texte de contribution et de disponibilité.

## 6. Annexes pour la discussion

Les annexes sont hors du déroulé chronométré et ne se lancent pas automatiquement après la slide 20. Chaque annexe comporte une commande de retour à la dernière slide principale. Les sous-vues indiquées ci-dessous restent dans la même annexe ; elles ne gonflent pas le compteur principal.

### A1 — VLA project: current work and experimental directions

- **Question couverte :** où en es-tu et quelle direction pourrait préparer le stage ?
- **Visuel :** reprendre la chaîne de la slide 17. Ajouter à côté une branche fine “Possible acquisition route: motion capture → retargeting”. Le G1 reste la plateforme disponible.
- **À l’écran :** “Current: literature review & project setup” ; “Target: assistive manipulation on Unitree G1” ; “Possible focus: demonstrations or evaluation”.
- **Notes positives et courtes :** le projet vise une chaîne démonstrations → données → adaptation VLA → exécution et évaluation ; Slimane démarre et apprend actuellement. Olivier Bruneau évoque l’acquisition prochaine d’un système motion capture à six caméras haute fréquence, permettant de convertir des mouvements humains pour différents robots, puis d’envisager une optimisation dans MuJoCo ou l’environnement Isaac mentionné dans son mail. Ce sont des possibilités à explorer, pas un système déjà exploité dans le projet.
- **Pistes concrètes à discuter, sans tâche imposée :** comparer la qualité de démonstrations ; définir un protocole de réussite et d’interventions ; tester des variations de pose d’objet. Rester compatible avec l’objectif académique d’assistance.
- **Outils :** OpenPI π₀/π₀.₅ est une direction précédemment retenue dans le contexte de Slimane, pas un choix imposé par S09/S10 ni un modèle déjà entraîné. Le mail ne documente pas de système UMI disponible. Éviter la liste de tous les simulateurs, interfaces et checkpoints sur la slide.
- **Sources :** S09/S10, S02 pour la piste OpenPI, et mise à jour de Slimane du 28 octobre. Ne pas attribuer à ce mail des dates d’accueil ou un accès GPU définitivement fixés.

### A2 — Exploring Synthetic Data Generation for Humanoid Robotics

- **But :** ouvrir une discussion de recherche si l’entretien aborde les données ou l’adaptation à une nouvelle tâche. A2 reste hors du parcours principal et de son budget de 7 min 15.
- **Composition :** à gauche, M38 (en-tête de page 1) puis M39 (Figure 1 en page 2), entiers dans leurs cadres ajustés ; crédit Lin et al. et lien projet. À droite, HumanoidMimicGen, NVIDIA & UT Austin, 2026, puis quatre points : challenge, approach, key idea, potential impact.
- **Texte :** “Limited real-world demonstrations” ; “Synthetic data generation through whole-body planning” ; “1 teleoperated demo → 1,000 synthetic demos”, avec précision visible “Per task in the simulation benchmark” ; “Less data collection effort when adapting to new tasks”.
- **Question en bas :** “My interest: How can we reduce the data collection effort when deploying robots to new industrial tasks?”
- **Sources :** PDF fourni par Slimane, Lin et al., HumanoidMimicGen: Data Generation for Loco-Manipulation via Whole-Body Planning, arXiv:2605.27724v1 (2026). Pages 1–2 pour les visuels et affiliations ; section 6.1 / tableau 1 pour la génération de 1 000 trajectoires par tâche ; section 6.4 pour le co-entraînement réel/simulation.
- **Vigilance :** ne pas présenter la démonstration téléopérée simulée comme de la capture humaine brute ; ne pas généraliser le ratio à un déploiement réel sans autres données. Présenter une lecture exploratoire et un intérêt industriel personnel, sans prétendre maîtriser ou avoir implémenté la méthode, ni attribuer cette technologie à Binabik.
- **Navigation :** ajout au menu et compteur A1/A7 à A7/A7, retour à la dernière principale. Les autres annexes et le blocage en fin de S20 restent identiques.

### A3 — Research interests: from VLA to reliable robots

- **But :** discussion de recherche, hors du parcours principal. Montrer des questions en cours d’exploration et leur lien avec l’intégration et la validation expérimentale ; aucune maîtrise ni implémentation des cinq méthodes revendiquée.
- **Onglets :** Overview, OpenVLA, HumanoidMimicGen, FACT, Ψ₀, LeVERB. A3 reste une annexe, malgré ses six vues internes.
- **Synthèse :** quatre axes en deux colonnes, icônes bleues et séparateurs sobres : Policy adaptation (OpenVLA · Ψ₀), Data efficiency (HumanoidMimicGen · Ψ₀), Contact precision & reliability (FACT), Whole-body execution (LeVERB). Chaque axe comporte sa question, pas un score de benchmark.
- **Question en bas :** “For your industrial tasks, where is the biggest bottleneck today: data, policy adaptation, or reliable execution?”
- **Détails :** figure originale à gauche, titre et trois points à droite — Research question, Main idea, Why it interests me. Source et précision de périmètre visibles. Figures M40–M43 ; M39 réutilisée pour HumanoidMimicGen avec lien interne vers A2. Préserver les proportions et les annotations des figures. Sur téléphone, empiler figure et résumé ; onglets sur plusieurs lignes.
- **Périmètres :** OpenVLA : adaptation de policies de manipulation, pas contrôle complet d’un humanoïde. HumanoidMimicGen : génération par whole-body planning et ratio borné au benchmark simulé ; données réelles aussi utilisées pour le transfert. FACT : précision et forces, instrumentation adaptée nécessaire. Ψ₀ : vidéos humaines puis données robotiques, distinct de la motion capture. LeVERB : interface latente entre policy et whole-body control, pas preuve de manipulation industrielle fine.
- **Sources :** cinq PDF fournis dans `/Users/slimaneaouanouk/Desktop/temp_papers`. Kim et al. (2024), arXiv:2406.09246v3, fig. 1 p. 1 ; Lin et al. (2026), arXiv:2605.27724v1, fig. 1 p. 2 ; Parés-Morlans et al. (2026), arXiv:2608.01402v2, fig. 2 p. 4 ; Wei et al. (2026), arXiv:2603.12263v1, fig. 2 p. 3 ; Xue et al. (2025), arXiv:2506.13751v3, fig. 1 p. 2. Recadrages exacts consignés dans les sources des assets.
- **Repère oral :** 35–45 secondes pour présenter les quatre questions, puis écouter les priorités de l’interlocuteur et n’ouvrir qu’une vue pertinente. Ne pas comparer les taux de réussite entre publications ou présumer les technologies utilisées par Binabik.
- **Navigation :** menu à sept annexes et compteur A3/A7, six onglets au clavier, lien HumanoidMimicGen vers A2, retour à la dernière slide principale. S20 reste la fin du parcours principal. PDF de secours non régénéré.

### A4 — Calibration: which error are we measuring?

- **Question couverte :** comment la calibration a-t-elle été vérifiée et qu’est-ce que le gain de 84 % représente ?
- **Visuel :** M17 et schéma vectoriel caméra / sol / marqueur surélevé.
- **À l’écran :** tableau court de trois mesures séparées : “Reprojection RMS: 0.191 px” ; “Ground-grid mean error: 36.3 → 5.8 mm” ; “Raised-marker mean error: 60.8 → 11.6 mm”.
- **Notes :** 20 vues ChArUco ; grille indépendante de neuf points ; cinq positions pour la vérification des marqueurs surélevés ; distorsion, homographie, parallaxe. Ne pas additionner ces erreurs ni confondre leurs unités/protocoles.
- **Sources :** S02/S05.

### A5 — What sits inside a near-20 Hz loop?

- **Question couverte :** où part le temps, comment la chaîne est-elle instrumentée ?
- **Visuel :** M18 seul, très grand ; accès à la chaîne simplifiée de la slide 06 dans les notes.
- **À l’écran :** “Profile the full loop” ; “Vision · Correction · Serial I/O · Logging”.
- **Notes :** 19,84–19,86 Hz = médianes observées. L’optimisation du traitement image a aidé la boucle ; les sessions avant/après ne constituent pas un benchmark apparié strict. La correction est causale, sans horizon MPC. Les tests Python sont co-développés ; ne pas donner un nombre de cas passés à partir du nombre de fichiers.
- **Sources :** S02/S05/S12.

### A6 — Repeatability and limits

- **Question couverte :** que prouvent les essais et où sont les limites ?
- **Visuels :** deux sous-vues sélectionnables : M19 et M20. Une figure à la fois.
- **À l’écran :** “Two frozen tasks” ; “40 physical arrivals” ; “Evidence within these scenarios”.
- **Notes :** un rover contrôlé physiquement parmi un ou deux agents mobiles ; six agents contrôlés = simulation uniquement. Un essai de la tâche deux agents avait une mauvaise implantation d’obstacles : exclu de ses agrégats, mais arrivée toujours comprise dans 40/40. Des contacts/échecs existent dans les essais exploratoires.
- **Sources :** S02/S12 ; ne pas convertir le résultat des campagnes figées en garantie de sécurité.

- **Modification demandée :** retirer uniquement l’onglet “Digital twin”, sa figure et ses notes associées. Garder A6, les onglets “One moving agent” et “Two moving agents”, et le titre actualisé “Repeatability and limits”.

### A7 — Individual experimental work and physical design

- **Question couverte :** qu’as-tu personnellement conçu, fabriqué et mesuré ?
- **Visuels :** première sous-vue M14/M22 ; deuxième sous-vue M16/M23 ; troisième sous-vue M07, avec M24 accessible si la question porte sur les non-conformités.
- **À l’écran :** identifier explicitement “Individual TIPE”, “Individual preliminary CAD design” et “Team manufacturing project” selon la sous-vue. Ne pas mélanger les attributions.
- **Notes :** TIPE : banc de 46 cm, quatre géométries, vidéo et régressions Python. Cas documenté : sortie de balle 4,0 m/s pour impacteur à 2,2 m/s, cylindre de 12 mm, 3 psi. CAO : assemblage et dimensionnement préliminaires. FAB : deux caractéristiques conformes sur quatre, deux non-conformités diagnostiquées.
- **Sources :** S02/S05/S11.

## 7. Comportement demandé pour la future présentation HTML

### 7.1 Structure et fichiers

- Placer la future V1 dans le même dossier que ce brief, avec `index.html`, `styles.css` et `slides.js`.
- Utiliser du HTML/CSS/JavaScript simple, sans framework, installation npm ou dépendance de diaporama nécessaire à l’exécution.
- Réutiliser les médias locaux par les chemins relatifs du registre. Ne pas recopier tout le portfolio ni charger ses scripts de navigation ou d’analytics.
- Identifier les principales par `s01` à `s20`, les annexes par `a01` à `a07`. Les notes et sources sont rattachées à ces identifiants et ne sont pas affichées dans le cadre projeté.
- Garder les textes exacts et les durées faciles à retrouver dans la structure des slides. Pas de données essentielles générées à partir d’un service distant.
- Employer les polices du portfolio avec repli système. Une indisponibilité de Google Fonts ne doit pas empêcher la présentation ; les médias et commandes fonctionnent sans accès Internet une fois servis localement.

### 7.2 Navigation

- Une slide visible à la fois ; navigation **manuelle**, sans minuterie d’avancement.
- Flèche droite / espace : suivante ; flèche gauche : précédente ; boutons discrets équivalents. Ne pas intercepter ces touches lorsqu’un contrôle interactif les utilise.
- `F` : plein écran ; `O` : vue d’ensemble des 20 principales ; `A` : menu des annexes ; `Échap` : fermer une surcouche. Conserver le comportement natif de sortie du plein écran.
- Afficher `01 / 20` à `20 / 20` et une progression discrète. En annexe, utiliser `A1` à `A7`, sans ajouter ces pages au dénominateur 20.
- Après la slide 20, rester sur la conclusion. L’accès aux annexes se fait volontairement par leur menu ; leur retour restaure la dernière principale consultée.
- Conserver l’identifiant de la slide dans le fragment d’URL, par exemple `#s09`, pour retrouver une page après rechargement.
- Les notes de ce brief sont un support de préparation. Elles restent hors de la surface affichée pendant le partage d’écran ; la V1 n’a pas besoin d’un système de présentateur à deux fenêtres.

### 7.3 Vidéos, images et mise à l’échelle

- Vidéos muettes, `playsinline`, avec poster, lancées à l’entrée de la slide. Précharger les métadonnées ; préparer le média suivant sans charger simultanément toutes les vidéos.
- Une lecture par entrée de slide ; arrêter au point de sortie prévu, conserver l’image finale, proposer une commande de relecture. En quittant la slide, mettre en pause ; à la prochaine entrée, repartir au début de l’extrait.
- Si l’autoplay est refusé, afficher un bouton de lecture sans bloquer la navigation. Si le média échoue, garder le poster et le message de la slide.
- Fournir les commandes vidéo nécessaires sans qu’un clic de lecture provoque aussi un changement de slide. Aucun son à partager pendant l’entretien.
- Les schémas restent vectoriels et les médias gardent leur ratio. Ajuster la présentation aux formats 1920 × 1080, 1440 × 900 et 1280 × 720 ; des bandes de fond sont préférables à des informations coupées.
- Recalculer la taille des cadres au chargement du média, au redimensionnement, à l’entrée dans une slide et au changement d’onglet d’annexe. Les conteneurs de composition restent transparents ; le cadre et ses légendes suivent les dimensions réellement affichées du média.
- La priorité est l’ordinateur en partage d’écran. Sur téléphone, offrir une consultation lisible ; ne pas en faire un second site éditorial avec une autre narration.

## 8. Audit éditorial avant génération

| Élément | Formulation retenue | Erreur à éviter |
|---|---|---|
| Identité | Étudiant ingénieur + M2 recherche en robotique | Diplôme déjà obtenu, expérience senior |
| FAB | Travail physique collectif, non-conformités analysées | Pièce parfaite ou production industrielle validée |
| FANUC | Étude / concept / simulation | Installation en usine, cadence réelle prouvée |
| Frein d’avion | Conception préliminaire individuelle | Prototype validé ou certification |
| Singapour | Co-développement et intégration sur rover terrestre | Auteur unique, essais de vol, calcul entièrement embarqué |
| Planning / correction | Planning hors ligne + correction causale en ligne | MPC achevé, SLAM avancé ou ROS 2 de production |
| 84 % | Erreur moyenne sur grille indépendante : 36,3 → 5,8 mm | Mélanger erreur en pixels, grille et parallaxe |
| ≈20 Hz | Fréquence médiane mesurée | Période garantie à chaque itération |
| 40/40 | Deux campagnes figées, résultats d’équipe | Sécurité ou robustesse universelle |
| TIPE | Banc et analyses individuels, résultats contextualisés | Nouvelle précision, cadence ou taille d’échantillon inventée |
| Master SAR | Spécialisation actuelle : estimation/fusion, perception/mobile, manipulation/commande et ML | Transformer les enseignements en réalisations déjà déployées ou réciter tous les sigles |
| Manuscrit | Premier auteur, under journal review si évoqué | Article accepté ou publié |
| G1 | Disponible, selon la consigne actuelle de Slimane | Reprendre l’ancienne incertitude de plateforme |
| VLA aujourd’hui | Projet en démarrage, lectures et apprentissage actifs | Le sous-valoriser ou annoncer un dataset/modèle/déploiement achevé |
| Motion capture | Piste proposée par Bruneau, acquisition annoncée | Système déjà installé/utilisé ou équivalent à un dataset VLA prêt |
| Lien avec le stage | Proposition d’explorer à l’avance un axe utile à Binabik | Collaboration officielle ou stage déjà convenu |

Ne pas afficher cet audit au milieu des slides : il sert à la rédaction et à la vérification. Les limites utiles doivent être courtes, placées au bon endroit et expliquées naturellement si une question le demande.

## 9. Checklist de réalisation et de répétition

### Pour le présent brief

- [x] 20 slides principales, séparées de 7 annexes.
- [x] Somme des durées : 435 secondes, soit 7 min 15.
- [x] Spécialisation actuelle en SAR présentée juste avant le VLA, avec détail des cours dans les notes et quatre familles visibles.
- [x] Médias principaux et d’annexe identifiés par un fichier réel.
- [x] Disponibilité du G1 et stade actuel du projet alignés sur la demande du 28 octobre.
- [x] Mail de Bruneau pris en compte sans rendre les slides VLA exhaustives.
- [x] Invitation à une orientation utile au stage intégrée à une slide dédiée.

### Pour la future V1 HTML

- [ ] Les 20 principales suivent exactement l’ordre et le rôle du storyboard.
- [ ] Tous les liens relatifs et médias se chargent depuis `diaporama_v1/index.html`, servi depuis la racine du dépôt.
- [ ] Les trois extraits vidéo sont relus en mouvement : FAB entier, FANUC 6–16 s, rover entier. Aucun démarrage ne dépend d’un accès réseau.
- [ ] Les posters et commandes de lecture/relecture fonctionnent si l’autoplay est refusé.
- [ ] Le départ d’une slide arrête sa vidéo ; aucune vidéo cachée ne continue à tourner.
- [ ] Navigation clavier, plein écran, vue d’ensemble, annexes et retour ont été essayés.
- [ ] Sources et notes sont absentes de la surface projetée ; les labels Simulation/Ongoing et le périmètre des essais restent lisibles.
- [ ] Aucun titre, graphique, axe ou robot n’est coupé aux trois tailles ordinateur indiquées.
- [ ] Les figures restent compréhensibles en partage d’écran ; les détails trop fins passent en annexe plutôt que d’imposer une lecture prolongée.
- [ ] La présentation est répétée à voix haute avec les vidéos : cible 7 min 15, acceptation 6–8 minutes, hors interruption de l’interlocuteur.
- [ ] En cas de dépassement, raccourcir les commentaires et déplacer un détail technique en annexe ; ne pas ajouter du texte aux slides ni accélérer toutes les transitions.
- [ ] Les pages, styles et scripts du portfolio existant n’ont pas été modifiés.

## 10. Prompt de reprise pour générer le HTML

> Construis la V1 du diaporama HTML en suivant `BRIEF_DIAPORAMA_HTML_BINABIK_V1.md`. Crée `index.html`, `styles.css` et `slides.js` dans ce même dossier. Réalise les 20 slides principales du storyboard, cible 7 min 15, et les 7 annexes séparées. Réutilise les médias locaux sélectionnés et leurs passages vidéo ; conserve les ratios et la lisibilité. Inspire-toi du thème clair actuel du portfolio, avec de grands médias, très peu de texte et une navigation manuelle. Les slides et repères oraux sont en anglais américain. Introduis le VLA par la spécialisation actuelle en master SAR : estimation et fusion, perception et robotique mobile, manipulation et commande, machine learning. Garde les détails des cours dans les notes. Le Unitree G1 est disponible ; le projet VLA est en démarrage, avec lectures, apprentissage et préparation des expériences. Valorise cette direction et la possibilité d’explorer un axe suggéré par Binabik avant le stage. Respecte le mail de Bruneau pour les pistes futures, les attributions d’équipe et les métriques bornées. Ne modifie pas le portfolio. Vérifie les médias, la navigation et la présentation aux tailles ordinateur indiquées, puis donne les instructions de lancement local et les limites restantes de validation.
