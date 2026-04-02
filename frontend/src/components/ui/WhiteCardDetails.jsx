import React from "react";


const WhiteCardDetails = ({ title, description, pos, icon, index, hoveredIndex, setHoveredIndex }) => {

    const isHovered = hoveredIndex === index;

    return (
        <div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="h-[250px] w-[500px] bg-white rounded-4xl group cursor-default">
            <div className="p-5 flex flex-col justify-center gap-5 relative overflow-hidden">
                <div className={`${isHovered ? "group-hover:bg-black" : "bg-gray-200"} transition h-20 w-20 rounded-4xl flex justify-center items-center`}>
                    {React.cloneElement(icon, {
                        color: isHovered ? "#fff" : "#000"
                    })}
                </div>

                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-400">{description}</p>
                <h1 className="absolute -bottom-10 right-0 text-[150px] group-hover:-rotate-12 transition-all group-hover:opacity-10 duration-500 font-bold group-hover:scale-[1.1] opacity-2">{pos}</h1>
            </div>
        </div>
    )
}

export default WhiteCardDetails