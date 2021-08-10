import AnimatedLogo from "../../components/AnimatedLogo/AnimatedLogo";
import "./HomePage.style.scss";
import Navbar from "../../components/Navbar/Navbar";
import FindMeOn from "../../components/FindMeOn/FindMeOn";
import ProjectsSpotlight from "../../components/ProjectsSpotlight/ProjectsSpotlight";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="container">
      <div className="home">
        <Navbar />
        <AnimatedLogo />
        <FindMeOn />
      </div>
      <div className="projects">
        <ProjectsSpotlight />
      </div>
    </div>
  );
};

export default HomePage;
