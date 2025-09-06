import { FaArrowRight } from "react-icons/fa";
import hextechLogo from "/src/assets/hextech-logo.svg";

export default function ContactDesktop() {
  return (
    <section className="w-full py-4 flex flex-col items-center text-white ">
      <div className="animate-rotate-border from-black from-80% via-blue-400 via-90% to-black to-100% p-px transition-all duration-500 ease-out bg-[conic-gradient(from_var(--border-angle),transparent_80%,#60a5fa_90%,transparent_100%)] rounded-lg shadow-lg w-3/4 max-w-6xl">
        <div className="backdrop-blur-3xl bg-[#0d0d0d] rounded-md grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 p-10">
          <div className="flex flex-col justify-center gap-12">
            <div className="mb-auto">
              <img src={hextechLogo} alt="Company Logo" className="w-25 h-25" />
            </div>
            <div className="flex flex-col ml-2">
              <p className="text-lg text-[#007fc2] font-medium">info@hextech.ae</p>
              <p className="text-gray-300">Dubai, Dubai Internet City</p>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <form className="w-5/6 grid gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent placeholder-gray-400 border-b-2 border-[#007fc2] p-2 text-white outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent placeholder-gray-400 border-b-2 border-[#007fc2] p-2 text-white outline-none"
              />
              <input
                type="text"
                placeholder="Title"
                className="bg-transparent placeholder-gray-400 border-b-2 border-[#007fc2] p-2 text-white outline-none"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="bg-transparent placeholder-gray-400 border-b-2 border-[#007fc2] p-2 text-white outline-none resize-none"
              />
              <button className="ml-auto cursor-pointer mt-2 w-12 h-12 flex justify-center items-center font-medium bg-transparent border-2 border-[#007fc2] outline-none text-gray-200 transition-all shadow-[3px_3px_0px_#00476d] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>      
    </section>
  );
}
