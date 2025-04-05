import React from "react";

export default function Services() {
  return (
    <div className="bg-white py-20 px-6 md:px-16 relative">
      {/* Skewed Background Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gray-100 transform -skew-y-3 z-0"></div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        {/* Left Logo Block */}
        <div className="flex flex-col items-start max-w-md">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 border-2 border-orange-400 rounded-lg flex items-center justify-center text-cyan-500 text-4xl font-bold mr-3">
              EZ
            </div>
            <h2 className="text-3xl font-semibold text-[#011226]">Capability Centre</h2>
          </div>
          <p className="text-base text-gray-600">An Extended Team for Business Professionals</p>
        </div>

        {/* Right Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#011226] text-base max-w-3xl">
          <div>
            <p className="font-bold bg-[#011226] text-white inline px-2 py-0.5">100+ Multinational</p>
            <p className="mt-1">
              organizations trust EZ with{" "}
              <span className="bg-[#011226] text-white px-2 py-0.5">100s of assignments each week</span>
            </p>
          </div>

          <div>
            <p>
              <span className="font-bold bg-[#011226] text-white px-2 py-0.5">Expertise in AI</span> and other Advanced Technology drives
            </p>
            <p className="mt-1">
              <span className="bg-[#011226] text-white px-2 py-0.5">Efficiency and Impact for clients</span>
            </p>
          </div>

          <div>
            <p>
              <span className="font-bold bg-[#011226] text-white px-2 py-0.5">1000+ Subject Matter Experts</span> from 5 continents bring
            </p>
            <p className="mt-1">
              knowledge across{" "}
              <span className="bg-[#011226] text-white px-2 py-0.5">Topics, Functions,</span>{" "}
              <span className="bg-[#011226] text-white px-2 py-0.5">and Industries</span>
            </p>
          </div>

          <div>
            <p>
              <span className="font-bold bg-[#011226] text-white px-2 py-0.5">Stringent Information Security</span>
            </p>
            <p className="mt-1">
              practices at EZ have been awarded the{" "}
              <span className="bg-[#011226] text-white px-2 py-0.5">ISO 27001:2022</span> Certification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
