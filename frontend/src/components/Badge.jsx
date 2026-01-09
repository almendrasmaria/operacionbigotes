const Badge = ({ children }) => {
  return (
    <span className="inline-flex w-fit items-center justify-center bg-[#E78E4E] text-white text-xs sm:text-sm px-3 py-1 rounded-full font-raleway font-medium tracking-wide whitespace-nowrap">
      {children}
    </span>
  );
};


export default Badge;
