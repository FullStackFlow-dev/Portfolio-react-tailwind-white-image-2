/**
 * HERO COMPONENT
 * Section d'accueil avec nom, description et CTA
 * 
 * Ce composant démontre :
 * - Comment utiliser Tailwind CSS dans React
 * - Comment gérer les événements (onClick)
 * - Comment structurer un composant
 */

function Hero() {
  /**
   * Fonction appelée quand on clique sur "Télécharger CV"
   * Pour l'instant, affiche juste une alerte
   * Plus tard, tu pourras la remplacer par un vrai téléchargement
   */
  const handleDownloadCV = () => {
    alert('CV en cours de finalisation — revenez bientôt !')
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-24 pb-16 relative">
      {/* Effet de lumière verte en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/8 to-transparent pointer-events-none" />
      
      {/* Badge "Disponible" */}
      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-2 text-xs text-accent font-mono mb-8 animate-fade-in-down">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
        Disponible — Dakar, Sénégal
      </div>
      
      {/* Nom principal */}
      <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Merphy
        <br />
        <em className="text-accent">Mademba</em>
      </h1>
      
      {/* Description */}
      <p className="text-text-muted text-base max-w-xl font-light mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        Développeur Full Stack passionné par la cybersécurité, l'ingénierie de données et l'intelligence artificielle. Je construis des solutions qui sont à la fois sécurisées, performantes et intelligentes.
      </p>
      
      {/* Tags de compétences */}
      <div className="flex flex-wrap justify-center gap-2 mb-11 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        {['Full Stack', 'Cybersécurité', 'DevOps', 'Data Engineering', 'IA / ML', 'Linux'].map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs text-text-muted bg-bg-card border border-border px-3 py-1.5 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Boutons CTA */}
      <div className="flex flex-col md:flex-row items-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        {/* Bouton principal */}
        <a href="#projects" className="btn-primary">
          Voir mes projets →
        </a>
        
        {/* Bouton CV */}
        <button onClick={handleDownloadCV} className="btn-secondary">
          ⬇ Télécharger mon CV
        </button>
      </div>
      
      {/* Note sous les boutons */}
      <span className="font-mono text-xs text-text-muted mt-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        // CV en cours de finalisation
      </span>
    </section>
  )
}

export default Hero
