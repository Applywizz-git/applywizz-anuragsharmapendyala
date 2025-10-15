import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import portfolioBg from "@/assets/portfolio-bg.jpg";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Static Background Image */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${portfolioBg})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-background/90 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="relative z-0">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Portfolio;
