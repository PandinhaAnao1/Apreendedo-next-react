"use client";
import Image from "next/image";
import { useState } from "react";

export default function Form({title}) {
  const url = 'http://localhost:3000/eventos';
  const [evento, setEvento] = useState('');
  const [data, setData] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "titulo": evento,
        "data": data,
      }),
    });
    if(response.status == 201){
      alert('Evento adicionado com sucesso!');
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Adicionar Evento</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
            {title}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nome"
            onChange={(e) => setEvento(e.target.value)}
            value={evento}
            type="text"

            placeholder="Nome do Evento"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="data">
            Data do Evento
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="data"
            onChange={(e) => setData(e.target.value)}
            value={data}
            type="date"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e);
              console.log(evento);
              console.log(data);
            }}

          >
            Adicionar Evento
          </button>
        </div>
      </form>
    </div>
  );
}
