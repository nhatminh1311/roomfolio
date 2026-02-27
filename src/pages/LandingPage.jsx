import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RoommateList from "../components/RoommateList";
import AboutSection from "../components/AboutSection";
import SafetySection from "../components/SafetySection";
import FeatureSection from "../components/FeatureSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <RoommateList />
      <AboutSection />
      <SafetySection />
      <FeatureSection />
      <PricingSection />
      <Footer />
    </>
  );
}