const { useState, useEffect, useRef } = React

import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"

export function BookAdd() {

    const [googleBooks, setGoogleBooks] = useState(null)


    useEffect(() => {
        handleBookSearch()
    }, [])

    function handleBookSearch() {
        bookService.getGoogleBooks()
            .then((res) => {
                setGoogleBooks(res.items)
            })
            .catch((err) => console.log(err))
    }

    console.log('googlebooks', googleBooks)
    return (
        <section>
            <h1>Add new book from google libary </h1>
            <input type="search" />
        </section>
    )
}