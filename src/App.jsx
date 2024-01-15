import { useState, useEffect } from 'react';
import BookListItem from './components/BookListItem';
import bookService from './services/books';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBookTitle, setNewBookTitle] = useState('enter book details...')

  useEffect(() => {
    bookService
      .getAll()
      .then(initialBooks => {
          setBooks(initialBooks)
        })
  }, [])

  const addBook = (event) => {
    event.preventDefault();
    const newBook = {
      title: newBookTitle,
      author: 'John Doe'
    };
    bookService
      .create(newBook)
      .then(returnedBook => {
        setBooks(books.concat(returnedBook))
        setNewBookTitle('');
      })
  }

  const handleBookChange = (event) => {
    console.log(event.target.value);
    setNewBookTitle(event.target.value);
  }
  
  return (
    <>
      <h1>Welcome to Alexandria: Your Personal Library</h1>
      <h2>Your Books</h2>
      <ul>
        {books.map(book => 
          <BookListItem book = {book} key={book.id} />
        )}
      </ul>
      <form onSubmit={addBook}>
          <input value={newBookTitle} onChange={handleBookChange} />
          <button type="submit">Add book</button> 
      </form>
    </>
  ) 
};

export default App