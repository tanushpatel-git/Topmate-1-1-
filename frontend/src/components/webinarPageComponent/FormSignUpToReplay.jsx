import { motion } from "framer-motion";
import { Calendar, Bell, PlayCircle } from "lucide-react";

export default function FormSignUpToReplay() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="bg-[#f6f5f3] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-black leading-tight max-w-3xl mx-auto">
          From signup to replay, your attendees are taken care of
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* Card 1 */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-sm p-10 text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-5 rounded-xl">
                <Calendar className="w-7 h-7 text-gray-700" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Instant Calendar Invite
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Every registrant gets a Google Calendar invite with the Zoom link.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-sm p-10 text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-5 rounded-xl">
                <Bell className="w-7 h-7 text-gray-700" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Automated Reminders
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              WhatsApp + email reminders go out 24 hrs and 1 hr before the event.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-sm p-10 text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-5 rounded-xl">
                <PlayCircle className="w-7 h-7 text-gray-700" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Replay Access
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Attendees who purchase get a permanent link to watch the recording anytime.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}