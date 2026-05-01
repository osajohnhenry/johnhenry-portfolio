<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
>>>>>>> main
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
<<<<<<< HEAD
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");
      let current = "introduction";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div data-theme="light" className="relative">
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

=======
  return (
    <div data-theme={"light"} className="relative">
      <NavBar />
>>>>>>> main
      <Outlet />
      <div className="bg-[#2A374A]">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
