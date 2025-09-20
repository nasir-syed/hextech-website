import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import TopNav from '../../sections/TopNav';
import Accordion from '../../components/Accordion';
import Beams from '../../components/Beams';
import Footer from '../../sections/Footer';
import CircularText from '../../components/CircularText'
import TextAnimation from '../../components/TextAnimation';
import FakeGlassSurface from '../../components/FakeGlassSurface'
import Lenis from 'lenis/react'
import LoadingAnimation from '../../components/LoadingAnimation';
import Contact from '../../sections/Contact';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; 

export default function AIAutomation() {
  const [lineAnimation, setLineAnimation] = useState(false);
  const [loading, setLoading] = useState(true);

  const accordionData = [
    {
      title: "Customer Support Automation",
      description: " Reduce support costs and response times with AI that manages emails, tickets, and helpdesk queries. Free up your team to focus on complex issues while customers get faster, more consistent service 24/7 without extra staffing."
    },
    {
      title: "CRM Automation",
      description: "Stop wasting time on manual CRM updates. Our AI handles data entry, lead scoring, and follow-ups automatically, keeping your pipeline clean and accurate while helping your sales team close more deals with less effort."
    },
    {
      title: "AI Chatbots",
      description: "Never miss a customer again. AI-powered chatbots engage visitors instantly, answer FAQs, and capture leads around the clock. Provide quick, reliable support while freeing your staff to focus on higher-value tasks."
    },
    {
      title: "AI Voice Bots",
      description: "Handle customer calls without extra staff. AI voice bots manage bookings, reminders, and routine questions with natural speech, delivering professional service that saves time, reduces costs, and scales as your business grows."
    },
    {
      title: "Custom AI Workflows",
      description: "Every business runs differently. We design custom AI workflows that automate repetitive tasks, connect your apps, and simplify operations. Save time, reduce errors, and keep your team focused on growth instead of manual work."
    }
  ];

  const technologies = ["Python", "OpenAI API", "LangChain", "TensorFlow", "PyTorch", "Scikit-learn", "n8n", "Zapier"]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLineAnimation(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Lenis root>
        {/* background */}
        <div className="fixed inset-0 z-0">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={12}
            lightColor="#007fc2"
            speed={3}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>

        <div className="relative z-10 p-0">
          <TopNav />
          
          <div className="w-full flex justify-between mt-24 items-center px-4 mb-4">
            <Link to="/services/web-development">
              <button className="flex items-center gap-2 text-[#007fc2] transition">
                <FaArrowLeft className="text-xl md:text-1xl" />
              </button>
            </Link>

            <Link to="/services/mobile-development">
              <button className="flex items-center gap-2 text-[#007fc2] transition">
                <FaArrowRight className="text-xl md:text-1xl" />
              </button>
            </Link>
          </div> 

          <div className="w-full h-[1px] px-4 bg-transparent relative overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: lineAnimation ? 1 : 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="h-full bg-[#007fc2] origin-center"
            />
          </div>

          <div className="w-screen">
            {/* desktop layout */}
            <div className="hidden w-screen lg:grid lg:grid-cols-2 lg:gap-16 p-4 lg:items-start lg:min-h-[calc(100vh-200px)]">
              {/* left column title */}
              <div className="sticky top-20 h-screen pt-4">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <CircularText
                    text="AI*AUTOMATION*"
                    onHover="slowDown"
                    spinDuration={20}
                    className="w-[500px] h-[500px] xl:w-[600px] xl:h-[600px]"
                    textSize='text-7xl xl:text-8xl'
                  />
                </motion.div>
              </div>

              {/* right column content */}
              <motion.div
                className="space-y-4 lg:pt-8"
              >
                <div className="prose prose-lg max-w-none">
                  <TextAnimation delay={0.8}>
                    <p className="text-white text-lg poppins-regular leading-relaxed mb-8">
                      AI Automation empowers your business to scale effortlessly. From automating daily processes to delivering faster customer service, our solutions boost productivity and unlock new opportunities. With intelligent workflows tailored to your needs, you gain the agility to grow your business without increasing costs or complexity.
                    </p>
                  </TextAnimation>
                </div>

                {technologies && technologies.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.3, ease: "easeOut" }}
                    className="mt-6 pr-30"
                  >
                    <h4 className="text-[#007fc2] text-lg mb-4 poppins-semibold">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.3 + (index * 0.03),
                            duration: 0.3,
                            ease: "easeOut"
                          }}
                        >
                          <FakeGlassSurface className="px-3 py-1">
                            <span className="text-white text-sm font-medium whitespace-nowrap poppins-semibold">
                              {tech}
                            </span>
                          </FakeGlassSurface>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <Accordion accordionData={accordionData} />
                </motion.div>

              </motion.div>
            </div>

            {/* mobile layout */}
            <div className="lg:hidden space-y-4 px-4 py-2">
              <div>
                <TextAnimation delay={0.3}>
                  <h1 className="text-4xl md:text-5xl font-medium text-[#007fc2] leading-tight poppins-regular">
                    AI AUTOMATION
                  </h1>
                </TextAnimation>
              </div>

              <div>
                <TextAnimation delay={0.5}>
                  <p className="text-white poppins-regular text-md">
                    AI Automation empowers your business to scale effortlessly. From automating daily processes to delivering faster customer service, our solutions boost productivity and unlock new opportunities. With intelligent workflows tailored to your needs, you gain the agility to grow your business without increasing costs or complexity.
                  </p>
                </TextAnimation>
              </div>

              {technologies && technologies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
                  className="mt-6 pr-10"
                >
                  <h4 className="text-white text-lg mb-4 poppins-semibold">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.3 + (index * 0.03),
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                      >
                        <FakeGlassSurface className="px-3 py-1">
                          <span className="text-white text-sm font-medium whitespace-nowrap poppins-semibold">
                            {tech}
                          </span>
                        </FakeGlassSurface>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="p-0 m-0 flex justify-start items-start w-full"
              >
                <Accordion accordionData={accordionData} />
              </motion.div>

            </div>

            {/* some spacing before footer */}
            <div className="h-32"></div>
          </div>

          <Contact/>

          <div className="relative z-80">
            <Footer />
          </div>
        </div>
      </Lenis>
      <LoadingAnimation duration={400} onLoadingComplete={() => setLoading(false)} />
    </div>
  );
}