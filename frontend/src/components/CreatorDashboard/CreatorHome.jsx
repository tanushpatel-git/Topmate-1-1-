
import React  from "react";
import loopdesktop from '../../assets/loopdesktop-img.svg'
import loopMobile from '../../assets/loopmobile_img.svg'
import { useSelector } from "react-redux";
import { FiExternalLink, FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Profile from "./Profile";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { motion, AnimatePresence, steps } from "framer-motion";

const CreatorHome =()=>{

const userData = useSelector((state) => state.userData);
const navigate = useNavigate();
const [steps, setSteps] = useState([
  {
    id: 1,
    title: "Add availability",
    description: "Add your availability so your followers can select a slot",
    completed: false,
    location: "/creator-dashboard/calendar/setting",
  },
  {
    id: 2,
    title: "Complete your profile",
    description: "Add your profile pic and description",
    completed: false,
    location: "/creator-dashboard/profile",

  },
  {
    id: 3,
    title: "Create a service",
    description: "",
    completed: true,
    location :"/creator-dashboard/services/one-to-one/create"
  },
]);


const markComplete = (id) => {
  setSteps((prev) =>
    prev.map((step) =>
      step.id === id ? { ...step, completed: true } : step
    )
  );
};

const markIncomplete = (id) => {
  setSteps((prev) =>
    prev.map((step) =>
      step.id === id ? { ...step, completed: false } : step
    )
  );
};

  const [openStep, setOpenStep] = useState(1);

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };



return (
    <div className="w-full h-[100%] " >
 <nav className="hidden md:flex w-full border-b border-gray-300 bg-white px-4 md:px-8 py-4 items-center  flex justify-between">
<div>

  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 ml-2 md:ml-10">
  Hi,{userData.firstName} 
  </h1>
</div>
<div className="flex items-center gap-2" >
   <div  className="flex items-center gap-2 h-11 border-1 border-[#b08969ff] rounded-lg px-2 cursor-pointer" >

   <img  src={userData.userImage} alt=""  className="h-10 w-12 object-cover rounded-full"/> 
   <p className="text-sm font-medium">{userData.profilerUrl || 'Profile URL' }</p>
   <FiExternalLink size={20} color="#b08969ff" className="cursor-pointer " onClick={()=>navigate('/profile')} />
   </div>
<div className="flex items-center gap-2 h-11 border-1 border-[#b08969ff] rounded-lg px-2 cursor-pointer">
      <FiCopy size={20}  color="#b08969ff" onClick={() => navigate('/Profile')}  />
</div>
</div>

</nav>

<div className="min-300px bg-gray-100 flex  items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold">Make the page yours!</h1>
          <p className="text-sm text-gray-500">
            Unlock the potential of your topmate page
          </p>

          {/* Progress bar */}
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-green-600"></div>
          </div>
        </div>

        {/* Steps */}
        <div className="divide-y">
          {steps.map((step) => {
            const isOpen = openStep === step.id;

            return (
              <div key={step.id} className="py-4">

                {/* Header Row */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleStep(step.id)}
                >
                  <div className="flex items-center gap-3">

                    {/* Status Icon */}
                    {step.completed ? (
                      <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white">
                        <Check size={12} />
                      </div>
                    ) : (
                      <div className="w-5 h-5 border rounded-full"></div>
                    )}

                    <span className="font-medium">{step.title}

                    </span>
                  </div>

                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>

                {/* Expand Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pl-8">
                        {step.description && (
                          <p className="text-sm text-gray-500 mb-3">
                            {step.description}
                          </p>
                        )}

                          <div className="flex items-center gap-2">

                            <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium" onClick={() => navigate(step.location)}>
                              {step.title}
                            </button>

                            <button className={`w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center hover:bg-black hover:text-white  ${step.completed ? 'bg-green-600 text-white' : ''} `} onClick={() => markComplete(step.id)} >
                              ✓
                            </button>

                            <button className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center hover:bg-black hover:text-white" onClick={() => markIncomplete(step.id)}>
                              ✕
                            </button>
                          </div>
                    
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>
      </div>
    </div>

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