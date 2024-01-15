const BookListItem = ({book}) => {
    return (
        <li className="bookListItem">{book.title} by {book.author}</li>
    )
}

export default BookListItem