const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto -mt-10 sm:-mt-12 md:-mt-16">
        <div className="flex justify-center mb-6">
          <div className="bg-[#FF6F3C] rounded-[12px] shadow-md flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26">
            <img src="/images/logo-2.png" alt="icono gato" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
          </div>
        </div>
        <h1 className="font-poppins font-semibold text-[32px] sm:text-[48px] md:text-[64px] leading-[110%]">
          Tu aliado confiable para adopción felina
        </h1>
        <p className="font-raleway font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-[140%] mt-4 max-w-xl mx-auto">
          Promovemos adopciones seguras y conscientes. Te acompañamos para que cada gato encuentre un hogar para siempre.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-9 py-3 bg-[#FF7A3C] hover:bg-[#FF6A24] text-white font-medium rounded-lg transition-all">
            Adoptar felino
          </button>
          <button className="px-9 py-3 bg-[#63B3FF] hover:bg-[#4A9BFF] text-white font-medium rounded-lg transition-all">
            Publicar felino
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;