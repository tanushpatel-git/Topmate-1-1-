import React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Card from "../components/HomePageComponent/Card";
import Logo from '../assets/topmate-light-logo.svg'

import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";

import p1 from '../assets/person1.jpg'
import p2 from '../assets/person2.jpg'
import p3 from '../assets/person3.jpg'
import p4 from '../assets/perosn4.jpg'
import p5 from '../assets/person5.jpg'
import p6 from '../assets/person6.jpg'
import p7 from '../assets/person7.jpg'
import p8 from '../assets/person8.jpg'
import p9 from '../assets/person9.jpg'
import p10 from '../assets/person10.jpg'

import { useDispatch, useSelector } from "react-redux";

import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setUserImage
} from "../redux/signUp/signUpSlice";
import { auth, googleProvider } from "../utility/fireBase";
import { signInWithPopup } from "firebase/auth";




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
  { img: p6, name: "Nikesh Parte", role: "Engineer", desc: "Software engineer. Builds systems.", color: "bg-pink-400/40" },
  { img: p7, name: "Anjali Roy", role: "Designer", desc: "Graphic designer. Loves visuals.", color: "bg-indigo-400/40" },
  { img: p8, name: "Vikas Yadav", role: "Developer", desc: "Backend dev. Handles APIs.", color: "bg-cyan-400/40" },

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
  { img: p6, name: "Nikesh Parte", role: "Engineer", desc: "Software engineer. Builds systems.", color: "bg-pink-400/40" },
  { img: p7, name: "Anjali Roy", role: "Designer", desc: "Graphic designer. Loves visuals.", color: "bg-indigo-400/40" },
  { img: p8, name: "Vikas Yadav", role: "Developer", desc: "Backend dev. Handles APIs.", color: "bg-cyan-400/40" },

];

const loopData = [...cards, ...cards, ...cards2,];
const loopData2 = [...cards2.slice(0, 5), ...cards2, ...cards2.slice(5)];

const SignUp = () => {
  const scrollRef1 = useRef();
  const scrollRef2 = useRef();
  const textanime = useRef();


  const dispatch = useDispatch();
  const formData = useSelector((state) => state.signUp);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const formhandle = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName) {
      alert("Please enter your name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    console.log("Final Signup Data:", formData);

    navigate('/signup2');
  };


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

  const googleSignUP = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log("Google Sign Up Success", res);
      dispatch(setFirstName(res.user.displayName.split(" ")[0]));
      dispatch(setLastName(res.user.displayName.split(" ")[1]));
      dispatch(setEmail(res.user.email));
      dispatch(setUserImage(res.user.photoURL));
      navigate("/signup2")
    }
    catch (error) {
      console.log("Google Sign Up Error", error);
    }
  }






  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FFE4D6]">

      {/* LEFT */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col py-6 sm:py-10">

        {/* Navbar */}
        <div className="flex items-center justify-between px-6 sm:px-10 border-b border-gray-200 pb-4">
          <img src={Logo} alt="logo" className="h-6 sm:h-7" />
          <button
            onClick={() => navigate('/signin')}
            className="border px-4 py-1.5 rounded-md text-sm sm:text-base font-medium hover:bg-gray-100"
          >
            Login
          </button>
        </div>

        {/* Content */}
        <div className="w-full max-w-md mx-auto px-6 sm:px-0 mt-8 sm:mt-10">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
            Sign Up
          </h1>

          <p className="text-gray-500 text-base sm:text-lg mb-8">
            Launch your page in no time!
          </p>

          {/* Google */}
          <div className="flex gap-3 mb-5">
            <button
              onClick={googleSignUP}
              className="w-full border rounded-md py-2.5 sm:py-3 flex items-center justify-center gap-2 text-sm sm:text-base font-medium hover:bg-gray-50"
            >
              <FcGoogle className="text-xl sm:text-2xl" />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* FORM */}
          <form className="space-y-4" onSubmit={formhandle}>

            {/* Names */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-full">
                <label className="text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => dispatch(setFirstName(e.target.value))}
                  className="w-full border px-3 py-2 rounded-md mt-1 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div className="w-full">
                <label className="text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => dispatch(setLastName(e.target.value))}
                  className="w-full border px-3 py-2 rounded-md mt-1 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                className="w-full border px-3 py-2 rounded-md mt-1 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                className="w-full border px-3 py-2 rounded-md mt-1 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={!formData.firstName || !formData.email || !formData.password}
              className={`w-full py-2.5 sm:py-3 rounded-md font-medium mt-2 text-sm sm:text-base ${!formData.firstName || !formData.email || !formData.password
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-black text-white hover:opacity-90"
                }`}
            >
              Get Started
            </button>
          </form>

          {/* Terms */}
          <p className="text-xs text-gray-500 mt-6 text-center leading-relaxed">
            By Signing up, you agree to our{" "}
            <span className="underline cursor-pointer">Terms</span>,{" "}
            <span className="underline cursor-pointer">Privacy</span> and{" "}
            <span className="underline cursor-pointer">Platform policies</span>.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex w-1/2 items-center justify-center overflow-hidden">

        <div className="flex gap-8 h-full items-start px-6">
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

      </div>

    </div>
  );
}


export default SignUp;
