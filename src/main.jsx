import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const books = [
  {id: 1, title: "The Fall", author:"Albert Camus"},
  {id: 2, title: "Anna Karenina", author:"Leo Tolstoy"},
  {id: 3, title: "Cat's Cradle", author:"Kurt Vonnegut"}
]

ReactDOM.createRoot(document.getElementById('root')).render(<App books={books} />)
