import { BookList } from '../cmps/book.list.jsx'
import { bookService } from '../services/book.service.js'
import { BookDetails } from '../views/book-details.jsx'

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

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
        })
    }

    function onSelectBook(book) {
        setSelectedBook(book)
    }

    // function getPageAmountDesc(amount){ }

    return (

        <section>
            {!selectedBook && <React.Fragment>

                <BookList books={books} onSelectBook={onSelectBook} onRemoveBook={onRemoveBook} />
            </React.Fragment>}

            {selectedBook && <BookDetails onBack={() => setSelectedBook(null)} book={selectedBook} />}
        </section>


    )
}