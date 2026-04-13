import React, { useState, useEffect } from "react";

const SeekerRewards = () => {
  const [activeTab, setActiveTab] = useState("rewards");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //  Dummy Backend Data
  const dummyData = {
    rewards: [
      {
        id: 1,
        title: "Quest Reward",
        amount: 200,
        description: "Earned from completing quests",
      },
      {
        id: 2,
        title: "Bonus Reward",
        amount: 500,
        description: "Special campaign reward",
      },
    ],
    badges: [
      {
        id: 1,
        title: "Top Performer",
        description: "Completed 10+ sessions",
      },
      {
        id: 2,
        title: "Rising Star",
        description: "Great engagement",
      },
    ],
  };

  // ✅ Simulate API
  useEffect(() => {
    setTimeout(() => {
      setData(dummyData[activeTab]);
      setLoading(false);
    }, 500);
  }, [activeTab]);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 md:px-12 py-8">
      
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Rewards & Badges
      </h1>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => {
            setActiveTab("rewards");
            setLoading(true);
          }}
          className={`px-4 py-2 rounded-full border text-sm ${
            activeTab === "rewards"
              ? "border-black bg-white font-medium"
              : "border-gray-300 text-gray-600"
          }`}
        >
          Rewards
        </button>

        <button
          onClick={() => {
            setActiveTab("badges");
            setLoading(true);
          }}
          className={`px-4 py-2 rounded-full border text-sm ${
            activeTab === "badges"
              ? "border-black bg-white font-medium"
              : "border-gray-300 text-gray-600"
          }`}
        >
          Badges
        </button>
      </div>

      <div className="border-b mb-8"></div>

      {/* 🔥 Data Section */}
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {activeTab === "rewards" &&
            data.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl border shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-2xl font-bold text-green-600 mt-2">
                  ₹{item.amount}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {item.description}
                </p>
              </div>
            ))}

          {activeTab === "badges" &&
            data.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl border shadow-sm text-center"
              >
                <div className="text-4xl mb-3">🏆</div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      ) : (
        /* 🔥 Empty State */
        <div className="flex flex-col items-center justify-center mt-24 text-center">
          
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt=""
            className="w-28 mb-4 opacity-80"
          />

          <h2 className="text-xl font-semibold text-gray-700">
            Get ready!
          </h2>

          <p className="text-gray-500 mt-2">
            No {activeTab} available yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default SeekerRewards;