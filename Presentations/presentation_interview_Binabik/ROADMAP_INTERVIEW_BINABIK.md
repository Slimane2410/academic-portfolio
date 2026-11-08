# Roadmap de préparation — Entretien Binabik AI

> **Document de référence réutilisable pour travailler avec ChatGPT, Codex ou une autre IA.**  
> **Version :** 28 octobre 2026  
> **Objectif :** arriver à l'entretien en sachant expliquer mon parcours, comprendre les enjeux de Binabik, présenter mes projets de façon ciblée et explorer un stage de fin d'études pertinent.

---

## 0. Mode d'emploi pour toute IA qui lit ce document

Ce fichier est le **contexte directeur** de ma préparation. Il ne remplace pas les sources originales : lorsqu'un chiffre, une attribution ou un détail technique est important, consulter les documents et le portfolio listés en § 11.

**Instructions permanentes :**

1. Suivre **l'étape que je demande**, sans exécuter automatiquement toute la roadmap ni partir dans des travaux annexes.
2. Privilégier le concret, l'exactitude technique et les formulations naturelles en **anglais américain** quand on prépare l'oral.
3. Ne pas inventer de mission ouverte, de besoin interne, de financement, de client, de technologie propriétaire ni de résultat technique.
4. Distinguer clairement **faits vérifiés**, **hypothèses raisonnables** et **questions à poser à Binabik**.
5. Distinguer, pour mes projets, **réalisations individuelles**, **réalisations d'équipe**, **travaux en cours** et **objectifs futurs**.
6. Ne pas me positionner principalement comme *controls engineer*. Mes centres d'intérêt prioritaires sont **perception, localisation/estimation d'état, intégration robotique, robot learning**, puis motion planning et validation expérimentale.
7. Ne pas me faire passer pour un expert de ROS 2 en production, C++, VLA fine-tuning ou manipulation humanoïde. Les compétences correspondantes sont encore en développement.
8. Ne pas transformer un entretien exploratoire de 30 minutes en présentation de soutenance académique.
9. À la fin d'une séance, restituer : **ce qui est acquis**, **ce qui reste à faire**, **la prochaine action prioritaire**. Ne pas affirmer qu'une étape est terminée sans mon accord.

### Phrase de lancement dans une nouvelle conversation

> « Voici mon document de référence pour l'entretien Binabik. Nous travaillons uniquement sur **l'étape [X]**. Respecte les faits et limites indiqués, aide-moi à produire le livrable correspondant, puis évalue si le critère de validation est atteint. »

---

## 1. Contexte de l'entretien

| Élément | Information |
|---|---|
| **Entreprise** | Binabik AI / Binabik AG, startup de Physical AI à Winterthur, Suisse |
| **Interlocuteur** | **Giovanni Toffetti**, cofondateur et **CPO (Chief Product Officer)** |
| **Origine du rendez-vous** | Candidature spontanée envoyée au CTO **Pascal Sager**, puis transmission interne |
| **Date** | **Jeudi 29 octobre 2026** |
| **Heure** | **15 h 30–16 h 00 CET**, même heure à Paris et à Winterthur |
| **Format** | **Entretien introductif de 30 minutes** : faire connaissance, explorer l'adéquation réciproque et discuter d'un potentiel stage |
| **Demande explicite de Pascal** | Préparer **quelques slides** sur mes projets, en ciblant notamment **humanoïdes, VLA/RL et robotique traditionnelle** |
| **Ma réponse à Giovanni** | J'ai accepté l'horaire et annoncé que je préparerais quelques slides ciblées |
| **Stage visé** | **Six mois à temps plein à partir de février 2027** |
| **Objectif à long terme** | Contribuer à une entreprise de robotique en Suisse, avec une éventuelle poursuite en CDI **si le fit est bon**, sans présenter cela comme acquis |

**Interprétation :** la transmission par Pascal et l'invitation sont encourageantes, mais **aucun stage, sujet, budget ou CDI n'a été confirmé**. Giovanni peut chercher à évaluer le parcours, les motivations, les compétences techniques et les missions possibles, pas nécessairement à conduire un examen technique approfondi.

**Objectif principal de l'entretien :** que Giovanni comprenne que je peux contribuer à la mise au point de robots physiques fiables et que mon intérêt actuel pour les humanoïdes / VLA prolonge logiquement cette expérience.

**Objectif secondaire :** apprendre où Binabik a réellement besoin d'aide, quel périmètre de stage serait utile et quelles seraient les prochaines étapes.

---

## 2. Profil à présenter et limites à respecter

### 2.1 Présentation rapide

- Étudiant ingénieur à **Arts et Métiers ParisTech** ; également en **Research Master's (M2) in Advanced Systems and Robotics** à **Sorbonne Université**.
- Expérience de recherche et de développement robotique en **Paris / Singapour** avec **PIMM / CNRS@CREATE**.
- Intérêt prioritaire : **visual perception, localization/state estimation, real-robot integration, robotics software, robot learning**.
- Projet universitaire **en cours** : **Vision-Language-Action (VLA)** pour manipulation d'assistance sur **Unitree G1**.
- Recherche un **stage de fin d'études de six mois, février 2027** ; motivé par le travail en petite équipe, sur robot réel, avec possibilité éventuelle de rester après diplôme.

### 2.2 Projet phare — Paris / Singapour

**Positionnement :** « turning perception and planning algorithms into a functioning, measurable real-robot system ».

**Éléments défendables, sous réserve de vérifier toute formulation sur le CV et les sources de projet :**

- **Co-développement** d'une chaîne Python/OpenCV de localisation par caméra surplombante et marqueurs **ArUco**, intégrée à la navigation d'un rover.
- Calibration intrinsèque avec **20 vues ChArUco** ; **0,191 pixel** de RMS de reprojection (mesure de calibration, distincte de l'erreur de localisation en millimètres).
- Réduction de l'erreur moyenne de localisation sur **grille au sol indépendante de neuf points : 36,3 → 5,8 mm, soit ~84 %**.
- Correction de parallaxe liée à la hauteur : **60,8 → 11,6 mm** sur cinq positions de validation (mesure séparée).
- Pipeline de robot réel avec **médiane 19,84–19,86 Hz** (environ 20 Hz).
- **Deux campagnes figées de 20 essais**, **40/40 arrivées à l'objectif, zéro collision** dans ces scénarios expérimentaux. **Résultat d'équipe, dans un environnement contrôlé**, et non garantie générale de fiabilité.
- Simulation de **100 800 cas** et **39 expériences physiques appariées à un jumeau numérique**, si une discussion technique le justifie.
- Participation à des tests `pytest` unitaires et de régression ; ne pas confondre nombre de fichiers et nombre de tests réussis.
- **Premier auteur** d'un manuscrit scientifique **soumis et toujours en cours d'évaluation** (*under review*), pas publié ni accepté.

**Ne pas oublier :** expliquer précisément **mon rôle** dans la calibration, le développement, l'intégration, le diagnostic et les expériences. Ne pas m'attribuer tout le travail d'équipe.

### 2.3 Projet Unitree G1 / VLA — en cours

- Projet de Master sous la supervision de **Prof. Olivier Bruneau**.
- **Cible du projet :** téléopération et démonstrations → préparation de données multimodales (consignes de langage, RGB/RGB-D, actions) → adaptation/fine-tuning envisagé de modèles **OpenPI π₀/π₀.₅** → déploiement/évaluation sur robot.
- Éventuelles pistes de simulation **MuJoCo / Isaac Lab**, retargeting et motion capture encore **exploratoires**.
- **À ne pas prétendre :** dataset finalisé, VLA entraîné, politique déployée sur G1, résultats de manipulation mesurés, expérience industrielle de téléopération.
- Préparer une réponse très claire à : *What have you actually implemented so far?* — ne mentionner que les avancées effectivement réalisées à la date de l'entretien.

### 2.4 Autres projets disponibles, uniquement si pertinents

- **TIPE :** banc expérimental d'impacts construit individuellement ; analyse vidéo Python, incertitudes et régressions.
- **Fabrication / métrologie :** fonderie, usinage, mesure CMM et diagnostic de non-conformités ; utile pour le contexte industriel.
- **PJT AI — Offline Industrial Data Assistant :** pipeline Python/SQLite/LLM local ; lien possible avec données et outils, **pas équivalent à un VLA**.
- **FANUC casting cell :** simulation de cellule industrielle ; **pas** déploiement sur une ligne de production réelle.

---

## 3. Ce que l'on sait — et ne sait pas — de Binabik

### 3.1 Faits / positionnement public

- Binabik développe une **couche logicielle d'intelligence pour robots existants**, notamment humanoïdes et manipulateurs mobiles, pour automatiser des tâches industrielles variables.
- Cas d'usage mis en avant : **machine tending**, manutention de cartons, intralogistique.
- Communication publique autour de **compétences robotiques réutilisables**, de l'**orchestration** de tâches et de l'**apprentissage à partir de données**.
- **Binabik Academy** présente un programme sur **Unitree G1**, téléopération, jeux de démonstration, simulation et VLA.
- Présence à **Winterthur** ; liens de recherche avec l'écosystème **ZHAW** ; partenariat matériel **AGIBOT** annoncé.
- Écosystème technique public : références à **ROS 2**, robot learning, données et intégration. Dépôts GitHub publics dont `mcp-rosbags` ; certains dépôts Unitree / Isaac sont des **forks** et non des développements originaux prouvés.
- Les anciennes offres de recrutement renseignent sur les thèmes recherchés, mais **ne prouvent pas qu'un poste soit actuellement ouvert**.

### 3.2 À ne pas présenter comme des faits

- Architecture interne exacte ou choix de modèles privés.
- Présence confirmée de SLAM, EKF, VIO ou d'un système précis de perception 3D chez Binabik.
- Nombre de clients payants, robots autonomes effectivement déployés, performances mesurées en usine.
- Financement actuel, budget pour stagiaire, rémunération, encadrement, possibilité concrète de CDI.
- Existence d'un sujet de stage spécifique déjà proposé pour février 2027.

### 3.3 Fil conducteur provisoire à TESTER après étude de l'entreprise

> **Proposition initiale, pas décision finale :** « I have experience connecting perception, planning and software to reliable behavior on physical robots. I now want to build on that foundation in humanoid robotics and robot learning, with a focus on making systems work outside a demo. »

**Important :** ne pas figer ce fil rouge avant l'étape 1. Il doit être adapté à ce que l'analyse de Binabik et du profil de Giovanni révèle.

---

## 4. Roadmap principale — ordre de travail validé

| Étape | Priorité | Durée de travail actif indicative | Résultat concret |
|---|---|---:|---|
| **1. Comprendre Binabik et Giovanni** | Critique | 45–60 min | Synthèse entreprise + 3 défis techniques + 3 correspondances avec mon profil |
| **2. Définir le fil rouge et les slides** | Critique | 20–30 min | Message central + plan narratif + sélection de preuves |
| **3. Lancer Codex pour générer une V1** | Critique | 10–20 min pour le brief | Codex travaille sur le diaporama et ses supports ; ce n'est pas une étape de recherche passive |
| **4. Préparer l'oral anglais en parallèle** | Critique | 45–60 min | Pitch, explication de Singapour/G1, réponses aux objections |
| **5. Réviser les slides et tester la technique** | Élevée | 30–45 min | Slides épurées, données vérifiées, démo média et partage d'écran testés |
| **6. Simuler l'entretien et préparer les questions** | Critique | 45–60 min | Une simulation de 30 min + corrections ciblées |

**Règle de gestion du temps :** garder impérativement du temps pour **l'oral et la simulation**. La beauté des slides est secondaire à la clarté du discours. Le temps de génération de Codex n'est pas compté comme temps de travail personnel.

### Étape 1 — Comprendre l'entreprise AVANT le fil rouge

**Objectif :** comprendre le produit, les problèmes réels et l'interlocuteur ; pas mémoriser toute l'actualité de Binabik.

**Travail :**

- Pouvoir expliquer le modèle d'activité avec l'exemple d'un robot qui **charge/décharge une machine** (*machine tending*).
- Décomposer une tâche de robot industriel : **observation/perception → état du monde et de la machine → choix de skill/policy → commande/exécution → vérification de succès/échec → données d'amélioration**. C'est un **schéma conceptuel**, pas la description certifiée de leur code.
- Comprendre la différence entre **robot constructeur (OEM)** et **logiciel d'intelligence / intégration pour robots existants**.
- Examiner **Binabik Academy / Unitree G1** et les anciennes descriptions de rôles robot learning, téléopération et intégration.
- Se renseigner sur **Giovanni** : CPO, domaines publiquement associés à son parcours (systèmes robotiques distribués, cloud/edge, intégration) ; ne pas déduire ses questions exactes de sa fonction.
- Choisir **trois défis plausibles** et expliquer pourquoi ils comptent : par exemple qualité/synchronisation des démonstrations, perception/calibration/frames, robustesse et évaluation sur robot réel.
- Distinguer explicitement défis documentés et hypothèses.

**Livrable :** une fiche d'une page avec (a) présentation en langage simple ; (b) architecture conceptuelle ; (c) 3 défis et leurs preuves ; (d) 3 points de contact avec mon parcours ; (e) 3 inconnues à clarifier avec Giovanni.

**Critère de validation :** expliquer en **90 secondes sans notes** ce que fait Binabik, pourquoi c'est difficile et en quoi mon expérience peut être utile.

**Prompt de reprise :**

> « Fais-moi travailler sur l'étape 1 de la roadmap. Pars du dossier de recherche Binabik et complète/contrôle seulement ce qui est nécessaire à la date du 28 octobre 2026. Explique-moi le produit par l'exemple concret d'une tâche de *machine tending*, puis interroge-moi pour vérifier que j'ai compris. Distingue faits, inférences et inconnues. Termine par une fiche de synthèse d'une page. »

### Étape 2 — Définir la stratégie narrative

**Objectif :** décider **ce que Giovanni doit retenir**, avant d'ouvrir un outil de présentation.

**Travail :**

1. Écrire une **phrase centrale** spécifique à Binabik.
2. Choisir **trois preuves au maximum** : (i) robot physique Singapour ; (ii) vision/calibration/mesures ; (iii) G1/VLA en cours et volonté de progresser.
3. Relier chaque preuve à un **problème métier ou technique** sans inventer leur besoin interne.
4. Formuler un **type de contribution souhaité**, en laissant à Binabik la possibilité de suggérer une autre mission.
5. Choisir ce qui sera **dit**, **montré** ou simplement gardé en **backup**.

**Livrable :** un *message map* : **message → preuves → pertinence pour Binabik → phrase anglaise orale**, puis plan de slides.

**Critère de validation :** être capable de justifier le rôle de chaque slide en une phrase ; aucune slide ne doit être une liste exhaustive du CV.

**Prompt de reprise :**

> « Nous sommes à l'étape 2. Utilise notre synthèse de Binabik et mon profil pour proposer trois fils rouges distincts, avec avantages/risques, puis recommande celui qui maximise la crédibilité et l'adéquation à l'entretien de Giovanni. Ne rédige pas encore le diaporama. Produis le message map et une structure de 3–4 slides. »

### Étape 3 — Générer le diaporama avec Codex

**Objectif :** construire un support **très visuel, léger, professionnel et facile à commenter à l'oral**.

**Format recommandé, ajustable après étape 2 :** **4 slides principales pour 4–5 minutes**, plus 2–3 slides de secours (*backup*) ; ne pas transformer « a couple of slides » en présentation longue.

| Slide | Angle | Contenu recommandé | Durée cible |
|---|---|---|---:|
| **1 — Who I Am** | Contexte rapide | ENSAM + Sorbonne, robot réel, centre d'intérêt, disponibilité | 30–40 s |
| **2 — From Algorithms to Real Robots** | Preuve centrale | Schéma/visuel du rover ; caméra ArUco ; pipeline ; vidéo ; 2–3 métriques exactes | 1 min 30–2 min |
| **3 — Unitree G1 / VLA: Ongoing Work** | Proximité avec Binabik | Objectif du projet, téléop → démonstrations → données → policy ; **statut réel clairement indiqué** | 45–60 s |
| **4 — Where I Could Contribute** | Projection | 2–3 domaines : perception/calibration, robot integration/validation, data quality/robot learning | 40–50 s |

**Design :** photos et vidéos originales du portfolio, grand espace blanc, un message par slide, quelques mots clés, pas de paragraphes, pas de surabondance d'animations. La présentation n'a pas à montrer le code si une visualisation suffit. Éviter les logos ou images artificiellement associés à mes projets.

**Sources pour Codex :**

- Portfolio : <https://slimaneaouanouk.com/>
- Showcase Singapour (photos/vidéos) : <https://slimaneaouanouk.com/paco-showcase/index.html>
- CV Binabik `.tex` transmis
- Dossier société `Company_Research_Binabik_AI(1).md`
- Dossier de candidature `APPLICATION_INFO(20261028-100259).md`
- Ce Markdown **et** le fil rouge final produit à l'étape 2
- Autres fichiers de projet locaux uniquement si disponibles et autorisés ; **ne pas inventer de fichiers ou de contenu**.

**Consignes Codex :**

- Explorer les contenus accessibles, repérer **les meilleurs visuels réels** et proposer l'attribution des métriques.
- Choisir une méthode de production adaptée à l'environnement ; produire un support **modifiable** et une version facile à présenter si la tâche est techniquement réalisable.
- **Ne pas** déduire que le projet G1 est déjà déployé à partir d'une description au futur ou d'un titre ambitieux.
- Vérifier les chiffres et les limites d'expériences ; ne pas présenter 40 essais d'équipe comme 40 preuves universelles de sécurité.
- Prévoir des **notes d'oral** séparées, et des slides *backup* sur calibration, architecture ou tests si disponibles.
- Donner pour chaque slide : titre, message, visuel/source, métrique, phrase de transition.

**Livrable :** V1 du diaporama + mini-tableau d'audit **slide / message / preuve / origine / risque d'exagération**.

**Critère de validation :** un spectateur comprend le message principal en **5 secondes par slide** ; tous les chiffres sont traçables ; présentation totale **≤ 5 minutes**.

**Prompt de reprise :**

> « Nous sommes à l'étape 3. Construis un diaporama de 3–4 slides pour un entretien introductif de 30 min chez Binabik. Utilise comme direction **[COLLER LE FIL ROUGE VALIDÉ]** et les fichiers/visuels réels de mon portfolio. Style minimaliste, très visuel, grandes figures, presque pas de paragraphes. Prévois 4–5 min d'oral, et quelques slides backup. Respecte strictement les attributions et le caractère *ongoing* du G1. Avant d'exporter, vérifie chaque métrique contre les sources et fournis un audit de chaque slide. »

### Étape 4 — Préparer l'anglais oral PENDANT que Codex produit la V1

**Objectif :** savoir parler naturellement, **sans lire les slides** ni réciter un texte mot pour mot.

**À préparer :**

- **Self-introduction** : 45–60 secondes.
- **Why Binabik?** : 30–45 secondes, argument spécifique au produit.
- **Singapore project** : version 30 secondes, version 2 minutes, version technique 5 minutes.
- **Unitree G1 project** : 45–60 secondes, **statut précis et honnête**.
- **What could you contribute?** : 30–45 secondes, 2–3 domaines réalistes.
- **What are you looking for in an internship?** : rôle, apprentissage, valeur produite et disponibilité.

**Questions techniques probables à pratiquer :**

1. *What was your exact contribution in Singapore?*
2. *How did the localization pipeline work?*
3. *How did you measure the 84% improvement?*
4. *How did you handle calibration errors, latency and testing?*
5. *What was the most difficult problem you faced on the real robot?*
6. *What is your current level with ROS 2 and Python?*
7. *Have you actually trained or deployed a VLA model?*
8. *How does your navigation experience transfer to humanoid manipulation?*
9. *What type of internship project would you be most interested in?*
10. *Why a startup rather than a research lab?*

**Méthode :** ne pas écrire 10 longs discours à mémoriser. Construire pour chaque réponse **3 mots-clés / structure → exemple concret → résultat / limite → lien avec Binabik**. Prononcer à voix haute et se chronométrer.

**Livrable :** fiche orale compacte en anglais : pitch, phrases de transition, mots-clés des projets, réponses courtes aux questions délicates.

**Critère de validation :** présenter Singapour en 2 minutes, expliquer G1 honnêtement et répondre sans notes à une relance technique.

**Prompt de reprise :**

> « Nous sommes à l'étape 4. Sois mon coach d'entretien en anglais américain. Aide-moi à produire un pitch naturel et des plans de réponse en 3–5 mots-clés, pas de textes surécrits. Pose-moi les questions une par une, corrige grammaire, clarté et précision technique, puis fais-moi reformuler. Mon objectif est un niveau clair, crédible et spontané. »

### Étape 5 — Révision de la V1 et contrôle pratique

**Objectif :** retirer tout ce qui nuit à la compréhension et prévenir les incidents techniques.

**Contrôles de contenu :**

- La présentation **commence rapidement** : pas de slide de titre superflue ni longue biographie.
- Le temps de parole n'est pas dominé par une longue description d'optimisation mathématique.
- Les images et vidéos apportent une **preuve visuelle**, sans distraire du récit.
- La slide Singapour illustre une **difficulté d'ingénierie**, la solution, le résultat et ma contribution.
- La slide G1 **dit explicitement « ongoing »**, sans livrables fictifs.
- La conclusion ouvre le dialogue sur **leurs problèmes**, au lieu de réciter une demande de poste figée.
- Le texte anglais est naturel à prononcer, non académique ou publicitaire.

**Contrôles techniques :**

- Fichier final ouvert, police et mise en page lisibles.
- Vidéos lisibles et **locales si possible**, pour éviter une dépendance au réseau pendant le partage d'écran.
- Partage d'écran, transitions et son testés ; présentation utilisable **sans vidéo** si besoin.
- Deux versions : **présentation** et **secours (PDF statique)**, si l'outil choisi les permet.
- Notifications coupées, onglets non pertinents fermés, CV et portfolio facilement accessibles.

**Livrable :** V2 prête à l'usage et vérifiée.

**Critère de validation :** répétition chronométrée **≤ 5 minutes**, sans incohérence ni incident bloquant.

**Prompt de reprise :**

> « Nous sommes à l'étape 5. Audite ce diaporama comme si tu étais Giovanni Toffetti pendant un entretien de 30 min : message, pertinence pour Binabik, lisibilité, surpromesses, ordre, longueur, qualité visuelle. Priorise les corrections qui changent vraiment l'impact et vérifie les faits. »

### Étape 6 — Simulation + questions à poser

**Objectif :** s'entraîner à une vraie discussion, pas seulement à une présentation fluide.

**Structure indicative du rendez-vous réel (hypothèse flexible) :**

- **0–3 min :** salutations, présentation mutuelle, contexte.
- **3–8 min :** slides préparées par le candidat.
- **8–21 min :** questions techniques, parcours, motivations, domaines de contribution.
- **21–28 min :** découverte des besoins, questions du candidat, calendrier et suite.
- **28–30 min :** synthèse, remerciement et prochaines étapes.

L'interlocuteur peut organiser la réunion très différemment : **s'adapter à son rythme**. Proposer les slides naturellement : *“I prepared a few slides, as Pascal suggested. Would it be helpful if I quickly walked you through them?”*

**Questions à Giovanni (préparer quatre, en poser deux ou trois selon le temps) :**

1. *What are the biggest technical challenges your team is currently facing when moving from demos to reliable robot deployments?*
2. *Where do you think someone with my background in perception, robot integration and experimental validation could contribute most?*
3. *How much of the team's current work focuses on robot learning versus integration and deployment on real hardware?*
4. *If an internship goes well, could there potentially be an opportunity to continue with the team afterward?*

**Questions complémentaires si elles surgissent naturellement :** priorités 2027, type de robot et accès hardware, supervision, livrables de six mois, mode de travail, prochaine étape du recrutement. Garder rémunération et modalités administratives comme points à traiter avant toute décision, sans en faire le cœur du premier échange.

**Simulation :** l'IA joue Giovanni, alterne questions ouvertes et relances techniques, demande à distinguer mes contributions des résultats d'équipe, interrompt si les réponses sont longues, puis évalue : **clarté, exactitude, anglais, pertinence Binabik, capacité d'écoute, gestion du temps**.

**Livrable :** une simulation complète + **3 corrections prioritaires maximum** et réponses améliorées.

**Critère de validation :** rester clair pendant 30 minutes, répondre honnêtement aux points faibles et poser au moins deux questions utiles.

**Prompt de reprise :**

> « Nous sommes à l'étape 6. Simule un entretien introductif de 30 minutes avec Giovanni Toffetti, CPO de Binabik. Interroge-moi **une question à la fois**, en anglais, avec des relances réalistes sur Singapour, Unitree G1, ma contribution et mes intérêts de stage. Ne me facilite pas systématiquement les réponses et ne présume pas de connaissances privées de Binabik. À la fin, fais un bilan chiffré par critère, puis propose uniquement les trois corrections à plus fort impact. »

---

## 5. Contributions potentielles à évoquer (NON confirmées comme offres)

| Angle | Problème plausible chez Binabik | Ce que je peux honnêtement valoriser | Point à approfondir |
|---|---|---|---|
| **Perception / calibration / géométrie** | Comprendre les positions d'objets, caméra, robot et préhenseur, et diagnostiquer les erreurs | ArUco, calibration ChArUco, homographie, parallaxe, évaluation en mm | Frames/TF2, hand-eye calibration, RGB-D et géométrie 3D |
| **Intégration et validation sur robot réel** | Rendre un système répétable et mesurer pourquoi il échoue | Boucle intégrée ~20 Hz, essais physiques, logs, analyse sim-to-real, `pytest` | ROS 2 pratique, test d'intégration, critères d'acceptation |
| **Démonstrations / qualité de données** | Synchroniser images, actions, joints, temps et sélectionner de bonnes séquences | Expérience instrumentation/logs ; projet G1 en cours | ROS bags/MCAP, LeRobot, Unitree SDK, schémas d'épisodes |
| **Évaluation de skills et policies** | Mesurer taux de succès, robustesse, temps de cycle, interventions et échecs | Campagnes de tests reproductibles ; analyse statistique et Python | Protocoles VLA, resets, variations contrôlées, OOD |

**Règle :** ces pistes servent à **ouvrir la discussion** ; la mission finale doit émerger d'un besoin réel de Binabik et d'un périmètre réalisable sur six mois.

---

## 6. Questions sensibles et réponses à préparer

| Question ou objection | Direction de réponse |
|---|---|
| *Have you fine-tuned a VLA?* | **Not yet.** Le projet G1 est en cours ; expliquer l'objectif réel et mes compétences immédiatement démontrables. |
| *How strong are you in ROS 2?* | Séparer **coursework / essais personnels / projets matériels réellement développés**. Ne pas annoncer d'expérience production fictive. |
| *You worked on mobile robots, not humanoid manipulation.* | Montrer le transfert **perception → software integration → physical experiments → reliability**, puis reconnaître les particularités de la manipulation. |
| *What did you personally do?* | Nommer précisément mes tâches, puis distinguer clairement les résultats de l'équipe et mes résultats mesurés. |
| *Why our startup?* | Produit logiciel qui rapproche perception, robot learning et fonctionnement réel en industrie ; intérêt pour apprentissage rapide et impact concret. |
| *What if we need something different?* | Rester ouvert à des sujets voisins d'intégration, data, perception, évaluation ; éviter une mission purement répétitive sans contenu ingénierie. |
| *Could you stay after the internship?* | Oui, l'idée m'intéresse **si bonne adéquation réciproque**, sans exiger de garantie à ce stade. |
| *Do you have Swiss work authorization?* | Citoyen **français / UE** ; pas de permis suisse actuellement. Rester prudent sur les procédures, sans promettre que toute formalité est déjà réglée. |

---

## 7. Checklist finale — « Je suis prêt si… »

### Compréhension

- [ ] Je peux expliquer **Binabik en 90 secondes** sans notes.
- [ ] Je peux citer **trois défis techniques** et dire lesquels sont vérifiés ou seulement plausibles.
- [ ] Je sais qui est **Giovanni** et pourquoi son regard produit/systèmes est pertinent.

### Présentation

- [ ] Mon **fil rouge est explicite**, adapté à Binabik et mémorisable en une phrase.
- [ ] Mes slides se présentent en **4–5 minutes maximum**.
- [ ] Mes visuels proviennent de sources réelles et mes chiffres sont exacts et correctement attribués.
- [ ] Le projet G1 est montré comme **ongoing**, non comme un produit achevé.

### Oral

- [ ] Je peux me présenter en **45–60 secondes**.
- [ ] Je sais expliquer **Singapour en 2 minutes**, puis répondre en détail sur calibration, mesures, timing et essais.
- [ ] Je sais décrire le projet **G1 en 45–60 secondes** sans exagérer son état.
- [ ] Je peux donner **2–3 contributions potentielles** et expliquer ce que je dois encore apprendre.
- [ ] Je peux répondre honnêtement aux questions sur **ROS 2, VLA, Python et contributions personnelles**.
- [ ] J'ai préparé **quatre questions pour Giovanni**, en gardant deux prioritaires.
- [ ] J'ai fait **une simulation complète** ou, si le temps manque, 10–15 minutes de questions difficiles à voix haute.

### Logistique

- [ ] Lien de réunion reçu et horaire vérifié (**29 octobre, 15h30 CET**).
- [ ] Partage d'écran, médias, notifications, micro et connexion testés.
- [ ] CV, portfolio et support de secours accessibles.

**Seuil de préparation :** compréhension solide + preuves honnêtes + discours fluide + questions utiles. **Ne pas retarder l'oral pour perfectionner les slides.**

---

## 8. Priorisation si le temps devient très limité

**Si moins de 2 heures de travail actif restent :**

1. 20 min : comprendre en termes simples Binabik + 2 défis principaux.
2. 15 min : figer une phrase de fil rouge et un plan de **3 slides**.
3. 35 min : préparer l'explication orale Singapour, G1 et *Why Binabik?*.
4. 25 min : pratiquer les questions difficiles à voix haute.
5. 15 min : vérifier slides et lien de réunion.

**Ce qui passe au second plan :** lecture détaillée d'articles scientifiques, revue de tous les dépôts GitHub, nouvelles compétences profondes en ROS 2/VLA, animations et design sophistiqué.

---

## 9. Résultat recherché à la fin de l'entretien

Il serait déjà très positif d'obtenir :

- Une compréhension plus précise **du besoin réel de Binabik** et des tâches potentiellement confiées à un stagiaire.
- Une perception de moi comme **étudiant crédible, techniquement sérieux, motivé et capable d'apprendre rapidement**.
- Un accord sur un **prochain échange, une étude de projet ou des documents supplémentaires**, si l'intérêt est réciproque.

**Ne pas mesurer le succès uniquement à une offre immédiate.** Le premier rendez-vous a explicitement pour objet de déterminer s'il y a adéquation des deux côtés.

### Après l'entretien : mini-débrief à renseigner

```text
Date : 29/10/2026
Interlocuteur : Giovanni Toffetti
Ce que j'ai appris sur le produit :
Besoins techniques concrets cités par Binabik :
Mission(s) potentielle(s) :
Points sur lesquels j'ai convaincu :
Points techniques à améliorer :
Informations administratives / RH à clarifier :
Prochaine étape évoquée et date :
Action de suivi (email, document, portfolio, autre) :
```

---

## 10. État d'avancement — à maintenir pendant la préparation

| Étape | Statut initial | Livrable / note d'avancement |
|---|---|---|
| 1 — Comprendre Binabik | **À faire** | |
| 2 — Fil rouge | **À faire** | |
| 3 — Codex diaporama V1 | **À faire** | |
| 4 — Anglais oral | **À faire** | |
| 5 — Révision / tests | **À faire** | |
| 6 — Simulation | **À faire** | |

**Note :** la candidature et la confirmation du rendez-vous sont déjà faites. Ne pas revenir à la préparation d'un email initial de candidature.

---

## 11. Sources et ordre de confiance

### Sources personnelles remises pour cette préparation

1. **`mail_binabik.rtf`** — **source prioritaire** sur les mots exacts de Pascal et Giovanni, la date, la durée, les slides demandées et le statut de l'échange.
2. **`Resume_Slimane_AOUANOUK_Binabik_AI.tex`** — **source prioritaire** pour les formulations de CV, compétences, chiffres et limites du projet G1.
3. **`APPLICATION_INFO(20261028-100259).md`** — stratégie de candidature, preuves, attribution des résultats, précautions.
4. **`Company_Research_Binabik_AI(1).md`** — recherche entreprise datée du **25 octobre 2026**, très riche mais ne pas confondre faits, inférences et statut actuel.
5. **Portfolio public :** <https://slimaneaouanouk.com/> ; Singapour : <https://slimaneaouanouk.com/paco-showcase/index.html>.

### Ressources publiques utiles (à recontrôler si le détail est décisif)

- Binabik : <https://binabik.ai/>
- Équipe : <https://binabik.ai/team>
- Academy / G1 : <https://academy.binabik.ai/courses/vla-humanoid-robots>
- Carrières : <https://binabik.ai/open-positions>
- LinkedIn entreprise : <https://www.linkedin.com/company/binabik/>
- Giovanni Toffetti : <https://www.linkedin.com/in/giovannitoffetti/> ; <https://gtoff.github.io/>
- Pascal Sager : <https://sagerpascal.github.io/>
- GitHub Binabik : <https://github.com/binabik-ai>
- `mcp-rosbags` : <https://github.com/binabik-ai/mcp-rosbags>

**Hiérarchie pour les faits sur moi :** preuves détaillées de projet et CV final vérifié > synthèses de candidature > hypothèses narratives.  
**Hiérarchie pour les faits sur Binabik :** emails directs et informations officielles récentes > annonces historiques / articles publics > déductions.  
**Si deux sources divergent :** signaler la divergence et demander une vérification ; ne pas inventer de résolution.

---

**Principe directeur final :** **comprendre Binabik → choisir un angle pertinent → construire des slides courtes → être excellent à l'oral → écouter leurs besoins et transformer la rencontre en prochaine étape.**
