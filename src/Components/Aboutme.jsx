const AboutMe = () => {
    return (
      <section id="about" className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            A brief introduction to who I am and what I do.
          </p>
  
          {/* About Me Content */}
          <p className="text-gray-400 text-xl leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold">Mohammad Shoaib Raza</span>, a
            tech enthusiast currently pursuing a Bachelor of Computer Applications
            (BCA) at Mohan Lal Sukhadia University. I am sharpening my skills in
            C, C++, MySQL, and basic DSA, while actively training in full-stack
            development with the MERN stack at Technoglobe Udaipur.
          </p>
          <p className="text-gray-400 text-xl leading-relaxed mb-6">
            I am driven by a passion for solving problems and crafting impactful
            digital experiences. My strengths lie in quick learning, leadership,
            and collaboration, which help me contribute to innovative and
            effective solutions.
          </p>
  
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:justify-start">
            {/* Get in Touch Button */}
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
            >
              Get in Touch
            </a>
  
            {/* Download Resume Button */}
            <a
              href="/assets/ShoaibRazaResume.pdf"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  