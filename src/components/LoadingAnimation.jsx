import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import hextechLogo from "../assets/hextech-logo.svg"

export default function LoadingAnimation ({ onLoadingComplete, duration = 800 }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const run = async () => {
      const steps = 20;
      const stepDuration = duration / steps;

      for (let i = 0; i <= steps; i++) {
        await new Promise((r) => setTimeout(r, stepDuration));
        setProgress(Math.round((i / steps) * 100));
      }

      setTimeout(() => {
        setIsComplete(true);
        
        setTimeout(() => {
          onLoadingComplete?.();
        }, 600);
      }, 50);
    };

    run();
  }, [onLoadingComplete, duration]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-100 bg-black flex flex-col overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
              className="h-full bg-[#007fc2] shadow-lg shadow-[#007fc2]/20"
            />
          </div>

          <div className="absolute bottom-5 left-6 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center">
              <img src={hextechLogo} alt="Company Logo" className="w-9 h-9" />
            </div>
            <div className="text-right">
              <span className="text-[#007fc2] zen-dots-regular text-xl">
                HEXTECH
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};