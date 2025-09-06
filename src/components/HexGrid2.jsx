import { useState, useEffect } from "react";
import { motion } from "motion/react";

const defaultServices = [
  { title: "Web Development", url: "/web-development" },
  { title: "AI & ML", url: "/ai-ml" },
  { title: "Cybersecurity", url: "/cybersecurity" },
  { title: "Cloud Architecture", url: "/cloud-architecture" },
  { title: "Mobile Development", url: "/mobile-development" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function CompactCard({ item, onNavigate }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <motion.div
      className="relative w-[85vw] sm:w-[260px] md:w-[300px] lg:w-[340px] max-w-[360px] aspect-square cursor-pointer z-10 flex items-center justify-center text-center"
      onClick={() => onNavigate(item.url)}
      variants={cardVariants}
      whileHover={{ scale: isSmallScreen ? 1 : 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.polygon
          points="100,16 176,60 176,140 100,184 24,140 24,60"
          fill="none"
          stroke="#007fc2"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
          animate={{ opacity: [0.8, 1, 0.8], strokeWidth: [4, 6, 4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <motion.div className="relative z-10 text-center p-4 sm:p-6 md:p-8 max-w-[85%]">
        <motion.span className="text-[#007fc2] poppins-semibold text-xl sm:text-2xl">
          {item.title}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function HexButton({ item, onNavigate }) {
  return (
    <div className="relative md:-m-2 lg:-m-12 lg:-mb-24">
      <CompactCard item={item} onNavigate={onNavigate} />
    </div>
  );
}

export default function HexGrid2({ services = defaultServices, onNavigate }) {
  const handleNavigation = (url) => {
    if (onNavigate) {
      onNavigate(url);
    } else {
      window.location.href = url; 
    }
  };

  return (
    <div className="w-[80%] lg:w-[90%] xl:w-[78%] min-h-[50%] flex flex-col items-center justify-center py-8 bg-transparent">
      <motion.div
        className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {services.map((item) => (
          <HexButton key={item.title} item={item} onNavigate={handleNavigation} />
        ))}
      </motion.div>
    </div>
  );
}
