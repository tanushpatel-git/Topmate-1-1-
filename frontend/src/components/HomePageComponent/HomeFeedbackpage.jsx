import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const testimonials = [
    {
        text: "Love the integrations with Calendar, Zoom and WhatsApp. Makes my life easier!",
        name: "Aishwarya Srinivasan",
        role: "LinkedIn Top Voice",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        text: "The entire experience is just so seamless. My followers love it",
        name: "Joerg Storm",
        role: "300K on LinkedIn",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        text: "Topmate is my go-to platform for scheduling 1:1 sessions and hosting webinars!",
        name: "Xinran Waibel",
        role: "Founder of Data Engineer Things",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        text: "All my monetisation now happens in one place",
        name: "Payal & Gaurav",
        role: "110K+ on Instagram",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        text: "The team is extremely helpful and cares a lot about feedback. They keep rolling out new features too!",
        name: "Lorraine Lee",
        role: "Speaker, 320K on LinkedIn",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        text: "I love Topmate! It has made it seamless to schedule mentoring sessions!",
        name: "Jessica",
        role: "Global Data Lead",
        img: "https://randomuser.me/api/portraits/women/50.jpg",
    },
];

const HomeFeedbackpage = () => {
    const scrollRef = useRef();
    const [active, setActive] = useState(0);


    const handleScroll = () => {
        const scrollLeft = scrollRef.current.scrollLeft;
        const width = scrollRef.current.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setActive(index);
    };

    const groupedTestimonials = [];
    for (let i = 0; i < testimonials.length; i += 2) {
        groupedTestimonials.push(testimonials.slice(i, i + 2));
    }




    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".testimonial-card", {
                y: 80,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testimonial-card",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#123c3c] py-16 px-4 " >
            <h2 className="text-white text-3xl md:text-5xl font-semibold text-center mb-10">
                Don't Just Take Our Word for It
            </h2>


            <div className="md:hidden "  >
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-4"
                >
                    {groupedTestimonials.map((group, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-full snap-center flex flex-col gap-4 mr-10"
                        >
                            {group.map((item, i) => (
                                <div
                                    key={i}
                                    className="testimonial-card relative bg-gray-200 rounded-[30px] p-6 min-h-[220px] flex flex-col justify-between"
                                >

                                    {/* 🔥 SVG Quote Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-5 left-5 w-8 h-8 text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.17 6A5.001 5.001 0 0 0 2 11v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H6.09A3.001 3.001 0 0 1 9 6h-1.83zm10 0A5.001 5.001 0 0 0 12 11v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1.91A3.001 3.001 0 0 1 19 6h-1.83z" />
                                    </svg>

                                    {/* 🔹 Text (add padding-top so it doesn't overlap SVG) */}
                                    <p className="text-gray-700 mb-6 text-base leading-relaxed pt-6">
                                        “{item.text}”
                                    </p>

                                    {/* 🔹 Profile */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.img}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <h4 className="text-base font-semibold">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* 🔹 Dots = number of groups */}
                <div className="flex justify-center mt-4 gap-2">
                    {groupedTestimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${active === index ? "bg-black" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>


            {/* 🔹 Desktop Grid */}
            <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto" >

                {testimonials.map((item, index) => (
                    <div key={index} className=" testimonial-card  bg-gray-200 rounded-[30px] p-6 min-h-[220px] flex flex-col justify-between"  >

                        {/* SVG Quote */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-400 mb-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.17 6A5.001 5.001 0 0 0 2 11v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H6.09A3.001 3.001 0 0 1 9 6h-1.83zm10 0A5.001 5.001 0 0 0 12 11v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1.91A3.001 3.001 0 0 1 19 6h-1.83z" />
                        </svg>

                        <p className="text-gray-700 mb-6 text-base leading-relaxed">
                            “{item.text}”
                        </p>

                        <div className="flex items-center gap-4">
                            <img src={item.img} className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="text-base font-semibold">{item.name}</h4>
                                <p className="text-sm text-gray-500">{item.role}</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default HomeFeedbackpage;