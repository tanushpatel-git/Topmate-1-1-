import { MessageSquare, Star } from "lucide-react";

export default function CreatorsFillingRoom() {
    return (
        <section className="bg-black text-white py-28 px-6">
            <div className="max-w-6xl mx-auto text-center">

                {/* Pill */}
                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 border border-neutral-800 px-4 py-2 rounded-full text-xs tracking-widest text-neutral-400">
                        <MessageSquare size={14} className="text-blue-400" />
                        SUCCESS STORIES
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-20">
                    <span className="text-white">Creators already</span>
                    <br />
                    <span className="bg-linear-to-b from-white to-neutral-500 bg-clip-text text-transparent">
                        filling their rooms
                    </span>
                </h2>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 text-left">

                    {/* Card 1 */}
                    <div className="border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 transition">
                        <p className="text-neutral-300 leading-relaxed mb-10 italic">
                            “I ran a ₹999 resume review webinar for 250 people. After the
                            event I sold the recording for another 6 months. That one
                            90-minute session made ₹4.5 lakhs.”
                        </p>

                        <div>
                            <p className="font-semibold text-white">
                                Ananya D., HR & Career Expert
                            </p>

                            <p className="text-emerald-400 text-sm mt-2 tracking-wide">
                                ₹4.5L REVENUE
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 transition">
                        <p className="text-neutral-300 leading-relaxed mb-10 italic">
                            “I do one paid webinar every two weeks. Each fills 300–500 seats.
                            Topmate handles registrations, payments, reminders, and replay
                            sales. I just show up and talk.”
                        </p>

                        <div>
                            <p className="font-semibold text-white">
                                Rohit K., Personal Finance Creator, 85K followers
                            </p>

                            <p className="text-emerald-400 text-sm mt-2 tracking-wide">
                                500+ SEATS/SESSION
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 transition">
                        <p className="text-neutral-300 leading-relaxed mb-10 italic">
                            “I was using Zoom + Google Forms + a payment link + manual
                            emails. Topmate replaced all of that with one link.”
                        </p>

                        <div>
                            <p className="font-semibold text-white">
                                Devika R., Full-Stack Developer & Educator
                            </p>

                            <p className="text-emerald-400 text-sm mt-2 tracking-wide">
                                ALL-IN-ONE
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Divider */}

                <div className="min-h-50 pt-20 w-full flex justify-center items-center gap-20">
                    <div className="w-[80%] flex justify-between">
                        <div className="h-30 w-1/5">
                            <h1 className="text-7xl text-white font-bold">300k+</h1>
                            <p className="text-neutral-400 text-2xl">Creators</p>
                        </div>
                        <div className="h-30 w-1/5">
                            <h1 className="text-7xl text-white font-bold">1M+</h1>
                            <p className="text-neutral-400 text-2xl">Total Attendees</p>
                        </div>
                        <div className="h-30 w-1/5">
                            <div className="flex items-center gap-2">
                                <span className="text-7xl text-white font-bold">4.9</span>
                                <span className="text-7xl text-white font-bold"><Star size={50} fill="white" /></span>
                            </div>
                            <p className="text-neutral-400 text-2xl">Avg Rating</p>
                        </div>
                        <div className="h-30 w-1/5">
                            <h1 className="text-7xl text-white font-bold">90%</h1>
                            <p className="text-neutral-400 text-2xl">Revenue Share</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}