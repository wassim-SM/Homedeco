import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Service from "../pages/imgs/service.png"
import Calite from "../pages/imgs/quality.png"
import Price from "../pages/imgs/dollar.png"
import Deco from "../pages/imgs/Reminder.png"
import Logo from "../pages/imgs/logo.png"

const fadeInText = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const popUpFromRight = {
  hidden: { opacity: 0, x: 50, scale: 0.8 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
}

const popUpLogo = {
  hidden: { opacity: 0, y: -30, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
}

function Hero2() {
  return (
    <motion.div 
      className='flex flex-col items-center bg-gray-300  text-center p-6'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Logo avec effet de pop-up */}
      <motion.div variants={popUpLogo}>
        <Image src={Logo} width={300} height={150} alt='Logo' />
      </motion.div>

      <motion.div className='flex flex-col' variants={fadeInText}>
        <p className='text-xl font-black pb-4'>
          La Première Entreprise en Algérie dans l'installation des rideaux et tringles
        </p>
        <p className='pb-4'>
          Vous rêvez d'un intérieur qui reflète votre style unique ? Faites confiance à notre service de vente et installation de rideaux et tringles.
        </p>
      </motion.div>

      {/* Services et Image au centre */}
      <motion.div 
        className='flex flex-col lg:flex-row items-center lg:justify-center w-full max-w-5xl pt-4 gap-8 lg:gap-12'
        variants={container}
      >
        {/* Services */}
        <motion.div 
          className='flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8' 
          variants={container}
        >
          {[{img: Service, label: "Service"}, {img: Calite, label: "Qualité"}, {img: Price, label: "Prix"}].map((item, index) => (
            <motion.div 
              key={index} 
              className='flex flex-col items-center gap-3 p-4 cursor-pointer hover:scale-105 transition-transform'
              variants={popUpFromRight}
              whileHover={{ scale: 1.1 }}
            >
              <Image src={item.img} alt='' width={50} height={50} />
              <p className='font-extrabold text-2xl'>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Deco avec effet de pop-up et transition droite → gauche */}
        <motion.div 
          className='border-2 border-black rounded-4xl hover:scale-105 transition-transform'
          variants={popUpFromRight}
          whileHover={{ scale: 1.05 }}
        >
          <Image src={Deco} width={400} height={400} alt='' className='rounded-4xl' />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Hero2
