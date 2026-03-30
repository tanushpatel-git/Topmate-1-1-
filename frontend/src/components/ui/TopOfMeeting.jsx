import React from "react";

const TopOfMeeting = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
                <div className="max-w-6xl text-center">

                    {/* Badge */}
                    <div className="inline-block px-4 py-1 mb-6 text-sm rounded-full bg-white/10 border border-white/20">
                        1:1 Meetings
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                        Turn 1:1 Calls Into a Revenue Stream
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                        Set your rate, share one link, and get paid. Free Zoom Pro, calendar
                        sync, and instant payouts — no subscription.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-black hover:shadow-white hover:shadow-md rounded-full font-medium shadow-lg hover:scale-105 transition">
                            Start Getting Paid
                        </button>

                        <button className="px-8 py-4 border border-white/30 rounded-full font-medium hover:border-white transition">
                            See How It Works
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-10 flex items-center justify-center gap-3 text-gray-400 text-sm">
                        <div className="flex -space-x-2">
                            <img
                                className="w-8 h-8 rounded-full border border-black"
                                src="https://i.pravatar.cc/40?img=1"
                            />
                            <img
                                className="w-8 h-8 rounded-full border border-black"
                                src="https://i.pravatar.cc/40?img=2"
                            />
                            <img
                                className="w-8 h-8 rounded-full border border-black"
                                src="https://i.pravatar.cc/40?img=3"
                            />
                        </div>

                        <span>Trusted by 300K+ creators · 4.9 ★ rating</span>
                    </div>
                </div>
            </div>
    )
}

export default TopOfMeeting