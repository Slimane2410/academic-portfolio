# Company Research — Binabik AI

**Date de recherche :** 25 octobre 2026  
**Entreprise étudiée :** Binabik AI / **Binabik AG**  
**Site officiel :** https://binabik.ai/  
**Implantation principale opérationnelle :** Technoparkstrasse 2, Trakt B, 8406 Winterthur, canton de Zurich, Suisse  
**Objectif :** base de connaissances autonome pour préparer une candidature spontanée à un **stage de fin d'études de six mois, à temps plein, à partir de janvier/février 2027**, dans la robotique, le robot learning, la perception ou la validation de systèmes autonomes.  
**Source personnelle de référence :** `V1.7_PORTFOLIO_CONTEXT(5).md`, version du 19 octobre 2026, lue intégralement (2 055 lignes). Les identifiants de sections de ce document sont utilisés ci-dessous.  
**État des informations :** recherche documentaire publique arrêtée au 25 octobre 2026 ; pas d'entretien avec l'entreprise, pas d'accès à son code privé ni à ses données internes.

> **Convention de fiabilité** — **[C] Confirmé** par une source indiquée ; **[I] Inférence technique ou stratégique** ; **[NV] Non vérifié** ; **[?] Inconnu**. Une annonce historique, un plan ou un argument commercial ne devient pas une réalisation vérifiée. Chaque référence `[Sxx]` est développée dans la bibliographie en fin de fichier.

---

# Synthèse exécutive

**Binabik AI est une très jeune société suisse de Physical AI**, créée juridiquement en janvier 2026 autour d'une équipe issue de l'écosystème ZHAW. Elle développe une couche logicielle « agentic » pour que des robots humanoïdes et des manipulateurs mobiles accomplissent des tâches industrielles variables : chargement/déchargement de machines (*machine tending*), manutention de cartons, intralogistique, préparation et tri. Elle ne doit pas être décrite comme un constructeur de robots humanoïdes propriétaires : sa proposition centrale est de faire fonctionner **des plateformes matérielles existantes** avec une architecture modulaire d'IA, de compétences robotiques réutilisables et d'orchestration de workflows. [C, S01, S02, S03, S05]

**Ce qui distingue le projet :**

1. **Une architecture ROS 2 native et multi-système.** Le CTO explique que l'intelligence est structurée en trois niveaux : compétences sensorimotrices, compréhension du fonctionnement de familles de machines, puis orchestration de workflows. L'entreprise revendique une meilleure efficacité en données, notamment grâce à des signaux issus des machines industrielles en complément des démonstrations humaines. Les performances précises de ce mécanisme restent non publiées. [C pour la description revendiquée ; NV pour la performance, S06, S12]
2. **Une proximité technique exceptionnellement forte avec le projet universitaire du candidat.** Binabik propose un module de formation sur la téléopération, les données de démonstration et le VLA sur **Unitree G1**. Une offre historique de mémoire de master ciblait précisément un pipeline de téléopération / données sur humanoïde, potentiellement Unitree. Le projet universitaire de Slimane cible lui aussi un **Unitree G1** et une adaptation de VLA à partir de démonstrations ; dans son dossier personnel, ce projet est cependant **en cours de cadrage, sans déploiement ni résultat acquis**. [S08, S09 ; portfolio §7.17]
3. **De vrais objets de recherche accessibles :** co-auteurs ZHAW d'un article 2026 sur les VLA sensibles au type de préhenseur ; travaux sur le robot learning, le sim-to-real, la navigation et les logs ROS ; dépôts publics autour de ROS bags, Unitree/LeRobot et Isaac Lab. Attention : les dépôts Unitree et Isaac Lab identifiés sont des **forks** et n'établissent pas une contribution originale à ces frameworks. [S16–S22]
4. **Très petite équipe :** cinq membres fondateurs décrits en avril 2026, classe LinkedIn « 2–10 employés », objectif alors annoncé de monter à 15 personnes. La croissance effectivement réalisée, les revenus, les financements et le nombre de robots déployés chez des clients sont inconnus. [S03, S04, S11]
5. **Recrutement à ne pas surinterpréter :** le site carrière officiel affiche le **25/10/2026 aucun poste ouvert** et accueille les candidatures spontanées. Des fiches historiques de *Robotics Research Engineer*, *Forward Deployed Robotics Engineer* et *Master Thesis – Teleoperation & Data Generation for Humanoids* restent visibles sur LinkedIn/Built In. Les deux annonces d'ingénieur sur LinkedIn n'acceptent plus les candidatures ; la fiche de mémoire, encore affichée par Built In, **n'est pas confirmée ouverte par le canal officiel**. [S07, S08, S09, S10]

**Verdict initial : PRIORITÉ HAUTE pour une candidature spontanée ciblée**, **mais pas** pour une candidature générique présentant artificiellement une expertise avancée en VLA/ROS 2. Les meilleurs arguments sont : (i) robot physique livré et validé à Singapour ; (ii) calibration/localisation par vision et analyse rigoureuse ; (iii) alignement du projet Unitree G1 en cours ; (iv) approche transversale mécanique–logiciel–tests ; (v) compréhension réelle des problèmes de données et de déploiement. La principale difficulté : une startup orientée logiciel robotique exige une pratique de **Python, ROS 2, Linux et probablement C++** supérieure à ce qu'un CV académique suffit à démontrer. [portfolio §§4, 7.1, 7.17, 8–9 ; S08–S10]

**Contact recommandé :** `pascal@binabik.ai` (Pascal Sager, CTO), avec `careers@binabik.ai` en copie si le candidat souhaite utiliser simultanément le circuit officiel. Le message doit présenter une **proposition de stage technique**, sans laisser entendre que la fiche Master Thesis est forcément encore ouverte. Le CTO indique lui-même accepter les prises de contact liées à l'équipe. [S02, S06, S07]

## Zones d'incertitude les plus importantes

- Les trois fiches historiques sont-elles totalement closes, ou seulement retirées de la page carrière ? La fiche de mémoire pourrait-elle être convertie en stage ENSAM/M2 de six mois, avec convention française ? **Inconnu.**
- Quelle proportion de l'OS est effectivement démontrée chez un client et à quel niveau d'autonomie ? **Inconnu.** L'annonce de partenariat AGIBOT fixe un objectif de déploiements à partir de Q3 2026, mais ne constitue pas une preuve d'installations en production. [S14]
- Nature, clôture et montant d'un éventuel tour pre-seed ; budget stage ; possibilités d'embauche ; conditions d'autorisation de travail ; modèle de VLA exact ; métriques de succès en entreprise : **non vérifiés.**
- Des sources donnent **novembre 2025** comme lancement informel, mais l'inscription juridique suisse est datée du **16 janvier 2026**. Distinguer projet/activité antérieure et constitution légale. [S03, S04, S11]

---

# A. Identité, origine et activité commerciale

## A.1 Fiche d'identité vérifiée

| Champ | Information | Statut et source |
|---|---|---|
| Marque publique | Binabik AI / Binabik | [C, S01, S02] |
| Entité juridique suisse | **Binabik AG**, ancienne **Binabik GmbH** d'après l'historique du registre reproduit par Moneyhouse | [C dans le registre cité par S11] |
| Inscription initiale | **16 janvier 2026**, forme initiale GmbH ; forme actuelle AG selon l'inscription consultée | [C, S11] |
| Identifiant de société | **CHE-185.395.813** | [C, S11] |
| Adresse opérationnelle publiée | Technoparkstrasse 2 / Trakt B, 8406 Winterthur | [C, S05] |
| Présence géographique | Suisse (Winterthur/Zurich) et Finlande (Espoo) | [C, S02, S04, S05] |
| Effectifs | 2–10 sur LinkedIn ; cinq fondateurs en avril 2026 ; pas de comptage salarié vérifié au 25/10 | [C pour les données publiées, S03, S04] |
| Origine | Startup présentée comme une émanation du ZHAW Centre for Artificial Intelligence | [C, S03, S15] |
| Marchés | Production industrielle en petites séries variées, machine tending, intralogistique, fulfillment | [C pour marchés visés, S01, S06, S10] |
| Produit principal | Couche logicielle / « agentic operating system » sur robots existants | [C pour positionnement, S01, S10] |
| Activité complémentaire | **Binabik Academy**, formations professionnelles Physical AI sur robot réel | [C pour offre commercialisée, S12, S13] |
| Chiffre d'affaires / rentabilité | Aucun chiffre public fiable trouvé | [?] |

**Attention juridique :** Moneyhouse affiche une catégorisation sectorielle liée à l'édition, qui ne correspond pas à l'objet statutaire publié (« développement de logiciels et matériel, vente de logiciels et services informatiques ») ni à l'activité démontrée. Ne pas reprendre aveuglément cette catégorie d'annuaire. [S11]

## A.2 En termes simples : qu'achète le client ?

Un exploitant d'usine possède déjà des machines, des rayonnages, des allées et des opérateurs. Il voudrait déléguer à un robot des tâches variées, sans reconstruire toute la ligne de production et sans programmer à la main chaque séquence. Binabik propose une **couche d'intelligence et d'intégration** qui permet à un humanoïde ou à un robot manipulateur mobile de recevoir une mission, de réutiliser des compétences élémentaires, de s'adapter à des variantes et d'interagir avec les logiciels de l'usine. [S01]

**Exemples concrets :**

1. **Machine tending** — ouvrir ou desservir une machine, saisir une pièce, déposer un nouvel objet, déclencher/observer le cycle, récupérer le produit ; le logiciel devra gérer état de machine, géométrie, préhension, synchronisation et incidents. **Usage visé**, non preuve d'une cellule commercialement validée. [S01, S06]
2. **Box handling** — déplacer des caisses entre postes et gérer les différences de format/position ; l'entreprise met en avant un fonctionnement dans les infrastructures existantes. **Usage visé.** [S01]
3. **Intralogistique et tri** — manipuler/acheminer des unités, éventuellement depuis des consignes d'opérateurs ou un WMS/MES/ERP, par interface vocale, chat ou API REST. **Fonctions décrites par le fournisseur ; degré d'intégration réelle inconnu.** [S01]

**Proposition de valeur revendiquée :** plus de flexibilité que l'automatisation rigide, moins de données par nouvelle tâche, réemploi d'« atomic skills », fonctionnement au plus près des données du client (*on-premise/edge*), déploiement sans modification lourde du site. Ce sont des **avantages commerciaux annoncés**, pas des gains de productivité établis par un benchmark indépendant. [S01]

## A.3 En quoi Binabik se distingue-t-elle ?

- **Software/AI layer et intégrateur**, plutôt qu'OEM d'humanoïdes : angle différenciant fort si l'objectif est de travailler sur l'intelligence robotique et l'intégration réelle.
- **Approche modulaire** plutôt que modèle end-to-end unique couvrant tout le workflow ; articulation entre systèmes spécialisés et mémoire persistante. [S06, S10]
- **Données de production en plus de téléopération** : le CTO explique utiliser le signal de succès/échec fourni par les machines pour superviser des épisodes, afin de diminuer la dépendance à des démonstrations humaines coûteuses. **Description de la stratégie**, non méthode précisément spécifiée ni avantage quantifié. [S06]
- **Usage de robots à base roulante** et plateformes humanoïdes selon application : solution favorisant l'équilibre mobilité/préhension pour des zones industrielles. [S01]
- **Proximité du laboratoire ZHAW et expertise académique** : accès intellectuel à la recherche RL/VLA/navigation, mais ne pas supposer que toutes les publications appartiennent à Binabik ou sont intégrées au produit. [S15–S20]

## A.4 Maturité commerciale

**Diagnostic [I] : startup deeptech pre-seed / early-stage, en phase de démonstration, produit et premières intégrations industrielles.** Les signes sont cohérents : création en 2026, cinq membres fondateurs, appels à candidatures techniques, démonstrations publiques, accords annoncés avec fournisseurs hardware et programme d'early access. **On ne dispose pas** d'un inventaire indépendant de clients payants, de revenus récurrents, d'autonomie mesurée à l'usine ou de nombre de robots en production. [S01, S03, S04, S14]

---

# B. Plateformes, architecture technique et défis d'ingénierie

## B.1 Les matériels et les plateformes identifiables

| Plateforme | Présence publique | Ce que cela prouve — et ne prouve pas |
|---|---|---|
| **Unitree G1** | Programme Binabik Academy fondé sur téléopération, collecte de données, Isaac Sim/Lab et VLA sur robot réel ; présence d'un fork `unitree_lerobot` | [C] La société travaille/documente cet écosystème ; **pas** une preuve de politique G1 propriétaire mature ni de performances industrielles [S12, S13, S21] |
| **AGIBOT G2** | Partenariat annoncé à ICRA 2026 pour marchés suisse et sud-européen ; session de formation interne AGIBOT relatée sur LinkedIn | [C] Relation et intention de déployer ; **pas** un contrat client ni un nombre de déploiements confirmés [S14, S04] |
| **Humanoïdes à roues / mobile manipulators** | Photographies/démonstrations ZHAW/VivaTech et marketing | [C] Orientation produit et prototypes exposés ; architecture électromécanique exacte non publique [S01, S15] |
| **Quadrupèdes** | Présentations publiques conjointes ZHAW / Binabik | [C] Utilisés en démonstration ; activité commerciale principale orientée humanoïdes et manipulateurs mobiles [S15] |
| **Robots/OS internes** | Binabik vend une couche d'intelligence | [?] Nomenclature détaillée, composants, SLA, versions du modèle, intégrations vérifiées client |

**Distinction capitale pour la candidature :** travailler sur le G1 dans le projet M2 ne prouve pas déjà savoir exploiter l'API Binabik, ses données de production ou le contrôleur propre à l'AGIBOT G2. Réciproquement, Binabik emploie publiquement un G1 dans la formation, ce qui crée une **connexion précise**, sans qu'on puisse en déduire les méthodes internes du stage. [S08, S12 ; portfolio §7.17]

## B.2 Architecture publiquement revendiquée

Le CTO Pascal Sager expose trois niveaux fonctionnels : [S06]

1. **Sensorimotor skills** : apprentissage de gestes/compétences élémentaires liant perception et action ; plausible recours à imitation learning, RL, VLA, mais les réseaux/datasets précis ne sont pas détaillés publiquement.
2. **Machine-family operating logic** : apprentissage du cycle et des états d'une famille de machines industrielles ; permet de raisonner sur les étapes du process et les signaux de retour des machines.
3. **Workflow orchestration** : composition de capacités et gestion d'une mission sur plusieurs étapes, avec événements, mémoire et interactions logicielles.

**Stack annoncé :** ROS 2 native ; orchestrateur multi-agent ; mémoire persistante ; compétences réutilisables ; modèles spécialisés ; interfaces voix/chat/REST API ; possibilité d'exécution edge/on-premise. [S01, S04, S06, S10]

**Schéma conceptuel [I, non fourni par Binabik] :**

```text
Opérateur / ERP-WMS-MES / mission
              ↓
Agent d'orchestration + mémoire + contexte d'usine
              ↓
Sélection des étapes / skills et vérification d'état
              ↓
Perception ↔ policy VLA / compétences sensorimotrices
              ↓
Interface robot (ROS 2) ↔ actionneurs / préhenseurs
              ↑
Caméras, états capteurs, logs, machine feedback
              ↓
Mesure de réussite / échec → données d'amélioration
```

Ce dessin synthétise la communication publique, **pas** une architecture logicielle interne vérifiée. Ne pas présumer l'existence d'un SLAM, d'un filtre EKF ou d'un WBC spécifique au produit sans preuve.

## B.3 Technologies — faits, hypothèses, absence de preuve

| Technologie / compétence | Niveau de preuve pour l'entreprise | Implication candidature |
|---|---|---|
| ROS 2 | **[C]** explicitement indiqué dans les annonces et profil | Priorité de préparation très haute [S04, S10] |
| Python | **[C]** demandé dans deux annonces ; dépôts publics en Python | Doit montrer du code et des tests, pas seulement « connaissance » [S09, S10, S21] |
| Linux | **[C]** demandé pour ingénieurs | Réviser terminal, logs, environnement robotique, déploiement [S10] |
| C++ | **[C]** « bénéfique » dans l'annonce mémoire, mais degré d'usage interne inconnu | Complément solide à développer [S08] |
| Humanoid manipulation, téléopération, démonstrations, imitation learning | **[C]** missions annoncées, formation G1 | Cœur potentiel de stage [S08, S09, S12] |
| VLA / foundation models | **[C]** revendiqués dans produit, équipe, recherche et jobs | Alignement avec projet G1, **non maîtrise acquise** [S02, S06, S09, S13] |
| Agentic AI / multi-agent architecture | **[C]** positionnement explicite | Pertinence PJT AI industriel comme argument secondaire [S04, S10] |
| NVIDIA Isaac Sim / Isaac Lab | **[C]** formation Academy, fork GitHub | Familiarité écosystème ; usage exact dans cœur produit non démontré [S12, S21] |
| NVIDIA GR00T | **[C]** nice-to-have offre mémoire + fork GitHub | Bon sujet de préparation ; ne pas affirmer leur entraînement propriétaire GR00T [S08, S21] |
| Unitree LeRobot | **[C]** fork public + annonce ; outils exacts du produit inconnus | Lire interface, schéma de données et timing [S08, S21] |
| Data pipelines / ROS bags / offline analysis | **[C]** outil `mcp-rosbags` et annonces | Point d'entrée concret [S20, S21] |
| Perception pour manipulation | **[C]** mission Forward Deployed ; algorithmes spécifiques inconnus | Fort transfert d'expérience calibration/vision [S10] |
| SLAM, VIO, EKF, sensor fusion | **[NV]** non établis comme briques spécifiques du produit ; plausibles selon mobilité | Ne pas dire que Binabik fait « du SLAM » sans preuve |
| WBC / robot dynamics | **[C]** WBC seulement « bonus » pour le mémoire | Gap éventuel, pas obligation universelle [S08] |
| On-premise/edge | **[C]** stratégie produit revendiquée | Mémoire + données industrielles + contraintes d'exploitation [S01] |
| CUDA, PyTorch, versions exactes, middleware réseau | **[?]** pas de preuve directe suffisante pour le stack privé | Intérêts pertinents, ne pas les attribuer d'office |

## B.4 Défis d'ingénierie réellement intéressants

| Défi | Origine | Pourquoi c'est difficile | Stage plausible |
|---|---|---|---|
| **Données de démonstrations fiables** | **[C]** annonce mémoire [S08] | Aligner `image/action/joints/timestamp`, traiter pertes, répétitions, dérive, commandes asynchrones | Construire enregistreur, contrôles qualité, dataset versionné |
| **Adaptation avec peu d'exemples** | **[C]** stratégie CTO [S06] | Domain shift, objets/grasps variables, qualité du signal de réussite, risque d'overfit | Comparer jeux de données et protocoles few-shot |
| **VLA spécifique au préhenseur** | **[C]** lien scientifique équipe [S17] | Actions et stratégies non interchangeables selon le gripper | Tester embodiment conditioning et limites d'adaptation |
| **Reliability of long-horizon execution** | **[C]** ambitions produit et recrutement [S04, S09] | Les erreurs élémentaires s'accumulent, reprise après échec, état machine | Logs d'épisodes, détection d'échec, métriques de reprise |
| **Perception robuste en usine** | **[C]** mission Forward Deployed ; **[I]** détails [S10] | Occlusions, reflets, calibration après reconfiguration, mouvement du préhenseur | Bench de calibration et de perception |
| **ROS 2 / intégration multi-vendeurs** | **[C]** description ROS 2 + AGIBOT/Unitree [S10, S14] | Interfaces action/état différentes, fréquence et latence, horodatage, sûreté | Couche d'adaptation, tests d'intégration |
| **Sécurité opérationnelle** | **[C]** promesse sécurité ; **[I]** moyens [S01] | Contact humain, arrêts sûrs, contraintes physiques, comportement hors distribution | Protocoles d'essais et fault-injection ; pas certification |
| **On-premise et souveraineté des données** | **[C]** positionnement produit [S01] | Compute local, logs sensibles, disponibilité réseau, isolement systèmes | Analyse offline, pipelines locaux, latence et gestion de données |
| **Validation sur sites clients** | **[C]** Forward Deployed [S10] | Débogage simultané mécanique, capteurs, logiciel, réseaux, utilisateurs | Plan d'acceptation, instrumentation et root cause |
| **Économie réelle du déploiement** | **[I]** lié au positionnement [S01] | Temps de cycle, cadence, MTBF, intervention humaine, coût de téléop | Tableau KPI et campagne de tests comparables |

### Ce qu'il ne faut PAS affirmer

- « Binabik a entraîné son propre foundation model VLA sur des millions d'épisodes » — **aucune preuve**.
- « AGIBOT G2 équipé de Binabik produit déjà en usine avec X % de succès » — partenariat et calendrier annoncés, **pas de résultat mesuré identifié**.
- « Leur robot utilise SLAM/EKF/LiDAR » — ces technologies peuvent être utiles, **pas documentées comme choix réels**.
- « 200+ publications scientifiques Binabik » — chiffre marketing d'expérience scientifique **agrégée** de l'équipe [S02], pas nombre de papiers propres à la société.
- « La formation du 22 au 24 septembre s'est déroulée et a diplômé N personnes » — **programme annoncé**, déroulement et inscriptions non vérifiés [S12].

---

# C. Fondateurs, équipe, interlocuteurs

## C.1 Équipe officielle

La [page d'équipe](https://binabik.ai/team) affiche cinq responsables ; les emails sont publiés sur le domaine de l'entreprise. [S02]

| Personne | Fonction publiée | Expertise / parcours documenté | Pertinence pour une candidature | Contact vérifié |
|---|---|---|---|---|
| **Pascal Sager** | **CTO & cofondateur** | Recherche AI/Physical AI, représentation/world models, data-efficient robot learning ; parcours ZHAW, UZH/ETH Institute of Neuroinformatics, ETH AI Center ; sa page personnelle détaille les trois systèmes d'apprentissage | **P1 — meilleur contact** pour une proposition VLA/données/robot learning de six mois | [LinkedIn](https://www.linkedin.com/in/sagerpascal/) ; [site](https://sagerpascal.github.io/) ; `pascal@binabik.ai` [S02, S06] |
| **Lei Fu** | **Robotics Lead Engineer** | Publications en ROS 2, ROS bags, edge/cloud robotique, embodied agentic AI ; profil ZHAW | **P1/P2 — interlocutrice technique** pour intégration robot, perception, data et validation | [LinkedIn](https://www.linkedin.com/in/leifu6968/) ; [ZHAW](https://www.zhaw.ch/en/about-us/person/fule) ; `lei@binabik.ai` [S02, S18] |
| **Jorge Peña Queralta** | **CEO & cofondateur** | PhD en robotique/autonomie, postdoctorat ETH ; responsable du groupe ZHAW *Embodied Mobile Agents*, travaux RL, navigation, robotique d'assistance | **P2 — excellent contact académique/recherche**, plutôt en recours ou pour stage de R&D transversal | [LinkedIn](https://www.linkedin.com/in/jopequ/) ; [ZHAW](https://www.zhaw.ch/en/about-us/person/penq) ; `jorge@binabik.ai` [S02, S15, S16] |
| **Giovanni Toffetti** | **CPO & cofondateur** | Politecnico di Milano ; cloud-native robotics, systèmes distribués, AI et manipulation ; recherche ZHAW | **P2** pour chaîne produit, agents, interface données/robot et engineering systems | [LinkedIn](https://www.linkedin.com/in/giovannitoffetti/) ; [site](https://gtoff.github.io/) ; `giovanni@binabik.ai` [S02, S19] |
| **Harry Edelman** | **CFO & cofondateur** | Direction/gestion, connexion Finlande et recherche en robotique dans l'écosystème Turku ; parcours financier précis insuffisamment établi | **P3** : seulement si interlocuteurs techniques ne répondent pas ou pour RH/financement | Email officiel `harry@binabik.ai` ; [publication LinkedIn](https://www.linkedin.com/posts/harryedelman_icra2026-agibot-g2-activity-7467829153573007361-dI_3) [S02, S14] |

**Précision sur les noms :** la page officielle présente « Harry **Edelmann** », tandis que des profils/publications et l'immatriculation utilisent « Harry **Edelman** ». Par prudence, employer **Harry** ou la graphie du profil précis à qui l'on écrit, et éviter cette ambiguïté dans le mail principal. [S02, S11]

### Une sixième personne à connaître

**Lauri Suomela** apparaît dans les publications de l'équipe, la Binabik Academy et des échanges publics Binabik. Il travaille sur le *learning-based robot navigation* et a signé **PlaceNav** (ICRA 2024) et **Benchmarking Visual Localization for Autonomous Navigation** (WACV 2023). **Très bon contact scientifique secondaire pour perception/localisation**, mais son profil indique la Finlande : ne pas supposer qu'il recrute ou supervise des stages à Winterthur. [S13, S23]  
LinkedIn : https://fi.linkedin.com/in/laurisuomela — email Academy publié : `lauri@binabik.ai`.

## C.2 Qui contacter et dans quel ordre ?

1. **Pascal Sager (CTO)** : l'adéquation la plus précise avec G1/VLA/données et la stratégie du produit. Son site invite explicitement les personnes intéressées par rejoindre Binabik à le contacter. Mail individualisé, technique, court ; **copie `careers@binabik.ai` acceptable** mais non obligatoire. [S06, S07]
2. **Lei Fu (Robotics Lead Engineer)** : deuxième approche si angle intégration / vision / tests physiques, notamment si pas de réponse après 7–10 jours. Éviter d'envoyer simultanément le même texte à trois dirigeants. [S02, S18]
3. **Jorge Peña Queralta (CEO)** : alternative crédible pour une proposition recherche + collaboration académique ; utile si premier circuit sans réponse ou si la fonction de stage est plus scientifique. [S16]
4. **Giovanni Toffetti (CPO)** : pertinent pour architecture modulaire, ROS data tooling, AI industrial interface. [S19]
5. **Canal officiel** : `careers@binabik.ai` — adresse précisément annoncée pour les candidatures spontanées ; `hello@binabik.ai` relève des demandes générales/commerciales et n'est pas prioritaire. [S02, S07]

**Modèle de prise de contact :** une candidature structurée auprès de Pascal + éventuellement careers ; une seule relance après 7 à 10 jours ; LinkedIn pour se connecter ou relancer, pas dupliquer immédiatement tous les canaux. Aucune adresse personnelle ni professionnelle n'a été inventée.

---

# D. Financement, développement, partenariats et risques

## D.1 Dates et éléments vérifiables

| Date/période | Événement | Interprétation |
|---|---|---|
| Novembre 2025 | « Launch date » mentionnée par Dealroom | **[NV]** date de projet / lancement commercial possible, mais pas constitution légale [S24] |
| **16 janvier 2026** | Immatriculation initiale suisse, Binabik GmbH | **[C]** date juridique [S11] |
| **14 avril 2026** | Annonce de l'implantation Technopark Winterthur ; équipe de cinq ; projet de 15 salariés dans l'année suivante | **[C]** ambition publiée, pas effectif atteint [S03] |
| Avril 2026 | Changements d'adresse et actionnariat rapportés par extrait de registre | **[C]** évolution du dossier juridique [S11] |
| Juin 2026 | ZHAW + Binabik au salon VivaTech Paris, humanoïde à roues et quadrupède présentés | **[C]** démonstration publique et proximité institutionnelle [S15] |
| 2026, ICRA Vienne | Partenariat **AGIBOT** annoncé pour G2 en Suisse et Europe du Sud ; premiers déploiements **annoncés pour Q3 2026** | **[C]** annonce ; **[?]** statut réel des déploiements au 25/10 [S14] |
| Juillet 2026 | Nom juridique observé « Binabik AG » après ancienne GmbH ; dernier changement en registre le 08/07 | **[C]** annuaire s'appuyant sur registre [S11] |
| 2026 | Binabik Academy propose notamment une formation VLA/G1 et annonce une offre de formation AGIBOT | **[C]** offre publique ; volume de ventes inconnu [S12, S13] |
| Été–automne 2026 | Campagne LinkedIn d'embauche engineering + mémoire Master Thesis ; les offres ensuite absentes de la page officielle | **[C]** campagne passée ; statut de toute ouverture future inconnu [S04, S07–S10] |

## D.2 Financement : diagnostic prudent

- **[C]** Dealroom ne recense **aucun financement externe connu**. Ceci **ne prouve pas** qu'aucune subvention, investissement privé ou apport d'actionnaires n'existe. [S24]
- **[C]** Une ancienne annonce Forward Deployed affirmait que l'entreprise était appuyée par un réseau de grants et partenariats hardware et évoquait **une levée pre-seed « closing in Q3 2026 »**. Il s'agit d'une **intention située dans le temps**, pas d'un closing ni d'un montant confirmé. [S10]
- **[C]** La ZHAW indique que la participation de son équipe à VivaTech a été soutenue par Greater Zurich Area et Innosuisse. **Ne pas convertir ce financement de présence institutionnelle en levée de fonds Binabik.** [S15]
- **[C]** Pascal Sager évoque un financement pour une **association de sensibilisation au Physical AI** ; **ne pas le confondre avec un tour d'investissement de Binabik AG**. [S06]
- **[?]** Capital souscrit actuel, cash runway, valorisation, investisseurs institutionnels, revenus, marges, rémunération de stage, durée contractuelle et perspectives de CDI.

## D.3 Signaux positifs et signaux d'alerte

**Positifs :** fondateurs aux compétences complémentaires, produit ciblant un besoin industriel concret, relation ZHAW, partenaires hardware annoncés, travaux scientifiques pertinents, capacité à montrer du hardware, annonces de recrutement récentes, volonté affichée d'intégration sur sites clients. [S03, S06, S10, S14–S20]

**Risques :** équipe de petite taille, possible financement encore en maturation, faible recul commercial, concurrence de plateformes OEM et de sociétés de Physical AI, déploiements difficiles à certifier, dépendance à des robots tiers, besoin de développeurs immédiatement autonomes. Un stagiaire peut avoir un vrai impact mais aussi peu d'encadrement, une mission très mouvante et une conversion non garantie. **Ce sont des risques plausibles, non des faits négatifs établis sur Binabik.**

**Évolution salariale :** aucun salaire de stage ou de CDI Binabik publiquement vérifié ; ne pas inférer le niveau de salaire de la localisation zurichoise seule. Le positionnement suisse et les tâches de robot learning peuvent créer une valeur professionnelle, mais la contrepartie cash/equity est inconnue. Ne pas arbitrer en faveur de cette startup contre un poste Big Tech solide sans comparer offre, autonomie technique et finances réelles.

---

# E. Recrutement : annonces et conditions

## E.1 État constaté le 25 octobre 2026

**Le site carrière officiel indique expressément : « Currently no positions open » et propose les candidatures spontanées à `careers@binabik.ai`. [S07]** Les annonces suivantes apportent des informations utiles sur les besoins techniques, **mais aucune n'est certifiée ouverte à cette date par la page officielle**.

| Poste | Localisation | Contenu | Statut à date | Source |
|---|---|---|---|---|
| **Master Thesis – Teleoperation & Data Generation for Humanoids** | Winterthur, hybride ; niveau master | Téléop humanoïde (ex. Unitree), acquisition haute fréquence, filtrage/qualité, augmentation, intégration physique | **Non confirmé.** Encore référencé/republié par Built In, mais absent des ouvertures officielles ; demander explicitement s'il reste accessible comme stage 6 mois | [S08](https://builtin.com/job/master-thesis-teleoperation-data-generation-humanoids/9715115) |
| **Robotics Research Engineer** | Winterthur, temps plein | OS agentic, manipulation, ROS 2, VLA, dataset/téléop, hardware testing | **Annonce historique fermée sur LinkedIn** (« no longer accepting applications »), absente du site carrière | [S09](https://ch.linkedin.com/jobs/view/robotics-research-engineer-at-binabik-ai-4441727762) |
| **Forward Deployed Robotics Engineer** | Winterthur + déplacements sites européens, temps plein | Déploiement client, ROS 2/Python, perception/manipulation, debugging complet, téléop/données, acceptance tests | **Annonce historique fermée sur LinkedIn**, absente du site carrière | [S10](https://ch.linkedin.com/jobs/view/forward-deployed-robotics-engineer-at-binabik-ai-4418735086) |

La publication LinkedIn de la société présentant ces trois postes est une **preuve d'une campagne réelle de recrutement** mais pas de leur statut actuel. [S04]

## E.2 Détail — Master Thesis : correspondance majeure

**Missions documentées** [S08] :

- Installer/optimiser la téléopération d'un humanoïde, **Unitree cité comme exemple**.
- Concevoir un pipeline de stockage de données robot haute fréquence, capteurs et commandes.
- Nettoyer les enregistrements, supprimer le bruit, évaluer la qualité des démonstrations.
- Augmenter les datasets pour l'*imitation learning*.
- Tester la chaîne sur un robot réel, au contact d'ingénieurs seniors.

**Profil demandé :** étudiant en master robotique/informatique/mécanique ou proche ; cinématique et théorie du contrôle ; Python apprécié ; C++ bénéfique ; WBC, NVIDIA GR00T, SDK Unitree en bonus. **La description évoque la possibilité d'un poste permanent après le mémoire, mais sans engagement contractuel.**

**Pour le candidat :** adéquation remarquable avec le plan actuel G1. À ne pas masquer : le sujet interne est formulé comme **Master Thesis**, peut dépendre d'un calendrier ou convention spécifique ; il faut vérifier si un stage français de fin d'études de six mois peut administrativement remplir ce rôle. Le fait d'avoir déjà un projet G1 à la Sorbonne peut être un atout (familiarité) ou une contrainte (éviter répétition d'un sujet déjà développé) : mieux proposer une **phase différente, industrialisable et mesurable**.

## E.3 Détail — Robotics Research Engineer

**Missions et critères** : logiciel cœur de l'OS ; manipulation ; robot learning ; ROS 2 ; VLA ; industrialisation de résultats scientifiques ; tests sur vrai robot. Python fort, Linux, pratique ROS/ROS 2 sur système physique, *full-stack debugging*, anglais, droit de travailler en Suisse. Expérience humanoïdes et publications de recherche en bonus. **C'est un rôle permanent** plutôt qu'un stage publié. [S09]

**Lecture stratégique :** expertise logicielle substantielle demandée ; candidat intéressant pour un stage plus précisément borné dans le champ dataset/perception/intégration, **pas** comme équivalent immédiat d'un chercheur confirmé en manipulation.

## E.4 Détail — Forward Deployed Robotics Engineer

Poste orienté **déploiement chez les clients à travers l'Europe** (~50 % du temps annoncé) et **contribution code au produit** (~50 % à Winterthur) : adaptation des skills, perception/manipulation, hardware commissioning mécanique/électrique/réseau, campagne de téléop, scripts d'acquisition et tests d'acceptation. Anglais, forte autonomie Python/ROS 2/Linux, permis de conduire, droit au travail suisse et déplacements requis. [S10]

**Pont concret avec le profil :** expérience de robot réel avec contraintes visuelles, temps réel et calibration en laboratoire ; connaissances mécaniques et d'intégration ; permis B mentionné dans le portfolio et pertinent **uniquement si candidature alignée Forward Deployed**. L'écart principal reste l'absence d'expérience documentée d'intégration ROS 2 sur site client et de production code à grande échelle.

## E.5 Modalités pratiques et pièces à préparer

- **Candidature spontanée officielle :** `careers@binabik.ai` [S07].
- L'annonce Research Engineer demandait **motivation letter, CV, transcripts**, anglais et une liste des **cinq meilleurs accomplissements** ; utiliser cela comme indice de préférence, pas comme obligation actuelle pour toute candidature. [S09]
- L'annonce Forward Deployed invitait à joindre **vidéos/projets robotiques** et preuves d'impact ; le portfolio visuel de Singapour est donc particulièrement utile. [S10]
- **À clarifier avant acceptation :** stage rémunéré ou non, dates exactes, encadrement, laboratoire/hardware, droit au travail en Suisse, assurances, convention ENSAM/Sorbonne, critères de succès et possibilité de CDI.

---

# F. Recherche scientifique, publications, open source

> Les travaux ci-dessous concernent des **personnes de l'équipe et leurs affiliations de recherche** ; il n'est **pas prouvé** qu'ils décrivent du code propriétaire de Binabik ni une fonctionnalité de produit commercial.

## F.1 Publications particulièrement pertinentes

| Publication | Auteurs/année | Contribution à retenir | Lien et rapport à Binabik |
|---|---|---|---|
| **Gripper-aware Vision Language Action Models (GVLA)** | Hanyi Zhang et al., avec **Jorge Peña Queralta** et **Giovanni Toffetti**, 2026 ; page de projet indique acceptation ECCV 2026 | Approche *gripper-aware* pour adapter la génération d'actions à des types de préhenseurs différents ; jeu de données MiGA présenté avec **103 000 démonstrations** et cinq types de grippers ; conditionnement et routing d'adapters | [arXiv](https://arxiv.org/abs/2608.24603) / [projet GVLA](https://airvlab.github.io/G-VLA/) [S17]. Excellent sujet technique pour Pascal/Giovanni ; pas preuve d'implémentation dans Binabik |
| **Towards Embodied Agentic AI: Review and Classification of LLM- and VLM-Driven Robot Autonomy and Interaction** | Sahar Salimpour et al., avec **Lei Fu, Giovanni Toffetti, Harry Edelman, Jorge Peña Queralta**, 2025 | Revue et classification des systèmes agentiques et modèles multimodaux pour l'autonomie et l'interaction physique ; pont conceptuel entre perception, action et orchestration | [DOI arXiv](https://doi.org/10.48550/arXiv.2508.05294) ; [ZHAW](https://www.zhaw.ch/en/engineering/institutes-centres/centre-for-artificial-intelligence-cai/embodied-mobile-agents) [S16] |
| **ROSBag MCP Server: Analyzing Robot Data with LLMs for Agentic Embodied AI Applications** | **Lei Fu et al.**, 2025 | Interrogation et analyse de robot logs avec LLM/MCP ; utile à l'observabilité et au debugging des expérimentations | [DOI](https://doi.org/10.1109/roboticcc68732.2025.00025) / [GitHub mcp-rosbags](https://github.com/binabik-ai/mcp-rosbags) [S18, S20] |
| **Sim-to-real reinforcement learning for local mobile robot navigation in dynamic environments** | Sahar Salimpour, Jorge Peña Queralta et al., ECMR 2025 | RL navigation locale et transfert simulation→réel sur environnement dynamique ; **fort lien** avec le rover CNRS et l'intérêt navigation | [DOI](https://doi.org/10.1109/ecmr65884.2025.11163286) [S16] |
| **3D scene graphs in robotics: a unified representation bridging geometry, semantics, and action** | Iacopo Catalano et al. avec Jorge Peña Queralta, IEEE Transactions on Robotics, 2026 | Représentations structurées pour raccorder géométrie, sémantique et action ; référence pour mémoire spatiale et composition des tâches | [DOI](https://doi.org/10.1109/TRO.2026.3731534) [S16] |
| **IoRT ROS 2 applications: evaluating Zenoh and VPN for robotic networking in the edge-cloud continuum** | Lei Fu et al., IEEE 2025 | Réseaux distribués ROS 2, edge/cloud et communication robotique | [DOI](https://doi.org/10.1109/ISCC65549.2025.11326186) [S18] |
| **Cloud Native Robotic Applications with GPU Sharing on Kubernetes** | Giovanni Toffetti et al., 2022 | Outils cloud-native de robotique et discussion sur simulation→réel/hétérogénéité GPU | [arXiv](https://arxiv.org/abs/2210.03936) [S19] |

**Hiérarchie pour la candidature :** choisir **une seule référence pertinente**, éventuellement GVLA ou architecture en trois niveaux du CTO. Un mail centré sur 4 papiers ressemble à une revue de littérature et dilue la demande de stage. L'idée est de démontrer qu'on comprend le problème réel à résoudre.

## F.2 Code et signaux techniques publics

GitHub d'organisation : https://github.com/binabik-ai [S21]

| Dépôt | Nature / intérêt | Limite d'interprétation |
|---|---|---|
| [`mcp-rosbags`](https://github.com/binabik-ai/mcp-rosbags) | Dépôt public Python : serveur MCP pour interroger ROS bags (trajectoires, images, LiDAR, TF, événements, logs), extraction et analyses | **Dépôt original publié**, ne démontre pas son adoption dans chaque installation cliente |
| [`mcp-lab`](https://github.com/binabik-ai/mcp-lab) | Outil public de test de serveurs MCP contre des providers LLM | **Dépôt original** ; intérêt AI tooling/validation |
| [`unitree_lerobot`](https://github.com/binabik-ai/unitree_lerobot) | **Fork** Unitree d'une chaîne imitation learning / données sur Unitree G1 | **Fork ≠ logiciel propriétaire créé par Binabik**, utile comme piste de préparation |
| [`unitree_sim_isaaclab`](https://github.com/binabik-ai/unitree_sim_isaaclab) | **Fork** de simulation Unitree avec Isaac Lab | Ne pas affirmer développement original ou usage actif chez des clients |
| [`Isaac-GR00T`](https://github.com/binabik-ai/Isaac-GR00T) | **Fork** du projet NVIDIA GR00T | Indice de veille/expérimentation, pas preuve de modèle entraîné/déployé |

### Piste originale pour une candidature

Le couple **`mcp-rosbags` + expérience de vision/logs du projet CNRS + PJT AI local** donne une proposition cohérente : améliorer la **traçabilité et l'analyse d'essais physiques** (ROS bags, images, commandes, événements, détection d'échec, reporting qualité). C'est potentiellement plus défendable à court terme qu'annoncer pouvoir développer un VLA SOTA en six mois. [S20 ; portfolio §§7.1, 7.9]

## F.3 Différencier recherches ZHAW et roadmap produit

Le groupe ZHAW *Embodied Mobile Agents* présente notamment des recherches CareBot/assistance, des travaux d'agentic Physical AI, de RL et de scènes 3D. Les fondateurs participent à cet écosystème. **Cela fournit du contexte scientifique, pas une preuve de propriété intellectuelle ou d'un transfert spécifique vers le logiciel commercial.** [S16]

---

# G. Matching approfondi avec le profil de Slimane AOUANOUK

## G.0 Documents et règles d'attribution

Analyse basée sur `V1.7_PORTFOLIO_CONTEXT(5).md`, sections 1–18 (2 055 lignes). Cette base distingue `[TEAM RESULT]`, `[INDIVIDUAL CONTRIBUTION]`, `[MEASURED]`, `[SIMULATED]`, `[TARGET]`, `[PLANNED]` et `[CV-V8 TRUSTED]`. Elle décrit le projet Unitree en **§7.17** comme **projet en cours/prévu, non comme réalisation terminée**. Elle archive en **§7.16** le projet Franka, **annulé pour le semestre** ; ne pas l'utiliser comme projet actuel.

**Mise à jour personnelle postérieure au contenu de la V1.7 :** le numéro de téléphone figurant dans le portfolio est **obsolète**. En cas d'utilisation future pour une candidature, ne pas le copier ; utiliser le numéro corrigé récemment par le candidat. Ce dossier ne le réimprime pas. L'existence du manuscrit sous évaluation est confirmée, mais il ne doit jamais être qualifié d'accepté/publié.

**Positionnement réellement souhaité :** intérêt principal pour **perception, estimation/localisation, fusion de capteurs et robot learning/IA appliquée**, et moins pour une spécialisation pure en contrôle. Ne pas présenter le candidat comme « controls engineer » passionné en priorité uniquement parce que l'entreprise mentionne control theory.

## G.1 Analyse inverse A — besoins Binabik → preuves de profil

1. **Robot qui fonctionne réellement** → stage international **PIMM/CNRS@CREATE** : co-développement d'un rover avec correction trajectoire, caméra/ArUco, boucle réelle, contraintes communication/latence et campagnes de tests. **40 arrivées sur 40, zéro collision** sur scénarios confirmatoires, **médiane ~19,84–19,86 Hz**, attribution à l'équipe, pas à un unique stagiaire. [Portfolio §§4, 7.1]
2. **Perception/localisation fiables** → même stage : correction de distorsion, homographie métrique, compensation de parallaxe. Erreur moyenne de localisation **36,3→5,8 mm (~84 % de réduction)** sur grille de calibration ; méthode **mesurée**. Excellent argument auprès de l'ingénierie robotique. [Portfolio §7.1]
3. **Pipeline d'expérimentation et debugging** → **64 fichiers `test*.py`** inventoriés dans le repo de l'équipe (pas 64 tests individuels ni résultat d'exécution) ; tableaux de logs, campagnes physiques et simulation. Les tests comprennent assertions numériques, régression et comportements des contrôleurs ; **CI/CD non établi**. [Portfolio §7.1]
4. **Humanoïdes/VLA/démonstrations** → projet en cours **Humanoid Robot Learning for Assistive Manipulation — VLA (Unitree G1)**, sous Prof. Olivier Bruneau ; scope téléop, préparation de dataset, adaptation de policy OpenPI π₀/π₀.₅ visée, déploiement/évaluation projetés. **Pas de modèle fine-tuné, dataset ni succès physique prouvé**. [Portfolio §7.17]
5. **Agents, interfaces et données on-premise** → **PJT AI — Offline Industrial Data Assistant** : projet individuel Python, SQLite, pandas, Streamlit, Ollama/Mistral, schéma 8 tables/2 vues, banc de 21 cas ; petit démonstrateur, non production-grade. Bon argument pour lien entre IA locale et workflows industriels. [Portfolio §7.9]
6. **Compréhension des machines / production** → **FANUC Automated Casting Cell** : sélection robot M-20iD/25, préhenseur pneumatique, ergonomie/risques, RobotGuide et cycle **estimé/simulé**, non cellule construite. **FAB — Foundry, Machining and Metrology** : tolérances/CMM et correction de non-conformités ; compréhension concrète d'un environnement industriel. [Portfolio §§7.6–7.7]
7. **Mécanique et capteurs** → projets **Cam-Driven Capping Machine**, **Hydraulic Turbine-Generator**, **Aircraft Brake Design**, **TIPE football impact mechanics** ; utiles comme profondeur d'ingénieur systèmes, non comme démonstration d'expérience directe VLA. [Portfolio §§7.2, 7.3, 7.11, 7.12]

## G.2 Analyse inverse B — profil → besoins non évidents de Binabik

- **Ingénierie système + métrologie** : une équipe de Physical AI ne gagne pas seulement sur le modèle. La qualité des positions de préhension, les changements de montage, la répétabilité des robots et la définition de référentiels déterminent la réussite. La chaîne **calibration caméra / homographie / erreur mm** du projet CNRS peut devenir une offre de contribution à l'étalonnage et à l'évaluation reproductible des scènes Binabik. L'entreprise n'a pas explicitement sollicité ce projet : **[I]**.
- **Conception de campagnes de tests** : l'approche « essais gelés », logs, séparation simulation/physique et absence d'exagération peut aider à instrumenter des *machine-tending benchmarks* à étapes multiples. [I]
- **Atout manufacturier** : FAB + FANUC facilitent la compréhension des outillages, préhenseurs, contraintes de pièce et cycles machine ; cela peut créer de la valeur face à un logiciel conçu hors contexte production. Les résultats FANUC restent simulés, et non une expérience de mise en service industrielle. [I]
- **IA locale** : PJT AI a déjà exposé les compromis de système LLM local, données structurées, API/interface et tests. L'analogie avec souveraineté des données et agent de fabrique est intéressante, **mais il ne faut pas présenter un Text-to-SQL comme équivalent technique à un VLA**. [I]
- **Communication scientifique/visuelle** : stage abouti avec vidéos, campagne expérimentale, manuscrit under review ; utile à startup recherchant validation et démonstration à investisseurs/clients. [I]

## G.3 Matrice de correspondance priorisée

| Besoin réel ou plausible Binabik | Projet du portfolio | Preuve personnelle et limite | Valeur technique potentielle | Match |
|---|---|---|---|---|
| Intégrer/valider des algorithmes sur robot physique | **§7.1 CNRS@CREATE** | 40/40 buts, 0 collision en campagne gelée (équipe) ; ~20 Hz | Prototyper, diagnostiquer et valider sur hardware, concevoir protocole | **Très fort** |
| Stabiliser perception/localisation d'un manipulateur mobile | **§7.1 CNRS@CREATE** | OpenCV, ArUco, calibration, erreur 36,3→5,8 mm | Auditer chaines capteur→pose→action, dérive/répétabilité | **Très fort** si mission perception |
| Téléop, enregistrement et qualité de démonstrations | **§7.17 G1 VLA (en cours)** + **§7.1 logging** | Plan G1 non achevé ; expérience logs physiques démontrée | Définir dataset et validations, apprendre SDK Unitree | **Fort potentiel**, réalisation G1 non acquise |
| Débogage logiciel, tests de non-régression | **§7.1 tests et expérimentation** | 64 fichiers de tests inventoriés, équipe ; pas de CI prouvée | Outils d'évaluation, régression, reproductibilité | **Fort** |
| Adéquation humanoid/embodied AI | **§7.17 G1 VLA (en cours)** | Projet annoncé G1, OpenPI cible, téléop/data prévues | Compréhension récente du sujet ; motivation avec ancrage réel | **Fort en direction**, expertise faible à ce stade |
| Analyse de données locales et interface utilisateur | **§7.9 PJT AI** | Démo individuelle Python–SQLite–Ollama–Streamlit, 21 tests | Interface d'analyse épisodes/logs offline, métadonnées | **Moyen–fort** |
| Process de machine tending et outillage | **§7.7 FANUC** + **§7.6 FAB** | Simulation cellule + CMM/usinage ; pas de production | Comprendre fixtures, tolérances, machine cycle, acceptance tests | **Moyen–fort** |
| Planification des mouvements | **§7.1 trajectory optimization** | SciPy L-BFGS-B + contrôleur causal réactif ; MPC exploré seulement | Diagnostiquer mouvements/contraintes, analyse numérique | **Fort**, mais moins aligné intérêts actuels |
| Simulation robot / sim-to-real | **§7.1 CNRS** + **§7.5 CNAM bicopter** | Comparaison digital twin/réel ; labo MATLAB/Simulink/dSPACE | Protocoles sim-to-real, erreurs de modèle et capteurs | **Moyen** |
| Conception mécanique / dimensionnement | **§7.2, §7.3, §7.12** | CAO/calculs/proto selon projets, propriété individuelle variable | Support mécanique, fiabilité matériel, montages de validation | **Moyen** |
| Informatique de production ROS 2 à large échelle | Cours M2, **§7.17** | Exposition/cours, pas de production ROS 2 validée | Potentiel avec montée en compétence | **Faible à moyen aujourd'hui** |
| WBC, GR00T, policy fine-tuning expérimenté | **§7.17** | Objectif uniquement ; aucune expérience validée | Formation personnelle ciblée ; future contribution possible | **Non démontré actuellement** |

## G.4 Expériences à sélectionner sur le CV

### Priorité 1 — les arguments qui comptent

**1. PIMM/CNRS@CREATE — Trajectory Optimization and Physical Robot Validation [§§4, 7.1].** Garder les preuves de *robot working in the real world* : 40 essais, localisation ArUco, boucle ~20 Hz, calibration améliorée. Pour Binabik, **mettre la perception/validation/intégration devant le contrôle optimal** ; préserver attribution d'équipe et limites expérimentales. Liens portfolio : https://slimaneaouanouk.com/paco-showcase/index.html.

**2. Humanoid Robot Learning for Assistive Manipulation — VLA / Unitree G1 [§7.17].** Proximité unique avec le sujet de mémoire de Binabik. **Présenter au présent/projet en cours** : exploration d'une chaîne téléop/données/adaptation VLA, sans prétendre avoir entraîné π₀ ou déployé sur le G1. Le projet n'a pas de page publique canonique, ne pas lui inventer de lien.

### Priorité 2 — preuves complémentaires distinctives

**3. PJT AI – Offline Industrial Data Assistant [§7.9] :** end-to-end Python/SQLite/LLM local, données industrielles, tests. À valoriser si angle agents/logging/on-premise ; ne pas décrire comme « agentic OS » ou système sûr de production. Lien : https://slimaneaouanouk.com/en/projects/pjt-ai.html.

**4. FANUC Automated Casting Cell [§7.7] :** accès au langage des machines et des contraintes industrielles, avec mention explicite simulation/estimation. Lien : https://slimaneaouanouk.com/en/projects/fanuc.html.

**5. FAB — Foundry, Machining & Metrology [§7.6] :** métrologie CMM, diagnostic erreurs géométriques, risque réel en usine. Lien : https://slimaneaouanouk.com/en/projects/fab.html.

### Priorité 3 — à utiliser seulement selon la mission

Cam-Driven Capping Machine [§7.2], Hydraulic Turbine-Generator [§7.3], Aircraft Brake Design [§7.12] : bon background mécanique/machine design, mais plus faible signal sur l'OS robotique. Le laboratoire bicopter CNAM [§7.5] peut illustrer Simulink/dSPACE sans devenir une entrée dédiée par défaut. F1 in Schools [§7.8] plutôt pour communication que pour CFD personnel, dont l'attribution est limitée. NACA CFD [§7.13] et conception réducteur [§7.14] essentiellement si orientation mécatronique/hardware.

**À éviter par défaut :** Energy-Harvesting Gym Machine [§7.15], Composite Piezoelectric Speaker [§7.10], Franka VLA annulé [§7.16], projets très éloignés ou inventaire exhaustif de compétences. Le contrôle seul ne doit pas devenir le fil rouge de la candidature.

## G.5 Contributions concrètes possibles pendant six mois

Ces pistes sont **des propositions de candidature [I]**, **pas** des sujets offerts ou approuvés par Binabik. Elles sont classées selon la proximité profil/besoin et indiquent la faisabilité indicative avec supervision.

| # | Problème et contribution proposée | Base personnelle | À apprendre / risque | Faisabilité 6 mois ; certitude |
|---|---|---|---|---|
| **1** | **ROS/Unitree demo-data quality pipeline** : timestamp, validation joints/poses/images/actions, synchronisation, détection de segments invalides, versionnement et rapport automatique | CNRS logging/test §7.1 ; G1 plan §7.17 ; PJT AI §7.9 | ROS 2 bags, MCAP, interfaces Unitree, schéma dataset LeRobot ; hardware | **Bonne** si encadré ; besoin démontré S08 |
| **2** | **Bench de perception/calibration pour préhension** : calibration extrinsèques, répétabilité, erreur pose mm et cas de dégradation ; analyse caméra→TCP | §7.1 (84 % d'erreur moyenne en moins) ; métrologie FAB §7.6 | Géométrie hand–eye, gripper frames/TF2, multicam et profondeur | **Bonne** ; besoin spécifique inféré |
| **3** | **Évaluation structurée de skills VLA** : tâches gelées, variations contrôlées d'objet/éclairage/position, métriques succès/time-to-complete/interventions, taxonomie d'échec | §7.1 40 essais + tests ; §7.17 projet | Définition policies/robot resets, data labeling, protocoles safe | **Très bonne** ; catégorie besoin confirmé, sujet inféré |
| **4** | **Outil offline de robot debugging** : couche autour de `mcp-rosbags`, ingestion événements machine + images/états/action, recherche d'anomalies et tableaux de bord | §7.9 SQLite/Python/local LLM ; §7.1 logs/trajectoires | Schema ROS 2, opérations sur gros flux ; confidentialité ; performance | **Bonne** ; piste fondée sur repo S20 |
| **5** | **Teleop recording end-to-end** : intégration Unitree, mapping commands, sauvegarde fréquence élevée, contrôles d'invariants et premières démonstrations traçables | G1 scope §7.17 ; base Python/expérimentation §7.1 | SDK téléop, retargeting, kinematics, robot safety, C++ possible | **Moyenne à bonne** ; besoin explicitement S08 |
| **6** | **Étude data efficiency** : ablation taille/qualité des démonstrations, protocole split par tâche/objet, benchmark mini-policy ou adaptation VLA existante | Optimisation/simulations §7.1 ; G1 §7.17 plan | PyTorch/LeRobot, fine-tuning, GPU, méthodologie leakage | **Moyenne** ; expertise entraînement à construire |
| **7** | **Hardware acceptance testing** : checklist calibration, capteurs, actionneurs, network, fatigue/perte de synchro, critères de validation avant client | §7.1 physique/test ; §7.6 FAB ; §7.7 FANUC | Électrique, ROS drivers, contraintes sécurité de l'OEM | **Bonne** si stage intégration ; S10 |
| **8** | **Tâches machine-tending reproductibles** : décomposer chargement/déchargement, mesurer incidents et cycle time, analyser points d'arrêt et instrumentation machine | §7.7 FANUC cycle simulé, §7.6 métrologie, §7.1 tests | Interface PLC/MES, runtime safety et process client | **Moyenne** ; S01 et S10 |
| **9** | **Adapter/modèle d'état robots hétérogènes** : tests abstractions Unitree/AGIBOT autour de frames/états et contrôles de cohérence, sans exiger de modifier l'OS propriétaire | §7.1 intégration capteurs/commandes ; §7.17 G1 cible | ROS 2, API G2, CI, sécurité, hardware dual-platform | **Moyenne** ; accès requis |
| **10** | **Robustesse de perception en mouvement** : latence caméra/inférence, filtres temporels prudents, tests sous occlusion et postures robot, dashboards de timing | §7.1 latence vision/calibration | Caméras G1, RT/TF2, vision models, timing GPU | **Bonne** pour instrumentation ; besoin inféré |

**Meilleur angle à court terme :** **#1 + #3**, éventuellement #2, avec récit « *I can help turn robotic demonstrations and physical tests into clean, reproducible evidence for robust humanoid deployment* ». Un sous-projet livrable sur 6 mois est plus réaliste que promettre de créer l'intégralité d'un foundation model.

## G.6 Lacunes à reconnaître et à combler

| État | Compétences | Comment en parler / préparation |
|---|---|---|
| **Déjà démontré** | Python scientifique, OpenCV/ArUco/calibration, SciPy optimisation, logs/essais physiques, pytest et tests numériques en équipe, système IA local Python/SQL, analyse mécanique/CMM | Donner preuves et précisions d'attribution ; montrer notebooks/code si autorisés |
| **En cours / cible** | ROS 2 et SLAM dans M2, notions state estimation/machine learning/PyTorch, Unitree G1 téléop et VLA OpenPI envisagés | Présenter comme **coursework or ongoing semester project**, jamais comme production déployée |
| **Non suffisamment démontré** | Manipulation avancée, retargeting, Unitree SDK opérationnel, WBC, NVIDIA GR00T, VLA fine-tuning, ROS 2 sur hardware, Linux distribué, C++ industriel, design d'une architecture multi-agent de production | Faire un mini-projet pratique, lire SDK, savoir expliquer ce que l'on ne maîtrise pas |
| **À ne pas revendiquer** | MPC physiquement implémenté, 64 tests « passés », quatre robots simultanément validés par les 40 essais, code personnel exclusif des résultats d'équipe, papier accepté | Conserver preuves, préciser scope, rester cohérent en entretien |

### Préparation à fort retour sur investissement (10–15 jours)

1. **ROS 2 pratique** : `nodes`, `topics`, `services`, `actions`, `tf2`, `rosbag2`, `rqt`, QoS, timestamps, `colcon`, debug Linux.
2. **Unitree G1 / LeRobot** : lire README du fork cité et SDK original, identifier représentation action/observation, épisodes, fréquence, limites sécurité.
3. **Teleop / imitation learning** : architecture collecte→nettoyage→dataset→train/validate→rollout→metrics ; comprendre distribution shift, temporisation et reset reproductible.
4. **VLA concepts** : distinguer policy, backbone multimodal, action chunking, embeddings, conditioning gripper, fine-tuning et evaluation hors distribution ; lire GVLA et un exemple OpenPI sans prétendre l'avoir implémenté.
5. **Projet vitrine compact** : analyser un rosbag public, extraire stats fréquence/latence, séquences perdues et tableau d'erreurs ; exporter un rapport avec tests unitaires. Cela prouve une compétence immédiatement utile et demande moins de ressources qu'un entraînement G1.

---

# H. Stratégie de candidature spontanée

## H.1 Choix du canal et du destinataire

**Approche recommandée :**

- **To :** `pascal@binabik.ai` — CTO directement responsable stratégie learning/data/engineering. [S02, S06]
- **CC :** `careers@binabik.ai` — canal officiel ; utile pour que le message soit traçable sans donner l'impression de contourner totalement la procédure. [S07]
- **Objet possible (proposition, non email rédigé) :** `6-month Robotics Internship — Humanoid AI & Real-Robot Validation | February 2027` ou, plus ouvert, `6-month Robotics Engineering Internship — February 2027`.
- **Pièces :** CV 1 page ciblé, lien portfolio et page/vidéos du stage de Singapour ; relevés de notes sur demande ou en pièces si l'annonce le requiert ; pas d'envoi massif de documents non demandés.
- **Date et forme :** janvier/février 2027 pour six mois à temps plein ; stage de fin d'études avec convention, possibilité d'échange court avec un ingénieur.

## H.2 Les trois angles de candidature à distinguer

### Angle A — Humanoid Teleoperation & Demonstration Data (**premier choix si sujet disponible**)

**Logique :** annoncer un projet G1 dans le M2, puis démontrer la capacité antérieure à produire des logs, calibrer, tester et intégrer un vrai robot. Revenir au problème Binabik : données haute fréquence de bonne qualité pour entraîner et valider des skills. [S08, S12]

**Trois preuves :** G1 en cours (§7.17, correctement qualifié), CNRS 40 essais / 20 Hz / vision (§7.1), PJT AI data pipeline (§7.9). **Attention :** présenter G1 comme expérience en préparation et les résultats Singapour comme projet d'équipe.

### Angle B — Perception, Localization & Physical Reliability (**premier choix si préférence personnelle dominante**)

**Logique :** prendre un problème transversal souvent sous-estimé dans un humanoïde industriel : une action VLA échoue si l'état/pose de l'objet, du robot ou de la caméra n'est pas fiable. Apporter la preuve d'une calibration de vision dont l'erreur moyenne a baissé de ~84 %, puis proposer protocole de mesure des cas limites et liaison aux échecs d'exécution. [portfolio §7.1 ; S10]

**Atout :** aligné avec l'intérêt principal du candidat perception/estimation. **Réserve :** Binabik n'a pas publié de poste explicitement nommé Perception/Localization ; c'est donc une **proposition raisonnée**, non une demande de l'entreprise établie.

### Angle C — Robotics Engineering / Forward Deployment & Test Automation

**Logique :** « algorithm → integrated robot → measurable reliable operation ». Mettre en avant la campagne physique, tests Python, fabrication/métrologie, culture qualité et interface industrielle, avec volonté d'apprendre ROS 2 production. [S10 ; portfolio §§7.1, 7.6–7.7]

**Réserve :** ne pas faire croire à une expérience de commissioning chez client ni à une disponibilité illimitée en déplacements, ni garantir une autorisation de travail sans vérification.

## H.3 Trois arguments différenciants à privilégier

1. **Real-world evidence** : le candidat sait à quel point un algorithme peut être fragilisé par calibration, communication et timing ; il a participé à un robot capable de répéter des objectifs avec 40 essais confirmatoires. Il peut contribuer aux **tests sur hardware**, indispensables à l'OS Binabik.
2. **Forte intersection, pas simple mot-clé** : le projet actuel **Unitree G1 → téléop → démonstrations → préparation dataset → policy adaptation prévue** est structurellement proche de la fiche Master Thesis et de la formation Academy. L'alignement est rare, mais le résultat n'est pas encore acquis.
3. **Background mécatronique industriel** : au-delà de l'IA, il comprend contraintes physiques, outillage, métrologie, capteurs et interfaces ; argument différenciant pour des tâches de machine tending face à des profils purement software.

## H.4 Objections probables et réponses factuelles

| Objection | Réponse défendable |
|---|---|
| « Have you already fine-tuned a VLA on a humanoid? » | « Not yet. My Unitree G1 semester project is ongoing and targets teleoperation, data preparation and policy adaptation. My proven experience is real-robot integration and physical validation. » |
| « How strong are you in ROS 2? » | Séparer cours actuel, tutoriels/projet personnel et réalisations vérifiées ; ne pas appeler « production experience » un simple cours |
| « Are you a strong Python software engineer? » | Montrer modules/tests du rover, optimisation SciPy, PJT AI, décrire contribution exacte ; reconnaître besoin de monter en compétence en codebase ROS 2 et C++ |
| « You worked on mobile navigation, not manipulation » | Expliquer le transfert **perception → estimation d'état → boucle de décision → essais et logs**, puis les nouvelles exigences cinématiques/gripper à apprendre |
| « We need a full-time engineer, not an intern » | Proposer périmètre autonome et livrable en six mois (qualité des datasets, benchmark, instrumentation) avec critères d'acceptation ; demander si une **Master Thesis / internship equivalent** est possible |
| « Why a startup and not a lab? » | Recherche de responsabilité produit, apprentissage rapide sur robot réel et translation recherche→industrialisation ; éviter formulation fondée seulement sur prestige/salaire |

## H.5 Ce qu'il faut mentionner dans le mail (sans écrire le mail complet)

Choisir **un seul hook produit** parmi :

- Le contraste « *collecting demonstrations* » vs **apprentissage aussi à partir des signaux de la machine**, expliqué par Pascal sur son site ; question possible : comment instrumenter réussite/échec d'un geste de machine tending ? [S06]
- Leur **formation VLA sur Unitree G1**, incluant téléop, préparation de données et déploiement/inférence ; à relier directement à l'actuel projet M2 G1, sans prétendre connaître leur infrastructure. [S12]
- Leur objectif de rendre l'OS **adaptable aux machines existantes** ; l'expérience CMM/usinage et la précision calibrée peuvent contribuer à une mise en exploitation mesurable. [S01]

**Formulation d'intention** : « I would love to contribute to your humanoid robotics team, especially on teleoperation/data quality, perception or real-robot validation » ; pas de promesse de livraison chiffrée ni d'hyperbole « groundbreaking state of the art ».

**Sujet de la fiche Master Thesis :** si elle est mentionnée, écrire « I came across your previous Master Thesis topic on teleoperation and data generation; I realize it may no longer be listed as open, but ... » ; **pas** « I am applying to your currently open role ».

---

# I. Évaluation stratégique et recommandation

## I.1 Score qualitatif

| Dimension | Évaluation qualitative | Justification |
|---|---|---|
| Adéquation projet G1/VLA | **Très forte sur le sujet, compétences en développement** | Même type de robot, téléop et données ; projet M2 non terminé |
| Pertinence perception/localisation | **Forte techniquement, mais rôle non annoncé** | Expérience CNRS excellente ; autonomie perceptive interne mal documentée |
| Validation sur robot réel | **Très forte** | Hardware, erreurs physiques, calibration et essais reproductibles |
| Opportunités d'apprentissage | **Très élevées** | G1/G2, binabik agentic stack, ZHAW, code/produit |
| Capacité d'apport immédiat | **Bonne sur instrumentation/évaluation**, plus faible sur VLA SOTA | Écart en ROS 2 production, imitation learning avancé |
| Visibilité hardware | **Forte** | Academy Unitree, AGIBOT annoncé, démonstrations publiques |
| Maturité et stabilité | **Incertitude élevée** | Entité 2026, taille réduite, financement/revenus inconnus |
| Stage 2027 confirmé | **Non** | Offres absentes du site officiel |
| Conversion en CDI | **Possible mais non vérifiée** | Mention dans fiche Master Thesis ; aucune garantie |
| Alignement objectifs carrière suisse/Physical AI | **Très fort** | Winterthur proche Zurich, humanoïdes, robot learning, produit |
| Potentiel de rémunération | **Impossible à juger sans proposition** | Aucune grille publique exploitable |

## I.2 Risque stratégique spécifique à la recherche de stage

Une petite startup peut décider vite, demander une réponse rapidement et proposer des responsabilités attrayantes. La valeur de la candidature ne signifie pas qu'il faut **accepter trop tôt n'importe quelles conditions**. Avant signature, comparer sujet réellement attribué, encadrement, perspective d'embauche, salaire/conditions et autres opportunités suisses. Cela vaut particulièrement si le poste glisse vers simple collecte répétitive de données ou support logistique, sans ingénierie de perception, software, experimentation ou robot learning.

## I.3 Décision

**PRIORITÉ HAUTE — envoyer une candidature spontanée bien ciblée dès maintenant**, sans attendre que la fiche Master Thesis réapparaisse officiellement. La combinaison CNRS hardware validation + Unitree G1 (ongoing) + intérêt perception est suffisamment spécifique pour justifier un email au CTO. Mais **ne pas concentrer tous les efforts sur Binabik** : l'existence du stage, sa rémunération et sa conversion ne sont pas documentées. Continuer les candidatures Big Tech/robotique suisse en parallèle.

**Plan pratique :** CV ciblé → email Pascal (+ careers éventuel) → attendre retour → une relance après 7–10 jours → discuter périmètre, calendrier, accès G1/G2, mentorat, contrat et trajectoire CDI avant de trancher.

---

# Résumé opérationnel autonome pour l'IA qui préparera la candidature

## Entreprise en ~175 mots

Binabik AI est une très jeune startup suisse de Physical AI, juridiquement constituée à Winterthur en janvier 2026, issue de l'écosystème de recherche ZHAW. Son objectif est de rendre des robots humanoïdes et manipulateurs mobiles utiles à des opérations industrielles existantes : machine tending, manutention, tri et intralogistique. Plutôt que de fabriquer prioritairement son propre humanoïde, elle développe un agentic operating system ROS 2 native associant compétences sensorimotrices, connaissance des processus machine et orchestration de workflows. Le CTO Pascal Sager met en avant l'exploitation de démonstrations humaines **et** de signaux provenant des machines industrielles pour accélérer l'apprentissage. La société présente des robots à roues, utilise publiquement l'écosystème Unitree G1 et a annoncé un partenariat AGIBOT G2. Elle propose également une Binabik Academy avec formation VLA/G1, téléopération, préparation de données et simulation. L'équipe officielle comprend Jorge Peña Queralta (CEO), Pascal Sager (CTO), Giovanni Toffetti (CPO), Harry Edelmann (CFO, graphie officielle), Lei Fu (Robotics Lead Engineer). Plusieurs annonces de recrutement passées portaient sur la recherche robotique, le déploiement et les données de téléopération. **Le site officiel ne présente aucun poste actuellement ouvert**, mais autorise explicitement les candidatures spontanées.

## Instructions de personnalisation à respecter

| Élément | Instruction impérative |
|---|---|
| Objectif | **Six-month full-time robotics engineering internship, February 2027** (ou janvier/février selon choix final), conversion CDI possible si adéquation, sans l'exiger |
| Angle principal | **Humanoid data / perception / real-robot integration & validation** ; ne pas enfermer la candidature dans le contrôle |
| Expérience #1 | **PIMM / CNRS@CREATE — Trajectory Optimization and Physical Robot Validation**, portfolio **§§4 et 7.1** : co-développement, OpenCV/ArUco, 40 essais confirmatoires avec 0 collision, ~20 Hz et 84 % de réduction d'erreur moyenne de localisation |
| Expérience #2 | **Humanoid Robot Learning for Assistive Manipulation — VLA**, portfolio **§7.17** : **ONGOING** Unitree G1, téléop/données/policy OpenPI visées ; **aucun fine-tuning ni déploiement encore démontré** |
| Expérience #3 | **PJT AI – Offline Industrial Data Assistant**, **§7.9** : pipeline individuel Python/pandas/SQLite/Streamlit/Ollama, local LLM, schéma 8 tables/2 vues et tests ; pas un VLA ni une solution production |
| Expérience #4 | **FANUC Automated Casting Cell**, **§7.7** : cellule **simulée** RobotGuide, logique industrial machine tending et concept préhenseur, pas déploiement réel |
| Expérience #5 | **FAB — Foundry, Machining and Metrology**, **§7.6** : CMM, tolérances, non-conformités et diagnostic processus |
| Bonus | `pytest` équipe : **64 fichiers de test**, pas 64 cas réussis ; SciPy L-BFGS-B, optimisations et logs rover (portfolio §7.1) |
| Portfolio principal | https://slimaneaouanouk.com/ ; projet Singapour : https://slimaneaouanouk.com/paco-showcase/index.html |
| Contact #1 | **Pascal Sager**, CTO : `pascal@binabik.ai`, https://www.linkedin.com/in/sagerpascal/ |
| Contact #2 | **Lei Fu**, Robotics Lead Engineer : `lei@binabik.ai`, https://www.linkedin.com/in/leifu6968/ |
| Contact recrutement | **`careers@binabik.ai`**, canal officiel ; éventuellement CC Pascal |
| Autre contact | **Jorge Peña Queralta**, CEO : `jorge@binabik.ai`, https://www.linkedin.com/in/jopequ/ |
| Hook spécifique | Architecture CTO en trois niveaux **ou** Binabik Academy Unitree G1 **ou** ancienne annonce « Master Thesis – Teleoperation & Data Generation » — toujours contextualiser |
| Poste ouvert ? | **NON confirmé**. Site officiel dit aucun ; Built In conserve la fiche Master Thesis, statuts divergents |
| Éviter | VLA déjà déployé ; ROS 2 hardware maîtrisé ; MPC implémenté ; auteur solo de résultats d'équipe ; papier accepté ; robots simultanés ; extrapolations de sécurité/finances |
| Positionnement final | « Mechanical Engineering student at Arts et Métiers, pursuing a Research Master’s in Advanced Systems & Robotics at Sorbonne Université, with real-robot research experience and an ongoing Unitree G1 VLA project. » |
| Obstacle majeur | Niveau coding ROS 2/C++/robot learning avancé moins démontré que mécatronique et validation ; fournir preuve pratique et disponibilité |

**Ne pas reprendre le téléphone obsolète du portfolio** sans mise à jour. Ne pas réutiliser le projet **Franka VLA annulé (§7.16)**. Si le dossier est exploité dans un second outil, lui transmettre **également** `V1.7_PORTFOLIO_CONTEXT` pour vérification des chiffres, de l'attribution et des règles de lien des projets.

---

# Bibliographie et sources — consultation le 25/10/2026

La consultation date du **25 octobre 2026** pour les sources suivantes. Les dates de publication sont notées si identifiables ; « sans date » signifie que la page ne fournit pas une date suffisamment fiable. Les contenus publics peuvent évoluer après la consultation.

## Sources officielles de l'entreprise

- **[S01]** Binabik AI, *The Intelligence Engine for Humanoid Robotics / Solution*, sans date. https://binabik.ai/ — revendications produits, machine tending, data efficiency, API, edge, marché.
- **[S02]** Binabik AI, *Founding Team / Team*, sans date. https://binabik.ai/team — dirigeants, fonctions, emails professionnels, canal de candidature.
- **[S05]** Binabik AI, *Contact*, sans date. https://binabik.ai/contact — adresse Winterthur, Finlande, email général.
- **[S06]** Pascal Sager, *Personal website — Physical AI / Binabik CTO*, sans date, consulté le 25/10. https://sagerpascal.github.io/ — vision technologique, architecture en trois niveaux, data machine et carrière.
- **[S07]** Binabik AI, *Careers / Open Positions*, consulté le 25/10 : page indiquant « Currently no positions open ». https://binabik.ai/open-positions — contact `careers@binabik.ai`.
- **[S12]** Binabik Academy, *VLA with Humanoid Robots*, programme daté du 22–24 septembre 2026. https://academy.binabik.ai/courses/vla-humanoid-robots — Unitree G1, Isaac Sim/Lab, téléop, données, VLA, programme ; participation effective non vérifiée.
- **[S13]** Binabik Academy, *Homepage et Lecturers*, sans date. https://academy.binabik.ai/ ; https://academy.binabik.ai/team — G1/G2, formation et responsables.

## Entreprise, équipe, réseaux et registres

- **[S03]** Zürcher Handelskammer / CONNECT, *KI-Robotik-Start-up Binabik siedelt sich in Winterthur an*, **14 avril 2026**. https://www.zhk.ch/de/wirtschaft-und-politik/news/ki-robotik-start-up-binabik-siedelt-sich-in-winterthur-an.html — origine ZHAW, site, croissance annoncée.
- **[S04]** Binabik AI, *LinkedIn company page*, publications 2026. https://www.linkedin.com/company/binabik/ — taille 2–10, implantations, campagne d'embauche, AGIBOT, G1.
- **[S11]** Moneyhouse, *Binabik AG in Winterthur*, registre suisse repris ; inscription **16 janvier 2026**, mise à jour **8 juillet 2026**. https://www.moneyhouse.ch/en/company/binabik-ag-6021906811 — société AG/GmbH, UID, historique et dirigeants ; vérifier Zefix si usage juridique décisif.
- **[S14]** Binabik / Jorge Peña Queralta / Harry Edelman, annonces LinkedIn du partenariat AGIBOT autour d'ICRA 2026. https://www.linkedin.com/posts/jopequ_humanoids-industrialautomation-logistics-activity-7467821623010787328-__Tb ; https://www.linkedin.com/posts/harryedelman_icra2026-agibot-g2-activity-7467829153573007361-dI_3 — partenariat **annoncé**, objectifs de déploiement.
- **[S15]** ZHAW, *ZHAW CAI Brings Swiss Physical AI to VivaTech in Paris*, **18 juin 2026**. https://www.zhaw.ch/en/about-us/news/news-releases/news-detail/event-news/zhaw-cai-brings-swiss-physical-ai-to-vivatech-in-paris — salon, robots et relations institutionnelles.
- **[S23]** Lauri Suomela, profil LinkedIn professionnel, publications *PlaceNav* / *Benchmarking Visual Localization*. https://fi.linkedin.com/in/laurisuomela — recherche robot navigation/perception.
- **[S24]** Dealroom, *Binabik company page*, sans date, consulté le 25/10/2026. https://app.dealroom.co/companies/binabik — tranche d'effectifs, date de lancement antérieure, « no known external funding ».

## Offres d'emploi et campagne de recrutement

- **[S08]** Built In, *Master Thesis – Teleoperation & Data Generation for Humanoids*, publication/republication dont la datation exacte varie selon crawl. https://builtin.com/job/master-thesis-teleoperation-data-generation-humanoids/9715115 — description complète et conditions ; **ouverture non confirmée** sur page carrière officielle.
- **[S09]** LinkedIn Jobs, *Robotics Research Engineer — Binabik AI*, affichée **fermée aux candidatures** au 25/10/2026. https://ch.linkedin.com/jobs/view/robotics-research-engineer-at-binabik-ai-4441727762 — exigences ROS 2/Python/Linux, manipulation, recherche.
- **[S10]** LinkedIn Jobs, *Forward Deployed Robotics Engineer — Binabik AI*, affichée **fermée aux candidatures** au 25/10/2026. https://ch.linkedin.com/jobs/view/forward-deployed-robotics-engineer-at-binabik-ai-4418735086 — mécanique/hardware sur site, code Python/ROS, permis et déplacements ; mention historique pre-seed.

## Publications et laboratoire

- **[S16]** ZHAW, *Embodied Mobile Agents* et profil de **Dr Jorge Peña Queralta**. https://www.zhaw.ch/en/engineering/institutes-centres/centre-for-artificial-intelligence-cai/embodied-mobile-agents ; https://www.zhaw.ch/en/about-us/person/penq — travaux, équipes et publications universitaires.
- **[S17]** Zhang et al., *Gripper-aware Vision Language Action Models*, **25 août 2026** (arXiv), page projet indiquant ECCV 2026. https://arxiv.org/abs/2608.24603 ; https://airvlab.github.io/G-VLA/ — MiGA et GVLA, membres équipe co-auteurs.
- **[S18]** ZHAW, *Lei Fu — academic profile and publications*, consulté le 25/10. https://www.zhaw.ch/en/about-us/person/fule — publications ROSBag MCP, ROS 2 et edge robotics.
- **[S19]** Toffetti et al., *Cloud Native Robotic Applications with GPU Sharing on Kubernetes*, **2022**. https://arxiv.org/abs/2210.03936 ; profil Giovanni https://ch.linkedin.com/in/giovannitoffetti/ — recherches cloud robotique.
- **[S20]** Binabik, *mcp-rosbags — open-source repository*, consulté 25/10. https://github.com/binabik-ai/mcp-rosbags — outils de lecture ROS bags, contenus publics.
- **[S21]** Binabik, *GitHub organization*, consulté 25/10. https://github.com/binabik-ai — dépôts, forks Unitree/Isaac et outils MCP.
- **[S22]** ZHAW, *Towards Embodied Agentic AI* (2025), DOI : https://doi.org/10.48550/arXiv.2508.05294 — revue scientifique, voir également [S16].

## Source personnelle séparée (non diffusée)

- **[P01]** `V1.7_PORTFOLIO_CONTEXT(5).md` — 19 octobre 2026, source principale sur le candidat, sections 1 à 18, **2 055 lignes lues**. Remplacer toute donnée de contact obsolète lors de la création du CV/email. Les projets cités renvoient à leurs **sections exactes** dans le document ; le dossier présent n'est pas censé le remplacer.

---

# Points non vérifiés, inconnus ou nécessitant confirmation directe

1. **Postes/stages actuels :** la fiche Master Thesis encore visible est-elle vraiment réouverte ou simplement republiée automatiquement ? Et pour quelle date de début ?
2. **Capacité d'accueil :** stage 6 mois possible via convention ENSAM/Sorbonne ; rémunération, tuteur, logement, jours sur site, régime hybride.
3. **Produit en production :** nombre de clients payants, robots actifs, cadence, success rate, intervention humaine, disponibilité et validation sécurité.
4. **AGIBOT :** les « first deployments Q3 2026 » annoncés ont-ils effectivement démarré ? Quelles tâches ont été validées ?
5. **Financement :** levée pre-seed Q3 évoquée dans annonce historique, montant, investisseurs et closing **non confirmés**.
6. **Stack privé :** architectures de policies, choix exacts VLA/VLM, PyTorch/CUDA/C++/ROS 2, modèles de perception, SLAM/estimation, gestion des erreurs et data governance.
7. **Propriété intellectuelle :** usage commercial des publications GVLA, MiGA ou de travaux ZHAW ; aucune intégration produit démontrée.
8. **Parcours dirigeants :** études et carrières des cinq cofondateurs partiellement documentées ; éviter biographies reconstruites au-delà des sources.
9. **Effectif actuel :** fourchette 2–10 et ambitions passées connues, personnel actif exact au 25 octobre inconnu.
10. **Emploi futur :** possibilité réelle de CDI, salaire suisse, equity et trajectoire de carrière à discuter, sans probabilité inventée.
11. **Préparation candidat :** preuves ROS 2 sur robot et C++ à consolider ; version finale CV et statut concret du projet G1 à mettre à jour au moment de l'envoi.
12. **Données administratives personnelles :** numéro de téléphone corrigé, autorisation de travail suisse et contraintes de convention à vérifier avant candidature définitive.

**Conclusion :** Binabik est l'une des cibles suisses les plus étroitement reliées au croisement **humanoïdes/G1 + robot learning + expérimentation physique**. La candidature doit être **ambitieuse sur la proposition de valeur, prudente sur les réalisations acquises, et claire sur une mission de six mois**, avec priorité au CTO Pascal Sager puis à l'équipe robotique.
