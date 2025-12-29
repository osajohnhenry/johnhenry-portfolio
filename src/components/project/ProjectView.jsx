import { useState } from "react";
import Projects from "./Projects";
import TestCaseTable from "./TestCaseTable";

import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.jpg";
import card3 from "../../assets/images/portfolio-images/card-3.jpg";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.jpg";

const projectData = [
  { id: 1, image: card1, category: "QA TESTING", title: "Petty Cash Request", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, dapibus ac porttitor ut, lacinia venenatis lectus.." },
  { id: 2, image: card2, category: "QA TESTING", title: "Cash Advance Request", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, dapibus ac porttitor ut, lacinia venenatis lectus.." },
  { id: 3, image: card3, category: "QA TESTING", title: "FPC Review Process", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, dapibus ac porttitor ut, lacinia venenatis lectus.." },
  { id: 4, image: card4, category: "QA TESTING", title: "CEO Approval Workflow", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, dapibus ac porttitor ut, lacinia venenatis lectus.." },
  { id: 5, image: card5, category: "QA TESTING", title: "Cash Release by FPC", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, dapibus ac porttitor ut, lacinia venenatis lectus.." },
  { id: 6, image: card6, category: "QA TESTING", title: "Acknowledgement & Receipt Upload", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, dapibus ac porttitor ut, lacinia venenatis lectus.." },
];

const hardcodedTestCases = {
  1: [
    {
      module: "IP-12 Petty Cash",
      scenario: "Validate required fields",
      testId: "TC_IP_001",
      functionalTest: "Submit form with missing required fields",
      expectedResult: "Validation messages should appear",
      actualResult: "Validation displayed correctly",
      status: "Passed",
    },
    {
      module: "IP-12 Petty Cash",
      scenario: "Validate required fields",
      testId: "TC_IP_001",
      functionalTest: "Submit form with missing required fields",
      expectedResult: "Validation messages should appear",
      actualResult: "Nothing happened",
      status: "Failed",
    },
    {
      module: "IP-12 Petty Cash",
      scenario: "Validate required fields",
      testId: "TC_IP_001",
      functionalTest: "Submit form with missing required fields",
      expectedResult: "Validation messages should appear",
      actualResult: "Validation displayed correctly",
      status: "Passed",
    },
    {
      module: "IP-12 Petty Cash",
      scenario: "Validate required fields",
      testId: "TC_IP_001",
      functionalTest: "Submit form with missing required fields",
      expectedResult: "Validation messages should appear",
      actualResult: "Nothing happened",
      status: "Failed",
    },
    {
      module: "IP-12 Petty Cash",
      scenario: "Validate required fields",
      testId: "TC_IP_001",
      functionalTest: "Submit form with missing required fields",
      expectedResult: "Validation messages should appear",
      actualResult: "Validation displayed correctly",
      status: "Passed",
    },
    {
      module: "IP-12 Petty Cash",
      scenario: "Validate required fields",
      testId: "TC_IP_001",
      functionalTest: "Submit form with missing required fields",
      expectedResult: "Validation messages should appear",
      actualResult: "Nothing happened",
      status: "Failed",
    },
    {
      module: "IP-12 Petty Cash",
      scenario: "Validate required fields",
      testId: "TC_IP_001",
      functionalTest: "Submit form with missing required fields",
      expectedResult: "Validation messages should appear",
      actualResult: "Validation displayed correctly",
      status: "Passed",
    },
    {
      module: "IP-12 Petty Cash",
      scenario: "Validate required fields",
      testId: "TC_IP_001",
      functionalTest: "Submit form with missing required fields",
      expectedResult: "Validation messages should appear",
      actualResult: "Nothing happened",
      status: "Failed",
    },
  ],
  2: [
    {
      module: "IP-13 Cash Advance",
      scenario: "Submit request",
      testId: "TC_CA_001",
      functionalTest: "Submit valid cash advance request",
      expectedResult: "Request routed to FPC review",
      actualResult: "Request successfully routed",
      status: "Passed",
    },
  ],
  3: [
    {
      module: "FPC Review",
      scenario: "View submitted requests",
      testId: "TC_FPC_001",
      functionalTest: "Login as FPC and view submitted requests",
      expectedResult: "Requests should be visible",
      actualResult: "Requests visible to FPC",
      status: "Passed",
    },
  ],
  4: [
    {
      module: "CEO Approval",
      scenario: "Approve request",
      testId: "TC_CEO_001",
      functionalTest: "Approve FPC-reviewed request",
      expectedResult: "Request proceeds to cash release",
      actualResult: "Request moved to cash release stage",
      status: "Passed",
    },
  ],
  5: [
    {
      module: "Cash Release",
      scenario: "Release amount validation",
      testId: "TC_REL_001",
      functionalTest: "Release amount exceeding request",
      expectedResult: "System should block release",
      actualResult: "System blocked excessive release",
      status: "Failed",
    },
  ],
  6: [
    {
      module: "Receipt Upload",
      scenario: "Upload receipt",
      testId: "TC_REC_001",
      functionalTest: "Upload PDF receipt",
      expectedResult: "Receipt accepted successfully",
      actualResult: "PDF uploaded without errors",
      status: "Passed",
    },
  ],
};

const ProjectView = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null); // State for enlarged image

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
        <p className="section-title">Projects</p>
        <p className="font-normal text-[18px] pt-6 text-gray-400">
          Sample QA projects with detailed test cases
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((project) => (
            <Projects
              key={project.id}
              data={project}
              onSeeMoreClick={() => openModal(project)}
              onImageClick={() => openImageModal(project.image)} // Pass function to child
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

              {/* Test cases section */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Test Cases</h3>
                <TestCaseTable testData={hardcodedTestCases[selectedProject.id] || []} />
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