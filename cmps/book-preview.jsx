export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <h2>Title: {book.title}</h2>
            <h4>Subtitle: {book.subtitle}</h4>
            <h4>Description: {book.description}</h4>
        </article>
    )
}