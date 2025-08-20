export default function UsersOverview() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Users Overview</h2>
        <button className="text-blue-600 text-sm font-medium opacity-50 cursor-not-allowed" disabled>
          View all &gt;
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">20.7k</p>
          <p className="text-sm text-gray-500">Total</p>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">8.5k</p>
          <p className="text-sm text-gray-500">Riders</p>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">7.5k</p>
          <p className="text-sm text-gray-500">Subscribers</p>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Growth Rate</span>
          <span className="text-sm font-medium text-green-600">+12.5%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '62%' }}></div>
        </div>
      </div>
    </div>
  );
}