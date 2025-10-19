export function ClientCard({/* client, onViewDetails, onDelete, getStatusColor */}) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 p-2 rounded-full">
                {/*<User className="w-5 h-5 text-indigo-600" />*/}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Alejandro martines</h3>
                <p className="text-gray-600">StartupHub</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <span>7551243450</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                {/*<Calendar className="w-4 h-4" /> */}
                <span>Último contacto: 2025-10-18</span>
              </div>
            </div>
  
            <div className="mt-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium`}>
              Primera llamada
              </span>
            </div>
          </div>
  
          <div className="flex gap-2">
            <button
              className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
            >
              {/*<FileText className="w-5 h-5" />*/}
            </button>
            <button
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              {/*<Trash2 className="w-5 h-5" />*/}
            </button>
          </div>
        </div>
      </div>
    );
  }