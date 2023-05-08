const { useEffect, useState, useRef } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const params = useParams()
    const didMountRef = useRef(false)

    useEffect(() => {
        if (params.bookId) {
            loadBook()
        } else {
            setBookToEdit(bookService.getEmptyBook())
        }
    }, [params.bookId])

    useEffect(() => {
        if (didMountRef.current) {
            console.log('bookToEdit', bookToEdit)
        } else {
            didMountRef.current = true
        }
    }, [bookToEdit])

    function loadBook() {
        bookService.get(params.bookId)
            .then(book => setBookToEdit(book))
            .catch(err => {
                console.log('Had issued in book edit:', err);
                navigate('/book')
            })
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setBookToEdit(prevBook => ({ ...prevBook, [field]: value }))
    }


    function handleSave() {
        console.log('bookToEdit', bookToEdit)
        // add code to save the book
    }

    return (
        <section className="book-edit">
            <article>
                <label>Enter Title:</label>
                <input type="text" value={bookToEdit.title} name='title' onChange={handleChange} />
            </article>

            <article>
                <label>Enter Subtitle:</label>
                <input type="text" value={bookToEdit.subtitle} name='subtitle' onChange={handleChange} />
            </article>

            <article>
                <label>Enter Price:</label>
                <input type="number" value={bookToEdit.listPrice.amount} onChange={(ev) => setBookToEdit({...bookToEdit, listPrice: {...bookToEdit.listPrice, amount: ev.target.value}})} />
            </article>

            <button onClick={handleSave}>Save book</button>
        </section>
    )
}