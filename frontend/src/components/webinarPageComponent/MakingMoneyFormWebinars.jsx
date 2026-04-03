import React,{useState} from "react";
import {Gift, Repeat, Layers, Tags} from 'lucide-react';
import WhiteCardDetails from "../ui/WhiteCardDetails";

const MakingMoneyFormWebinars = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <section className="bg-[#F7F7F2] text-black py-24 px-6 min-h-screen">
            <h1 className="text-center text-9xl md:text-6xl font-bold mb-16">
                Four ways to make money from one webinar
            </h1>
            <div className="w-full flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center w-[80%] h-full">
                    <WhiteCardDetails
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    index={0}
                    title="Free Webinar + Backend Upsell"
                    description="Run a free session, pitch your course or package at the end."
                    pos="01"
                    icon={<Gift size={45} strokeWidth={1} className="group-hover:scale-[1.1] transition-all duration-500" />}
                    />
                    <WhiteCardDetails
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    title="Paid Attendance"
                    index={1}
                    description="Charge per seat. Cap registration to create scarcity and urgency."
                    pos="02"
                    icon={<Tags size={45} strokeWidth={1} className="group-hover:scale-[1.1] transition-all duration-500" />}
                    />
                    <WhiteCardDetails
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    index={2}
                    title="Replay Sales"
                    description="Sell the recording to people who missed the live session — indefinitely."
                    pos="03"
                    icon={<Repeat size={45}  strokeWidth={1} className="group-hover:scale-[1.1] transition-all duration-500" />}
                    />
                    <WhiteCardDetails
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    index={3}
                    title="Cohort Foundation"
                    description="Use a webinar series as the backbone of a multi-week cohort."
                    pos="04"
                    icon={<Layers size={45} strokeWidth={1} className="group-hover:scale-[1.1] transition-all duration-500" />}
                    />
                </div>
            </div>
        </section>
    )
}

export default MakingMoneyFormWebinars