import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { initDarkMode } from "../utils/darkMode";

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        {/* Third-party libraries - load with defer to improve performance */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
        />

        {/* Dark mode initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: initDarkMode(),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Load scripts at the end for better performance */}
        <script
          src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"
          defer
        ></script>

        {/* Initialize AOS with simpler configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Initialize AOS with minimal settings
              if (typeof AOS !== 'undefined') {
                AOS.init({
                  duration: 600,
                  once: true,
                  offset: 50,
                  delay: 0,
                  easing: 'ease-out',
                  disable: window.innerWidth < 768
                });
              }
              
              // Make sure AOS refreshes on window resize
              window.addEventListener('resize', function() {
                if (typeof AOS !== 'undefined') {
                  AOS.refresh();
                }
              });
            });
          `,
          }}
        />
      </body>
    </html>
  );
}
