import React, { useState } from 'react';
import './Search.css';

const Search = () => {
    const [buscado, setBuscado] = useState('');
    const searchFunction = () => {};

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Buscar..."
                value={buscado}
                onChange={(e) => setBuscado(e.target.value)}
            />
            <button className="search-button" onClick={searchFunction}>
                Buscar
            </button>
        </div>
    );
};

export default Search;
