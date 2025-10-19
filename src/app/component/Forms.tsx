interface ContactFormProps {
    FormShow: boolean;
    setFormShow: (value: boolean) => void;
  }

export const ContactForm = ({FormShow, setFormShow}:ContactFormProps) =>{
    
    const OnCloseForm = () =>{
        setFormShow(false);
        setTimeout(()=>{console.log(FormShow)},0)
      }

    return(    
            <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Cliente</h2>
                    <div className="space-y-4">
                        <input
                        type="text"
                        placeholder="Nombre completo"
                        //value={formData.name}
                        //onChange={(e) => onFormChange({...formData, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                        type="tel"
                        placeholder="Teléfono"
                        //value={formData.phone}
                        //onChange={(e) => onFormChange({...formData, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                        type="email"
                        placeholder="Email"
                        //value={formData.email}
                        //onChange={(e) => onFormChange({...formData, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                        type="text"
                        placeholder="Empresa"
                        //value={formData.company}
                        //onChange={(e) => onFormChange({...formData, company: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <select
                        //value={formData.status}
                        //onChange={(e) => onFormChange({...formData, status: e.target.value})}
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
                        //value={formData.notes}
                        //onChange={(e) => onFormChange({...formData, notes: e.target.value})}
                        //rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex gap-3 mt-6">
                        <button
                        //onClick={onSubmit}
                        className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                        >
                        Guardar
                        </button>
                        <button
                        onClick={OnCloseForm}
                        className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                        >
                        Cancelar
                        </button>
                    </div>
                </div>
            </div>
    )

}