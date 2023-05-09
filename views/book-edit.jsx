const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const { bookId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        if (bookId) loadBook()
    }, [])

    useEffect(() => {
        console.log('bookToEdit', bookToEdit)
    }, [bookToEdit])





    function loadBook() {
        bookService.get(bookId)
            .then(setBookToEdit)
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

    function handleChangeListPrice({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setBookToEdit(prevBook => ({ ...prevBook, listPrice: { ...prevBook.listPrice, [field]: value } }))
    }


    function handleSave() {
        // console.log('bookToEdit', bookToEdit)
        // add code to save the book
        if (!Array.isArray(bookToEdit.categories)) bookToEdit.categories = bookToEdit.categories.split(',')
        if (!Array.isArray(bookToEdit.authors)) bookToEdit.authors = bookToEdit.authors.split(',')
        bookToEdit.listPrice.isOnSale = bookToEdit.listPrice.isOnSale === 'true' ? true : false
        console.log('bookToEdit', bookToEdit)
        bookService.save(bookToEdit)
            .then(() => {
                navigate('/book')
            })
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
                <label>Enter Author:</label>
                <input type="text" value={bookToEdit.authors} name='authors' onChange={handleChange} />
            </article>

            <article>
                <label>Enter Categories:</label>
                <input type="text" value={bookToEdit.categories} name='categories' onChange={handleChange} />
            </article>

            <article>
                <label>Enter Price:</label>
                <input type="number" value={bookToEdit.listPrice.amount} name='amount' onChange={handleChangeListPrice} />
            </article>

            <article>
                <label>Enter Currency Code:</label>
                <input type="text" maxLength="3" value={bookToEdit.listPrice.currencyCode} name='currencyCode' onChange={handleChangeListPrice} />
            </article>

            <article>
                <label>Enter Is On Sale? (true/false):</label>
                <input type="text" value={bookToEdit.listPrice.isOnSale} name='isOnSale' onChange={handleChangeListPrice}></input>
            </article>

            <article>
                <label>Enter Page Count:</label>
                <input type="number" value={bookToEdit.pageCount} name='pageCount' onChange={handleChange} />
            </article>

            <article>
                <label>Enter Published Date:</label>
                <input type="number" value={bookToEdit.publishedDate} name='publishedDate' onChange={handleChange} />
            </article>

            <article>
                <label>Enter Language:</label>
                <input type="text" maxLength="2" value={bookToEdit.language} name='language' onChange={handleChange} />
            </article>

            <article>
                <label>Enter Description:</label>
                <input type="text" value={bookToEdit.description} name='description' onChange={handleChange} />
            </article>

            <button onClick={handleSave}>Save book</button>
        </section>
    )
}