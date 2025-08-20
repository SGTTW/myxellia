export default function SalesOverview() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const values = [35, 42, 25, 38, 32, 45, 28, 40, 35]; // Approximate values based on the chart
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Sales Overview</h2>
        <p className="text-sm text-gray-500">Showing overview Jan 2022 - Sep 2022</p>
      </div>
      
      <div className="flex items-end h-48 mb-4 border-b border-gray-200">
        {months.map((month, index) => (
          <div key={month} className="flex-1 flex flex-col items-center justify-end h-full px-1">
            <div 
              className="w-full bg-blue-500 rounded-t"
              style={{ height: `${(values[index] / 50) * 100}%` }}
            ></div>
            <span className="text-xs mt-1">{month}</span>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center space-x-4 mb-6">
        <button className="px-3 py-1 text-sm bg-gray-100 rounded-md">1 Week</button>
        <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md">1 Month</button>
        <button className="px-3 py-1 text-sm bg-gray-100 rounded-md">1 Year</button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-semibold">₦120,000,000.00</p>
          <p className="text-sm text-gray-500">Total Inflow <span className="text-green-500">2.5%</span></p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-semibold">₦50,000,000.00</p>
          <p className="text-sm text-gray-500">MRR <span className="text-green-500">2.5%</span></p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-semibold">₦200,000,000.00</p>
          <p className="text-sm text-gray-500">Commission Revenue <span className="text-green-500">0.5%</span></p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-semibold">₦100,000,000.00</p>
          <p className="text-sm text-gray-500">GMV <span className="text-green-500">0.5%</span></p>
        </div>
      </div>
    </div>
  );
}