import React, { useState, useEffect } from "react";
import EditableField from "./EditableField";
import useUpdate from "../../hooks/useUpdate";
import userDeleteProfile from "../../services/userAuthServices/userDeleteProfile";
import { useDispatch } from "react-redux";
import { clearUserDetails } from "../../redux/userData/userDetails";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SeekerProfile = ({ userData }) => {

  const { isPending: isDoneUpdate, mutate: updateProfileReq } = useUpdate();

  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editingField, setEditingField] = useState(null);

  const handleDelete = async () => {
    const res = await userDeleteProfile();
    if (res.status) {
      dispatch(clearUserDetails());
      toast.success("Profile deleted successfully");
      navigate("/");
    }
    else {
      toast.error("Failed to delete profile");
    }

  }


  useEffect(() => {
    if (userData) {
      setFormData(userData);
      console.log(formData.joinDate)
    }

  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(name, value, formData);
  };


  const handleSave = () => {
    updateProfileReq(formData);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 md:px-12 py-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Profile</h1>

        <button disabled={isDoneUpdate}
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
          className={`px-4 py-2 rounded-full border text-sm ${activeTab === "profile"
            ? "border-black bg-white font-medium"
            : "border-gray-300 text-gray-600"
            }`}
        >
          Profile
        </button>

        <button
          onClick={() => setActiveTab("account")}
          className={`px-4 py-2 rounded-full border text-sm ${activeTab === "account"
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
                firstName
              </label>

              <input
                placeholder="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                lastName
              </label>
              <input
                placeholder="lastName"
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
              placeholder="Your graduation year"
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
            <EditableField
              label="Email address"
              name="email"
              value={formData.email}
              editingField={editingField}
              setEditingField={setEditingField}
              handleChange={handleChange}
            />


            <EditableField
              label="Mobile number"
              name="whatsAppNumber"
              value={formData.whatsAppNumber}
              editingField={editingField}
              setEditingField={setEditingField}
              handleChange={handleChange}
            />

            <EditableField
              label="Password"
              name="password"
              value={formData.password}
              editingField={editingField}
              setEditingField={setEditingField}
              handleChange={handleChange}
              type="password"
              isPassword={true}
            />


            <p className="text-sm font-medium text-gray-400 mt-4  border-gray-200">
              User Since {formData.joinDate ? formData.joinDate : "N/A"}
            </p>
          </div>

          {/* Notifications */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-gray-800 ">
              Notifications
            </h2>

            <div className="flex justify-between items-start border-b  border-gray-200 pb-4">
              <div>
                <p className="text-lg font-medium text-gray-600">
                  Booking notifications
                </p>
                <p className="text-gray-800">
                  On: whatsApp
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
          <button

            onClick={handleDelete}
            className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50"   >

            Delete Account
          </button>
        </div>
      )}
    </div>
  );
};

export default SeekerProfile;