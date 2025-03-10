import { assets, infoList, toolsData  } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"


const About = ({isDarkMode}) => {
  return (
    <motion.div 
    
    id="about" className="w-full px-[12%] py-10 scroll-mt-20"
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4 
      initial={{opacity: 0, y:-20}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration: 0.5, delay:0.3}}
      className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2
      initial={{opacity: 0, y:-20}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration: 0.5, delay:0.3}}
      className="text-center text-5xl font-Ovo">About Me</motion.h2>

      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
        initial={{opacity: 0, scale:0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6}}
        className="w-64 sm:w-80 rounded-3xl max-w-none">
            <Image src={assets.xlap} alt='user' className="w-full rounded-3xl" />
        </motion.div>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.8}}
        className="flex-1">
            <p className=" mb-10 max-w-2xl font-Ovo">
            I am a third-year Computer Science student with a passion for front-end web development. I thrive on the challenge of turning creative ideas into engaging, user-friendly websites, blending modern design trends with solid coding practices.
            As I continue to explore HTML, CSS, and JavaScript and React, I am excited to learn new skills and build more projects. Every project I work on is a step forward in my journey to become a versatile and impactful web developer,
            and I'm excited to see where this adventure in tech takes me! Other interests I have include Surfing, learning about WEB 3 and Crypto Currency as well as playing the guitar.
            </p>

            <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay:1}}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                {infoList.map(({icon, iconDark, title, description}, index) =>(
                    <motion.li 
                    whileInView={{scale: 1.05}}
                    className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hovershadow-white dark:hover:bg-darkHover/50" key={index}>
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                        <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                        <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                    </motion.li>
                ))}
            </motion.ul>
                <motion.h4 
                 initial={{opacity: 0}}
                 whileInView={{opacity: 1}}
                 transition={{duration: 0.6, delay:1.5}}
                className="my06 text-gray-700 font-Ovo dark:text-white/80">Tools I Use</motion.h4>
            <motion.ul 
            initial={{opacity: 0, y:-20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay:0.3}}
            className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                    <motion.li
                    whileHover={{scale: 1.1}}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 " key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      </motion.div>

    </motion.div>
  )
}

export default About
