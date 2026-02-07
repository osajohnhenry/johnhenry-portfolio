import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll"; // Add this import
import person from "../../assets/images/person2.jpg";
import hoverPerson from "../../assets/images/person-hover.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
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
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126 relative">
          <div
            className="max-w-106 h-117 object-fill overflow-hidden rounded-xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imageRef}
              className="bg-soft-white h-[120%] object-cover transition-opacity duration-300"
              src={isHoveredLong ? hoverPerson : person}
              alt=""
              onContextMenu={(e) => e.preventDefault()}
            />
            
            {isHoveredLong && (
              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-s px-3 py-2 rounded-lg z-10 pointer-events-none">
                Move your mouse please! Don't download me! The right click has been disabled, hehe!
              </div>
            )}
          </div>

          <div className="relative bottom-9 pointer-events-auto">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8">
            I am a Software Quality Assurance Analyst
          </h2>

          <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600">
            <p>
              I perform manual testing across multiple platforms, execute functional and regression 
              test cases, and work closely with developers to resolve defects efficiently. 
              I am proficient in designing comprehensive test cases based on user requirements and 
              have experience in API testing via Postman. 
            </p>
            <p className="mt-3">
              These experiences hone my analytical skills and attention to detail, ensuring minimal 
              issues reach production.
            </p>
          </div>

          <div className="mt-8 flex max-md:justify-center">
            <Link
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              to="project"  // Updated to match ProjectView ID
              smooth={true}
              duration={1000}
              offset={-120}
            >
              My Projects
            </Link>
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
              href="https://drive.google.com/file/d/1KkBnUiFoASEMv79rUoPfC2JhqSLPU_On/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;