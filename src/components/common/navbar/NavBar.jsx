import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Workflow", url: "work-process" },
  { id: 4, name: "Projects", url: "project" },
  { id: 5, name: "More About Me", url: "services" },
  { id: 6, name: "Contact", url: "contact" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const NavBar = ({ activeSection, setActiveSection }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = navItems.map((item) => {
    const isActive = activeSection === item.url.toLowerCase();

    return (
      <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
        <Link
          onClick={() => {
            handleMenuClick();
            setActiveSection(item.url.toLowerCase());
          }}
          to={item.url.toLowerCase()}
          smooth={true}
          duration={1000}
          spy={true}
          offset={-70}
          className={`px-5 py-3 mx-1 hover:text-picto-primary ${
            isActive ? "bg-[#297dfbff] text-white" : ""
          }`}
        >
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <div
      className={`sticky top-0 ${
        position > 110
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              ☰
            </div>
            <ul className="menu menu-lg dropdown-content mt-3 w-lvw p-2 bg-white text-black">
              {menu}
            </ul>
          </div>

          <Link
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center"
            onClick={() => setActiveSection("introduction")}
          >
            <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
            <p className="text-2xl sm:text-[32px] ms-[12px] font-semibold">
              John Henry
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium">
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;