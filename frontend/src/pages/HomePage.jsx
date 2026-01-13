import Navbar from "../components/Navbar";
import Hero from "../sections/home/Hero";
import FeaturesSection from "../sections/home/FeaturesSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";
import FaqSection from "../sections/home/FaqSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F2F2F2]">
        <Hero />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
    </>
  );
};

export default HomePage;
