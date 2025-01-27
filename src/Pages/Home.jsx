import AboutMe from "../Components/Aboutme";
import ContactMe from "../Components/Contact";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Skills />
      <Projects />
      <AboutMe />
      <ContactMe/>
      <Footer/>
    </div>
  );
}
