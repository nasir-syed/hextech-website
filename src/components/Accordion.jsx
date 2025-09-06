import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FakeGlassSurface from './FakeGlassSurface'

const AccordionItem = ({ title, description, technologies, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#007fc2]/30">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none transition-all duration-300 hover:py-7"
      >
        <h3 className="text-2xl md:text-3xl pr-8 poppins-regular text-[#007fc2] uppercase tracking-wide group-hover:text-[#005a8a] transition-colors duration-300">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-4 flex-shrink-0"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-[#007fc2]"
          >
            <path 
              d="M12 5V19M5 12H19" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
              opacity: { duration: 0.3, ease: "easeInOut" }
            }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-8">
              <p className="text-white text-lg leading-relaxed poppins-regular mb-6">
                {description}
              </p>
              
              {/* technologies section (only if the technologies array exists then display them otherwise don't) */}
              {technologies && technologies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                  className="mt-6"
                >
                  <h4 className="text-[#007fc2] text-lg mb-4 poppins-semibold">
                    Technologies Used
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ accordionData }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  // sample data
  const defaultAccordionData = [
    {
      title: "Sub Service 1",
      description: "Some really long text",
      technologies: ["TECH1", "TECH2", "TECH3", "TECH4", "TECH5", "TECH6"]
    },
    {
      title: "Sub Service 2",
      description: "Some really long text",
      technologies: ["TECH1", "TECH2", "TECH3", "TECH4", "TECH5", "TECH6"]
    },
    {
       title: "Sub Service 3",
      description: "Some really long text",
    },
    {
       title: "Sub Service 4",
      description: "Some really long text",
      technologies: ["TECH1", "TECH2", "TECH3", "TECH4", "TECH5", "TECH6"]
    },
    {
       title: "Sub Service 5",
      description: "Some really long text",
      technologies: ["TECH1", "TECH2", "TECH3", "TECH4", "TECH5", "TECH6"]
    },
    {
       title: "Sub Service 6",
      description: "Some really long text",
      technologies: ["TECH1", "TECH2", "TECH3", "TECH4", "TECH5", "TECH6"]
    }
  ];

  const dataToUse = accordionData || defaultAccordionData;

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="pr-4 m-0 flex justify-start items-start w-full md:mx-auto">
      <div className="space-y-0 w-full max-w-4xl mx-auto">
        {dataToUse.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            description={item.description}
            technologies={item.technologies}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;