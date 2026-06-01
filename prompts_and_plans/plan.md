# Plan de réplication — bslit.com en Next.js

## 1. Analyse du site existant

### Pages
| Route | Fichier original | Contenu principal |
|-------|-----------------|-------------------|
| `/` | home.html | Hero ship image, tagline, 2 colonnes (Global Trade + Consulting) |
| `/about-us` | about-us.html | Texte "Bandama St-Laurent, who are we?" + historique |
| `/consulting` | consulting.html | 2 sections de texte consulting |
| `/contact-us` | contact-us.html | Hero city image, adresse + formulaire de contact |

### Design observé (via screenshots)
- **Header** : Logo BSLIT (haut gauche) + titre centré "Bandama St-Laurent International Trading" en serif
- **Navbar** : Barre horizontale bleu marine foncé, texte blanc, onglet actif en surbrillance (bleu plus clair)
- **Typographie** : Serif (style Georgia) pour les titres, sans-serif ou serif fin pour le corps
- **Couleurs** :
  - Bleu marine navigation : `#2d4a7a` (approximatif)
  - Bleu clair onglet actif : `#4a6fa5`
  - Overlay bannière hero : bleu semi-transparent
  - Texte body : gris foncé / noir
  - Liens footer : bleu souligné
- **Footer** : Liens séparés par ` | `, texte "Copyright © Bandama St-Laurent International Trading. All rights reserved."
- **Layout** : centré, largeur max ~750px

### Images disponibles (dossier `/current_client_site`)
| Fichier | Utilisation |
|---------|------------|
| `ship_img.jpg` | Hero image — page Home |
| `city_img.jpg` | Hero image — page Contact Us |
| `globe_img.jpg` | Section "Global Trade" — page Home |
| `people_img.jpg` | Section "Consulting" — page Home |

---

## 2. Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : JavaScript uniquement (pas de TypeScript)
- **Style** : CSS Modules (un fichier `.module.css` par composant)
- **Base de données** : Aucune — site 100% statique
- **Formulaire contact** : HTML pur avec `mailto:` ou formulaire statique sans backend (pas de traitement serveur)
- **Images** : Composant `next/image` pour l'optimisation automatique

---

## 3. Structure du projet

```
bslit-website/
├── public/
│   └── images/
│       ├── logo.png          ← logo BSLIT (à extraire du site ou recréer)
│       ├── ship.jpg          ← copié depuis current_client_site/ship_img.jpg
│       ├── city.jpg          ← copié depuis current_client_site/city_img.jpg
│       ├── globe.jpg         ← copié depuis current_client_site/globe_img.jpg
│       └── people.jpg        ← copié depuis current_client_site/people_img.jpg
│
├── src/
│   ├── app/
│   │   ├── layout.js         ← Root layout : Header + Navbar + Footer autour du contenu
│   │   ├── globals.css       ← Reset CSS + variables globales (couleurs, fonts)
│   │   ├── page.js           ← Page Home ( / )
│   │   ├── about-us/
│   │   │   └── page.js       ← Page About Us
│   │   ├── consulting/
│   │   │   └── page.js       ← Page Consulting
│   │   └── contact-us/
│   │       └── page.js       ← Page Contact Us
│   │
│   └── components/
│       ├── Header/
│       │   ├── Header.js          ← Logo + titre de l'entreprise
│       │   └── Header.module.css
│       ├── Navbar/
│       │   ├── Navbar.js          ← Barre de navigation avec liens actifs
│       │   └── Navbar.module.css
│       ├── Footer/
│       │   ├── Footer.js          ← Liens de navigation + copyright
│       │   └── Footer.module.css
│       ├── HeroBanner/
│       │   ├── HeroBanner.js      ← Image pleine largeur + overlay texte
│       │   └── HeroBanner.module.css
│       └── ContactForm/
│           ├── ContactForm.js     ← Formulaire statique (Name, Email, Subject, Message)
│           └── ContactForm.module.css
│
├── next.config.js
└── package.json
```

---

## 4. Détail de chaque page

### 4.1 Layout racine (`src/app/layout.js`)
- Importe et rend `<Header>`, `<Navbar>`, puis `{children}`, puis `<Footer>`
- Applique `globals.css`
- Définit les métadonnées globales (`title`, `description`)

### 4.2 Page Home (`/`)
1. `<HeroBanner>` avec `ship.jpg` + overlay banner : **"The Golden Gate to West Africa"**
2. Section 2 colonnes séparées par une ligne verticale :
   - **Colonne gauche** : titre "Global Trade" + image globe + texte
     > *We source soft commodities from West Africa. We import to West Africa: Road & Building materials, machinery, Telecom, healthcare supply.*
   - **Colonne droite** : titre "Consulting" + image people + texte
     > *Are you looking to expand your business in West Africa? Our North American and West African trained team will help you bridge the information and cultural gap.*

### 4.3 Page About Us (`/about-us`)
- Titre `<h2>` : **"Bandama St-Laurent, who are we?"**
- Paragraphe 1 : historique de la création (famille Ivoirienne / cousins Amérique du Nord)
- Paragraphe 2 : signification des noms
  - **Bandama** : rivière traversant la Côte d'Ivoire
  - **St-Laurent** : fleuve mythique du Canada
- Paragraphe 3 : évolution de la compagnie + liste :
  - North American local businesses to expand in West Africa and vice versa.
  - West African local producers to find business partners worldwide.

### 4.4 Page Consulting (`/consulting`)
**Section 1 — Consulting for West-African Local Companies:**
- Texte sur l'industrialisation et l'intégration économique en Afrique de l'Ouest
- Points :
  - Brokering partnerships between West African and International companies
  - Advising on financing options

**Section 2 — Consulting for International SMEs Looking to enter the West African Market:**
- Texte sur les défis des PME internationales entrant sur les marchés d'Afrique de l'Ouest

### 4.5 Page Contact Us (`/contact-us`)
1. `<HeroBanner>` avec `city.jpg` + overlay banner : **"The Gate to West Africa"**
2. Layout 2 colonnes :
   - **Colonne gauche** : informations entreprise
     ```
     Bandama St-Laurent International Trading
     1250 René-Lévesque Boulevard West, suite 2200
     Montreal, QC, Canada
     ```
   - **Colonne droite** : formulaire
     - "Contact us: For any inquiry send us an email"
     - Champs : Name *, Email *, checkbox "receive email updates", Subject *, Message *
     - Bouton Submit

---

## 5. Composants partagés

### `<Header>`
- Flex row : logo `next/image` (gauche) + `<h1>` titre centré
- Séparateur fin sous le header (ligne horizontale `#c0b9a8` approx.)

### `<Navbar>`
- `<nav>` avec `<ul>` de `<li>` contenant des `<Link>` Next.js
- Utilise `usePathname()` pour détecter la page active et appliquer la classe CSS active
- Background bleu marine, texte blanc, hover + active plus clair

### `<Footer>`
- Liens `<Link>` séparés par ` | `
- Texte copyright dessous

### `<HeroBanner>`
- Props : `src` (image), `alt`, `tagline` (texte overlay)
- Image full-width via `next/image` avec `layout="responsive"` ou `fill`
- Bande colorée (bleu semi-transparent) avec le texte de tagline en dessous ou en overlay

### `<ContactForm>`
- Formulaire HTML statique
- Gestion de l'état local avec `useState` (React)
- Action : `mailto:` ou simple affichage de confirmation (pas de backend)

---

## 6. CSS global & variables

```css
/* src/app/globals.css */
:root {
  --color-navy: #2d4a7a;
  --color-navy-active: #4a6fa5;
  --color-text: #333333;
  --color-link: #3a5a9e;
  --color-border: #c0b9a8;
  --font-serif: Georgia, 'Times New Roman', serif;
  --max-width: 750px;
}
```

---

## 7. Ordre d'exécution

| Étape | Tâche |
|-------|-------|
| 1 | Initialiser le projet Next.js (`npx create-next-app`) avec options JS, App Router, CSS Modules |
| 2 | Copier les images dans `public/images/` |
| 3 | Configurer `globals.css` (reset + variables) |
| 4 | Créer les composants : `Header`, `Navbar`, `Footer` |
| 5 | Créer `HeroBanner` |
| 6 | Créer le `layout.js` racine |
| 7 | Coder la page Home |
| 8 | Coder la page About Us |
| 9 | Coder la page Consulting |
| 10 | Créer `ContactForm` |
| 11 | Coder la page Contact Us |
| 12 | Vérification visuelle page par page (comparaison screenshots) |
| 13 | Ajustements CSS finaux (espacements, typographie, couleurs) |
| 14 | Test responsive (le site original est ~750px de large, vérifier sur mobile) |

---

## 8. Notes & contraintes

- **Logo** : Le logo BSLIT circulaire devra être téléchargé manuellement depuis le site ou recréé. URL source : `https://nebula.wsimg.com/5528a374cada53539845d9137d16c0a9?...`
- **Formulaire** : Sans backend, le bouton Submit peut ouvrir un client mail (`mailto:`) ou simplement afficher un message de confirmation. À confirmer avec le client.
- **Favicon** : Utiliser le logo BSLIT comme favicon.
- **SEO** : Ajouter des métadonnées `title` et `description` dans chaque `page.js` via l'API `metadata` de Next.js App Router.
- **Responsive** : Le site original n'est pas très responsive. Priorité au desktop, adaptation mobile basique.
- **`next.config.js`** : Pas de domaine externe d'images nécessaire (toutes les images sont locales).
