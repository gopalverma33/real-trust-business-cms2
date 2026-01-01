import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from 'react'
import { 
  Quote, 
  Star, 
  Users, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Award,
  Heart,
  Trophy,
  Target,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield
} from "lucide-react";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/clients")
      .then(res => {
        setClients(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (autoPlay && !isHovering && clients.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % clients.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, isHovering, clients.length]);

  const nextClient = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevClient = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]" />
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
            initial={{ 
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0
            }}
            animate={{ 
              y: [null, -Math.random() * 100 - 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl border border-gray-800 mb-8"
            >
              <div className="mr-3">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping" />
              </div>
              <Heart className="w-5 h-5 text-cyan-400 mr-2 fill-cyan-400/20" />
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </motion.div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Voices of
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Trust & Success
              </span>
            </h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Join hundreds of visionary clients who've transformed their property aspirations 
              into remarkable success stories with our premium real estate solutions.
            </motion.p>
          </motion.div>

          {/* Statistics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { value: "98.7%", label: "Satisfaction Rate", icon: Star, gradient: "from-cyan-500 to-blue-500", delay: 0 },
              { value: "500+", label: "Happy Clients", icon: Users, gradient: "from-blue-500 to-purple-500", delay: 0.1 },
              { value: "4.9/5", label: "Average Rating", icon: Trophy, gradient: "from-purple-500 to-pink-500", delay: 0.2 },
              { value: "₹100Cr+", label: "Portfolio Value", icon: TrendingUp, gradient: "from-pink-500 to-rose-500", delay: 0.3 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Stat Card */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Loading State */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center h-96"
              >
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-gray-800 border-t-cyan-500 rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-cyan-400 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Testimonials Carousel */}
          <AnimatePresence>
            {!loading && clients.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setAutoPlay(false);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setTimeout(() => setAutoPlay(true), 2000);
                }}
              >
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 z-20 flex justify-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevClient}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm shadow-2xl flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 border border-gray-800 hover:border-cyan-500/50"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextClient}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm shadow-2xl flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 border border-gray-800 hover:border-cyan-500/50"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Testimonials Container */}
                <div className="relative h-[600px] md:h-[500px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    {clients.map((client, index) => (
                      <motion.div
                        key={client._id}
                        initial={{ 
                          opacity: 0,
                          scale: 0.9,
                          x: index > currentIndex ? 100 : -100
                        }}
                        animate={{ 
                          opacity: index === currentIndex ? 1 : 0.3,
                          scale: index === currentIndex ? 1 : 0.85,
                          x: 0
                        }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`absolute inset-0 flex items-center justify-center ${
                          index === currentIndex ? "z-10" : "z-0"
                        }`}
                      >
                        {/* Testimonial Card */}
                        <div className={`w-full max-w-5xl mx-auto ${
                          index === currentIndex ? "opacity-100" : "opacity-30 pointer-events-none"
                        }`}>
                          <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                            
                            {/* Main Card */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-gray-800">
                              <div className="p-8 md:p-12">
                                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                                  {/* Client Image Section */}
                                  <div className="relative">
                                    {/* Glowing Ring */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20" />
                                    
                                    {/* Image Container */}
                                    <motion.div
                                      whileHover={{ scale: 1.05, rotate: 2 }}
                                      className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl"
                                    >
                                      <img 
                                        src={client.image} 
                                        alt={client.name}
                                        className="w-full h-full object-cover"
                                      />
                                      
                                      {/* Verified Badge */}
                                      <div className="absolute top-4 right-4">
                                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                                          <CheckCircle className="w-5 h-5 text-white" />
                                        </div>
                                      </div>
                                    </motion.div>

                                    {/* Company Badge */}
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                      <div className="px-4 py-2 bg-gradient-to-r from-gray-900 to-black rounded-full border border-gray-800 shadow-lg">
                                        <div className="flex items-center space-x-2">
                                          <Award className="w-4 h-4 text-cyan-400" />
                                          <span className="text-sm font-medium text-gray-300">
                                            {client.company || "Enterprise Client"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Testimonial Content */}
                                  <div className="flex-1">
                                    {/* Quote Icon */}
                                    <div className="mb-8">
                                      <Quote className="w-12 h-12 text-cyan-500/30" />
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-xl md:text-2xl text-gray-300 italic mb-10 leading-relaxed">
                                      "{client.description}"
                                    </p>

                                    {/* Client Info */}
                                    <div className="border-t border-gray-800 pt-8">
                                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                          <h4 className="text-2xl font-bold text-white mb-1">{client.name}</h4>
                                          <div className="flex items-center space-x-4">
                                            <span className="text-gray-400 font-medium">{client.designation}</span>
                                            <div className="flex items-center space-x-1">
                                              <Globe className="w-4 h-4 text-blue-400" />
                                              <span className="text-sm text-gray-500">{client.location || "Global"}</span>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        {/* Rating Stars */}
                                        <div className="flex items-center space-x-4">
                                          <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                              <Star 
                                                key={i} 
                                                className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                                              />
                                            ))}
                                          </div>
                                          <div className="text-lg font-bold text-white">5.0</div>
                                        </div>
                                      </div>

                                      {/* Engagement Stats */}
                                      <div className="grid grid-cols-3 gap-4 mt-6">
                                        {[
                                          { label: "Projects", value: client.projects || "12+" },
                                          { label: "Duration", value: client.duration || "3 Years" },
                                          { label: "ROI", value: client.roi || "28%" }
                                        ].map((stat, idx) => (
                                          <div key={idx} className="text-center">
                                            <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-12 space-x-3">
                  {clients.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        setAutoPlay(false);
                        setTimeout(() => setAutoPlay(true), 10000);
                      }}
                      className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500" 
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                      whileHover={{ scale: 1.3 }}
                    >
                      {index === currentIndex && (
                        <motion.div
                          layoutId="indicator-glow"
                          className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-30"
                          transition={{ type: "spring", bounce: 0.2 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {!loading && clients.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-900 to-black border border-gray-800 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No Client Testimonials Yet</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Client testimonials will appear here once they're added through the admin panel.
              </p>
            </motion.div>
          )}

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 mb-6">
                <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-sm font-semibold text-cyan-300">Trust & Recognition</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h3>
            </div>
            
            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {clients.slice(0, 10).map((client, index) => (
                <motion.div
                  key={client._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}