import card1 from "../../assets/images/portfolio-images/card-1.jpg";
import card2 from "../../assets/images/portfolio-images/card-2.jpg";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

export const projectData = [
  {
    id: 1,
    image: card1,
    category: "QA TESTING",
    title: "BGC Bus App",
    description: "Transport app for commuters to pay for their bus fare as well as track the arrival time of the buses to their nearest station.",
    testingConducted: [
      "Validated guest access and restricted feature handling for unregistered users",
      "Tested QR payment system and e-wallet transaction flow for registered users",
      "Verified real-time bus arrival tracking and departure indicators on the route map",
      "Tested the discount application and validation process for eligible users",
    ]
  },
  {
    id: 2,
    image: card2,
    category: "QA TESTING",
    title: "San Pedro App",
    description: "An app catered for the citizens to immediately request for emergency assistance and keep track of the latest news from their government.",
    testingConducted: [
      "Tested user registration and login workflow with various input scenarios",
      "Tested emergency assistance request submission and notification system for accuracy and reliability",
      "Tested GIS Map based incident tracking (based on users' emergency requests) for real-time updates and location accuracy",
      "Validated the statistics dashboard for accurate data representation and real-time updates based on logged emergency requests and their status changes",
      "Tested Clerk and Command Center roles' access to manual case management features for handling emergency requests and updating their status",
      "Tested the Admin role's access to approval and rejection of resident profile updates"
    ]
  },
  {
    id: 3,
    image: card3,
    category: "QA TESTING",
    title: "Mission Eye",
    description: "GIS-based situational awareness and incident tracking platform which provides a real-time operational view via an interactive map.",
    testingConducted: [
      "Validated GIS-based interactive map rendering based on Military Grid Reference System (MGRS) coordinates",
      "Validated different user access levels for created accounts",
      "Tested the encoding and display of various data",
      "Validated the accuracy of the audit log for all user actions and system events, ensuring comprehensive logging and traceability of activities within the platform"
    ]
  },
  {
    id: 4,
    image: card4,
    category: "QA TESTING",
    title: "e-Notary",
    description: "Web application that allows users to request a digital notarization as well as consultations with lawyers online.",
    testingConducted: [
      "Validated digital notarization request and document upload workflow",
      "Tested online lawyer consultation booking and scheduling system",
      "Tested the video conferencing feature for online notarization sessions for stability and usability",
      "Verified secure user authentication and document management features"
    ]
  },
  {
    id: 5,
    image: card5,
    category: "QA TESTING",
    title: "Project Liwanag",
    description: "Advanced e-learning platform tailored for teachers to help them gain more knowledge and skills to become more efficient in teaching their students.",
    testingConducted: [
      "Validated course enrollment and skill-building module accessibility",
      "Tested content delivery and interactive learning assessment tools",
      "Verified teacher progress tracking and performance reporting features",
      "Tested the platform's compatibility with different browsers and devices"
    ]
  },
  {
    id: 6,
    image: card6,
    category: "QA TESTING",
    title: "IRIS",
    description: "Digital Signage Content Management System which helps organizations manage and display digital content on their signage systems.",
    testingConducted: [
      "Validated digital content upload, scheduling, and display rendering",
      "Tested multi-screen signage management and content synchronization",
      "Verified organization-wide content distribution and role-based access control",
      "Tested the looping of digital content on signage displays",
      "Tested the zone-based content management feature for targeted content display on specific signage zones"
    ]
  }
];