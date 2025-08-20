export default function ListingsOverview() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Listings Overview</h2>
        <button className="text-blue-600 text-sm font-medium opacity-50 cursor-not-allowed" disabled>
          View all &gt;
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">1.8k</p>
          <p className="text-sm text-gray-500">Total</p>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">80</p>
          <p className="text-sm text-gray-500">Active</p>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">1k</p>
          <p className="text-sm text-gray-500">Archived</p>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Occupancy Rate</span>
          <span className="text-sm font-medium text-gray-900">78%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
        </div>
      </div>
    </div>
  );
}