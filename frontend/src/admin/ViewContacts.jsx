import { useEffect, useState } from "react";
import React from "react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Search,
  Download,
  Eye
} from "lucide-react";

export default function ViewContacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/contacts")
      .then(res => res.json())
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.fullName?.toLowerCase().includes(search.toLowerCase()) ||
    contact.email?.toLowerCase().includes(search.toLowerCase()) ||
    contact.city?.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Contact Responses</h1>
        <p className="text-gray-400">View and manage all contact form submissions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Contacts", value: contacts.length, icon: User, color: "text-cyan-400" },
          { label: "Today's Leads", value: contacts.filter(c => {
            const today = new Date().toDateString();
            return new Date(c.createdAt || Date.now()).toDateString() === today;
          }).length, icon: Calendar, color: "text-blue-400" },
          { label: "Unique Cities", value: new Set(contacts.map(c => c.city)).size, icon: MapPin, color: "text-purple-400" },
          { label: "Pending Follow-up", value: contacts.filter(c => !c.responded).length, icon: Eye, color: "text-amber-400" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Search and Actions */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search contacts by name, email, or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500"
            />
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-lg border border-gray-700 hover:text-white hover:border-gray-600 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block w-8 h-8 border-2 border-gray-700 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Loading contacts...</p>
        </div>
      ) : filteredContacts.length === 0 ? (
        <div className="text-center py-12 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800">
          <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Contacts Found</h3>
          <p className="text-gray-400">{search ? "Try a different search term" : "No contact submissions yet"}</p>
        </div>
      ) : (
        /* Contacts Table */
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Contact</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Details</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Submitted</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact, index) => (
                  <tr key={index} className="border-b border-gray-800 last:border-0 hover:bg-gray-900/50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{contact.fullName}</div>
                          <div className="text-sm text-gray-500">{contact.city}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-300">{contact.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-300">{contact.mobile}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-400">
                        {formatDate(contact.createdAt || new Date())}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-lg border border-gray-700 hover:text-white hover:border-gray-600 transition-colors">
                          View
                        </button>
                        <button className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-colors">
                          Respond
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
              Showing {filteredContacts.length} of {contacts.length} contacts
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
    </div>
  );
}