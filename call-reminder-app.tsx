import React, { useState } from 'react';
import { Phone, Plus, Edit2, Trash2, Calendar, FileText, Search, User } from 'lucide-react';

// Componente de Header
function Header({ onAddClick }) {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Call Reminder</h1>
          </div>
          <button
            onClick={onAddClick}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
          >
            <Plus className="w-5 h-5" />
            Nuevo Cliente
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente de Búsqueda y Filtros
function SearchAndFilters({ searchTerm, onSearchChange, activeFilter, onFilterChange, filterOptions }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar cliente por nombre, empresa o teléfono..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        {filterOptions.map(filter => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeFilter === filter
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

// Componente de Tarjeta de Cliente
function ClientCard({ client, onViewDetails, onDelete, getStatusColor }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-indigo-100 p-2 rounded-full">
              <User className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{client.name}</h3>
              <p className="text-gray-600">{client.company}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>{client.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Último contacto: {client.lastContact}</span>
            </div>
          </div>

          <div className="mt-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(client.status)}`}>
              {client.status}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(client)}
            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
          >
            <FileText className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(client.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente de Lista de Clientes
function ClientList({ clients, onViewDetails, onDelete, getStatusColor }) {
  return (
    <div className="grid gap-4">
      {clients.map(client => (
        <ClientCard
          key={client.id}
          client={client}
          onViewDetails={onViewDetails}
          onDelete={onDelete}
          getStatusColor={getStatusColor}
        />
      ))}
    </div>
  );
}

// Componente de Historial de Llamadas
function CallHistory({ calls }) {
  return (
    <div className="space-y-4">
      {calls.map((call, idx) => (
        <div key={idx} className="border-l-4 border-indigo-600 bg-gray-50 p-4 rounded">
          <div className="flex justify-between items-start mb-2">
            <span className="font-semibold text-gray-800">{call.date}</span>
            <span className="text-sm text-gray-600">{call.duration}</span>
          </div>
          <p className="text-gray-700">{call.notes}</p>
        </div>
      ))}
    </div>
  );
}

// Componente de Formulario de Nueva Llamada
function NewCallForm({ callFormData, onFormChange, onSubmit }) {
  return (
    <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
      <h4 className="font-semibold mb-3">Registrar nueva llamada</h4>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          type="date"
          value={callFormData.date}
          onChange={(e) => onFormChange({...callFormData, date: e.target.value})}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Duración (ej: 15 min)"
          value={callFormData.duration}
          onChange={(e) => onFormChange({...callFormData, duration: e.target.value})}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <textarea
        placeholder="Notas de la llamada..."
        value={callFormData.notes}
        onChange={(e) => onFormChange({...callFormData, notes: e.target.value})}
        rows="3"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 mb-3"
      />
      <button
        onClick={onSubmit}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Guardar Llamada
      </button>
    </div>
  );
}

// Componente de Detalle del Cliente
function ClientDetail({ client, onBack, getStatusColor, callFormData, onCallFormChange, onAddCall }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <button
        onClick={onBack}
        className="mb-4 text-indigo-600 hover:text-indigo-800 font-medium"
      >
        ← Volver a la lista
      </button>

      <div className="border-b pb-6 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{client.name}</h2>
        <p className="text-xl text-gray-600 mb-4">{client.company}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Teléfono</p>
            <p className="text-lg font-medium">{client.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium">{client.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Último contacto</p>
            <p className="text-lg font-medium">{client.lastContact}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Estado</p>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(client.status)}`}>
              {client.status}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Notas generales</p>
          <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{client.notes}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5" />
          Historial de Llamadas
        </h3>
        <CallHistory calls={client.calls} />
        <NewCallForm
          callFormData={callFormData}
          onFormChange={onCallFormChange}
          onSubmit={onAddCall}
        />
      </div>
    </div>
  );
}

// Componente de Modal para Agregar Cliente
function AddClientModal({ show, formData, onFormChange, onSubmit, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Cliente</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={(e) => onFormChange({...formData, name: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={(e) => onFormChange({...formData, phone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => onFormChange({...formData, email: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Empresa"
            value={formData.company}
            onChange={(e) => onFormChange({...formData, company: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={formData.status}
            onChange={(e) => onFormChange({...formData, status: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option>Primera llamada</option>
            <option>No contestó</option>
            <option>Interesado</option>
            <option>Negociación</option>
            <option>Cerrado</option>
          </select>
          <textarea
            placeholder="Notas generales..."
            value={formData.notes}
            onChange={(e) => onFormChange({...formData, notes: e.target.value})}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={onSubmit}
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente Principal
export default function CallReminderApp() {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'Juan Pérez',
      phone: '+52 442 123 4567',
      email: 'juan.perez@email.com',
      company: 'Tech Solutions',
      lastContact: '2025-10-15',
      nextContact: '2025-10-20',
      status: 'Interesado',
      calls: [
        { date: '2025-10-15', duration: '15 min', notes: 'Cliente interesado en el producto premium. Solicita demo.' },
        { date: '2025-10-10', duration: '10 min', notes: 'Primera llamada, presentación general.' }
      ],
      notes: 'Cliente potencial con presupuesto alto. Prefiere llamadas por la tarde.'
    },
    {
      id: 2,
      name: 'María González',
      phone: '+52 442 987 6543',
      email: 'maria.g@company.com',
      company: 'Innovatech',
      lastContact: '2025-10-16',
      nextContact: '2025-10-22',
      status: 'Negociación',
      calls: [
        { date: '2025-10-16', duration: '20 min', notes: 'Discutimos precios y planes de pago.' }
      ],
      notes: 'Necesita aprobación de gerencia. Seguir contacto semanal.'
    },
    {
      id: 3,
      name: 'Carlos Ramírez',
      phone: '+52 442 555 7890',
      email: 'carlos.r@empresa.com',
      company: 'Digital Corp',
      lastContact: '2025-10-17',
      nextContact: '2025-10-19',
      status: 'No contestó',
      calls: [
        { date: '2025-10-17', duration: '0 min', notes: 'No contestó, buzón de voz dejado.' }
      ],
      notes: 'Intentar llamar en horario de tarde.'
    },
    {
      id: 4,
      name: 'Ana Martínez',
      phone: '+52 442 333 4567',
      email: 'ana.m@startup.com',
      company: 'StartupHub',
      lastContact: '2025-10-18',
      nextContact: '2025-10-21',
      status: 'Primera llamada',
      calls: [],
      notes: 'Contacto nuevo, referido por Juan Pérez.'
    }
  ]);

  const [view, setView] = useState('list');
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    status: 'Primera llamada',
    notes: ''
  });

  const [callFormData, setCallFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    duration: '',
    notes: ''
  });

  const filterOptions = ['Todos', 'Primera llamada', 'No contestó', 'Interesado', 'Negociación', 'Cerrado'];

  const handleAddClient = () => {
    if (!formData.name || !formData.phone) return;
    const newClient = {
      id: clients.length + 1,
      ...formData,
      lastContact: new Date().toISOString().split('T')[0],
      nextContact: '',
      calls: []
    };
    setClients([...clients, newClient]);
    setFormData({ name: '', phone: '', email: '', company: '', status: 'Primera llamada', notes: '' });
    setShowAddForm(false);
  };

  const handleDeleteClient = (id) => {
    setClients(clients.filter(c => c.id !== id));
    if (selectedClient && selectedClient.id === id) {
      setSelectedClient(null);
      setView('list');
    }
  };

  const addCallNote = (clientId, callData) => {
    setClients(clients.map(c => {
      if (c.id === clientId) {
        return {
          ...c,
          calls: [callData, ...c.calls],
          lastContact: callData.date
        };
      }
      return c;
    }));
  };

  const handleAddCall = () => {
    if (!callFormData.notes || !callFormData.duration) return;
    addCallNote(selectedClient.id, callFormData);
    setCallFormData({
      date: new Date().toISOString().split('T')[0],
      duration: '',
      notes: ''
    });
  };

  const filteredClients = clients.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm);
    
    const matchesFilter = activeFilter === 'Todos' || c.status === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    const colors = {
      'Primera llamada': 'bg-blue-100 text-blue-800',
      'No contestó': 'bg-orange-100 text-orange-800',
      'Interesado': 'bg-green-100 text-green-800',
      'Negociación': 'bg-yellow-100 text-yellow-800',
      'Cerrado': 'bg-purple-100 text-purple-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header onAddClick={() => setShowAddForm(true)} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchAndFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filterOptions={filterOptions}
        />

        {view === 'list' && (
          <ClientList
            clients={filteredClients}
            onViewDetails={(client) => {
              setSelectedClient(client);
              setView('detail');
            }}
            onDelete={handleDeleteClient}
            getStatusColor={getStatusColor}
          />
        )}

        {view === 'detail' && selectedClient && (
          <ClientDetail
            client={selectedClient}
            onBack={() => setView('list')}
            getStatusColor={getStatusColor}
            callFormData={callFormData}
            onCallFormChange={setCallFormData}
            onAddCall={handleAddCall}
          />
        )}
      </div>

      <AddClientModal
        show={showAddForm}
        formData={formData}
        onFormChange={setFormData}
        onSubmit={handleAddClient}
        onClose={() => setShowAddForm(false)}
      />
    </div>
  );
}