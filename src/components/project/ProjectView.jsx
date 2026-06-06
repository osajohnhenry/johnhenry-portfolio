import { useState } from "react";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.jpg";
import card2 from "../../assets/images/portfolio-images/card-2.jpg";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  { id: 1, image: card1, category: "QA TESTING", title: "BGC Bus App", description: "Transport app for commuters to pay for their bus fare as well as track the arrival time of the buses to their nearest station.", testingConducted: ["Validated guest access and restricted feature handling for unregistered users", "Tested QR payment system and e-wallet transaction flow", "Verified real-time bus arrival tracking and departure indicators on the route map"] },
  { id: 2, image: card2, category: "QA TESTING", title: "San Pedro App", description: "An app catered for the citizens to immediately request for emergency assistance and keep track of the latest news from their government.", testingConducted: ["Validated onboarding flow and registration process for new users", "Tested MPIN setup and account creation workflow", "Verified emergency assistance request submission and government news feed functionality"] },
  { id: 3, image: card3, category: "QA TESTING", title: "Mission Eye (Tagaligtas)", description: "GIS-based situational awareness and incident tracking platform which provides a real-time operational view via an interactive map.", testingConducted: ["Validated GIS-based interactive map rendering and real-time location accuracy", "Tested incident reporting and tracking workflow from creation to resolution", "Verified real-time situational awareness dashboard data updates"] },
  { id: 4, image: card4, category: "QA TESTING", title: "e-Notary", description: "Web application that allows users to request a digital notarization as well as consultations with lawyers online.", testingConducted: ["Validated digital notarization request and document upload workflow", "Tested online lawyer consultation booking and scheduling system", "Verified secure user authentication and document management features"] },
  { id: 5, image: card5, category: "QA TESTING", title: "Project Liwanag", description: "Advanced e-learning platform tailored for teachers to help them gain more knowledge and skills to become more efficient in teaching their students.", testingConducted: ["Validated course enrollment and skill-building module accessibility", "Tested content delivery and interactive learning assessment tools", "Verified teacher progress tracking and performance reporting features"] },
  { id: 6, image: card6, category: "QA TESTING", title: "IRIS", description: "Digital Signage Content Management System which helps organizations manage and display digital content on their signage systems.", testingConducted: ["Validated digital content upload, scheduling, and display rendering", "Tested multi-screen signage management and content synchronization", "Verified organization-wide content distribution and role-based access control"] },
];
const ProjectView = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null); // State sa clicked image

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const openImageModal = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const closeImageModal = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2" id="project">
      <div className="xl:mb-17.5 mb-5 text-center">
        <p className="section-title">Recent Projects</p>
        <p className="font-normal text-[18px] pt-6 text-gray-400">
          Here are the recent projects that I have worked on as a QA Analyst. Click on "See More" to view more details. 
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((project) => (
            <Projects
              key={project.id}
              data={project}
              onSeeMoreClick={() => openModal(project)}
              onImageClick={() => openImageModal(project.image)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeModal} />

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col z-10 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">{selectedProject.title}</h2>
              <button onClick={closeModal} className="text-2xl font-bold text-gray-500 hover:text-gray-900">&times;</button>
            </div>

            <div className="overflow-y-auto">
              {/* Project header section */}
              <div className="p-6 border-b">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-auto rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImageModal(selectedProject.image)} // Add click handler
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-400 text-sm font-medium mb-2">
                      {selectedProject.category}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testing Conducted section */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Testing Conducted</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {selectedProject.testingConducted?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image enlargement modal */}
      {enlargedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={closeImageModal} 
          />
          <div 
            className="relative max-w-4xl max-h-[90vh] z-10" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeImageModal}
              className="absolute -top-10 -right-0 text-white text-3xl font-bold z-20 hover:text-gray-300"
            >
              &times;
            </button>
            <img 
              src={enlargedImage} 
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectView;