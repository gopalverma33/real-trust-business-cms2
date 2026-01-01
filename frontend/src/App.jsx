import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutProject from "./pages/AboutProject";
import Footer from "./components/Footer";
import React from 'react'
import AdminDashboard from "./admin/AdminDashboard";
import AddProject from "./admin/AddProject";
import AddClient from "./admin/AddClient";
import ViewContacts from "./admin/ViewContacts";
import ViewSubscribers from "./admin/ViewSubscribers";
import Testimonials from "./pages/Testimonials";
import Projects from "./pages/Projects";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        {/* Navbar outside Routes - appears on all pages */}
        <Navbar />
        
        {/* Main content area */}
        <main className="pt-24">
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            } />
            
            <Route path="/services" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Services />
              </motion.div>
            } />
            
            <Route path="/Projects" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AboutProject />
              </motion.div>
            } />
            
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ContactForm />
              </motion.div>
            } />
            
            <Route path="/testimonials" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Testimonials />
              </motion.div>
            } />

            {/* ADMIN ROUTES */}
            <Route path="/admin" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AdminDashboard />
              </motion.div>
            } />
            
            <Route path="/admin/add-project" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AddProject />
              </motion.div>
            } />
            
            <Route path="/admin/add-client" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AddClient />
              </motion.div>
            } />
            
            <Route path="/admin/contacts" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ViewContacts />
              </motion.div>
            } />
            
            <Route path="/admin/subscribers" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ViewSubscribers />
              </motion.div>
            } />
          </Routes>
        </main>

        {/* Toast notifications */}
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          toastStyle={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          }}
        />

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;