import React from 'react';
import { motion } from 'motion/react';
import { Download, Search, RefreshCw, LogOut, Shield } from 'lucide-react';
import axios from 'axios';

export const AdminDashboard: React.FC = () => {
  const [password, setPassword] = React.useState('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [leads, setLeads] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/leads', {
        headers: { 'x-admin-password': password }
      });
      setLeads(response.data.data);
      setIsAuthenticated(true);
    } catch (err) {
      alert("Invalid password or server error");
    } finally {
      setIsLoading(false);
    }
  };

  const exportCSV = () => {
    const headers = ["ID", "Name", "Email", "Role", "Country", "Date"];
    const rows = leads.map(l => [
      l.id,
      l.fullName,
      l.email,
      l.jobTitle || "N/A",
      l.country || "N/A",
      new Date(l.createdAt).toLocaleDateString()
    ]);
    
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filteredLeads = leads.filter(l => 
    l.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
        >
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Shield size={24} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
            <p className="text-slate-500">Enter password to view leads</p>
          </div>
          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              onKeyDown={(e) => e.key === 'Enter' && fetchLeads()}
            />
            <button
              onClick={fetchLeads}
              disabled={isLoading}
              className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? "Verifying..." : "Login"}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Leads Dashboard</h1>
            <p className="text-slate-500">Manage and export your captured leads</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              <Download size={18} /> Export CSV
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-300"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Leads</p>
            <p className="text-3xl font-bold text-slate-900">{leads.length}</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Today</p>
            <p className="text-3xl font-bold text-slate-900">
              {leads.filter(l => new Date(l.createdAt).toDateString() === new Date().toDateString()).length}
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or email..."
                className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-2 outline-none focus:border-blue-500"
              />
            </div>
            <button onClick={fetchLeads} className="p-2 text-slate-400 hover:text-blue-600 transition-all">
              <RefreshCw size={20} className={isLoading ? "animate-spin" : ""} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Country</th>
                  <th className="px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50 transition-all">
                    <td className="px-6 py-4 font-medium text-slate-900">{lead.fullName}</td>
                    <td className="px-6 py-4 text-slate-600">{lead.email}</td>
                    <td className="px-6 py-4 text-slate-600">{lead.jobTitle || "-"}</td>
                    <td className="px-6 py-4 text-slate-600">{lead.country || "-"}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
                {filteredLeads.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                      No leads found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
