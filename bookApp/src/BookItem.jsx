import React, { useState } from 'react';

const ItemListaLivro = ({ book }) => {
    const [expandido, setExpandido] = useState(false);

    const handleClick = () => {
        setExpandido(!expandido);
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <span>{book.id}</span>
            <h3>{book.title}</h3>
            {expandido && <p>Autor: {book.author}</p>}
        </div>
  );
};

export default ItemListaLivro;