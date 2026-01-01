import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { 
  ExternalLink, 
  Eye, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  Star, 
  Sparkles,
  Layers,
  Target,
  ArrowRight,
  Clock,
  Users,
  Award
} from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://real-trust-backend-s0qw.onrender.com/api/projects")
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filters = ["all", "residential", "commercial", "luxury", "development"];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black ">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Overlay */}
        <div className=" absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
            initial={{ 
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0
            }}
            animate={{ 
              y: [null, -Math.random() * 100 - 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
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
            className="text-center mb-16"
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
                Premium Portfolio
              </span>
            </motion.div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Exceptional
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Property Portfolio
              </span>
            </h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              We know what buyers are looking for and curate projects that deliver 
              exceptional value, maximize returns, and redefine luxury living standards.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { value: projects.length, label: "Completed Projects", icon: Layers, gradient: "from-cyan-500 to-blue-500" },
                { value: "₹500Cr+", label: "Portfolio Value", icon: TrendingUp, gradient: "from-blue-500 to-purple-500" },
                { value: "98.7%", label: "Client Satisfaction", icon: Star, gradient: "from-purple-500 to-pink-500" },
                { value: "15+", label: "Years Experience", icon: Award, gradient: "from-pink-500 to-rose-500" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-900 to-black rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <stat.icon className={`w-6 h-6 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 capitalize ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Loading State */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[1, 2, 3, 4, 5, 6].map((skeleton) => (
                  <div key={skeleton} className="animate-pulse">
                    <div className="bg-gray-900/50 rounded-2xl h-64 mb-4" />
                    <div className="h-4 bg-gray-900/50 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-gray-900/50 rounded w-1/2" />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            {!loading && (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ y: -10 }}
                    onMouseEnter={() => setHoveredProject(project._id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    
                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                          animate={hoveredProject === project._id ? { scale: 1.1 } : { scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        
                        {/* Category Badge */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-semibold rounded-full"
                        >
                          {project.category || "Premium"}
                        </motion.div>
                        
                        {/* View Button */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25"
                        >
                          <Eye className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        {/* Project Header */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                              {project.name}
                            </h3>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                          </div>
                          
                          {/* Location */}
                          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location || "Prime Location"}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 mb-6 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Project Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-800">
                          {[
                            { icon: Calendar, label: "Completion", value: project.completion || "2024" },
                            { icon: TrendingUp, label: "ROI", value: project.roi || "22%" },
                            { icon: Users, label: "Units", value: project.units || "24" },
                          ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <stat.icon className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                              <div className="text-sm font-semibold text-white">{stat.value}</div>
                              <div className="text-xs text-gray-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Action Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-xl flex items-center justify-center space-x-2 group/btn hover:from-cyan-900/30 hover:to-blue-900/30 hover:text-white transition-all duration-300 border border-gray-800 hover:border-cyan-500/30"
                        >
                          <span>View Project Details</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {!loading && filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-900 to-black border border-gray-800 flex items-center justify-center">
                <Target className="w-12 h-12 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                No projects match your selected filter. Try another category or check back soon for new additions.
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 px-8 py-8 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl border border-gray-800">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Project?</h3>
                <p className="text-gray-400">Schedule a consultation with our expert team</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl flex items-center space-x-2 shadow-lg shadow-cyan-500/25"
              >
                <span>Get Started</span>
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </main>
  );
}
