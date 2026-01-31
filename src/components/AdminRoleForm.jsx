import { useState } from 'react';
import { X, Play, Clock, Building } from 'lucide-react';

const AdminRoleForm = ({ isOpen, onClose, companies, onSubmit }) => {
  const [formData, setFormData] = useState({
    company: '',
    roleType: '',
    duration: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      // Reset form after successful submission
      setFormData({
        company: '',
        roleType: '',
        duration: '',
        description: ''
      });
      onClose();
    } catch (error) {
      console.error('Failed to submit role play:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content - Square Design */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-teal-200/30 p-6 md:p-8 w-full max-w-lg md:aspect-square md:h-[520px] flex flex-col justify-center transform transition-all max-h-[90vh] overflow-y-auto md:max-h-none md:overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-slate-900">Admin Role Assignment</h3>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Minimal Form */}
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-3 flex-1">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Company
            </label>
            <select 
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
            >
              <option value="">Choose a company...</option>
              {companies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Role Type
            </label>
            <select 
              name="roleType"
              value={formData.roleType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
            >
              <option value="">Select role type...</option>
              <option value="admin">Administrator</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
              <option value="contractor">Contractor</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Duration
            </label>
            <input 
              type="text" 
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              placeholder="e.g., 30 minutes"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Description
            </label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter scenario description..."
              rows={3}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 mt-auto">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Starting...
                </>
              ) : (
                'Start'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminRoleForm;