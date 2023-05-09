const { useState, useEffect, useRef } = React

import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"
import { storageService } from "../services/async-storage.service.js"
import { BookAddFilter } from "../cmps/book-add-filter.jsx"

export function BookAdd() {
    const [googleBooks, setGoogleBooks] = useState(null)
    const [filterBy, setFilterBy] = useState({ title: '' })


    useEffect(() => {
        handleBookSearch()

    // }, [])
    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }



    function handleBookSearch() {
        bookService.getGoogleBooks(filterBy.title)
            .then((res) => {
                setGoogleBooks(res.items)
            })
            .catch((err) => console.log(err))
    }

    function onAddBook(book) {
        console.log('click', book)
        const newBook = {
            authors: book.volumeInfo.authors || ["no info"],
            categories: book.volumeInfo.categories || ['no info'],
            description: book.volumeInfo.description || "no info",
            id: book.id || "noinfo",
            language: "en",
            listPrice: { amount: utilService.getRandomIntInclusive(10, 300), currencyCode: 'ILS', isOnSale: 'true' },
            pageCount: book.volumeInfo.pageCount || "no info",
            publishedDate: book.volumeInfo.publishedDate || "no info",
            subtitle: book.volumeInfo.description || "no subtitle",
            thumbnail: book.volumeInfo.imageLinks.thumbnail || './assets/img/book-images/default.png',
            title: book.volumeInfo.title || ""
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
            <BookAddFilter onSetFilter={onSetFilter} filterBy={filterBy} />
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