import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, Loader2 } from "lucide-react";
import React from 'react'
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/api/subscribers", { email });
      toast.success("Subscribed successfully");
      setEmail("");
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error("Subscription failed");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={subscribe} className="relative">
        <div className="relative">
          {/* Email Icon */}
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          
          {/* Input Field */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="w-full pl-10 pr-28 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 disabled:opacity-50 transition-all duration-300"
          />
          
          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting || !email}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`absolute right-1.5 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-md flex items-center space-x-2 transition-all duration-300 ${
              isSubmitting || !email
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
            }`}
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : isSuccess ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span className="text-sm">
              {isSubmitting ? "..." : isSuccess ? "✓" : "Join"}
            </span>
          </motion.button>
        </div>
      </form>
      
      {/* Privacy Note */}
      <p className="text-xs text-gray-500 mt-2 text-center">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}