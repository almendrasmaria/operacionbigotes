import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Badge from "./ui/Badge";

const GuideCard = ({ category, title, summary, slug, imageSrc }) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm mb-6">
      <div className="h-48 w-full overflow-hidden">
        <img src={imageSrc} alt={title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"/>
      </div>
      
      <div className="flex flex-1 flex-col px-6 py-6">
        <Badge>{category}</Badge>
        <h3 className="mt-4 font-semibold leading-snug text-[#222] text-[16px] sm:text-[20px] lg:text-[24px]">{title}</h3>
        <p className="mt-3 leading-relaxed text-[#555] text-[12px] sm:text-[14px]">{summary}</p>

        <div className="mt-auto pt-6">
          <Link
            to={`/guias/${slug}`}
            className="inline-flex w-full items-center justify-center rounded-xl border border-[#E5E5E5] px-4 py-3 text-sm font-medium text-[#444] transition hover:bg-[#f9f9f9]">
            Leer Guía Completa
            <FiArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default GuideCard;
