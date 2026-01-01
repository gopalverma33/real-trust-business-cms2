import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { 
  User, 
  Briefcase, 
  FileText, 
  Upload, 
  CheckCircle,
  Loader2
} from "lucide-react";

export default function AddClient() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    designation: "",
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
    Object.keys(form).forEach(key => data.append(key, form[key]));

    try {
      await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        body: data,
      });
      
      setIsSubmitted(true);
      setForm({ name: "", description: "", designation: "", image: null });
      setPreviewUrl(null);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      alert("Client added");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    { 
      key: "name", 
      icon: User, 
      placeholder: "Client Name", 
      type: "text",
      required: true 
    },
    { 
      key: "designation", 
      icon: Briefcase, 
      placeholder: "Designation (e.g., CEO, Web Developer)", 
      type: "text",
      required: true 
    },
    { 
      key: "description", 
      icon: FileText, 
      placeholder: "Client Testimonial Description", 
      type: "textarea",
      required: true 
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Add New Client</h1>
        <p className="text-gray-400">Add client testimonials to showcase on the website</p>
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
              <div className="font-semibold text-emerald-300">Client Added Successfully!</div>
              <div className="text-sm text-emerald-400/80">Client testimonial is now live on the website</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Form Container */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Text Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            {formFields.slice(0, 2).map((field) => (
              <div key={field.key} className="relative">
                <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={e => setForm({...form, [field.key]: e.target.value})}
                  required={field.required}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Description Textarea */}
          <div className="relative">
            <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <textarea
              placeholder={formFields[2].placeholder}
              value={form.description}
              onChange={e => setForm({...form, description: e.target.value})}
              required
              rows="4"
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 resize-none transition-all duration-300"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Client Image
            </label>
            
            {/* Image Preview */}
            {previewUrl && (
              <div className="mb-4">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-gray-700">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
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
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer"
              >
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-600 transition-colors duration-300">
                  <Upload className="w-8 h-8 text-gray-500 mx-auto mb-3" />
                  <div className="text-gray-400">
                    {previewUrl ? "Change Image" : "Click to upload client image"}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    PNG, JPG, WEBP up to 5MB
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
                  <span>Adding Client...</span>
                </>
              ) : (
                <>
                  <User className="w-5 h-5" />
                  <span>Add Client</span>
                </>
              )}
            </motion.button>
          </div>
        </form>

        {/* Form Guidelines */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Guidelines</h4>
          <ul className="text-sm text-gray-500 space-y-1">
            <li className="flex items-start">
              <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-2"></span>
              Use high-quality professional photos
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-2"></span>
              Keep testimonials authentic and engaging
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 mr-2"></span>
              Include full name and proper designation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}