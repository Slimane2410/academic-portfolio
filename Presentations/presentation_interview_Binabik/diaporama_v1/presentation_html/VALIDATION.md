# Vérification de la V1 — 28 octobre 2026

## Contenu

- 20 slides principales, identifiants `s01` à `s20`, avec un total de durées indicatives de 435 secondes : 7 min 15.
- 5 annexes, identifiants `a01` à `a05`. Les vues internes d’A3/A4 n’ajoutent pas de slides au parcours principal.
- Les cours SAR précèdent le projet VLA aux slides 15–16. Les notes reprennent les détails de cours et les limites factuelles.
- Photos et figures existantes, schémas HTML/SVG modifiables, polices locales. Aucun média synthétique présenté comme une expérience réelle.

## Vérifications effectuées

- Contrôles dans Chrome avec une instance de test isolée et aperçu ouvert dans le Chrome de l’utilisateur.
- Revue visuelle des 20 slides et des 5 annexes ; correction des débordements de la vidéo d’évitement, de la slide de correspondance avec Binabik et de l’annexe de calibration.
- 75 contrôles de mise en page : les 25 pages aux formats 1920 × 1080, 1440 × 900 et 1280 × 720. Aucun élément contrôlé hors du cadre, aucun débordement du corps des slides.
- Aucun échec HTTP, aucune erreur JavaScript ni requête vers un service externe pendant ce parcours local.
- Flèches, espace, vue d’ensemble, fermeture des menus, menu des annexes, onglets au clavier, retour à la dernière principale et maintien sur la conclusion vérifiés.
- Entrée et sortie du plein écran vérifiées dans Chrome.
- Lecture complète des trois vidéos : FAB 4,15 s ; extrait FANUC 10 s ; évitement physique multi-agent 11,27 s. Arrêt, relecture et pause au départ de la slide vérifiés.
- Extrait FANUC préparé à partir des secondes 6–16 de l’original, sans audio, H.264, avec métadonnées en tête pour la lecture locale. Les deux posters sont des images extraites des vidéos originales.
- Refus simulé de l’autoplay : bouton de lecture visible et navigation disponible. Fichier vidéo indisponible simulé : poster et message de remplacement, navigation disponible.
- Ouverture directe d’`index.html` en `file://` vérifiée dans Chrome : scripts, deux polices locales et lecture vidéo fonctionnels.
- Consultation à 390 × 844 contrôlée sur les pages représentatives : ouverture, fabrication, calibration, cours SAR, VLA et annexe de conception. Aucun débordement horizontal observé ; les compositions s’empilent et défilent sur téléphone.
- Liens locaux de la documentation et durée du fichier d’extrait FANUC vérifiés.
- Slide 1 mise à jour : photo du rover dans un cadre exactement 16:9 sans bande blanche interne ; visuel produit officiel du Unitree G1 intégré au fond clair à côté. Deux images chargées et composition vérifiée à 1920 × 1080, 1440 × 900, 1280 × 720 et 390 × 844. Crédit et origine du G1 dans `assets/SOURCES.md` et les notes.

- Mise à jour de la slide 2 : ajout du moule de fonderie et de la prise d’origine à droite de la vidéo, avec la photo CNC conservée.
- Cadres des photos et vidéos ajustés à leurs proportions sur l’ensemble des slides et des annexes. Revue visuelle des 25 pages et des neuf vues internes d’A3/A4 ; aucune marge de conteneur ajoutée autour des médias. Les figures scientifiques restent entières.
- Après ce changement : 75 contrôles de mise en page réussis, contrôle du ratio des cadres et de leur alignement avec les médias visibles, navigation, lecture des trois vidéos, ouverture directe locale et consultation mobile représentative vérifiées. Aucune erreur JavaScript ou requête externe.

- Slide 4 remplacée par une transition de 10 secondes vers la robotique : plan F1 (PDF rendu en PNG), simulation, usinage dans la mousse et voiture finale, dans cet ordre. Budget total actualisé : 435 secondes (7 min 15). Le frein d’avion reste uniquement en annexe. Les quatre médias chargent en ouverture directe locale ; ratios, absence de débordement et passage S04 → S05 vérifiés à 1920 × 1080, 1440 × 900, 1280 × 720 et 390 × 844. Revue visuelle de la nouvelle composition.

- Slide 7 : deux figures originales de la section méthode du PACO Showcase côte à côte, intitulées “The nominal phase” et “The causal correction phase”. Texte latéral et badge “Offline planning” retirés. Revue visuelle et contrôles de chargement, ratios, débordement et navigation réussis aux trois formats ordinateur et à 390 × 844, sans erreur JavaScript.

- Slide 8 : remplacement des captures précédentes par la figure f4 du papier fournie par Slimane, rendue intégralement depuis le PDF conservé localement. Titre et légendes adaptés aux identifiants et coordonnées métriques. Chargement local, ratios, absence de débordement et navigation vérifiés à 1920 × 1080, 1440 × 900, 1280 × 720 et 390 × 844 ; revue visuelle, aucune erreur JavaScript.

- Slide 11 : vidéo remplacée par `anticollision_multi_agent_v01.mp4`, entière (11,27 s), avec poster authentique extrait de cette vidéo et légende “One controlled rover · Moving robots”. Revue visuelle et vérification en ouverture locale : lecture muette complète, relecture et pause en quittant la slide réussies, sans erreur JavaScript. Le budget oral de 25 secondes est conservé.

- Slide 12 : mention visuelle “Team result” retirée, figure f15 fournie par Slimane ajoutée entière à droite des métriques compactes. Distinction visible entre les deux campagnes résumées par 40/40 et les vingt essais avec un agent mobile représentés dans la figure. Revue visuelle et contrôles des ratios, chargement local, débordements et navigation aux trois formats ordinateur et à 390 × 844 réussis, sans erreur JavaScript.

- Slide 14 : vue droite du banc retirée par cadrage CSS ; vue gauche agrandie, photo des quatre embouts ajoutée en haut à droite et chronophotographie conservée dessous. Médias sources inchangés et vues complètes en annexe conservées. Revue visuelle et contrôles de chargement, proportions des cadres, absence de débordement et navigation réussis aux trois formats ordinateur et à 390 × 844, sans erreur JavaScript.

- Slide 16 : image du G1 jointe par Slimane intégrée entière en haut à droite ; contexte du projet à gauche, schéma VLA dessous et statut en bas. Illustration distincte des résultats expérimentaux du projet. Revue visuelle et contrôles de chargement, ratios, débordement et navigation réussis aux trois formats ordinateur et à 390 × 844, sans erreur JavaScript.

- Slide 20 : photo du rover remplacée par l’image de l’humanoïde Binabik jointe par Slimane. Image conservée entière, proportions et cadre vérifiés. Revue visuelle et contrôles de chargement, débordement, maintien sur la conclusion et absence d’erreurs JavaScript réussis aux trois formats ordinateur et à 390 × 844.

- Annexe A3 : seul l’onglet “Digital twin” et son graphique sont retirés ; titre actualisé en “Repeatability and limits”. Deux onglets de répétabilité conservés, navigation au clavier et retour à la présentation vérifiés, sans erreur JavaScript. Le diaporama conserve 20 slides principales et 5 annexes ; A3/A4 comptent désormais huit vues internes au total.

## À vérifier lors de la répétition

La cible de 7 min 15 est la somme des budgets du storyboard, pas une mesure du discours réel de Slimane. Une répétition à voix haute reste nécessaire, avec les vidéos et le partage d’écran utilisé pour l’entretien. L’absence de collisions concerne les campagnes documentées, pas une garantie générale de sécurité.

La validation fonctionnelle détaillée a été faite dans Chrome. Safari et les autres navigateurs n’ont pas fait l’objet du même contrôle. Les médias partagés restent liés à leur emplacement dans le portfolio : le dossier HTML ne constitue pas à lui seul un paquet de transfert autonome.

Les captures et scripts de test sont conservés dans le répertoire temporaire `/tmp/binabik-presentation-qa/`. Le site livré n’a aucune dépendance à cet outillage de vérification.

## Mise à jour du 30 octobre 2026 — slide 17

- Anciennes quatre étapes et bandeau Object handover remplacés par huit nœuds HTML : deux pour la voie robot, trois pour l’extension MoCap, trois pour la chaîne commune. Sept connexions SVG ; pas d’image du schéma.
- Mention explicite des six caméras haute fréquence, de MuJoCo, Isaac Sim et Isaac Lab. Notes et sources S09/S10 actualisées : acquisition MoCap envisagée et besoin d’associer mouvements, observations, instructions et actions. Budget conservé à 25 secondes, total 435 secondes.
- Revue visuelle sur ordinateur et consultation mobile ; aucun texte hors des nœuds, aucun débordement horizontal aux formats 1920 × 1080, 1440 × 900, 1280 × 720 et 390 × 844. Les deux voies et la chaîne commune s’empilent sur téléphone avec défilement.
- Chargement direct local, huit nœuds, textes requis, absence de l’ancien bandeau et navigation S16 → S17 → S18 vérifiés sans erreur JavaScript.
- Le PDF de secours n’a pas été régénéré : sa slide 17 correspond toujours à la version précédente.

## Ajout de l’annexe A6 — HumanoidMimicGen

- 20 slides principales et 6 annexes (26 sections HTML) ; budget principal inchangé à 435 secondes. A6 est accessible volontairement dans le menu et n’est pas ajoutée au parcours après S20.
- Affirmations vérifiées dans le PDF fourni : pages 1–2, section 6.1 / tableau 1 et section 6.4. Portée simulée du ratio 1 → 1 000 précisée ; références NVIDIA et UT Austin, 2026. Visuels extraits des pages 1 et 2 sans modification de leurs annotations.
- Revue visuelle de la composition et contrôle des médias, ratios, débordements et textes aux formats 1920 × 1080, 1440 × 900, 1280 × 720 et 390 × 844. Aucun débordement horizontal ni erreur JavaScript.
- Menu à six annexes, compteurs A5/A6 et A6/A6, navigation A5 ↔ A6, bouton suivant désactivé en A6, retour à la dernière principale et maintien de S20 vérifiés.
- PDF de secours existant non régénéré : il reste à la version précédente, sans A6.

## Ajout de l’annexe A7 — Research interests

- 20 slides principales et 7 annexes, soit 27 sections HTML ; budget principal conservé à 435 secondes. A7 comporte six onglets : Overview, OpenVLA, HumanoidMimicGen, FACT, Ψ₀, LeVERB. Le PDF de secours n’est pas régénéré.
- Rendu des annexes étendu aux compositions HTML via une propriété `html` optionnelle sur chaque vue ; les vues classiques `media/alt/caption` d’A3 et A4 conservent leur fonctionnement. Compteur calculé depuis le nombre d’annexes.
- Figures extraites des quatre nouveaux PDF et figure HumanoidMimicGen réutilisée d’A6. Revue visuelle des six vues d’A7. Sources, périmètres et repère oral de 35–45 secondes documentés ; aucune comparaison chiffrée entre benchmarks.
- 56 contrôles de vues : A7 (6), A3 (2) et A4 (6), chacun à 1920 × 1080, 1440 × 900, 1280 × 720 et 390 × 844. Chargement des images, ratios et absence de débordement horizontal ou de contenu hors des sections vérifiés.
- Menu à sept annexes, ordre des onglets, Home/End, flèches et boucle de sélection au clavier vérifiés. Lien interne vers A6, compteurs A6/A7 et A7/A7, désactivation de Suivant en A7, retour à S17 et maintien sur S20 vérifiés, sans erreur JavaScript.

## Réorganisation des annexes

- Ordre demandé appliqué et numérotation continue : ancienne A5 → A1 (VLA), A6 → A2 (HumanoidMimicGen), A7 → A3 (Research interests), A1 → A4 (Calibration), A2 → A5 (Timing), A3 → A6 (Repeatability), A4 → A7 (TIPE / design).
- Tableau des annexes, identifiants HTML, titres, styles ciblés, références internes, notes, brief et sources actualisés. Le lien depuis HumanoidMimicGen mène à présent à A2.
- Ordre des sept entrées du menu, correspondance identifiants/titres/compteurs et arrêt sur la dernière annexe vérifiés. Les six vues de recherche, les deux vues de répétabilité et les six vues TIPE/design ont été contrôlées aux quatre formats habituels ; clavier, lien interne et retour à la présentation fonctionnels, sans erreur JavaScript.
- PDF de secours conservé à sa version précédente.

## Remplacement du PDF de secours par la version actuelle

- `PRESENTATION_BINABIK_V1_SECOURS.pdf` remplacé par un export de 38 pages : les 20 slides principales et toutes les vues des sept annexes dans leur nouvel ordre.
- Slide 17 à deux voies incluse ; A1 VLA, A2 HumanoidMimicGen et les six vues de recherche d’A3 apparaissent en premier dans les annexes. Les vidéos sont représentées par leurs posters authentiques.
- Les 38 pages ont été rendues et revues visuellement. Contrôle de pages non vides, des repères de numérotation, de l’ordre et des textes de la nouvelle slide 17 et des annexes de recherche effectué. Le PDF livré correspond octet pour octet au fichier vérifié.
- Cette mise à jour remplace les constats historiques ci-dessus indiquant que le PDF n’avait pas été régénéré.
