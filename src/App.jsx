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
        `}
      </style>
      <Navbar />
      <section id="landing">
        <Landing />
      </section>
      <section id="introduction">
        <Introduction />
      </section>
      <section id="design">
        <DesignProcess />
      </section>
      <section id="success">
        <ProjectSuccess />
      </section>
      <section id="footer">
        <Footer />
      </section>

      {/* Scroll to Top Button */}
      <a
        href="#landing"
        className="fixed bottom-8 right-8 z-50 bg-[#C48A3A] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-[#a67430] hover:-translate-y-1 transition-all duration-300 text-xl"
        title="Scroll to Top"
      >
        ↑
      </a>
    </>
  );
}

export default App;
