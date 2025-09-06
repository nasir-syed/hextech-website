import HexGrid2 from "../components/HexGrid2";

import TextAnimation from "../components/TextAnimation";

const sampleServices = [
  {
    title: "Web Development",
    url: "/services/web-development",
  },
  {
    title: "AI Automation",
    url: "/services/ai-automation",
  },
  {
    title: "Mobile Development",
    url: "/services/mobile-development",
  },
  {
    title: "Networking & Security",
    url: "/services/networking-security",
  },
  {
    title: "AI Studio",
    url: "/services/ai-studio",
  },
];

export default function Services() {
  return (
    <div className="w-screen min-h-screen relative mt-[35%] md:mt-0 md:mb-[10%] flex flex-col items-center justify-start px-6 py-8">
      <div className="text-center max-w-[95%] mx-auto">
        <TextAnimation>
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold text-[#007fc2] poppins-semibold mb-6 leading-tight">
            Our Services
          </h1>
        </TextAnimation>

        <TextAnimation>
          <p className="text-md sm:text-xl md:text-2xl text-gray-300 poppins-regular mb-12 leading-relaxed max-w-5xl mx-auto">
            Explore the diverse range of services we provide to help businesses scale, innovate, and secure their digital landscape.
          </p>
        </TextAnimation>
      </div>

      {/* HexGrid */}
      <div className="w-full flex justify-center pb-16">
        <HexGrid2 services={sampleServices} />
      </div>

    </div>
  );
}

