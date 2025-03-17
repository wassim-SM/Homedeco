"use client"; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Salon from "../pages/imgs/salon.jpeg";
import Kitchen from "../pages/imgs/kitchen.png";
import Chambre from "../pages/imgs/chambre.png";

const items = [
  { src: Salon, title: "Pour les salons" },
  { src: Kitchen, title: "Pour les cuisines" },
  { src: Chambre, title: "Pour les chambres" },
];

function Hero3() {
  return (
    <div className='flex shadow-2xl mb-8 flex-col bg-gray-200 pt-10 items-center justify-center px-6 w-full'>
      
      {/* Titre animé au scroll */}
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='font-extrabold text-3xl md:text-4xl lg:text-5xl text-center mb-12 text-gray-800'
      >
        Découvrez notre nouveau modèle de rideaux
      </motion.h1>

      {/* Grid des images avec animation au scroll */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl'>
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className='relative border border-gray-300 shadow-xl flex flex-col items-center w-full h-[500px] rounded-xl overflow-hidden transition-transform duration-300'
          >
            <Link href="" className='w-full h-full'>
              <div className='relative w-full h-full'>
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className='rounded-xl'
                />
              </div>
            </Link>

            {/* Texte animé */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className='absolute bottom-6 flex items-center bg-black bg-opacity-70 px-6 py-3 rounded-lg shadow-md'
            >
              <h3 className='text-white text-lg md:text-xl font-bold'>
                {item.title}
              </h3>
              <FaArrowRight className="text-white ml-3 text-lg md:text-xl cursor-pointer hover:translate-x-2 transition-transform duration-200" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Hero3;
