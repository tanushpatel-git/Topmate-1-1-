import React from "react";

export default function CohortLearningDesc() {
    return (
        <div className="min-h-screen flex items-center justify-center -mt-20 bg-[#f5f5f5]">
            <div className="h-100 w-[90%] flex justify-around items-center">
                <div className="h-full w-[45%] flex flex-col gap-10 items-start">
                    <div className="h-10 w-45 rounded-full bg-gray-200 border border-gray-300 text-gray-700 flex justify-center items-center">
                        <p className="font-bold uppercase font-sans">Cohort Learning</p>
                    </div>
                    <h1 className="font-bold text-6xl">Why cohorts outsell standalone webinars</h1>
                    <p className="font-light text-xl">A single webinar is one ticket. A cohort is a full program — same expertise, live sessions, and a fixed group moving together. That structure justifies premium pricing (₹10K–₹75K per person) and drives higher completion. On Topmate, you build a cohort from scheduled webinars; every session auto-records and lands in your course library so students can catch up or revisit.</p>
                </div>
                <div className="h-full w-[30%] rounded-4xl relative shadow-2xl bg-white">
                    <div className="h-30 absolute rounded-2xl top-5 -right-15 w-50 bg-black flex flex-col justify-center items-start p-5">
                        <div className="flex items-center gap-2 w-full justify-start">
                            <div className="h-2 w-2 rounded-full bg-green-300"></div>
                            <p className="text-gray-400 text-sm font-light font-sans uppercase">Active Learning</p>
                        </div>
                        <h1 className="text-xl font-bold text-white">3x Higher</h1>
                        <h1 className="text-xl font-bold text-white">Completion</h1>
                    </div>
                    <div>
                        {/* Code pending... */}
                        <div className="relative">

                        </div>
                        {/* Code pending... */}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}