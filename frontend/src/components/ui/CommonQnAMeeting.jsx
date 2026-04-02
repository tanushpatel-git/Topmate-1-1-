import { useState } from "react";

export default function FAQ({ faqs = [], theme = "dark" }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen px-6 py-16 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Section */}
        <div>
          <p
            className={`text-sm mb-4 border pl-2 w-30 rounded-full text-center ${
              isDark
                ? "text-gray-400 border-gray-500"
                : "text-gray-600 border-gray-300"
            }`}
          >
            ⎋ Questions
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Common questions <br /> about Meetings
          </h1>

          <p
            className={`mt-6 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Can't find what you're looking for?
          </p>

          <a href="#" className="underline mt-2 inline-block">
            Talk to our support team.
          </a>
        </div>

        {/* Right Section */}
        <div className="space-y-4 overflow-y-auto h-[600px]">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl p-5 ${
                  isDark
                    ? "border-gray-800 bg-[#0a0a0a]"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`${
                        isDark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <span className="text-lg font-medium">
                      {faq.question}
                    </span>
                  </span>

                  <span className="text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? `max-h-40 mt-4 border-l-2 ${
                          isDark
                            ? "border-blue-400"
                            : "border-blue-500"
                        }`
                      : "max-h-0"
                  }`}
                >
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}