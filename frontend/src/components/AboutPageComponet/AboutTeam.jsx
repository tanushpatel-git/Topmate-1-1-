import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "../../assets/about-team.png";

const topTeam = [
  {
    name: "Nikesh Parte",
    role: "Software Engineer / Tech",
    img: Image,
  },
  {
    name: "Tanush Patel",
    role: "Software Engineer / Tech",
    img: Image,
  },
];

export default function AboutTeam() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);
  const blobRef = useRef();
  const svgRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1 });

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 0.8 }
    );

    gsap.to(".floating-svg-1", { y: 40, duration: 4, repeat: -1, yoyo: true });
    gsap.to(".floating-svg-2", { y: -30, x: 20, rotation: 45, duration: 6, repeat: -1, yoyo: true });
    gsap.to(".floating-svg-3", { y: 50, rotation: -30, duration: 5, repeat: -1, yoyo: true });

    const moveBlob = (e) => {
      gsap.to(blobRef.current, {
        x: e.clientX - 150,
        y: e.clientY - 150,
        duration: 0.5,
      });

      svgRefs.current.forEach((el, i) => {
        const speed = (i + 1) * 0.02;
        gsap.to(el, {
          x: (e.clientX - window.innerWidth / 2) * speed,
          y: (e.clientY - window.innerHeight / 2) * speed,
          duration: 0.5,
        });
      });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      svgRefs.current.forEach((el, i) => {
        gsap.to(el, {
          y: scrollY * (0.05 + i * 0.02),
          duration: 0.5,
        });
      });
    };

    window.addEventListener("mousemove", moveBlob);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", moveBlob);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 12;
    const rotateY = (x / rect.width - 0.5) * 12;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.3,
    });
  };

  const resetTilt = (index) => {
    gsap.to(cardsRef.current[index], {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
    });
  };

  return (
    <div ref={sectionRef} className="relative w-full min-h-[80dvh] bg-[#f5f7fb] overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200"></div>

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      ></div>

      <div
        ref={blobRef}
        className="pointer-events-none fixed w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-orange-300/30 blur-[120px] rounded-full z-0"
      ></div>
<svg
  ref={(el) => (svgRefs.current[0] = el)}
  className="absolute top-10 left-6 md:top-20 md:left-20 opacity-80"
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#f97316" />
      <stop offset="100%" stopColor="#fb923c" />
    </linearGradient>
  </defs>

  <circle
    cx="60"
    cy="60"
    r="50"
    stroke="url(#grad1)"
    strokeWidth="3"
    fill="none"
  />
</svg>

<svg
  ref={(el) => (svgRefs.current[1] = el)}
  className="absolute top-[40%] left-[5%] md:left-[10%] opacity-70"
>
  <defs>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#6b7280" />
      <stop offset="100%" stopColor="#9ca3af" />
    </linearGradient>
  </defs>

  <rect
    width="80"
    height="80"
    stroke="url(#grad2)"
    strokeWidth="3"
    fill="none"
  />
</svg>

<svg
  ref={(el) => (svgRefs.current[2] = el)}
  className="absolute bottom-10 right-6 md:bottom-20 md:right-20 opacity-80"
>
  <defs>
    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#f97316" />
      <stop offset="100%" stopColor="#fdba74" />
    </linearGradient>
  </defs>

  <polygon
    points="50,10 90,90 10,90"
    stroke="url(#grad3)"
    strokeWidth="3"
    fill="none"
  />
</svg>


      <div className="relative flex flex-col lg:flex-row px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-20">

        <div className="w-full lg:w-[25%] mb-10">
          <h1 className=" text-[50px] sm:text-[70px] md:text-[100px] lg:text-[120px] font-extrabold text-black/10 leading-none">
            TEAM
          </h1>
        </div>

        <div className="w-full lg:w-[75%]">
          <div className="mb-10 md:mb-12">
            <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Meet Our <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-gray-600 mt-2 text-2xl text-sm sm:text-base">
              A group of passionate individuals building amazing things.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {topTeam.map((member, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => resetTilt(i)}
                className="relative w-full aspect-[3/4] sm:h-[340px] md:h-[380px] lg:h-[400px] rounded-3xl overflow-hidden backdrop-blur-md sm:backdrop-blur-xl bg-white/50 border border-white/60 shadow-lg"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top sm:object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-10">
                  <h3 className=" text-xl text-white sm:text-xl font-semibold drop-shadow-md">
                    {member.name}
                  </h3>
                  <p className="text-gray-200 text-md sm:text-xl font-medium drop-shadow-md">
                    {member.role}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}