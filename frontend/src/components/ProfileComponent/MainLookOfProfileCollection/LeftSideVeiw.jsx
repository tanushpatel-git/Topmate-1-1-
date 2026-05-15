import topmate_light_logo from "../../../assets/topmate-light-logo.svg"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisplayName } from "../../../redux/userProfileDesign/profile";

const LeftSideVeiw = ({ mobile }) => {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.userProfile);
    const userDetails = useSelector((state) => state.userData);
    const { topmateIntro, profileImage, color, displayName } = userProfile;
    const { userName } = userDetails;

    useEffect(() => {
        dispatch(setDisplayName(userName));
    }, [userDetails]);

    if (mobile) {
        return (
            <div className="flex flex-col items-center text-center" style={{ backgroundColor: color }}>
                <img className="w-24 h-24 rounded-full object-cover" src={profileImage} alt="profile" />
                <h1 className="mt-4 text-2xl font-bold text-black">{displayName}</h1>
                {topmateIntro && (
                    <p className="mt-2 text-black text-lg font-medium">{topmateIntro}</p>
                )}
            </div>
        );
    }

    return (
        <div className="absolute top-19 h-[91vh] w-[30%]" style={{ backgroundColor: color }}>
            <div className="ml-10">
                <img className="mt-10 w-30 h-30 rounded-full overflow-hidden" src={profileImage} alt="error" />
                <h1 className="mt-5 text-black text-4xl font-bold">{displayName}</h1>
                <div className="w-[80%] mt-2"><p className="mt-2 text-black text-2xl font-medium">{topmateIntro}</p></div>
            </div>
            <div className="absolute left-5 bottom-5 w-full flex justify-between">
                <Link to="/" className="flex justify-center items-center h-15">
                    <img src={topmate_light_logo} alt="error" />
                </Link>
                <button className="mr-10 w-40 h-15 rounded-2xl bg-black text-white text-xl font-medium">Start your page</button>
            </div>
        </div>
    );
};

export default LeftSideVeiw;