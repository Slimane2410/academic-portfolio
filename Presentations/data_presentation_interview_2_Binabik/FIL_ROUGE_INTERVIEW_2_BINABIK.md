# Fil rouge — Binabik, entretien technique 2

Document de conception pour Codex, à utiliser avec le prompt `PROMPT_CODEX_INTERVIEW_2_BINABIK.md`.

## 1. Décisions retenues

- **20 minutes de présentation principale**, soit **1 200 secondes**, hors échanges et pages d'approfondissement. La cible n'est pas 18 minutes.
- **30 slides principales** comme base de travail, avec une idée et un grand visuel par slide. Le nombre peut légèrement évoluer si la lecture des sources le justifie, en conservant les durées par section et le total.
- Un rythme proche d'une vidéo YouTube : plusieurs étapes visuelles courtes, des schémas qui évoluent, des photos et des démonstrations. Pas de longues slides compactes.
- **Singapour est la preuve technique centrale.** FANUC apporte une perspective industrielle ; le G1 montre la direction actuelle vers la manipulation et le robot learning.
- **Aucune slide sur le bicopter ni détour par un ancien projet de contrôle classique**, y compris dans les approfondissements.
- Les approfondissements sont **rattachés aux slides**, sous forme de vues internes activées par des boutons ou onglets. Ils ne sont pas une série d'annexes à la fin du parcours HTML.
- Prévoir **3 à 5 sujets cliquables par slide technique en moyenne**, environ quatre. Les slides d'ouverture et de fermeture peuvent en avoir moins. Chaque sujet doit ouvrir une explication réelle et préparée.
- Tout le contenu présenté et les notes d'oral sont en **anglais américain simple**, avec les termes techniques nécessaires. Le présent document de conception reste en français.
- Employer **I / my** pour raconter mes actions. **Mathis a réalisé la sélection des coefficients** : ne pas me l'attribuer. L'analyse financière FANUC réalisée par un autre étudiant ne m'appartient pas non plus.
- Conserver exactement la dernière phrase : **“Give me a challenge for these six months, and I will not only achieve it — I will exceed your expectations.”**

## 2. L'idée que l'interlocuteur doit retenir

> **I can understand a robotics problem, turn the methods into a working system, diagnose failures, and test the result on real hardware. I now want to apply this approach to industrial robot manipulation.**

Ce message doit ressortir des réalisations, des décisions et des mesures. Éviter de répéter à chaque slide que je suis adaptable ou que j'apprends vite.

La progression narrative est :

1. **Singapore — understand, implement, integrate, test.** Une réalisation terminée et mesurable.
2. **FANUC — connect robotics to an industrial task.** Une étude et une simulation, avec leurs limites.
3. **Unitree G1 — move toward manipulation and robot learning.** Un projet en cours, décrit à son stade réel.
4. **Binabik — apply this engineering approach to your challenges.** Des contributions plausibles à discuter, puis un engagement motivé.

Le récit technique suit, quand les sources le permettent : **symptom → diagnosis → decision → implementation → measurement → remaining limit**. Une slide d'architecture peut simplement expliquer l'architecture ; ce schéma n'est pas à plaquer artificiellement partout.

## 3. Sources et accès

### Sources locales à examiner dans Codex sur mon Mac

Présentation actuelle et ses fichiers de préparation :

`/Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/Presentations/presentation_interview_Binabik`

Code PACO, rapports, journaux, figures et données :

`/Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone`

Portfolio, pour les médias réels et le thème :

`/Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main`

Documents de contexte :

- `paco-preprint-draft-v1-compact.pdf` : brouillon de **31 pages**, fourni avec cette demande. C'est une version antérieure plus développée, pas la version soumise.
- `Presentation Ideas.rtf` : notes dictées de Slimane, relues pour ce fil rouge. Les décisions récentes ci-dessus et dans le prompt remplacent les pistes anciennes abandonnées.
- Les deux captures jointes : même slide A3, onglet **Overview**, puis onglet **OpenVLA**. Elles illustrent une vue interne, pas une nouvelle slide dans la navigation principale.
- Transcript du premier entretien et documents FANUC/G1 déjà présents dans le dossier, s'ils y sont accessibles. Les retrouver avant de citer Giovanni ou de préciser des faits absents de ce document.

**État d'accès lors de la rédaction :** le PDF, les deux captures et les notes RTF ont été lus. Les chemins `/Users/...` ne sont pas montés dans cette session : l'implémentation HTML, les médias existants et le code PACO devront être examinés par Codex sur le Mac. Aucun fichier précis de ce dépôt n'est présumé avoir été inspecté ici.

### Priorités

- **Direction éditoriale :** dernière demande de Slimane → ce fil rouge → anciennes notes et ancienne présentation.
- **Réalité technique :** code de la version exécutée, configuration et journaux correspondants → rapports et papier détaillé → ancienne présentation.
- Une modification récente du code ne prouve pas qu'elle était déjà présente pendant une campagne ancienne. Rattacher chaque résultat à sa version et à son protocole.
- En cas de contradiction, conserver la trace dans un fichier privé `SOURCES_ET_VERIFICATIONS.md`, résoudre ce qui peut l'être et ne pas inventer le reste.
- Pour les tâches dont l'auteur n'est pas précisé, rédiger à la première personne comme demandé ; noter les attributions à confirmer dans l'audit privé, sans remplacer automatiquement **I** par **we**. Ne pas contredire une attribution explicitement documentée à quelqu'un d'autre.

## 4. Temps et découpage principal

| Section | Slides | Durée | Début | Fin |
|---|---|---:|---:|---:|
| Introduction | 01–02 | 1:00 | 0:00 | 1:00 |
| Singapore — technical deep dive | 03–22 | 14:00 | 1:00 | 15:00 |
| FANUC — industrial perspective | 23–26 | 2:30 | 15:00 | 17:30 |
| Unitree G1 — ongoing work | 27–28 | 1:30 | 17:30 | 19:00 |
| Relevance to Binabik and closing | 29–30 | 1:00 | 19:00 | 20:00 |
| **Total principal** | **30** | **20:00** | | |

La durée comprend les vidéos, les pauses prévues et les transitions. Les questions ajoutent du temps : elles ne doivent pas être implicitement absorbées en raccourcissant le principal à 18 minutes. Une estimation textuelle ne garantit pas une durée orale exacte ; préparer un support calibré sur 20 minutes, puis ajuster à la répétition.

### Storyboard de départ

Les visuels ci-dessous sont des **choix à résoudre dans les sources**, pas des noms de fichiers inventés.

| ID | Titre anglais proposé | Temps | Fin cumulée | Message et visuel principal |
|---|---|---:|---:|---|
| 01 | From Research to Real Robots | 0:25 | 0:25 | Une grande image du rover ou une séquence réelle, titre et sous-titre courts. Entrer dans le technique sans refaire mon CV. |
| 02 | What I'll Show Today | 0:35 | 1:00 | Trois projets, trois photos : Singapore / FANUC / G1. Annoncer décisions, problèmes et validation. |
| 03 | Singapore: The Research Context | 0:30 | 1:30 | CNRS@CREATE / DesCartes. Expliquer brièvement le contexte d'origine si documenté, puis préciser que la validation présentée concerne des rovers au sol en 2D. |
| 04 | One Robot, Independent Moving Agents | 0:35 | 2:05 | Une vue de l'arène et des trajectoires. Les autres agents bougent indépendamment ; leur vrai futur n'est pas disponible. |
| 05 | What the System Had to Handle | 0:30 | 2:35 | Contraintes visuelles : perception locale, encombrement, limites de vitesse/accélération et exécution physique. Distinguer les valeurs offline et online si elles diffèrent. |
| 06 | The Two-Layer Architecture | 0:45 | 3:20 | Schéma clair : scène statique → nominal offline ; observation courante → correction online → commande. La perception referme la boucle. |
| 07 | My Contribution | 0:30 | 3:50 | Mettre en évidence mes briques dans le schéma. Une mention précise de la sélection des coefficients par Mathis, sans liste de justifications. |
| 08 | Why Plan Offline? | 0:35 | 4:25 | Une trajectoire nominale superposée à la scène statique. Le plan donne une direction globale ; il ne résout pas les perturbations futures. |
| 09 | What I Optimized | 0:50 | 5:15 | Une équation simplifiée fidèle au code + un schéma des points de trajectoire. Variables, coût, endpoints fixés, pénalités et bornes clairement distingués. |
| 10 | From Candidate Paths to a Nominal Route | 0:45 | 6:00 | Génération des candidats, initialisation, optimisation L-BFGS-B et trajectoire retenue. Évolution visuelle, plutôt qu'un écran de code complet. |
| 11 | An Offline Planning Challenge | 0:45 | 6:45 | Diagnostic documenté, par exemple régularité du potentiel / initialisation / convergence. Avant-après réel ou schéma explicitement conceptuel si les données manquent. |
| 12 | What the Online Corrector Sees | 0:40 | 7:25 | Position, orientation/vitesse utile, point de référence, obstacles perçus, temps. Vue de voisinage avec zone de perception. |
| 13 | How the Correction Is Built | 0:55 | 8:20 | Attraction vers le nominal, répulsions agents/obstacles/murs et amortissement, révélés progressivement sur un même schéma. |
| 14 | One Control Step | 0:55 | 9:15 | Un pas d'algorithme : observation → force → accélération → saturation → vitesse → commande. Petit pseudocode fidèle et graphique de la commande. |
| 15 | Causal Does Not Mean Blind | 0:35 | 9:50 | Distinguer futur du nominal connu offline et vrai futur d'un agent inconnu. Montrer les interfaces qui empêchent l'accès aux trajectoires futures si elles sont vérifiées dans le code. |
| 16 | What Can Still Go Wrong? | 0:40 | 10:30 | Un échec réel documenté : blocage, saturation, perte de progression ou autre. Expliquer réaction, test et limite. Pas de garantie universelle de sécurité. |
| 17 | Building the Physical Testbed | 0:30 | 11:00 | Grande photo légendée : rover, caméra, calcul/communication, ArUco, arène. Ne pas dessiner un chemin de communication non vérifié. |
| 18 | From a Planar Command to Wheel Motion | 0:45 | 11:45 | Direction souhaitée → erreur de cap → translation/rotation → commandes roues, selon la version réelle. Distinguer mes conversions haut niveau du firmware moteur fourni. |
| 19 | Diagnosing Position Error | 0:50 | 12:35 | Un avant-après de localisation et un dessin de parallaxe. 36.3 → 5.8 mm au sol ; 60.8 → 11.6 mm pour le marqueur surélevé. Pas deux minutes de détails de calibration. |
| 20 | Finding the Real-Time Bottleneck | 0:45 | 13:20 | Budget d'un cycle : vision, série, correcteur, marge. Montrer le problème mesuré, le changement essayé et ce que les mesures permettent de conclure. |
| 21 | Testing Repeatability on Real Robots | 0:55 | 14:15 | Vidéo brève, puis trajectoires répétées ou marges. 40 essais physiques, 1–2 agents, minimum 6.3 cm, boucle proche de 20 Hz, avec protocole délimité. |
| 22 | Results, Limits, and What I Learned | 0:45 | 15:00 | Deux résultats et une limite, lisibles. Séparer simulation et expérimentation ; éventuellement ajouter une comparaison sim/réel. Faire ressortir la démarche de diagnostic. |
| 23 | FANUC: Start from the Industrial Task | 0:35 | 15:35 | Photos de pièces/processus et geste répétitif envisagé. Une première expérience d'automatisation industrielle, présentée avec confiance. |
| 24 | Choosing the Robot and Gripper | 0:40 | 16:15 | Grandes images du FANUC et du préhenseur/CAO réels. Justifier portée, charge, prise et géométrie seulement dans la mesure documentée. |
| 25 | Simulating the Cell in ROBOGUIDE | 0:40 | 16:55 | Vidéo ou captures successives de la cellule et du cycle. Montrer concrètement ce que la simulation permettait de vérifier. |
| 26 | What the Simulation Could Not Prove | 0:35 | 17:30 | Une image de cellule annotée avec points restant à valider physiquement. Mentionner template/adaptation si pertinent ; pas de gain financier invérifié. |
| 27 | Unitree G1: My Current Direction | 0:45 | 18:15 | Image réelle du G1 et avancement actuel vérifié. Séparer clairement ce qui est réalisé et ce qui est prévu. |
| 28 | Learning Manipulation from Demonstrations | 0:45 | 19:00 | Pipeline envisagé : démonstrations → données → adaptation de policy → évaluation, à adapter à l'état réel. Une tâche candidate au plus en exemple visuel. |
| 29 | How I Could Contribute at Binabik | 0:35 | 19:35 | Trois contributions à discuter : intégration, expérimentation/diagnostic, évaluation de tâches. Relier chaque piste à une preuve déjà montrée. |
| 30 | Ready for the Challenge | 0:25 | 20:00 | Dernier message sobre, rappel d'engagement et phrase finale exacte. Rester sur cette slide pour ouvrir l'échange. |

## 5. Approfondissements dans les slides

### Comportement attendu

Chaque slide possède un identifiant stable et une vue principale **Overview**. Les boutons ouvrent une vue interne au même cadre, avec le même ID, le même compteur principal et la même place dans la progression.

- Le parcours normal passe de la slide N à la slide N+1 et **n'entre jamais automatiquement dans les vues de détail**.
- La vue principale doit suffire à raconter les 20 minutes, même si personne ne pose de question.
- Les onglets peuvent rester accessibles dans le détail ; prévoir **Overview** et/ou **Back to slide** pour revenir immédiatement.
- Au retour, retrouver le contexte, la position et le focus. Les vidéos ne doivent pas continuer à jouer cachées.
- Garder le thème, les marges, le titre et les commandes de navigation stables. La vue de détail peut occuper le corps entier de la slide : pas besoin d'une petite modale illisible.
- Le compteur, par exemple **14 / 30**, ne devient pas **14 / 150** après création des détails.
- En allant directement à une autre slide principale, afficher son Overview. Les détails ne doivent pas allonger le défilement ni entrer dans l'index principal.
- Prévoir des liens internes stables si l'architecture existante le permet, pour retrouver facilement un sujet pendant les questions.
- Le mode présentateur peut afficher durée, notes et perche ; le public ne doit pas voir les consignes de préparation.

### Contenu de chaque vue

Pour chaque sujet ci-dessous, produire :

1. Une **question technique plausible** en anglais.
2. Une **réponse courte** préparée, puis les étapes utiles.
3. Un visuel précis : équation, courbe, extrait de code de 5–12 lignes, comparaison ou photo annotée.
4. La preuve correspondante dans l'audit privé : fichier/fonction/rapport ou page du papier.
5. Une phrase orale simple pour ouvrir et fermer cette parenthèse.

Les éléments marqués comme candidats doivent être confirmés dans les sources. Ne pas afficher une réponse supposée comme un résultat de mon projet. Si l'information manque, proposer une explication conceptuelle honnête ou noter le sujet à compléter dans l'audit ; pas d'onglet vide ou de faux bouton.

### Carte des questions à préparer

Ce tableau indique les **sujets de départ**. Les intitulés anglais visibles seront courts ; la question complète figurera dans les notes.

| Slide | Onglets / sujets d'approfondissement proposés |
|---|---|
| 01 | Project timeline ; My background |
| 02 | Why these projects? ; Completed vs ongoing ; My contribution |
| 03 | Research context ; Ground-robot scope ; Initial knowledge ; Learning from papers |
| 04 | Independent agents ; Robot geometry ; Clearance definition ; Goal and success |
| 05 | Perception radius ; Speed and acceleration ; Hardware limits ; Assumptions |
| 06 | Full data flow ; Why two layers? ; Nav2 analogy ; Alternative architectures |
| 07 | My implementation ; Mathis's contribution ; Existing libraries ; Research references |
| 08 | Static scene ; Nominal reference ; No-plan ablation ; Replanning trade-off |
| 09 | Decision variables ; Cost terms ; Soft vs hard constraints ; Analytical gradient |
| 10 | L-BFGS-B ; Multistart ; Initial candidates ; Convergence and stopping |
| 11 | Original formulation ; Failure evidence ; Smoother potential ; Before/after test |
| 12 | State inputs ; Look-ahead ; Observation timing ; Perception filtering |
| 13 | Attraction ; Agent repulsion ; Static and wall forces ; Damping |
| 14 | Step-by-step algorithm ; Integration scheme ; Saturation ; Code excerpt |
| 15 | Causality interfaces ; Reference look-ahead ; Forbidden future queries ; Testing the separation |
| 16 | Local minima ; Oscillation and saturation ; Safety stop ; MPC as a possible extension |
| 17 | Hardware choices ; Why overhead vision? ; Why not LiDAR? ; Communication and power |
| 18 | Heading conversion ; Wheel-command mapping ; Reverse motion ; Provided motor firmware |
| 19 | Intrinsic calibration ; Homography ; Parallax geometry ; Measurement protocol |
| 20 | Timing breakdown ; Detection resolution ; Serial cost ; Latency and dropped frames |
| 21 | Test protocol ; All trajectories ; Clearances ; Repeatability statistics |
| 22 | Simulation comparison ; Sim-to-real gap ; Failure taxonomy ; Remaining limits |
| 23 | Actual industrial operation ; Automation assumptions ; My role ; Task feasibility |
| 24 | Payload and reach ; Gripper geometry ; Cell layout ; Selection trade-offs |
| 25 | Cycle sequence ; Paths and reachability ; Template adaptation ; Simulation evidence |
| 26 | Physical validation needed ; Safety assumptions ; Cycle-time limits ; Economic study boundary |
| 27 | Actual project status ; Hardware setup ; Work before the internship ; Academic scope |
| 28 | Demonstration pipeline ; Policy adaptation ; Evaluation protocol ; Transfer between robots |
| 29 | First-week contributions ; Integration and testing ; Learning needs ; Possible project alignment |
| 30 | Six-month availability ; Questions for the team |

Avec cette base, **115 sujets** sont proposés pour 30 slides, soit **3,83 par slide**. La quantité ne doit pas produire du remplissage : réutiliser une vue pertinente depuis plusieurs endroits est possible, en conservant le bon retour à la slide d'origine.

### Perches naturelles

Les perches sont de courtes phrases préparées dans les notes. Elles indiquent une profondeur disponible sans interrompre le récit ni donner l'impression d'attendre une question obligatoire.

- Slide 09 : “One important detail is the difference between a penalty and a hard constraint.”
- Slide 10 : “The starting path mattered, because this optimizer finds a local solution.”
- Slide 14 : “I can walk through one iteration if you'd like.”
- Slide 15 : “Looking ahead on my own reference path is different from knowing where another agent will go.”
- Slide 19 : “Calibration and marker height caused two different errors.”
- Slide 20 : “The bottleneck was perception, rather than the correction itself.”
- Slide 21 : “I also looked at how much the behavior changed between repeated runs.”
- Slide 26 : “The simulation helped me check the concept, but several points still needed physical testing.”

Ces phrases restent des exemples à vérifier contre la version retenue. Ne pas multiplier les invitations explicites sur toutes les slides.

## 6. Ce que le papier permet déjà d'établir

Références au brouillon joint, pagination PDF et imprimée de 1 à 31. Codex doit confronter ces éléments aux fichiers du projet avant de figer le contenu.

| Élément | Repère dans le brouillon | Utilisation et précaution |
|---|---|---|
| Architecture complète | §2.4, fig. 2, p. 3–4 | Bon point de départ pour le schéma système. Refaire une version lisible plutôt que projeter une page entière. |
| Banc expérimental | Fig. 3 et table 1, p. 4–5 | Photos du banc et spécifications ; utiliser les médias originaux si disponibles. |
| Erreur au sol | §3.2, table 2, p. 7 ; fig. 4, p. 8 | **36.3 → 5.8 mm**, environ **84 %** : calibration intrinsèque et homographie recalculée, sur neuf positions au sol. Ce n'est pas l'erreur finale du marqueur surélevé du rover. |
| Erreur du marqueur surélevé | Table 2, p. 7 ; fig. 4, p. 8 | **60.8 → 11.6 mm**, environ **81 %**, après correction de parallaxe, sur cinq positions du rover. |
| Géométrie de parallaxe | §3.2.4, p. 6 | Différence entre plan du sol et hauteur du marqueur. Préparer une coupe géométrique simple. |
| Variables offline | §3.3, p. 9 | **2(N−1)** coordonnées intérieures, endpoints fixés ; discrétisation, potentiel et termes de régularisation. |
| Contraintes offline | §3.3, équations 13–15, p. 9 | Vitesse et accélération introduites par des **pénalités souples**. Ne pas les présenter comme des garanties de faisabilité. |
| Optimiseur | §3.3.4 et fig. 6, p. 10 | L-BFGS-B, gradient analytique et candidats multistart dans cette version. Vérifier la version réellement utilisée. |
| Difficulté de potentiel | §3.3.2, p. 9 | Le texte documente un remplacement de barrière inverse par un potentiel plus régulier. Bonne piste de récit ; rechercher la trace de code/rapport avant de détailler mon diagnostic. |
| Force du correcteur | §3.4.1, équations 18–21, p. 10–11 | Attraction vers une référence en avance sur le nominal + répulsions + amortissement ; saturation de l'accélération puis de la vitesse. |
| Intégration expérimentale | §3.4.2, p. 11 | Le banc utilise le correcteur **semi-implicit Euler**. Velocity-Verlet et stiff repulsion sont des comparaisons, pas trois contrôleurs déployés sur le banc. |
| Causalité | §3.4.3, p. 11 | Scène offline sans agents mobiles, accès au présent, perception locale ; un futur extrapolé depuis des observations serait causal en général, mais ne pas l'attribuer à ce correcteur sans code. |
| Commandes roues | §3.5, p. 11–14 | Vérifier le partage entre ma conversion de commandes, identification/compensation éventuelle, logiciel fournisseur et asservissement moteur. Ne pas présenter l'ensemble comme une boîte noire par réflexe. |
| Comparaison simulation | §4.1, table 9 et figures, p. 15–20 | Douze combinaisons et ablation. Séparer le classement en simulation de la campagne physique. **La sélection des coefficients est attribuée à Mathis.** |
| Budget de boucle | §4.2, table 10 et fig. 14, p. 20–22 | Vision **32.94 ms**, dont détection **29.07 ms** ; série **8.43 ms** ; correcteur **0.72 ms** ; période cible **50 ms**. Ne pas additionner une catégorie totale et sa sous-catégorie. |
| Réduction de résolution | §4.2.3, table 11, p. 21–22 | Piste de problème/mesure/solution. Les sessions comparées diffèrent aussi par leurs scénarios : ne pas conclure à un effet causal isolé sur la réussite. |
| Tests physiques | §4.3, p. 22–24 ; fig. 15–16, p. 24–25 | **40/40** arrivées, pas de contact et pas de clearance négative, un ou deux agents ; minimum agent **6.3 cm** ; fréquences médianes **19.84 / 19.86 Hz**. Deux tâches figées, pas 40 environnements différents. |
| Agrégats de répétabilité | §4.3.2–4.3.4, p. 22–23 | 20 essais dans le premier bloc, 19 retenus dans le second pour ces agrégats. Un essai appartient à une autre géométrie ; il a aussi réussi. Ne pas confondre **40 issues de runs** et **39 répétitions comparables**. |
| Sim/réel | §4.4, table 13, p. 25–26 | Accord géométrique partiel, pas identité de longueur de trajectoire. Préparer l'explication de l'écart plutôt que le masquer. |

### Points à ne pas mélanger

- Le draft décrit des bornes **offline** de 0.35 m/s et 0.8 m/s² dans la table 3, et des bornes **online/physiques** de 0.25 m/s et 1.0 m/s² ailleurs. Vérifier les configurations et expliquer le niveau auquel chaque valeur s'applique. Ne pas fusionner ces valeurs en une « contrainte unique ».
- **~20 Hz** est une fréquence de boucle ; ce n'est pas la preuve d'une latence capteur-action de 50 ms. Âge des images, temps de traitement et transmission sont distincts.
- La réception d'une trame âgée d'environ 17 ms n'est pas un traitement vision de 17 ms. Le budget vision de la table 10 est d'environ 33 ms dans la campagne décrite.
- Les scores de réussite **en simulation** ne sont pas le taux physique de 40/40. Un robot immobile peut être « sans collision » sans accomplir sa tâche : garder la distinction safety / arrival / joint success si ces résultats sont montrés.
- Une saturation du modèle de commande ne constitue pas une preuve que la vitesse et l'accélération **physiques** respectent ces bornes en toute circonstance.
- Les forces souples, les essais limités et les marges observées ne constituent pas une preuve formelle de sécurité ni une validation industrielle générale.
- Le contexte initial peut concerner les drones, mais les expériences montrées concernent des **ground rovers** ; ne pas présenter une expérimentation de vol.
- Un papier multi-auteurs ne signifie pas que j'ai inventé seul les méthodes théoriques. Mettre en valeur ce que j'ai compris, développé, intégré et évalué.

## 7. Choisir deux vrais récits de résolution de problème

Le premier doit idéalement concerner la méthode/commande ; le second l'intégration ou la mesure. Ces choix restent à confirmer après inspection du dépôt.

### Récit A — méthode ou comportement

Candidats : régularité du potentiel et convergence offline ; sensibilité à l'initialisation ; blocage du correcteur ; saturation et perte de progression ; conversion d'une commande plane pour un rover non holonome.

Pour le récit retenu, retrouver le symptôme, une trace avant, mon raisonnement, le changement concret et sa vérification. Ne pas transformer une limite théorique connue en incident que j'aurais personnellement rencontré si aucune source ne le montre.

### Récit B — perception ou temps réel

Candidats solides dans le papier : erreurs de localisation distinguées par leur cause ; effet de la hauteur du marqueur ; profilage du budget de boucle et résolution de détection.

Présenter la chaîne **mesure initiale → hypothèse → correction → nouvelle mesure**. Garder une limite : bruit résiduel, conditions du banc, absence d'expérience parfaitement isolée, délai restant.

L'amélioration de localisation mérite une explication technique réelle. Ne pas l'écarter au motif supposé que Giovanni préférerait un autre sujet. Le correcteur reste central ; la profondeur finale dépendra des questions. Toute affirmation sur une préférence explicite de Giovanni doit être vérifiée dans le transcript complet.

## 8. FANUC : angle et limites

Quatre slides permettent de montrer davantage d'images sans allonger les 2 min 30.

- Décrire la tâche industrielle réelle et l'idée d'automatisation.
- Montrer les choix de robot, préhenseur et implantation qui sont réellement documentés.
- Afficher le résultat dans **ROBOGUIDE**, avec une séquence de cycle compréhensible.
- Expliquer ce que je vérifierais avant une réalisation physique.

Ne pas dévaloriser le projet avec “there was nothing technical”. Ne pas le présenter comme une cellule installée ni comme une étude industrielle exhaustive. Un template de programmation fourni par un professeur n'empêche pas de valoriser son adaptation et la réflexion sur la tâche. Le lien avec le machine tending concerne le type de problème, pas une équivalence avec la solution complète de Binabik.

Pas de rentabilité spectaculaire non vérifiée ; l'étude économique n'a pas été mon travail. Si elle fait l'objet d'une question, préparer une réponse délimitant ce point sans inventer sa conclusion.

## 9. G1 et lien avec Binabik

Garder deux slides et 1 min 30. Le projet est encore précoce : vérifier les avancées les plus récentes auprès des documents disponibles.

- **Done** : uniquement ce qui a été réellement réalisé.
- **In progress** : le travail commencé.
- **Next** : méthode envisagée et critères d'évaluation.

Le pliage d'un vêtement et l'épluchage d'une pomme de terre sont des tâches candidates évoquées dans les notes, pas des réalisations ni des premières mondiales établies. Les citer seulement si toujours pertinentes ; ne pas construire tout le discours autour de la tâche la plus spectaculaire.

La transférabilité concerne la démarche de collecte/traitement, l'adaptation et l'évaluation de policies, la perception, l'intégration et le diagnostic. Une policy ou un mouvement ne se transpose pas automatiquement entre morphologies et contrôleurs.

L'idée d'aligner une partie du projet académique avec une future mission peut être mentionnée avec souplesse, sous réserve de l'accord de l'encadrant. Ne pas promettre une réorientation déjà décidée.

Pour Binabik, insister surtout sur **robot integration, experimental testing, failure analysis, task evaluation**. Ne pas proposer spontanément de leur créer une équipe navigation. Ne pas transformer des concepts comme impedance control, grasping ou MPC en réalisations que je n'ai pas faites.

Conserver la proposition de **six mois**. Une flexibilité à cinq mois peut rester dans les réponses si le sujet apparaît ; pas dans le discours principal.

## 10. Guide oral à produire avec la présentation

Créer `GUIDE_ORAL_INTERVIEW_2_BINABIK.md`, en s'inspirant du fichier oral existant après l'avoir trouvé et lu.

Pour chaque slide principale :

1. ID, titre, durée cible, temps cumulé.
2. **Main message** en une phrase.
3. **Talking points** : 3–5 puces en anglais, phrases courtes et naturelles, keywords en **gras**.
4. **Suggested wording** : un petit passage réellement prononçable, sans vocabulaire compliqué. Assez de matière pour le temps prévu, sans transformer le guide en dissertation.
5. **Transition** : une phrase exacte vers la slide suivante.
6. **Optional hook** : une perche courte si utile, jamais nécessaire au bon déroulement.
7. **If asked** : questions, réponses et liens vers les vues internes correspondantes. Ces réponses ne comptent pas dans les 20 minutes.

Utiliser des verbes simples : **I built, I tested, I measured, I found, I changed, I checked, I learned**. Garder les bons termes : **nominal trajectory, local corrector, potential field, look-ahead, L-BFGS-B, saturation, homography, parallax, differential drive, repeatability**. Préférer les formes contractées habituelles à l'oral.

Prévoir un débit de travail autour de **110–125 mots/minute**, puis soustraire les périodes de vidéo et de silence. Ce repère aide à calibrer le guide, mais seule une répétition établit la durée réelle. Ne pas compter les puces et le texte proposé deux fois dans le nombre de mots prononcés.

### Exemples de transitions simples

| Passage | Proposition orale |
|---|---|
| Introduction → Singapore | “I'll start with Singapore, where I worked on the full chain from planning to physical testing.” |
| Architecture → Offline | “First, let me explain how I built the nominal path.” |
| Offline → Online | “That path gave me a global reference. The next challenge was reacting to what changed during the run.” |
| Corrector → Hardware | “The next step was to make this work on the real rover.” |
| Calibration → Timing | “Position accuracy was one part of the problem. I also had to keep the loop fast enough.” |
| Integration → Tests | “Once the full chain was running, I tested how repeatable the behavior was.” |
| Singapore → FANUC | “This project focused on navigation. My FANUC project gave me a different view of robotics: starting from an industrial task.” |
| FANUC → G1 | “I'm now moving closer to manipulation and robot learning through my Master's project with the Unitree G1.” |
| G1 → Binabik | “These projects are at different stages, but they show the engineering approach I'd bring to Binabik.” |

### Conclusion proposée, à adapter au temps réel

Slide 29 :

> “What I'd bring to Binabik is this approach: understand the problem, build and test a solution, and use the failures to improve it. I could contribute to robot integration, experiments, and task evaluation, while building more experience in manipulation.”

Slide 30 :

> “I'd really like to bring that energy to your team.”
>
> **“Give me a challenging goal for these six months, and I'll do everything I can to achieve it — and hopefully exceed your expectations.”**

La dernière phrase est une décision validée. Ne pas la remplacer par une conclusion plus prudente.

## 11. Direction visuelle

La référence prioritaire est **la présentation existante dans son état actuel**, après ses nombreuses itérations, pas uniquement le vieux prompt.

Les captures jointes donnent déjà les repères suivants, à confirmer dans le CSS : fond gris clair, grande surface presque blanche arrondie, titres très sombres et gras, texte secondaire gris ardoise, accents bleus, onglets sobres avec état sélectionné bleu clair, séparateurs fins, navigation basse discrète.

- Réutiliser les polices, couleurs, rayons, marges, icônes, footer et mécanismes de navigation existants lorsque adaptés.
- Mettre les vraies photos et vidéos au premier plan. Une idée principale par image ou composition.
- Préférer un visuel occupant une grande partie du cadre et 2–4 éléments de texte, plutôt qu'une grille de huit cartes.
- Déplier progressivement les schémas d'architecture et de forces. Des transitions courtes servent le raisonnement ; pas d'effets décoratifs longs.
- Les onglets d'approfondissement sont discrets mais accessibles, sans recouvrir les médias ni densifier la slide principale.
- Les équations et graphiques doivent rester exacts. Refaire les schémas en HTML/SVG si cela améliore la lisibilité ; ne pas générer d'images artificielles pour représenter mes résultats.
- Les illustrations conceptuelles doivent être distinguées des trajectoires mesurées.
- Adapter au plein écran **16:9**, notamment 1920×1080 et 1440×900. Pas de débordement, de texte coupé ou de dépendance réseau inutile pendant l'entretien.

## 12. Livrables attendus de Codex

Créer un nouveau sous-dossier **`interview_2/`** dans le dossier de présentation existant 'Presentations/presentation_interview_2_Binabik' et y regrouper :

1. La première version HTML fonctionnelle, avec ses styles/scripts et médias nécessaires.
2. Le présent **`FIL_ROUGE_INTERVIEW_2_BINABIK.md`**, enrichi après inspection avec le vrai mapping des sources et médias.
3. **`GUIDE_ORAL_INTERVIEW_2_BINABIK.md`**.
4. **`SOURCES_ET_VERIFICATIONS.md`**, audit privé : assertions, métriques, protocole, attribution, sources et points restant à confirmer.
5. **`README.md`**, commandes d'ouverture/lancement et raccourcis.

Le mapping des médias doit préciser : **slide/vue, fichier réel relatif, cadrage ou timecode, rôle narratif, provenance**. Un même média peut servir à plusieurs slides par cadrages ou annotations utiles.

Préserver la première présentation. Ne pas publier ni pousser de modifications à distance dans cette tâche. Si un export PDF est simple avec l'architecture existante, fournir un principal seul et, en option, un complet où les détails suivent immédiatement leur slide parente. L'export ne doit pas imposer un bloc d'annexes final au parcours HTML.

## 13. Critères de validation

- Le parcours principal contient bien les slides prévues et totalise **1 200 secondes** dans les données de timing.
- Les sous-vues sont exclues du compteur principal, de la navigation normale et du total chronométré.
- Tous les boutons affichés ouvrent une vue utile ; tous les retours rejoignent la bonne slide.
- Aucun lien média cassé, vidéo cachée qui continue à jouer ou problème de clavier/focus.
- Captures contrôlées sur l'ensemble des slides principales et plusieurs vues de détail : architecture, équations, code, calibration, résultats, FANUC, G1.
- Lisibilité en partage d'écran, pas uniquement en zoom local.
- Toutes les métriques présentées ont une source et un protocole identifiable.
- Les paragraphes parlés, les vidéos et les pauses correspondent à la cible de 20 minutes ; le guide ne promet pas une durée exacte sans répétition.
- Anglais oral simple, transitions explicites, **I / my**, attributions connues préservées, aucun bicopter.
- La phrase finale est présente **mot pour mot**.
- Les incertitudes restantes sont signalées dans le fichier privé, sans transformer la présentation en écran de notes techniques de fabrication.

