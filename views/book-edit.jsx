const { useEffect, useState, useRef } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js";


export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    
    const navigate = useNavigate()
    const params = useParams()
    const nameRef = useRef('');
    const priceRef = useRef(0);

    useEffect(() => {
        if (params.bookId) loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBookToEdit)
            .catch(err => {
                console.log('Had issued in car edit:', err);
                navigate('/book')
            })
    }
    


    return (
        <section className="book-edit">

            <article>
                <label>Enter Title:</label>
                <input type="text" ref={nameRef} />
            </article>

            <article>
                <label>Enter Subtitle:</label>
                <input type="text" ref={nameRef} />
            </article>

            <article>
                <label>Enter Price:</label>
                <input type="number" ref={priceRef} />
            </article>

            <button>Add book</button>
        </section>
    )
}