import AnimatedLogo from "../../components/AnimatedLogo/AnimatedLogo";
import "./HomePage.style.scss";
import Navbar from "../../components/Navbar/Navbar";
import FindMeOn from "../../components/FindMeOn/FindMeOn";

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <AnimatedLogo />
      <FindMeOn />
    </div>
  );
};

export default HomePage;
