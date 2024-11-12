'use client';
import React from 'react';
import { useEffect, useState } from 'react';

export default function EventoPage({ params: paramsPromise }){
    const params = React.use(paramsPromise);
    const url = 'http://localhost:3000/eventos/'+params.id;
    const [evento, setEvento] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    async function getEventos() {

      try {
        params.id
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setEvento(data);
      } catch (e) {
        console.error(e);
      }finally{ 
        setIsLoading(false);
      }
    }
  
    useEffect(() => {
      getEventos();
    },);
  
    return (
      evento && 

        <div>
            <h1>Evento ID: {evento.id}</h1>
        </div>

    
    );
};
