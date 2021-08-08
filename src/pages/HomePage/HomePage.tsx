import AnimatedLogo from "../../components/AnimatedLogo/AnimatedLogo";
import "./HomePage.style.scss";
import Navbar from "../../components/Navbar/Navbar";
import FindMeOn from "../../components/FindMeOn/FindMeOn";
import ProjectsSpotlight from "../../components/ProjectsSpotlight/ProjectsSpotlight";

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <AnimatedLogo />
      <FindMeOn />
      <ProjectsSpotlight />
    </div>
  );
};

export default HomePage;
