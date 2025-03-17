"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    location: "",
    contactMethod: "email",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show success toast
    toast.success("Message envoyé avec succès ! 🚀", {
      position: "top-right",
      duration: 3000,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      location: "",
      contactMethod: "email",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-6 py-12">
      <Toaster /> {/* Toast Notifications */}

      <motion.div
        className="w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side - Contact Form */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
            Contactez-nous
          </h2>
          <p className="text-gray-300 text-center md:text-left">
            Remplissez ce formulaire et nous vous répondrons dès que possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Numéro de téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Votre message..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            ></textarea>

            {/* Location Input */}
            <input
              type="text"
              name="location"
              placeholder="Votre localisation (Ville, Adresse...)"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            />

            {/* Contact Preference Options */}
            <div className="flex flex-col gap-2 text-white">
              <label className="font-semibold">Préférence de contact :</label>
              <select
                name="contactMethod"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                value={formData.contactMethod}
                onChange={handleChange}
              >
                <option value="email">Email</option>
                <option value="phone">Téléphone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition"
            >
              Envoyer
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUs;
