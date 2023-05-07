
export function BookDetails({ book, onBack }) {

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

    return (
        <section className="book-details">

            <img src={`${book.thumbnail}`}></img>

            <section className="book-price flex justify-center align-center">
                <label>Price:{`\xa0\xa0`}</label>
                <h2 className={`${getClassColorByPrice(book.listPrice.amount)}`}>
                    {book.listPrice.amount}{`\xa0`}{book.listPrice.currencyCode}
                </h2>
            </section>

            <section className="book-title flex flex-column justify-center align-center">
                <h1>{book.title}</h1>
                <h2>{book.subtitle}</h2>
            </section>

            <section className="book-author flex align-center">
                <label>Authors:</label>
                <h2>{`\xa0${book.authors.join(', ')}`}</h2>
            </section>

            <section className="book-category flex align-center">
                <label>Categories:</label>
                <h2>{`\xa0${book.categories.join(', ')}`}</h2>
            </section>

            <section className="book-description flex align-center">
                <label>Description:{`\xa0`}</label>
                <h4>{book.description}</h4>
            </section>

            <section className="book-product-details flex align-center">
                <label>Product Details:{`\xa0\xa0`}</label>
                <h5>
                    <article className="book-pages flex align-center">
                        <label>Pages:{`\xa0`}</label>
                        {book.pageCount}
                        <span>{`\xa0${getPageAmountDesc(book.pageCount)}`}</span>
                    </article>
                    <article className="book-published-date">
                        <label>Published Date:{`\xa0`}</label>
                        {book.publishedDate}
                        <span>{`\xa0${getPublishedDateDesc(book.publishedDate)}`}</span>
                    </article>
                    <article className="book-is-on-sale">
                        <label>On Sale:{`\xa0`}</label>
                        {book.listPrice.isOnSale ? `On Sale` : `Out Of Stock`}
                    </article>
                </h5>
            </section>

            <button onClick={onBack}>Back</button>
        </section>
    )

}