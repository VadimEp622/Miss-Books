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

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
        })
    }

    function onSelectBook(book){
        setSelectedCar(book)
    }

    return (
        <section>
            {/* <CarFilter onSetFilter={onSetFilter} filterBy={filterBy} /> */}
            {/* <CarList onSelectCar={onSelectCar} cars={cars} onRemoveCar={onRemoveCar} /> */}
            <BookList books={books} onSelectbook={onSelectBook} onRemoveBook={onRemoveBook} />
        </section>
    )
}