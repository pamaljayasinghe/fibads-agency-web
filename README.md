🚀 Features

✨ Modern Design - Clean and professional UI with gradient color scheme
🎯 Responsive Layout - Optimized for all devices from mobile to desktop
🎨 Custom Animations - Smooth scroll reveal and hover effects
🎭 Component Based - Well-organized, reusable React components
📱 Mobile Menu - Hamburger navigation for smaller screens
🌐 Dutch Language Support - All content in Dutch for the Dutch market
⚡ Performance Optimized - Fast loading times and efficient code

🛠️ Tech Stack

Framework: Next.js
Frontend: React
Styling: CSS3 (Custom external stylesheets)
Animations: Custom CSS animations
Fonts: Ethnocentric (custom), Montserrat (Google Fonts)
Icons: Custom SVG icons

📁 Project Structure
fibads-agency-web/
├── app/
│   ├── layout.js           # Main layout
│   ├── page.js            # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── Header/            # Navigation component
│   ├── Hero/              # Hero section
│   ├── Services/          # Services showcase
│   ├── Benefits/          # Benefits section
│   ├── CaseStudy/         # Portfolio showcase
│   ├── Testimonials/      # Client reviews
│   ├── CTA/               # Call to action
│   ├── FAQ/               # FAQ section
│   └── Footer/            # Footer component
├── public/
│   ├── images/            # Image assets
│   └── js/                # JavaScript files
├── styles/
│   ├── variables.css      # CSS variables
│   └── animations.css     # Animation definitions
└── package.json
🚦 Getting Started
Prerequisites

Node.js 14.x or higher
npm or yarn

Installation

Clone the repository:
bashgit clone https://github.com/yourusername/fibads-agency-web.git
cd fibads-agency-web

Install dependencies:
bashnpm install
# or
yarn install

Add the custom Ethnocentric font:

Create a /public/fonts directory
Add the Ethnocentric font files
Update paths in globals.css if needed


Start the development server:
bashnpm run dev
# or
yarn dev

Open http://localhost:3000 in your browser.

🎨 Brand Guidelines
The project follows strict brand guidelines:

Colors:

Primary Blue: #2E3192
Primary Red: #F33007
Gradient: Blue to Red transition


Typography:

Headings: Ethnocentric
Body: Montserrat


Design Elements:

Gradient backgrounds and buttons
Rounded corners and modern shapes
Smooth animations and transitions



🔧 Customization
Updating Content
Edit the content directly in component files:

/components/Hero/Hero.js - Update hero text
/components/Services/Services.js - Modify service offerings
/components/Footer/Footer.js - Update contact information

Styling

Global styles: /app/globals.css
Color variables: /styles/variables.css
Component styles: Each component has its own CSS file

Adding Pages

Create a new directory in /app/
Add a page.js file for the new route
Create any necessary components

📱 Responsive Design
The website is fully responsive with breakpoints:

Desktop: 1024px and above
Tablet: 768px to 1023px
Mobile: Below 768px

🚀 Deployment

Build the project:
bashnpm run build

Deploy to your preferred hosting service:

Vercel (recommended for Next.js)
Netlify
Any other hosting service supporting Node.js



📚 Documentation
For more detailed documentation:

Next.js Documentation
CSS Documentation
Component Guide
