import AdminLayout from "./AdminLayout";
import { Link } from "react-router-dom";
import React from 'react'

export default function AdminDashboard() {
  const dashboardCards = [
    {
      to: "/admin/add-project",
      title: "Project Management",
      description: "Add and manage real estate projects",
      icon: "📁",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      to: "/admin/add-client",
      title: "Client Management",
      description: "Add client details and testimonials",
      icon: "👥",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      to: "/admin/contacts",
      title: "Contact Form Details",
      description: "View all contact form submissions",
      icon: "📩",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      to: "/admin/subscribers",
      title: "Subscribed Users",
      description: "View newsletter email subscribers",
      icon: "📧",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <AdminLayout>
      <div className="min-h-screen ">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your real estate platform content and data</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Projects", value: "24", change: "+12%", color: "cyan" },
            { label: "Active Clients", value: "156", change: "+8%", color: "blue" },
            { label: "New Contacts", value: "42", change: "+23%", color: "purple" },
            { label: "Subscribers", value: "1.2k", change: "+5%", color: "pink" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-gray-800">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
              <div className={`text-xs ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change} this month
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardCards.map((card, index) => (
            <Link
              key={index}
              to={card.to}
              className="group block"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group-hover:scale-[1.02] h-full">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{card.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {card.description}
                </p>
                
                {/* Arrow */}
                <div className="mt-4 flex items-center text-cyan-400 text-sm">
                  <span>Manage</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { action: "New project added", time: "2 hours ago", user: "Admin" },
              { action: "Client testimonial updated", time: "5 hours ago", user: "Admin" },
              { action: "New contact form submission", time: "1 day ago", user: "Visitor" },
              { action: "Newsletter subscriber added", time: "2 days ago", user: "System" }
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
                <div>
                  <div className="font-medium text-white">{activity.action}</div>
                  <div className="text-sm text-gray-500">by {activity.user}</div>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}