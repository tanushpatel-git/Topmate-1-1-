import { ArrowRight } from "lucide-react";
import eyeimg  from '../../assets/about-eye.svg'

export default function Aboutjourney() {
  return (
    <div className="h-[80vh] bg-[#d6bfd0] flex items-center px-6  md:px-20 py-20 relative ">
      
        
      <img 
  src={eyeimg} 
  alt="" 
  className="
    absolute 
    w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px]
    top-10 sm:top-16 md:top-20 
    left-1/2 lg:left-[65%] 
    -translate-x-1/2 lg:translate-x-0
    opacity-80
    pointer-events-none
  " 
/>


      <div className="flex flex-col md:flex-row justify-center w-full items-center gap-10  ">
        

        {/* LEFT SIDE */}
        <div className="max-w-xl w-full     ">
          

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-10">
            On a journey where <br />
            we all win together
          </h1>

          {/* Button */}
   <button className="group bg-white flex items-center justify-between gap-4 
px-8 sm:px-12 md:px-16 lg:px-20 
py-3 sm:py-4 
rounded-xl w-full sm:w-auto 
border-2 border-black 
hover:bg-black hover:text-white 
hover:shadow-xl transition-all duration-300">

  <span className="font-semibold text-black group-hover:text-white text-base sm:text-lg">
    Start today
  </span>

  <ArrowRight size={20} className="group-hover:text-white" />
</button>


        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-md text-gray-800 text-base leading-relaxed text-xl">
          We believe everyone has something to share. That's why Topmate empowers
          you to be able to share your knowledge with your followers - in the most
          authentic forms of human connection. Our mission is to help you make a
          living doing what you love
        </div>

      </div>
    </div>
  );
}