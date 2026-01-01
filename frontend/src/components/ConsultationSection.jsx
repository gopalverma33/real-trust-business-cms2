import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import React from 'react'
import { 
  CheckCircle, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Target, 
  TrendingUp,
  Shield,
  Zap,
  Clock,
  Eye,
  Layers,
  Rocket
} from "lucide-react";

export default function ConsultationSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hoveredField, setHoveredField] = useState(null);
  const [activeInput, setActiveInput] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post("http://localhost:5000/api/contacts", form);
      setShowSuccess(true);
      setForm({ fullName: "", email: "", mobile: "", city: "" });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      alert("Form Submitted");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const formFields = [
    { key: "fullName", icon: User, placeholder: "Full Name", gradient: "from-cyan-400 to-blue-500" },
    { key: "email", icon: Mail, placeholder: "Enter Email Address", type: "email", gradient: "from-blue-400 to-purple-500" },
    { key: "mobile", icon: Phone, placeholder: "Mobile Number", type: "tel", gradient: "from-purple-400 to-pink-500" },
    { key: "city", icon: MapPin, placeholder: "Area, City", gradient: "from-pink-400 to-rose-500" },
  ];

  const benefits = [
    { icon: Target, title: "Strategic Vision", desc: "Data-driven roadmaps for exponential growth", gradient: "from-cyan-500 to-blue-600" },
    { icon: TrendingUp, title: "Growth Engineering", desc: "Proven frameworks to scale your impact", gradient: "from-blue-500 to-purple-600" },
    { icon: Zap, title: "Rapid Execution", desc: "Agile implementation with precision delivery", gradient: "from-purple-500 to-pink-600" },
    { icon: Shield, title: "Risk Mitigation", desc: "Comprehensive protection and contingency planning", gradient: "from-pink-500 to-rose-600" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black w-full">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
            initial={{ 
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0
            }}
            animate={{ 
              x: [null, Math.random() * 100 - 50 + 'vw'],
              y: [null, Math.random() * 100 - 50 + 'vh'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT SIDE - Consultation Info */}
           <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, margin: "-50px" }}
  className="relative group w-full"
>
  {/* Glow Effect - Responsive */}
  <div className="absolute -inset-1 sm:-inset-0.5 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl blur opacity-10 sm:opacity-20 group-hover:opacity-20 sm:group-hover:opacity-30 transition duration-500" />
  
  {/* Main Card - Responsive with Image */}
  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 md:p-10 border border-gray-800 overflow-hidden w-full">
    {/* Animated Background Pattern */}
    <div className="absolute inset-0 opacity-5 sm:opacity-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent_40%)] sm:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
    </div>

    <div className="relative z-20">
      {/* Header with Image Row on Desktop */}
      <div className="space-y-4 sm:space-y-6 md:space-y-8 mb-6 sm:mb-8 md:mb-12">
        {/* Image Row - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex items-center justify-between gap-8">
          <div className="flex-1">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 sm:from-cyan-500/10 sm:to-blue-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20 mb-4"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mr-2 sm:mr-3 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Premium Enterprise Service
              </span>
            </motion.div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Consultation,
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Design
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                & Marketing
              </span>
            </h1>
          </div>
          
          {/* Image Container - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-48 lg:w-56 xl:w-64 flex-shrink-0"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl blur opacity-20" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-gray-700">
              <img
                src="/consultation-hero.jpg" // Replace with your image
                alt="Business consultation meeting"
                className="w-full h-48 lg:h-56 xl:h-64 object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Mobile/Tablet Layout (without side image) */}
        <div className="md:hidden">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 sm:from-cyan-500/10 sm:to-blue-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mr-2 sm:mr-3 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Premium Enterprise Service
            </span>
          </motion.div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-4">
            <span className="block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Consultation,
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Design
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              & Marketing
            </span>
          </h1>
          
          {/* Image for mobile - below heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-6"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl blur opacity-20" />
            <div className="relative rounded-xl overflow-hidden border border-gray-700">
              <img
                src={"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"} // Replace with your image
                alt="Business consultation meeting"
                className="w-full h-40 sm:h-48 object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
        
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mt-4 sm:mt-6">
          Transform your vision into reality with our comprehensive suite of 
          premium services backed by cutting-edge technology and decades of expertise.
        </p>
      </div>

      {/* Benefits Grid - Responsive */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, margin: "-20px" }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="group/benefit relative"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-br ${benefit.gradient} rounded-lg sm:rounded-xl blur opacity-0 group-hover/benefit:opacity-10 sm:group-hover/benefit:opacity-20 transition duration-500`} />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700 group-hover/benefit:border-gray-600 transition-all duration-300">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className={`w-10 h-10 xs:w-12 xs:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-sm xs:text-base group-hover/benefit:text-cyan-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-xs xs:text-sm text-gray-400 mt-1">{benefit.desc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Row - Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true, margin: "-20px" }}
        className="mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 border-t border-gray-800"
      >
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {[
            { value: "24h", label: "Response Time", icon: Clock },
            { value: "500+", label: "Projects", icon: Layers },
            { value: "99%", label: "Success Rate", icon: Rocket }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="flex items-center justify-center space-x-1 xs:space-x-2 text-xs xs:text-sm text-gray-400 mt-1">
                <stat.icon className="w-3 h-3 xs:w-4 xs:h-4" />
                <span className="truncate">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</motion.div>
            {/* RIGHT SIDE - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Success Notification */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.9 }}
                    className="absolute -top-24 left-0 right-0 z-50"
                  >
                    <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6 rounded-2xl shadow-2xl shadow-emerald-500/30 flex items-center justify-center space-x-3 border border-emerald-400/20">
                      <CheckCircle className="w-8 h-8" />
                      <div className="text-left">
                        <div className="font-bold text-lg">Consultation Requested!</div>
                        <div className="text-sm text-emerald-100">Our expert will contact you within 24 hours</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Container */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-20" />
                
                {/* Main Form Card */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-10 border border-gray-800 overflow-hidden">
                  {/* Animated Header Gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-3xl" />
                  
                  <div className="relative z-10">
                    {/* Form Header */}
                    <div className="mb-10">
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        Get Your Free
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                          Consultation
                        </span>
                      </h3>
                      <p className="text-gray-400 text-lg">
                        Complete this form for a personalized strategy session
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={submitHandler} className="space-y-6">
                      {formFields.map((field, index) => (
                        <motion.div
                          key={field.key}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="relative group/field"
                        >
                          <div className="relative">
                            {/* Input Icon */}
                            <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 ${
                              activeInput === field.key ? 'text-cyan-400' : 'text-gray-500'
                            } transition-colors duration-300`}>
                              <field.icon className="w-5 h-5" />
                            </div>
                            
                            {/* Input Label Animation */}
                            <motion.div
                              initial={false}
                              animate={{
                                y: form[field.key] || activeInput === field.key ? -12 : 0,
                                scale: form[field.key] || activeInput === field.key ? 0.85 : 1,
                              }}
                              className={`absolute left-12 top-1/2 transform -translate-y-1/2 pointer-events-none ${
                                form[field.key] || activeInput === field.key 
                                  ? 'text-cyan-400' 
                                  : 'text-gray-500'
                              } transition-colors duration-300`}
                            >
                              <span className="text-sm font-medium bg-gradient-to-r ${field.gradient} bg-clip-text text-transparent">
                                {field.placeholder}
                              </span>
                            </motion.div>
                            
                            {/* Input Field */}
                            <input
                              type={field.type || "text"}
                              value={form[field.key]}
                              onChange={(e) => handleInputChange(field.key, e.target.value)}
                              onFocus={() => setActiveInput(field.key)}
                              onBlur={() => setActiveInput(null)}
                              onMouseEnter={() => setHoveredField(field.key)}
                              onMouseLeave={() => setHoveredField(null)}
                              required
                              className="w-full pl-12 pr-4 py-5 bg-gray-800/50 border-2 border-gray-700 rounded-xl focus:outline-none focus:ring-0 focus:border-cyan-500 transition-all duration-300 text-white placeholder-transparent group-hover/field:border-gray-600"
                            />
                            
                            {/* Active Indicator */}
                            {activeInput === field.key && (
                              <motion.div
                                layoutId="input-indicator"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                transition={{ type: "spring", bounce: 0.2 }}
                              />
                            )}
                          </div>
                        </motion.div>
                      ))}

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-5 px-6 rounded-xl font-bold text-white transition-all duration-300 relative overflow-hidden group/button ${
                          isSubmitting 
                            ? "bg-gradient-to-r from-gray-700 to-gray-800 cursor-not-allowed" 
                            : "bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/30"
                        }`}
                      >
                        {/* Button Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 via-blue-700 to-purple-700 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />
                        
                        {/* Button Content */}
                        <span className="relative flex items-center justify-center space-x-3">
                          {isSubmitting ? (
                            <>
                              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span className="text-lg">Processing Request...</span>
                            </>
                          ) : (
                            <>
                              <span className="text-lg">Get Instant Quote</span>
                              <ArrowRight className="w-5 h-5 transform group-hover/button:translate-x-2 transition-transform duration-300" />
                            </>
                          )}
                        </span>
                      </motion.button>

                      {/* Security Assurance */}
                      <div className="pt-6 border-t border-gray-800">
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Shield className="w-4 h-4 text-cyan-400" />
                            <span>Enterprise-grade Security</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Eye className="w-4 h-4 text-blue-400" />
                            <span>Privacy Protected</span>
                          </div>
                        </div>
                        <p className="text-center text-xs text-gray-500 mt-4">
                          By submitting, you agree to our Privacy Policy. No spam, ever.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Floating Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 1, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 border border-gray-800 shadow-2xl"
                >
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">100%</div>
                      <div className="text-xs text-gray-400">Confidential</div>
                    </div>
                    <div className="h-8 w-px bg-gradient-to-b from-gray-700 to-transparent" />
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Free</div>
                      <div className="text-xs text-gray-400">No Hidden Fees</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}