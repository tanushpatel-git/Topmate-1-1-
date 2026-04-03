import { Calendar, Repeat, Share2, Zap } from "lucide-react";
import BlackCardDetail from "../ui/BlackCardDetail";

const GetStartWithFiveStep = () => {
    return (
        <div className="min-h-screen w-full bg-black">
            <div className="pb-20">
                <div className="w-full flex justify-center items-center pt-20">
                    <span className="text-5xl font-bold text-white">Get Started with</span>
                    <span className="text-5xl ml-2 font-bold text-gray-500">5 simple steps</span>
                </div>

                <div className="w-full flex justify-center mt-10">
                    <div className="grid grid-cols-2 gap-6 place-items-center">

                        <BlackCardDetail
                            title="Create your event"
                            step="STEP 01"
                            description="Set the date, write the description, and choose live-only, replay-only, or both."
                            pos="1"
                            icon={<div className="h-15 w-35 bg-white/10 flex gap-2 justify-center items-center rounded-2xl transition-all duration-300 ease-in-out">
                                <Calendar size={30} className="text-white" />
                                <div className="flex flex-col gap-2 justify-center items-start">
                                    <div className="bg-white/15 h-2 w-14 rounded-full"></div>
                                    <div className="bg-white/15 h-2 w-20 rounded-full"></div>
                                </div>
                            </div>}
                        />
                        <BlackCardDetail
                            title="Set your price"
                            step="STEP 02"
                            description="Charge for the live session, the replay, or both."
                            pos="2"
                            icon={<div className="h-45 w-55 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out">
                                <div className="h-10 w-25 rounded-full bg-white text-black flex justify-center items-center">
                                    <h1 className="font-bold text-lg">₹999</h1>
                                </div>
                                <div className="h-7 w-25 rounded-full bg-black border-[0.5px] border-white/30 text-gray-500 flex justify-center text-center items-center">
                                    <h1 className="font-light text-sm">Replay : ₹499</h1>
                                </div>

                            </div>}
                        />
                        <BlackCardDetail
                            title="Share your link"
                            step="STEP 03"
                            description="One registration link you can share anywhere."
                            pos="3"
                            icon={<div className="h-45 w-65 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out">
                                <div className="h-10 w-full rounded-2xl border gap-2 border-white/35 text-white bg-white/15 flex justify-center items-center">
                                    <h1 className="font-light text-sm">topmate.io/tanush/w/1</h1>
                                    <Share2 size={20} className="text-gray-400" />
                                </div>
                                <div className="h-10 w-full flex justify-center gap-5 items-center">
                                    <div className="flex justify-center items-center h-6 w-6 text-gray-400 rounded-lg bg-white/35">
                                        <h1 className="font-bold text-sm m-2">IG</h1>
                                    </div>
                                    <div className="flex justify-center items-center h-6 w-6 text-gray-400 rounded-lg bg-white/35">
                                        <h1 className="font-bold text-sm m-2">LI</h1>
                                    </div>
                                    <div className="flex justify-center items-center h-6 w-6 text-gray-400 rounded-lg bg-white/35">
                                        <h1 className="font-bold text-sm m-2">TW</h1>
                                    </div>
                                </div>

                            </div>}
                        />
                        <BlackCardDetail
                            title="Go Live"
                            step="STEP 04"
                            description="Join on Zoom. Recording starts automatically and Topmate tracks attendance."
                            pos="4"
                            icon={<div className="flex flex-col justify-center items-center gap-2">
                                <div className="h-15 w-15 rounded-full bg-[#E44A33] flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out">
                                    <Zap size={30} className="text-white" />
                                </div>
                                <h1 className="text-center text-gray-400 font-medium font-sans text-md">+2.4k</h1>
                            </div>}
                        />
                        <BlackCardDetail
                            addativeClassName="col-span-2 mx-auto"
                            title="Sell replays"
                            step="STEP 05"
                            description="The recording is automatically packaged and listed for sale after the event."
                            pos="5"
                            icon={<div className="h-45 w-30 flex flex-col justify-center items-center relative">
                                <div className="h-11 w-11 rounded-2xl bg-gray-600"></div>
                                <div className="h-12 w-12 rounded-2xl bg-gray-500 mt-1"></div>
                                <div className="h-14 w-14 rounded-2xl bg-white flex justify-center items-center">
                                    <Repeat size={30} className="text-black" />
                                </div>
                                <div className="absolute bottom-2 right-2 h-6 w-10 bg-green-500 rounded-lg text-white flex justify-center items-center">
                                    <h1 className="text-xs font-bold">Auto</h1>
                                </div>
                            </div>}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStartWithFiveStep;
