import React from "react";
import tomateLogoBlack from "../../assets/topmate-light-logo.svg"
import ProgressStepper from "../ui/ProgressStepper";

const SignUpNavbar = ({ currentStep }) => {
    return (
        <div className="w-full border-b bg-white px-8 py-4 flex items-center">
            <img src={tomateLogoBlack} alt="topmate" />
            {/* Progress Indicator */}
            <ProgressStepper currentStep={currentStep} />
        </div>
    )
}

export default SignUpNavbar