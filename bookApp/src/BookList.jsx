import React from "react";

const BookList = ({ books }) => {

    return (
        <div className="lista">
            <h1>LIVROS PARA LER</h1>
            <ul>
                {books.map((book) => (
                <li key={book.id}></li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;