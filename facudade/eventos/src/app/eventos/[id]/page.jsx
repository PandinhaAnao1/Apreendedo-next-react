import React from 'react';

export default function EventoPage({params}){
    const url = 'http://localhost:3000/eventos';
    const [evento, setEvento] = useState();
    const [data, setData] = useState();
    async function getEventos() {
  
      const response = await fetch(url);
      const data = await response.json();
      setEvento(data);
    }
  
    useEffect(() => {
      getEventos();
    },);
  
    return (
        <div>
            <h1>Evento ID: {params.id}</h1>
        </div>
    );
};
