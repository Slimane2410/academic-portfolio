# FIL ROUGE — Entretien Binabik AI

**Document de contexte directeur pour ChatGPT, Codex ou toute autre IA**  
**Version :** 28 octobre 2026  
**Candidat :** Slimane AOUANOUK  
**Entreprise :** Binabik AI (Winterthur, Suisse)  
**Entretien :** 29 octobre 2026, 15 h 30 CET, 30 minutes avec Giovanni Toffetti (Co-founder / CPO)  
**Objectif :** préparer une présentation orale courte, authentique et ciblée sur un stage de fin d'études de six mois à compter de février 2027.

> **STATUT : FIL ROUGE NARRATIF DE RÉFÉRENCE.** Ce document explique **l'histoire que le candidat veut raconter**. Il ne constitue **ni un plan de diapositives validé, ni un script à réciter mot pour mot, ni une liste de missions offertes par Binabik**. Toute IA qui le reçoit doit préserver le message, les relations entre les projets et les limites factuelles ci-dessous. Elle pourra ensuite proposer des supports, des transitions ou des formulations seulement lorsque Slimane le demandera.

---

## 1. L'idée maîtresse

### Version courte en français

> Je suis un étudiant ingénieur qui aime comprendre les problèmes industriels, concevoir des solutions techniques, relier des algorithmes à des systèmes physiques, puis les tester et les améliorer expérimentalement. Ma formation Arts et Métiers m'a apporté une culture mécanique et industrielle ; mon projet Paris–Singapour m'a permis de développer et de valider un système robotique réel ; mon projet actuel sur Unitree G1 me conduit vers le robot learning et les VLA. Je veux réunir ces compétences pour contribuer à des robots **fiables, adaptables et réellement utiles** dans l'industrie.

### Formulation principale en anglais américain

**“From engineering real-world systems to reliable and adaptable Physical AI.”**

Version plus naturelle pour l'oral :

> **“What connects my projects is that I enjoy the full engineering process: understanding a real-world problem, designing a solution, integrating software with hardware, and testing and improving it through experiments. My research experience in Singapore really strengthened that approach. Now, I'm bringing the same mindset into humanoid robotics and robot learning.”**

### Ce que Giovanni doit retenir

1. **Practical industrial understanding :** Slimane comprend des opérations, machines et contraintes concrètes grâce à Arts et Métiers, à la fabrication et à une expérience de terrain.
2. **Real robotics engineering :** il a co-développé une chaîne de robotique mobile reliant planning, perception, commande et hardware, avec validation physique mesurée.
3. **Experimental engineering mindset :** il sait concevoir des protocoles, instrumenter, mesurer, diagnostiquer, corriger, vérifier et documenter ; ce n'est **pas** un simple exécutant de tests.
4. **Mechanical + software breadth :** il dispose d'une base en CAO/CAD, conception mécanique, fabrication et calcul, en plus de Python et de l'intégration robotique.
5. **Forward-looking fit :** il développe actuellement ses compétences en manipulation humanoïde et VLA, sans prétendre avoir déjà déployé un modèle appris.

**Identité professionnelle visée :** *Hands-on Robotics Engineering — Perception, Integration & Experimental Validation*, avec une profondeur complémentaire en *Mechanical / Industrial Engineering* et un intérêt croissant pour le *Robot Learning*.

**À éviter :** se présenter en priorité comme *controls engineer*, *pure test engineer*, spécialiste de conception mécanique/CAD industrielle ou expert confirmé du fine-tuning VLA. Les tests et la mécanique sont des compétences **au service de la robotique**, pas une réorientation hors de la robotique.

---

## 2. Le fil rouge sous forme de flèches

```text
[1] UNDERSTAND THE REAL-WORLD PROBLEM
    Arts et Métiers — FAB (foundry, CNC, CMM) + stage ouvrier sur chantier
    → Machines, travail manuel, précision, contraintes de production et de sécurité
                             ↓
    "How could some repetitive physical tasks be automated?"
                             ↓
[2] DESIGN AN ENGINEERING SOLUTION
    FANUC automated casting cell + CAD / individual aircraft brake design
    → Choix du robot, préhenseur, séquence, simulation, conception mécanique
                             ↓
    "A convincing design or simulation is not yet a working physical robot."
                             ↓
[3] INTEGRATE SOFTWARE AND HARDWARE ON A REAL ROBOT
    PIMM / CNRS@CREATE — Paris & Singapore
    → Offline trajectory planning + OpenCV/ArUco localization
      + online correction + rover commands + experiment logs
                             ↓
    "How do we know that the integrated system actually works?"
                             ↓
[4] MEASURE → DIAGNOSE → IMPROVE → RE-TEST
    Singapore — calibration, latency, tests, repeatable physical trials
    + TIPE — personally built test rig, video/Python measurements
    + FAB — geometric metrology and analysis of nonconformities
    → Validation expérimentale, reproductibilité, root-cause analysis
                             ↓
    "How can robots handle a wider variety of tasks and configurations?"
                             ↓
[5] EXPLORE LEARNING-BASED HUMANOID ROBOTICS
    Sorbonne Université — Unitree G1 VLA project (ONGOING)
    → Intended teleoperation → demonstrations → multimodal data
      → OpenPI policy adaptation target → eventual real-robot evaluation
                             ↓
    "How do we make learned capabilities usable on real industrial hardware?"
                             ↓
[6] BINABIK — RELIABLE + ADAPTABLE PHYSICAL AI
    Industrial understanding + mechanical/CAD background
    + perception & robotics software + physical testing
    + growing VLA / robot-learning skills
```

**Important :** cette progression est **narrative**, pas strictement chronologique. Le TIPE expérimental précède Singapour ; les activités de conception, tests et validation se chevauchent. En particulier, **l'expérimentation est un principe transversal à toutes les étapes**, et pas uniquement une « étape 4 » réalisée après le développement.

---

## 3. Développement précis de chaque étape

### Étape 1 — Comprendre la réalité du terrain et le besoin industriel

**Rôle narratif :** expliquer **pourquoi** l'automatisation industrielle et les robots utiles intéressent le candidat.

**Projet A — FAB : Foundry, Machining & Metrology (Arts et Métiers, 2025)**

- Travail en équipe sur une pièce de support de palier en aluminium AlSi7.
- Opérations réelles : préparation du moule/fonderie, tournage, usinage CNC, contrôle sur machine à mesurer tridimensionnelle (CMM).
- Compréhension des gammes, mises en position, références, tolérances et reprises d'usinage.
- Deux caractéristiques conformes sur quatre mesurées ; deux non-conformités documentées et diagnostiquées : **ne pas transformer cette pièce en réussite industrielle complète**.
- **Ce que l'on veut prouver :** connaissance pratique des machines, opérations manuelles et problèmes de précision.
- Source du projet : <https://slimaneaouanouk.com/en/projects/fab.html>

**Projet B — Stage ouvrier SRP (juin–juillet 2025)**

- Quatre semaines dans une petite entreprise de construction, sur un chantier et non en usine.
- Participation à la préparation de zones, manutention, opérations de traçage et consignes de sécurité.
- Expérience du travail physique, de l'organisation en petite équipe et des contraintes réelles des opérateurs.
- **Ce que l'on veut prouver :** attention au terrain et aux utilisateurs des solutions ; pas une connaissance exhaustive de toutes les usines ou de leurs priorités d'automatisation.

**Message :** *“I know that automation has to start with a real operational need, not just an interesting algorithm.”*

**Transition :** *“Those experiences made me interested in how repetitive physical operations could be automated.”*

**Place dans le récit :** environ **30 secondes au total pour le contexte Arts et Métiers / industriel**, sans inventaire exhaustif du cursus. Le stage ouvrier tient en une phrase.

### Étape 2 — Concevoir et simuler des solutions techniques

**Rôle narratif :** montrer le passage de l'observation d'un besoin à la **conception raisonnée d'une solution**.

**Projet principal — FANUC Automated Casting Cell (Arts et Métiers, 2025)**

- Étude d'équipe d'une cellule robotisée pour manipuler des pièces issues d'un procédé de fonderie.
- **Parties précises à citer :** sélection du robot FANUC M-20iD/25, concept de préhenseur pneumatique, implantation et séquence d'opérations, prise en compte de la portée, de la chaleur, de la sécurité, et simulation RobotGuide.
- Les estimations de temps de cycle et de productivité sont **simulées/théoriques** ; aucune cellule réelle n'a été installée ni validée en production dans ce projet.
- **Ce que l'on veut prouver :** capacité à raisonner sur une tâche d'automatisation, ses interfaces et ses contraintes physiques.
- Source : <https://slimaneaouanouk.com/en/projects/fanuc.html>

**Compétence complémentaire — CAD / mechanical design**

- Projet individuel de conception préliminaire d'un frein d'avion : assemblage mécanique sous **Fusion 360**, choix de composants, interfaces, calculs de dimensionnement ; **pas** de prototype validé ni de certification.
- Autres exemples disponibles si nécessaires : machine de bouchage à came, conception de réducteur, turbine-prototype, mais ne pas tous les citer.
- **Ce que l'on veut prouver :** aptitude à lire/concevoir un système physique et utiliser la CAO, non revendication d'une expertise senior en mechanical design.
- Source : <https://slimaneaouanouk.com/en/projects/aircraft-brake.html>

**Message :** *“I have a mechanical design background, including CAD, manufacturing, and robotics-oriented design projects.”*

**Transition :** *“But designing or simulating an automated system is one thing. Making it work reliably on real hardware is another.”*

### Étape 3 — Faire fonctionner un robot réel : projet Paris–Singapour

**Rôle narratif :** **preuve technique centrale** de la présentation. Le candidat ne sait pas seulement concevoir un système ; il sait contribuer à une chaîne robotique intégrée et mesurable.

**Projet — PIMM / CNRS@CREATE (janvier–août 2026, Paris puis Singapour)**

- Recherche sur l'optimisation de trajectoire et l'évitement de collisions dans le programme DesCartes ; expérimentation **sur rovers terrestres**, pas essais de vol de drone.
- Co-développement en équipe avec un autre étudiant, encadrement par Prof. Francisco Chinesta et Amine Ammar.
- **Chaîne technique à expliquer :**
  1. **Planning / optimization :** trajectoire nominale calculée hors ligne en Python/SciPy, avec prise en compte de l'objectif et des obstacles.
  2. **Visual perception / localization :** caméra Basler surplombante, OpenCV/ArUco, position et orientation du rover ; calibration intrinsèque, correction de distorsion, homographie et parallaxe.
  3. **Online correction :** correction causale à partir de l'état observé, distincte d'un MPC achevé.
  4. **Hardware / software integration :** commandes série vers le rover, exécution réelle, contraintes de fréquence et latence.
  5. **Logging / evidence :** mesures, essais, comparaisons avec simulation/jumeau numérique.
- **Résultats défendables :**
  - Réduction de l'erreur moyenne de localisation sur grille indépendante de **36,3 à 5,8 mm**, soit **84 %**.
  - Fréquence médiane de boucle physique d'environ **19,84–19,86 Hz**, proche de 20 Hz.
  - **40/40 arrivées à l'objectif, zéro collision** dans **deux campagnes confirmatoires figées de 20 essais**, résultats **d'équipe**, limités à ces scénarios expérimentaux.
  - À approfondir si demandé : correction de parallaxe (60,8 → 11,6 mm), 20 vues ChArUco, 0,191 px RMS de reprojection, 39 essais physiques appariés au jumeau numérique.
- Article scientifique : Slimane est **premier auteur** du manuscrit issu du projet, **soumis et encore en cours d'évaluation** (*under journal review*) ; pas accepté ni publié.
- **Ce que l'on veut prouver :** perception + algorithmes + intégration + confrontation au hardware.
- Source maîtresse et médias réels : <https://slimaneaouanouk.com/paco-showcase/index.html>

**Nuance technique importante :** le *planning* hors ligne, la perception et le correcteur en ligne sont des éléments distincts. Il serait incorrect de prétendre avoir déployé un MPC opérationnel, un SLAM avancé, ou un système de plusieurs rovers autonomes simultanément validé par les 40 essais.

**Message :** *“I especially enjoyed moving from algorithms and simulation to an integrated robot that could be measured and tested in the real world.”*

**Transition :** *“The biggest lesson was that a good algorithm is not enough: sensing accuracy, timing, integration, and repeatability are just as important.”*

### Étape 4 — Expérimenter, mesurer, diagnostiquer, corriger

**Rôle narratif :** faire apparaître explicitement la dimension **experimental / robotics test engineering**. Ce n'est **pas** une bifurcation de carrière vers du test pur : c'est la manière de rendre le développement robotique crédible.

**Preuve principale — Singapour**

1. **Measure :** erreurs de localisation, fréquence et latence de boucle, résultats des parcours.
2. **Diagnose :** distorsion optique, parallaxe induite par la hauteur des marqueurs, coût temporel de traitement image, écarts simulation/réel.
3. **Correct :** géométrie de calibration, correction de distorsion/homographie, traitement des images et intégration.
4. **Re-test :** grilles de validation, campagnes physiques reproductibles, logs et comparaison mesurée.
5. **Software checks :** tests Python `pytest` unitaires, numériques et de régression co-développés en équipe ; **ne pas annoncer 64 tests réussis** (le dossier inventorie 64 *fichiers* de tests, et non des cas exécutés/passés).

**Preuve complémentaire — TIPE : Experimental Impact Testing (projet individuel, 2022–2024)**

- Conception et construction personnelles d'un banc d'essai pendulaire d'environ **46 cm**.
- Quatre géométries de contact interchangeables.
- Expériences filmées, analyse des positions/vitesses en Python avec NumPy/SciPy/Matplotlib, régressions avant/après impact et représentation d'incertitudes.
- **Ce que l'on veut prouver :** capacité à imaginer un protocole, construire son banc, acquérir des données et interpréter des mesures **personnellement**, avant même le stage à Singapour.
- Source : <https://slimaneaouanouk.com/en/projects/tipe.html>

**Preuve complémentaire — FAB : métrologie et non-conformités**

- Vérification dimensionnelle CMM et analyse de défauts géométriques ; démarche d'identification des causes plutôt que simple déclaration de réussite.

**Message :** *“What I enjoy is not just building systems, but understanding why they work—or fail—through measurements and controlled experiments.”*

**Transition :** *“I want to keep that experimental mindset as I move toward more flexible, learning-based robots.”*

### Étape 5 — Étendre le champ vers les humanoïdes et le robot learning

**Rôle narratif :** présenter un **développement cohérent** du parcours, pas la preuve d'une expertise VLA déjà acquise.

**Projet actuel — Sorbonne Université, Unitree G1 / Vision-Language-Action (2026–2027)**

- Projet de semestre de Master 2, supervisé par **Prof. Olivier Bruneau** (LURPA / ENS Paris-Saclay).
- **Objectif prévu :** permettre à un humanoïde Unitree G1 d'apprendre des gestes simples d'assistance par démonstrations.
- **Chaîne cible :** choix de tâche → téléopération/démonstrations → données multimodales (instructions, RGB/RGB-D, actions) → adaptation/fine-tuning envisagé d'une politique **OpenPI π₀ / π₀.₅** → intégration et évaluation sur robot réel.
- MuJoCo / NVIDIA Isaac Lab, motion capture et retargeting sont **pistes exploratoires**, non réalisations démontrées.
- **Aucune preuve fournie à ce jour** d'un dataset acquis/finalisé, d'un modèle fine-tuné, d'une policy déployée ou de résultats quantitatifs. Les contributions exactes de Slimane et le hardware disponible doivent rester à confirmer.
- **Ce que l'on veut prouver :** motivation étayée par un projet actuel et capacité à relier la robotique classique à des méthodes apprenantes.

**Message :** *“I'm now exploring how demonstration-based learning and VLA policies could make humanoid manipulation more flexible. This is ongoing work, and I want to build on my experience with real-robot integration and experiments.”*

**Transition :** *“That combination of industrial use cases, traditional robotics, and learning-based AI is what makes Binabik particularly interesting to me.”*

### Étape 6 — Pourquoi Binabik ?

**Rôle narratif :** synthétiser le parcours en une **proposition de valeur**, sans prétendre connaître les besoins privés de l'entreprise.

**Binabik :** jeune startup suisse de Physical AI, située à Winterthur ; elle développe principalement une **couche logicielle d'intelligence et d'intégration** pour robots existants, notamment humanoïdes et manipulateurs mobiles, visant des tâches industrielles telles que *machine tending*, manutention et intralogistique. Elle n'est pas principalement un constructeur de robots propriétaires.

**Correspondances crédibles :**

- **Industrial tasks :** familiarité pratique avec fabrication, machines CNC, métrologie et étude d'automatisation FANUC.
- **Hardware + software :** pratique d'une chaîne robotique mêlant vision, calcul et matériel ; polyvalence mécanique/CAD.
- **Perception & calibration :** expérience particulièrement pertinente lorsque la précision de pose conditionne une manipulation.
- **Experimental reliability :** protocoles, instrumentation, analyse de logs, tests reproductibles et débogage.
- **Humanoid learning :** projet Unitree G1 actuel, dont le périmètre conceptuel rejoint les thèmes publiquement présentés par Binabik Academy.

**Signal culturel supplémentaire :** dans son post LinkedIn récent, **Phillipp Gery** (*Founding Robotics and AI Engineer*) évoque des démos chez un client, l'accompagnement d'un partenaire, un problème de manipulation de pièces lourdes, du logiciel, de la conception mécanique et du prototypage. Il explique l'intérêt de combiner méthodes classiques fiables et approches apprenantes flexibles. **C'est un témoignage individuel, pas la définition officielle de toutes les missions chez Binabik.**

**Ce qu'on aimerait explorer pour un stage :** perception/calibration ; robotics software integration ; développement d'instruments de test et validation sur robot réel ; qualité des démonstrations/données ; évaluation de skills/policies ; contribution au robot learning selon les besoins et l'encadrement. **Aucune de ces missions n'est confirmée comme une offre ouverte.**

**Message :** *“What attracts me to Binabik is that you're bringing together real industrial problems, robotics software, physical hardware, and learning-based AI. That's the kind of multidisciplinary environment where I think I could contribute and learn a lot.”*

---

## 4. Le test engineering : comment le rendre visible sans enfermer le profil

### Positionnement à préserver

**Ne pas dire :** « Je suis surtout un test engineer, ouvert éventuellement à la robotique. »  
**Dire plutôt :** « Je suis orienté robotique, perception et intégration ; ma capacité à **concevoir et réaliser des expériences**, analyser des échecs et valider des systèmes physiques est un avantage important. »

### Boucle expérimentale transversale à répéter dans le récit

```text
ENGINEERING QUESTION
       ↓
Design a test / define the expected behavior
       ↓
Instrument and run experiments
       ↓
Measure results and failure modes
       ↓
Diagnose root causes
       ↓
Change geometry, algorithm, software, or setup
       ↓
Re-test under controlled, reproducible conditions
       ↺
```

**Contributions documentées à mobiliser :**

| Compétence | Preuve principale | Limite |
|---|---|---|
| Définir/monter une expérience physique | TIPE : banc construit personnellement, géométries de contact, vidéo | Étude académique, pas banc de qualification industrielle |
| Diagnostiquer des erreurs de mesure | Singapour : optique, homographie, parallaxe, données de validation | Géométrie de localisation rover, pas hand-eye calibration humanoïde déjà maîtrisée |
| Profiling, latence, intégration | Singapour : boucle ~20 Hz et diagnostic du coût de la vision | Pas de garantie hard real-time/production |
| Tests unitaires et régression | Singapour : suite Python/pytest co-développée | Pas de couverture ou taux de passage certifié |
| Essais répétables sur robot | Singapour : deux campagnes figées de 20 essais | Résultats d'équipe, scénarios contrôlés |
| Métrologie et diagnostic de défauts | FAB : CMM, tolérances et non-conformités | Pas d'expérience de contrôle qualité en série |

**Fil rouge transversal :** *“I like to close the loop between design, physical execution, measurements, and improvement.”*

---

## 5. Où placer le mechanical design et la CAD dans l'histoire

**Rôle :** compétence complémentaire de l'ingénieur qui comprend la réalité physique, utile à une startup travaillant sur des robots réels et parfois du prototypage.

- Preuve forte d'une conception individuelle : **Aircraft Brake Design**, assemblage Fusion 360, interfaces mécaniques, calculs et choix de composants.
- Preuve liée aux procédés industriels : **FAB**, outillage, références, usinage, tolérances.
- Preuve de conception robotique industrielle : **FANUC**, robot/prehenseur/implantation/cycle en simulation.
- Autres projets possibles en réserve : came, réducteur, turbine et fabrication additive.

**Formulation courte recommandée :** *“I also have a mechanical design background, including CAD, machining, and hands-on prototyping and manufacturing projects.”*

Ne pas surpondérer la CAD, ni prétendre une expérience avancée de conception d'un humanoïde complet. La compétence soutient **l'intégration physique et la capacité à travailler dans une équipe pluridisciplinaire**.

---

## 6. Les transitions logiques à conserver impérativement

| Passage | Question implicite | Transition orale indicative (US English) |
|---|---|---|
| Industrie → automatisation | Comment résoudre une tâche physique répétitive ? | “That got me interested in how robots could automate repetitive operations.” |
| Automatisation/CAD → robot réel | Comment aller au-delà d'un concept simulé ? | “But designing or simulating a solution is one thing; making it work on a real robot is another.” |
| Intégration → expérimentation | Comment démontrer que le système fonctionne ? | “That's where calibration, timing, repeatable tests, and debugging really mattered.” |
| Expérimentation → robot learning | Comment étendre à des tâches plus variables ? | “Now I'd like to apply the same engineering mindset to robots that can learn more flexible behaviors.” |
| VLA → Binabik | Où mettre ensemble les compétences ? | “Binabik brings those worlds together: industrial applications, real robots, and learning-based AI.” |

Ces transitions sont des **charnières de raisonnement**, pas une obligation de prononcer ces phrases mot pour mot.

---

## 7. Exemples de formulations orales possibles

### Version « identité » — environ 25–35 secondes

> “I'm an engineering student at Arts et Métiers, also pursuing a research master's in robotics at Sorbonne. I have a mechanical and industrial engineering background, and what I really enjoy is taking ideas all the way to real hardware: designing, integrating, testing, and improving systems. That's what I did in my robotics research project in Singapore, and now I'm building on that experience through a humanoid VLA project.”

### Version « fil rouge développé » — matériau de travail, pas script figé

> “My background started with hands-on mechanical and industrial engineering at Arts et Métiers. I worked on foundry, CNC machining and metrology, and also helped design and simulate a FANUC automated casting cell. Those experiences helped me understand the physical side of industrial automation.
>
> What I really enjoy, though, is taking an engineering idea beyond the design stage. During my research project in Paris and Singapore, we developed a mobile-robot system combining trajectory planning, camera-based localization, online correction and real hardware. We had to deal with calibration errors, processing time, and the challenge of making the whole system work together.
>
> That's also why experimentation is such a big part of how I work. We measured errors, improved the vision pipeline and ran repeatable physical tests. I had already enjoyed that side of engineering in an individual experimental project, where I built a mechanical test rig and analyzed measurements in Python.
>
> Now I'm working on an ongoing Unitree G1 project at Sorbonne, exploring teleoperated demonstrations and VLA-based manipulation. What excites me about Binabik is the opportunity to bring together that hands-on robotics mindset, mechanical understanding, and learning-based approaches to make robots useful in real industrial settings.”

**Utilisation :** s'inspirer de la structure, la raccourcir selon le contexte et parler spontanément. Vérifier les contributions individuelles exactes avant d'utiliser un “I implemented” sur les parties d'un travail d'équipe.

---

## 8. Hiérarchie de preuves : quels projets sont indispensables ?

| Priorité | Projet | Fonction dans le récit | Développement souhaité |
|---|---|---|---|
| **P1 — preuve centrale** | **Paris–Singapour PIMM/CNRS@CREATE** | Vraie intégration robotique + perception + expériences + métriques | **Développer en priorité** |
| **P1 — direction actuelle** | **Sorbonne Unitree G1 / VLA** | Évolution vers humanoïdes et apprentissage | Expliquer le **périmètre et le statut ongoing** |
| **P2 — ancrage industriel** | **FAB + FANUC** | Compréhension du manufacturing et logique d'automatisation | Très bref, exemples concrets |
| **P2 — preuve expérimentale personnelle** | **TIPE** | Un banc d'essai conçu et des analyses réalisées individuellement | À citer si utile pour montrer la démarche test engineering |
| **P2 — profondeur mécanique** | **Aircraft Brake CAD** | Concevoir, calculer et assembler un système mécanique | Une mention, sauf demande d'approfondissement |
| **P3 — terrain** | **Stage ouvrier SRP** | Contact direct avec le travail manuel et la sécurité | Une phrase, sans équivalence usine |
| **Réserve seulement** | Capping, turbine, réducteur, plasticité, autres projets | Répondre à une relance précise | Ne pas tout empiler |

**Règle :** le fil rouge n'est pas un inventaire de toutes les réalisations. Chaque projet cité doit servir une idée unique et identifiable. **Singapour reste la preuve principale ; les autres projets construisent le contexte ou complètent la crédibilité.**

---

## 9. Véracité, limites et erreurs à éviter

1. **FANUC :** concept/étude/simulation RobotGuide, pas cellule installée chez un industriel.
2. **FAB :** vrai travail de fonderie, usinage et métrologie ; première pièce présentant deux non-conformités, pas fabrication parfaite.
3. **Stage ouvrier :** réalisé sur **chantier**, pas au sein d'une usine ; il apporte du contexte sur le terrain, non la connaissance exhaustive du manufacturing.
4. **CAD :** pratique académique vérifiable, notamment Fusion 360 ; pas d'expertise senior, ni conception de robot humanoïde industriel affirmée.
5. **Singapour :** recherche DesCartes liée au planning/évitement de collisions ; les **tests physiques documentés sont terrestres** sur rover, pas des vols de drones.
6. **Singapour :** résultats **d'équipe** sur un environnement limité ; **40/40** ne signifie pas robustesse ou absence de collisions garanties partout.
7. **Calibration :** **0,191 px RMS reprojection**, **5,8 mm d'erreur moyenne sur grille** et **11,6 mm d'erreur après correction de parallaxe** sont **trois mesures différentes**.
8. **Robotics stack :** pas de MPC physiquement validé, pas de SLAM/ROS 2 de production revendiqué ; ces notions sont en cours d'apprentissage ou d'exploration selon le cas.
9. **Testing :** tests `pytest` co-développés ; les **64 sont des fichiers**, pas un résultat de 64 tests réussis ; pas de CI ou taux de couverture établi.
10. **TIPE :** banc et analyse personnels ; ne pas inventer cadence d'acquisition, nombre total d'essais ou précision statistique.
11. **VLA G1 :** projet **ongoing** ; robot/configuration, données, entraînement, déploiement et métriques non documentés comme achevés. OpenPI π₀/π₀.₅ = **cible**.
12. **Publication :** premier auteur d'un manuscrit **under review**, pas article déjà publié ou accepté.
13. **Binabik :** ne pas inventer de stage ouvert, client payant, stack privé (EKF, SLAM, gripper calibration), architecture VLA, chiffres de réussite, financement ou perspectives CDI certaines.
14. **Profil souhaité :** perception, estimation/localisation, intégration, robot learning et expérimentation en priorité ; **pas de priorité au contrôle pur**.
15. **Chronologie :** ne pas suggérer que chaque projet est né causalement du précédent si ce n'est pas attesté ; les transitions exposent une **cohérence de parcours**, pas des motivations historiques certaines pour chaque choix de projet.

---

## 10. Instructions impératives pour toute IA qui reçoit ce fichier

**À FAIRE**

- Utiliser ce texte comme **source de vérité pour le message narratif**, sans imposer spontanément une structure de slides.
- Exploiter les documents projet et les médias originaux pour choisir des faits et des preuves exacts.
- Préserver la logique : **besoin industriel → conception → intégration physique → expérimentation/validation → apprentissage humanoïde → pertinence Binabik**.
- Traiter la **validation expérimentale comme une compétence transversale**, et non comme un chapitre mineur ni comme un poste de QA répétitive.
- Préserver la **CAD et la mécanique comme avantage complémentaire**, sans faire disparaître la priorité robotique/perception.
- Réserver environ **30 secondes** au contexte industriel Arts et Métiers lorsque l'on prépare la prise de parole.
- Employer un **anglais américain naturel**, adapté à un échange avec une petite startup ; éviter la rhétorique trop corporate ou artificielle.
- Chercher **une affirmation + une preuve visuelle / technique concrète** lorsqu'un projet est mobilisé.
- Être ouvert à adapter le périmètre de contribution aux besoins que Giovanni exprimera, sans attribuer à Binabik des besoins non confirmés.
- Si l'IA prépare ensuite des supports, se conformer à la **roadmap d'entretien** et à la demande de Pascal d'illustrer les projets pertinents, notamment humanoïdes/VLA/RL et robotique traditionnelle.

**À NE PAS FAIRE**

- Ne pas générer automatiquement un diaporama ni un plan de diapositives à partir de ce seul document.
- Ne pas transformer le fil rouge en chronologie mécanique → contrôle → IA laissant penser que le candidat abandonne ses compétences antérieures.
- Ne pas inventer des résultats, expériences sur AGIBOT ou collaborations Binabik.
- Ne pas laisser entendre que le stage ouvrier était un stage d'usine.
- Ne pas présenter le G1 comme projet terminé ou le manuscrit comme publié.
- Ne pas mettre en avant les méthodes de contrôle au détriment de **perception, intégration et validation**.
- Ne pas tout raconter si cela dépasse le temps imparti : sélectionner la preuve la plus pertinente pour chaque idée.

### Critères de qualité du récit

Un bon fil rouge doit permettre à Giovanni de répondre **oui** aux questions suivantes :

- Comprend-il **pourquoi** la robotique industrielle est utile ?
- A-t-il déjà participé à un système robotique **fonctionnant sur hardware** ?
- Sait-il **concevoir des expériences et mesurer** l'effet de ses modifications ?
- Peut-il communiquer avec des ingénieurs logiciel, robotique, mécanique et manufacturing ?
- Son intérêt pour le **G1/VLA** est-il cohérent, honnête et motivé ?
- Comprend-il la proposition de valeur de Binabik, sans prétendre connaître leur architecture privée ?

---

## 11. Sources à mettre à disposition de l'IA

### Sources personnelles — ordre de priorité

1. **`V1.9_PORTFOLIO_CONTEXT.md`** — base factuelle générale, dates, projets, preuves, limites et attributions.
2. **`ROADMAP_INTERVIEW_BINABIK(1).md`** — objectifs et contraintes de l'entretien ; étapes de préparation et durée cible de présentation.
3. **`Resume_Slimane_AOUANOUK_Binabik_AI.pdf`** — CV effectivement transmis ; aligner le récit avec les éléments que Binabik a déjà lus.
4. **`mail_binabik(1).rtf`** — paroles exactes de Pascal et Giovanni, notamment le souhait de voir quelques slides sur les projets pertinents.
5. **`Company_Research_Binabik_AI(2).md`** et **`APPLICATION_INFO(20261028-131146).md`** — recherche Binabik, technologies, hypothèses de contribution et précautions.
6. **`Post Binabik | LinkedIn.pdf`** — témoignage de Phillipp Gery sur ses premières semaines, à utiliser comme indice de culture d'ingénierie, sans généralisation excessive.
7. **Le présent document** — **intention narrative validée** par Slimane : en cas de conflit entre une ancienne proposition de fil rouge et ce texte, privilégier celui-ci ; pour les faits, privilégier les sources techniques originales les plus récentes.

### Portfolio et projets publics

- Portfolio général : <https://slimaneaouanouk.com/>
- Projet Paris–Singapour (avec médias) : <https://slimaneaouanouk.com/paco-showcase/index.html>
- FAB : <https://slimaneaouanouk.com/en/projects/fab.html>
- FANUC : <https://slimaneaouanouk.com/en/projects/fanuc.html>
- Aircraft brake / CAD : <https://slimaneaouanouk.com/en/projects/aircraft-brake.html>
- TIPE : <https://slimaneaouanouk.com/en/projects/tipe.html>
- **G1/VLA :** pas de page projet publique canonique confirmée ; utiliser les dossiers locaux du projet actuel lorsqu'ils sont disponibles.

### Binabik — contexte public

- Site produit : <https://binabik.ai/>
- Équipe officielle : <https://binabik.ai/team>
- Binabik Academy / Unitree G1 : <https://academy.binabik.ai/courses/vla-humanoid-robots>
- Pascal Sager : <https://sagerpascal.github.io/>
- Giovanni Toffetti : <https://gtoff.github.io/> · <https://www.linkedin.com/in/giovannitoffetti/>
- GitHub Binabik : <https://github.com/binabik-ai>
- Page carrières : <https://binabik.ai/open-positions>

---

## 12. Prompt de reprise prêt à copier dans une autre IA

> Voici `FIL_ROUGE_INTERVIEW_BINABIK.md`, le document directeur de la narration de mon entretien avec Binabik. Utilise-le **avec** `V1.9_PORTFOLIO_CONTEXT.md`, ma roadmap, mon CV et les sources de mes projets. Le message à préserver est : **comprendre le besoin industriel → concevoir → intégrer software/hardware → mesurer, tester et améliorer → explorer les humanoïdes/VLA → contribuer à Binabik**. Ne traite pas la validation expérimentale comme une activité secondaire et n'oublie pas l'apport mécanique/CAD ; ne me présente pas comme expert VLA ou controls engineer. Sépare faits acquis, objectifs en cours et contributions possibles. **Ne génère ni plan de slides ni fichier tant que je ne te l'ai pas demandé.** Travaille uniquement sur l'étape de ma roadmap que je préciserai, avec un anglais américain naturel, des preuves exactes et des visuels réels lorsqu'ils deviennent pertinents.

---

## 13. Résumé ultra-court — boussole finale

> **I understand physical industrial work. I can help design solutions, integrate robotics software and hardware, and validate them through real experiments. I now want to bring that practical, evidence-driven engineering mindset to humanoid robots and learning-based AI at Binabik.**

**Ce que le candidat vend :** pas simplement une liste de compétences, mais **une manière de faire de l'ingénierie complète et mesurable**, au service de robots industriels plus fiables et adaptables.
