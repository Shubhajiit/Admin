import { useMemo, useState } from "react";
import Header from '../components/shared/Header';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  User,
  Shield,
} from "lucide-react";

/* ================= MOCK DATA ================= */

const USERS_DATA = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    email: "amit@rmdocto.com",
    role: "Doctor",
    status: "active",
  },
  {
    id: 2,
    name: "Riya Verma",
    email: "riya@rmdocto.com",
    role: "Receptionist",
    status: "active",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    email: "rahul@rmdocto.com",
    role: "Marketing Executive",
    status: "inactive",
  },
  {
    id: 4,
    name: "Suresh Kumar",
    email: "suresh@rmdocto.com",
    role: "Employee",
    status: "active",
  },
];

/* ================= CONSTANTS ================= */

const ROLE_OPTIONS = [
  "Doctor",
  "Receptionist",
  "Marketing Executive",
  "Employee",
];

/* ================= COMPONENT ================= */

const Users = () => {
  const [users, setUsers] = useState(USERS_DATA);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  /* ===== Filter users (memoized) ===== */
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchRole =
        roleFilter === "all" || user.role === roleFilter;

      return matchSearch && matchRole;
    });
  }, [users, search, roleFilter]);

  /* ===== Actions ===== */
  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? {
              ...u,
              status: u.status === "active" ? "inactive" : "active",
            }
          : u
      )
    );
  };

  const deleteUser = (id) => {
    if (!window.confirm("This action cannot be undone. Delete user?")) return;
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 right-0 left-0 md:left-64 z-20">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-28 md:pt-20 px-4 pb-8 lg:px-8 space-y-8">
        {/* ===== PAGE HEADER ===== */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Users
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Manage hospital staff and system users
          </p>
        </div>

        <button
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500
          text-white font-semibold flex items-center gap-2 shadow
          hover:from-teal-700 hover:to-teal-600 transition"
        >
          <Plus size={18} />
          Add User
        </button>
      </div>

      {/* ===== SEARCH & FILTER ===== */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300
              focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
            />
          </div>

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-3 rounded-xl border border-slate-300 bg-white"
          >
            <option value="all">All Roles</option>
            {ROLE_OPTIONS.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Showing <span className="font-medium">{filteredUsers.length}</span>{" "}
          user{filteredUsers.length !== 1 && "s"}
        </p>
      </div>

      {/* ===== USERS TABLE ===== */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-600">
                User
              </th>
              <th className="px-6 py-4 text-left font-semibold text-slate-600">
                Role
              </th>
              <th className="px-6 py-4 text-left font-semibold text-slate-600">
                Status
              </th>
              <th className="px-6 py-4 text-right font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                    <User className="text-teal-600" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {user.email}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1
                  rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    <Shield size={12} />
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      user.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-right space-x-1">
                  <button
                    onClick={() => toggleStatus(user.id)}
                    className="p-2 rounded-lg hover:bg-slate-100"
                    title={
                      user.status === "active"
                        ? "Deactivate user"
                        : "Activate user"
                    }
                  >
                    {user.status === "active" ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>

                  <button
                    className="p-2 rounded-lg hover:bg-teal-100 text-teal-600"
                    title="Edit user"
                  >
                    <Edit2 size={16} />
                  </button>

                  <button
                    onClick={() => deleteUser(user.id)}
                    className="p-2 rounded-lg hover:bg-red-100 text-red-600"
                    title="Delete user"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-12 text-slate-500">
                  No users match your search
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </main>
    </div>
  );
};

export default Users;
