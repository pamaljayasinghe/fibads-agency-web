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

        <div className="cta-button-container">
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
                fill="white"
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
              if (scrollTop > lastScrollTop) {
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
        });
      `,
        }}
      />
    </header>
  );
};

export default Header;
