import { useEffect, useMemo, useRef, useState } from "react";
import TestimonialCard from "../../components/TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Florencia Ramírez",
    handle: "@floradopta",
    text:
      "El proceso fue súper claro y rápido. En pocos días estaba firmando el certificado y llevando a mi gatito a casa llena de emoción.",
    imageSrc: "/images/testimonials/1.jpg",
  },
  {
    id: 2,
    name: "Micaela Torres",
    handle: "@micatorres",
    text:
      "Adoptar fue facilísimo. Completé la solicitud, me contactaron enseguida y terminé con mi certificado en mano y un nuevo amigo felino.",
    imageSrc: "/images/testimonials/1.jpg",
  },
  {
    id: 3,
    name: "Julián Medina",
    handle: "@julianmedina",
    text:
      "Conocer su historia y seguir los pasos me dio mucha seguridad. Firmar el certificado fue el momento más lindo de toda la adopción.",
    imageSrc: "/images/testimonials/1.jpg",
  },
  {
    id: 4,
    name: "Natalia Duarte",
    handle: "@natiduart3",
    text:
      "El refugio respondió todo al instante. El día de la adopción, recibir el certificado fue pura alegría y emoción.",
    imageSrc: "/images/testimonials/1.jpg",
  },
  {
    id: 5,
    name: "Tomás Villalba",
    handle: "@tomi.villalba",
    text:
      "Encontré a mi gata ideal y todo fluyó sin estrés. El certificado es ahora un recuerdo hermoso de ese día.",
    imageSrc: "/images/testimonials/1.jpg",
  },
  {
    id: 6,
    name: "Camila Soto",
    handle: "@cami.soto",
    text:
      "Me guiaron en cada paso con claridad. Terminé firmando el certificado feliz de darle un hogar a mi nuevo compañero.",
    imageSrc: "/images/testimonials/1.jpg",
  },
];

const TestimonialsSection = () => {
  const trackRef = useRef(null);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const calcPerPage = () => {
      const w = window.innerWidth;
      setPerPage(w < 768 ? 1 : w < 1024 ? 2 : 3);
    };
    calcPerPage();
    window.addEventListener("resize", calcPerPage);
    return () => window.removeEventListener("resize", calcPerPage);
  }, []);

  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < testimonials.length; i += perPage)
      result.push(testimonials.slice(i, i + perPage));
    return result;
  }, [perPage]);

  const totalPages = pages.length;
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({ left: 0 });
    setPage(0);
  }, [perPage]);

  const goToPage = (newPage) => {
    if (!trackRef.current || totalPages === 0) return;
    const normalized =
      ((newPage % totalPages) + totalPages) % totalPages;
    const containerWidth = trackRef.current.offsetWidth;
    trackRef.current.scrollTo({
      left: normalized * containerWidth,
      behavior: "smooth",
    });
    setPage(normalized);
  };

  return (
    <section className="w-full bg-[#F2F2F2] py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mt-2 font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Testimonios de quienes confiaron en nosotros
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#555]">
          Personas y refugios que eligieron Operación Bigotes para dar o
          encontrar un hogar. Conocé sus experiencias y las historias que
          nacieron gracias a adopciones responsables.
        </p>
      </div>

      <div className="mt-10 w-screen -mx-[calc(50vw-50%)]">
        <div
          ref={trackRef}
          className="flex overflow-hidden scroll-smooth"
          role="region"
          aria-roledescription="carousel"
        >
          {pages.map((pageItems, pageIndex) => (
            <div
              key={pageIndex}
              className="shrink-0 grow-0 basis-full px-4 sm:px-6 lg:px-8"
            >
              <div className="flex gap-6">
                {pageItems.map((item) => (
                  <div key={item.id} className="flex-1">
                    <TestimonialCard
                      name={item.name}
                      handle={item.handle}
                      text={item.text}
                      imageSrc={item.imageSrc}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => goToPage(page - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm text-[#E78E4E] text-sm"
          >
            &#60;
          </button>

          <div className="flex items-center gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === page ? "w-5 bg-[#E78E4E]" : "w-2 bg-[#D0D0D0]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goToPage(page + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm text-[#E78E4E] text-sm"
          >
            &#62;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;