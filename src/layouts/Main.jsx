import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <div data-theme={"light"} className="relative">
      <NavBar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Outlet />

      <div className="bg-[#2A374A]">
        <Footer setActiveSection={setActiveSection} />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Main;