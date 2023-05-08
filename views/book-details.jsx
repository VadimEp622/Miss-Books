import { utilService } from '../services/util.service.js'
import { bookService } from '../services/book.service.js'
import { LongTxt } from '../cmps/long-txt.jsx'

const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

export function BookDetails() {

    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    console.log('params', params)

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.log('Had issued in book details', err)
                navigate('/book')
            })
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
                <h1>{book.title}</h1>
                <h2>{book.subtitle}</h2>
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
            </section>
            <button onClick={onBack}>Back</button>
        </section>
    )

}