import { useState, useRef, useEffect } from "react";
import person from "../../assets/images/person2.jpg";
import hoverPerson from "../../assets/images/person-hover2.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import calculateExperience from "./startDate";
import { Link } from "react-scroll";

const informationSummaryData = [
   { id: 1, title: "Years of Experience", description: calculateExperience("2024-08-19") },
  { id: 2, title: "Involved Projects", description: "15" },
  { id: 3, title: "Companies worked at", description: "2" },
];

const Introduction = () => {
  const [isHoveredLong, setIsHoveredLong] = useState(false);
  const hoverTimer = useRef(null);
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => {
      setIsHoveredLong(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    setIsHoveredLong(false);
  };

  useEffect(() => {
    const imageElement = imageRef.current;
    
    if (imageElement) {
      const handleContextMenu = (e) => {
        e.preventDefault();
      };

      imageElement.addEventListener('contextmenu', handleContextMenu);
      
      return () => {
        imageElement.removeEventListener('contextmenu', handleContextMenu);
      };
    }
  }, []);

  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I'm
            <span className="text-nowrap shrink-0 inline-block w-full">
              John Henry Osa
            </span>
          </p>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a <span className="bg-highlight">Software Quality Assurance Analyst</span>. With
            experience in testing web, mobile, and desktop applications, I am confident in my
            ability to contribute to your team's commitment to delivering high-quality software
            solutions.
          </p>

          <p className="text-center lg:text-start">
            <Link
              className="btn-primary btn btn-xs xxs:btn-lg text-white cursor-pointer"
              to="contact"
              smooth={true}
              duration={1000}
              offset={-120} // Adjust this value based on your header height
            >
              Say Hello!
            </Link>
          </p>
        </div>

        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl transition-opacity duration-300"
          src={isHoveredLong ? hoverPerson : person}
          alt="person"
          onContextMenu={(e) => e.preventDefault()}
        />
        
        {isHoveredLong && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-m px-3 py-2 rounded-lg z-10 pointer-events-none">
            Move your mouse please! Don't download me! The right-click has been disabled for this image, hehe!
          </div>
        )}
      </div>
    </div>
  );
};

export default Introduction;