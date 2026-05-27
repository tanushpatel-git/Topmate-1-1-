import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import EmptyScreen from "../../assets/empty-screen-dm.svg";
import GetCreatorBookingsHook from "../../hooks/GetCreatorBookingsHook";

const PriorityDmPending = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const userData = useSelector((state) => state.userData);


  const {
    bookings,
    loading,
    error,
    getCreatorBookings,
  } = GetCreatorBookingsHook();

  // FETCH BOOKINGS
  useEffect(() => {
    if (!userData?.userId) return;

    getCreatorBookings(userData.userId);
  }, [userData]);

  // FILTER ONLY PRIORITY DM BOOKINGS
  useEffect(() => {
    if (!bookings) return;

    const filteredData = bookings.filter(
      (item) =>
        item?.service?.category === "priorityDm"
    );

    setData(filteredData);
  }, [bookings]);

  console.log(data);

  return (
    <div>
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
        <div className="px-6 md:px-20 py-6">

          {data.map((item, index) => (
            <div   key={index} className="border rounded-xl p-5 mb-4 shadow-sm">
           
           
            </div>
          ))}
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