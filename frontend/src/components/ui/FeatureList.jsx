import { LuCheck } from "react-icons/lu";

const FeaturesList = ({ features }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {features.map((feature) => (
        <li key={feature.title} className="flex items-start gap-3">
          <span className="mt-1">
            <LuCheck className="w-5 h-5 text-[#FF7A3C]" />
          </span>

          <div className="space-y-1">
            <h3 className="font-poppins text-base sm:text-lg font-semibold">
              {feature.title}
            </h3>
            <p className="font-raleway text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
              {feature.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
