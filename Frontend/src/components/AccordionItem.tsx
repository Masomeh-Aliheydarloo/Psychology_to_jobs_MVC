import { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="w-full border-b border-gray-300 overflow-hidden">
      <button
        className={`flex justify-between items-center w-full py-4 px-6 text-left font-roboto focus:outline-none ${
          isOpen
            ? "font-semibold text-text_black dark:text-text_white"
            : "font-normal text-text_black dark:text-text_white"
        }`}
        onClick={onClick}
      >
        <span>{question}</span>
        <RiArrowDropDownLine
          className={`text-2xl transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-600" : "rotate-0"
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height }}
      >
        <div
          className="px-6 pb-4 text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
};
