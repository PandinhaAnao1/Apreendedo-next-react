import React, { Component } from 'react';
import './styles.css';
export class Botao extends Component {

    render() {
        const { text, onClick, disabled } = this.props;

        return (
            <button
                className='botao'
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        );
    }
};
