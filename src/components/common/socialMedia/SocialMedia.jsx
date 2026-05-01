import {
  faFacebookF,
  faLinkedin,
  faViber,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://www.facebook.com/jheno1st" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/jheno/" },
  { icon: faViber, link: "viber://chat?number=%2B639055116752" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-picto-primary hover:bg-picto-secondary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md"
    >
      <FontAwesomeIcon
        icon={item.icon}
        className="text-xl w-4.5 aspect-square"
      />
    </a>
  ));
};

export default SocialMedia;