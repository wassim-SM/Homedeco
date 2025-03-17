"use client";

import React, { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaUsers, FaBuilding, FaClock } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import Logo2 from "../pages/imgs/logo2.png";
import Banner from "../pages/imgs/banner.png";

// Dynamically import CountUp to avoid SSR issues
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

// Define TypeScript types for props
type CounterProps = {
  end: number;
  icon: React.ElementType;
  label: string;
};

function Counter({ end, icon: Icon, label }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Icon className="text-5xl text-yellow-600 mb-3" />
      {isInView && <CountUp start={0} end={end} duration={3} className="text-4xl font-bold text-gray-800" />}
      <p className="text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
}

function Whyus() {
  return (
    <div className="bg-gray-300 flex flex-col gap-6 mb-10 items-center justify-center text-center py-10">
      {/* Logo */}
      <motion.div 
        className="-mt-6" 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <Image src={Logo2} width={350} height={200} alt="Logo" />
        <p className="-mt-5"></p>
      </motion.div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-10">
        <Counter end={150} icon={FaUsers} label="Clients Satisfaits" />
        <Counter end={10} icon={FaClock} label="Années d'expérience" />
        <Counter end={40} icon={FaBuilding} label="Appartements Réalisés" />
      </div>

      <h2 className="text-center lg:text-2xl font-bold px-2 py-7 text-xl">
        🏡✨ Home Deco, l'expertise au service de vos rideaux ! ✨🏡
      </h2>
      <p className="text-center text-lg lg:text-xl pb-7 px-4">
        Spécialisés dans la décoration de rideaux, nous sublimons vos intérieurs avec élégance.
        Avec 150+ clients satisfaits et 10 ans d'expérience, nous créons des ambiances uniques.
        Déjà 60+ appartements décorés, pourquoi pas le vôtre ? 🌟
      </p>

      <div className="w-full max-w-[1400px] mx-auto">
        <Image
          src={Banner}
          alt="Banner"
          width={1400} // Maximum width
          height={200} // Fixed height
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Whyus;
