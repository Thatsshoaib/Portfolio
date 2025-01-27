import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          {/* Logo or Name */}
          <h2 className="text-2xl font-bold mb-4 md:mb-0 text-white">
            My Portfolio
          </h2>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="#home"
              className="hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-500 transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/Thatsshoaib"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/shoaib-raza-4293b7276"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://www.instagram.com/thats_shoaib_11/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Bottom Section */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Mohammad Shoaib Raza. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
