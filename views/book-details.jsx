
export function BookDetails({ book, onBack }) {
    
    return (
        <section className="book-details">
            <h1>Title: {book.title}</h1>
            <h5>Subtitle: {book.subtitle}</h5>
            <p>Description: {book.description}</p>
            <button onClick={onBack}>Back</button>
        </section>
    )

}