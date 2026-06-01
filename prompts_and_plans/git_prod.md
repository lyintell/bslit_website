# Déploiement sur GitHub Pages via GitHub Actions

## Ce qui a été configuré

- **`next.config.js`** : export statique activé (`output: 'export'`, images non-optimisées)
- **`.github/workflows/deploy.yml`** : pipeline CI/CD qui build et déploie automatiquement à chaque `push` sur `main`

---

## Étapes pour activer GitHub Pages

### 1. Activer GitHub Pages dans les Settings du repo

1. Aller sur le repo GitHub → **Settings** → **Pages** (menu gauche)
2. Dans **Source**, sélectionner **GitHub Actions**
3. Sauvegarder

> Ne pas choisir "Deploy from a branch" — choisir impérativement **GitHub Actions**.

---

### 2. Pousser le code sur `main`

Chaque `git push` sur `main` déclenche automatiquement le workflow :

```bash
git add .
git commit -m "your message"
git push origin main
```

---

### 3. Suivre le déploiement

1. Aller sur le repo GitHub → onglet **Actions**
2. Cliquer sur le workflow **Deploy to GitHub Pages** en cours
3. Deux jobs s'enchaînent : **build** puis **deploy**
4. Une fois le job **deploy** terminé (✓ vert), le site est en ligne

---

### 4. Accéder au site en production

L'URL suit ce format :

```
https://<ton-username>.github.io/<nom-du-repo>/
```

Exemple : `https://oumar.github.io/bslit_website/`

L'URL exacte est aussi affichée directement dans le job **deploy** → étape **Deploy to GitHub Pages** → lien cliquable sous `url:`.

---

## Déclenchement manuel (optionnel)

Sans faire de push, tu peux lancer le workflow manuellement :

1. GitHub → **Actions** → **Deploy to GitHub Pages**
2. Bouton **Run workflow** (haut droite) → **Run workflow**

---

## Fichiers clés

| Fichier | Rôle |
|---------|------|
| `.github/workflows/deploy.yml` | Pipeline CI/CD complet |
| `next.config.js` | Active l'export statique (`out/`) |
| `out/` | Dossier généré par le build (ignoré par git) |
