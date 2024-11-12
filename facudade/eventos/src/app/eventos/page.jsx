"use client";
import Image from "next/image";
import {use} from "react";
import { useState, useEffect } from "react";

export default function ListEventos() {
  const url = 'http://localhost:3000/eventos';
  const [eventos, setEvento] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  async function getEventos() {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if(response.status !== 200) {
        throw new Error('Ocorreu um erro ao buscar os eventos');
      }
      const data = await response.json();
      setEvento(data);
    } catch (e) {
      setError(e);
      console.error(e);
    }finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getEventos();
  }, []);

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  const handleButtonClick = (id) => {
    window.location.href = `/eventos/${id}`;
  };

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
                  <button className="text-blue-500 hover:text-blue-700" key={evento.id} onClick={() => handleButtonClick(evento.id)}>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
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
