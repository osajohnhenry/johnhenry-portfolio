import img1 from "../../assets/images/blog/cert-1.png";
import img2 from "../../assets/images/blog/cert-2.png";
import img3 from "../../assets/images/blog/cert-3.png";
import img4 from "../../assets/images/blog/cert-4.png";
import img5 from "../../assets/images/blog/cert-5.png";
import img6 from "../../assets/images/blog/cert-6.png";
import img7 from "../../assets/images/blog/cert-7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./cert.css";

const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "02 Jun, 2025",
    certCode: 8418524,
    title: "Introduction to Software Testing",
    link: "https://drive.google.com/file/d/1YHBD2ZeYQjS2YyxxtXHMdJ1XKtJ9EqiX/view?usp=sharing",
  },
  {
    id: 2,
    image: img2,
    date: "09 Oct, 2025",
    certCode: 8421705,
    title: "Software Testing with Generative AI",
    link: "https://drive.google.com/file/d/10Qp3MPPV0onI8IN6ajhivDtS118fvyOD/view?usp=sharing",
  },
  {
    id: 3,
    image: img3,
    date: "08 Oct, 2025",
    certCode: 9122032,
    title: "Introduction to Generative AI (Google & Simplilearn",
    link: "https://drive.google.com/file/d/1rR3lEgiWRNyZ9mPsSuEFyQeBrbsuBkFw/view?usp=sharing",
  },
  {
    id: 4,
    image: img4,
    date: "08 Oct, 2025",
    certCode: 9121924,
    title: "Introduction to Prompt Engineering (Simplilearn)",
    link: "https://drive.google.com/file/d/16qZ03I4p1hCQmCcF8P0R5PCNl7ydc0L_/view?usp=sharing",
  },
  {
    id: 5,
    image: img5,
    date: "03 Jun, 2025",
    certCode: 8421705,
    title: "Project Management 101 (Simplilearn)",
    link: "https://drive.google.com/file/d/1rt-t_2epXlkvQ64U0lfJq84Rigajbiju/view?usp=sharing",
  },
  {
    id: 6,
    image: img6,
    date: "03 Dec, 2021",
    // certCode: 0,
    title: "National Cyber Drill 2021 (CERT-PH) Day 1",
    link: "https://drive.google.com/file/d/1qBYta-UDJlIfmSkJgp34tcVqtk1cDkQ7/view?usp=sharing",
  },
  {
    id: 7,
    image: img7,
    date: "03 Dec, 2021",
    // certCode: 0,
    title: "National Cyber Drill 2021 (CERT-PH) Day 2",
    link: "https://drive.google.com/file/d/1hxLdjVdsdR9Ahv4aRl3pfN6yVfwb2ZvD/view?usp=sharing",
  },
];

const Cert = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Online Courses</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Here are the online courses I've completed as well as their respective digital certificates.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cert;
