import { useLocation } from "react-router-dom";
import hextechLogo from "/src/assets/hextech-logo.svg";
import GlassSurface from "../GlassSurface";
import HamburgerMenu from "./HamburgerMenu";
import FlipLink from "./FlipLink";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <div className="fixed top-0 left-0 p-2 md:p-0 w-full z-50">
      <div className="hidden md:block pt-4 pb-4 pr-3 pl-3">
        <GlassSurface
          displace={5}
          distortionScale={-180}
          backgroundOpacity={0.1}
          borderRadius={10}
          borderWidth={0}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          brightness={100}
          opacity={0.93}
          className="min-w-full max-h-16 pl-1 pr-1 md:pl-3 md:pr-3 pt-5 pb-5"
        >
          <div className="flex items-center w-full">
            <div className="flex items-center gap-2 mr-auto">
              <img src={hextechLogo} alt="Company Logo" className="w-9 h-9" />
              <span className="text-[#007fc2] zen-dots-regular text-xl">
                HEXTECH
              </span>
            </div>

            <div className="flex gap-5 lg:gap-8 items-center">
              {!isHomePage && <FlipLink sectionId="home">HOME</FlipLink>}
              {isHomePage && (
                <>
                  <FlipLink sectionId="about">ABOUT</FlipLink>
                  <FlipLink sectionId="services">SERVICES</FlipLink>
                  <FlipLink sectionId="contact">CONTACT</FlipLink>
                </>
              )}
            </div>
          </div>
        </GlassSurface>
      </div>

      {/* mobile navbar (no GlassSurface cuz it looks weird on mobile) */}
      <div className="md:hidden px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg flex items-center">
        <div className="flex items-center gap-2 mr-auto">
          <img src={hextechLogo} alt="Company Logo" className="w-9 h-9" />
          <span className="text-[#007fc2] zen-dots-regular text-xl">
            HEXTECH
          </span>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          <HamburgerMenu
            size={36}
            className="mt-1.5"
            open={menuOpen}
            setOpen={setMenuOpen}
          />
        </button>
      </div>
    </div>
  );
}