import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/HomeSection/HomeSection"
import ProgramSection from "./components/ProgramSection/ProgramSection"
import MissionSection from "./components/MissionSection/MissionSection";
import TestimonialCarousel from "./components/TestimonialCarousel/TestimonialCarousel";
import BeginJourneySection from "./components/BeginJourneySection/BeginJourneySection";
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProgramSection />
      <MissionSection />
      <TestimonialCarousel />
      <BeginJourneySection />
      <Footer />
    </>
  )
}
