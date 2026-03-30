export default function SubcriptionRecommed() {
    return (
        <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

            {/* Glow Effect */}
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-1/3 left-1/2 -translate-x-1/2"></div>

            {/* Floating Badges */}
            {/* Floating Badges */}
            <div className="absolute left-10 top-32 space-y-6 hidden md:block">
                <div className="float bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur">
                    ⚡ Instant <span className="text-gray-400 text-sm block">PAYOUTS</span>
                </div>

                <div className="float bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur delay-200">
                    💹 90% <span className="text-gray-400 text-sm block">CREATOR SHARE</span>
                </div>
            </div>

            <div className="absolute right-10 bottom-32 hidden md:block">
                <div className="float bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur delay-500">
                    ⭐ Free <span className="text-gray-400 text-sm block">ZOOM PRO</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-4xl">

                {/* Top Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur mb-6 text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    300K+ creators · No subscription
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Set up in 5 minutes. <br />
                    Get paid this week.
                </h1>

                {/* Subtext */}
                <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                    300K+ creators already earn on Topmate. No subscription. No setup
                    fees. Keep 90% of every booking.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
                        Start Getting Paid ↗
                    </button>

                    <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
                        See Pricing
                    </button>
                </div>
            </div>
        </div>
    );
}