import React from 'react';
import './productos.css';
import { Link } from 'react-router-dom';

function item({nombre, precio, id, imagen}) {
  return (
    <Link className='cuadradito' to={`/detail/${id}`}>
      <div className='name'>{nombre}</div>
      <img src={imagen} alt={nombre} />
      <div className='precio'>${precio}</div>
    </Link>
  );
}

export default item
