"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { LatLngTuple } from "leaflet";

// Import Leaflet dynamically to avoid "window is not defined"
const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false });

function Place() {
  const [L, setL] = useState<any>(null);
  const position: LatLngTuple = [36.7528, 3.0422]; // Algiers, Algeria ✅ FIXED

  useEffect(() => {
    import("leaflet").then((leaflet) => setL(leaflet));
  }, []);

  if (!L) return <p className="text-center text-xl">Loading Map...</p>;

  // Fix missing icons
  const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col items-center p-10">
      {/* Title with animation */}
      <motion.h1
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Où pouvez-vous nous trouver ?
      </motion.h1>

      {/* Container with flex-row for large screens */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Side - Text Information */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-800 text-center">
            Tu peux trouver notre magasin à Chéraga, rue Amirouche.
          </h3>
          <h4 className="text-lg text-gray-600 text-center mt-2">
            Les heures de travail sont de{" "}
            <span className="font-semibold">8h00</span> à{" "}
            <span className="font-semibold">17h00</span>.
          </h4>

          <div className="flex justify-center mt-4">
            <Link
              href="https://www.google.com/maps"
              target="_blank"
              className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition"
            >
              Google Maps
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Map */}
        <motion.div
          className="w-full lg:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MapContainer center={position} zoom={13} className="w-full h-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={customIcon}>
              <Popup>Tu es ici !</Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </div>
  );
}

export default Place;
