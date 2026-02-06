import { useState } from 'react'

/**
 * NAVIGATION COMPONENT
 * Menu fixe en haut avec logo et liens
 * 
 * Features :
 * - Menu hamburger sur mobile
 * - Fermeture automatique au clic sur un lien
 * - Animation fluide d'ouverture/fermeture
 * - État géré avec useState (hook React)
 */

function Navigation() {
  /**
   * État du menu mobile
   * - isOpen = true : menu ouvert
   * - isOpen = false : menu fermé
   * 
   * useState est un "hook" React qui permet de gérer l'état local
   */
  const [isOpen, setIsOpen] = useState(false)

  /**
   * Toggle le menu : ouvre s'il est fermé, ferme s'il est ouvert
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  /**
   * Ferme le menu (appelé quand on clique sur un lien)
   */
  const closeMenu = () => {
    setIsOpen(false)
  }

  /**
   * Liste des liens de navigation
   * Utilise un tableau pour éviter la répétition de code
   */
  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#certs', label: 'Certificats' },
    { href: '#education', label: 'Formation' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-dark/75 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-mono text-sm text-accent tracking-wider">
          merphdev
        </a>
        
        {/* Bouton hamburger (mobile uniquement) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          {/* Les 3 barres du hamburger avec animation */}
          <span className={`w-6 h-0.5 bg-accent transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-accent transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-accent transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
        
        {/* Liens de navigation */}
        <ul className={`
          fixed md:relative top-[70px] md:top-0 left-0 right-0
          md:flex md:gap-8
          bg-bg-dark/98 md:bg-transparent
          backdrop-blur-xl md:backdrop-blur-none
          flex-col md:flex-row items-center
          py-8 md:py-0 gap-6 md:gap-8
          border-b md:border-b-0 border-border
          transition-all duration-300
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full md:translate-y-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'}
        `}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="text-text-muted text-xs font-medium tracking-widest uppercase transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
