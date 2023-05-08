const { useEffect, useState, useRef } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())

    const navigate = useNavigate()
    const params = useParams()
    // const nameRef = useRef('')
    // const priceRef = useRef(0)

    useEffect(() => {
        if (params.bookId) loadBook()
        console.log('bookToEdit', bookToEdit)
        console.log('params', params)

    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBookToEdit)
            .catch(err => {
                console.log('Had issued in car edit:', err);
                navigate('/book')
            })
            // .then(console.log('bookToEdit', bookToEdit))
    }



    return (
        <section className="book-edit">

            <article>
                <label>Enter Title:</label>
                <input type="text" />
            </article>

            <article>
                <label>Enter Subtitle:</label>
                <input type="text" />
            </article>

            {/* <article>
                <label>Enter</label>
            </article> */}

            <article>
                <label>Enter Price:</label>
                <input type="number" />
            </article>

            <button>Add book</button>
        </section>
    )
}