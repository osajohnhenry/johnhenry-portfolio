import Marquee from "react-fast-marquee";

const commonImgClass = "h-8 sm:h-12 md:h-16 object-contain";

// Import images directly
import paideskLogo from "../../assets/images/paidesk-logo.jpg";
import teoLogo from "../../assets/images/teo-logo.png";

const brandLogos = [
  { src: paideskLogo, alt: "Paidesk Logo" },
  { src: teoLogo, alt: "Teo Logo" },
];

const Companies = () => {
  const shouldMarquee = brandLogos.length >= 4;

  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center">
        <p className="section-title mb-6">Companies</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I have had the opportunity to work with the following companies.
        </p>
      </div>
      
      {shouldMarquee ? (
        <Marquee pauseOnHover={true} speed={100} className="pt-4 md:pt-10">
          <div className="flex items-center">
            {brandLogos.map((logo, index) => (
              <span 
                className="ps-5 sm:ps-10 md:ps-20 flex items-center" 
                key={index}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={commonImgClass}
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        </Marquee>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-4 md:pt-10">
          {brandLogos.map((logo, index) => (
            <div 
              className="flex items-center justify-center" 
              key={index}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={commonImgClass}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Companies;