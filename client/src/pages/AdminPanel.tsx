import React, { useEffect, useState } from "react";
import axios from "axios";

interface Request {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  timeline: string;
  location: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

const BASE_URL = "https://trg-1e4w.onrender.com/";

console.log(BASE_URL);


const AdminPanel: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [requestRes, contactRes] = await Promise.all([
          axios.get(`${BASE_URL}api/v1/requests/getAllRequest`),
          axios.get(`${BASE_URL}api/v1/contactUs/getAllContactUs`),
        ]);

        console.log("Requests response:", requestRes.data);
        console.log("Contacts response:", contactRes.data);

        // Ensure arrays
        setRequests(Array.isArray(requestRes.data) ? requestRes.data : []);
        setContacts(Array.isArray(contactRes.data) ? contactRes.data : []);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError(err.message || "Failed to fetch data from server.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Panel</h1>

      {/* Requests Table */}
      <div className="mb-10 bg-white shadow rounded-lg overflow-x-auto">
        <h2 className="text-xl font-semibold p-4 border-b border-gray-200">All Requests</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Company</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Project Type</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Timeline</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Location</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Created At</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((req) => (
              <tr key={req._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{req.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{req.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{req.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{req.company}</td>
                <td className="px-6 py-4 whitespace-nowrap">{req.projectType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{req.timeline}</td>
                <td className="px-6 py-4 whitespace-nowrap">{req.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(req.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Contacts Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <h2 className="text-xl font-semibold p-4 border-b border-gray-200">All Contacts</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Message</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Created At</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map((contact) => (
              <tr key={contact._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{contact.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{contact.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{contact.message}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(contact.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
