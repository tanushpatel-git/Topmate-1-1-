import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PricingCards() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);
  
  return (
    <div className="h-[70vh] lg:h-[40vh] flex items-center justify-center bg-[#D6EBC6] p-4 sm:p-6">

      <div ref={cardsRef} className="flex flex-row flex-wrap lg:flex-nowrap gap-6 max-w-6xl w-full justify-center lg:justify-items-center mt-[10rem]">
        
        {/* Card 1 */}
        <div ref={cardsRef} className="bg-[#FDFDFF] rounded-2xl shadow-lg px-6 sm:px-10 py-8 sm:py-10 relative w-full lg:max-w-[340px] h-auto lg:h-[380px] overflow-hidden" >
          <div className="absolute top-4 right-4">
            <svg width="58" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="#a855f7"/>
            </svg>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-700">10%</h2>
          <p className="mt-4 sm:mt-6 text-gray-500 text-lg sm:text-xl lg:text-2xl">
            on every sale made through your <span className="font-semibold">profile</span> or link.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FDFDFF] rounded-2xl shadow-lg px-6 sm:px-10 py-8 sm:py-10 relative w-full lg:max-w-[340px] h-auto lg:h-[380px] overflow-hidden">
          <div className="absolute top-4 right-4">
            <svg width="64" height="64" viewBox="0 0 24 24" className="filter drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]">
              <defs>
                <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f7e755" />
                  <stop offset="25%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="75%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#235f26" />
                </linearGradient>
              </defs>
              <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="url(#gradPurple)"/>
            </svg>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-700">20%</h2>
          <p className="mt-4 sm:mt-6 text-gray-500 text-lg sm:text-xl lg:text-2xl">
            Charged per transaction when new customers buy from you through our <span className="font-semibold">marketplace</span>.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#FDFDFF] rounded-2xl shadow-lg p-6 relative w-full lg:max-w-[340px] h-auto lg:h-[380px] flex flex-col justify-between overflow-hidden">
          <div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-gray-700">Custom</h2>
            <p className="mt-4 sm:mt-6 text-gray-500 text-lg sm:text-xl lg:text-2xl">
              Making ₹10L+ / $20k+ each month?
              <br /> Let's create something just for you
            </p>
          </div>

          <button className="mt-4 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition w-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}