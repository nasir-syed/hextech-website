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
import Contact from '../../sections/Contact'

export default function AIStudio() {
  const [lineAnimation, setLineAnimation] = useState(false);
  const [loading, setLoading] = useState(true)

  
const accordionData = [
  {
    title: "AI-GENERATED IMAGES",
    description: "Create stunning, professional-quality images in seconds with our advanced AI image generation platform. From product photography and marketing visuals to artistic illustrations and concept art, our intelligent algorithms produce pixel-perfect images that match your exact specifications while maintaining brand consistency and creative excellence."
  },
  {
    title: "AI-GENERATED VIDEOS", 
    description: "Transform your video content strategy with AI-powered video generation that creates engaging, high-quality videos at unprecedented speed. Our automated video production suite generates promotional content, explainer videos, social media clips, and personalized marketing videos with intelligent scene composition and dynamic storytelling."
  },
  {
    title: "AI-GENERATED DESIGN ASSETS",
    description: "Streamline your design workflow with intelligent asset generation that produces logos, icons, graphics, and UI elements tailored to your brand guidelines. Our AI design engine creates cohesive visual assets across multiple formats and styles, ensuring consistency while dramatically reducing design production time and costs."
  },
  {
    title: "CUSTOM BRANDING CONTENT",
    description: "Develop comprehensive brand identities through AI-driven content creation that captures your unique voice and vision. Our intelligent branding system generates cohesive visual languages, brand guidelines, marketing materials, and digital assets that maintain perfect consistency across all touchpoints and platforms."
  },
  {
    title: "MARKETING CAMPAIGN CONTENT",
    description: "Launch powerful marketing campaigns with AI-generated content that resonates with your target audience. Our automated campaign engine produces compelling ad copy, social media content, email templates, and promotional materials optimized for maximum engagement and conversion across multiple channels and demographics."
  },
  {
    title: "GENERATIVE MEDIA SOLUTIONS",
    description: "Unlock unlimited creative possibilities with our comprehensive generative media platform that combines text, image, video, and audio generation. Our advanced AI ecosystem creates immersive multimedia experiences, interactive content, and personalized media at scale while maintaining creative quality and brand alignment."
  }
];

  const technologies = ["Generative AI", "Image AI", "Video AI", "VEO 3", "Midjourney", "ChatGPT", "DALL·E", "Nanobanana", "Higgsfield"];

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
                    text="AI*STUDIO*"
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
                      AI Studio transforms the way businesses create content with powerful generative AI.<br></br>From images and videos to branded assets and campaigns, we deliver high-quality, customized media at scale helping you stand out, save time, and connect with your audience more effectively.
                    </p>
                  </TextAnimation>
                </div>

                {technologies && technologies.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.3, ease: "easeOut" }}
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
                    AI STUDIO
                  </h1>
                </TextAnimation>
              </div>

              <div>
                <TextAnimation delay={0.5}>
                  <p className="text-white poppins-regular text-md">
                     AI Studio transforms the way businesses create content with powerful generative AI.<br></br>From images and videos to branded assets and campaigns, we deliver high-quality, customized media at scale helping you stand out, save time, and connect with your audience more effectively.
                  </p>
                </TextAnimation>
              </div>

              {technologies && technologies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
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