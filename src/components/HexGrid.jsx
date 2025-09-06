import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import FakeGlassSurface from "./FakeGlassSurface";

// default data
const defaultServices = [
  {
    title: "Web Development",
    description: "Crafting responsive, scalable, and performant digital platforms built for the future.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    subServices: ["Website Development", "UI/UX Design", "E-commerce Platforms", "Progressive Web Apps", "API Development", "Database Design"]
  },
  {
    title: "AI & ML",
    description: "Designing intelligent systems powered by machine learning and data-driven insights.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain", "Jupyter", "Pandas"],
    subServices: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Chatbots", "Deep Learning"]
  },
  {
    title: "Cybersecurity",
    description: "Building secure infrastructures to protect data, systems, and user trust.",
    technologies: ["Wireshark", "Nmap", "Metasploit", "Burp Suite", "OWASP", "Kali Linux", "Splunk", "Nessus"],
    subServices: ["Penetration Testing", "Security Audits", "Vulnerability Assessment", "Network Security", "Incident Response", "Compliance Management"]
  },
  {
    title: "Cloud Architecture",
    description: "Engineering scalable, resilient cloud ecosystems that empower innovation.",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "Redis", "Elasticsearch"],
    subServices: ["Infrastructure Design", "Migration Services", "DevOps Implementation", "Monitoring & Logging", "Cost Optimization", "Disaster Recovery"]
  },
  {
    title: "Mobile Development",
    description: "Creating native and cross-platform mobile applications for iOS and Android.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite", "Redux", "Expo"],
    subServices: ["Native iOS Apps", "Native Android Apps", "Cross-Platform Apps", "Mobile UI/UX", "App Store Optimization", "Mobile Analytics"]
  }
];

const compactVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3, ease: "easeIn" } },
};

function HexagonContent({ item, disabled, isExpanded }) {
  return (
    <motion.div className="flex flex-col items-center justify-center text-center h-full w-full px-3 sm:px-6">
      <motion.h1
        className={`font-bold transition-colors duration-300 text-[#007fc2] poppins-semibold ${
          isExpanded ? "text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4" : "text-lg sm:text-xl"
        }`}
        style={{ opacity: disabled ? 0.2 : 1}}
      >
        {item.title}
      </motion.h1>

      {isExpanded && (
        <motion.p
          className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-sm poppins-regular"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.15, duration: 0.3, ease: "easeInOut" }}
        >
          {item.description}
        </motion.p>
      )}
    </motion.div>
  );
}

function TechStackSection({ item }) {
  const techStack = item.technologies || [];
  
  return (
    <motion.div
      className="w-full max-w-md md:max-w-xl mt-8 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
    >
      <h3 className="text-[#007fc2] text-base sm:text-lg mb-3 sm:mb-4 text-center poppins-semibold">
        Technologies Used
      </h3>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.4 + (index * 0.03), 
              duration: 0.3, 
              ease: "easeOut" 
            }}
          >
            <FakeGlassSurface
              className="px-3 py-1"
            >
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap poppins-semibold">
                {tech}
              </span>
            </FakeGlassSurface>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SubServicesSection({ item }) {
  const subServices = item.subServices || [];
  
  return (
    <motion.div
      className="w-full max-w-md md:max-w-xl mt-8 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
    >
      <h3 className="text-[#007fc2] text-base sm:text-lg mb-3 sm:mb-4 text-center poppins-semibold">
        Sub-Services
      </h3>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
        {subServices.map((service, index) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.6 + (index * 0.03), 
              duration: 0.3, 
              ease: "easeOut" 
            }}
          >
            <FakeGlassSurface
              className="px-3 py-1"
            >
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap poppins-semibold">
                {service}
              </span>
            </FakeGlassSurface>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ExpandedCard({ item, onCollapse, disabled }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 backdrop-blur-sm flex items-start justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onCollapse}
        className="absolute top-4 right-4 z-60 text-white text-2xl hover:text-gray-300 cursor-pointer transition-colors p-2"
        style={{ touchAction: 'manipulation' }}
      >
        ✕
      </button>

      <div 
        className="flex flex-col items-center w-full h-full pt-16 md:pt-8 pb-8 px-4 overflow-y-auto"
        style={{
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div className={`relative w-[60vw] max-w-[240px] aspect-[0.9] sm:w-[50vw] sm:max-w-[280px] md:w-[440px] md:max-w-[440px] flex-shrink-0`}>
          <div
            className="absolute inset-0 bg-[#007fc2]"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          />
          <div
            className="absolute inset-[3px] sm:inset-[5px] bg-black flex items-center justify-center"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          >
            <HexagonContent item={item} disabled={disabled} isExpanded={true} />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-12 mt-4 sm:mt-6 w-full max-w-6xl justify-center px-2 flex-shrink-0">
          <TechStackSection item={item} />
          <SubServicesSection item={item} />
        </div>

        <div className="h-8 flex-shrink-0" />
      </div>
    </motion.div>
  );
}

function CompactCard({ item, onExpand, disabled, isVisible = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="relative w-[85vw] sm:w-[260px] md:w-[300px] lg:w-[340px] max-w-[360px] aspect-square cursor-pointer z-10 flex items-center justify-center text-center"
          onClick={disabled ? undefined : onExpand}
          onMouseEnter={() => !isSmallScreen && setIsHovered(true)}
          onMouseLeave={() => !isSmallScreen && setIsHovered(false)}
          whileHover={{ scale: disabled || isSmallScreen ? 1 : 1.05 }}
          animate={{
            scale: disabled ? 0.9 : [0.97, 1, 0.97],
            opacity: disabled ? 0.4 : 1
          }}
          transition={{
            scale: disabled ? { duration: 0.3 } : {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: { duration: 0.3 }
          }}
          initial="hidden"
          variants={compactVariants}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
            <motion.polygon
              points="100,16 176,60 176,140 100,184 24,140 24,60"
              fill="none"
              stroke="#007fc2"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
              animate={{ opacity: disabled ? 0.3 : [0.8, 1, 0.8], strokeWidth: disabled ? 4 : [4, 6, 4] }}
              transition={{ duration: disabled ? 0 : 4, repeat: disabled ? 0 : Infinity, ease: "easeInOut" }}
            />
          </svg>
          <motion.div className="relative z-10 text-center p-4 sm:p-6 md:p-8 max-w-[85%]">
            <AnimatePresence mode="wait">
              {isHovered ? (
                <motion.p
                  key="desc"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.10, ease: "easeInOut" }}
                  className="text-white poppins-regular text-base sm:text-lg leading-relaxed"
                >
                  {item.description}
                </motion.p>
              ) : (
                <motion.span
                  key="title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.10, ease: "easeInOut" }}
                  className="text-[#007fc2] poppins-semibold text-xl sm:text-2xl"
                >
                  {item.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HexButton({ item, onCollapse, onExpand, disabled, isExpanded }) {
  return (
    <div className="relative md:-m-2 lg:-m-12 lg:-mb-24">
      <AnimatePresence mode="popLayout">
        {isExpanded ? (
          <ExpandedCard key="expanded" item={item} onCollapse={onCollapse} disabled={disabled} />
        ) : (
          <CompactCard key="compact" item={item} onExpand={onExpand} disabled={disabled} isVisible={true} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HexGrid({ services = defaultServices }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => setExpandedIndex(index);
  const handleCollapse = () => setExpandedIndex(null);

  useEffect(() => {
    if (expandedIndex !== null) {

      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";

        window.scrollTo(0, scrollY);
      };
    }
  }, [expandedIndex]);


  return (
    <div className="w-[80%] lg:w-[90%] xl:w-[78%] min-h-[50%] flex flex-col items-center justify-center py-8 bg-transparent">
      <motion.div
        className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {services.map((item, i) => (
          <HexButton
            key={item.title}
            item={item}
            disabled={expandedIndex !== null && expandedIndex !== i}
            isExpanded={expandedIndex === i}
            onExpand={() => handleExpand(i)}
            onCollapse={handleCollapse}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-40"
            onClick={handleCollapse}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            style={{ 
              backgroundColor: "black"
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}