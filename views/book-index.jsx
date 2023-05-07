import { bookService } from '../services/book.service.js'

const { useEffect, useState } = React

export function BookIndex() {

    const [books, setBooks] = useState([])

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
            {/* {books.map((book) => {
                <ul>
                    <li>{book.name}</li>
                </ul>
            })} */}
        </section>
    )
}