import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import React from 'react' 
import { 
  Home, 
  ClipboardCheck, 
  Target, 
  Palette, 
  BarChart3, 
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Award,
  Globe,
  Target as TargetIcon,
  Rocket,
  Layers,
  Clock,
  Wallet,
  Heart,
  Eye,
  Lightbulb,
  Trophy
} from "lucide-react";

export default function Services() {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const services = [
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Real Estate Consulting",
      description: "Expert strategic guidance for property acquisition, sales, and portfolio optimization.",
      features: ["Market Intelligence", "Investment Strategies", "Risk Mitigation", "Portfolio Diversification"],
      gradient: "from-cyan-500 to-blue-600",
      stats: { value: "₹100Cr+", label: "Portfolio Managed", icon: <TrendingUp className="w-4 h-4" /> },
      color: "cyan",
      delay: 0
    },
    {
      icon: <ClipboardCheck className="w-7 h-7" />,
      title: "Project Management",
      description: "Comprehensive oversight ensuring seamless execution from conception to completion.",
      features: ["Timeline Optimization", "Budget Excellence", "Quality Control", "Vendor Coordination"],
      gradient: "from-purple-600 to-pink-600",
      stats: { value: "98.7%", label: "On-Time Delivery", icon: <Clock className="w-4 h-4" /> },
      color: "purple",
      delay: 0.1
    },
    {
      icon: <TargetIcon className="w-7 h-7" />,
      title: "Property Marketing",
      description: "Innovative marketing strategies that maximize property visibility and buyer engagement.",
      features: ["Digital Campaigns", "Brand Storytelling", "Lead Generation", "Virtual Experiences"],
      gradient: "from-orange-500 to-red-600",
      stats: { value: "3.8x", label: "Engagement Rate", icon: <Eye className="w-4 h-4" /> },
      color: "orange",
      delay: 0.2
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Interior Design",
      description: "Transformative design solutions that elevate property aesthetics and functional value.",
      features: ["Space Innovation", "Premium Materials", "Custom Designs", "Sustainable Solutions"],
      gradient: "from-emerald-500 to-teal-600",
      stats: { value: "42%", label: "Value Increase", icon: <TrendingUp className="w-4 h-4" /> },
      color: "emerald",
      delay: 0.3
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Market Intelligence",
      description: "AI-powered insights and predictive analytics for informed real estate decisions.",
      features: ["Trend Forecasting", "ROI Analysis", "Competitive Intelligence", "AI Predictions"],
      gradient: "from-indigo-600 to-blue-700",
      stats: { value: "10,000+", label: "Data Points", icon: <Lightbulb className="w-4 h-4" /> },
      color: "indigo",
      delay: 0.4
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Client Success",
      description: "Personalized support and dedicated partnership throughout your property journey.",
      features: ["24/7 Concierge", "Strategic Guidance", "Post-Sale Support", "Dedicated Success Manager"],
      gradient: "from-rose-500 to-pink-600",
      stats: { value: "99.2%", label: "Retention Rate", icon: <Heart className="w-4 h-4" /> },
      color: "rose",
      delay: 0.5
    }
  ];

  const processSteps = [
    { icon: <Target className="w-6 h-6" />, title: "Discovery", description: "Deep dive into your vision", gradient: "from-blue-500 to-cyan-500" },
    { icon: <Layers className="w-6 h-6" />, title: "Strategy", description: "Custom roadmap creation", gradient: "from-purple-500 to-pink-500" },
    { icon: <Rocket className="w-6 h-6" />, title: "Execution", description: "Flawless implementation", gradient: "from-orange-500 to-red-500" },
    { icon: <Trophy className="w-6 h-6" />, title: "Success", description: "Results & optimization", gradient: "from-emerald-500 to-teal-500" },
  ];

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y: backgroundY, opacity }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/30 via-black/50 to-black"
        />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
            initial={{ 
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0
            }}
            animate={{ 
              y: [null, -Math.random() * 100 - 50, Math.random() * 100 + 50],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
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
              <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Enterprise-Grade Solutions
              </span>
            </motion.div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight">
              <span className="block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
                REDEFINE
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                REAL ESTATE
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                EXCELLENCE
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Where visionary property strategies meet cutting-edge execution. 
              Transform your real estate ambitions into unparalleled success stories.
            </motion.p>
          </motion.div>

          {/* Process Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 relative"
          >
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 flex items-center justify-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Step Card */}
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 shadow-xl shadow-${step.gradient.split('-')[1]}-500/20`}>
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: service.delay, type: "spring" }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className="relative group"
              >
                {/* Neon Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200`} />
                
                {/* Card Background */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
                  </div>

                  {/* Header */}
                  <div className="relative mb-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl`}>
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                            <span className="text-sm text-gray-400 ml-2">Premium</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stats Badge */}
                      <div className="text-center">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {service.stats.value}
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mt-1">
                          {service.stats.icon}
                          <span>{service.stats.label}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed relative">
                    {service.description}
                    <span className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} transition-all duration-1000`} />
                  </p>

                  {/* Features Grid */}
                  <div className="mb-8">
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="group/feature relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-gray-800 group-hover/feature:border-gray-700 transition-colors duration-300" />
                          <div className="relative p-4 rounded-xl">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className={`w-5 h-5 text-${service.color}-400`} />
                              <span className="text-gray-300 group-hover/feature:text-white transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Shield className="w-4 h-4 text-cyan-400" />
                        <span>Enterprise Security</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span>Premium Support</span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl flex items-center space-x-2 shadow-2xl`}
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise Trust Banner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),transparent_70%)]" />
            
            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 mb-6">
                  <Award className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-sm font-semibold text-cyan-300">Industry Recognition</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Global Leaders</span>
                </h3>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Join Fortune 500 companies and industry pioneers who transformed their property portfolios with us
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { icon: <Globe className="w-8 h-8" />, label: "Global Reach", value: "50+ Countries" },
                  { icon: <TrendingUp className="w-8 h-8" />, label: "Success Rate", value: "99.8%" },
                  { icon: <Wallet className="w-8 h-8" />, label: "Portfolio Value", value: "₹500Cr+" },
                  { icon: <Users className="w-8 h-8" />, label: "Happy Clients", value: "1000+" },
                  { icon: <Clock className="w-8 h-8" />, label: "Experience", value: "15+ Years" },
                  { icon: <Trophy className="w-8 h-8" />, label: "Awards", value: "25+" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center mx-auto mb-4">
                      <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Final CTA - Glowing Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" />
              
              {/* Main Button */}
              <div className="relative px-12 py-6 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800">
                <div className="flex items-center space-x-4">
                  <Rocket className="w-8 h-8 text-cyan-400 animate-bounce" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">Begin Your Journey</div>
                    <div className="text-gray-400">Schedule a personalized consultation</div>
                  </div>
                  <div className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white">
                    Get Started
                  </div>
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}