
import { useEffect, useRef , useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import img1 from '../../assets/hero3_img1.jpg'
import img2 from '../../assets/hero3_img2.jpg'
import img3 from '../../assets/hero3_img3.jpg'
import img4 from '../../assets/hero3_img4.jpg'
import img5 from '../../assets/hero3_img5.jpg'
import img6 from '../../assets/hero3_img6.jpg'

const data = [
  {
    img: img2,
    title: "Offer 1:1 sessions",
    desc: "Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else",
  },
  {
    img: img3,
    title: "Setup Priority DM in seconds",
    desc: "Let your followers ask text based Priority DM. Then answer as per your convenience",
  },
  {
    img: img4,
    title: "Host a webinar",
    desc: "Connect with 100s of followers at once. Classes, group calls, workshops - do them all.",
  },
  {
    img: img5,
    title: "Bundle your services",
    desc: "Create packages of all your services. Perfect for high-ticket and long term engagement.",
  },
  {
    img: img6,
    title: "Sell courses & products",
    desc: "Sell courses, exclusive content, guides, ebooks, templates and everything else. Start earning passively",
  },
];

const Hero3 = () => {



const [activeIndex, setActiveIndex] = useState(0);
const [image, setImage] = useState(data[0].img);

const topRef = useRef(null);
const bottomRef = useRef(null);
gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  if (!topRef.current || !bottomRef.current) return;

  const ctx = gsap.context(() => {

    gsap.from(topRef.current, {
      y: 150,     
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: topRef.current,
        start: "top 85%",
        end: "top 40%",
        scrub: 1, 
      
      },
    });

    gsap.from(bottomRef.current, {
      y: 150,
      opacity:0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bottomRef.current,
        start: "top 85%",
        end: "top 40%",
        scrub: 1,
      
      },
    });

  });

  return () => ctx.revert();
}, []);

  return (
    <div className='w-full min-h-[100vh] bg-[#FFFFFF] flex flex-col justify-center px-5 sm:px-10 lg:px-20 xl:px-40 2xl:px-60 py-16'>

      {/* TOP SECTION */}
      <div className="main w-full flex flex-col xl:flex-row gap-10" ref={topRef} >

        {/* LEFT TEXT */}
        <div className="child1 flex-1 "  >
          <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-6 text-[#3C3C3C] font-semibold'>
            Create your <br />
            Topmate page in a <br />
            <span className='text-[#DE7E47]'>flash</span>
          </h1>

          <p className='text-lg sm:text-xl mt-6'>
            Start earning $$ by the time you finish reading our website
          </p>

          <p className='text-lg sm:text-xl mt-6 w-fit border-b'>
            Launch your page ↗️
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={img1}
            alt="hero"
            className="w-full max-w-[500px] h-auto object-contain rounded-xl"
          />
        </div>
      </div>


<div className="child2 w-full flex flex-col xl:flex-row gap-10 mt-10"  ref={bottomRef} >

  {/* LEFT IMAGE (Show only ≥ lg) */}
  <div className="imgdiv hidden lg:flex flex-1 justify-center items-center">
    <img
      key={image}
      src={image}
      alt="hero"
      className="w-full  max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] h-auto object-contain rounded-xl transition-all duration-500"
    />
  </div>

  {/* RIGHT ACCORDION */}
  <div className="flex-1 flex flex-col justify-center px-2 sm:px-5 mt-10 xl:px-10" >

    {data.map((item, index) => (
      <div key={index} className="border-b py-5 cursor-pointer">

        {/* HEADER */}
        <div
          className="flex justify-between items-center"
          onClick={() => {
            setActiveIndex(prev => prev === index ? null : index);
            setImage(item.img);
          }}
        >
          <div className="flex gap-5 items-center">
            <span className="text-[#DE7E47] text-lg">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-[#3C3C3C]">
              {item.title}
            </h2>
          </div>

          <span
            className={`text-[#DE7E47] text-xl transition-transform duration-300 ${
              activeIndex === index ? "rotate-180" : ""
            }`}
          >
            ⌄
          </span>
        </div>

        {/* CONTENT */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            activeIndex === index
              ? "max-h-40 opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-base sm:text-lg xl:text-xl text-black ml-8 sm:ml-12">
            {item.desc}
          </p>
        </div>

        {/* IMAGE for < lg screens */}
        <div className="block lg:hidden mt-4">
          {activeIndex === index && (
            <img
              src={item.img}
              alt=""
              className="w-full max-w-[300px] sm:max-w-[350px] mx-auto h-auto rounded-xl transition-all duration-500"
            />
          )}
        </div>

      </div>
    ))}

  </div>
</div>

    </div>
  );
};

export default Hero3;
      // current code is good do not change help build this page responsive for all screen sizes   main div child1 is currently is flex-col  it can we change lessthan 1400 px row 