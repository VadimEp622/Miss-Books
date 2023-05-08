const { useState, useEffect, useRef } = React


import { bookService } from '../services/book.service.js'

export function BookReview({ bookId }) {
    
    console.log('id from review', bookId)

    const nameRef = useRef('')
    const rateRef = useRef(0)
    const dateRef = useRef(0)



    function onSubmitReview() {
        const idBook = bookId.bookId
        const name = nameRef.current.value
        const rate = rateRef.current.value
        const date = dateRef.current.value
        const review = {
            idBook,
            name,
            rate,
            date,
        }
        console.log(review)
        bookService.addReview(idBook, review)

    }

    function renderReview() {
        const reviewsArray = bookService.loadReviews()
        console.log(reviewsArray)
        const currReviews = reviewsArray.filter((reviews) => (params.bookId = reviews.idBook))
        console.log('curr reviews', currReviews)

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