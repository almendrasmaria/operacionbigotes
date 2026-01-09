import Navbar from "../components/Navbar";
import Hero from "../sections/home/Hero";
import FeaturesSection from "../sections/home/FeaturesSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F2F2F2]">
        <Hero />
        <FeaturesSection />
      </main>
    </>
  );
};

export default HomePage;
