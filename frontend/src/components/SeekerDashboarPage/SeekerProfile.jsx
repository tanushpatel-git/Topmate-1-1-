import React, { useState, useEffect } from "react";

const SeekerProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    graduationYear: "",
  });

  // 🔥 Dummy Profile Data
  const dummyUser = {
    firstName: "Nikesh",
    lastName: "Sharma",
    graduationYear: "2026",
  };

  // 🔥 Dummy Account Data
  const accountData = {
    email: "nikeshparte726@yahoo.comgmail.com",
    phone: "+918827934630",
    notifications: "Email, Whatsapp",
    joined: "4:42PM, 30th Mar 2026",
  };

  useEffect(() => {
    setTimeout(() => {
      setFormData(dummyUser);
      setLoading(false);
    }, 500);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Saved:", formData);
    alert("Saved (dummy)");
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 md:px-12 py-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Profile</h1>

        <button
          onClick={handleSave}
          className="bg-black text-white px-5 py-2 rounded-full text-sm"
        >
          Save changes
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 rounded-full border text-sm ${
            activeTab === "profile"
              ? "border-black bg-white font-medium"
              : "border-gray-300 text-gray-600"
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setActiveTab("account")}
          className={`px-4 py-2 rounded-full border text-sm ${
            activeTab === "account"
              ? "border-black bg-white font-medium"
              : "border-gray-300 text-gray-600"
          }`}
        >
          Account
        </button>
      </div>

      <div className="border-b mb-8"></div>

      {/* ================= PROFILE TAB ================= */}
      {activeTab === "profile" && (
        <div className="max-w-3xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                First Name
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Last Name
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Your graduation year
            </label>
            <input
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              className="w-full md:w-1/2 border px-4 py-2 rounded-md"
            />
          </div>
        </div>
      )}

      {/* ================= ACCOUNT TAB ================= */}
      {activeTab === "account" && (
        <div className="max-w-3xl space-y-10">
          
          {/* Your Details */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Your details
            </h2>

            {/* Email */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Email address</p>
                <p className="text-gray-800">{accountData.email}</p>
              </div>
              <button className="text-sm underline">Edit</button>
            </div>

            {/* Phone */}
            <div className="flex justify-between items-start border-b pb-4 mb-4  border-gray-200">
              <div>
                <p className="text-sm text-gray-600">Mobile number</p>
                <p className="text-gray-800">{accountData.phone}</p>
              </div>
              <button className="text-sm underline">Edit</button>
            </div>

            {/* Password */}
            <div className="flex justify-between items-start border-b pb-4  border-gray-200">
              <div>
                <p className="text-sm text-gray-600">Password</p>
              </div>
              <button className="text-sm underline">Edit</button>
            </div>

            <p className="text-xs text-gray-400 mt-4  border-gray-200">
              User Since {accountData.joined}
            </p>
          </div>

          {/* Notifications */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-gray-800 ">
              Notifications
            </h2>

            <div className="flex justify-between items-start border-b  border-gray-200 pb-4">
              <div>
                <p className="text-sm text-gray-600">
                  Booking notifications
                </p>
                <p className="text-gray-800">
                  On: {accountData.notifications}
                </p>
              </div>
              <button className="text-sm underline">Edit</button>
            </div>
          </div>

          {/* Help */}
          <p className="text-sm text-gray-600">
            Do you need help with your account settings?{" "}
            <span className="underline cursor-pointer">
              Send a query
            </span>
          </p>

          {/* Delete */}
          <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50">
            Delete Account
          </button>
        </div>
      )}
    </div>
  );
};

export default SeekerProfile;