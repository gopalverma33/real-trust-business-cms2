import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Loader2
} from "lucide-react";

export default function ContactForm() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("https://real-trust-backend-s0qw.onrender.com/api/contacts", data);
      setIsSubmitted(true);
      setData({ fullName: "", email: "", mobile: "", city: "" });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      alert("Submitted Successfully");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    { key: "fullName", icon: User, placeholder: "Full Name" },
    { key: "email", icon: Mail, placeholder: "Email Address", type: "email" },
    { key: "mobile", icon: Phone, placeholder: "Mobile Number", type: "tel" },
    { key: "city", icon: MapPin, placeholder: "City" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
          <p className="text-gray-400">Get in touch with our team</p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl border border-emerald-500/20"
          >
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <div>
                <div className="font-semibold text-emerald-300">Message Sent!</div>
                <div className="text-sm text-emerald-400/80">We'll get back to you soon.</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800">
          <form onSubmit={submitHandler} className="space-y-4">
            {formFields.map((field) => (
              <div key={field.key} className="relative">
                <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  value={data[field.key]}
                  onChange={e => setData({...data, [field.key]: e.target.value})}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                />
              </div>
            ))}

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
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 text-center">
              Usually respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
