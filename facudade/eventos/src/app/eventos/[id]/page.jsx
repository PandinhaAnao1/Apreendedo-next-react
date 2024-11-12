'use client';
import React from 'react';
import { useEffect, useState } from 'react';

export default function EventoPage({ params: paramsPromise }){
    const params = React.use(paramsPromise);
    const url = 'http://localhost:3000/eventos';
    const [evento, setEvento] = useState();
    const [data, setData] = useState();
    async function getEventos() {
  
      const response = await fetch(url);
      const data = await response.json();
      setEvento(data);
    }
  
    useEffect(() => {
      // getEventos();
    },);
  
    return (
        <div>
            <h1>Evento ID: {params.id}</h1>
        </div>
    );
};
