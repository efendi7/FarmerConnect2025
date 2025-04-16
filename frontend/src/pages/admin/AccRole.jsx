import React, { useEffect, useState } from "react";
import axios from "axios";

const AccRole = () => {
  const [roleRequests, setRoleRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil permintaan role dari backend
    const fetchRoleRequests = async () => {
      try {
        const response = await axios.get("/api/role-requests"); // Endpoint untuk mendapatkan role requests
        setRoleRequests(response.data);
      } catch (error) {
        console.error("Error fetching role requests", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoleRequests();
  }, []);

  const handleApprove = async (requestId) => {
    try {
      await axios.put(`/api/role-request/${requestId}/approve`);
      setRoleRequests(roleRequests.filter(req => req.id !== requestId)); // Hapus setelah disetujui
    } catch (error) {
      console.error("Error approving role request", error);
    }
  };

  const handleReject = async (requestId) => {
    try {
      await axios.put(`/api/role-request/${requestId}/reject`);
      setRoleRequests(roleRequests.filter(req => req.id !== requestId)); // Hapus setelah ditolak
    } catch (error) {
      console.error("Error rejecting role request", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Approval Role Requests</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Requested Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roleRequests.map((request) => (
            <tr key={request.id}>
              <td className="px-4 py-2">{request.user}</td>
              <td className="px-4 py-2">{request.role}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleApprove(request.id)}
                  className="bg-green-500 text-white p-2 rounded mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(request.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccRole;
