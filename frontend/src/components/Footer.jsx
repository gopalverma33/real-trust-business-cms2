import { useState } from "react";
import Newsletter from "./Newsletter";
import { motion } from "framer-motion";
import React from 'react'
import { 
  Heart, 
  Mail, 
  ArrowUp, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  MapPin,
  Phone,
  Globe,
  Shield,
  Sparkles,
  Building2,
  ArrowRight,
  Star
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
    services: [
      { label: "Consultation", href: "/services#consultation" },
      { label: "Design", href: "/services#design" },
      { label: "Marketing", href: "/services#marketing" },
      { label: "Support", href: "/services#support" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR Compliance", href: "/gdpr" },
    ],
  };

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: "129 Kamala Nagar Mhow, Indore, India" },
    { icon: <Phone className="w-4 h-4" />, text: "+91 7610100823" },
    { icon: <Mail className="w-4 h-4" />, text: "hello@realtrust.com" },
  ];

  return (
    <footer className=" relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        
        {/* Glowing Orbs */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl blur opacity-30" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      Real<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Trust</span>
                    </h2>
                    <p className="text-sm text-gray-400">Elevating Digital Excellence</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  We transform visionary ideas into exceptional digital realities. 
                  Trusted by industry leaders worldwide since {currentYear - 5}.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300 group">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <span className="text-sm group-hover:text-white transition-colors duration-300">
                        {info.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>Secure & Trusted</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Premium Service</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Company Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                    Company
                  </h4>
                  <nav className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        <span>{link.label}</span>
                      </motion.a>
                    ))}
                  </nav>
                </motion.div>

                {/* Services Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                    Services
                  </h4>
                  <nav className="space-y-3">
                    {footerLinks.services.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        <span>{link.label}</span>
                      </motion.a>
                    ))}
                  </nav>
                </motion.div>

                {/* Newsletter Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-pink-400" />
                    Stay Updated
                  </h4>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400">
                      Get exclusive insights and early access to premium content.
                    </p>
                    <Newsletter />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-gray-800" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <span>© {currentYear} RealTrust Technologies</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">All rights reserved</span>
              </div>
              <div className="flex items-center space-x-4">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-cyan-300 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social Links & Rating */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-400">4.9/5 (500+ reviews)</span>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                {[
                  { icon: <Twitter />, label: "Twitter", color: "hover:bg-cyan-500/20 hover:text-cyan-400" },
                  { icon: <Facebook />, label: "Facebook", color: "hover:bg-blue-500/20 hover:text-blue-400" },
                  { icon: <Instagram />, label: "Instagram", color: "hover:bg-pink-500/20 hover:text-pink-400" },
                  { icon: <Linkedin />, label: "LinkedIn", color: "hover:bg-blue-600/20 hover:text-blue-400" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center text-gray-300 transition-all duration-300 border border-gray-700 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          
            
        
        </div>
      </div>

      
    </footer>
  );
}