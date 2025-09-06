import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";

const DURATION = 0.3;

const FlipLink = ({ children, sectionId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [navigate, location, sectionId]
  );

  return (
    <motion.button
      initial="initial"
      whileHover="hovered"
      onClick={handleClick}
      className="relative block overflow-hidden whitespace-nowrap text-md poppins-semibold text-[#007fc2] hover:text-[#006aa3] transition mt-0.5 bg-transparent border-none cursor-pointer"
      style={{ lineHeight: 1 }}
    >
      <motion.span
        variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
        transition={{ duration: DURATION, ease: [0.65, 0, 0.35, 1] }}
        className="block"
      >
        {children}
      </motion.span>
      <motion.span
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
        transition={{ duration: DURATION, ease: [0.65, 0, 0.35, 1] }}
        className="absolute inset-0 block"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default FlipLink;
