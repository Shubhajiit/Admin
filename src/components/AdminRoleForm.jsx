"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { X, ShieldCheck, Check, Settings, AlertCircle, Loader2, Info } from "lucide-react";

/* ================= CONSTANTS & PERMISSIONS ================= */

const ROLE_TYPES = ["Admin", "Doctor", "Receptionist", "Marketing Executive", "Pharmacist", "Accountant"];

const PERMISSION_CATEGORIES = [
  {
    name: "Patient Management",
    permissions: ["patients.view", "patients.edit", "patients.delete", "patients.create"],
  },
  {
    name: "Medical Records",
    permissions: ["records.view", "records.edit", "records.delete", "records.sensitive.view"],
  },
  {
    name: "Billing & Finance",
    permissions: ["billing.view", "billing.create", "billing.refund", "billing.discounts"],
  },
  {
    name: "Inventory & Pharmacy",
    permissions: ["inventory.view", "inventory.manage_stock", "pharmacy.dispense", "pharmacy.procurement"],
  },
  {
    name: "System & Security",
    permissions: ["users.manage", "roles.manage", "settings.system", "security.audit_logs"],
  },
  {
    name: "Reports & Analytics",
    permissions: ["reports.financial", "reports.clinical", "reports.export"],
  },
];

const PERMISSION_LABELS = {
  "patients.view": "View Patient List",
  "patients.edit": "Update Patient Details",
  "patients.delete": "Archive/Delete Patients",
  "patients.create": "Register New Patients",
  "records.view": "View Medical Records",
  "records.edit": "Modify Clinical Notes",
  "records.delete": "Purge Records",
  "records.sensitive.view": "Access Sensitive Records",
  "billing.view": "View Invoices",
  "billing.create": "Generate Invoices",
  "billing.refund": "Process Refunds",
  "billing.discounts": "Apply Waivers/Discounts",
  "inventory.view": "View Stock Levels",
  "inventory.manage_stock": "Adjust Stock Levels",
  "pharmacy.dispense": "Dispense Medication",
  "pharmacy.procurement": "Manage Procurement",
  "users.manage": "Manage User Accounts",
  "roles.manage": "Configure Roles",
  "settings.system": "System Configurations",
  "security.audit_logs": "View Audit Trails",
  "reports.financial": "Revenue Reports",
  "reports.clinical": "Clinical Outcomes",
  "reports.export": "Export Data (CSV/PDF)",
};

const INITIAL_STATE = {
  name: "",
  roleType: "",
  description: "",
  permissions: [],
  isActive: true,
};

/* ================= SUB-COMPONENTS ================= */

const PermissionCard = ({ category, selectedPermissions, onToggle }) => (
  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 h-full">
    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
      {category.name}
    </h4>
    <div className="space-y-3">
      {category.permissions.map((perm) => {
        const isChecked = selectedPermissions.includes(perm);
        return (
          <label 
            key={perm} 
            className="group flex items-start gap-3 cursor-pointer p-1 rounded-lg transition-all"
          >
            <div
              className={`mt-0.5 w-5 h-5 shrink-0 border rounded-md flex items-center justify-center transition-all
              ${isChecked ? "bg-teal-600 border-teal-600 shadow-sm" : "bg-white border-slate-300 group-hover:border-teal-400"}`}
            >
              {isChecked && <Check size={14} className="text-white stroke-[3px]" />}
            </div>
            <div className="flex flex-col">
              <span className={`text-sm ${isChecked ? "text-slate-900 font-medium" : "text-slate-600"}`}>
                {PERMISSION_LABELS[perm] || perm}
              </span>
            </div>
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={() => onToggle(perm)}
            />
          </label>
        );
      })}
    </div>
  </div>
);

/* ================= MAIN COMPONENT ================= */

const AdminRoleForm = ({ isOpen, onClose, onSubmit, initialData = null }) => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const allPermissions = useMemo(() => PERMISSION_CATEGORIES.flatMap(c => c.permissions), []);

  useEffect(() => {
    if (isOpen) {
      setForm(initialData ? { ...INITIAL_STATE, ...initialData } : INITIAL_STATE);
      setErrors({});
    }
  }, [initialData, isOpen]);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Role name is required";
    if (!form.roleType) newErrors.roleType = "Role type is required";
    if (form.permissions.length === 0) newErrors.permissions = "Select at least one permission";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTogglePermission = useCallback((perm) => {
    setForm(prev => ({
      ...prev,
      permissions: prev.permissions.includes(perm)
        ? prev.permissions.filter(p => p !== perm)
        : [...prev.permissions, perm]
    }));
  }, []);

  const handleSelectAll = () => {
    const isAllSelected = form.permissions.length === allPermissions.length;
    setForm(prev => ({ ...prev, permissions: isAllSelected ? [] : [...allPermissions] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(form);
      onClose();
    } catch (err) {
      setErrors({ submit: "An error occurred while saving." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* HEADER */}
        <header className="px-8 py-5 border-b border-slate-100 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100">
              <ShieldCheck className="text-teal-600 w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {initialData ? "Edit Security Role" : "Create New Role"}
              </h2>
              <p className="text-xs text-slate-500 font-medium italic">Role Based Access Control (RBAC)</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
            <X size={20} />
          </button>
        </header>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
          
          {/* General Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-sm font-bold text-slate-900">Role Identity</h3>
              <p className="text-xs text-slate-500 mt-1">Define the basic identification for this access group.</p>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Role Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Finance Admin"
                    className={`w-full px-4 py-2 rounded-lg border text-sm transition-all outline-none focus:ring-4 ${
                      errors.name ? "border-red-300 focus:ring-red-50" : "border-slate-200 focus:border-teal-500 focus:ring-teal-50"
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 font-bold uppercase">{errors.name}</span>}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Role Category</label>
                  <select
                    value={form.roleType}
                    onChange={(e) => setForm({ ...form, roleType: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
                  >
                    <option value="">Select...</option>
                    {ROLE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Internal Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Purpose of this role..."
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm min-h-[60px] resize-none outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Permissions Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Permission Mapping</h3>
                <p className="text-xs text-slate-500">Grant specific access rights across system modules.</p>
              </div>
              <button 
                type="button"
                onClick={handleSelectAll}
                className="text-xs font-bold text-teal-600 hover:underline"
              >
                {form.permissions.length === allPermissions.length ? "Deselect All" : "Toggle All"}
              </button>
            </div>

            {errors.permissions && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg text-xs font-medium flex items-center gap-2">
                <AlertCircle size={14} /> {errors.permissions}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PERMISSION_CATEGORIES.map((cat) => (
                <PermissionCard 
                  key={cat.name} 
                  category={cat} 
                  selectedPermissions={form.permissions}
                  onToggle={handleTogglePermission}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="px-8 py-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
             <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={form.isActive}
                  onChange={(e) => setForm({...form, isActive: e.target.checked})}
                />
                <div className="w-10 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                <span className="ml-3 text-xs font-bold text-slate-600 uppercase tracking-tight">Active</span>
             </label>
             <div className="flex items-center gap-1.5 text-slate-400">
                <Info size={14} />
                <span className="text-[10px] font-medium uppercase">{form.permissions.length} Permissions Selected</span>
             </div>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button 
              type="button"
              onClick={onClose} 
              className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 sm:flex-none px-8 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Check size={16} />}
              {initialData ? "Update Role" : "Create Role"}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminRoleForm;