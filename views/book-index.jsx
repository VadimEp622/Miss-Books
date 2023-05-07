import { BookList } from '../cmps/book.list.jsx'
import { bookService } from '../services/book.service.js'

const { useEffect, useState } = React

export function BookIndex() {

    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()

    }, [])

    function loadBooks() {
        bookService.query()
            .then((books) =>
                setBooks(books)
            )
    }

    

    return (
        <section className="book-list">
            <h1>Hello from book Index</h1>
            <BookList  books={books}  />

        </section>
    )
}