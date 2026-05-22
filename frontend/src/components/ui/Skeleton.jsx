import { motion } from 'framer-motion';



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
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        animation: "shimmer 1.5s infinite",
      }}
    />
  </div>
);

export function SkeletonPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f5f5]">
      <div className="relative w-20 h-20">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 border-4 border-[#d6d3d1] border-t-[#fca5a5] rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />

        {/* Inner pulsing circle */}
        <motion.div
          className="absolute inset-4 bg-white rounded-full shadow-md"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
          }}
        />

        {/* Soft peach glow */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl bg-[#ffe4e1]"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        />

        {/* Subtle center dot */}
        <motion.div
          className="absolute w-2 h-2 bg-[#9ca3af] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
        />
      </div>
    </div>
  );
}

export function SkeletonDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <ShimmerStyles />
      <div className="w-64 bg-white border-r p-4 space-y-4">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-10 w-full rounded-xl" />
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-3/4" />
        ))}
      </div>
      <div className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-10 w-48" />
        </div>
        <div className="rounded-2xl p-6 bg-white border space-y-4">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex gap-4 mt-4">
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-28" />
          </div>
        </div>
        <div className="flex gap-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-16 rounded-full" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white border rounded-xl p-4 space-y-3">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-6 w-1/2" />
            </div>
          ))}
        </div>
        <div className="bg-white border rounded-xl p-6">
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonProfilePage() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      <ShimmerStyles />
      <div className="w-full lg:w-[35%] lg:min-h-screen bg-[#EFECE3] p-6">
        <Skeleton className="h-6 w-16 mb-6" />
        <Skeleton className="w-24 h-24 rounded-full mb-4" />
        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-6 w-1/2 mb-4" />
        <Skeleton className="h-4 w-1/3 mb-8" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="w-full lg:w-[65%] bg-[#EFECE3] p-6 space-y-6">
        <Skeleton className="h-32 w-full rounded-2xl" />
        <div className="flex gap-3">
          <Skeleton className="h-10 w-20 rounded-2xl" />
          <Skeleton className="h-10 w-20 rounded-2xl" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-50 rounded-[32px] bg-white p-4 space-y-3">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkeletonBookingList() {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-6">
      <ShimmerStyles />
      <Skeleton className="h-8 w-40 mb-6" />
      <div className="flex gap-3 mb-6">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-28 rounded-full" />
        ))}
      </div>
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="max-w-2xl border rounded-2xl">
            <div className="px-6 py-4 border-b bg-gray-50">
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="p-6 space-y-3">
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-36" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-10 w-24 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonForm() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <ShimmerStyles />
      <Skeleton className="h-8 w-24 mb-6" />
      <div className="flex gap-8">
        <div className="w-[35%] space-y-5">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="flex-1">
          <div className="w-[300px] border rounded-xl p-5 space-y-3">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonMarketplaceGrid() {
  return (
    <div className="min-h-screen bg-[#E9E6DE] py-6 md:py-10 px-4">
      <ShimmerStyles />
      <div className="w-full max-w-5xl lg:max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-5 place-items-center mt-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-full max-w-[320px] border rounded-xl p-4 space-y-3 bg-white">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkeletonRewards() {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 md:px-12 py-8">
      <ShimmerStyles />
      <Skeleton className="h-8 w-56 mb-6" />
      <div className="flex gap-3 mb-8">
        <Skeleton className="h-10 w-28 rounded-full" />
        <Skeleton className="h-10 w-28 rounded-full" />
      </div>
      <div className="border-b mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border space-y-3">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-4 w-48" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonBookingProduct() {
  return (
    <div className="min-h-screen bg-[#D65A4A] flex justify-center gap-6 p-6">
      <ShimmerStyles />
      <div className="bg-white rounded-3xl w-[520px]">
        <div className="bg-[#F7DDDB] p-6 rounded-t-3xl space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="w-19 h-19 rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-3 border-b">
          <div className="p-3"><Skeleton className="h-5 w-16" /></div>
          <div className="p-3"><Skeleton className="h-5 w-24" /></div>
          <div className="p-3"><Skeleton className="h-5 w-12" /></div>
        </div>
        <div className="m-6 bg-[#efe3d6] p-4 rounded-xl space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <Skeleton className="h-4 w-3/4 m-6" />
      </div>
      <div className="bg-white rounded-2xl w-[340px] p-5 space-y-4">
        <Skeleton className="h-5 w-40" />
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-16 w-20 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  );
}

export { Skeleton, ShimmerStyles };
export default Skeleton;
