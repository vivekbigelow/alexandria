import { useState, useEffect } from 'react';
import BookListItem from './components/BookListItem';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBookTitle, setNewBookTitle] = useState('enter book details...')

  useEffect(() => {
    console.log('effect')
    axios 
      .get('http://localhost:3001/books')
      .then(response => {
        console.log('promise fulfilled');
        setBooks(response.data);
      })
  }, [])

  const addBook = (event) => {
    event.preventDefault();
    const newBook = {
      title: newBookTitle,
      author: 'John Doe'
    };
    axios
      .post('http://localhost:3001/books', newBook)
      .then( response => {
        setBooks(books.concat(response.data));
        setNewBookTitle('');
        console.log(response);
      })
    console.log('Button Pressed', event.target)
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