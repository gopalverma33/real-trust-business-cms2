import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react'
import {
  Menu,
  X,
  Home,
  Shield,
  LogOut,
  User,
  Phone,
  Bell,
  Search,
  Settings,
  BarChart3,
  FileText,
  Users,
  Mail,
  PlusCircle,
  Eye,
  Download,
  Calendar,
  TrendingUp,
  Database,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Zap,
  ShieldCheck,
  MessageSquare,
  UserCheck,
  Building2
} from "lucide-react";

export default function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [stats, setStats] = useState({
    totalProjects: 24,
    activeClients: 156,
    newContacts: 42,
    totalSubscribers: 1242,
    revenue: "$124,580",
    pendingApprovals: 8
  });

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    if (sidebarOpen) {
      const handleClickOutside = (e) => {
        if (!e.target.closest("aside") && !e.target.closest("[data-menu-button]")) {
          setSidebarOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [sidebarOpen]);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: BarChart3,
      description: "Overview & Analytics",
      badge: "Live",
      badgeColor: "bg-green-500/20 text-green-400"
    },
    {
      name: "Add Projects",
      path: "/admin/add-project",
      icon: Building2,
      description: "Manage Real Estate Projects",
      count: stats.totalProjects,
      countColor: "bg-cyan-500/20 text-cyan-400"
    },
    {
      name: "AddClients",
      path: "/admin/add-clients",
      icon: Users,
      description: "Client Database & Management",
      count: stats.activeClients,
      countColor: "bg-blue-500/20 text-blue-400"
    },
    {
      name: "Contacts",
      path: "/admin/contacts",
      icon: Mail,
      description: "Messages & Inquiries",
      count: stats.newContacts,
      countColor: "bg-purple-500/20 text-purple-400"
    },
    {
      name: "Subscribers",
      path: "/admin/subscribers",
      icon: Bell,
      description: "Newsletter Subscribers",
      count: stats.totalSubscribers,
      countColor: "bg-pink-500/20 text-pink-400"
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: TrendingUp,
      description: "Detailed Reports & Insights",
      pro: true,
      proColor: "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400"
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: Settings,
      description: "System Configuration",
      badge: "Updated",
      badgeColor: "bg-blue-500/20 text-blue-400"
    }
  ];

  const quickStats = [
    { label: "Active Projects", value: "18", change: "+12%", icon: FileText, color: "text-cyan-400" },
    { label: "New Clients", value: "8", change: "+23%", icon: UserCheck, color: "text-blue-400" },
    { label: "Response Rate", value: "94%", icon: MessageSquare, color: "text-purple-400" },
    { label: "Revenue", value: stats.revenue, change: "+18%", icon: TrendingUp, color: "text-green-400" }
  ];

  const recentActivities = [
    { action: "New project added", user: "John Doe", time: "2 hours ago", icon: PlusCircle },
    { action: "Client testimonial updated", user: "Sarah Smith", time: "5 hours ago", icon: Users },
    { action: "Contact form submission", user: "Visitor", time: "1 day ago", icon: Mail },
    { action: "Newsletter sent", user: "System", time: "2 days ago", icon: Bell }
  ];

  const systemStatus = [
    { label: "Server", value: "Online", status: "success", icon: ShieldCheck },
    { label: "Database", value: "Healthy", status: "success", icon: Database },
    { label: "API", value: "Active", status: "success", icon: Zap },
    { label: "Cache", value: "78%", status: "warning", icon: BarChart3 }
  ];

  const handleExportData = () => {
    // Export functionality
    alert("Exporting data...");
  };

  const filteredMenu = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-72 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800
        transform transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        h-screen shadow-2xl shadow-black/30
      `}>
        <div className="h-full flex flex-col">
          {/* Logo & User Info */}
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  Admin Portal
                </h2>
                <p className="text-sm text-gray-400">Control Center v2.1</p>
              </div>
            </div>
            
        
            
          </div>


          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {filteredMenu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center justify-between px-4 py-3 rounded-xl
                    transition-all duration-300 group
                    ${isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-l-4 border-cyan-500'
                      : 'hover:bg-gray-800/50'
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg ${isActive
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-500'
                      : 'bg-gray-800 group-hover:bg-cyan-500/10'
                    } flex items-center justify-center`}>
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-cyan-400'}`} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className={`font-medium ${isActive ? 'text-cyan-400' : 'text-gray-300 group-hover:text-white'}`}>
                          {item.name}
                        </p>
                        {item.badge && (
                          <span className={`px-2 py-0.5 text-xs ${item.badgeColor} rounded-full`}>
                            {item.badge}
                          </span>
                        )}
                        {item.pro && (
                          <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full">
                            PRO
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 group-hover:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {item.count && (
                    <span className={`px-2.5 py-1 text-xs font-bold ${item.countColor} rounded-full`}>
                      {item.count > 999 ? '999+' : item.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-800">
            {/* Quick Actions */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-400 mb-2">Quick Actions</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleExportData}
                  className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-xs text-gray-300 hover:text-white transition-colors flex items-center justify-center space-x-1"
                >
                  <Download className="w-3 h-3" />
                  <span>Export Data</span>
                </button>
                <Link
                  to="/admin/add-project"
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-xs text-gray-300 hover:text-white transition-colors flex items-center justify-center space-x-1"
                >
                  <PlusCircle className="w-3 h-3" />
                  <span>New Project</span>
                </Link>
              </div>
            </div>

            {/* System Status */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-gray-400">System Status</p>
                <Zap className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {systemStatus.map((status, idx) => (
                  <div key={idx} className="bg-gray-800/30 rounded-lg p-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        status.status === 'success' ? 'bg-green-500' :
                        status.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                      }`} />
                      <p className="text-xs text-gray-400">{status.label}</p>
                    </div>
                    <p className="text-sm font-semibold text-white mt-1">{status.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm">Visit Site</span>
              </Link>
              <button
                onClick={() => {
                  if (window.confirm("Are you sure you want to logout?")) {
                    // Add logout logic here
                    window.location.href = "/";
                  }
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Top Bar */}
        <div className="sticky top-0 z-20 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-xl border-b border-gray-800 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                data-menu-button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-300" />
              </button>
              
              
            </div>

            <div className="flex items-center space-x-4">
              {/* Quick Stats - Desktop */}
              <div className="hidden lg:flex items-center space-x-6">
                {quickStats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                    <div className="text-xs text-green-500 mt-1">{stat.change}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <Link
                  to="/contact"
                  className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors relative"
                  title="Contact Support"
                >
                  <Phone className="w-5 h-5 text-gray-300" />
                </Link>

                <button className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors relative">
                  <Bell className="w-5 h-5 text-gray-300" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </button>

                <div className="h-8 w-px bg-gray-700"></div>

                {/* User Profile */}
                <div className="flex items-center space-x-3">
                  <div className="text-right hidden sm:block">
                    <div className="text-sm font-medium text-white">Admin User</div>
                    <div className="text-xs text-gray-400">Super Admin</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats - Mobile */}
          <div className="lg:hidden mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickStats.map((stat, idx) => (
                <div key={idx} className="bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>

        {/* Recent Activity Panel - Only on Dashboard */}
        {location.pathname === "/admin" && (
          <div className="fixed bottom-4 right-4 z-10">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl shadow-2xl w-80">
              <div className="p-4 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">Recent Activity</h3>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="p-4 space-y-3 max-h-60 overflow-y-auto">
                {recentActivities.map((activity, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white">{activity.action}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                        <span>by {activity.user}</span>
                        <span>•</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}