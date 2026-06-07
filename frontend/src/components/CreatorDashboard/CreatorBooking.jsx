import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmptyScreen from "../../assets/EmptyScreen.svg";
import { useSelector } from "react-redux";
import GetCreatorBookingsHook from "../../hooks/GetCreatorBookingsHook";
import { ChevronDown } from "lucide-react";
import CancelBookingHook from "../../hooks/CancelBookingHook";
import { SkeletonBookingList } from "../ui/Skeleton";
import toast from "react-hot-toast";
import PriorityDmAnswer from "./PriorityDmAnswer";


function CreatorBooking() {

  const { type, status } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const [data, setData] = useState([]);
  const [option, setoption] = useState(false)



  const {
    bookings,
    loading,
    error,
    getCreatorBookings,
  } = GetCreatorBookingsHook();

  const {
    cancelBooking,
    loading: cancelLoading,
    error: cancelError,
  } = CancelBookingHook();


  const activeFilter = type || "one-to-one";
  const activeTab = status || "upcoming";

  const filters = [
    { label: "1:1 calls", value: "one-to-one" },
    { label: "Products/Courses", value: "product" },
    { label: "Workshops/Live Cohorts", value: "webinar" },
    { label: "Packages", value: "package" },
  ];

  const isMeetingTimeReached = (date, time) => {
    if (!date || !time) return false;
    const [hours, minutes] = time.split(":");
    const meetingDate = new Date(date);
    meetingDate.setHours(hours);
    meetingDate.setMinutes(minutes);
    meetingDate.setSeconds(0);
    return new Date() >= meetingDate;
  };

  const formatBookingDateTime = (
    date,
    time,
    duration
  ) => {

    const bookingDate = new Date(date);

    const [hours, minutes] = time.split(":");

    bookingDate.setHours(hours);
    bookingDate.setMinutes(minutes);

    const startTime =
      bookingDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

    const endDate = new Date(
      bookingDate.getTime() + duration * 60000
    );

    const endTime =
      endDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

    const formattedDate =
      bookingDate.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

    return `${formattedDate} ${startTime} - ${endTime}`;
  };

  // FETCH BOOKINGS
  useEffect(() => {

    if (!userData?.userId) return;

    getCreatorBookings(userData.userId);

  }, [userData]);

  // FILTER BOOKINGS
  useEffect(() => {

    if (!bookings) return;

    const filteredData = bookings.filter(
      (item) => {

        const categoryMatch =
          item?.service?.category ===
          activeFilter;

        // categories that DON'T need tab filtering
        const noTabFilterCategories = [
          "product",
          "priorityDm",
        ];

        // show all data
        if (
          noTabFilterCategories.includes(
            activeFilter
          )
        ) {
          return categoryMatch;
        }

        let statusMatch = false;

        // UPCOMING
        if (activeTab === "upcoming") {
          statusMatch =
            item?.status === "confirmed";
        }

        // COMPLETED
        if (activeTab === "completed") {
          statusMatch =
            item?.status === "completed";
        }

        return (
          categoryMatch && statusMatch
        );
      }
    );

      setData(filteredData);


  }, [
    bookings,
    activeFilter,
    activeTab,
  ]);

  const handleTabChange = (tab) => { navigate(`/creator-dashboard/calls/${activeFilter}/${tab}`); };

  const handleFilterChange = (
    filter) => {
    navigate(
      `/creator-dashboard/calls/${filter}/${activeTab}`
    );
  };




  // LOADING
  if (loading) {
    return <SkeletonBookingList />;
  }

  // ERROR
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-semibold">
          {error}
        </p>
      </div>
    );
  }


  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-6">

      {/* HEADING */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Bookings
      </h1>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3 mb-6">

        {filters.map((item) => (

          <button
            key={item.value}
            onClick={() =>
              handleFilterChange(item.value)
            }
            className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${activeFilter === item.value
              ? "bg-black text-white border-black"
              : "border-gray-300 bg-white text-gray-600"
              }`}
          >
            {item.label}
          </button>

        ))}

      </div>

      {/* TABS */}
      <div
        className={`flex gap-6 border-b mb-10 ${[
          "one-to-one",
          "webinar",
        ].includes(activeFilter)
          ? ""
          : "hidden"
          }`}
      >

        <button
          onClick={() =>
            handleTabChange("upcoming")
          }
          className={`pb-2 text-sm transition-all duration-200 ${activeTab === "upcoming"
            ? "border-b-2 border-black font-medium text-black"
            : "text-gray-500"
            }`}
        >
          Upcoming
        </button>

        <button
          onClick={() =>
            handleTabChange("completed")
          }
          className={`pb-2 text-sm transition-all duration-200 ${activeTab === "completed"
            ? "border-b-2 border-black font-medium text-black"
            : "text-gray-500"
            }`}
        >
          Completed
        </button>

      </div>

      {/* BOOKINGS */}
      {data.length > 0 ? (
        <div className="space-y-4  ">

          {data.map((item) => (

            <div 
              key={item._id}
              className="max-w-2xl border rounded-2xl shadow-sm relative  "
            >

              {/* TOP */}
              <div className="flex justify-between items-center px-6 py-4 border-b  top-rounded-xl">

                <span className=" text-sm  bg-green-300 border border-gray-300 px-3 py-1 rounded-full capitalize font-bold">

                  ₹{item?.service?.price}
                </span>

                <span className="text-black font-bold">

                  {!["product", "priorityDm",].includes(item?.service?.category) ? (formatBookingDateTime(item?.date, item?.time, item?.duration)) : (item.service.category === 'product' ? "Document" : '')}

                </span>

              </div>

              {/* BODY */}
              <div className="p-6">
                {/* SEEKER */}
                <p className="text-blue-600mt-1 cursor-pointer">
                  {item?.seeker?.firstName}{" "}
                  {item?.seeker?.lastName}
                </p>
                <p className="text-blue-600mt-1 cursor-pointer">
                  {item?.service.title}{" "}
                </p>





                {/* BOTTOM */}
                <div className="flex justify-between w-[100%] items-center mt-6 ">

                  {/* STATUS */}
                  <span
                    className={`px-3 py-1 rounded-full  text-sm  font-medium capitalize ${item?.status === "completed"
                      ? "bg-green-600 text-green-600"
                      : item?.status ===
                        "cancelled"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-700"
                      }`}
                  > {!["product", "package",].includes(item?.service?.category) ? item?.status === 'confirmed' ? 'upcoming' : 'complete' : ""}

                  </span>

                  {/* BUTTONS */}

                  <div className="flex gap-3 relative ">

                    {/* DETAILS */}
                    <button
                      className="bg-gray-100 text-black px-4 py-2 rounded-lg text-sm hover:opacity-90 flex items-center"
                      onClick={() => setoption((prev) => !prev)}
                    >
                      More Action
                      <ChevronDown size={18} className="ml-2" />
                    </button>

                    {option && (
                      <div className="absolute right-0 top-12 bg-white  shadow-lg rounded-lg w-40 z-20">

                        <p
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                          onClick={() => {
                            navigate("/booking/success", {
                              state: {
                                booking: item,
                                service: item?.service,
                                creator: item?.seeker,
                              },
                            });
                          }}
                        >
                          Booking details
                        </p>

                        <p
                          className={`px-4 py-2 hover:bg-red-100 text-red-500 cursor-pointer text-sm ${item?.service?.category === "product" || item?.service?.category === "priorityDm" ? "hidden" : ""}`}
                          onClick={async () => {
                            const res = await cancelBooking(item._id);
                            if (res?.success) {

                              alert("Booking Cancelled");
                              getCreatorBookings(userData.userId);
                              setoption(false);
                            }
                          }}
                        >
                          Cancel
                        </p>

                      </div>
                    )}

                    {/* JOIN / ACCESS */}
                    <button
                      className={`px-4 py-2 rounded-lg text-sm ${item?.service?.category !== "product" && !isMeetingTimeReached(item?.date, item?.time)
                          ? "bg-gray-400 text-gray-500 cursor-not-allowed"
                          : "bg-black text-white hover:opacity-90"
                        }`}
                      onClick={() => {
                        if (item?.service?.category === "product") {
                          navigate("/booking/success", {
                            state: {
                              booking: item,
                              service: item?.service,
                              creator: item?.seeker,
                            },
                          });
                          return;
                        }
                        else if (item.service.category === 'one-to-one') {
                          navigate("/booking/video-call-status", {
                            state: {
                              booking: item,
                              service: item?.service,
                              creator: item?.seeker,
                            },
                          });
                        }
                      }}
                      disabled={item?.service?.category !== "product" && !isMeetingTimeReached(item?.date, item?.time)}
                    >
                      {item?.service?.category === "product"
                        ? "Access"
                        : "Join"}
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      ) : (

        // EMPTY STATE
        <div className="flex flex-col items-center justify-center mt-[8rem] text-center">

          <img
            src={EmptyScreen}
            alt="Empty"
            className="w-72"
          />

          <h2 className="text-4xl font-semibold text-gray-700 mb-3 mt-6">
            No bookings found
          </h2>

          <p className="text-gray-500 text-lg mb-8">
            Share your profile and start getting bookings.
          </p>

          <button
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90"
            onClick={() =>
              navigate("/search")
            }
          >
            Share Page
          </button>

        </div>

      )}

    </div>
  );
}

export default CreatorBooking;