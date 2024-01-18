import { useState, useEffect } from 'react';
import BookListItem from './components/BookListItem';
import Notification from './components/Notification';
import bookService from './services/books';

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({title: 'title', author: 'author'});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    bookService
      .getAll()
      .then(initialBooks => {
          setBooks(initialBooks)
        })
  }, [])

  const addBook = (event) => {
    event.preventDefault();
    if (newBook.title === null 
        || newBook.author === null 
        || newBook.title === 'title' 
        || newBook.author === 'author'){
      setErrorMessage('Please fill out all of the fields in the form below.')
    }
    else {
      setErrorMessage('')
      bookService
        .create(newBook)
        .then(returnedBook => {
          setBooks(books.concat(returnedBook))
          setNewBook({title: 'title', author: 'author'})
        })
    }
  }

  const handleTitleChange = (e) => {
    setNewBook({ ...newBook, title: e.target.value })
  }

  const handleAuthorChange = (e) => {
    setNewBook({ ...newBook, author:e.target.value })
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
      <Notification message={errorMessage} />
      <form onSubmit={addBook}>
          <input value={newBook.title} onChange={handleTitleChange} />
          <input value={newBook.author} onChange={handleAuthorChange} />
          <button type="submit">Add book</button> 
      </form>
    </>
  ) 
};

export default App