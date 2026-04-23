import React from "react";

const ShimmerStyles = () => (
  <style>{`
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `}</style>
);

const Skeleton = ({ className }) => (
  <div className={`relative overflow-hidden bg-gray-200 rounded-md ${className}`}>
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
        animation: "shimmer 1.6s infinite",
      }}
    />
  </div>
);

export default function DefaultLoadingDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <ShimmerStyles />

      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4 space-y-4">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-10 w-full rounded-xl" />

        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-3/4" />
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-10 w-48" />
        </div>

        {/* Banner */}
        <div className="rounded-2xl p-6 bg-white border space-y-4">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex gap-4 mt-4">
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-28" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-16 rounded-full" />
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white border rounded-xl p-4 space-y-3">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-6 w-1/2" />
            </div>
          ))}
        </div>

        {/* Chart / Table */}
        <div className="bg-white border rounded-xl p-6">
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  );
}
