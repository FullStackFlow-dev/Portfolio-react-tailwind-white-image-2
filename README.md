#  Portfolio React + Tailwind CSS

Portfolio de **Merph-dev** — Version React avec Tailwind CSS

---

## 📁 Structure du projet

```
portfolio-react/
├── src/
│   ├── components/           ← Composants React réutilisables
│   │   ├── Navigation.jsx    ← Menu avec hamburger mobile
│   │   ├── Hero.jsx          ← Section d'accueil
│   │   └── index.js          ← Autres composants (About, Skills, etc.)
│   ├── App.jsx               ← Composant principal
│   ├── main.jsx              ← Point d'entrée React
│   └── index.css             ← Styles Tailwind + custom
├── index.html                ← HTML de base
├── package.json              ← Dépendances et scripts
├── vite.config.js            ← Configuration Vite (build tool)
├── tailwind.config.js        ← Configuration Tailwind
├── postcss.config.js         ← Configuration PostCSS
└── .gitignore                ← Fichiers à ignorer dans Git
```

---

## 🛠️ Technologies utilisées

| Tech | Pourquoi | Ce que ça fait |
|---|---|---|
| **React** | Framework UI moderne | Crée des composants réutilisables et gère l'état |
| **Tailwind CSS** | Framework CSS utilitaire | Style avec des classes (`bg-blue-500`, `flex`, etc.) |
| **Vite** | Build tool ultra-rapide | Compile et optimise le code pour production |
| **PostCSS** | Processeur CSS | Transforme Tailwind en CSS standard |

---

## 📦 Installation (sur ton ordinateur)

### 1️⃣ Prérequis

Installe **Node.js** (version 18 ou plus) :
- Windows/macOS : [nodejs.org](https://nodejs.org/)
- Linux : `sudo apt install nodejs npm`

Vérifie l'installation :
```bash
node --version   # Doit afficher v18.x ou plus
npm --version    # Doit afficher 9.x ou plus
```

---

### 2️⃣ Installation du projet

```bash
# 1. Clone ou télécharge le projet
cd portfolio-react

# 2. Installe les dépendances
npm install

# ⏳ Ça va prendre 1-2 minutes
# npm va télécharger React, Tailwind, Vite, etc.
```

---

### 3️⃣ Lancer en mode développement

```bash
npm run dev
```

**Résultat :**
```
  VITE v5.0.8  ready in 342 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Ouvre **http://localhost:5173** dans ton navigateur.

**Le Hot Reload est activé** : quand tu modifies un fichier, la page se rafraîchit automatiquement ! 🔥

---

### 4️⃣ Compiler pour production

```bash
npm run build
```

**Résultat :**
- Crée un dossier `dist/` avec les fichiers optimisés
- Minifie le code (réduit la taille)
- Optimise les images et fonts
- Prêt à déployer

---

##  Déployer sur Vercel

### Option 1 : Via GitHub (recommandé)

1. **Pousse ton code sur GitHub** :
```bash
git init
git add .
git commit -m "Initial commit - React portfolio"
git remote add origin https://github.com/TON_NOM/portfolio-react.git
git push -u origin main
```

2. **Sur Vercel** :
   - Va sur [vercel.com](https://vercel.com)
   - Clique sur **"New Project"**
   - Sélectionne ton repo GitHub `portfolio-react`
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - Clique sur **Deploy**

✅ Vercel détecte automatiquement Vite et configure tout.

---

### Option 2 : Via Vercel CLI

```bash
# Installe Vercel CLI
npm install -g vercel

# Déploie
vercel

# Suis les instructions
```

---

## 🎨 Comment ça marche ? React + Tailwind expliqué

### **Avant (HTML pur) :**

```html
<div class="card">
  <h3>Titre</h3>
  <p>Description</p>
</div>

<style>
.card {
  background: #111418;
  border: 1px solid #1e2a3a;
  border-radius: 10px;
  padding: 1.6rem;
}
</style>
```

**Problème :** Si tu as 10 cartes, tu répètes 10 fois le HTML.

---

### **Avec React :**

```jsx
// Composant Card réutilisable
function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Utilisation
<Card title="Titre 1" description="Description 1" />
<Card title="Titre 2" description="Description 2" />
```

**Avantage :** Vous écris le code une fois, et vous le réutilises partout.

---

### **Avec Tailwind :**

```jsx
function Card({ title, description }) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-text-muted text-sm">{description}</p>
    </div>
  )
}
```

**Avantage :**
- Pas besoin d'écrire du CSS personnalisé
- Classes réutilisables (`bg-bg-card`, `text-lg`, etc.)
- Le CSS non utilisé est automatiquement supprimé (bundle plus léger)

---

## 🔧 Personnalisation

### Modifier les couleurs selon faut besoin 

Ouvre `tailwind.config.js` :

```js
colors: {
  'accent': '#00e5a0',  // Change la couleur principale
  'bg-dark': '#0a0c0f', // Change le fond
}
```

Sauvegarde → Tailwind se met à jour automatiquement.

---

### Ajouter un nouveau composant

1. Crée `src/components/NouveauComposant.jsx` :

```jsx
function NouveauComposant() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      <h2 className="text-4xl font-bold">Mon nouveau composant</h2>
    </section>
  )
}

export default NouveauComposant
```

2. Importe-le dans `App.jsx` :

```jsx
import NouveauComposant from './components/NouveauComposant'

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <NouveauComposant />  {/* ← Ajoute ici */}
    </div>
  )
}
```

---

## 🐛 Problèmes courants

### `npm install` échoue

**Solution :**
```bash
# Supprime le dossier node_modules et package-lock.json
rm -rf node_modules package-lock.json

# Réinstalle
npm install
```

---

### Port 5173 déjà utilisé

**Solution :**
```bash
# Lance sur un autre port
npm run dev -- --port 3000
```

---

### Tailwind ne fonctionne pas

**Vérifie que :**
1. `tailwind.config.js` pointe vers les bons fichiers :
   ```js
   content: ["./index.html", "./src/**/*.{js,jsx}"]
   ```
2. `index.css` contient les directives Tailwind :
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## 📚 Ressources pour apprendre

| Resource | Lien |
|---|---|
| **React docs** | [react.dev](https://react.dev) |
| **Tailwind docs** | [tailwindcss.com/docs](https://tailwindcss.com/docs) |
| **Vite docs** | [vitejs.dev](https://vitejs.dev) |

---

##  Prochaines étapes

- [ ] Compléter tous les composants (About, Skills, etc.)
- [ ] Ajouter les vraies données des projets
- [ ] Connecter le formulaire de contact à un service
- [ ] Ajouter des animations supplémentaires
- [ ] Optimiser les images
- [ ] Ajouter Google Analytics
