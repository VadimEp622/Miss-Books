export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <img src={`${book.thumbnail}`} alt="book"></img>
            <h2>{book.title}</h2>
            <h4>{book.subtitle}</h4>
            <p>{book.description}</p>
        </article>
    )
}