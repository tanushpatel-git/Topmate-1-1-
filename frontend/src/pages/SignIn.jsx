import { motion } from "framer-motion";
import OTPInput from "react-otp-input"
import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import topmateLogo from "../assets/topmate-light-logo.svg"
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setOtp } from "../redux/signIn/signInSlice";

export default function SignIn() {
  const dispatch = useDispatch();
  const { email, password, otp } = useSelector((state) => state.signIn);
  const [isLoginWithPass, setIsLoginWithPass] = useState(false);
  const [doneContinue, setDoneContinue] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="w-[1200px] h-[650px] bg-white rounded-2xl shadow-sm grid grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
        <div className="p-12 flex flex-col justify-center">

          {/* Logo */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center gap-2 mb-10">
              <img className="w-40" src={topmateLogo} alt="topmate" />
              <button className="text-gray-500 font-semibold active:scale-95 hover:text-blue-500 hover:border-blue-500 transition h-10 w-40 rounded-full border border-gray-500">Create account</button>
            </div>
            <div className="h-px bg-gray-200 mb-5" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-semibold mb-2"
          >
            Sign in
          </motion.h1>

          <p className="text-gray-500 mb-8">
            Sign in to join Calls and manage bookings
          </p>

          {/* Social buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex active:scale-95 items-center justify-center gap-2 border rounded-lg px-6 py-3 w-full hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
            <div className="h-px bg-gray-200 flex-1" />
            Or
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          {/* Email input */}
          {doneContinue || <div className="mb-4">
            <label className="text-sm text-gray-500">Email</label>
            <div className="mt-1 border rounded-lg flex items-center px-3 py-2">
              <Mail className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                className="outline-none w-full"
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
          </div>}

          {isLoginWithPass && <div className="mb-4">
            <label className="text-sm text-gray-500">Password</label>
            <div className="mt-1 border rounded-lg flex items-center px-3 py-2">
              <Lock className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="outline-none w-full"
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </div>
          </div>}


          {/* Otp code setup */}
          {doneContinue && <div className="flex justify-center items-center mb-5">
            <OTPInput
              value={otp}
              onChange={(otp) => dispatch(setOtp(otp))}
              numInputs={6}
              containerStyle="flex gap-3"
              renderInput={(props) => (
                <input
                  {...props}
                  inputMode="numeric"
                  className="w-16 h-16 text-black text-center text-2xl rounded-md border border-gray-600 focus:outline-none focus:border-white"
                />
              )}
            />
          </div>}

          {/* Continue mix code  */}
          <button
            onClick={() => {
              !doneContinue ? setDoneContinue(!doneContinue) : console.log(otp); // this code is pending for write now
            }}
            className="bg-black text-white py-3 rounded-lg mb-3 hover:opacity-90 transition">
            Continue
          </button>

          <button onClick={() => setIsLoginWithPass(!isLoginWithPass)} className={`bg-gray-100 py-3 rounded-lg text-gray-700 hover:bg-gray-200 transition`}>
            {isLoginWithPass ? "Back" : "Log in with Password"}
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-50 flex items-center justify-center relative">

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="https://topmate.io/cdn-cgi/image/width=1080,quality=90/images/sign-in/sign-in-back.svg"
            className="w-[420px]"
          />

        </div>
      </div>
    </div>
  );
}
