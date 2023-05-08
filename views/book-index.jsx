const { useEffect, useState } = React
const { Link} = ReactRouterDOM

import { BookFilter } from '../cmps/book-filter.jsx'
import { BookList } from '../cmps/book.list.jsx'
import { bookService } from '../services/book.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'


export function BookIndex() {

    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => setBooks(books))
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
            showSuccessMsg(`Book (${carId}) removed!`)
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    // function onSelectBook(book) {
    //     setSelectedBook(book)
    // }
  


    return (
        <section className="book-index">
            <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
            <Link to="/book/edit">Add book</Link>
            <BookList books={books} onRemoveBook={onRemoveBook} />
            {/* <button onClick={() => onSelectBook(book)} >Select Book</button> */}
        </section>
    )
}