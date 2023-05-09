const { useState, useEffect, useRef } = React

import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"
import { storageService } from "../services/async-storage.service.js"

export function BookAdd() {

    const [googleBooks, setGoogleBooks] = useState(null)
    const [bookToEdit, setBookToEdit] = useState({})
    const [filterByTitle, setFilterByTitle] = useState({ title: '' })

    useEffect(() => {
        handleBookSearch()

    }, [])

    useEffect(() => {

    }, [bookToEdit]);

    function handleBookSearch() {
        bookService.getGoogleBooks()
            .then((res) => {
                setGoogleBooks(res.items)
            })
            .catch((err) => console.log(err))
    }

    function onAddBook(book) {
        console.log('click', book)
        const newBook = {
            authors: book.volumeInfo.authors,
            categories: book.volumeInfo.categories,
            description: book.volumeInfo.description,
            id: book.id,
            language: "en",
            listPrice: { amount: utilService.getRandomIntInclusive(10, 300), currencyCode: 'ILS', isOnSale: 'true' },
            pageCount: book.volumeInfo.pageCount,
            publishedDate: book.volumeInfo.publishedDate,
            subtitle: book.volumeInfo.description,
            thumbnail: book.volumeInfo.imageLinks.thumbnail,
            title: book.volumeInfo.title
        }

        console.log('New Book', newBook)

        storageService.post('bookDB', newBook)
            .then(() => console.log('New google book added'))
            .catch((err) => console.log(err))

    }

    console.log('googlebooks', googleBooks)
    return (
        <section>
            <h1>Add new book from google library </h1>
            {/* maxLength=1 temporary protection until debounce implemented */}
            <input type="search" maxLength={1} />

            {googleBooks ? (
                <ul>
                    {googleBooks.map((book) => (
                        <li key={book.id}>
                            {book.volumeInfo.title}
                            <button onClick={() => onAddBook(book)}>+</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </section>
    )
}