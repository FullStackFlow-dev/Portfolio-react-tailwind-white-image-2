# 📧 Comment recevoir les messages du formulaire de contact

Avant, mon formulaire ne fait rien quand on clique sur "Envoyer". Voici **4 solutions** que j'ai apporter, afin de recevoir les messages dans ma boîte email.

---

## 🎯 Solution 1 : Formspree (Le plus simple — RECOMMANDÉ)

### Pourquoi Formspree ?
✅ Gratuit jusqu'à 50 messages/mois
✅ Pas besoin de backend
✅ Configuration en 2 minutes
✅ Anti-spam intégré

### Installation

#### 1️⃣ Crée un compte

Va sur [formspree.io](https://formspree.io) et inscris-toi avec ton email.

#### 2️⃣ Crée un nouveau formulaire

- Clique sur **"New Form"**
- Nom : `Portfolio Contact`
- Email : `merphy97@gmail.com`
- Copie mon **Form ID** (ressemble à `xpzvabcd`)

#### 3️⃣ Modifie ton HTML

**Avant :**
```html
<form class="contact-form" onsubmit="event.preventDefault()">
```

**Après :**
```html
<form 
  action="https://formspree.io/f/TON_FORM_ID" 
  method="POST"
  class="contact-form"
>
  <input type="text" name="name" placeholder="Nom complet" required />
  <input type="email" name="email" placeholder="Email" required />
  <input type="text" name="subject" placeholder="Sujet" required />
  <textarea name="message" placeholder="Message..." required></textarea>
  <button type="submit">Envoyer →</button>
</form>
```

**Remplace `TON_FORM_ID` par ton ID Formspree.**

#### 4️⃣ Test

Remplis le formulaire et envoie. Tu reçois un email avec le message ! 🎉

---

### Version React (si tu utilises React)

```jsx
function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/TON_FORM_ID', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('Message envoyé ! Je te réponds bientôt.')
        form.reset()
      } else {
        setStatus('Erreur. Réessaye ou écris-moi directement.')
      }
    } catch (error) {
      setStatus('Erreur réseau. Vérifie ta connexion.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nom" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Envoyer</button>
      {status && <p className="text-sm mt-4">{status}</p>}
    </form>
  )
}
```

---

## 🎯 Solution 2 : EmailJS

### Pourquoi EmailJS ?
✅ Gratuit jusqu'à 200 emails/mois
✅ Pas de backend nécessaire
✅ Templates d'emails personnalisables
✅ Fonctionne avec Gmail, Outlook, etc.

### Installation

#### 1️⃣ Crée un compte

Va sur [emailjs.com](https://emailjs.com) et inscris-toi.

#### 2️⃣ Configure ton service email

- Dans le dashboard, va dans **"Email Services"**
- Clique sur **"Add New Service"**
- Choisis **Gmail** (ou ton provider)
- Connecte ton compte Gmail
- Copie ton **Service ID**

#### 3️⃣ Crée un template

- Va dans **"Email Templates"**
- Clique sur **"Create New Template"**
- Template par défaut :
```
De: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}
```
- Copie ton **Template ID**

#### 4️⃣ Installe EmailJS (React)

```bash
npm install @emailjs/browser
```

#### 5️⃣ Code React

```jsx
import emailjs from '@emailjs/browser'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'TON_SERVICE_ID',        // De EmailJS dashboard
      'TON_TEMPLATE_ID',       // De EmailJS dashboard
      e.target,
      'TON_PUBLIC_KEY'         // Dans Account > API Keys
    )
    .then((result) => {
      alert('Message envoyé !')
    }, (error) => {
      alert('Erreur : ' + error.text)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="from_name" placeholder="Nom" required />
      <input type="email" name="from_email" placeholder="Email" required />
      <input type="text" name="subject" placeholder="Sujet" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Envoyer</button>
    </form>
  )
}
```

---

## 🎯 Solution 3 : Netlify Forms (si tu déploies sur Netlify)

### Pourquoi Netlify Forms ?
✅ 100% gratuit (100 soumissions/mois)
✅ Zéro configuration si tu es sur Netlify
✅ Anti-spam intégré
✅ Dashboard pour voir les messages

### Installation

#### 1️⃣ Ajoute `data-netlify="true"` à ton formulaire

```html
<form 
  data-netlify="true" 
  name="contact"
  method="POST"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" placeholder="Nom" required />
  <input type="email" name="email" placeholder="Email" required />
  <textarea name="message" placeholder="Message" required />
  <button type="submit">Envoyer</button>
</form>
```

#### 2️⃣ Déploie sur Netlify

```bash
# Via Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

#### 3️⃣ Configure les notifications

- Va dans **Site settings** > **Forms** > **Form notifications**
- Ajoute ton email
- Chaque message te sera envoyé par email

✅ C'est tout ! Netlify gère tout automatiquement.

---

## 🎯 Solution 4 : Backend personnalisé (Node.js + Nodemailer)

### Pourquoi un backend ?
✅ Contrôle total
✅ Pas de limite de messages
✅ Peut enregistrer dans une base de données
❌ Plus complexe à mettre en place

### Installation rapide

#### 1️⃣ Crée un backend Node.js

```bash
mkdir portfolio-backend
cd portfolio-backend
npm init -y
npm install express nodemailer cors dotenv
```

#### 2️⃣ Crée `server.js`

```javascript
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// Configure Nodemailer avec Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,      // Ton Gmail
    pass: process.env.EMAIL_PASS  // Mot de passe d'application Gmail
  }
})

// Route pour recevoir les messages
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Portfolio: ${subject}`,
      html: `
        <h3>Nouveau message de ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
```

#### 3️⃣ Crée `.env`

```
EMAIL=merphy97@gmail.com
EMAIL_PASS=ton_mot_de_passe_application
```

**Note :** Pour Gmail, il faut générer un "mot de passe d'application" dans les paramètres de sécurité Google.

#### 4️⃣ Lance le serveur

```bash
node server.js
```

#### 5️⃣ Code frontend (React)

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value
  }

  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      alert('Message envoyé !')
    }
  } catch (error) {
    alert('Erreur réseau')
  }
}
```

---

## 🎯 Quelle solution choisir ?

| Solution | Difficulté | Gratuit | Recommandé pour |
|---|---|---|---|
| **Formspree** | ⭐ Facile | ✅ Oui | Débutants, prototypes |
| **EmailJS** | ⭐⭐ Moyen | ✅ Oui | Projets React/Vue |
| **Netlify Forms** | ⭐ Facile | ✅ Oui | Si tu es sur Netlify |
| **Backend Node.js** | ⭐⭐⭐ Difficile | ✅ Oui | Projets avancés |

---

## 🚀 Ma recommandation pour toi

**Pour l'instant → Formspree**

Pourquoi ?
- Configuration en 2 minutes
- Fonctionne immédiatement
- Pas besoin de backend
- Gratuit pour tes besoins

**Plus tard → Backend Node.js**

Quand tu auras plus d'expérience et que tu voudras :
- Enregistrer les messages dans une base de données
- Envoyer des emails de confirmation automatiques
- Avoir un contrôle total

---

**Besoin d'aide pour installer ?** Dis-moi quelle solution tu choisis et je te guide pas à pas ! 🚀
