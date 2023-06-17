import { useState, useEffect } from 'react'
import BookList from './BookList';
import './App.css'

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <BookList books={books} />
    </div>
  );
}

export default App
