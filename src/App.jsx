import Navbar from "./components/Navbar";

import Landing from "./sections/Landing";
import DesignProcess from "./sections/DesignProcess";
import ProjectSuccess from "./sections/ProjectSuccess";
import Introduction from "./sections/Introduction";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap');
          body, .font-sans {
            font-family: 'Outfit', sans-serif !important;
          }
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <Navbar />
      <section id="home">
        <Landing />
      </section>
      <section id="about">
        <Introduction />
      </section>
      <section id="services">
        <DesignProcess />
      </section>
      <section id="projects">
        <ProjectSuccess />
      </section>
      <section id="contact">
        <Footer />
      </section>

      {/* Scroll to Top Button */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#C48A3A] text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-[#a67430] hover:-translate-y-1 transition-all duration-300 text-lg md:text-xl"
        title="Scroll to Top"
      >
        ↑
      </a>
    </>
  );
}

export default App;
