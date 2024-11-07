import React from 'react';
import Form from './form';
import ListEventos from './eventos/page';

export default function Home({ Component, pageProps }) {
    
    return (
        <>
            <Form/>
            <ListEventos/>           
        </>
    );
}
