import React from 'react';
import { useLocation } from 'react-router-dom';
const Carte = () => {
    const film=useLocation(). state
    return (
        <div className='carte'>
           <h1>{film.description}</h1>
        </div>
    );
}

export default Carte;
