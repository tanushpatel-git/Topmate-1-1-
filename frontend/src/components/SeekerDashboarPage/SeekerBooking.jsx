import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import GetSeekerBookingsHook from "../../hooks/GetSeekerBookingsHook";
import { SkeletonBookingList } from "../ui/Skeleton";

function SeekerBooking() {

  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData);

  const [activeTab, setActiveTab] = useState("upcoming");

  const [activeFilter, setActiveFilter] =
    useState("one-to-one");

  const [data, setData] = useState([]);



  // FILTERS
  const filters = [
    {
      label: "1:1 calls",
      value: "one-to-one",
    },
    {
      label: "Products/Courses",
      value: "product",
    },

    {
      label: "PriorityDm",
      value: "priorityDm",
    },
    {
      label: "Workshops/Live Cohorts",
      value: "webinar",
    },
    {
      label: "Packages",
      value: "package",
    },

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

  const formatBookingDateTime = (date, time, duration) => {

    const bookingDate = new Date(date);

    // time = "08:20"
    const [hours, minutes] = time.split(":");

    bookingDate.setHours(hours);
    bookingDate.setMinutes(minutes);

    const startTime = bookingDate.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const endDate = new Date(bookingDate.getTime() + duration * 60000);

    const endTime = endDate.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const formattedDate = bookingDate.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    return `${formattedDate} ${startTime} - ${endTime}`;
  };


  
  // HOOK
  const {
    bookings,
    loading,
    error,
    getSeekerBookings,
  } = GetSeekerBookingsHook();

  // FETCH BOOKINGS
  useEffect(() => {
    if (!userData?.userId) return;
    getSeekerBookings(userData.userId);
  }, [userData]);



  // FILTER BOOKINGS
  useEffect(() => {
    if (!bookings) return;

if (activeFilter === "priorityDm") {
    setData([]);
    return;
  }


    const filteredData = bookings.filter((item) => {
      const categoryMatch = item?.service?.category === activeFilter;

      // categories that DON'T need tab filtering
      const noTabFilterCategories = [
        "product",
        "priorityDm",
        "package",
      ];

      // show all data
      if (noTabFilterCategories.includes(activeFilter)) {
        return categoryMatch;
      }

      // apply tab filtering
      let statusMatch = false;

      if (activeTab === "upcoming") {
        statusMatch = item?.status === "confirmed";
      }

      if (activeTab === "completed") {
        statusMatch = item?.status === "completed";
      }

      return categoryMatch && statusMatch;
    });



      setData(filteredData);
  }, [bookings, activeFilter, activeTab]);


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
            onClick={() => setActiveFilter(item.value)}
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
      <div className={`flex gap-6 border-b mb-10 ${activeFilter === "one-to-one" || activeFilter === "webinar" ? "" : "hidden"}`}>

        <button
          onClick={() => setActiveTab("upcoming")}
          className={`pb-2 text-sm transition-all duration-200 ${activeTab === "upcoming"
            ? "border-b-2 border-black font-medium text-black"
            : "text-gray-500"
            }`}
        >
          Upcoming
        </button>

        <button
          onClick={() => setActiveTab("completed")}
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

        <div className="space-y-4">

          {data.map((item) => (

            <div
              key={item._id}
              className="max-w-2xl  bg-white border rounded-2xl shadow-sm overflow-hidden"
            >

              {/* TOP */}
              <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">

                <span className="text-sm bg-gray-100 border border-gray-400  px-3 py-1 rounded-full capitalize font-bold">
                  {item?.service?.category === "one-to-one" ? 'Video call' : item?.service?.category}
                </span>
                <span className="text-black font-bold">
                  {item?.service?.category !== "product" &&
                    formatBookingDateTime(
                      item?.date,
                      item?.time,
                      item?.duration
                    )}
                </span>

              </div>

              {/* BODY */}
              <div className="p-6">

                {/* TITLE */}
                <h2 className="text-xl font-semibold text-gray-800">
                  {item?.service?.title}
                </h2>

                {/* CREATOR */}
                <p className="text-blue-600 underline mt-1 cursor-pointer">
                  {item?.creator?.firstName}{" "}
                  {item?.creator?.lastName}
                </p>

                {/* BOTTOM */}
                <div className="flex justify-between items-center mt-6">

                  {/* STATUS */}
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${item?.status === "completed"
                      ? "bg-green-100 text-green-600"
                      : item?.status === "cancelled"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {item.service.category !== 'product' ?
                      item?.status : ''
                    }

                  </span>

                  {/* BUTTON */}
                  <div className="flex gap-2 ">
                    <button className="bg-gray-300 text-black px-4 py-2 rounded-lg text-sm hover:opacity-90"
                      onClick={() => {
                        navigate("/booking/success", {
                          state: {
                            booking: item,
                            service: item?.service,
                            creator: item?.creator,
                          },
                        });
                      }}
                    >
                      Booking Details


                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg text-sm ${item?.service?.category !== "product" && !isMeetingTimeReached(item?.date, item?.time)
                        ? "bg-gray-400 text-gray-500 cursor-not-allowed"
                        : "bg-black text-white hover:opacity-90"
                        }`}
                      onClick={() => {
                        if (item?.service?.category !== "product") {
                          if (item?.meetingLink && isMeetingTimeReached(item?.date, item?.time)) {
                            window.open(item.meetingLink, "_blank");
                          }
                        } else {
                          navigate("/booking/success", {
                            state: {
                              booking: item,
                              service: item?.service,
                              creator: item?.creator,
                            },
                          });
                        }
                      }}
                      disabled={item?.service?.category !== "product" && !isMeetingTimeReached(item?.date, item?.time)}
                    >
                      {item?.service?.category !== "product"
                        ? "Join"
                        : "Access"}
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

          <h2 className="text-4xl font-semibold text-gray-700 mb-3">
            So empty..
          </h2>

          {activeFilter === "priorityDm" ? (
            <p className="text-gray-700 text-lg font-semibold mb-8">
              Already sent a DM? Your answer will be delivered straight to your email and WhatsApp inbox
            </p>
          ): (
            <p className="text-gray-700 text-lg font-semibold mb-8">
              No {activeTab} bookings found.
            </p>)
          }

          <div className="flex items-center justify-between w-full max-w-xl border rounded-2xl p-5 bg-white shadow-sm">

            <div className="flex items-center gap-4">

              <img
                className="w-14 h-14"
                src="https://topmate.io/cdn-cgi/image/width=96,quality=90/images/follower-dashboard/bookings/Empty-1.png"
                alt=""
              />

              <div className="text-left">
{
  activeFilter === "priorityDm" ? (
    <h3 className="font-semibold text-gray-800">
      Send DM to 100+ experts
    </h3>
  ) : (
    <h3 className="font-semibold text-gray-800">
      No {activeTab} bookings found.
    </h3>
  )
}

                <p className="text-sm text-gray-500">
                  Search for experts on topmate
                </p>

              </div>

            </div>

            <button
              className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:opacity-90"
              onClick={() => navigate("/search")}
            >
              Try Here
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default SeekerBooking;