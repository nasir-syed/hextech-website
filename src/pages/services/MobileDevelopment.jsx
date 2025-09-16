import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import TopNav from '../../sections/TopNav';
import Accordion from '../../components/Accordion';
import Beams from '../../components/Beams';
import Footer from '../../sections/Footer';
import CircularText from '../../components/CircularText'
import TextAnimation from '../../components/TextAnimation';
import FakeGlassSurface from '../../components/FakeGlassSurface'
import Lenis from 'lenis/react';
import LoadingAnimation from '../../components/LoadingAnimation';
import Contact from '../../sections/Contact';

export default function MobileDevelopment() {
  const [lineAnimation, setLineAnimation] = useState(false);
  const [loading, setLoading] = useState(true);

  const accordionData = [
  {
    title: "NATIVE iOS APPS",
    description: "Harness the power of AI-driven iOS development to create exceptional native applications. Our intelligent automation tools generate Swift code, optimize performance automatically, and integrate seamlessly with Apple's latest frameworks including Core ML and Vision APIs for advanced machine learning capabilities."
  },
  {
    title: "NATIVE ANDROID APPS", 
    description: "Build cutting-edge Android applications with AI-enhanced development workflows that streamline every aspect of the process. From automated Kotlin code generation to intelligent testing frameworks, we ensure your app delivers superior performance across all Android devices while leveraging Google's AI services."
  },
  {
    title: "CROSS-PLATFORM APPS",
    description: "Leverage AI automation to develop unified applications that perform flawlessly across all platforms. Our intelligent development pipeline reduces coding time by 70% while ensuring pixel-perfect consistency between iOS, Android, and web versions through automated code optimization and testing."
  },
  {
    title: "MOBILE UI/UX",
    description: "Transform user experiences with AI-powered design automation that creates intuitive, adaptive interfaces. Our machine learning algorithms analyze user behavior patterns to generate personalized UI components, optimize navigation flows, and deliver interfaces that evolve based on real user interactions and preferences."
  },
  {
    title: "MOBILE ANALYTICS",
    description: "Unlock powerful insights through next-generation AI analytics that go beyond traditional metrics. Our automated intelligence platform predicts user behavior, identifies revenue opportunities, detects performance anomalies in real-time, and provides actionable recommendations to boost engagement and retention."
  }
];

  const technologies = ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite", "Redux", "Expo"]

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
          
          <div className="w-full h-[1px] mt-23 px-4 bg-transparent relative overflow-hidden">
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
                    text="MOBILE*DEVELOPMENT*"
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
                     We design and build mobile apps that are fast, secure, and user-friendly. From business management tools to customer-facing apps, every solution is optimized for iOS and Android, ensuring your business connects with customers anywhere while improving efficiency and unlocking new growth opportunities.
                    </p>
                  </TextAnimation>
                </div>

                {technologies && technologies.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.3, ease: "easeOut" }}
                    className="mt-6  pr-30"
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
                  <Accordion accordionData={accordionData}/>
                </motion.div>
                  
              </motion.div>
            </div>

            {/* mobile layout */}
            <div className="lg:hidden space-y-4 px-4 py-2">
              <div>
                <TextAnimation delay={0.3}>
                  <h1 className="text-4xl md:text-5xl font-medium text-[#007fc2] leading-tight poppins-regular">
                    MOBILE DEVELOPMENT
                  </h1>
                </TextAnimation>
              </div>

              <div>
                <TextAnimation delay={0.5}>
                  <p className="text-white poppins-regular text-md">
                    We design and build mobile apps that are fast, secure, and user-friendly. From business management tools to customer-facing apps, every solution is optimized for iOS and Android, ensuring your business connects with customers anywhere while improving efficiency and unlocking new growth opportunities.
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="p-0 m-0 flex justify-start items-start w-full"
            >
                <Accordion accordionData={accordionData}/>
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