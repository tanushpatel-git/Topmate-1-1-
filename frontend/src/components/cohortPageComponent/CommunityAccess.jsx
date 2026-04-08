import React from "react";
import { MessageSquare, Bell, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const CommunityAccess = () => {

  const recordings = [
    { title: "Session 01", duration: "45:00" },
    { title: "Session 02", duration: "52:10" },
  ];

  return (
    <section className="w-full min-h-screen bg-[#F3F3F1] flex flex-col items-center py-28">

      {/* HEADING */}
      <div className="flex flex-col items-center gap-4 mb-20">

        <h1 className="text-6xl font-bold text-black text-center">
          Community and access built in
        </h1>

        <p className="text-gray-500 text-lg">
          Keep students engaged and give them one place for everything.
        </p>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-3 gap-10 w-[80%]">

        {/* CARD 1 */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-gray-200 overflow-hidden"
        >

          {/* TOP UI */}
          <div className="flex justify-center pt-12 pb-10">

            <div className="w-72 bg-[#F7F7F7] rounded-3xl border border-gray-200 p-6">

              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                <p className="font-medium text-gray-700">Cohort Group</p>
              </div>

              <div className="flex flex-col gap-3">

                <div className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-xl w-fit">
                  Welcome everyone! 🚀
                </div>

                <div className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-xl w-fit self-end">
                  Excited to start!
                </div>

              </div>

              <div className="mt-5 bg-black text-white text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                <MessageSquare size={16} />
                New message
              </div>

            </div>

          </div>

          {/* TEXT */}
          <div className="border-t border-gray-200 p-8 text-center">

            <h3 className="text-xl font-semibold mb-3">
              Group WhatsApp / Community
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Add a cohort community so students stay connected
              and engaged between live sessions.
            </p>

          </div>

        </motion.div>


        {/* CARD 2 */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-gray-200 overflow-hidden"
        >

          <div className="flex justify-center pt-14 pb-12">

            <div className="bg-[#F7F7F7] border border-gray-200 rounded-3xl px-10 py-8 text-center">

              <p className="text-xs text-gray-500 mb-3">
                NEXT SESSION
              </p>

              <div className="flex items-center justify-center gap-2 mb-2">
                <Bell size={18} className="text-yellow-500" />
                <h4 className="font-semibold text-lg">
                  Starting in 1 hour
                </h4>
              </div>

              <p className="text-gray-500 text-sm mb-4">
                Module 3: Growth
              </p>

              <p className="text-green-600 text-sm">
                ● WhatsApp + Email Sent
              </p>

            </div>

          </div>

          <div className="border-t border-gray-200 p-8 text-center">

            <h3 className="text-xl font-semibold mb-3">
              Automated Session Reminders
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Every student gets a WhatsApp + email reminder
              before each live session.
            </p>

          </div>

        </motion.div>


        {/* CARD 3 */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl border border-gray-200 overflow-hidden"
        >

          <div className="flex justify-center pt-14 pb-12 relative">

            <div className="bg-black rounded-3xl p-6 w-72">

              {recordings.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#111] p-4 rounded-xl mb-3"
                >

                  <PlayCircle size={20} className="text-blue-400" />

                  <div>
                    <p className="text-white text-sm">{r.title}</p>
                    <p className="text-gray-400 text-xs">{r.duration}</p>
                  </div>

                </div>
              ))}

            </div>

            {/* floating circles */}
            <div className="absolute right-8 top-8 w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="absolute right-4 top-24 w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="absolute right-10 bottom-12 w-12 h-12 bg-gray-200 rounded-full"></div>

          </div>

          <div className="border-t border-gray-200 p-8 text-center">

            <h3 className="text-xl font-semibold mb-3">
              Recording Access
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Past session recordings are available to enrolled
              students anytime — no manual links.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CommunityAccess;