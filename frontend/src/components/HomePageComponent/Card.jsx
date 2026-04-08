import React from 'react'
const Card = ({ data }) => {
  const { img, name, role, desc, color } = data;

  return (
    <div className="relative rounded-xl overflow-hidden w-[260px] h-[230px] bg-white mb-10  shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300  bg-black">

      {/* IMAGE */}
      <img src={img} alt={name} className="w-full h-[70%] object-cover" />

      {/* OVERLAY */}
      <div className={`absolute top-0 left-0 w-full h-[70%] ${color}`} />

      {/* ROLE TAG */}
      <div className="absolute bottom-[35%] right-2 hover:scale-110 transition">
        <span className="bg-white/80 px-3 py-1 text-xs rounded-full">
          {role}
        </span>
      </div>

      {/* TEXT */}
      <div className="absolute bottom-0 h-[30%] bg-white w-full px-3 py-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>

    </div>
  );
};

export default Card;