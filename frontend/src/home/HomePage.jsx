import Navbar from "../components/layout/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import Faq from "./sections/Faq";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#F2F2F2]">
        <Hero />
        <Features />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;