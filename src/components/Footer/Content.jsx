import { useRef } from 'react'
import { motion, useInView } from "motion/react"

export default function Content() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.2 // trigger only when 20% of the element is visible 
  })

  return (
    <div 
      ref={ref}
      className='bg-[#070707] min-h-screen w-full flex flex-col justify-between text-[#007fc2]'
    >
        <Section1 isInView={isInView} />
        <Section2 isInView={isInView} />
    </div>
  )
}

const Section1 = ({ isInView }) => {
    return (
        <motion.div 
            className='py-4 px-6 md:py-8 md:px-12'
            initial={{ opacity: 0, y: 5 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
                duration: 0.8, 
                delay: 0,
                ease: "easeOut"
            }}
        >
            <Nav isInView={isInView} />

        </motion.div>
    )
}

const Section2 = ({ isInView }) => {
    return (
       <div className='pb-8'>
            <div className="w-full">
                <motion.h1 
                    className="fixed w-full mb-2 md:mb-0 text-[15vw] leading-[0.8] bottom-0 text-[#007fc2] text-center zen-dots-regular"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ 
                        duration: 1, 
                        delay: 0,
                        ease: "easeOut"
                    }}
                >
                HEXTECH
                </motion.h1>
            </div>
        </div>
    )
}

const Nav = ({ isInView }) => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-start mt-8 md:mt-10'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-40 w-full md:w-auto'>
                <motion.div 
                    className='flex flex-col gap-2'
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ 
                        duration: 0.6, 
                        delay: isInView ? 0.4 : 0,
                        ease: "easeOut"
                    }}
                >
                    <h3 className='mb-3 text-[#0075b3] opacity-60 poppins-regular-italic text-md'>Talk</h3>
                    <p className='poppins-regular text-sm'>info@hextech.ae</p>
                    <p className='poppins-regular text-sm'>+971 50 12345657</p>
                </motion.div>
                <motion.div 
                    className='flex flex-col gap-2'
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ 
                        duration: 0.6, 
                        delay: isInView ? 0.4 : 0,
                        ease: "easeOut"
                    }}
                >
                    <h3 className='mb3 text-[#0075b3] opacity-60 poppins-regular-italic text-md'>Meet</h3>
                    <p className='poppins-regular text-sm'>in5 Tech</p>
                    <p className='poppins-regular text-sm'>Dubai Internet City, Dubai</p>
                    <p className='poppins-regular text-sm'>United Arab Emirates</p>
                </motion.div>
            </div>
        </div>
    )
}