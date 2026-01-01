import { motion } from "framer-motion";
import React from 'react'
import { 
  Target, 
  Code, 
  Zap, 
  Cpu, 
  Layers, 
  Rocket, 
  Shield, 
  Globe,
  Sparkles
} from "lucide-react";

export default function AboutProject() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project Objective",
      description: "Build a scalable enterprise real estate platform with cutting-edge technology and premium user experience.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tech Stack",
      description: "Modern stack: React, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion, and REST APIs.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Key Features",
      description: "Dynamic CMS, responsive design, API integration, admin dashboard, and premium UI/UX.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "Node.js", icon: "🟢", color: "text-emerald-400" },
    { name: "MongoDB", icon: "🍃", color: "text-green-400" },
    { name: "Tailwind", icon: "🎨", color: "text-blue-400" },
    { name: "Express", icon: "🚀", color: "text-gray-400" },
    { name: "Framer", icon: "✨", color: "text-purple-400" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full mb-6 border border-cyan-500/20">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm font-semibold text-cyan-300">Project Showcase</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="block bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent">
                About The
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Project
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive CMS-based real estate platform engineered for 
              scalability, performance, and exceptional user experience.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Card Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Card Content */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <h4 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Technology Stack</h3>
              <p className="text-gray-400">Modern tools powering exceptional performance</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-gray-800 flex items-center space-x-2 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className={`font-medium ${tech.color}`}>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Architecture Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-3xl p-8 border border-gray-800"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <Layers className="w-5 h-5" />, title: "Modular", desc: "Component-based architecture" },
                { icon: <Cpu className="w-5 h-5" />, title: "Scalable", desc: "Handles growing data needs" },
                { icon: <Rocket className="w-5 h-5" />, title: "Fast", desc: "Optimized performance" },
                { icon: <Shield className="w-5 h-5" />, title: "Secure", desc: "Enterprise-grade security" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center mx-auto mb-3">
                    <div className="text-cyan-400">{item.icon}</div>
                  </div>
                  <div className="font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Goals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Project Goals Achieved</h3>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Modern UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Full CRUD Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Responsive Across Devices</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>REST API Integration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}