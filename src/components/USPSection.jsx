import { FaStar, FaClock, FaRunning, FaShieldAlt } from "react-icons/fa";
import { PiArrowUpRightBold } from "react-icons/pi";

export default function USPSection() {
  return (
    <section className="bg-[#EFF1F4] text-[#0A2342] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What makes us so special?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-6">The 10-20-30 Rule at EZ</h3>
            <div className="space-y-8 relative pl-6 border-l-2 border-[#0A2342]">
              {[
                { time: "10", label: "Acknowledge Request" },
                { time: "20", label: "Allocate Experts" },
                { time: "30", label: "Begin Assignment" },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[11px] top-1 w-3 h-3 rounded-full bg-[#0A2342]" />
                  <div className="flex items-center gap-3">
                    <p className="text-3xl font-bold">{step.time}</p>
                    <div className="bg-gray-300 px-4 py-2 rounded-md text-sm font-medium">{step.label}</div>
                    <span className="ml-1 text-base font-medium">Minutes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: USP Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <FaStar size={24} />, title: "Consistently High Quality" },
              { icon: <FaClock size={24} />, title: "Round the Clock Availability" },
              { icon: <FaRunning size={24} />, title: "Faster than the Fastest" },
              { icon: <FaShieldAlt size={24} />, title: "Information Security" },
            ].map((usp, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0B1E3D] to-[#081424] text-white p-6 rounded-md shadow-md relative hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-start">
                  <div className="text-2xl">{usp.icon}</div>
                  <PiArrowUpRightBold size={16} className="text-white" />
                </div>
                <p className="mt-6 text-lg font-semibold">{usp.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
