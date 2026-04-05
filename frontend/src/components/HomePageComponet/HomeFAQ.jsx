import React, { useState } from "react";

const faqs = [
  {
    question: "What is topmate?",
    answer:
      "Topmate is a tool that enables you to connect with your audience through 1:1 sessions - to share your knowledge and monetise your time better. Just create your personal link, add your services, availability and charges; and share your link with your followers. Your followers can now book a call to connect with you.",
  },
  {
    question: "Can I conduct paid sessions?",
    answer: "Yes, you can conduct both free and paid sessions.",
  },
  {
    question: "How much can I charge for my sessions?",
    answer:
      "Absolutely, we enable you to conduct both free and paid sessions with your followers",
  },
  {
    question: "How do the payments work?",
    answer:
      "It really depends on how much value you think you're providing and how much your followers are willing to pay. Our creators charge anywhere from $50 to $500.",
  },
  {
    question: "Wait, is Topmate really free?",
    answer:
      "Yes! We're free to use and charge a very tiny commission on your earnings (10%).",
  },
  {
    question: "What are the transaction charges?",
    answer:
      "Payment gateways like Stripe and PayPal typically charge around 3% of the transaction amount.",
  },
];

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

return (
 <div
  className="w-full  bg-gray-100 
  flex flex-col lg:flex-row 
  items-start lg:items-center 
  justify-center 
  px-6 sm:px-10 md:px-16 lg:px-[10%] xl:px-[15%] 
  py-10 gap-10 h-screen"
>
         {/* LEFT SIDE */}
      <div className="flex-1 w-full sm-h-[30%] mt-[10%] ">

        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight">
          Frequently asked <br /> questions
        </h1>

        <p className="text-base sm:text-lg md:text-xl mt-6 text-gray-600">
          Can't find the answer you are looking for?
        </p>

        <p className="text-base sm:text-lg md:text-xl text-green-600 font-semibold mt-2 cursor-pointer">
          Reach out to us
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:flex-1 flex justify-center">
  <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-4 sm:p-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4"
          >
            {/* QUESTION */}
            <div
              onClick={() => toggle(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
                {faq.question}
              </h3>

              {/* Chevron Icon */}
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* ANSWER with animation */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomeFAQ;