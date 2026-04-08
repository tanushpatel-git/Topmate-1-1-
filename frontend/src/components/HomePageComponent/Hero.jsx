import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Card from "./Card";


import p1 from '../../assets/person1.jpg'
import p2 from '../../assets/person2.jpg'
import p3 from '../../assets/person3.jpg'
import p4 from '../../assets/perosn4.jpg'
import p5 from '../../assets/person5.jpg'
import p6 from '../../assets/person6.jpg'
import p7 from '../../assets/person7.jpg'
import p8 from '../../assets/person8.jpg'
import p9 from '../../assets/person9.jpg'
import p10 from '../../assets/person10.jpg'

const cards = [
  { img: p1, name: "Rahul Sharma", role: "Designer", desc: "Creative designer. Loves clean UI.", color: "bg-orange-400/40" },
  { img: p2, name: "Pooja Verma", role: "Developer", desc: "Full stack dev. Builds apps.", color: "bg-cyan-400/40" },
  { img: p3, name: "Nikesh Singh", role: "Mentor", desc: "Career mentor. Guides students.", color: "bg-emerald-400/40" },
  { img: p4, name: "Nikita Gupta", role: "Founder", desc: "Startup founder. Builds ideas.", color: "bg-lime-400/40" },
  { img: p5, name: "Tanush Patel", role: "Marketer", desc: "Digital marketer. Grows brands.", color: "bg-cyan-500/40" },
  { img: p6, name: "Nikesh Parte", role: "Engineer", desc: "Software engineer. Builds systems.", color: "bg-pink-400/40" },
  { img: p7, name: "Anjali Roy", role: "Designer", desc: "Graphic designer. Loves visuals.", color: "bg-indigo-400/40" },
  { img: p8, name: "Vikas Yadav", role: "Developer", desc: "Backend dev. Handles APIs.", color: "bg-cyan-400/40" },
  { img: p9, name: "Priya Nair", role: "Designer", desc: "UI designer. Focus on UX.", color: "bg-cyan-400/40" },
  { img: p10, name: "Rohit Kumar", role: "Tech", desc: "Tech lover. Builds projects.", color: "bg-cyan-400/40" },
];


const cards2 = [

  { img: p7, name: "Anjali Roy", role: "Designer", desc: "Graphic designer. Loves visuals.", color: "bg-indigo-400/40" },
  { img: p8, name: "Vikas Yadav", role: "Developer", desc: "Backend dev. Handles APIs.", color: "bg-cyan-400/40" },
  { img: p9, name: "Priya Nair", role: "Designer", desc: "UI designer. Focus on UX.", color: "bg-cyan-400/40" },
  { img: p10, name: "Rohit Kumar", role: "Tech", desc: "Tech lover. Builds projects.", color: "bg-cyan-400/40" },
  { img: p1, name: "Rahul Sharma", role: "Designer", desc: "Creative designer. Loves clean UI.", color: "bg-orange-400/40" },
  { img: p2, name: "Pooja Verma", role: "Developer", desc: "Full stack dev. Builds apps.", color: "bg-cyan-400/40" },
  { img: p3, name: "Nikesh Singh", role: "Mentor", desc: "Career mentor. Guides students.", color: "bg-emerald-400/40" },
  { img: p4, name: "Nikita Gupta", role: "Founder", desc: "Startup founder. Builds ideas.", color: "bg-lime-400/40" },
  { img: p5, name: "Tanush Patel", role: "Marketer", desc: "Digital marketer. Grows brands.", color: "bg-cyan-500/40" },
  { img: p6, name: "Nikesh Parte", role: "Engineer", desc: "Software engineer. Builds systems.", color: "bg-pink-400/40" },
];

const loopData = [...cards, ...cards, ...cards2,];
const loopData2 = [...cards2.slice(0, 5), ...cards2, ...cards2.slice(5)];

const Hero = () => {
  const scrollRef1 = useRef();
  const scrollRef2 = useRef();
  const textanime = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(scrollRef1.current, {
        y: "-100%",
        duration: 120,
        ease: "linear",
        repeat: -1,
        modifiers: {
          y: gsap.utils.unitize(y => parseFloat(y) % 100), // resets loop seamlessly
        },
      });

      gsap.fromTo(
        scrollRef2.current,
        { y: "-50%" },
        {
          y: "0%",
          duration: 40,
          ease: "linear",
          repeat: -1,
        }
      );


      gsap.fromTo(
        textanime.current,
        { xPercent: -50, opacity: 0 },
        {
          xPercent: 0,
          delay: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        }
      );
    });

    return () => ctx.revert();
  }, []);


  return (

    <div className="bg-[#FFE4D6] w-full min-h-[60vh] md:h-[80vh] py-8 sm:py-10 md:py-0 flex flex-row items-center justify-center gap-[5px] px-4">
      {/* LEFT SIDE */}
      <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12  xl:pl-66    "  >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl text-gray-900 leading-snug break-words" ref={textanime} >
          Your All-in-One <br /> Creator{" "}
          <span className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl">
            Storefront
          </span>
        </h1>

        <p className="mt-4 sm:mt-5 md:mt-6 text-1xl sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold text-black max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl break-words">
          Make money from your content. Sell products, host sessions, and grow your business — all from a single link.
        </p>

        {/* BUTTON + STATS */}
        <div className="mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-6 items-center">
          <button className="bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl flex items-center gap-2 sm:gap-3 md:gap-4 hover:scale-105 transition">
            <span className="text-base sm:text-lg md:text-xl font-bold">Start My Page</span>
            <span className="bg-white text-black px-2 py-1 rounded-md flex items-center justify-center ml-2 sm:ml-3 md:ml-5">
              →
            </span>
          </button>

          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
            <div className="border border-gray-300 px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-xl text-sm sm:text-base md:text-lg text-center hover:scale-105 transition">
              100k+ ⭐⭐⭐⭐⭐ reviews
            </div>
            <div className="border border-gray-300 px-3 sm:px-4 md:px-5 py-1 sm:py-2 md:py-3 rounded-xl text-sm sm:text-base md:text-lg text-center hover:scale-105 transition">
              1mn+ professionals
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-1 overflow-hidden flex gap-10 h-full items-start lg:flex hidden">
        <div ref={scrollRef1} className="flex flex-col gap-4">
          {loopData.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>

        <div ref={scrollRef2} className="flex flex-col gap-4">
          {loopData2.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>);
};

export default Hero;