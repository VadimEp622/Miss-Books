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
                        <Link to={`/book/${book.id}`}>
                            <button>Details</button>
                        </Link>

                        <Link to={`/book/edit/${book.id}`}>
                            <button>Edit</button>
                        </Link>

                    </section>
                </li>
            )}
        </ul>
    )
}