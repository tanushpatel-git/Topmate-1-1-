import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import useAnalytics from "../../hooks/useAnalytics";
import { FiCalendar } from "react-icons/fi";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const periods = [ { key: "week", label: "Week" },{ key: "month", label: "Month" },{ key: "year", label: "Year" },];

const Analytics = () => {
  const userData = useSelector((state) => state.userData);
  const [activePeriod, setActivePeriod] = useState("week");
  const { analytics, loading, error, fetchAnalytics } = useAnalytics();

  useEffect(() => {
    fetchAnalytics(activePeriod);
  }, [activePeriod, fetchAnalytics]);

const maxVal = Math.max(...(analytics?.data || []), 0);

  const chartData = {
    labels: analytics?.labels || [],
    datasets: [
      {
        label: "Bookings",
        data: analytics?.data || [],
        borderColor: "#2563EB",
        backgroundColor: "rgba(37, 99, 235, 0.1)",
        borderWidth: 2.5,
        pointBackgroundColor: "#2563EB",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#fff",
        bodyColor: "#fff",
        cornerRadius: 8,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280", font: { size: 11 } },
      },
      y: {
        beginAtZero: true,
        max: maxVal + 1,
        grid: { color: "#f3f4f6" },
        ticks: {
          color: "#6b7280",
          font: { size: 11 },
          stepSize: 1,
        },
      },
    },
  };

  const periodLabel = periods.find((p) => p.key === activePeriod)?.label || "";

  return (
    <div className="w-full min-h-screen bg-white">
      <nav className="hidden md:flex w-full border-b border-gray-200 bg-white px-4 md:px-8 py-4 items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-black ml-2 md:ml-10">
          Analytics
        </h1>
        <div className="flex items-center gap-2">
          <img
            src={userData.userImage}
            alt=""
            className="h-10 w-12 object-cover rounded-full"
          />
          <p className="text-sm font-medium text-black">
            {userData.firstName} {userData.lastName}
          </p>
        </div>
      </nav>

      <div className="p-4 md:p-8 max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-lg font-semibold text-black">
            Booking Overview
          </h2>
          <div className="flex gap-2">
            {periods.map((p) => (
              <button
                key={p.key}
                onClick={() => setActivePeriod(p.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activePeriod === p.key
                    ? "bg-[#2563EB] text-white"
                    : "bg-white text-black border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white border rounded-xl p-5 animate-pulse"
              >
                <div className="h-4 w-20 bg-gray-200 rounded mb-3" />
                <div className="h-7 w-16 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6">
            {error}
          </div>
        )}

        {!loading && !error && analytics && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border rounded-xl p-5">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <FiCalendar size={16} />
                  <span className="text-black">Total Bookings ({periodLabel})</span>
                </div>
                <p className="text-3xl font-bold text-black">
                  {analytics.total}
                </p>
              </div>

              <div className="bg-white border rounded-xl p-5">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <FiCalendar size={16} />
                  <span className="text-black">Average per Day</span>
                </div>
                <p className="text-3xl font-bold text-black">
                  {analytics.data.length > 0
                    ? (analytics.total / analytics.data.length).toFixed(1)
                    : "0"}
                </p>
              </div>

              <div className="bg-white border rounded-xl p-5">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <FiCalendar size={16} />
                  <span className="text-black">Best Day</span>
                </div>
                <p className="text-3xl font-bold text-black">
                  {Math.max(...analytics.data, 0)}
                </p>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-base font-semibold text-black mb-4">
                Bookings by {activePeriod === "year" ? "Month" : "Day"}
              </h3>
              <div className="h-72">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </>
        )}

        {!loading && !error && !analytics && (
          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-base font-semibold text-black mb-4">
              Bookings by {activePeriod === "year" ? "Month" : "Day"}
            </h3>
            <div className="h-72">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
