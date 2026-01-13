import Navbar from "../components/Navbar";
import Hero from "./sections/Hero";
import FeaturesSection from "./sections/FeaturesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FaqSection from "./sections/FaqSection";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F2F2F2]">
        <Hero />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
};

export default Page;