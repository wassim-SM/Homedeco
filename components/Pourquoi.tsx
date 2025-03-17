"use client"; // Ensure it's a client component

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Work from "../pages/imgs/wrench.png";
import Delivry from "../pages/imgs/fast-delivery.png";
import Satisfide from "../pages/imgs/satisfied.png";

// Animation variants
const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Pourquoi() {
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center -mt-10 py-10">
      {/* Title */}
      <motion.h1
        className="font-bold text-2xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeLeft}
      >
        Pourquoi Vous devez choisir{" "}
        <p className="font-black text-yellow-900 text-2xl drop-shadow-2xl">
          Home Deco ?
        </p>
      </motion.h1>

      {/* First Section - Slide from Left */}
      <motion.div
        className="flex flex-col mt-6 md:flex-row gap-4 items-center justify-center p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
      >
        <div className="flex flex-col items-center gap-4">
          <Image src={Work} alt="Work" width={40} height={40} />
          <h1 className="text-xl font-bold uppercase text-center shadow-lg p-2 rounded-2xl drop-shadow-2xl">
            Installation professionnelle et soignée
          </h1>
          <p className="font-semibold text-center">
            Nous nous chargeons de l'installation de vos rideaux avec précision
            et expertise, garantissant un rendu esthétique et parfaitement
            adapté à votre intérieur.
          </p>
        </div>
      </motion.div>

      {/* Second Section - Slide from Right */}
      <motion.div
        className="flex flex-col gap-4 md:flex-row items-center justify-center p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeRight}
      >
        <div className="flex flex-col items-center gap-4">
          <Image src={Delivry} alt="Delivery" width={40} height={40} />
          <h1 className="text-xl font-bold uppercase text-center shadow-lg p-2 rounded-2xl drop-shadow-2xl">
            Livraison gratuite et rapide
          </h1>
          <p className="font-semibold text-center">
            Nous vous offrons la livraison sans frais supplémentaires de 58
            wilayas, vous permettant de recevoir vos rideaux directement chez
            vous sans contrainte.
          </p>
        </div>
      </motion.div>

      {/* Third Section - Slide from Left */}
      <motion.div
        className="flex flex-col gap-4 md:flex-row items-center justify-center p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
      >
        <div className="flex flex-col items-center gap-4">
          <Image src={Satisfide} alt="Satisfied" width={40} height={40} />
          <h1 className="text-xl font-bold uppercase shadow-lg text-center p-2 rounded-2xl drop-shadow-2xl">
            Un service sur mesure pour un intérieur unique
          </h1>
          <p className="font-semibold text-center">
            Nous vous accompagnons dans le choix des rideaux idéaux, en fonction
            de vos goûts et de votre décoration, pour créer une atmosphère
            élégante et harmonieuse.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Pourquoi;
