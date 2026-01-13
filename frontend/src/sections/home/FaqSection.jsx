import { useState } from "react";
import Badge from "../../components/Badge";
import FaqItem from "../../components/FaqItem";

const faqs = [
  {
    id: 1,
    question: "¿Cómo puedo adoptar en Operación Bigotes?",
    answer:
      "Para adoptar, simplemente explorá los gatitos que hay en la plataforma a través de los filtros disponibles. Cuando encuentres uno con el que sientas una conexión especial, seguí los pasos para completar un formulario. Este se envía directamente al refugio o a la persona que publicó al gatito, y ellos se pondrán en contacto con vos para coordinar la adopción. ¡Así de simple y directo!",
  },
  {
    id: 2,
    question: "¿Qué requisitos necesito para adoptar?",
    answer:
      "Necesitás ser mayor de edad, tener un espacio seguro y preparado para el gato, y estar en condiciones de brindarle los cuidados necesarios. Los refugios se aseguran de que cada adopción sea responsable, así que te acompañarán para que todo salga bien.",
  },
  {
    id: 3,
    question: "¿Qué pasa si el gatito no se adapta a mi hogar?",
    answer:
      "Entendemos que a veces puede pasar que el gatito y la familia necesiten un tiempo para adaptarse. Si después de un periodo de prueba ves que el gatito no se acomoda bien a tu hogar, podés ponerte en contacto con el refugio o con la persona que lo publicó. Nuestro objetivo es que tanto vos como el gatito estén felices, así que te ayudaremos a encontrar la mejor solución, ya sea ajustando el entorno o buscando otro hogar adecuado.",
  },
  {
    id: 4,
    question: "¿Cómo puedo publicar un gato en adopción?",
    answer:
      "Para publicar un gatito en adopción, solo creás una cuenta en la plataforma, subís las fotos del gato y completás sus datos básicos, como edad, sexo y una breve descripción de su personalidad. Una vez publicado, cuando alguien quiera adoptar, completará un formulario que te llegará a través del medio de contacto que dejaste. Luego podrás coordinar con los posibles adoptantes y llevar adelante el proceso de adopción.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl w-full mx-auto px-6 sm:px-4 pb-12 sm:pb-36">
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge>Preguntas frecuentes</Badge>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Todo lo que necesitás saber en Operación Bigotes
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#555]">
              En Operación Bigotes te ayudamos a resolver tus dudas. Acompañamos
              tanto a quienes quieren adoptar como a quienes buscan publicar un
              gato en adopción.
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto space-y-4">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.id}
                index={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) =>
                    current === index ? null : index
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default FaqSection;