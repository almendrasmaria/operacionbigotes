import guides from "../data/guides";
import GuideCard from "../../components/GuideCard";

const GuidesList = () => {
  return (
    <section className="w-full bg-[#F2F2F2] py-12 sm:py-16 lg:py-18">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard
              key={guide.id}
              category={guide.category}
              title={guide.title}
              summary={guide.summary}
              imageSrc={guide.imageSrc}
              slug={guide.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesList;