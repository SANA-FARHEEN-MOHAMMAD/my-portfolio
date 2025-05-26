Overview
A modern, responsive personal portfolio website showcasing skills, projects, and achievements in Computer Science Engineering. Built using vanilla HTML5, CSS3, and JavaScript ES6+ to demonstrate frontend development capabilities.

Features

🎨 Design & User Experience

Responsive Design: Adapts seamlessly to desktop, tablet, and mobile devices

Dark/Light Mode Toggle: User preference-based theme switching

Smooth Animations: CSS transitions and keyframe animations

Interactive Elements: Hover effects, scroll animations, and dynamic content

Professional Typography: Google Fonts integration for enhanced readability

🚀 Interactive Components

Navigation System: Smooth scrolling navigation with active section highlighting

Hero Section: Animated background bubbles and profile image

Skills Showcase: Interactive skill bubbles with hover effects

Project Gallery: Detailed project cards with GitHub integration

Contact Form: Real-time validation with user feedback

Certificate Display: Hover-to-view certificate images

📱 Mobile Optimization

Hamburger Menu: Collapsible navigation for mobile devices

Touch-Friendly: Optimized button sizes and touch targets

Fast Loading: Optimized images and compressed assets

Swipe Gestures: Enhanced mobile interaction experience

Technologies Used

Core Technologies:

HTML5: Semantic markup with accessibility features

CSS3: Advanced styling with Grid, Flexbox, and animations

JavaScript ES6+: Modern JavaScript features and DOM manipulation

External Libraries:

Font Awesome 6.4.0: Icon library for visual elements

Google Fonts (Poppins): Professional typography

CSS Grid & Flexbox: Advanced layout systems

Development Tools:

Visual Studio Code: Primary development environment

Git: Version control and collaboration

Browser DevTools: Testing and debugging

Backend Features

🔧 Backend Technologies & Tools

Node.js: Server-side runtime environment

Express.js: Lightweight framework to handle backend logic and routing

nodemailer: Sends email directly from the backend when a user submits the contact form

dotenv: For environment variable management and credential security

body-parser: Middleware for parsing incoming request bodies

📩 Email Integration (Contact Form)

The contact form in the frontend sends a POST request to the backend server

The backend validates the input and sends the message directly to the portfolio owner’s email using nodemailer

The system includes error handling and success/failure notifications for the user

All sensitive credentials (email, SMTP credentials) are stored securely using .env file

