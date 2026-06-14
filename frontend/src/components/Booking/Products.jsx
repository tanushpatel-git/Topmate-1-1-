
import React from "react";
import { useParams } from "react-router-dom";
import OneToOneHook from "../../hooks/OneToOneHook";
import { FaArrowLeft, FaBuffer, FaCalendarAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SkeletonBookingProduct } from "../ui/Skeleton";


const Products = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const { data, isLoading } = OneToOneHook(id);


    const service = data?.data;
    const user = service?.user;

    const [loading, setLoading] = useState(false);

    const handleContinue = () => {
        navigate("/booking/confirm", {
            state: {
                service,
                user,
            },
        });
    };

    const feedbacks = [
        {
            id: 1,
            name: "Aarav Sharma",
            role: "Software Engineer",
            feedback:
                "Amazing mentor! The guidance was practical, easy to understand, and helped me gain confidence in my career journey.",
        },
        {
            id: 2,
            name: "Priya Verma",
            role: "UI/UX Designer",
            feedback:
                "Very supportive and knowledgeable. Every session gave me clarity and motivation to improve my skills.",
        },
        {
            id: 3,
            name: "Rohit Patel",
            role: "Frontend Developer",
            feedback:
                "The mentorship experience was excellent. I learned industry-level practices and improved problem-solving abilities.",
        },
        {
            id: 4,
            name: "Sneha Kapoor",
            role: "Data Analyst",
            feedback:
                "Clear explanations and real-world examples made learning very engaging and productive.",
        },
        {
            id: 5,
            name: "Kunal Singh",
            role: "Student",
            feedback:
                "Helped me stay focused and confident during my placement preparation. Highly recommended!",
        },
    ];

    if (isLoading) return <SkeletonBookingProduct />;

    const handleSubmit = async () => {
        console.log("Submit");
    };

    return (
        <div className="min-h-screen bg-[#D65A4A] flex justify-center gap-6 p-6">


            <div className="bg-white rounded-3xl w-[520px] ">
                <div className="bg-[#F7DDDB] p-6 rounded-t-3xl">

                    <div className="flex items-center gap-2 text-sm mb-4 cursor-pointer">
                        <span className="font-medium bg-white px-3 py-1 rounded-full shadow-sm cursor-pointer hover:bg-gray-100 flex gap-2 items-center ">
                            <FaArrowLeft className="text-lg" onClick={() => navigate(`/profile/${user._id}`)} />
                            Back
                        </span>
                    </div>

                    <div className="flex items-center gap-3 ">
                        <span className="bg-white px-2 py-1 text-xs rounded-full shadow-sm">
                            ⭐ 4.5
                        </span>
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-full">
                            Popular
                        </span>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                        <h1 className="text-xl font-bold leading-snug w-[70%]">
                            {service?.title}
                        </h1>
                    </div>


                </div>

                <div className="grid grid-cols-2 text-gray-900 border-b-1 border-gray-600  overflow-hidden text-sm ">
                    <div className="p-3 border-r text-lg font-medium flex items-center gap-2">
                        <FaBuffer className="text-lg" />Digital  {service.category}
                    </div>
                    <div className="p-3 flex items-center gap-2 text-lg font-medium">

                    </div>

                </div>

                <div className="mt-4 bg-[#efe3d6] p-4 rounded-xl text-sm m-6">
                    <div className="flex gap-2 mb-2">
                        <span className="bg-white px-2 py-1 rounded-full text-xs">Helpful</span>
                        <span className="bg-white px-2 py-1 rounded-full text-xs">Engaging</span>
                        <span className="bg-white px-2 py-1 rounded-full text-xs">Supportive</span>
                    </div>

                    <p className="text-gray-700 m-6">
                        {user?.firstName} excels as a mentor, providing clear guidance and practical advice,
                        inspiring confidence and critical thinking.
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                        AI-generated based on testimonials
                    </p>
                </div>
<p className="text-sm text-gray-600 mt-4 leading-relaxed m-6">
  {service?.longDescription ? (
    service.longDescription
  ) : (
    <>
      Enhance your knowledge and skills with this professionally designed
      digital resource created to support learning, productivity, and
      professional growth. Carefully structured with high-quality content
      and practical insights, this product is built to deliver a smooth
      and valuable experience for users across different skill levels.

      <br />
      <br />

      Whether you are a beginner exploring new concepts or an experienced
      professional looking to strengthen your expertise, this resource
      provides clear, organized, and easy-to-understand information to
      help you achieve your goals effectively.

      <br />
      <br />

      The content is designed with a focus on simplicity, usability, and
      real-world application, making it suitable for learning, reference,
      and day-to-day use.

      <br />
      <br />

      With a modern approach and user-friendly structure, this digital
      product helps save time, improve efficiency, and support continuous
      growth. It is accessible anytime and anywhere, allowing users to
      learn and progress at their own pace without limitations.
    </>
  )}
</p>










                <div className="w-full py-12 bg-[#F8F6F2]">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-900">
                            What People Are Saying
                        </h1>

                        <p className="text-gray-600 mt-2">
                            Real feedback from users and mentees
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="flex gap-5 overflow-x-auto px-6 pb-4 scrollbar-hide">

                        {feedbacks.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-md border p-6 hover:shadow-xl transition duration-300"
                            >
                                {/* Feedback */}
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    “{item.feedback}”
                                </p>

                                {/* User Info */}
                                <div className="mt-6 flex items-center gap-3">

                                    {/* Avatar */}
                                    <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                                        {item.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h2 className="font-semibold text-gray-900">
                                            {item.name}
                                        </h2>

                                        <p className="text-sm text-gray-500">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>



                <div className="text-xs text-gray-500 mt-3 flex gap-3 m-6">
                    <span className="underline cursor-pointer">Terms</span>
                    <span className="underline cursor-pointer">Privacy</span>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 flex justify-center py-3 w-full">
                <div className="w-[520px] x-5 shadow-lg flex p-5 justify-between items-center bg-gray-200">

        <span className="font-semibold">
          ₹{service?.price}
        </span>

       <button
  onClick={handleContinue}
  disabled={loading}
  className={`px-4 py-2 rounded-lg ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-black text-white"
  }`}
>
  {loading
    ? "Processing..."
    : service?.price === 0
    ? "Confirm"
    : "Get This!"}
</button>

      </div>
    </div>
         
            



            </div>
    );
};
export default Products;
