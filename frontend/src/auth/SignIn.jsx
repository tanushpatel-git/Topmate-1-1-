import { motion } from "framer-motion";
import OTPInput from "react-otp-input"
import { useEffect, useState } from "react";
import { Loader, Lock, Mail } from "lucide-react";
import topmateLogo from "../assets/topmate-light-logo.svg"
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setOtp } from "../redux/signIn/signInSlice";
import useSignIn from "../hooks/useSignIn";
import useSignInWithGoogle from "../hooks/useSignInWithGoogle";
import { auth, googleProvider } from "../utility/fireBase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEmailCheck, useOtpVerification } from "../hooks/SignInWithTwoStep";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, otp } = useSelector((state) => state.signIn);
  const [isLoginWithPass, setIsLoginWithPass] = useState(false);
  const [doneContinue, setDoneContinue] = useState(false);
  const { mutate: handleSignIn, data, isPending } = useSignIn();
  const { mutate: handleSignInWithGoogle, data: googleData, isPending: googleIsPending } = useSignInWithGoogle();
  const { mutate: handleEmailCheck, data: emailVerified, isPending: emailCheckIsPending } = useEmailCheck();
  const { mutate: handleOtpVerification, data: otpData, isPending: otpVerificationIsPending } = useOtpVerification();


  const handleClick = () => {
    if (!doneContinue && isLoginWithPass) {
      handleSignIn({ email, password })
    } else if (!doneContinue) {
      if (email) {
        handleEmailCheck(email);
      } else {
        toast.error("Email is required");
      }
    } else if (doneContinue && !isLoginWithPass) {
      handleOtpVerification({ email, otp })
    }
  }

  useEffect(() => {
    if (data?.user || googleData?.user || otpData?.user) {
      navigate("/creator-dashboard")
    }
  }, [data, googleData, otpData])

  useEffect(() => {
    console.log(emailVerified);
    if (emailVerified?.status) {
      setDoneContinue(true);
    }
  }, [emailVerified])

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider)
      handleSignInWithGoogle(user?.email)
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
        <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center">

          {/* Logo */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center gap-2 mb-6 sm:mb-10">
              <img className="w-32 sm:w-40" src={topmateLogo} alt="topmate" />
              <button
                className="text-gray-500 text-sm sm:text-base font-semibold active:scale-95 hover:text-blue-500 hover:border-blue-500 transition h-9 sm:h-10 px-4 rounded-full border border-gray-500"
                onClick={() => navigate('/signup')}
              >
                Create account
              </button>
            </div>
            <div className="h-px bg-gray-200 mb-5" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2"
          >
            Sign in
          </motion.h1>

          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Sign in to join Calls and manage bookings
          </p>

          {/* Google */}
          <div className="flex gap-4 mb-5">
            <button
              onClick={handleGoogleSignIn}
              className="flex active:scale-95 items-center justify-center gap-2 border rounded-lg px-4 py-2.5 w-full hover:bg-gray-50 transition text-sm sm:text-base"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 text-gray-400 text-xs sm:text-sm mb-5">
            <div className="h-px bg-gray-200 flex-1" />
            Or
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          {/* Email */}
          {!doneContinue && (
            <div className="mb-4">
              <label className="text-sm text-gray-500">Email</label>
              <div className="mt-1 border rounded-lg flex items-center px-3 py-2">
                <Mail className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  className="outline-none w-full text-sm"
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                />
              </div>
            </div>
          )}

          {/* Password */}
          {isLoginWithPass && (
            <div className="mb-4">
              <label className="text-sm text-gray-500">Password</label>
              <div className="mt-1 border rounded-lg flex items-center px-3 py-2">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  className="outline-none w-full text-sm"
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                />
              </div>
            </div>
          )}

          {/* OTP */}
          {doneContinue && (
            <div className="flex justify-center items-center mb-5">
              <OTPInput
                value={otp}
                onChange={(otp) => dispatch(setOtp(otp))}
                numInputs={6}
                containerStyle="flex gap-2 sm:gap-3"
                renderInput={(props) => (
                  <input
                    {...props}
                    inputMode="numeric"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-black text-center text-lg sm:text-xl rounded-md border border-gray-400 focus:outline-none focus:border-black"
                  />
                )}
              />
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleClick}
            disabled={isPending || emailCheckIsPending || otpVerificationIsPending}
            className="bg-black text-white py-2.5 sm:py-3 rounded-lg mb-3 hover:opacity-90 transition flex justify-center items-center gap-2 text-sm sm:text-base"
          >
            {(isPending || emailCheckIsPending || otpVerificationIsPending) ? (
              <Loader size={20} className="animate-spin" />
            ) : !doneContinue ? "Continue" : "Sign In"}
          </button>

          <button
            onClick={() => setIsLoginWithPass(!isLoginWithPass)}
            className="bg-gray-100 py-2.5 sm:py-3 rounded-lg text-gray-700 hover:bg-gray-200 transition text-sm sm:text-base"
          >
            {isLoginWithPass ? "Back" : "Log in with Password"}
          </button>
        </div>

        {/* RIGHT SIDE (Hidden on Mobile) */}
        <div className="hidden md:flex bg-gray-50 items-center justify-center relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            src="https://topmate.io/cdn-cgi/image/width=1080,quality=90/images/sign-in/sign-in-back.svg"
            className="w-[320px] lg:w-[420px]"
          />
        </div>

      </div>
    </div>
  );
}