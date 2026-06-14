import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import logoIcon from "../../assets/logo-icon2.svg";
import CreateBookingHook from "../../hooks/CreateBookingHook";
import createBookingDMHook from "../../hooks/createBookingDMHook";
import useBookingPayment from "../../hooks/useBookingPayment";
const BookingConfirm = () => {
  const { state } = useLocation();

  const safeState = state || {};
  const service = safeState.service;
  const creator = safeState.user;
  const selectedDate = safeState.selectedDate;
  const selectedTime = safeState.selectedTime;

  const navigate = useNavigate();

  const user = useSelector((state) => state.userData);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
  });

  const { bookService,
    loading: bookingLoadingRZ,
    error: bookingErrorRz
  } = useBookingPayment();


const {
createBooking,
loading: bookingLoading,
error: bookingError,
} = CreateBookingHook();


  const {
    createBookingDM,
    loading: bookingLoadingDM,
    error: bookingErrorDM,
  } = createBookingDMHook();

  // SET USER DATA
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phone: user?.whatsAppNumber || "",
    }));
  }, [user]);




  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async () => {
    // VALIDATIONS
    if (!user?.userId) {
      toast.error("Please login first");
      return;
    }

    if (!creator?._id || !service?._id) {
      toast.error("Service data missing");
      return;
    }

    if (
      service?.category === "one-to-one" &&
      (!selectedDate || !selectedTime)
    ) {
      toast.error("Please select date & time");
      return;
    }

    if (
      !form.firstName ||!form.email ||!form.phone) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!form.question?.trim()) {
      toast.error("Please enter your question");
      return;
    }

    const bookingData = {
      seeker: user.userId,
      creator: creator._id,
      service: service._id,
      date: selectedDate
        ? new Date(selectedDate)
        : null,
      time: selectedTime || "",
      duration: service?.duration || 0,
      price: (service?.price) || 0,
      question: form.question,
    };

    try {
      setLoading(true);

  let res;

  if (service?.price > 0) {

    const res = await bookService(bookingData);
    console.log('res', res);
  
    navigate("/booking/success", {
      state: {
        booking: res.booking,
        service,
        creator,
      },
    });

    return;
}
if (service?.category === "priorityDm" ||service?.category === "product") {
  res = await createBookingDM(bookingData);
} else {
  res = await createBooking(bookingData);
}


console.log( 'res msg  ',  res)

if (res) {
  toast.success("Booking Confirmed Successfully");
    
  navigate("/booking/success", {
      state: {
        booking: res.booking,
        service,
        creator,
      },
    });

} else {
  toast.error("Booking failed");
}

    } catch (err) {
      console.log(
        "ERROR:",
        err?.response?.data || err.message
      );

      toast.error(
        err?.response?.data?.message ||
          "Booking failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#8FB3D9] flex justify-center items-start pt-10 ">
      {/* MAIN CARD */}
      <div className="bg-white min-h-screen w-[420px] rounded-2xl shadow-md overflow-hidden">
        {/* HEADER */}
        <div>
          {/* TOP BAR */}
          <div
            className="flex items-center gap-4 border-b-2 p-5 border-gray-300 cursor-pointer"
            onClick={() =>
              navigate(`/profile/${creator._id}`)
            }
          >
            <FaArrowLeft className="text-lg" />

            <img
              src={creator?.userImageUrl}
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover"
            />

            <p className="text-md font-semibold">
              {creator?.firstName}{" "}
              {creator?.lastName}
            </p>
          </div>

          {/* SERVICE DETAILS */}
          <div className="p-5">
            <h2 className="font-semibold text-xl text-black">
              {service?.title}
            </h2>

            {service?.category ===
              "one-to-one" && (
              <p className="text-gray-500">
                Video Call |{" "}
                {service?.duration} mins
              </p>
            )}

            {service?.category ===
              "product" && (
              <p className="text-gray-500">
                Digital Product
              </p>
            )}

            {service?.category ===
              "priorityDm" && (
              <p className="text-gray-500">
                Priority DM
              </p>
            )}
          </div>

          {/* DATE/TIME */}
          {service?.category ===
            "one-to-one" && (
            <div className="mt-3 bg-gray-100 p-4 mx-5 rounded-lg flex justify-between items-center text-sm">
              <div className="text-black font-bold">
                <p>
                  {new Date(
                    selectedDate
                  ).toDateString()}
                </p>

                <p className="text-gray-700">
                  Time - {selectedTime}
                </p>
              </div>

              <button
                className="text-md font-bold border bg-white px-5 py-3 rounded-full"
                onClick={() =>
                  navigate(
                    `/booking/one-to-one/${service?._id}`
                  )
                }
              >
                Change
              </button>
            </div>
          )}

          {/* PRIORITY DM DESCRIPTION */}
          {service?.category ===
            "priorityDm" && (
            <div className="mt-3 bg-gray-100 p-4 mx-5 rounded-lg text-sm">
              <p>
                {service?.longDescription}
              </p>
            </div>
          )}
        </div>

        {/* FORM */}
        <div className="space-y-4 p-5">
          {/* FIRST NAME */}
          <div>
            <label className="text-md font-semibold">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border p-2 rounded-md text-sm mt-1"
            />
          </div>

          {/* LAST NAME */}
          <div>
            <label className="text-md font-semibold">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border p-2 rounded-md text-sm mt-1"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-md font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-md text-sm mt-1"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-md font-semibold">
              WhatsApp Number
            </label>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded-md text-sm mt-1"
            />
          </div>

          {/* QUESTION */}
          <div>
            <label className="text-md font-semibold">
              Your Question
            </label>

            <textarea
              required
              rows={4}
              name="question"
              value={form.question}
              onChange={handleChange}
              placeholder="Ask your question..."
              className="w-full border p-2 rounded-md text-sm mt-1 resize-none"
            />
          </div>

          <label className="flex items-center gap-2 text-xs">
            <input
              type="checkbox"
              defaultChecked
            />
            Receive booking details on phone
          </label>
        </div>

        {/* ORDER SUMMARY */}
        <div className="mt-5 bg-gray-100 rounded-lg text-sm m-5 font-semibold overflow-hidden">
          <div className="flex justify-between border-b border-gray-300 p-3">
            <span>Order Summary</span>

            <span>
              {service?.price === 0
                ? "₹0"
                : `₹${service?.price + 10}`}
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-300 p-3">
            <span>{service?.title}</span>

            <span>
              {service?.price === 0
                ? "Free"
                : `₹${service?.price}`}
            </span>
          </div>

          <div className="flex justify-between p-3 border-b border-gray-300">
            <span>Platform fee</span>

            <span>
              {service?.price === 0
                ? "Free"
                : "₹10"}
            </span>
          </div>

          <div className="flex justify-between font-semibold p-3">
            <span>Total</span>

            <span>
              {service?.price === 0
                ? "₹0"
                : `₹${service?.price +10}`}
            </span>
          </div>
        </div>

        {/* TERMS */}
        <p className="text-xs text-gray-400 mt-3 font-semibold tracking-wide text-center px-5">
          By clicking Confirm, you agree
          to{" "}
          <span className="text-black underline">
            Terms & Refund Policies
          </span>
        </p>

        {/* SECURITY */}
        <p className="text-xs text-gray-400 mt-3 font-semibold tracking-wide text-center bg-gray-100 p-3 m-5 rounded-lg">
          Payments are 100% secure &
          encrypted Terms & Conditions
        </p>

        {/* POWERED BY */}
        <div className="flex flex-col justify-center items-center mt-5 bg-gray-50 p-3 m-5 rounded-lg font-semibold">
          <p className="flex items-center gap-2">
            <Link to="/">
              <img
                src={logoIcon}
                alt=""
                className="w-4 h-4"
              />
            </Link>
            Powered by topmate.io
          </p>

          <p className="text-sm font-semibold p-2 text-center">
            (Nikesh & Tanush Technologies
            Private Limited)
          </p>
        </div>
      </div>

      {/* STICKY FOOTER */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center py-3">
        <div className="w-[420px] shadow-lg flex p-5 justify-between items-center bg-gray-300 rounded-xl">
          <span className="font-semibold ">
            {service?.price === 0 ? "Free" : `₹ ${service?.price + 10}`}
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