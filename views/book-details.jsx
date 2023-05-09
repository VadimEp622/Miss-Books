const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { utilService } from '../services/util.service.js'
import { bookService } from '../services/book.service.js'
import { LongTxt } from '../cmps/long-txt.jsx'
import { BookReview } from './book-review.jsx'
import { showErrorMsg } from '../services/event-bus.service.js'


export function BookDetails() {

    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const [reviews, setReviews] = useState([]);
    const [renderTheReviews, setRenderReviews] = useState([])
    const [isReviews, setIsReviews] = useState(false)

    useEffect(() => {
        loadBook()
        renderReviews()
    }, [isReviews])


    function loadBook() {
        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.log('Had issues in book details', err)
                showErrorMsg('Had issues in book details')
                navigate('/book')
            })
    }

    function renderReviews() {
        const bookId = params.bookId
        console.log('from renderReviews', bookId)

        bookService.get(bookId)
            .then((book) => {
                if (book.reviews) {
                    const reviewsFromBook = book.reviews
                    setRenderReviews(reviewsFromBook)
                    setIsReviews(true)
                } else {
                    return
                }
            })
            .catch(err => console.log(err))
    }

    function onBack() {
        navigate('/book')
    }

    function getPageAmountDesc(amount) {
        if (amount > 500) return `(Serious Reading)`
        if (amount > 200) return `(Decent Reading)`
        if (amount < 100) return `(Light Reading)`
        else return ``
    }

    function getPublishedDateDesc(publishedYear) {
        const currYear = new Date().getFullYear()
        if (currYear - 10 > publishedYear) return `(Vintage)`
        return `(New)`
    }

    function getClassColorByPrice(price) {
        if (price > 150) return `expensive`
        if (price < 20) return `cheap`
        return ``
    }

    function deleteReview(idx) {
        setReviews(reviews.filter((review, index) => index !== idx));
        const loadReviews = utilService.loadFromStorage('bookDB')
        console.log(loadReviews)
        const loadBook = loadReviews.find((book) => {
            console.log(params.bookId)
            console.log(book.id)

            return params.bookId === book.id
        })
        loadBook.reviews.splice(idx, 1)
        bookService.save(loadBook)

    }

    if (!book) return <div>Loading...</div>

    return (
        <section className="book-details">

            <img src={`${book.thumbnail}`}></img>

            <section className="book-price">
                <label>Price:</label>
                <h2 className={`${getClassColorByPrice(book.listPrice.amount)}`}>
                    {book.listPrice.amount}{utilService.getCurrencySymbol(book.listPrice.currencyCode)}
                </h2>
            </section>

            <section className="book-title">
                <h1>Name: {book.title}</h1>
                <h2>Subtitle: {book.subtitle}</h2>
            </section>

            <section className="book-author">
                <label>Authors:</label>
                <h2>{`${book.authors.join(', ')}`}</h2>
            </section>

            <section className="book-category">
                <label>Categories:</label>
                <h2>{`${book.categories.join(', ')}`}</h2>
            </section>

            <section className="book-description">
                <label>Description:</label>
                <h4><LongTxt txt={book.description} /></h4>
            </section>

            <section className="book-product-details">
                <label>Product Details:</label>
                <h5>
                    <article className="book-pages">
                        <label>Pages:</label>
                        {book.pageCount}
                        <span>{`${getPageAmountDesc(book.pageCount)}`}</span>
                    </article>
                    <article className="book-published-date">
                        <label>Published Date:</label>
                        {book.publishedDate}
                        <span>{`${getPublishedDateDesc(book.publishedDate)}`}</span>
                    </article>
                    <article className="book-is-on-sale">
                        <label>On Sale:</label>
                        {book.listPrice.isOnSale ? `On Sale` : `Out Of Stock`}
                    </article>



                </h5>
                <button onClick={onBack}>Back</button>
            </section>

            <section>
                <BookReview bookId={params.bookId} reviews={reviews} setReviews={setReviews} />
            </section>

            <section className='reviews-submit'>
                <ul>
                    {reviews.map((review, idx) => (
                        <li key={idx}>
                            {review.name} gave this book a rating of {review.rate} on {review.date}.
                            <button onClick={() => deleteReview(idx)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </section>

            <section className='section-reviews'>
                {isReviews === true && renderTheReviews.map((review, idx) => {
                    return (
                        <ul>
                            <li key={idx}>
                                {review.name} gave this book a rating of {review.rate} on {review.date}

                            </li>
                        </ul>
                    )
                })}
            </section>

        </section>
    )

}