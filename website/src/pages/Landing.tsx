import AboutMe from "@/components/AboutMe";
import FunStuff from "@/components/FunStuff";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <FunStuff />
    </>
  );
}

export default Landing;
