import { useEffect, useState } from "react";
import React from "react";
import { 
  Mail, 
  Users, 
  Calendar,
  Download,
  Search,
  CheckCircle,
  XCircle,
  BarChart3
} from "lucide-react";

export default function ViewSubscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, active, recent

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/subscribers")
      .then(res => res.json())
      .then(data => {
        setSubscribers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredSubscribers = subscribers.filter(subscriber => {
    const matchesSearch = subscriber.email?.toLowerCase().includes(search.toLowerCase());
    
    if (filter === "recent") {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const subscribedDate = new Date(subscriber.createdAt || Date.now());
      return matchesSearch && subscribedDate >= oneWeekAgo;
    }
    
    return matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDaysAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 0 ? "Today" : `${diffDays} days ago`;
  };

  return (
    <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Newsletter Subscribers</h1>
        <p className="text-gray-400">Manage and analyze your email subscribers</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { 
            label: "Total Subscribers", 
            value: subscribers.length, 
            icon: Users, 
            color: "text-cyan-400",
            change: "+12% this month"
          },
          { 
            label: "Active Subscribers", 
            value: subscribers.length, 
            icon: CheckCircle, 
            color: "text-emerald-400",
            change: "100% active rate"
          },
          { 
            label: "New This Week", 
            value: subscribers.filter(s => {
              const oneWeekAgo = new Date();
              oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
              const subscribedDate = new Date(s.createdAt || Date.now());
              return subscribedDate >= oneWeekAgo;
            }).length, 
            icon: BarChart3, 
            color: "text-blue-400",
            change: "Weekly growth"
          },
          { 
            label: "Email Deliveries", 
            value: "98.7%", 
            icon: Mail, 
            color: "text-purple-400",
            change: "Excellent rate"
          },
        ].map((stat, idx) => (
          <div key={idx} className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Search and Actions */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search subscribers by email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500"
              />
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === "all"
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("recent")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === "recent"
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                Recent
              </button>
            </div>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-lg border border-gray-700 hover:text-white hover:border-gray-600 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export List</span>
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block w-8 h-8 border-2 border-gray-700 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Loading subscribers...</p>
        </div>
      ) : filteredSubscribers.length === 0 ? (
        <div className="text-center py-12 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800">
          <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Subscribers Found</h3>
          <p className="text-gray-400">{search ? "Try a different search term" : "No newsletter subscribers yet"}</p>
        </div>
      ) : (
        /* Subscribers List */
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Email</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Status</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Subscribed</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscribers.map((subscriber, index) => (
                  <tr key={index} className="border-b border-gray-800 last:border-0 hover:bg-gray-900/50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{subscriber.email}</div>
                          <div className="text-sm text-gray-500">Subscriber #{index + 1}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-emerald-400">Active</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="text-sm text-gray-300">
                          {formatDate(subscriber.createdAt || new Date())}
                        </div>
                        <div className="text-xs text-gray-500">
                          {getDaysAgo(subscriber.createdAt || new Date())}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-lg border border-gray-700 hover:text-white hover:border-gray-600 transition-colors">
                          Send Email
                        </button>
                        <button className="px-3 py-1 text-sm bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 rounded-lg border border-red-500/30 hover:border-red-400 transition-colors">
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-4 py-3 border-t border-gray-800 flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Showing {filteredSubscribers.length} of {subscribers.length} subscribers
              {filter === "recent" && " (last 7 days)"}
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors">
                ← Previous
              </button>
              <span className="text-sm text-gray-400">Page 1 of 1</span>
              <button className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors">
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Campaign Info */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-3">Send Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">Create and send a newsletter to all subscribers</p>
          <button className="w-full py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity">
            Compose Newsletter
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-3">Growth Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Monthly Growth</span>
              <span className="text-emerald-400">+12%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Weekly New</span>
              <span className="text-blue-400">24 subscribers</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Open Rate</span>
              <span className="text-purple-400">78.5%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded transition-colors">
              Import Subscribers
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded transition-colors">
              View Analytics
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded transition-colors">
              Manage Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}