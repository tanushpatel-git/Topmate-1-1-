import React from "react";
import { DollarSign } from "lucide-react";

const UltimateRevenueDriver = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-black text-white">
            <div className="flex flex-col gap-2 w-full justify-center items-center pt-20">
                <h1 className="text-7xl text-white font-bold">Why cohorts are the</h1>
                <h1 className="text-7xl font-bold bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
                    ultimate revenue driver
                </h1>
            </div>
            <div className="w-[70%] h-100 flex justify-around items-center">
                <div className="w-[50%] h-100 flex items-end justify-end">
                    <div className="p-5 pt-20 h-full w-full flex flex-col gap-5">
                        <div className="h-15 w-15 rounded-xl border border-gray-500 flex justify-center items-center">
                            <DollarSign size={40} className="text-blue-300" />
                        </div>
                        <h1 className="text-4xl font-bold text-white">Premium Pricing</h1>
                        <p className="text-xl font-light text-gray-300">Cohorts command 3–10× the price of a single webinar. Live sessions, a fixed group, and a clear start/end date let you charge ₹10,000–₹75,000 per person.</p>
                    </div>
                </div>
                <div className="w-[50%] relative h-100 flex justify-center items-center">
                    <div className="h-80 w-70 border border-gray-500 rounded-2xl">

                    </div>
                    <div className="absolute top-20 right-2">
                        <div className="h-7 w-25 bg-green-600 rounded-full flex justify-center items-center">
                            <h1 className="p-2 text-black text-lg">High Tiket</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UltimateRevenueDriver;