import React, { useState, useEffect } from "react";
import { Mail, Phone, Lock, CreditCard, Link2, ShieldAlert, LogOut, Trash2, Wallet } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import updateProfile from "../../services/userAuthServices/updateProfile";
import logout from "../../services/userAuthServices/logOut";
import userDeleteProfile from "../../services/userAuthServices/userDeleteProfile";
import { getCurrUser } from "../../services/userAuthServices/getCurrUser";
import { clearUserDetails } from "../../redux/userData/userDetails";

const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { userId: _id } = useSelector((state) => state.userData);
  const USER_ID = _id;

  const [activeTab, setActiveTab] = useState("account");

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [bankName, setBankName] = useState("");

  const [integrationType, setIntegrationType] = useState("zoom");
  const [zoomLink, setZoomLink] = useState("");
  const [customLink, setCustomLink] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getCurrUser();
        if (res.status && res.user) {
          setEmail(res.user.email || "");
          setMobile(res.user.whatsAppNumber || "");
          setAccountNumber(res.user.accountNumber || "");
          setIfscCode(res.user.ifscCode || "");
          setAccountHolderName(res.user.accountHolderName || "");
          setUpiId(res.user.upiId || "");
          setBankName(res.user.bankName || "");
          const link = res.user.meetingLink || "";
          const type = res.user.meetingIntegrationType || "zoom";
          setIntegrationType(type);
          if (type === "zoom") {
            setZoomLink(link);
          } else {
            setCustomLink(link);
          }
        }
      } catch (err) {
        console.error("Failed to fetch user data", err);
      }
    };
    fetchUser();
  }, []);

  const { mutate: updateAccount, isPending: isUpdating } = useMutation({
    mutationFn: (data) => updateProfile(data),
    onSuccess: (data) => {
      if (data.status) {
        toast.success("Updated successfully");
        queryClient.invalidateQueries({ queryKey: ["currUser"] });
      } else {
        toast.error(data.message || "Update failed");
      }
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Something went wrong");
    },
  });

  const handleAccountSave = () => {
    const data = {};
    if (email) data.email = email;
    if (mobile) data.whatsAppNumber = mobile;
    if (password) data.password = password;
    updateAccount(data);
  };

  const handlePaymentSave = () => {
    if (!accountNumber.trim()) {
      toast.error("Account number is required");
      return;
    }
    updateAccount({ accountNumber, ifscCode, accountHolderName, upiId, bankName });
  };

  const handleIntegrationSave = () => {
    const link = integrationType === "zoom" ? zoomLink : customLink;
    updateAccount({ meetingLink: link, meetingIntegrationType: integrationType });
  };

  const handleLogout = () => {
    logout(navigate, dispatch, queryClient);
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        const res = await userDeleteProfile();
        if (res.status) {
          toast.success("Account deleted successfully");
          dispatch(clearUserDetails());
          queryClient.clear();
          navigate("/");
        } else {
          toast.error(res.message || "Failed to delete account");
        }
      } catch (err) {
        toast.error(err?.response?.data?.message || "Something went wrong");
      }
    }
  };

  const tabs = [
    { key: "account", label: "Account", icon: ShieldAlert },
    { key: "payments", label: "Payments", icon: CreditCard },
    { key: "integration", label: "Integration", icon: Link2 },
    { key: "advance", label: "Advance", icon: ShieldAlert },
  ];

  return (
    <div className="min-h-screen bg-white text-sm">
      <div className="border-b py-5">
        <h1 className="text-2xl font-semibold text-gray-700 px-10">Settings</h1>
        <div className="flex gap-4 px-10 mt-5">
          <button className={`px-4 py-2 rounded-full text-sm border ${activeTab === "account" ? "bg-gray-100 border-gray-300 hover:bg-gray-200" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setActiveTab("account")}>Account</button>
          <button className={`px-4 py-2 rounded-full text-sm border ${activeTab === "payments" ? "bg-gray-100 border-gray-300 hover:bg-gray-200" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setActiveTab("payments")}>Payments</button>
          <button className={`px-4 py-2 rounded-full text-sm border ${activeTab === "integration" ? "bg-gray-100 border-gray-300 hover:bg-gray-200" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setActiveTab("integration")}>Integration</button>
          <button className={`px-4 py-2 rounded-full text-sm border ${activeTab === "advance" ? "bg-gray-100 border-gray-300 hover:bg-gray-200" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setActiveTab("advance")}>Advance</button>
        </div>
      </div>

      <div className="w-full md:w-[60%] p-6 px-10 space-y-6">
        {activeTab === "account" && (
          <>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <h2 className="text-sm font-medium">Email</h2>
                  <p className="text-xs text-gray-500">Your registered email address</p>
                </div>
              </div>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-sm border rounded-lg px-4 py-2 w-full md:w-72" />
            </div>
            <hr />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <h2 className="text-sm font-medium">Mobile Number</h2>
                  <p className="text-xs text-gray-500">Your contact number</p>
                </div>
              </div>
              <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} className="text-sm border rounded-lg px-4 py-2 w-full md:w-72" />
            </div>
            <hr />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-3">
                <Lock className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <h2 className="text-sm font-medium">Password</h2>
                  <p className="text-xs text-gray-500">Leave blank to keep current password</p>
                </div>
              </div>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password" className="text-sm border rounded-lg px-4 py-2 w-full md:w-72" />
            </div>

            <div className="flex justify-end">
              <button onClick={handleAccountSave} className="bg-black text-white px-5 py-2 rounded-lg">{isUpdating ? "Saving..." : "Save"}</button>
            </div>

            <hr />

            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <div className="flex items-center gap-3">
                <Wallet className="w-6 h-6 text-green-600" />
                <div>
                  <h2 className="text-sm font-semibold text-green-800">Your Plan</h2>
                  <p className="text-xs text-green-600">10% + txcost we take per transaction</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "payments" && (
          <>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex gap-3">
                <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <h2 className="text-sm font-medium">Account Holder Name</h2>
                  <p className="text-xs text-gray-500">Name on the bank account</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full md:w-72">
                <input type="text" value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} placeholder="Enter account holder name" className="text-sm border rounded-lg px-4 py-2 w-full" />
              </div>
            </div>

            <hr />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex gap-3">
                <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <h2 className="text-sm font-medium">Account Number</h2>
                  <p className="text-xs text-gray-500">Required for payouts</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full md:w-72">
                <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Enter your account number" className="text-sm border rounded-lg px-4 py-2 w-full" />
                {!accountNumber.trim() && <p className="text-xs text-red-500">* Account number is mandatory</p>}
              </div>
            </div>

            <hr />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex gap-3">
                <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <h2 className="text-sm font-medium">IFSC Code</h2>
                  <p className="text-xs text-gray-500">Your bank branch IFSC code</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full md:w-72">
                <input type="text" value={ifscCode} onChange={(e) => setIfscCode(e.target.value)} placeholder="Enter IFSC code" className="text-sm border rounded-lg px-4 py-2 w-full" />
              </div>
            </div>

            <hr />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex gap-3">
                <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <h2 className="text-sm font-medium">Bank Name</h2>
                  <p className="text-xs text-gray-500">Name of your bank</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full md:w-72">
                <input type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} placeholder="Enter bank name" className="text-sm border rounded-lg px-4 py-2 w-full" />
              </div>
            </div>

            <hr />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex gap-3">
                <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <h2 className="text-sm font-medium">UPI ID</h2>
                  <p className="text-xs text-gray-500">Your UPI ID for payments</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full md:w-72">
                <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} placeholder="Enter UPI ID" className="text-sm border rounded-lg px-4 py-2 w-full" />
              </div>
            </div>

            <div className="flex justify-end">
              <button onClick={handlePaymentSave} className="bg-black text-white px-5 py-2 rounded-lg">{isUpdating ? "Saving..." : "Save"}</button>
            </div>
          </>
        )}

        {activeTab === "integration" && (
          <>
            <div className="flex gap-3 mb-2">
              <Link2 className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <h2 className="text-sm font-medium">Meeting Integration</h2>
                <p className="text-xs text-gray-500">Choose your meeting provider and enter your link</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setIntegrationType("zoom")} className={`px-4 py-2 rounded-lg border text-sm ${integrationType === "zoom" ? "border-black font-medium" : "border-gray-300"}`}>Zoom Meeting</button>
              <button onClick={() => setIntegrationType("custom")} className={`px-4 py-2 rounded-lg border text-sm ${integrationType === "custom" ? "border-black font-medium" : "border-gray-300"}`}>Custom Meeting</button>
            </div>

            {integrationType === "custom" && (
              <>
                <input type="url" value={customLink} onChange={(e) => setCustomLink(e.target.value)} placeholder="Enter your custom meeting link" className="text-sm border rounded-lg px-4 py-2 w-full" />
                <p className="text-xs text-gray-500">Enter your own meeting link (Google Meet, Teams, etc.)</p>
              </>
            )}

            {integrationType === "zoom" && (
              <p className="text-xs text-gray-500">Zoom meetings are created automatically by Topmate when a session is booked. You don't need to enter a link.</p>
            )}

            <div className="flex justify-end">
              <button onClick={handleIntegrationSave} className="bg-black text-white px-5 py-2 rounded-lg">{isUpdating ? "Saving..." : "Save"}</button>
            </div>
          </>
        )}

        {activeTab === "advance" && (
          <>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-3">
                <LogOut className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <h2 className="text-sm font-medium">Log Out</h2>
                  <p className="text-xs text-gray-500">Sign out from your account</p>
                </div>
              </div>
              <button onClick={handleLogout} className="text-sm px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Log Out</button>
            </div>
            <hr />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-3">
                <Trash2 className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h2 className="text-sm font-medium text-red-600">Delete Account</h2>
                  <p className="text-xs text-gray-500">Permanently delete your account and all data</p>
                </div>
              </div>
              <button onClick={handleDeleteAccount} className="text-sm px-5 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">Delete Account</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Setting;
