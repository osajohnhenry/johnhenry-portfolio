import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import ProjectView from "../components/project/ProjectView";
import AboutMe from "../components/about-me/about-me";
import Companies from "../components/companies/companies.jsx";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <ProjectView />
      <div className="bg-soft-white">
        <AboutMe />
      </div>
      <Companies />
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
};

export default Home;
