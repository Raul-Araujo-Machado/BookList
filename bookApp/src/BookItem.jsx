import React, { useState } from 'react';
import './BookItem.css';

const ItemListaLivro = ({ book }) => {
    const [expandido, setExpandido] = useState(false);

    const handleClick = () => {
        setExpandido(!expandido);
    };

    return (
        <div className='book-item' onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div><span>{book.id}</span></div>
            <div>
                <h3>{book.title}</h3>
                {expandido && <p>Autor: {book.author}</p>}
            </div>
        </div>
  );
};

export default ItemListaLivro;