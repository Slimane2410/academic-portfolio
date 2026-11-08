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
- Conserver exactement la dernière phrase : **“Give me a challenging goal for these six months, and I'll do everything I can to achieve it — and hopefully exceed your expectations.”**

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

**État d'accès historique lors de la rédaction initiale (supersédé par l’inspection locale ci-dessous) :** le PDF, les deux captures et les notes RTF ont été lus. Les chemins `/Users/...` ne sont pas montés dans cette session : l'implémentation HTML, les médias existants et le code PACO devront être examinés par Codex sur le Mac. Aucun fichier précis de ce dépôt n'est présumé avoir été inspecté ici.

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
| 01 | My background |
| 02 | Why these projects? |
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

Avec cette base, **108 sujets** sont proposés pour 30 slides, soit **3,48 par slide**. La quantité ne doit pas produire du remplissage : réutiliser une vue pertinente depuis plusieurs endroits est possible, en conservant le bon retour à la slide d'origine.

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

Créer un nouveau sous-dossier **`interview_2/`** dans `Presentations/presentation_interview_Binabik/` et y regrouper :

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



## Current revision — 8 November 2026

The current version has 31 main slides and a 20:45 target. Slide 05 introduces clearance and joint success; the former slides 05–30 are now 06–31. All four internal views were removed from slide 04. Earlier storyboard and timing tables below are historical; the generated oral guide and current mapping are authoritative.

## 14. V1 livrée après inspection locale — 7 novembre 2026

Le dossier final est `Presentations/presentation_interview_Binabik/interview_2/`. La première présentation est préservée. La référence effective est son HTML actuel, ses styles, ses scripts et `NOTES_ORALES.md`; les vues A3 Overview/OpenVLA ont été ouvertes. Les documents du nouveau brief sont dans le dossier `Presentations/data_presentation_interview_2_Binabik/`.

Les décisions finales et la matrice de preuves sont dans `SOURCES_ET_VERIFICATIONS.md`. Le principal comporte **31 slides**, **108 approfondissements**, et **1 245 secondes**. Les liens `#sNN/dM` ouvrent la vue dans sa slide parente, sans annexe finale.

Récits retenus : (a) difficultés numériques du potentiel et de l’initialisation, complétées par l’essai physique de faible translation/timeout et la conversion force→mouvement; (b) diagnostic des deux erreurs de localisation et mesures séparées. Le profilage vision/série/contrôle apporte le troisième regard sur l’intégration. Aucun avant/après causal non isolé n’est inventé.

Précisions résolues : une seule warm start est complètement optimisée; pas d’argument `bounds` passé dans l’appel L-BFGS-B; référence physique synchronisée sur la progression; firmware disponible mais hash flashé manquant. FANUC reste une conception/simulation et G1 une préparation sans résultat appris.

### Storyboard final et temps

| ID | Titre livré | Cible | Cumul |
|---|---|---:|---:|
| s01 | From research to real robots | 0:25 | 0:25 |
| s02 | What I'll show today | 0:35 | 1:00 |
| s03 | Singapore: the research context | 0:30 | 1:30 |
| s04 | One robot, independent moving agents | 0:35 | 2:05 |
| s05 | Defining success | 0:45 | 2:50 |
| s06 | What the system had to handle | 0:30 | 3:20 |
| s07 | The two-layer architecture | 0:45 | 4:05 |
| s08 | My contribution | 0:30 | 4:35 |
| s09 | Why plan offline? | 0:35 | 5:10 |
| s10 | What I optimized | 0:50 | 6:00 |
| s11 | From candidate paths to a nominal route | 0:45 | 6:45 |
| s12 | Making the offline problem usable | 0:45 | 7:30 |
| s13 | What the online corrector sees | 0:40 | 8:10 |
| s14 | How the correction is built | 0:55 | 9:05 |
| s15 | One control step | 0:55 | 10:00 |
| s16 | Causal does not mean blind | 0:35 | 10:35 |
| s17 | A safe run could still stall | 0:40 | 11:15 |
| s18 | Building the physical testbed | 0:30 | 11:45 |
| s19 | From a planar command to wheel motion | 0:45 | 12:30 |
| s20 | Diagnosing position error | 0:50 | 13:20 |
| s21 | Finding the real-time bottleneck | 0:45 | 14:05 |
| s22 | Testing repeatability on real robots | 0:55 | 15:00 |
| s23 | Results, limits, and what I learned | 0:45 | 15:45 |
| s24 | FANUC: start from the industrial task | 0:35 | 16:20 |
| s25 | Choosing the robot and gripper | 0:40 | 17:00 |
| s26 | Simulating the cell in ROBOGUIDE | 0:40 | 17:40 |
| s27 | What the simulation could not prove | 0:35 | 18:15 |
| s28 | Unitree G1: my current direction | 0:45 | 19:00 |
| s29 | Learning manipulation from demonstrations | 0:45 | 19:45 |
| s30 | How I could contribute at Binabik | 0:35 | 20:20 |
| s31 | Ready for the challenge | 0:25 | 20:45 |

### Mapping concret slide / vue → média → cadrage / timecode → rôle → provenance

Tous les médias ci-dessous existent et sont copiés dans le sous-dossier. Le manifeste `assets/MEDIA_MANIFEST.json` conserve les chemins sources absolus et SHA-256. Les diagrammes et équations en HTML/SVG sont explicitement explicatifs, pas des données mesurées.

| Slide / vue | Fichier utilisé | Cadrage / timecode | Rôle | Provenance |
|---|---|---|---|---|
| s01/overview | assets/images/system.jpg | Photo rover complète 16:9 + G1 cadré au centre comme dans la présentation 1; légendes sous chaque visuel | I turn a robotics idea into a system I can measure and improve. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/images/system_chain_v01.jpg |
| s01/overview | assets/images/g1.jpg | Photo rover complète 16:9 + G1 cadré au centre comme dans la présentation 1; légendes sous chaque visuel | I turn a robotics idea into a system I can measure and improve. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/unitree-g1-official.jpg |
| s01/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | My preparatory classes gave me a strong scientific foundation through intensive math, physics, and engineering science. At Arts et Métiers, I learned how industrial processes work and what constraints matter in practice. That helped me recognize opportunities for automation, like the pouring task in my FANUC project. I also built foundations in mechanics, modeling, and control. I then joined a research master's program at Sorbonne Université to strengthen the foundations of robotics. | Méthode et sources dans la matrice privée |
| s02/overview | assets/images/arena.jpg | Cover centré; cadre recadré, fichier source intégral conservé | Three projects show implementation, industrial thinking, and current learning. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/images/arena_overview_v01.jpg |
| s02/overview | assets/images/fanuc-cell-user.png | Cover centré; cadre recadré, fichier source intégral conservé | Three projects show implementation, industrial thinking, and current learning. | /Users/slimaneaouanouk/Desktop/Screenshot 2026-11-07 at 9.20.00 PM.png |
| s02/overview | assets/images/g1-portrait-user.png | Cover centré; cadre recadré, fichier source intégral conservé | Three projects show implementation, industrial thinking, and current learning. | /Users/slimaneaouanouk/Desktop/8c0440dd-de29-41a5-8db5-d3b6d133e028.png |
| s02/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | They show three useful parts of my experience: physical integration, task feasibility, and learning a new robotics field. | Méthode et sources dans la matrice privée |
| s03/overview | assets/images/descartes-drones-poster.jpg | Cover centré; cadre recadré, fichier source intégral conservé | Digital twins for Singapore · drone trajectory planning | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/Presentations/presentation_interview_Binabik/interview_2/assets/videos/drones_decartes_project.mov ; original video https://youtu.be/sFYLavyD_sc |
| s03/overview | assets/videos/descartes-drones.mp4 | 00–18.428333 s; avec son, arrêt automatique à la fin | Digital twins for Singapore · drone trajectory planning | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/Presentations/presentation_interview_Binabik/interview_2/assets/videos/drones_decartes_project.mov ; original video https://youtu.be/sFYLavyD_sc |
| s03/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The research motivation concerned drone trajectory planning, while the reported physical experiments use ground rovers. | Méthode et sources dans la matrice privée |
| s03/d2 | assets/images/arena.jpg | Cover centré; cadre recadré, fichier source intégral conservé | One controlled rover moved among one or two independently driven physical agents in a bounded indoor arena. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/images/arena_overview_v01.jpg |
| s03/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I learned the planning and local-correction methods from papers, then connected them to experiments. | Méthode et sources dans la matrice privée |
| s03/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I separated the model, numerical choices, interfaces and measurable outcomes. | Méthode et sources dans la matrice privée |
| s04/overview | assets/images/simulation-lagrange-newton-poster.jpg | Image complète, contain | The controlled robot must reach its goal without access to the true future of other agents. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/video/simulation_lagrange_newton_v01.mp4 |
| s04/overview | assets/videos/simulation-lagrange-newton.mp4 | 00–19.233333 s; muet, arrêt automatique à la fin | The controlled robot must reach its goal without access to the true future of other agents. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/video/simulation_lagrange_newton_v01.mp4 |
| s05/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Success means reaching the goal safely. | Méthode et sources dans la matrice privée |
| s06/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The planner, online state and physical drivetrain have different kinds of limits. | Méthode et sources dans la matrice privée |
| s06/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | In the physical adapter, moving-agent influence is limited using edge-to-edge clearance of 0.60 m. | Méthode et sources dans la matrice privée |
| s06/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The draft uses 0.35 m/s and 0.8 m/s² as offline penalty thresholds, and 0.25 m/s and 1.0 m/s² for online clipping. | Méthode et sources dans la matrice privée |
| s06/d3 | assets/images/motor-identification.png | Image complète, contain | No. I verified the command logic and measured the drivetrain, but did not establish a universal physical envelope. | /Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/figures/images/f8.png |
| s06/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The testbed is planar, externally localized, relatively slow, and uses marked obstacles and robots. | Méthode et sources dans la matrice privée |
| s07/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The nominal plan handles the known static scene; current observations drive the local correction. | Méthode et sources dans la matrice privée |
| s07/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Basler frames reach the Raspberry Pi over the access point and Wi-Fi; Python computes poses and commands; onboard serial drives the motor board. | Méthode et sources dans la matrice privée |
| s07/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The static plan provides global direction; the local stage reacts to information that is only available during the run. | Méthode et sources dans la matrice privée |
| s07/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | No. The useful analogy is a planner supplying a reference to a controller. PACO does not use the Nav2 stack. | Méthode et sources dans la matrice privée |
| s07/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I would compare a reactive baseline, periodic replanning and a model-predictive controller under the same sensing and task protocol. | Méthode et sources dans la matrice privée |
| s08/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I connected methods, implementation and measured robot behavior. | Méthode et sources dans la matrice privée |
| s08/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I worked across the nominal solver, local-correction integration, vision-to-metric chain, command conversion and experimental analysis. | Méthode et sources dans la matrice privée |
| s08/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Mathis selected the coefficients. I do not claim that contribution. | Méthode et sources dans la matrice privée |
| s08/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | SciPy provides numerical optimization, NumPy supports numerical operations, and OpenCV supplies camera and ArUco tools. | Méthode et sources dans la matrice privée |
| s08/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Variational trajectory costs and artificial potential-field avoidance are established ideas. My evidence is in implementation and experimental validation. | Méthode et sources dans la matrice privée |
| s09/overview | assets/images/nominal-family.png | Image complète, contain | A nominal route gives the local corrector a useful global reference. | /Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/figures/images/f6.pdf |
| s09/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Fixed obstacles, arena bounds and the start and goal are included; moving agents are excluded. | Méthode et sources dans la matrice privée |
| s09/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | It is a reference, not a direct wheel command. The online controller can deviate from it. | Méthode et sources dans la matrice privée |
| s09/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The no-plan comparison attracts directly toward the goal. It tests what the local corrector can do by itself. | Méthode et sources dans la matrice privée |
| s09/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | That is a possible architecture, but it adds repeated optimization and needs a clear model of new information. | Méthode et sources dans la matrice privée |
| s10/overview | assets/images/nominal-family.png | Image complète, contain | I optimized interior trajectory points with a discrete cost and fixed endpoints. | /Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/figures/images/f6.pdf |
| s10/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | It contains x and y for each interior point: 2(N−1) scalar coordinates, with the endpoints reconstructed unchanged. | Méthode et sources dans la matrice privée |
| s10/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The midpoint action is combined with discrete smoothing and normalized violation penalties. | Méthode et sources dans la matrice privée |
| s10/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | No. Speed and acceleration enter as penalties; the inspected minimize call does not pass explicit coordinate bounds either. | Méthode et sources dans la matrice privée |
| s10/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The implementation supplies the gradient of the same discrete objective; centered finite differences provide a numerical reference. | Méthode et sources dans la matrice privée |
| s11/overview | assets/images/nominal-family.png | Image complète, contain | I screen candidate shapes, then optimize the best retained warm start. | /Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/figures/images/f6.pdf |
| s11/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | It uses local gradient information and a limited-memory approximation of curvature to reduce the discrete cost. | Méthode et sources dans la matrice privée |
| s11/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The current code screens several initial candidates, picks the lowest-cost retained one, and optimizes that one. | Méthode et sources dans la matrice privée |
| s11/d3 | assets/images/nominal-family.png | Image complète, contain | The draft and implementation retain finite obstacle costs; arena validity and candidate integrity are checked separately. | /Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/figures/images/f6.pdf |
| s11/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I inspect the solver status, objective value, iteration counts, path geometry and constraint-related diagnostics. | Méthode et sources dans la matrice privée |
| s12/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I replaced the earlier inverse-distance potential with a smooth compact potential. | Méthode et sources dans la matrice privée |
| s12/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Near-zero distance can create extreme gradients; a cutoff can also create poor smoothness if handled badly. | Méthode et sources dans la matrice privée |
| s12/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The code retains both inverse-distance and compact-polynomial functions, and the draft explains why the smoother version was introduced. | Méthode et sources dans la matrice privée |
| s12/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | At d=R, the compact cubic in 1−(d/R)² has zero value, first derivative and second derivative. | Méthode et sources dans la matrice privée |
| s12/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I would rerun the same initial paths, scenes and stopping tolerances with both potentials and compare convergence and feasible routes. | Méthode et sources dans la matrice privée |
| s13/overview | assets/images/metric-tracking.jpg | Image complète, contain | Each update starts from measured robot state and current obstacle snapshots. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/images/tracking_aruco_metric_v01.jpg |
| s13/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Position and marker yaw come from ArUco; velocity is estimated from successive observations. | Méthode et sources dans la matrice privée |
| s13/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The simulation helper queries current time plus look-ahead; the physical controller uses monotonic path progress with time/space look-ahead. | Méthode et sources dans la matrice privée |
| s13/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | No. Frame reception, processing and command transmission introduce age and delay. | Méthode et sources dans la matrice privée |
| s13/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The adapter filters observed velocity and can retain mobile snapshots for a bounded interval, with freshness recorded. | Méthode et sources dans la matrice privée |
| s14/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Attraction, three repulsions and damping combine before acceleration clipping. | Méthode et sources dans la matrice privée |
| s14/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | A proportional force points from the measured position to the nominal look-ahead reference. | Méthode et sources dans la matrice privée |
| s14/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | It points away from the agent and increases as the modeled clearance decreases. | Méthode et sources dans la matrice privée |
| s14/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The real robot may depart from the nominal, so local static and wall terms remain active during execution. | Méthode et sources dans la matrice privée |
| s14/d4 | assets/images/forces.png | Image complète, contain | It adds −c_d v, opposing the estimated current velocity and moderating motion. | /Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/figures/images/f7_bis.png |
| s15/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The physical experiment uses semi-implicit Euler, followed by real wheel-command conversion. | Méthode et sources dans la matrice privée |
| s15/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Yes: observe, choose the nominal reference, sum forces, divide by mass, clip, integrate, convert and transmit. | Méthode et sources dans la matrice privée |
| s15/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The velocity is updated before the position, and the position uses the updated velocity. | Méthode et sources dans la matrice privée |
| s15/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The state limiter clips vector norm; it preserves direction when reducing a vector to the maximum norm. | Méthode et sources dans la matrice privée |
| s15/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | These lines update velocity first, clip its norm, and form the one-step position from the measured position. | Méthode et sources dans la matrice privée |
| s16/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Looking ahead on my stored plan is different from knowing an agent’s true future. | Méthode et sources dans la matrice privée |
| s16/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The offline builder excludes agents, and the physical corrector accepts ObservedMobileObstacle snapshots. | Méthode et sources dans la matrice privée |
| s16/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The nominal is already known. Querying it at a later reference time does not reveal later world observations. | Méthode et sources dans la matrice privée |
| s16/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The scenario generator can know trajectories for simulation and evaluation, but the controller must consume only the current state. | Méthode et sources dans la matrice privée |
| s16/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Hold current observations fixed while changing the hidden future. The current command should remain unchanged. | Méthode et sources dans la matrice privée |
| s17/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | An early physical adapter timed out with weak translation; later work addressed the force-to-motion chain. | Méthode et sources dans la matrice privée |
| s17/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Yes. The July 14 report records active correction with weak translation and a controlled timeout, without collision. | Méthode et sources dans la matrice privée |
| s17/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Forces can oppose each other, remain clipped, or map poorly through heading and drivetrain constraints. | Méthode et sources dans la matrice privée |
| s17/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | No. Stop options are configurable; a supported option must not be presented as always enabled. | Méthode et sources dans la matrice privée |
| s17/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Possibly. It would optimize a sequence over a receding horizon using a robot model, then apply the first action and repeat. | Méthode et sources dans la matrice privée |
| s18/overview | assets/images/camera.jpg | Image complète, contain | I integrated external vision, onboard computation and serial actuation into one measured loop. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/images/camera_arena_setup_v01.jpg |
| s18/overview | assets/images/system.jpg | Cover centré; cadre recadré, fichier source intégral conservé | I integrated external vision, onboard computation and serial actuation into one measured loop. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/images/system_chain_v01.jpg |
| s18/d1 | assets/images/system.jpg | Cover centré; cadre recadré, fichier source intégral conservé | It made repeated low-speed navigation experiments and external measurement possible with the available rover platforms. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/images/system_chain_v01.jpg |
| s18/d2 | assets/images/camera.jpg | Image complète, contain | It provided a common metric frame for the controlled robot, agents and obstacles in this indoor experiment. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/images/camera_arena_setup_v01.jpg |
| s18/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The chosen experiment needed shared external pose measurement. A LiDAR-based onboard system would be a different sensing and localization project. | Méthode et sources dans la matrice privée |
| s18/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The run summaries record Basler GigE → access point → Wi-Fi → Raspberry Pi; wheel commands leave over onboard serial. | Méthode et sources dans la matrice privée |
| s19/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I implemented heading and wheel conversion above the supplier’s motor execution. | Méthode et sources dans la matrice privée |
| s19/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The desired heading is atan2(v_y,v_x); the error is wrapped relative to measured robot-forward yaw. | Méthode et sources dans la matrice privée |
| s19/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The nominal pair is linear minus angular on the left, and linear plus angular on the right, followed by joint rescaling, floors and smoothing. | Méthode et sources dans la matrice privée |
| s19/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | When the heading error crosses an entry threshold, the controller reverses the drive sign and reflects the desired heading by π. | Méthode et sources dans la matrice privée |
| s19/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The supplier source is available. It contains multiple motor paths; the no-encoder rover uses external camera feedback rather than wheel-level feedback in this experiment. | Méthode et sources dans la matrice privée |
| s20/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Lens distortion and raised-marker parallax produced two different measured errors. | Méthode et sources dans la matrice privée |
| s20/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | It estimated camera parameters and lens distortion from twenty valid calibration-board views before metric mapping. | Méthode et sources dans la matrice privée |
| s20/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The homography must map the distortion-corrected image coordinates to the ground plane. | Méthode et sources dans la matrice privée |
| s20/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | A raised marker projects along a camera ray to the wrong point on the ground mapping. I applied radial height correction about the principal point. | Méthode et sources dans la matrice privée |
| s20/d4 | assets/images/calibration-errors.png | Image complète, contain | They are separate within-protocol improvements, not two estimates of the same final accuracy. | /Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/figures/images/f5.pdf |
| s21/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Vision dominated the measured loop budget; the correction itself was small. | Méthode et sources dans la matrice privée |
| s21/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Only the top-level categories should be added. Marker detection is already inside vision. | Méthode et sources dans la matrice privée |
| s21/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Full-resolution and downscaled sessions had different detection times; the comparison is descriptive because scenes and sessions also differed. | Méthode et sources dans la matrice privée |
| s21/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | It takes about 8.43 ms in the measured iteration, close to 17% of the 50 ms target period. | Méthode et sources dans la matrice privée |
| s21/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | No. Frame age, processing time, transport, and command emission are different quantities. | Méthode et sources dans la matrice privée |
| s22/overview | assets/images/multi-agent-poster.jpg | Image complète, contain | Forty successful physical outcomes cover two frozen tasks, not forty different environments. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/multi-agent-poster.jpg |
| s22/overview | assets/videos/avoidance.mp4 | 00–10 s; muet, arrêt automatique à la fin | Forty successful physical outcomes cover two frozen tasks, not forty different environments. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/video/anticollision_multi_agent_v01.mp4 |
| s22/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Twenty runs of one frozen task and twenty of another, using the same physical coefficient set on one day. | Méthode et sources dans la matrice privée |
| s22/d2 | assets/images/repeatability-dual.png | Image complète, contain | Yes. These original figures show measured trajectories and clearance histories from the campaign. | /Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/figures/images/f16.png |
| s22/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | It is the lowest logged moving-agent edge-to-edge clearance over the physical run summaries. | Méthode et sources dans la matrice privée |
| s22/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | One B BIS run retained the preceding obstacle layout. It succeeded, but does not belong in the same-layout repeatability aggregate. | Méthode et sources dans la matrice privée |
| s23/overview | assets/images/sim-real.png | Image complète, contain | The strongest evidence is the complete measured chain; the tested domain remains narrow. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/figures/anticollision_twin_vs_real.png |
| s23/d1 | assets/images/sim-outcomes.png | Image complète, contain | No. The twelve architecture combinations use a separate simulated scenario bank and tuning protocol. | /Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone/Paper/figures/images/f11.png |
| s23/d2 | assets/images/sim-real.png | Image complète, contain | Nonholonomic motion, imperfect command response, asymmetry, sensing delay and possible planning differences all contribute. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/figures/anticollision_twin_vs_real.png |
| s23/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I separate goal misses, unsafe modeled clearance, perception stops and execution errors. | Méthode et sources dans la matrice privée |
| s23/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | More layouts, more varied disturbances, a better drivetrain model, and a paired perception benchmark. | Méthode et sources dans la matrice privée |
| s24/overview | assets/images/foundry-task.png | Image complète, contain | I turned an observed manual pouring operation into an automation concept. | /Users/slimaneaouanouk/Desktop/Portfolio/Data/Projects:internship/1A_Projet Fanuc/PROJET FANUC.docx :: word/media/image5.png |
| s24/overview | assets/images/fanuc-mold.png | Image complète, contain | I turned an observed manual pouring operation into an automation concept. | /Users/slimaneaouanouk/Desktop/Portfolio/Data/Projects:internship/1A_Projet Fanuc/PROJET FANUC.docx :: word/media/image14.png |
| s24/d1 | assets/images/foundry-task.png | Image complète, contain | The observed lab operation involved manually moving and pouring molten alloy from a crucible into a mold. | /Users/slimaneaouanouk/Desktop/Portfolio/Data/Projects:internship/1A_Projet Fanuc/PROJET FANUC.docx :: word/media/image5.png |
| s24/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Handling, reach, wrist load, grip opening, heat exposure and synchronization drove the study. | Méthode et sources dans la matrice privée |
| s24/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I worked on the task concept, robot/tool choices and simulation. The financial analysis was done by another student. | Méthode et sources dans la matrice privée |
| s24/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | It means checking whether the chosen robot, tool and layout can support the intended sequence in simulation. | Méthode et sources dans la matrice privée |
| s25/overview | assets/images/fanuc-gripper.png | Vue simulée complète; focus robot, prise et creuset | The tool and robot must be selected around the complete handled load and geometry. | /Users/slimaneaouanouk/Desktop/Portfolio/Data/Projects:internship/1A_Projet Fanuc/PROJET FANUC.docx :: word/media/image12.png |
| s25/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Use the full wrist load, center of mass, inertia and reachable task poses, then check the manufacturer’s load diagram. | Méthode et sources dans la matrice privée |
| s25/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I considered opposed contacts around the crucible and a simplified static friction model to relate normal force to the load. | Méthode et sources dans la matrice privée |
| s25/d3 | assets/images/fanuc-cell.png | Image complète, contain | Two furnace stations, the robot, conveyor, crucible table and protective boundaries. | /Users/slimaneaouanouk/Desktop/Portfolio/Data/Projects:internship/1A_Projet Fanuc/FANUC/photo global.png |
| s25/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Capacity has to match geometry, wrist loading, thermal conditions and integration constraints. | Méthode et sources dans la matrice privée |
| s26/overview | assets/images/fanuc-poster.jpg | Image complète, contain | The simulation made the sequence and geometric integration visible. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/fanuc-poster.jpg |
| s26/overview | assets/videos/fanuc.mp4 | 00–10 s; muet, arrêt automatique à la fin | The simulation made the sequence and geometric integration visible. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/fanuc-excerpt.mp4 |
| s26/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Approach, descend, grip, transport, position, pour, and return or set down. | Méthode et sources dans la matrice privée |
| s26/d2 | assets/images/fanuc-gripper.png | Image complète, contain | It could show task poses, relative equipment placement, motion order and modeled geometric clearance. | /Users/slimaneaouanouk/Desktop/Portfolio/Data/Projects:internship/1A_Projet Fanuc/PROJET FANUC.docx :: word/media/image12.png |
| s26/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | My notes recall a teacher-provided template that I reused and adapted to make this task sequence work. | Méthode et sources dans la matrice privée |
| s26/d4 | assets/images/fanuc-mold.png | Image complète, contain | The report, presentation, original images and videos document the modeled cell and sequence. | /Users/slimaneaouanouk/Desktop/Portfolio/Data/Projects:internship/1A_Projet Fanuc/PROJET FANUC.docx :: word/media/image14.png |
| s27/overview | assets/images/fanuc-cell.png | Image complète, contain | Heat, gripping, fluid behavior and repeated physical execution remain to be validated. | /Users/slimaneaouanouk/Desktop/Portfolio/Data/Projects:internship/1A_Projet Fanuc/FANUC/photo global.png |
| s27/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Start with safe handling tests using a representative cold load, then validate process-specific conditions under appropriate supervision. | Méthode et sources dans la matrice privée |
| s27/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | No. They show a layout intention; the installed system would require its own risk assessment and validated protective functions. | Méthode et sources dans la matrice privée |
| s27/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The report estimates a cycle but no timing export or comparable production trial was recovered. | Méthode et sources dans la matrice privée |
| s27/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | No, another student did that part. I can explain the robot and cell concept, but I don't have a verified ROI to claim. | Méthode et sources dans la matrice privée |
| s28/overview | assets/images/g1.jpg | Image complète, contain | My current project is at the reading and preparation stage, with manipulation as the goal. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/assets/unitree-g1-official.jpg |
| s28/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I'm reading papers, framing the task, and preparing the pipeline. I don't yet have a trained policy or a measured G1 result to show. | Méthode et sources dans la matrice privée |
| s28/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I'm targeting the G1. I still need to establish the practical teleoperation route and robot-control interface. | Méthode et sources dans la matrice privée |
| s28/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I want to gain practical experience in demonstration data, robot interfaces and evaluation before the internship. | Méthode et sources dans la matrice privée |
| s28/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | The proposal plans a team of four to five students with overlapping setup, learning and evaluation phases. | Méthode et sources dans la matrice privée |
| s29/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I want to connect demonstration quality, policy adaptation and measured robot behavior. | Méthode et sources dans la matrice privée |
| s29/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Synchronized observations, robot state, actions, task instruction and clear episode boundaries. | Méthode et sources dans la matrice privée |
| s29/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | No. It is the candidate adaptation route, with robot-specific data and interfaces still to establish. | Méthode et sources dans la matrice privée |
| s29/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Use a fixed task definition, repeated trials, held-out object configurations, and explicit failure and intervention logging. | Méthode et sources dans la matrice privée |
| s29/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Data discipline, integration methods and evaluation habits transfer. A policy needs compatibility work and fresh validation on the new platform. | Méthode et sources dans la matrice privée |
| s30/overview | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I can bring integration and experimental diagnosis while building manipulation expertise. | Méthode et sources dans la matrice privée |
| s30/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | Understand one task, reproduce the current setup, agree on success criteria, and help instrument repeatable tests. | Méthode et sources dans la matrice privée |
| s30/d2 | assets/images/system.jpg | Image complète, contain | The rover chain combines external vision, command conversion, timing instrumentation and repeated physical trials. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/images/system_chain_v01.jpg |
| s30/d3 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I need hands-on experience in compliant manipulation, task-specific grasping and reliable execution on the team’s platforms. | Méthode et sources dans la matrice privée |
| s30/d4 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I could discuss a focused, useful direction with my supervisor, subject to the academic scope and available equipment. | Méthode et sources dans la matrice privée |
| s31/overview | assets/images/system.jpg | Cover centré; cadre recadré, fichier source intégral conservé | I want to bring this energy and engineering approach to a six-month internship. | /Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/paco-showcase/assets/images/system_chain_v01.jpg |
| s31/d1 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I am proposing a six-month internship starting in February 2027, as discussed in the first interview. | Méthode et sources dans la matrice privée |
| s31/d2 | app.js / native HTML + SVG | Diagramme, tableau ou équation lisible; schéma explicatif | I would like to understand the concrete task, the main current failure mode, and how the team measures progress. | Méthode et sources dans la matrice privée |

### Conclusion finale exacte

Give me a challenging goal for these six months, and I'll do everything I can to achieve it — and hopefully exceed your expectations.
