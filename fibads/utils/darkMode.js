export function initDarkMode() {
  // This script should run on the client side
  // Check for dark mode preference in localStorage or system
  return `
    (function() {
      function applyDarkMode() {
        // Check localStorage first
        const savedMode = localStorage.getItem('darkMode');
        
        if (savedMode !== null) {
          if (savedMode === 'true') {
            document.body.classList.add('dark-mode');
          }
        } else {
          // Check system preference
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
          }
        }
      }
      
      // Apply immediately to avoid flash of wrong theme
      applyDarkMode();
      
      // Listen for changes in system preference
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          const savedMode = localStorage.getItem('darkMode');
          // Only apply system preference if user hasn't explicitly chosen a mode
          if (savedMode === null) {
            if (e.matches) {
              document.body.classList.add('dark-mode');
              localStorage.setItem('darkMode', 'true');
            } else {
              document.body.classList.remove('dark-mode');
              localStorage.setItem('darkMode', 'false');
            }
          }
        });
      }
    })();
  `;
}
