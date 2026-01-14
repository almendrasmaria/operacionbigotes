import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "./sections/Header";
import GuidesList from "./sections/List";

const GuidesPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F2F2F2]">
      <Navbar />
      <main className="pt-32 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <Header />
        <GuidesList />
      </main>
      <Footer />
    </div>
  );
};

export default GuidesPage;