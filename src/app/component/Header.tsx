"use client"
import { useState } from "react"
import { ContactForm } from "./Forms";

export const Header =() =>{
  const [FormShow, setFormShow] = useState(false);
  
  const OnOpenForm = () =>{
    setFormShow(true);
    setTimeout(()=>{console.log(FormShow)})
  }


  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Call Reminder</h1>
          </div>

            
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
            onClick={OnOpenForm}
          >
          Nuevo Cliente
          </button>
        </div>
      </div>
      {FormShow && (<ContactForm FormShow={FormShow} setFormShow={setFormShow}/>)}
    </div>
  );
}