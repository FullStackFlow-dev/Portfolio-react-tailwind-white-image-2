// ═══════════════════════════════════════════════════════════════
// COMPOSANTS SIMPLIFIÉS
// Ces composants sont des versions basiques à compléter
// ═══════════════════════════════════════════════════════════════

/**
 * ABOUT COMPONENT
 * Section "À propos" avec texte et informations
 */
export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// À propos</div>
      <h2 className="section-title">Qui suis-je ?</h2>
      <div className="divider" />
      <p className="text-text-muted">Contenu à ajouter...</p>
    </section>
  )
}

/**
 * SKILLS COMPONENT  
 * Grille de compétences avec cartes
 */
export function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Compétences</div>
      <h2 className="section-title">Ce que je maîtrise</h2>
      <div className="divider" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card">
          <div className="text-2xl mb-3">🌐</div>
          <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-3">
            Développement Web
          </h4>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'TypeScript'].map(skill => (
              <span key={skill} className="font-mono text-xs text-text-muted bg-white/5 border border-border px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * CERTIFICATIONS COMPONENT
 * Liste des certificats obtenus
 */
export function Certifications() {
  return (
    <section id="certs" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Certificats</div>
      <h2 className="section-title">Certifications</h2>
      <div className="divider" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="card flex gap-5">
          <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center text-xl flex-shrink-0">
            🤖
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-1">AI Fluency</h4>
            <p className="font-mono text-xs text-accent mb-2">Anthropic</p>
            <p className="text-xs text-text-muted">Fondements de l'IA...</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * EDUCATION COMPONENT
 * Parcours académique avec timeline
 */
export function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Formation</div>
      <h2 className="section-title">Parcours académique</h2>
      <div className="divider" />
      <p className="text-text-muted">Timeline à ajouter...</p>
    </section>
  )
}

/**
 * PROJECTS COMPONENT
 * Projets avec projet vedette
 */
export function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Projets</div>
      <h2 className="section-title">Ce que je construis</h2>
      <div className="divider" />
      
      {/* Projet vedette */}
      <div className="card border-accent mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent" />
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded mb-4">
          ⭐ Projet vedette
        </div>
        <h3 className="font-display text-2xl mb-3">ArtéNova Shop</h3>
        <p className="text-text-muted text-sm mb-4">
          Plateforme e-commerce full stack...
        </p>
        <div className="flex gap-3">
          <a href="#" className="text-xs text-accent hover:underline">↗ Demo Live</a>
          <a href="#" className="text-xs text-accent hover:underline">↗ GitHub</a>
        </div>
      </div>
    </section>
  )
}

/**
 * CONTACT COMPONENT
 * Formulaire de contact
 */
export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Formulaire soumis (à connecter à un service)')
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-8 py-24">
      <div className="section-label">// Contact</div>
      <h2 className="section-title">Discutons</h2>
      <div className="divider" />
      
      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Nom complet"
          required
          className="w-full bg-bg-card border border-border rounded-md px-4 py-3 text-sm text-text-primary outline-none focus:border-accent transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full bg-bg-card border border-border rounded-md px-4 py-3 text-sm text-text-primary outline-none focus:border-accent transition-colors"
        />
        <textarea
          placeholder="Message..."
          required
          rows={5}
          className="w-full bg-bg-card border border-border rounded-md px-4 py-3 text-sm text-text-primary outline-none focus:border-accent transition-colors resize-y"
        />
        <button type="submit" className="btn-primary">
          Envoyer →
        </button>
      </form>
    </section>
  )
}

/**
 * FOOTER COMPONENT
 * Pied de page avec liens sociaux
 */
export function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center">
      <div className="mb-4 font-display text-lg">Retrouvez-moi sur les réseaux</div>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://linkedin.com/in/merph-dev" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-text-muted hover:text-accent transition-colors">
          LinkedIn
        </a>
        <a href="https://github.com/FullStackFlow-dev" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-text-muted hover:text-accent transition-colors">
          GitHub
        </a>
        <a href="mailto:merphy97@gmail.com" className="font-mono text-xs text-text-muted hover:text-accent transition-colors">
          Email
        </a>
      </div>
      <p className="font-mono text-xs text-text-muted">
        © 2025 Merphy Mademba. Tous droits réservés.
      </p>
    </footer>
  )
}

// Exports par défaut pour chaque composant
export default {
  About,
  Skills,
  Certifications,
  Education,
  Projects,
  Contact,
  Footer
}
