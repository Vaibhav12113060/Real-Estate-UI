# Real Estate Landing Page

A modern, responsive single-page application built for a real estate/architecture firm. It features smooth scrolling, a scroll-spy navigation bar, and a clean layout to showcase projects and services.

**Live Demo:** [https://real-estate-vk.netlify.app](https://real-estate-vk.netlify.app)

## Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Deployment:** Netlify
- **Data Storage:** Browser `localStorage` (for the contact form)

## Project Structure

The codebase is modular and split into specific sections for maintainability. Here's a quick overview of the `src` folder:

```text
src/
├── assets/                 # Images, logos, and icons grouped by the section they are used in.
├── components/
│   └── Navbar.jsx          # Sticky top navigation. Includes a mobile hamburger menu and scroll-spy logic to highlight the active section.
├── sections/               # The main building blocks of the single-page layout.
│   ├── Landing.jsx         # Hero section (#home) with the main headline and introductory visuals.
│   ├── Introduction.jsx    # About section (#about) covering company vision and mission.
│   ├── DesignProcess.jsx   # Services section (#services) explaining the 3-step workflow.
│   ├── ProjectSuccess.jsx  # Projects section (#projects) showcasing company stats and an image collage.
│   └── Footer.jsx          # Contact section (#contact) featuring a working form that saves user messages to `localStorage`.
├── App.jsx                 # The root component. It wraps all sections, applies global fonts, and contains the "Scroll to Top" floating button.
└── main.jsx                # React entry point that mounts the app to the DOM.
```

## Features

- **Fully Responsive:** Works perfectly on mobile, tablet, and desktop screens using Tailwind's utility classes.
- **Scroll-Spy Navbar:** The navbar automatically updates its active state based on the user's scroll position.
- **Form Handling:** The footer contact form saves submissions directly to the browser's local storage and shows a temporary success popup.

## Setup & Running Locally

Follow these steps to set up the project and run it on your local machine:

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd real-estate
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```

### Testing on Desktop (Web)

Once the server is running, Vite will typically host the app at **`http://localhost:5173`**. Open this URL in any web browser to view the site.

### Testing on Mobile (Local Network)

To test the application on a real mobile device before deploying, expose your local server to your Wi-Fi network:

1. Start the server with the `--host` flag:
   ```bash
   npm run dev -- --host
   ```
2. The terminal will output a **Network** URL (e.g., `http://192.168.1.x:5173/`).
3. Make sure your mobile device is connected to the **same Wi-Fi network** as your computer.
4. Open your phone's browser and navigate to that Network URL.
