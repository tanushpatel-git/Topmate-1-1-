import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/commonCompo/Navbar";

const tags = [
  "Get Job Referral",
  "Resume Review",
  "Mock Interview",
  "Switch Careers",
  "LinkedIn Optimization",
  "Startup Guidance",
  "Tech Interview Prep",
  "Portfolio Review",
  "Salary Negotiation",
  "Side Business Ideas",
];

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const numParticles = 40;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    let mouse = { x: null, y: null };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // subtle mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          p.x += dx * 0.0005;
          p.y += dy * 0.0005;
        }

        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-[#0D0D0D]"
    />
  );
};

const Search = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4">
        <ParticleBackground />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl"
        >
          <h1 className="text-7xl font-light ">
            Find the Right Expert. <span className="font-semibold font-sans">Instantly.</span>
          </h1>

          <p className="mt-4 text-gray-400 text-2xl">
            Tell us what you need—our AI will find the right consultant, coach, or creator for you.
          </p>

          {/* Search Bar */}
          <div className="mt-8 hover:border hover:border-white hover:scale-[1.05] transition-all duration-300 flex items-center bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 shadow-lg">
            <input
              type="text"
              placeholder='Describe your requirements...'
              className="w-full bg-transparent outline-none text-sm sm:text-base placeholder:text-gray-500"
            />

            <button className="ml-3 bg-orange-500 hover:bg-orange-600 transition p-3 rounded-lg">
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 border bg-[#0D0D0D] border-white/30 rounded-xl text-sm text-gray-300 hover:text-white hover:border-white cursor-pointer hover:bg-white/10 transition"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Search;