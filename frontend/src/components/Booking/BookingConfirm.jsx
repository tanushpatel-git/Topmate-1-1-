import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import logoIcon from "../../assets/logo-icon2.svg";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import CreateBookingHook from "../../hooks/CreateBookingHook";


const BookingConfirm = () => {
  
  const { state } = useLocation(); 
  const safeState = state || {};
  const service = safeState.service;
  const creator = safeState.user; // renamed 
  const selectedDate = safeState.selectedDate;
  const selectedTime = safeState.selectedTime;
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  const { createBooking, loading: bookingLoading, error: bookingError } = CreateBookingHook();

  const user = useSelector((state) => state.userData);

  const [form, setForm] = useState({
    firstName: user?.firstName || "hello",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.whatsAppNumber || "",
    notes: user.notes || "",
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit = async () => {

  if (!user?._id) {
    alert("User not logged in");
    return;
  }

  if (!creator?._id || !service?._id) {
    alert("Service data missing");
    return;
  }

  if (!selectedDate || !selectedTime) {
    alert("Please select date & time");
    return;
  }

  if (!form.firstName || !form.email || !form.phone) {
    alert("Please fill all required fields");
    return;
  }

  const bookingData = {
    seeker: user._id || "",
    creator: creator._id,
    service: service._id,

    date: new Date(selectedDate),

    time: selectedTime,
    duration: service.duration,
    price: service.price,
  };

  try {
    setLoading(true);

    console.log("Sending booking:", bookingData);

    // FREE BOOKING
    if (service.price === 0) {
      const res = await createBooking(bookingData);

      if (res.success) {
        alert("Booking Confirmed ✅");
        navigate("/my-bookings");
      } else {
        alert(res.message);
      }

    } else {
      alert("Proceed to payment 💳");
    }

  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);

    alert(err.response?.data?.message || "Booking failed");

  } finally {
    setLoading(false);
  }
};



useEffect(() => {
  setForm({
    ...form,
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    phone: user.whatsAppNumber || "",
    notes: user.notes || "",
  });
}, []);

 return (
  <div className="min-h-screen bg-[#8FB3D9] flex justify-center items-start pt-10">

    {/* MAIN CARD */}
    <div className="bg-white w-[420px] h-screen rounded-2xl shadow-md  ">

      {/* HEADER */}
      <div className="mb-4">
        <div className="flex items-center gap-4  border-b-2 p-5 border-gray-300 cursor-pointer" onClick={() => navigate('/profile/allservice')}>
         <FaArrowLeft className="text-lg"    />
          <img
            src={creator?.userImageUrl}
            alt="User Profile"
            className="w-8 h-8 rounded-t-full object-cover"
          />
          <p className="text-md font-semibold">
            {creator?.firstName} {creator?.lastName}
          </p>
        </div>
<div className=" p-5">

        <h2 className="font-semibold text-xl text-black">
          {service?.title}
        </h2>

        <p className="text-gray-500">Video Call | {service?.duration}mins</p>

</div>
        <div className="mt-3 bg-gray-100 p-2 m-5 rounded-lg flex justify-between items-center text-sm">

          <div className="p-2 text-black font-bold ">
            <p>
              {new Date(selectedDate).toDateString()}
            </p>
            <p className="text-gray-700">Time - {selectedTime}</p>
            

          </div>

          <button className="text-md font-bold  border bg-white  px-5 py-3  rounded-full" onClick={() => navigate(`/booking/one-to-one/${service?._id}`)}>
            Change
          </button>
        </div>
      </div>

      {/* FORM */}
      <div className="space-y-3 p-5" >
<input
  type="text"
  name="firstName"
  value={form.firstName}
  onChange={handleChange}
  className="w-full border p-2 rounded-md text-sm"
/>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded-md text-sm"
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded-md text-sm"
        />

        <label className="flex items-center gap-2 text-xs">
          <input type="checkbox" defaultChecked />
          Receive booking details on phone
        </label>

      </div>

      {/* ORDER SUMMARY */}
      <div className="mt-5 bg-gray-100  rounded-lg text-sm m-5 line-clamp-1 font-semibold" >


        <div className="flex justify-between  border-b border-gray-300 p-3">
          <span>Order Summary</span>
          <span>  {service?.price == 0 ?  "₹0" : "₹"+ (service?.price + 10)}  </span>

        </div> 


        <div className="flex justify-between  border-b border-gray-300 p-3">
          <span>{service?.title}</span>
          <span>  {service?.price == 0 ?  "Free" : "₹" + service?.price}</span>

        </div> 

        <div className="flex justify-between  p-3 border-b border-gray-300">
          <span>Platform fee</span>
          <span>  {service?.price == 0 ? "Free" : "₹" + 10}</span>
        </div>


        <div className="flex justify-between font-semibold p-3">
          <span>Total</span>
          <span>{service?.price == 0 ?  "₹0" : "₹" + (service?.price + 10) }</span>
        </div>

      </div>

      {/* TERMS */}
      <p className="text-xs text-gray-400 mt-3 font-semibold tracking-wide text-center">
        By clicking Confirm, you agree to <span className="text-gray-1000 underline ">Terms & Refund Policies</span>
      </p>

         <p className="text-xs text-gray-400 mt-3 font-semibold tracking-wide text-center  bg-gray-100 p-3 m-5 rounded-lg ">
          Payments are 100% secure & encrypted
Terms & Conditions
          </p>  
<div className="flex flex-col justify-center items-center mt-5 bg-gray-50 p-3 m-5 rounded-lg font-semibold">
<p className="flex items-center gap-2"><img src={logoIcon} alt="" className="w-4 h-4" /> Powered by topmate.io</p>
 <p className="text-sm font-semibold p-2"> (Nikesh & Tanush Technologies Private Limited )</p>




 </div>
  

    </div>

    {/* STICKY FOOTER */}
    <div className="fixed bottom-0 left-0 w-full   flex justify-center py-3">
      <div className="w-[420px] x-5 shadow-lg flex p-5 justify-between items-center bg-gray-300">

        <span className="font-semibold">
          ₹{service?.price}
        </span>

       <button
  onClick={handleSubmit}
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
    : "Confirm & Pay"}
</button>

      </div>
    </div>

  </div>
);
};

export default BookingConfirm;