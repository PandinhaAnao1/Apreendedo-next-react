import React from 'react';
import Form from './cadastrar/page';
import ListEventos from './eventos/page';

export default function Home({ Component, pageProps }) {
    
    return (
        <>
            <Form/>
            <ListEventos/>           
        </>
    );
}
