import { useState } from "react";
import Projects from "./Projects";
import TestCaseTable from "./TestCaseTable";

import card1 from "../../assets/images/portfolio-images/card-1.jpg";
import card2 from "../../assets/images/portfolio-images/card-2.jpg";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  { id: 1, image: card1, category: "QA TESTING", title: "BGC Bus App", description: "Transport app for commuters to pay for their bus fare as well as track the arrival time of the buses to their nearest station." },
  { id: 2, image: card2, category: "QA TESTING", title: "San Pedro App", description: "An app catered for the citizens to immediately request for emergency assistance and keep track of the latest news from their government." },
  { id: 3, image: card3, category: "QA TESTING", title: "Mission Eye (Tagaligtas)", description: "GIS-based situational awareness and incident tracking platform which provides a real-time operational view via an interactive map." },
  { id: 4, image: card4, category: "QA TESTING", title: "e-Notary", description: "Web application that allows users to request a digital notarization as well as consultations with lawyers online." },
  { id: 5, image: card5, category: "QA TESTING", title: "Project Liwanag", description: "Advanced e-learning platform tailored for teachers to help them gain more knowledge and skills to become more efficient in teaching their students." },
  { id: 6, image: card6, category: "QA TESTING", title: "IRIS", description: "Digital Signage Content Management System which helps organizations manage and display digital content on their signage systems." },
];

const hardcodedTestCases = {
  1: [
    {
      testId: "TC_BGC_001",
      scenario: "Guest access",
      functionalTest: "Validate that the app allows users to open and access the app without registering or logging in",
      expectedResult: "User should be able to view and access the app (bus ETA & basic route info) without logging in",
      actualResult: "The user was able to access the bus ETA screen without logging in",
      status: "Passed",
    },
    {
      testId: "TC_BGC_007",
      scenario: "Restricted features for guests",
      functionalTest: "Validate that Guest Users cannot access QR Payment features (generate QR, e-wallet, transactions)",
      expectedResult: "Guest users should be unable to access the QR payment features (generate QR, e-wallet, transactions)",
      actualResult: "Guest users was unable to access the QR payment features (generate QR, e-wallet, transactions)",
      status: "Passed",
    },
    {
      testId: "TC_BGC_015",
      scenario: "Login/Registration access",
      functionalTest: "Validate that the login and registration options are accessible to guest user",
      expectedResult: "Both the login and registration options should be visible and accessible to guest users in all screens of the app",
      actualResult: "There is currently no option for guest users to login or register in the ETA screen",
      status: "Failed",
    },
    {
      testId: "TC_BGC_036",
      scenario: "Bus departure indication",
      functionalTest: "Validate that once the bus departs from a station, the station it left appears as inactive (grayed out or visually distinct)",
      expectedResult: "The station indicator should be grayed out",
      actualResult: "The station indicator was grayed out after the bus left the station",
      status: "Passed",
    },
    {
      testId: "TC_BGC_039",
      scenario: "Bus indicator movement",
      functionalTest: "Validate that when the bus leaves a station, the bus indicator moves toward the middle of the route line between the previous and next station",
      expectedResult: "The bus indicator should move toward the middle of the route line between the previous and next station",
      actualResult: "The bus indicator moved toward the middle of the route line between the previous and next station",
      status: "Passed",
    },
    {
      testId: "TC_BGC_040",
      scenario: "Bus indicator movement",
      functionalTest: "Validate that once the bus reaches the next station, the bus indicator stops exactly at that station",
      expectedResult: "The bus indicator should stop exactly at that station",
      actualResult: "The bus indicator stopped exactly at that station",
      status: "Passed",
    }
  ],
  2: [
    {
      testId: "TC_SP_001",
      scenario: "Onboarding",
      functionalTest: "Validate that the user will be directed to the onboarding screens upon first opening the app",
      expectedResult: "User should be directed to the onboarding screens upon first opening the app",
      actualResult: "User was directed to the onboarding screens upon first opening the app",
      status: "Passed",
    },
    {
      testId: "TC_SP_005",
      scenario: "Registration entry",
      functionalTest: "Validate that the user will be redirected to the registration screen when they tap on the 'Register' button in the onboarding screens",
      expectedResult: "User should be redirected to the registration screen",
      actualResult: "User was redirected to the registration screen",
      status: "Passed",
    },
    {
      testId: "TC_SP_007",
      scenario: "Registration form",
      functionalTest: "Validate that the user can fill out the registration form and submit it successfully",
      expectedResult: "Registration form should be submitted successfully",
      actualResult: "Registration form was submitted successfully",
      status: "Passed",
    },
    {
      testId: "TC_SP_011",
      scenario: "MPIN setup",
      functionalTest: "Validate that the user can set up their MPIN",
      expectedResult: "MPIN should be set up successfully",
      actualResult: "MPIN was set up successfully",
      status: "Passed",
    },
    {
      testId: "TC_SP_015",
      scenario: "Successful account creation",
      functionalTest: "Validate that after successfully submitting the registration form and setting up the MPIN, the user's account is created and they are redirected to the login screen",
      expectedResult: "User should be redirected to the login screen",
      actualResult: "User was redirected to the login screen",
      status: "Passed",
    },
    {
      testId: "TC_SP_016",
      scenario: "Login",
      functionalTest: "Validate that the user can log in with their registered credentials",
      expectedResult: "User should be able to log in successfully and be redirected to the home screen",
      actualResult: "User was able to log in successfully and was redirected to the home screen",
      status: "Passed",
    },
  ]
};

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

              {/* Test cases section */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Test Cases</h3>
                <h6 className="text-gray-500 mb-4">Please note that due to confidentiality agreements, some projects do not allow test cases to be displayed publicly.</h6>
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