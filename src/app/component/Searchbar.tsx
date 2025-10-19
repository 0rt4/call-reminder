export const SearchBar = () => {
return (
  <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="relative mb-4">
        <input type="text"
               placeholder="Buscar cliente por nombre, empresa o teléfono..."
               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <button>
          filtros
        </button>
      </div>
  </div>
    );
}