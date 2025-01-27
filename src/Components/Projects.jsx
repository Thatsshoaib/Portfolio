import { useState } from "react";
import projectImageOne from "../assets/ProjectImageOne.png";
import projectImagetwo from "../assets/ProjectImageTwo.png";
import projectImageThree from "../assets/ProjectImageThree.png";
const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Example project carousel images (replace these with your actual images)
  const projectImages = [projectImageOne, projectImagetwo, projectImageThree];

  // Function to handle next/previous navigation in the carousel
  const handleNavigation = (direction) => {
    if (direction === "next") {
      setCurrentImage((prev) =>
        prev === projectImages.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImage((prev) =>
        prev === 0 ? projectImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Here's a glance at one of my projects. Explore the carousel to view
            images and click below to visit the live site.
          </p>
        </div>

        {/* Project Details */}
        <div className="flex flex-col items-center">
          {/* Carousel */}
          <div className="relative w-full max-w-4xl">
            <img
              src={projectImages[currentImage]}
              alt={`Project Image ${currentImage + 1}`}
              className="w-full rounded-lg shadow-lg"
            />
            {/* Navigation Buttons */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
              onClick={() => handleNavigation("prev")}
            >
              &#8592;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
              onClick={() => handleNavigation("next")}
            >
              &#8594;
            </button>
          </div>

          {/* Project Info */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-blue-500">
              Cravia - Health Care
            </h3>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Cravia Health Care is an innovative platform designed to
              streamline healthcare services by enabling users to effortlessly
              book appointments with doctors and healthcare specialists. Our
              website prioritizes convenience, ensuring patients can schedule
              their visits with just a few clicks. Key features include:   <br /> Online
              Appointment Booking: Easily select a doctor, date, and time that
              suits you.  <br /> Email Notifications: Receive instant confirmations and
              updates directly in your inbox.  <br />  <br />  Cravia Health Care simplifies
              access to quality healthcare, making it more accessible,
              organized, and efficient
            </p>
            <a
              href="https://thatsshoaib.github.io/Cravia/" // Replace with your project URL
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              Visit the Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
