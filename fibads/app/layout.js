import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Fib Digital - Natuurlijk Succes Met Fib Ads",
  description:
    "Bij Fib Ads draait alles om balans en ontwikkeling. We combineren branding, webdesign en Google Ads om jouw bedrijf op een natuurlijke en effectieve manier te laten groeien.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Add script for animations */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Scroll reveal animation
              function revealOnScroll() {
                var reveals = document.querySelectorAll(".reveal");
                
                for (var i = 0; i < reveals.length; i++) {
                  var windowHeight = window.innerHeight;
                  var elementTop = reveals[i].getBoundingClientRect().top;
                  var elementVisible = 150;
                  
                  if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                  }
                }
              }
              
              window.addEventListener("scroll", revealOnScroll);
              revealOnScroll(); // Check on load
              
              // Add fade-in animation to page load
              document.body.classList.add('fade-in');
            });
          `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
