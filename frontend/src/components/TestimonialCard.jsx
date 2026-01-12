import { LuQuote } from "react-icons/lu";

const TestimonialCard = ({ name, handle, text, imageSrc }) => {
  return (
    <article
      className="relative bg-white rounded-[24px] shadow-md overflow-hidden flex flex-row
                 h-[340px] sm:h-[360px] md:h-[380px] lg:h-[420px]"
    >
      <div className="flex-1 h-full px-6 py-8 md:px-8 md:py-10 flex flex-col justify-between">
        <LuQuote className="text-[#E78E4E] text-3xl" />

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#444] max-h-[150px] overflow-hidden">
          {text}
        </p>

        <div className="mt-6">
          <p className="font-semibold text-sm sm:text-base">{name}</p>
          <p className="text-xs sm:text-sm text-[#888]">{handle}</p>
        </div>
      </div>

      <div className="w-[38%] sm:w-[40%] md:w-[42%] lg:w-[45%] h-full">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </article>
  );
};

export default TestimonialCard;