"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ListEventos() {
  const url = 'http://localhost:3000/eventos';
  const [eventos, setEvento] = useState();
  const [datas, setData] = useState();
  async function getEventos() {

    const response = await fetch(url);
    const data = await response.json();
    setEvento(data);
  }

  useEffect(() => {
    getEventos();
  },);

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  return (
    <div className="p-4">
      <h1 className="py-5 text-4xl font-bold mb-4 inline-flex">Lista de Eventos</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Nome</th>
            <th className="py-2 px-4 border-b text-left">Data</th>
            <th className="py-2 px-4 border-b text-left">Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            eventos && eventos.map((evento, index) => (
              <tr key={index}>
                <td className="py-4 px-6 border-b text-left">{evento.titulo}</td>
                <td className="py-4 px-6 border-b text-left">{formatDate(evento.data)}</td>
                <td className="py-4 px-6 border-b text-left">
                  <button className="text-blue-500 hover:text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
