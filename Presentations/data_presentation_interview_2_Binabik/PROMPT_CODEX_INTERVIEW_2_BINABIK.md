# Prompt à donner à Codex — première version de la présentation technique Binabik 2

Tu vas créer la **première version fonctionnelle de ma deuxième présentation d'entretien chez Binabik**, en HTML, et son guide oral. Lis le fichier joint **`FIL_ROUGE_INTERVIEW_2_BINABIK.md`** : il constitue le brief détaillé et contient le storyboard, les temps, les sujets d'approfondissement et les points techniques déjà identifiés. Ne t'arrête pas à une proposition de plan : examine les sources, puis construis et vérifie les livrables.

## 1. Commence par examiner mon travail existant

Présentation Binabik actuelle :

`/Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/Presentations/presentation_interview_Binabik`

Projet PACO :

`/Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone`

Portfolio :

`/Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main`

Lis les instructions du dépôt. Dans le premier dossier, repère l'entrée HTML, le CSS, les scripts, les médias et le fichier qui m'aidait à savoir quoi dire pendant les slides. **La présentation actuelle, après toutes mes itérations, est la référence**, pas seulement l'ancien prompt qui avait servi à la démarrer.

Examine surtout le système de vues internes de l'ancienne présentation : les captures jointes montrent la même slide A3, d'abord sur **Overview**, puis sur **OpenVLA**. Le clic change le contenu de cette slide sans avancer dans la présentation. Je veux reprendre cette logique et l'étendre.

Lis aussi le papier joint **`paco-preprint-draft-v1-compact.pdf`**, une ancienne version plus complète que le papier soumis, et recherche les rapports, configurations, données, figures, vidéos et journaux utiles dans le projet PACO. Retrouve les documents FANUC, le dernier état du G1, le transcript et mes notes `Presentation Ideas.rtf` s'ils sont disponibles dans les sources autorisées. Ne prétends pas avoir lu un fichier introuvable. Si un chemin manque, indique-le précisément et avance avec ce qui est accessible, sans inventer un équivalent.

## 2. Objectif et structure : 20 minutes

Je veux un déroulé principal conçu pour **20 minutes, soit 1 200 secondes**, hors questions et approfondissements. **Ne réduis pas le principal à 18 minutes.** Les vidéos, pauses et transitions prévues font partie de ces 20 minutes.

Utilise cette répartition :

| Partie | Durée | Slides de départ |
|---|---:|---|
| Introduction | 1:00 | 01–02 |
| Singapore — technical deep dive | 14:00 | 03–22 |
| FANUC — industrial perspective | 2:30 | 23–26 |
| Unitree G1 — ongoing work | 1:30 | 27–28 |
| Relevance to Binabik and closing | 1:00 | 29–30 |

La base est donc **30 slides principales**, détaillées dans le fil rouge. Tu peux légèrement ajuster le nombre après inspection des médias, tout en gardant beaucoup de slides, une bonne fluidité et les durées par section. Je préfère plusieurs slides très visuelles et courtes à quelques slides chargées. Pour FANUC, notamment, conserve plusieurs slides montrant la tâche, le choix robot/préhenseur, la simulation et ses limites.

Le fil conducteur est : **understand the problem → make engineering decisions → implement → diagnose difficulties → improve → validate on real hardware**. Singapour est ma preuve technique centrale, FANUC mon lien avec l'industrie, le G1 ma direction actuelle vers manipulation et robot learning.

Je veux montrer des problèmes réellement rencontrés et ma réaction, pas seulement une suite de résultats positifs. Choisis deux récits solides et documentés : idéalement un sur méthode/commande et un sur intégration/perception/temps réel. Ne transforme pas une hypothèse plausible en incident vécu. Les slides d'architecture ou de mathématiques n'ont pas besoin d'un bloc artificiel « Problem / Solution ».

**N'inclus pas mon projet contrôle bicopter**, même en détail optionnel. Ne refais pas une longue présentation de mon parcours déjà connu. Ne propose pas spontanément cinq mois de stage ou un projet navigation que Binabik n'a pas demandé.

## 3. Approfondissements cliquables dans chaque slide

Je ne veux **pas de bloc d'annexes à la fin du parcours HTML**.

Chaque slide doit avoir une vue principale **Overview** et, sur les slides qui s'y prêtent, environ **3 à 5 boutons/onglets de détail**. Vise une moyenne dans cet intervalle sur la présentation ; les titres et la conclusion peuvent en avoir moins. Le fil rouge propose une carte des sujets.

- Le défilement et la navigation normale traversent seulement les slides principales.
- Les détails sont invisibles pendant ce parcours et s'ouvrent seulement quand je clique.
- Ils s'affichent **dans le cadre de la slide courante**, comme Overview/OpenVLA dans les captures : titre, ID et compteur principal conservés.
- En revenant à une ancienne slide pendant les questions, je peux ouvrir un sujet puis retrouver immédiatement son Overview.
- Prévois **Overview / Back to slide**, un retour clavier adapté, la restauration du focus et l'arrêt des vidéos cachées.
- L'index et la progression comptent les seules slides principales ; les sous-vues ne font pas passer le compteur de 30 à 150.

Prépare vraiment ces vues : question probable, réponse, équation ou schéma, preuve/mesure/extrait de code pertinent. Pas de faux boutons ni de cartes vides. Des explications conceptuelles sont possibles si elles sont clairement distinguées de mes réalisations. Nav2 et MPC peuvent être des comparaisons ou extensions, pas des outils que j'aurais utilisés sans preuve.

Je souhaite donner des **perches naturelles** à l'oral pour permettre des questions sur ces sujets. Prépare-les dans le guide, sans faire dépendre les 20 minutes d'une réaction du public ni répéter « ask me about this » partout.

## 4. Précision technique et première personne

Raconte mes actions avec **I / my**, y compris lorsque l'attribution n'est pas précisée dans un document : je corrigerai ces cas après relecture. Note les attributions incertaines dans l'audit privé plutôt que de remplacer tout par **we**. **Exception explicite : la sélection des coefficients a été faite par Mathis.** L'analyse financière FANUC faite par un autre étudiant ne m'appartient pas non plus. Ne m'attribue pas l'invention des méthodes théoriques issues des publications ni le firmware fournisseur.

Vérifie les fonctions, paramètres et protocoles dans la version de code et les journaux concernés. Chaque chiffre ou affirmation importante doit être traçable. Si code, brouillon et ancienne présentation diffèrent, résous le décalage ou signale-le dans l'audit ; ne mélange pas des campagnes.

Points déjà relevés dans le papier, à préserver :

- **36.3 → 5.8 mm (~84 %) : mesure au sol**, après calibration intrinsèque et homographie recalculée. **60.8 → 11.6 mm (~81 %) : marqueur surélevé**, après correction de parallaxe. Ce sont deux mesures différentes.
- Distingue pénalités offline, bornes de l'optimiseur, saturations online et limites physiques réellement vérifiées. Les valeurs offline et online peuvent différer.
- Le correcteur expérimental décrit dans ce draft est **semi-implicit Euler**. Les autres variantes sont des comparaisons si elles n'ont pas été exécutées sur le banc.
- Explique les entrées, l'attraction vers le nominal, les répulsions, l'amortissement, les saturations, la causalité et la conversion vers la commande réelle à partir des équations et du code, sans en inventer.
- Distingue ma conversion haut niveau des commandes et le contrôle moteur fourni. Ne qualifie pas tout le bas niveau de boîte noire sans l'examiner.
- **40/40 essais physiques**, 1–2 agents, minimum agent **6.3 cm**, boucle proche de **20 Hz** : périmètre expérimental limité. Certains agrégats de répétabilité utilisent 39 essais comparables ; expliquer cette distinction si nécessaire.
- Les taux en simulation, les résultats physiques, la fréquence de boucle et la latence ne sont pas interchangeables. La réduction de résolution est une piste d'optimisation documentée ; les sessions comparées ne constituent pas une expérience isolant tous les autres facteurs.
- FANUC reste une **conception/simulation ROBOGUIDE**, avec adaptation éventuelle d'un template, pas une cellule industrielle installée. Aucun ROI invérifié.
- Le G1 est un **projet en cours** : sépare done / in progress / next. Pas de fine-tuning, déploiement, performance ou première mondiale supposés. Les compétences peuvent être transférables ; une policy ne se transpose pas automatiquement entre robots.
- Ne déduis pas une préférence explicite de Giovanni entre le correcteur et la calibration sans vérifier le transcript. Donne une place réelle aux deux dans leurs budgets respectifs.

## 5. Forme : reprendre le thème et les médias actuels

Réutilise les photos/vidéos existantes et le langage visuel de ma présentation : couleurs, typographie, marges, composants, navigation, animations utiles. Ne crée pas un autre thème par défaut. Les captures montrent un fond clair, des titres sombres, du bleu en accent et des onglets discrets ; le CSS réel reste la référence.

Une idée par slide, grande image ou schéma, peu de texte, mots techniques lisibles. Utilise des recadrages ou annotations pour développer un même visuel sur plusieurs slides. Représente les équations et les résultats exactement ; distingue les schémas explicatifs des données mesurées. Pas d'images artificielles utilisées comme preuve de mon travail.

Assure une lecture confortable en plein écran 16:9 et en partage d'écran. Évite les dépendances réseau fragiles et les vidéos cachées qui continuent de jouer. Préserve la première présentation.

## 6. Guide oral indispensable

Crée **`GUIDE_ORAL_INTERVIEW_2_BINABIK.md`**, en t'inspirant du fichier de notes existant. Tout le contenu oral et présenté doit être en **anglais américain simple** : phrases courtes, structure naturelle, bons termes techniques. Je veux pouvoir parler à partir du guide sans réciter un texte compliqué.

Pour chaque slide, indique : ID et titre, temps cible et cumulé, message principal, **3–5 bullet points avec keywords en gras**, proposition de formulation orale adaptée au temps, **phrase de transition exacte**, éventuelle perche, questions probables et réponses reliées aux vues de détail. Sépare clairement l'oral principal des réponses optionnelles. Indique les temps vidéo/silence pour calibrer les 20 minutes.

Pour chaque vue de détail, ajoute une réponse courte, le raisonnement utile et une phrase pour revenir au fil principal. Le minutage est une cible à vérifier à la répétition, pas une durée certifiée par le nombre de mots.

La dernière phrase de conclusion doit être exactement :

**“Give me a challenging goal for these six months, and I'll do everything I can to achieve it — and hopefully exceed your expectations.”**

Je souhaite la conserver : ne la remplace pas et ne rouvre pas le débat sur son opportunité.

## 7. Dossier et livrables

Crée **`interview_2/`** dans :

`/Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/Presentations/presentation_interview_Binabik`

Livre dans ce sous-dossier :

1. La présentation HTML fonctionnelle et ses fichiers nécessaires.
2. **`FIL_ROUGE_INTERVIEW_2_BINABIK.md`**, enrichi après lecture du dépôt avec les vrais chemins des médias, sources et décisions finales.
3. **`GUIDE_ORAL_INTERVIEW_2_BINABIK.md`**.
4. **`SOURCES_ET_VERIFICATIONS.md`** : tableau slide/vue → assertion → preuve/fichier/fonction/page → protocole → attribution → incertitude éventuelle. Garde ce fichier hors de l'affichage destiné à l'entretien.
5. **`README.md`** : comment ouvrir/lancer et naviguer.

Dans le fil rouge, ajoute un mapping concret **slide/vue → fichier média existant → cadrage/timecode → rôle**. Les noms réels doivent venir de ton inspection, pas d'un exemple supposé.

Un export PDF est facultatif si simple avec l'existant : principal seul, et éventuellement complet avec les détails juste après leur slide parente. Il ne doit pas changer le fonctionnement interactif demandé. Travaille localement : pas de publication ou de push à distance pour cette tâche.

## 8. Vérification et compte rendu

Vérifie le total **1 200 secondes**, la répartition des projets, tous les chemins médias, les boutons, les retours, le clavier et le compteur principal. Ouvre la présentation, inspecte visuellement toutes les slides principales et plusieurs détails représentatifs ; corrige les chevauchements et le texte coupé. Vérifie la cohérence du guide oral et des transitions avec les IDs effectivement livrés.

Termine par un compte rendu court : chemin d'ouverture, nombre de slides principales et de vues internes, budget de temps, vérifications effectuées et seuls points factuels restant à confirmer. **Produis la V1 complète et modifiable, pas uniquement un plan.**

---

Petite remarque : dans mon portfolio, n'hésite pas a regarder le document portfolio_context contenant des infos sur plusieurs de mes projets. 