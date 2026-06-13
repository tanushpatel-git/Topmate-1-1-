import React, { useEffect } from "react";
import useSellerEarnings from "../../hooks/useSellerEarnings";
import { useNavigate } from "react-router-dom";
import useWithdrawal from "../../hooks/useWithdrawal";
import { useState } from "react";
import toast from "react-hot-toast";



const PayoutSeller = () => {

  const navigate = useNavigate();

  const [showWithdrawals, setShowWithdrawals] =useState(false);

  const {
    earnings,
    loading,
    fetchEarnings,
  } = useSellerEarnings();

  const {
    requestWithdrawal,
    getWithdrawals,
    withdrawals,
    loading: withdrawalLoading,
  } = useWithdrawal();


  useEffect(() => {
    fetchEarnings();
  }, []);

  useEffect(() => {
    getWithdrawals();
  }, []);

  const handleWithdraw = async () => {
    try {
      const res = await requestWithdrawal();
      toast.success(res.message);
      await fetchEarnings();
       await getWithdrawals();


    } catch (error) {
      toast.error(error?.response?.data?.message || "Withdrawal failed");
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading earnings...
      </div>
    );
  }


    // Withdrawal requested but not yet paid
    const pendingWithdrawal = withdrawals
      .filter(
        (withdrawal) =>
          withdrawal.status === "pending" 
      )
      .reduce(
        (sum, withdrawal) => sum + withdrawal.amount,
        0
      );


  const stats = earnings?.stats || {};
  return (
  
    <div className="w-full min-h-screen bg-white">
      <nav className="w-full border-b bg-white px-4 md:px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Payments</h1>
        <button
          className="bg-black text-white px-4 md:px-8 py-3 rounded-lg font-medium hover:opacity-90 transition cursor-pointer" onClick={() => navigate("/creator-dashboard/setting")}>
          Connect Payout
        </button>
      </nav>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8">
        {/* Withdrawable */}
        <div className="bg-[#faf7ef] border border-[#f1d18a] rounded-2xl p-6 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-semibold">Withdrawable Balance </p>
          <h2 className="text-4xl font-bold mt-3">
            ₹{stats.availableBalance || 0}
          </h2>

          <div className="flex gap-3 mt-6">

            <button onClick={handleWithdraw} disabled={ stats.availableBalance <= 0 || withdrawalLoading } className={`flex-1 py-2 rounded-lg font-medium ${stats.availableBalance > 0 ? "bg-black text-white": "bg-gray-300 text-gray-500"}`}>
              {withdrawalLoading
                ? "Processing..."
                : `Withdraw ₹${stats.availableBalance}`}
            </button>

            <button className="border px-4 rounded-lg">
              Breakdown
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No holds
          </p>
        </div>

        {/* Pending */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-semibold">
            In Withdrawal
          </p>

          <h2 className="text-4xl font-bold mt-3">
            ₹{pendingWithdrawal || 0}            
          </h2>

          <p className="text-gray-500 mt-3">
            No pending withdrawals
          </p>
          <button
            onClick={() => setShowWithdrawals(true)}
            className="mt-10 text-sm font-semibold hover:text-blue-600"
          >
            Past withdrawals →
          </button>
        </div>

        {/* Lifetime */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-semibold"> Lifetime Earnings </p>
          <h2 className="text-4xl font-bold mt-3"> ₹{stats.totalEarnings || 0} </h2>
          <p className="text-gray-500 mt-3"> Total you've earned </p>
        </div>
      </div>
      <div className="px-4 md:px-8 mt-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl font-bold">
            Transactions
          </h2>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block mt-6 bg-white rounded-2xl border shadow-sm overflow-hidden m-5 ">

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                DATE
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                DESCRIPTION
              </th>

              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                BOOKING STATUS
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                PAYOUT STATUS
              </th>

              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                AMOUNT
              </th>
            </tr>
          </thead>

          <tbody>
            {earnings?.bookings?.map((booking) => (
              <tr
                key={booking._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-gray-700">
                  {new Date(
                    booking.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 font-medium text-gray-900">
                  {booking.service?.title}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
              ${booking.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "confirmed"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="p-4">
                  {booking.withdrawn ? (
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      Withdrawn
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
                      Available
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 text-right">
                  <span className="font-bold text-green-600">
                    ₹{booking.sellerEarning}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* Mobile Cards */}
      <div className="md:hidden px-4 mt-6 space-y-4">

        {earnings?.bookings?.map((booking) => (

          <div
            key={booking._id}
            className="bg-white border rounded-2xl p-4 shadow-sm"
          >

            <div className="flex justify-between items-start">

              <div>
                <h3 className="font-semibold text-gray-900">
                  {booking.service?.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {new Date(
                    booking.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
          ${booking.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : booking.status === "confirmed"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
              >
                {booking.status}
              </span>

            </div>

            <div className="flex justify-between items-center mt-4">

              <div>
                <p className="text-xs text-gray-500">
                  Seller Earnings
                </p>

                <p className="text-xl font-bold text-green-600">
                  ₹{booking.sellerEarning}
                </p>
              </div>

              <div>
                {booking.withdrawn ? (
                  <span className="text-sm font-medium text-green-600">
                    Withdrawn
                  </span>
                ) : (
                  <span className="text-sm font-medium text-orange-500">
                    Available
                  </span>
                )}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Empty State */}
      {earnings?.bookings?.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">

          <div className="text-6xl">
            💸
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            No transactions yet
          </h3>

          <p className="text-gray-500 mt-2">
            Your earnings will appear here.
          </p>

        </div>
      )}



{showWithdrawals && (
  <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">

    <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[80vh] overflow-auto">

      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b">

        <h2 className="text-2xl font-bold">
          Withdrawal History
        </h2>

        <button
          onClick={() =>
            setShowWithdrawals(false)
          }
          className="text-2xl font-bold text-gray-500 hover:text-black"
        >
          ✕
        </button>

      </div>

      {/* Content */}
      <div className="p-5">

        {withdrawals?.length > 0 ? (
          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left p-4">
                  Date
                </th>

                <th className="text-left p-4">
                  Amount
                </th>

                <th className="text-left p-4">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {withdrawals.map((item) => (
                <tr
                  key={item._id}
                  className="border-b"
                >
                  <td className="p-4">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4 font-semibold">
                    ₹{item.amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status ===
                        "completed"
                          ? "bg-green-100 text-green-700"
                          : item.status ===
                            "failed"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No withdrawals yet
          </div>
        )}

      </div>

    </div>

  </div>
)}


    </div>
  );
};

export default PayoutSeller;