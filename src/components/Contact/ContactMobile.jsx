import hextechLogo from "../../assets/hextech-logo.svg";

export default function ContactMobile() {
  return (
    <section className="w-full py-4 flex flex-col items-center text-white">
      <div className="text-center mb-6"></div>

      <div className="animate-rotate-border from-black from-80% via-blue-400 via-90% to-black to-100% p-px transition-all duration-500 ease-out bg-[conic-gradient(from_var(--border-angle),transparent_80%,#60a5fa_90%,transparent_100%)] rounded-lg shadow-lg w-[90%]">
        <div className="bg-[#0e0e0e] rounded-lg flex flex-col gap-8 p-6">
          <div className="flex justify-center items-end gap-5">
            <img src={hextechLogo} alt="Company Logo" className="w-25 h-25" />
          </div>

          <form className="flex flex-col gap-5">
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
              rows="6"
              placeholder="Message"
              className="bg-transparent placeholder-gray-400 border-b-2 border-[#007fc2] p-2 text-white outline-none resize-none"
            />
            <button
              type="submit"
              className="w-32 h-12 rounded-md font-medium self-center bg-transparent border-2 border-[#007fc2] outline-none text-gray-200 transition-all shadow-[3px_3px_0px_#00476d] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              Send
            </button>
          </form>

          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-lg text-[#007fc2] font-medium">info@hextech.ae</p>
            <p className="text-gray-400">Dubai, Dubai Internet City</p>
          </div>
        </div>
      </div>
    </section>
  );
}
