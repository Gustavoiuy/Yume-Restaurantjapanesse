"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ChevronRight, Home, Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/types";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <div className="flex items-center justify-center text-gray-300">
              <Link
                href="/"
                className="flex items-center hover:text-primary transition-colors"
              >
                <Home size={16} />
                <span className="ml-2">Home</span>
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
         
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-dark mb-6">
                
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-2">
                      Direccion
                    </h3>
                    <p className="text-gray-600">Fuentes de Satelite 146</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-2">
                      Telefono
                    </h3>
                    <p className="text-gray-600">+52 55 95 71 94 00</p>
                  </div>
                </div>

              
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-2">
                    Horarios
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Martes - domingos: 1:00 pm - 09:00 PM</p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
