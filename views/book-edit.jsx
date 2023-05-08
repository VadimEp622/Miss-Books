import { bookService } from "../services/book.service.js";

const { useEffect, useState, useRef } = React

export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    console.log('bookToEdit', bookToEdit)

    const nameRef = useRef('');
    const priceRef = useRef(0);



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