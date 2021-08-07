import AnimatedLogo from "../../components/AnimatedLogo/AnimatedLogo";
import "./HomePage.style.scss";
import Navbar from "../../components/Navbar/Navbar";
import FindMeOn from "../../components/FindMeOn/FindMeOn";
import StarBackground from "../../components/StarBackground/StarBackground";

const HomePage = () => {
  return (
    <div className="container">
      <StarBackground />
      <Navbar />
      <AnimatedLogo />
      <FindMeOn />
    </div>
  );
};

export default HomePage;
