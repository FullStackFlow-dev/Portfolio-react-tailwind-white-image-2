/** @type {import('tailwindcss').Config} */
export default {
  // Indique à Tailwind où chercher les classes utilisées
  // Il scanne ces fichiers pour générer seulement le CSS nécessaire
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Couleurs personnalisées pour correspondre au design original
      colors: {
        'bg-dark': '#0a0c0f',           // Fond principal
        'bg-card': '#111418',           // Fond des cartes
        'accent': '#00e5a0',            // Vert néon
        'text-primary': '#e2e8f0',      // Texte blanc cassé
        'text-muted': '#64748b',        // Texte gris
        'border': '#1e2a3a',            // Bordures
      },
      // Polices personnalisées
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Sora', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
