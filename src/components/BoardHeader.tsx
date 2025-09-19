export default function BoardHeader() {
  return (
    <div className="bg-white px-4 sm:px-6 py-4" style={{ borderBottom: '1px solid #e5e5e5' }}>
      <div className="max-w-none">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Sport Xi Project</h1>
              <span className="inline-flex items-center bg-yellow-400 text-white text-xs font-medium px-2 py-0.5 rounded-full self-start sm:self-auto">
                in progress
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-1">event production</p>

            <div className="mt-3 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-sm text-gray-600">assigned</span>

              <div className="flex -space-x-2">
                <div className="w-6 sm:w-7 h-6 sm:h-7 bg-gray-800 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-medium" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  C
                </div>
                <div className="w-6 sm:w-7 h-6 sm:h-7 bg-gray-700 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-medium" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  C
                </div>
                <div className="w-6 sm:w-7 h-6 sm:h-7 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-medium" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  C
                </div>
              </div>

              <span className="text-sm text-gray-600">+2</span>

              <button className="inline-flex items-center px-3 py-1 border border-gray-200 text-sm rounded-md hover:bg-gray-50">
                Manage
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-4">Last updated on: 04 April, 2022</p>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center space-x-3" />
        </div>
      </div>
    </div>
  );
}
