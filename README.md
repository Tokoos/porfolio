# Portfolio — Jacques Houndjetode

Site statique (HTML/CSS/JS, aucune compilation). Ouvrez `index.html` dans un navigateur, ou déployez le dossier tel quel (GitHub Pages, Netlify, Vercel, OVH…).

Le contenu provient de l'ancien portfolio GitHub `Tokoos/Projet-PCB_Design-porfolio` : projets, textes, images, certificats et coordonnées.

## Modifier le contenu — dossier `data/`

| Fichier | Contenu |
|---|---|
| `data/profile.js` | Titre, accroche, biographie, mots-clés, langues, bandeau orange, CV |
| `data/contact.js` | Email, LinkedIn, GitHub, téléphone, service du formulaire |
| `data/projects.js` | Projets, filtres, images, documents, **liens Altium 365** (`altiumViewerUrl`) |
| `data/experience.js` | Expériences (reliées aux pages projet) |
| `data/education.js` | Formations et certifications |
| `data/skills.js` | Les six domaines de la section Expertise |
| `data/research.js` | Sujet de recherche et publications |

### Informations à compléter
- Description et rôle du projet **Smart Sensor** (`data/projects.js`), signalés par un badge **À compléter**.
- Lien LinkedIn (`data/contact.js`, masqué tant qu'il est vide).
- Documents des certificats Udemy et du diplôme HSE : déposez les PDF dans `assets/certificats/` puis renseignez `url` (et `image` pour une vignette) dans `data/education.js`.
- Lien DOI de la publication IEEE (`data/research.js`, champ `url`).

Une fois tout complété, passez `PORTFOLIO.site.showTodoBadges` à `false` dans `data/profile.js`.

## Liens Altium 365
Dans `data/projects.js`, collez le lien **public / lecture seule** du Web Viewer dans `altiumViewerUrl`. Un bouton orange « Voir sur Altium 365 ↗ » apparaît alors sur la carte et sur la page du projet, et s'ouvre dans un nouvel onglet. Ne mettez jamais d'identifiant ni de lien privé.

## Images
Elles sont dans `assets/img/projets/`, au format WebP. Pour en ajouter : déposez le fichier, puis renseignez `cover` (image principale) et `gallery` dans `data/projects.js`. Un projet sans image affiche une fiche technique typographique : aucune image n'est inventée.

## CV
Déposez votre PDF ici : `assets/cv/CV-Jacques-Houndjetode.pdf`. Tous les boutons CV pointent vers ce fichier.

## Formulaire de contact
Sans configuration, le formulaire ouvre la messagerie du visiteur avec le message pré-rempli. Pour un envoi direct, collez l'URL d'un service comme Formspree dans `form.endpoint` (`data/contact.js`). Protection anti-spam incluse : champ « pot de miel » invisible et délai minimal avant envoi.

## Avant la mise en ligne
- Remplacez `https://www.votre-domaine.com` dans `index.html`, `projet.html`, `robots.txt`, `sitemap.xml` et `data/profile.js`.
- Ajoutez votre LinkedIn dans `sameAs` (bloc JSON-LD de `index.html`).
- Le dossier `.impeccable/` contient la configuration d'un outil d'analyse du design. Il n'est pas utile au site et peut être exclu du déploiement.

## Structure du code
- `assets/css/styles.css` : design (couleurs dans `:root`)
- `assets/js/components.js` : ProjectCard, ExperienceTimeline, EducationTimeline, SkillBadge, CertificationCard, ContactForm, AltiumViewerButton, ProjectGallery
- `assets/js/main.js` : page d'accueil, navigation, animations, piste PCB orange
- `assets/js/project.js` : page détail (`projet.html?id=…`)
