import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { 
  FolderPlus, 
  Image, 
  FileText, 
  Upload, 
  CheckCircle,
  Loader2
} from "lucide-react";

export default function AddProject() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({...form, image: file});
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("image", form.image);

    try {
      await fetch("https://real-trust-backend-s0qw.onrender.com/api/projects", {
        method: "POST",
        body: data,
      });
      
      setIsSubmitted(true);
      setForm({ name: "", description: "", image: null });
      setPreviewUrl(null);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      alert("Project added");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Add New Project</h1>
        <p className="text-gray-400">Add real estate projects to showcase in your portfolio</p>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl border border-emerald-500/20"
        >
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-emerald-400" />
            <div>
              <div className="font-semibold text-emerald-300">Project Added Successfully!</div>
              <div className="text-sm text-emerald-400/80">Project is now live on the website</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Form Container */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Name */}
          <div className="relative">
            <FolderPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Project Name"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
            />
          </div>

          {/* Project Description */}
          <div className="relative">
            <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <textarea
              placeholder="Project Description - Describe the project features, location, and highlights"
              value={form.description}
              onChange={e => setForm({...form, description: e.target.value})}
              required
              rows="5"
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 resize-none transition-all duration-300"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Image
            </label>
            
            {/* Image Preview */}
            {previewUrl && (
              <div className="mb-4">
                <div className="relative w-40 h-40 rounded-lg overflow-hidden border-2 border-gray-700">
                  <img 
                    src={previewUrl} 
                    alt="Project Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* File Upload */}
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="project-image-upload"
                required
              />
              <label
                htmlFor="project-image-upload"
                className="cursor-pointer"
              >
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-600 transition-colors duration-300">
                  <Upload className="w-8 h-8 text-gray-500 mx-auto mb-3" />
                  <div className="text-gray-400">
                    {previewUrl ? "Change Project Image" : "Click to upload project image"}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    PNG, JPG, WEBP up to 5MB • Recommended: 1200x800px
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-gray-800">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Adding Project...</span>
                </>
              ) : (
                <>
                  <FolderPlus className="w-5 h-5" />
                  <span>Add Project</span>
                </>
              )}
            </motion.button>
          </div>
        </form>

        {/* Form Guidelines */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Project Guidelines</h4>
          <ul className="text-sm text-gray-500 space-y-1">
            <li className="flex items-start">
              <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-2"></span>
              Use high-quality images that showcase the project
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-2"></span>
              Include detailed descriptions with key features
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-2"></span>
              Optimize images for web (compressed, proper dimensions)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
