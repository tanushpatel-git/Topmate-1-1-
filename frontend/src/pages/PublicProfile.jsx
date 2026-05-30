import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPublicProfile } from "../services/userAuthServices/profileDesignService";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
import badge_recommendation from "../assets/badge-recommendation.svg";
import give_charity_icon from "../assets/give-charity.2efae26c.svg";
import discount_highlight from "../assets/discount-highlight.png";
import topmate_light_logo from "../assets/topmate-light-logo.svg";
import { SkeletonProfilePage } from "../components/ui/Skeleton";
import toast from "react-hot-toast";

const PublicProfile = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profileData, setProfileData] = useState(null);
    const [activeServiceTab, setActiveServiceTab] = useState("All");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const response = await getPublicProfile(userId);
                if (response.status) {
                    setProfileData(response.data);
                } else {
                    setError(response.message);
                }
            } catch (err) {
                setError("Failed to load profile");
            } finally {
                setLoading(false);
            }
        };
        if (userId) fetchProfile();
    }, [userId]);

    if (loading) {
        return <SkeletonProfilePage />;
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#EFECE3]">
                <div className="text-center">
                    <p className="text-red-500 text-xl mb-4">{error}</p>
                    <Link to="/" className="text-blue-600 hover:underline">Go Home</Link>
                </div>
            </div>
        );
    }

    const { user, profileDesign } = profileData;
    const profile = profileDesign || {};
    const color = profile.color || "#ffffff";
    const profileImage = profile.profileImage || user?.userImageUrl;
    const displayName = profile.displayName || `${user?.firstName || ""} ${user?.lastName || ""}`.trim();
    const topmateIntro = profile.topmateIntro || "";
    const aboutYourself = profile.aboutYourself || "";
    const highlightLink = profile.highlightLink || {};
    const testimonial = profile.testimonial || {};
    const recomdation = profile.recomdation || {};
    const donation = profile.donation || "";
    const offer = profile.offer || "";
    const services = profile.services || [];

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-[35%] lg:min-h-screen lg:sticky lg:top-0 flex flex-col" style={{ backgroundColor: `${color || '#F4D03F'}` }}>
                <div className="ml-4 lg:ml-6 mt-4 lg:mt-6">
                    <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black">
                        <ArrowLeft size={20} />
                        <span>Back</span>
                    </Link>
                </div>
                <div className="ml-4 lg:ml-10 flex-1 overflow-auto">
                    <img className="mt-6 lg:mt-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 rounded-full overflow-hidden" src={profileImage} alt="Profile" />
                    <h1 className="mt-5 text-black text-2xl sm:text-3xl lg:text-4xl font-bold">{displayName}</h1>
                    {topmateIntro && (
                        <div className="w-full lg:w-[80%] mt-2 pr-4 lg:pr-0">
                            <p className="mt-2 text-black text-lg sm:text-xl lg:text-2xl font-medium">{topmateIntro}</p>
                        </div>
                    )}
                    <div className="mt-6 flex gap-3">
                        {user?.linkedInUrl && (
                            <a href={user.linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">LinkedIn</a>
                        )}
                        {user?.twitterUrl && (
                            <a href={user.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">Twitter</a>
                        )}
                        {user?.instagramUrl && (
                            <a href={user.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-600 text-sm hover:underline">Instagram</a>
                        )}
                    </div>
                </div>
                <div className="lg:absolute lg:left-5 lg:bottom-5 w-full flex justify-between items-center px-4 lg:px-0 pb-5 lg:pb-0">
                    <Link to="/" className="flex justify-center items-center h-15">
                        <img src={topmate_light_logo} alt="topmate" />
                    </Link>
                    <Link to="/creator-dashboard" className="flex justify-center items-center mr-10 w-40 h-15 rounded-2xl bg-black text-white text-xl font-medium">Start your page</Link>
                </div>
            </div>

            <div className="w-full lg:w-[65%] lg:max-h-screen lg:overflow-auto bg-[#EFECE3]">
                <div className="w-full pt-5 px-4 sm:px-8 lg:pl-10 lg:pr-10 pb-10">
                    <div className="flex-1">
                        {recomdation.recomdationText && recomdation.from && (
                            <div className="h-40 flex flex-col bg-white rounded-2xl">
                                <h1 className="p-2 text-black text-md">{recomdation.recomdationText}</h1>
                                <div className="flex justify-between items-center">
                                    <h1 className="p-2 text-black text-md">from {recomdation.from}</h1>
                                    <img className="pr-5" src={badge_recommendation} alt="recommendation" />
                                </div>
                            </div>
                        )}
                    </div>

                    {services.length > 0 && (
                        <div className="mt-5">
                            <div className="flex gap-3 items-center mb-4 flex-wrap">
                                <button
                                    onClick={() => setActiveServiceTab("All")}
                                    className={activeServiceTab === "All" ? "w-25 h-13 bg-black rounded-2xl text-white font-medium cursor-pointer" : "w-25 h-13 rounded-2xl bg-transparent border border-gray-400 text-black font-medium cursor-pointer"}
                                >
                                    All
                                </button>
                                {services.some(s => s.category === "one-to-one") && (
                                    <button
                                        onClick={() => setActiveServiceTab("1:1")}
                                        className={activeServiceTab === "1:1" ? "w-25 h-13 bg-black rounded-2xl text-white font-medium" : "w-25 h-13 rounded-2xl bg-transparent border border-gray-400 text-black font-medium"}
                                    >
                                        1:1
                                    </button>
                                )}
                                {services.some(s => s.category === "webinar") && (
                                    <button
                                        onClick={() => {
                                            toast("Webinars coming soon!", { icon: "🚧" });
                                            navigate("/upcoming", { state: { type: "webinar" } });
                                        }}
                                        className={activeServiceTab === "Webinar" ? "w-25 h-13 bg-black rounded-2xl text-white font-medium" : "w-25 h-13 rounded-2xl bg-transparent border border-gray-400 text-black font-medium"}
                                    >
                                        Webinar
                                    </button>
                                )}
                                {services.some(s => s.category === "corhort") && (
                                    <button
                                        onClick={() => {
                                            toast("Cohorts coming soon!", { icon: "🚧" });
                                            navigate("/upcoming", { state: { type: "cohort" } });
                                        }}
                                        className={activeServiceTab === "Corhort" ? "w-25 h-13 bg-black rounded-2xl text-white font-medium" : "w-25 h-13 rounded-2xl bg-transparent border border-gray-400 text-black font-medium"}
                                    >
                                        Corhort
                                    </button>
                                )}
                                {services.some(s => s.category === "priorityDm") && (
                                    <button
                                        onClick={() => setActiveServiceTab("Priority DM")}
                                        className={activeServiceTab === "Priority DM" ? "w-25 h-13 bg-black rounded-2xl text-white font-medium" : "w-25 h-13 rounded-2xl bg-transparent border border-gray-400 text-black font-medium"}
                                    >
                                        Priority DM
                                    </button>
                                )}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {services.filter(service => {
                                    if (activeServiceTab === "All") return true;
                                    if (activeServiceTab === "1:1") return service.category === "one-to-one";
                                    if (activeServiceTab === "Webinar") return service.category === "webinar";
                                    if (activeServiceTab === "Priority DM") return service.category === "priorityDm";
                                    return true;
                                }).map((service) => (
                                    <div
                                        key={service?._id}
                                        className="mt-5 h-50 rounded-[32px] bg-[#f4f4f4] border border-gray-200 overflow-hidden shadow-sm"
                                    >
                                        <div className="relative px-4 pt-10 pb-12">
                                            <p className="text-md text-gray-600 font-medium">{service?.category}</p>
                                            <h1 className="mt-2 text-xl font-bold tracking-tight text-black">{service?.title}</h1>
                                        </div>
                                        <div className="border-t border-gray-300" />
                                        <div className="flex items-center justify-between py-2 px-4">
                                            <span className="text-md font-bold tracking-tight text-black">₹ {service?.price}</span>
                                            <button className="h-10 w-10 rounded-full bg-[#2f2f2f] flex items-center justify-center"
                                          onClick={() => {
                                            if (service?.category === "corhort") {
                                              toast("Cohorts coming soon!", { icon: "🚧" });
                                              navigate("/upcoming", { state: { type: "cohort" } });
                                            } else if (service?.category === "webinar") {
                                              toast("Webinars coming soon!", { icon: "🚧" });
                                              navigate("/upcoming", { state: { type: "webinar" } });
                                            }
                                          }}
                                        >
                                                <ArrowRight className="text-white w-8 h-8" strokeWidth={1.5} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {highlightLink.url && (
                        <div className="flex-1 mt-5">
                            <div className="w-full lg:w-[30vw] bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow gap-4">
                                <p className="text-gray-600 text-lg break-all">{highlightLink.url}</p>
                                <div className="w-20 h-20 shrink-0 bg-gray-200 rounded-xl flex items-center justify-center">
                                    {highlightLink?.imageUrl ? (
                                        <img className="w-full h-full object-cover" src={highlightLink.imageUrl} alt="loading..." />
                                    ) : (
                                        <ExternalLink size={36} />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {testimonial.testimonialText && testimonial.from && (
                        <div className="flex-1 flex mt-5">
                            <div className="w-full lg:w-[30vw] bg-gray-100 rounded-3xl p-6 shadow flex flex-col justify-center gap-4">
                                <Quote size={28} className="text-gray-400" />
                                <p className="text-gray-700 text-lg leading-relaxed">{testimonial?.testimonialText}</p>
                                {testimonial.from && (
                                    <p className="text-sm text-gray-500">— {testimonial?.from}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {donation && (
                        <div className="flex-1 flex mt-5">
                            <div className="w-full lg:w-[30vw] bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow">
                                <p className="text-gray-700 text-lg leading-snug">{donation}</p>
                                <img
                                    src={give_charity_icon}
                                    alt="Give Charity Icon"
                                    className="w-16 h-16 shrink-0 rounded-xl"
                                />
                            </div>
                        </div>
                    )}

                    {offer && (
                        <div className="flex-1 flex mt-5">
                            <div className="w-full lg:w-[30vw] bg-gray-100 rounded-3xl p-6 flex items-center justify-between shadow">
                                <p className="text-gray-700 text-lg">{offer}</p>
                                <div className="w-16 h-16 shrink-0 rounded-xl flex items-center justify-center">
                                    <img src={discount_highlight} alt="discount" />
                                </div>
                            </div>
                        </div>
                    )}

                    {aboutYourself && (
                        <div className="mt-5">
                            <div className="w-full flex flex-col">
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">About me</h1>
                                <p className="pt-2 text-lg sm:text-xl text-black">{aboutYourself}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PublicProfile;