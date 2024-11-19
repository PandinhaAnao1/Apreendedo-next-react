"use client";
import Image from "next/image";
import { use } from "react";
import { useState, useEffect } from "react";
import { TableDemo } from "../compoments/tables/tableSchadCn";

export default function ListEventos() {
  const url = 'http://localhost:3000/eventos';
  const [eventos, setEvento] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  async function getEventos() {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error('Ocorreu um erro ao buscar os eventos');
      }
      const data = await response.json();
      setEvento(data);
    } catch (e) {
      setError(e);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getEventos();
  }, []);


  const handleButtonClick = (id) => {
    window.location.href = `/eventos/${id}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <TableDemo />
    </div>
  );
}
