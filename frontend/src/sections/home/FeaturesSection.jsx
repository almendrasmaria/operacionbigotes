import Badge from "../../components/Badge";
import FeaturesList from "../../components/FeatureList";

const features = [
  {
    title: "Simple y accesible",
    description: "Pensado para que todo sea simple y claro.",
  },
  {
    title: "Ágil y estable",
    description: "Una plataforma rápida y confiable.",
  },
  {
    title: "Diseño cuidado",
    description: "Una experiencia visual cuidada y agradable.",
  },
  {
    title: "Búsqueda precisa",
    description: "Filtrá por características clave y encontrá a tu felino.",
  },
  {
    title: "Contacto confiable",
    description:
      "Comunicate con refugios y responsables con seguridad.",
  },
  {
    title: "Adopción responsable",
    description:
      "Guías y control para adopciones responsables.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-5xl w-full mx-auto px-6 sm:px-4 pb-12 sm:pb-36 pt-12">
      <div className="block">
        <section className="w-full py-12 sm:py-16 lg:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <header className="flex flex-col gap-4 sm:gap-6 py-8 sm:py-10 lg:py-14">
              <Badge>¿Por qué elegir Operación Bigotes?</Badge>

              <div className="flex flex-col gap-3 sm:gap-4">
                <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                  Todo lo que necesitas para adoptar con confianza
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl font-raleway text-[#555555] leading-relaxed">
                  Facilitamos cada paso para que adoptes de forma simple,
                  segura y responsable. Desde filtros inteligentes hasta el
                  contacto con refugios, te guiamos para decidir mejor.
                </p>
              </div>
            </header>

            <div className="w-full mt-6 sm:mt-8 lg:mt-10">
              <FeaturesList features={features} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FeaturesSection;



