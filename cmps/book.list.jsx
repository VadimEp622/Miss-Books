const { Link } = ReactRouterDOM


import { BookPreview } from '../cmps/book-preview.jsx'

export function BookList({ books, onRemoveBook, onSelectBook }) {
    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section className="flex">
                        <button onClick={() => onRemoveBook(book.id)} >Remove</button>
                        <Link className="btnLook" to={`/book/${book.id}`}>
                            Details
                        </Link>

                        <Link className="btnLook" to={`/book/edit/${book.id}`}>
                            Edit
                        </Link>

                    </section>
                </li>
            )}
        </ul>
    )
}