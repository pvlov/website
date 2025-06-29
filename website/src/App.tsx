import AboutMe from '@/sections/AboutMe';
import FunStuff from '@/sections/FunStuff';
import HeroSection from '@/sections/Hero';
import Navbar from '@/components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <FunStuff />
    </>
  );
}

export default App
