import React, { Component } from 'react';

export class Botao extends Component {
    
    render(){
        const { text, onClick } = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }} onClick={onClick}>
                <button>{text}</button>
            </div>
        );
    }   
};
