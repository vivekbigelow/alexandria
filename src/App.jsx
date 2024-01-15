import { useState } from 'react';
import BookListItem from './components/BookListItem';

const App = (props) => {
  const [books, setBooks] = useState(props.books);
  const [newBookTitle, setNewBookTitle] = useState('enter book details...')

  const addBook = (event) => {
    event.preventDefault();
    const newBook = {
      id: books.length + 1,
      title: newBookTitle,
      author: 'John Doe'
    };
    setBooks(books.concat(newBook));
    setNewBookTitle('');
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