import { motion } from "motion/react";
import ContactDesktop from "../components/Contact/ContactDesktop";
import ContactMobile from "../components/Contact/ContactMobile";
import TextAnimation from "../components/TextAnimation";

export default function Contact() {
  return (
    <div className="w-screen min-h-screen relative flex flex-col items-center justify-start px-6 py-8">
      <div className="text-center max-w-[95%] mx-auto">
        <TextAnimation>
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold text-[#007fc2] poppins-semibold mb-6 leading-tight">
            Contact Us
          </h1>
        </TextAnimation>

        <TextAnimation>
          <p className="text-md sm:text-xl md:text-2xl text-gray-300 poppins-regular mb-12 leading-relaxed max-w-5xl mx-auto">
            Have a question or idea? We’re here to listen, guide, and collaborate with you.
          </p>
        </TextAnimation>
      </div>

      {/* mobile form */}
      <motion.div
        className="block md:hidden w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} 
      >
        <ContactMobile />
      </motion.div>

      {/* desktop form*/}
      <motion.div
        className="hidden md:block w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactDesktop />
      </motion.div>
    </div>
  );
}
