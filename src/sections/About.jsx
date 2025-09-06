import TextAnimation from "../components/TextAnimation";
import SpotlightCard from "../components/SpotlightCard";
import { motion } from "motion/react";

export default function About() {
  const cardContent = [
    {
      title: "Mission",
      description:
        "Pioneering cutting-edge solutions that push the boundaries of what's possible in technology.",
    },
    {
      title: "Vision",
      description:
        "Building robust, secure systems that protect and empower users in an interconnected world.",
    },
    {
      title: "Manifesto",
      description:
        "Creating scalable architectures designed to adapt and evolve with tomorrow's challenges.",
    },
  ];

  return (
    <div className="h-screen">
      <div className="w-screen min-h-screen relative flex items-center justify-center overflow-hidden px-6">
        <div className="text-center min-w-[90%] max-w-[90%] mx-auto">
          <TextAnimation>
            <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold text-[#007fc2] poppins-semibold mb-6 leading-tight">
              About Us
            </h1>
          </TextAnimation>

          <TextAnimation>
            <p className="text-md sm:text-xl md:text-2xl text-gray-300 poppins-regular mb-12 leading-relaxed min-w-[60%] mx-auto">
              HexTech is a technology atelier, crafting next-generation digital
              experiences by blending deep technical expertise with bold
              creativity to build systems that are intelligent, secure, and
              built for the future.
            </p>
          </TextAnimation>

          {/* desktop spotlight cards */}
          <motion.div
            className="hidden md:flex justify-center gap-8 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
          >
            {cardContent.map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 max-w-sm"
              >
                <SpotlightCard spotlightColor="rgba(0, 124, 242, 0.25)">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-[#007fc2] mb-4 poppins-semibold">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed poppins-regular">
                      {card.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          {/* mobile regular degular cards because they can't hover */}
          <motion.div
            className="md:hidden flex flex-col gap-6 mt-12 max-w-sm mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
          >
            {cardContent.map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#0d0d0d] border border-neutral-800 rounded-lg p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-[#007fc2] mb-3 poppins-semibold">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed poppins-regular">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
