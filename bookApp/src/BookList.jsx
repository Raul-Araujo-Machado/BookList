import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books }) => {

    return (
        <div className="lista">
            <h1>LIVROS PARA LER</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}><BookItem book={book} /></li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;