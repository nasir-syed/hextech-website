import { motion, AnimatePresence } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import TextAnimation from "../TextAnimation"; 

export default function MobileMenu({ open, setMenuOpen }) {
  const menuItems = ["ABOUT", "SERVICES", "CONTACT"];
  const navbarHeight = 85; 
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback(
    (sectionId) => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: sectionId } });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const y =
            element.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top: y});
        }
      }

      setMenuOpen(false);
    },
    [navigate, location, navbarHeight, setMenuOpen]
  );

  
  const isOnHome = location.pathname === "/";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-40 bg-[#080808] flex items-center justify-center"
        >
          <div className="flex flex-col gap-10 text-4xl poppins-regular text-white tracking-tight text-center">
            {isOnHome
              ? menuItems.map((item, idx) => {
                  const sectionId = item.toLowerCase();
                  return (
                    <TextAnimation
                      key={idx}
                      animateOnScroll={false}
                      delay={0.3 + idx * 0.15}
                    >
                      <span
                        onClick={() => handleNavClick(sectionId)}
                        className="hover:text-[#00b4ff] text-[#007fc2] transition-colors duration-300 cursor-pointer"
                      >
                        {item}
                      </span>
                    </TextAnimation>
                  );
                })
              : (
                <TextAnimation animateOnScroll={false} delay={0.3}>
                  <span
                    onClick={() => navigate("/")}
                    className="hover:text-[#00b4ff] text-[#007fc2] transition-colors duration-300 cursor-pointer"
                  >
                    HOME
                  </span>
                </TextAnimation>
              )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
