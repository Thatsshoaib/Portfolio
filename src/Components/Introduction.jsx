import Profile from "../assets/Profile-Image.jpg";
const Introduction = () => {
  return (
    <section
      id="introduction"
      className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
        {/* Left Section: Text Content */}
        <div className="text-center lg:text-left animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Shoaib Raza</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            I'm a passionate developer specializing in creating modern and
            interactive web experiences. Welcome to my portfolio!
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Right Section: Profile Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 animate-scaleIn">
          <img
            src={Profile} // Replace with your image URL
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
