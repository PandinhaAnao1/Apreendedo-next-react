'use client'

import React from 'react';
import { useRouter } from 'next/navigation'

export default function Cabecalho(){
    const router = useRouter();
      
    const handleEventosClick = (e) => {
        e.preventDefault();
        router.push('/eventos');
    }
    const handleFormClick= (e) => {
        e.preventDefault();
        router.push('/cadastrar');
    }
    return (
        <header className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Meu Site</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white hover:text-gray-300" onClick={handleEventosClick}>Eventos</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300" onClick={handleFormClick}  >cadastrar eventos</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
