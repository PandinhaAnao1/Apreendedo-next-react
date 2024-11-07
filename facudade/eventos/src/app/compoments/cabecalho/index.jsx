import React from 'react';

export default function Cabecalho(){
    return (
        <header className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Meu Site</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Sobre</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
