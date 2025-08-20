export default function HotProperties() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Property Highlights</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-start justify-between mb-2">
            <span className="text-xs font-medium text-blue-800 bg-blue-100 px-2 py-1 rounded">
              MOST CLICKED
            </span>
          </div>
          <h3 className="font-medium text-gray-900">Urban Prime Plaza Premiere</h3>
          <p className="text-sm text-gray-500 mt-1">2,345 views this month</p>
        </div>
        
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
          <div className="flex items-start justify-between mb-2">
            <span className="text-xs font-medium text-purple-800 bg-purple-100 px-2 py-1 rounded">
              MOST WATCHLISTED
            </span>
          </div>
          <h3 className="font-medium text-gray-900">Urban Prime Plaza Premiere</h3>
          <p className="text-sm text-gray-500 mt-1">187 saved to watchlist</p>
        </div>
        
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
          <div className="flex items-start justify-between mb-2">
            <span className="text-xs font-medium text-orange-800 bg-orange-100 px-2 py-1 rounded">
              HOTTEST LISTING
            </span>
          </div>
          <h3 className="font-medium text-gray-900">Urban Prime Plaza Premiere</h3>
          <p className="text-sm text-gray-500 mt-1">98% engagement rate</p>
        </div>
      </div>
      
      <button 
        className="w-full mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 opacity-50 cursor-not-allowed"
        disabled
      >
        View All Properties
      </button>
    </div>
  );
}