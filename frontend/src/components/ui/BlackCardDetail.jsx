import React from "react";

const BlackCardDetail = ({ title, step, description, pos, icon, addativeClassName = "" }) => {

    return (
        <div className={`h-[370px] group relative cursor-default w-[500px] rounded-4xl flex justify-evenly items-center flex-col bg-black border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 ease-in-out overflow-hidden ${addativeClassName}`}>
            {icon}
            <div className="h-40 w-full flex ">
                <div className="m-5 flex flex-col justify-around items-start gap-3">
                    <div className="h-7 w-20 border border-white/10 bg-white/5 text-gray-300 rounded-4xl flex justify-center items-center">
                        <h1 className="font-extralight font-sans">{step}</h1>
                    </div>
                    <h1 className="text-3xl font-medium text-white">{title}</h1>
                    <p className="text-gray-400 text-sm">{description}</p>
                </div>
            </div>

            <h1 className="absolute -bottom-15 right-0 text-[200px] text-white group-hover:-rotate-10 transition-all group-hover:opacity-10 duration-500 font-bold group-hover:scale-[1.1] opacity-5">{pos}</h1>

        </div>
    )
}

export default BlackCardDetail