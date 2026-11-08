# Présentation Binabik — V1 HTML

Ouvrir **[index.html](index.html)** dans Chrome ou Safari. Tout fonctionne localement : médias, polices, navigation et schémas. Une connexion Internet n’est pas nécessaire pour le diaporama.

La présentation contient **20 slides principales**, avec un budget oral indicatif de **7 min 15**, et **7 annexes**. Les durées sont des repères de répétition ; les slides avancent uniquement sur commande. Les notes sont dans [NOTES_ORALES.md](NOTES_ORALES.md).

## Commandes

| Commande | Action |
|---|---|
| `→` ou espace | Slide suivante |
| `←` | Slide précédente |
| `F` | Plein écran |
| `O` | Vue d’ensemble des 20 slides |
| `A` | Menu des annexes |
| `Échap` | Fermer un menu ; quitter le plein écran selon le navigateur |
| Bouton dans une vidéo | Pause, lecture ou relecture |
| Bouton « Back to presentation » | Revenir à la dernière slide principale |

L’annexe A2 présente HumanoidMimicGen comme lecture exploratoire pour une discussion sur les données synthétiques, hors du parcours chronométré.

L’annexe A3 regroupe une synthèse et cinq vues de papiers : OpenVLA, HumanoidMimicGen, FACT, Ψ₀ et LeVERB. Son onglet HumanoidMimicGen propose un lien vers A2.

Les annexes A3, A6 et A7 ont plusieurs onglets. Une fois un onglet sélectionné au clavier, les flèches permettent d’en changer. La slide 20 reste à l’écran en fin de présentation ; les annexes s’ouvrent volontairement.

Les trois vidéos se lancent muettes, une fois par arrivée sur la slide. L’extrait FANUC correspond aux secondes 6–16 de l’original ; ces dix secondes sont préparées dans un fichier local pour éviter de dépendre du positionnement dans la vidéo pendant l’entretien. Une image d’attente et un bouton de lecture permettent de continuer si le navigateur refuse le lancement automatique.

## Partage d’écran

Ouvrir les notes avant l’entretien, choisir le plein écran et partager la fenêtre du diaporama. Les notes ne sont jamais ajoutées à la surface projetée. Vérifier auparavant le son désactivé, les vidéos et la lisibilité dans le partage d’écran réellement utilisé.

La transition SAR → VLA est aux slides 15–16. Le G1 est présenté comme disponible ; le projet VLA reste en démarrage, avec lectures, apprentissage et préparation des expériences.

## Lancement par serveur local si nécessaire

Depuis la racine du portfolio :

```sh
python3 -m http.server 4193 --bind 127.0.0.1
```

Puis ouvrir :

```text
http://127.0.0.1:4193/Presentations/presentation_interview_Binabik/diaporama_v1/presentation_html/
```

Arrêter le serveur avec `Ctrl+C` après utilisation. Le port peut être changé s’il est occupé.

La slide 2 associe la vidéo de fonderie à trois photos : moule, prise d’origine et usinage CNC. Les cadres des photos et vidéos suivent leurs proportions, y compris dans les annexes ; l’espace libre reste autour des médias.

## Modifier la V1

- `slides.js` : les 20 slides, les annexes, leurs notes, sources et durées ; navigation et vidéos dans la seconde partie du fichier.
- `styles.css` : thème, compositions, adaptation à l’écran et au téléphone.
- `index.html` : cadre de la présentation et commandes.
- `assets/` : polices locales, deux images authentiques extraites des vidéos pour leurs posters, extrait FANUC de dix secondes et visuel officiel Unitree G1 pour la slide 1. Provenance du G1 dans [assets/SOURCES.md](assets/SOURCES.md) ; licences des polices dans `assets/fonts/`.

Les photos, vidéos et figures originales restent dans les dossiers existants du portfolio, accessibles par des chemins relatifs remontant de quatre niveaux. Conserver ce sous-dossier à son emplacement actuel ; pour transférer la présentation seule sur un autre ordinateur, il faudra aussi emporter ces médias.

Référence de contenu : [brief Markdown](../BRIEF_DIAPORAMA_HTML_BINABIK_V1.md). Le brief est tenu à jour avec les choix de composition de cette V1. Les médias originaux du portfolio sont conservés.
