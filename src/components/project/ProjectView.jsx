import { useState } from "react";
import Projects from "./Projects";
import { projectData } from "./projectData.jsx";
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
                <h3 className="text-lg font-semibold mb-4">Testing Conducted (Smoke, Functional, Regression)</h3>
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