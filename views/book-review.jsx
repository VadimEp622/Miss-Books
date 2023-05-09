const { useState, useEffect, useRef } = React


import { bookService } from '../services/book.service.js'

export function BookReview({ bookId, reviews, setReviews }) {

    // console.log('id from review', bookId)

    const nameRef = useRef('')
    const rateRef = useRef(0)
    const dateRef = useRef(0)



    async function onSubmitReview() {
        if (!bookId) return;
        const idBook = bookId;
        const name = nameRef.current.value;
        const rate = rateRef.current.value;
        const date = dateRef.current.value;
        const review = {
            idBook,
            name,
            rate,
            date,
        };
        try {
            await bookService.addReview(idBook, review);
            setReviews([...reviews, review]);
        } catch (err) {
            console.log('Error adding review', err);
        }
    }

    return (
        <div>
            <label>name</label>
            <input type="text" ref={nameRef} />
            <label htmlFor="">Rating</label>
            <select ref={rateRef}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <label htmlFor="">Read at</label>
            <input type="date" ref={dateRef} />
            <button onClick={() => onSubmitReview()}>Submit review</button>
        </div>
    )
}