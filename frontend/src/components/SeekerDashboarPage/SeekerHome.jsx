import React, { useState } from "react";
import { FormIcon, icons, Search, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SeekerCard from "./SeekerCard";
import AddGoal from '../../assets/seeker-assets/add-goal.svg'
import goal1 from '../../assets/seeker-assets/goal-1.png'
import goal2 from '../../assets/seeker-assets/goal-2.png'
import goal3 from '../../assets/seeker-assets/goal-3.png'
import goal4 from '../../assets/seeker-assets/goal-4.png'
import goal6 from '../../assets/seeker-assets/goal-6.png'
import goal7 from '../../assets/seeker-assets/goal-7.png'
import goal8 from '../../assets/seeker-assets/goal-8.png'
import goal10 from '../../assets/seeker-assets/goal-10.png'

function SeekerHome() {

  const data = {
  software: {
    page_title: "Next in Your Dev Journey",
    description:
      "Pick a goal that fits your current stage — from interviews to tech stack decisions",

    cards: [
      {
        title: "Want to switch from service to product?",
        buttonText: "Book a transition strategy session",
        icon: goal1,
      },
      {
        title: "Get your resume reviewed for tech roles",
        buttonText: "Resume critique by software hiring managers",
        icon: goal3,
      },
      {
        title: "Have an upcoming coding interview?",
        buttonText: "Mock DSA/System Design interview ",
        icon: goal4,
      },
      {
        title: "Need help picking the right dev stack?",
        buttonText: "Tech stack roadmap session ",
        icon: goal8,
      },
      {
        title: "Have an Offer in hand?",
        buttonText: "Negotyaiate your salary confidently",
        icon: goal2,
      },
      {
        title: "Thinking about remote/global roles? ",
        buttonText: "Understand how to apply & stand out internationally",
        icon: goal10,
      },
    ],
  },

  data: {
    page_title: "Next in Your Data Journey",
    description: "Choose a goal to level up — from cracking interviews to building a strong portfolio",

    cards: [
      {
        title: "Don't know which data role fits you best?",
        buttonText: "Book a career clarity session",
        icon: goal2,
      },
      {
        title: "Resume not getting callbacks?",
        buttonText: "Get your resume reviewed for data roles",
        icon: goal3,
      },

      {
        title: "Preparing for SQL, case study, or ML interviews?",
        buttonText: "Book a mock data interview",
        icon: goal1,
      },
      {
        title: "Want to build a solid data portfolio?",
        buttonText: "Get guidance on project building",
        icon: goal4,
      },
      {
        title: "Struggling to crack product analytics roles?",
        buttonText: "Get mentoring on interview fremeworks",
        icon: goal8,
      },

      {
        title: "Got a job offer? Not sure if the comp is fair?",
        buttonText: "Talk to a senior on salary benchmarking",
        icon: goal7,
      },
      {
        title: "Want to apply abroad in the data field?",
        buttonText: "Explore your vise + job search strategy",
        icon: goal1,
      }
    ],
  },

  generic: {
    page_title: "Next in Your Career Journey",
    description: "Set a goal that moves you forward — from finding clarity to acing your next opportunity",

    cards: [
      {
        title: "Book a career exploration session",
        buttonText: "Book a career exploration session",
        icon: goal3,
      },
      {
        title: "Need help creating a strong first resume?",
        buttonText: "Resume review for freshers",
        icon: goal6,
      },
      {
        title: "Applied to a few jobs but no response?",
        buttonText: "Audit your job strategy ",
        icon: goal2,
      },
      {
        title: "Interview lined up? Nervous?",
        buttonText: "Do a mock interview with a real pro",
        icon: goal10,
      },
      {
        title: "Struggling with workplace communication?",
        buttonText: "Get help handling tough conversations ",
        icon: goal1,
      },
      {
        title: "Want to build a personal brand or portfolio?",
        buttonText: "Get started with Linkdin , github or Notion",
        icon: goal6,
      },
    ],
  },
};



const navigate = useNavigate();
const iconsList = [goal1, goal2, goal3, goal4, goal6, goal7, goal8, goal10];
const randomIcon =
iconsList[Math.floor(Math.random() * iconsList.length)];
const [showModal, setShowModal] = useState(false);
const [value , setvalue] = useState('Software');
const [Hopen , setHOpen ] =useState(false);
const [dataState, setDataState] = useState(data);
const [input, setInput] = useState("");
const section = dataState[value.toLowerCase()];



const handleAddGoal = () => {
  if (!input.trim()) return;

  const key = value.toLowerCase();

const newCard = {
  title: input,
  buttonText: "Get Started",
  icon: iconsList[Math.floor(Math.random() * iconsList.length)],
};

  setDataState((prev) => ({
    ...prev,
    [key]: {
      ...prev[key],
      cards: [newCard, ...prev[key].cards], // add on top
    },
  }));

  setInput(""); // clear input
};













  return (
    <div className="w-full h-[100%] " >
      
      {/* Navbar (scrolls normally) */}
      <nav className="hidden md:flex w-full border-b border-gray-300 bg-white px-4 md:px-8 py-4 items-center">

  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 ml-2 md:ml-10">
    Home
  </h1>

  <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-[40%] max-w-xl mx-auto">
    <Search className="w-5 h-5 mr-2 text-gray-500" />
    <input
      type="text"
      placeholder="Ask topmate AI or Search"
      className="bg-transparent outline-none w-full text-sm"
      onKeyDown={(e) => e.key === "Enter" && navigate("/search")}
    />
    <Send className="w-5 h-5 text-gray-500" />
  </div>

</nav>
     
     <div className="flex w-full">

  {/* LEFT CONTENT */}
<div className="w-full lg:w-[50%] p-4 border-r-2 border-gray-300">
  
 <div className="w-full flex justify-end gap-4 relative mt-5">

  {/* Add Goal (only <700px) */}
  <button
  onClick={() => setShowModal(true)}
  className="flex md:hidden items-center justify-center gap-2 w-1/2 px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
>
  <span className="text-lg font-bold">+</span>
  Add Goal
</button>


  {/* Dropdown Wrapper (IMPORTANT) */}
  <div className="relative w-1/2 md:w-[120px] ">

    {/* Dropdown Button */}
    <button
      onClick={() => setHOpen(!Hopen)}
      className="w-full  flex items-center justify-center gap-1 px-2  w-0 h-10 py-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
    >
      {/* Edit Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z" />
      </svg>

      <span>{value}</span>

      {/* Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill="currentColor"
        className={`w-4 h-4 transition-transform ${
          Hopen ? "rotate-180" : ""
        }`}
      >
        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
      </svg>
    </button>

    {/* Dropdown */}
    {Hopen && (
      <div className="absolute top-12 right-0 bg-white shadow-md rounded-lg p-2 w-40 z-10">
        <p
          onClick={() => {
            setvalue("Software");
            setHOpen(false);
          }}
          className="p-2 hover:bg-gray-100 cursor-pointer"
        >
          Software
        </p>

        <p
          onClick={() => {
            setvalue("Data");
            setHOpen(false);
          }}
          className="p-2 hover:bg-gray-100 cursor-pointer"
        >
          Data
        </p>

        <p
          onClick={() => {
            setvalue("Generic");
            setHOpen(false);
          }}
          className="p-2 hover:bg-gray-100 cursor-pointer"
        >
          Generic
        </p>
      </div>
    )}
  </div>
</div>

<div className="main-card h-[100%] w-[80%] mx-auto ">
<div className="flex items-center justify-center h-auto w-full   mt-10 ">
 <p className="h-10 w-10 bg-gray-100 border-2 border-gray-300 p-7 rounded-lg flex items-center justify-center text-3xl">
  {value.toLowerCase() === "software" ? "💻" : "📊" }
</p>
</div>

<div className=" w-full text-center mt-6 ">

<h2 className="text-4xl font-bold justify-center">{section.page_title}</h2>
<p className=" mt-2 text-2xl text-semibold ">{section.description  }</p>

</div>


<div className="flex flex-col gap-6 mt-8">
  {section.cards.map((item, index) => (
    <div
      key={index}
      className={`w-full flex ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      <SeekerCard
        title={item.title}
        buttonText={item.buttonText}
        icon={item.icon}
      />
    </div>
  ))}
</div>



</div>




  </div>

  {/* RIGHT PANEL */}
  <div className="hidden md:flex flex-1 justify-center mt-40">
  <div className="sticky top-6 w-full max-w-md self-start">
    <div className="p-6 rounded-2xl shadow-md">

      
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img src={AddGoal} alt="goal" className="w-38 h-38 object-cover" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-center mb-6">
        We help you achieve your goals!
      </h3>

     <input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  type="text"
  placeholder="Tell us goal you want to achieve today"
  className="w-full h-18 bg-gray-100 border border-gray-400 rounded-lg px-4 outline-none"
/>
<button
  onClick={handleAddGoal}
  className="w-full h-12 bg-gray-800 text-white rounded-lg mt-6 hover:bg-gray-900 transition"
>
  Add Goal
</button>

    </div>

  </div>

</div>
</div>



{showModal && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        
        {/* Modal Box */}
        <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md relative shadow-lg">
          
          {/* Close Button */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>

          {/* Image */}
          <div className="flex justify-center mb-4">
            <img src={AddGoal} alt="goal" className="w-24 h-24 object-cover" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-center mb-4">
            We help you achieve your goals!
          </h3>

          {/* Input */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Tell us a GOAL you want to achieve today"
            className="w-full h-12 bg-gray-100 border border-gray-300 rounded-lg px-4 outline-none"
          />

          {/* Button */}
          <button
            onClick={() => {
              handleAddGoal();
              setShowModal(false);
            }}
            className="w-full h-12 bg-gray-800 text-white rounded-lg mt-5 hover:bg-gray-900 transition"
          >
            Add Goal
          </button>
        </div>
      </div>
    )}



    </div>





  );
}

export default SeekerHome;  