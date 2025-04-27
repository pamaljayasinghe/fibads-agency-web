import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            <span className="logo-text">FIB DIGITAL</span>
          </a>
        </div>

        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <a href="/diensten" className="nav-link animated-underline">
                Diensten
              </a>
            </li>
            <li>
              <a href="/cases" className="nav-link animated-underline">
                Cases
              </a>
            </li>
            <li>
              <a href="/over-ons" className="nav-link animated-underline">
                Over ons
              </a>
            </li>
            <li>
              <a href="/mad" className="nav-link animated-underline">
                Mad
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            id="theme-toggle"
            className="theme-toggle"
            aria-label="Toggle Dark/Light Mode"
          >
            <svg
              className="sun-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg
              className="moon-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          <a href="/contact" className="cta-button gradient-bg">
            <span>Start</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        <button className="mobile-menu-toggle" aria-label="Toggle Mobile Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <button
              id="mobile-theme-toggle"
              className="theme-toggle"
              aria-label="Toggle Dark/Light Mode"
            >
              <svg
                className="sun-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg
                className="moon-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
          </div>
          <ul className="mobile-nav-links">
            <li>
              <a href="/diensten" className="mobile-nav-link">
                Diensten
              </a>
            </li>
            <li>
              <a href="/cases" className="mobile-nav-link">
                Cases
              </a>
            </li>
            <li>
              <a href="/over-ons" className="mobile-nav-link">
                Over ons
              </a>
            </li>
            <li>
              <a href="/mad" className="mobile-nav-link">
                Mad
              </a>
            </li>
            <li>
              <a href="/contact" className="mobile-nav-link cta">
                Start
              </a>
            </li>
          </ul>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.addEventListener('DOMContentLoaded', function() {
          // Mobile menu functionality
          const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
          const mobileMenu = document.querySelector('.mobile-menu');
          const body = document.body;
          
          mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
          });
          
          // Header scroll effect
          const header = document.querySelector('.header');
          let lastScrollTop = 0;
          
          window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 50) {
              header.classList.add('scrolled');
              if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.classList.add('hidden');
              } else {
                header.classList.remove('hidden');
              }
            } else {
              header.classList.remove('scrolled');
              header.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop;
          });
          
          // Theme toggle functionality
          const themeToggle = document.getElementById('theme-toggle');
          const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
          
          // Check for saved theme preference or use device preference
          const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          const savedTheme = localStorage.getItem('theme');
          
          if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark-mode');
          }
          
          // Update toggle button appearance
          function updateToggleAppearance() {
            const isDark = document.documentElement.classList.contains('dark-mode');
            themeToggle.classList.toggle('dark-mode-active', isDark);
            mobileThemeToggle.classList.toggle('dark-mode-active', isDark);
          }
          
          updateToggleAppearance();
          
          function toggleTheme() {
            document.documentElement.classList.toggle('dark-mode');
            const isDark = document.documentElement.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateToggleAppearance();
          }
          
          themeToggle.addEventListener('click', toggleTheme);
          mobileThemeToggle.addEventListener('click', toggleTheme);
          
          // Listen for changes to the OS/browser dark mode setting
          if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
              if (!localStorage.getItem('theme')) {
                if (e.matches) {
                  document.documentElement.classList.add('dark-mode');
                } else {
                  document.documentElement.classList.remove('dark-mode');
                }
                updateToggleAppearance();
              }
            });
          }
        });
      `,
        }}
      />
    </header>
  );
};

export default Header;
