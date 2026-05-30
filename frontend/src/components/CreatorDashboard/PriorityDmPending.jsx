import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import EmptyScreen from "../../assets/empty-screen-dm.svg";
import GetCreatorBookingsHook from "../../hooks/GetCreatorBookingsHook";
import UpdateBookingDMhook from "../../hooks/UpdateBookingDMhook";


const PriorityDmPending = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const userData = useSelector((state) => state.userData);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [answer, setAnswer] = useState("");
const [showDetails, setShowDetails] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const {
    bookings,
    loading,
    error,
    getCreatorBookings,
  } = GetCreatorBookingsHook();

  const { mutate: updateBooking, isPending } =
  UpdateBookingDMhook({
    onSuccess: () => {
      toast.success("Answer submitted");
      setAnswer("");

      getCreatorBookings(userData.userId);
    },
  });


const handleSubmit = () => {
  console.log("fn call");

  if (!selectedBooking?._id) {
    toast.error("Please select booking");
    return;
  }

  if (!answer.trim()) {
    toast.error("Please enter answer");
    return;
  }

  updateBooking({
    id: selectedBooking._id,
    answer,
    status: "completed",
  });
};




  // FETCH BOOKINGS
  useEffect(() => {
    if (!userData?.userId) return;
    getCreatorBookings(userData.userId);
  }, [userData , UpdateBookingDMhook]);

  // FILTER ONLY PRIORITY DM BOOKINGS confirmed
  useEffect(() => {

  if (!bookings) return;

  const filteredData = bookings.filter(
    (item) =>
      item?.service?.category === "priorityDm" &&
      item?.status === "confirmed"
  );

setData(filteredData);

if (filteredData.length > 0) {
  setSelectedBooking(filteredData[0]);
}
}, [bookings]);

  return (

    
    <div>
{showCancelModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

    <div className="bg-white w-full max-w-[360px] rounded-2xl p-6 relative animate-fadeIn">

      {/* Close Button */}
      <button
        onClick={() => setShowCancelModal(false)}
        className="absolute top-5 right-5 text-2xl text-gray-600"
      >
        ×
      </button>

      {/* Title */}
      <h2 className="text-3xl font-semibold mb-6">
        Cancel query
      </h2>

      {/* User Card */}
      <div className="bg-gray-100 rounded-2xl p-4 mb-6">
        <h3 className="font-semibold text-lg">
          {selectedBooking?.seeker?.firstName}{" "}
          {selectedBooking?.seeker?.lastName}
        </h3>

        <p className="text-gray-500 text-sm">
          Priority DM
        </p>
      </div>

      {/* Warning Box */}
      <div className="border border-red-200 bg-red-50 rounded-xl p-4 mb-6">
        <p className="text-gray-700 leading-6">
          To cancel this query, please{" "}
          <span className="text-red-500 underline cursor-pointer">
            contact support
          </span>{" "}
          for assistance.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">

        <button
          onClick={() => setShowCancelModal(false)}
          className="flex-1 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          className="flex-1 bg-black text-white py-3 rounded-xl font-medium"  onClick={ ()=>{navigate('/sapport')}}
        >
          Contact Support
        </button>

      </div>
    </div>
  </div>
)}

      {/* Navbar */}
      <nav className="border-b-2 border-gray-200 px-6 md:px-20 py-5">
        <h1 className="text-3xl md:text-4xl font-semibold mb-5">
          Priority DM
        </h1>

        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Tabs */}
          <div className="flex gap-4">
            <button className="text-lg bg-gray-200 px-4 py-1 rounded-full border">
              Pending
            </button>

            <button
              onClick={() =>
                navigate(
                  "/creator-dashboard/queries/answer"
                )
              }
              className="text-lg px-4 py-1 rounded-full border"
            >
              Answered
            </button>
          </div>

          <button
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 text-lg rounded-full"
            onClick={() =>
              navigate(
                "/creator-dashboard/services/one-to-one"
              )
            }
          >
            Edit Services
          </button>
        </div>
      </nav>

      {/* Loading */}
      {loading && (
        <div className="text-center mt-10 text-lg">
          Loading...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center mt-10 text-red-500">
          {error}
        </div>
      )}

      {/* Content */}
      {!loading && data.length > 0 ? (
      <div className="p-3 md:p-5 h-[100vh] flex flex-col md:flex-row gap-5">
<div className={`overflow-x-auto h-auto flex-1 ${showDetails ? "hidden md:block" : "block"}`}>
          {data.map((item, index) => (
            <div   onClick={() => {setSelectedBooking(item); setAnswer(item?.answer || ""); if (window.innerWidth < 750) {setShowDetails(true); }}  }  key={index} className="border-b-1 border-gray-200 p-4 flex items-center gap-4" >

                <img src={item?.seeker?.userImageUrl} alt="" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full" />
                <div className="">
                <h2 className="text-sm mb-2">
                  {item?.seeker?.firstName} {item?.seeker?.lastName}
                </h2>
                 <h3 className=" mb-2">
                  {item?.service.title}
                </h3>    

                 <h3 className=" mb-2">
                  {item.question}
                </h3>    

                </div>


                         
            </div>
          ))}
   </div>

<div className={` flex-1 border rounded-xl p-4 md:p-5 bg-white shadow-sm ${showDetails ? "block" : "hidden md:block"}`}>
  {selectedBooking ? (
    <div>
<button
  onClick={() => setShowDetails(false)}
  className="md:hidden mb-4 flex items-center gap-2 text-sm font-medium"
>
  ← Back
</button>

      <div className="flex items-center  gap-4 mb-5 justify-around">

        <img src={selectedBooking?.seeker?.userImageUrl} alt="" className="w-[70px] h-[70px] rounded-full"/>

        <div  >
          <h2 className="text-xl font-semibold">
            {selectedBooking?.seeker?.firstName}{" "}
            {selectedBooking?.seeker?.lastName}
          </h2>

          <p className="text-gray-500">
            {selectedBooking?.seeker?.email}
          </p>
          
          <p className="text-gray-500">
           +91 {selectedBooking?.seeker?.whatsAppNumber}
          </p>
        </div>

        <div className="flex flex-col gap-4 ">
          <button className="bg-green-100  text-black p-2  rounded-lg rounded-full">Reserved</button>
          <button className="bg-gray-100 text-black p-2 rounded-lg rounded-full"> {selectedBooking?.price ===0 ? "Free" : '₹' + selectedBooking?.price} </button>
        </div>
      </div>

      <div className="mb-5">

        <h3 className="text-gray-500 font-semibold mb-2">
         Transaction done on : {selectedBooking?.updatedAt}
        </h3>
        <h3 className="font-semibold mb-2">
          Query <br/>
         {selectedBooking?.question}
        </h3>

      </div>

<div className="div">
<h3 className="font-semibold mb-2">Answer</h3>
<textarea name="answer" className="w-full h-[100px] border-gray-300 border rounded-lg p-2" value={answer}onChange={(e) => setAnswer(e.target.value)}/>

</div>
      <div className="flex gap-3 mt-6">

        <button     onClick={() => setShowCancelModal(true)}        className="bg-black text-white px-5 py-2 rounded-lg"  >
        Cancel Query
        </button>
<button
  className="border px-5 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
  onClick={handleSubmit}
  disabled={isPending}

>
  {isPending ? "Sending..." : "Send Answer"}
</button>

      </div>

    </div>

  ) : (

    <div className="h-full flex items-center justify-center text-gray-400">
      Select a booking
    </div>

  )}
</div>
        </div>
      ) : (
        !loading && (
          <div className="flex flex-col items-center justify-center mt-[2rem] text-center">
            <img
              src={EmptyScreen}
              alt="Empty"
              className="w-[300px]"
            />

            <h2 className="text-3xl font-semibold text-gray-700 mb-2 mt-4">
              Try Priority DM
            </h2>

            <p>
              Priority DM allows you to accept DM
              requests without revealing your
              information and reply seamlessly
              <br />
              through{" "}
              <span className="font-bold">
                Gmail
              </span>
            </p>

            <button
              className="bg-black text-white font-semibold px-6 py-3 rounded-md mt-4"
              onClick={() =>
                navigate(
                  "/creator-dashboard/services"
                )
              }
            >
              Add Priority DM
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default PriorityDmPending;