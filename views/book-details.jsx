
export function BookDetails({ book, onBack }) {

    return (
        <section className="book-details">
            <img src={`${book.thumbnail}`}></img>
            <section className="book-title flex justify-evenly align-center">
                <h1>{book.title}{`\xa0--\xa0`}
                    {<h2></h2>}
                </h1>
                {/* <h2>{book.listPrice.isOnSale}</h2> */}
            </section>
            <h2>{book.subtitle}</h2>
            <section className="book-author flex align-center">
                <label>Authors:</label>
                <h2>{`\xa0${book.authors.join(', ')}`}</h2>
            </section>
            <section className="book-category flex align-center">
                <label>Categories:</label>
                <h2>{`\xa0${book.categories.join(', ')}`}</h2>
            </section>
            <p>Description:</p>
            <h4>{book.description}</h4>
            <button onClick={onBack}>Back</button>
        </section>
    )

}