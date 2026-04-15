
import React  from "react";
import loopdesktop from '../../assets/loopdesktop-img.svg'
import loopMobile from '../../assets/loopmobile_img.svg'


const userdata ={
    username :"nikesh ",
}
const CreatorHome =()=>{

return (

    <div className="w-full h-[100%] " >


 <nav className="hidden md:flex w-full border-b border-gray-300 bg-white px-4 md:px-8 py-4 items-center  flex justify-between">
<div>

  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 ml-2 md:ml-10">
   Hi,{userdata.username}
  </h1>
</div>
<div>
   <img src="" alt="" /> 
<h1> url profile</h1>

</div>


</nav>

<div className=" px-10 w-full sm:w-[85%] md:w-[85%] lg:w-[85%] xl:w-[70%] flex flex-col">

        <div className="relative w-full  mb-20 overflow-hidden mt-6 sm:mt-10">

          {/* DESKTOP IMAGE (sm and above same UI) */}
          <img
            src={loopdesktop}
            alt="Hero Section"
            className="hidden xl:block w-full h-auto object-cover rounded-xl"
          />

          {/* MOBILE IMAGE */}
          <img
            src={loopMobile}
            alt="Hero Mobile"
            className="block xl:hidden w-full h-auto object-cover rounded-xl"
          />

          {/* BUTTONS */}
          <div className="
            absolute  font-bold
            bottom-3 sm:bottom-6
            left-1/2 -translate-x-1/2 
            sm:left-10 sm:translate-x-0
            flex flex-col sm:flex-row 
            gap-3 sm:gap-4 
            w-[90%] sm:w-auto
          ">

            <button className="
              bg-white px-6  py-3 sm:px-4 rounded-lg 
              transition transform hover:scale-105 duration-300 
              text-sm sm:text-base w-full sm:w-auto
            ">
             Join waitlist
            </button>

            <button className=" 
              border-2 border-[#b09869] text-white 
              px-3 py-2 sm:px-4 rounded-lg 
              transition transform hover:scale-105 duration-300 
              text-sm sm:text-base w-full sm:w-auto

            ">
              follow for updates
            </button>
          </div>
        </div>
      </div>

<div className="index bg-amber-300 flex-1 h-[40vh]">  
<h1> indexing div</h1>


</div>

</div>

)
;
}


export default CreatorHome ;