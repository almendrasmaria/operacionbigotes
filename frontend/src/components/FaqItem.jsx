import { FiPlus, FiMinus } from "react-icons/fi";

const FaqItem = ({ index, question, answer, isOpen, onToggle }) => {
  const number = index + 1;

  return (
    <div className="flex items-stretch gap-3 sm:gap-4">
      <div className="flex w-10 sm:w-11 items-center justify-center rounded-md bg-[#E78E4E] text-white text-sm font-semibold">
        {number}
      </div>

      <div className="flex-1">
        <div className="bg-white rounded-xl shadow-sm">
          <button
            type="button"
            onClick={onToggle}
            className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4"
          >
            <span className="flex-1 text-left text-sm font-medium text-[#333] sm:text-base leading-relaxed">
              {question}
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E5F4FF] text-[#3B82F6] text-sm">
              {isOpen ? <FiMinus /> : <FiPlus />}
            </span>
          </button>

          {isOpen && (
            <div className="px-4 pb-4 text-xs text-[#555] sm:px-6 sm:text-sm">
              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;