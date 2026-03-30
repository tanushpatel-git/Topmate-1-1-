import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How do I set my meeting rate?",
    answer:
      "Go to your Topmate dashboard → Services → 1:1 Meetings → set your price in INR or USD. You can offer multiple session durations at different prices.",
  },
  {
    id: 2,
    question: "Which calendars does Topmate sync with?",
    answer:
      "Google Calendar is fully supported. Topmate reads your existing events and blocks availability automatically. Outlook and Apple Calendar are not currently supported.",
  },
  {
    id: 3,
    question: "Do I need a Zoom account?",
    answer:
      "No. Every Topmate creator gets a free Zoom Pro account. You connect it once from your dashboard and Topmate generates meeting links automatically for every booking.",
  },
  {
    id: 4,
    question: "How does Topmate handle different timezones?",
    answer:
      "Clients book in their local timezone. Topmate converts and shows your availability correctly. Calendar invites and reminders are sent in the client's timezone.",
  },
  {
    id: 5,
    question: "What happens if a client cancels?",
    answer:
      "Cancellation policies are set by you. You can allow free cancellations up to a defined time window or mark sessions as non-refundable. Topmate enforces the policy automatically.",
  },
  {
    id: 6,
    question: "Can I offer instant/on-demand calls?",
    answer:
      "Yes — the 'Instant Call' feature lets clients request a call right now if you're available. You can toggle this on and off from your dashboard at any time.",
  },
  {
    id:7,
    question:"What if a client doesn't show up?",
    answer:"You keep the payment for no-shows on non-refundable sessions. For refundable sessions, you can choose to refund or decline the refund through your dashboard."
  },
  {
    id:8,
    question:"Which currencies does Topmate support?",
    answer:"INR payments via PayU and Razorpay. International (non-INR) payments via AirWallex and Stripe. You can accept payments in 30+ currencies.",
  },
  {
    id:9,
    question:"Can I change my meeting price later?",
    answer:"Yes. You can edit your rate anytime from your dashboard. Existing bookings keep the price they paid; new bookings use the updated price.",
  },
  {
    id:10,
    question:"How do I get my first booking?",
    answer:"Share your Topmate link wherever your audience is — Instagram, LinkedIn, YouTube, or email. Many creators add it to their bio and mention it in posts or DMs when someone asks for advice."
  },
  {
    id:11,
    question:"Can I use Topmate if I'm not in India?",
    answer:"Yes. Topmate supports creators globally. You can accept INR (India) and international currencies via AirWallex/Stripe. Payouts are available in multiple currencies."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Section */}
        <div>
          <p className="text-sm text-gray-400 mb-4 border border-gray-500 pl-2 w-30 rounded-full text-center">⎋ Questions</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Common questions <br /> about Meetings
          </h1>
          <p className="text-gray-400 mt-6">
            Can't find what you're looking for?
          </p>
          <a href="#" className="underline mt-2 inline-block">
            Talk to our support team.
          </a>
        </div>

        {/* Right Section */}
        <div className="space-y-4 overflow-y-auto h-200">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="border border-gray-800 rounded-2xl p-5 bg-[#0a0a0a]"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-gray-500">
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
                    isOpen ? "max-h-40 mt-4 border-l-2 border-blue-400" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed">
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