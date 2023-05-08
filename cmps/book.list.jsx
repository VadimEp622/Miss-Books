const { Link } = ReactRouterDOM


import { BookPreview } from '../cmps/book-preview.jsx'

export function BookList({ books, onRemoveBook, onSelectBook }) {
    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section className="flex">
                        <button onClick={() => onRemoveBook(book.id)} >Remove Book</button>
                        <button><Link to={`/book/${book.id}`}>Details</Link></button>
                        <button><Link to={`/book/edit/${book.id}`}>Edit</Link></button>          
                    </section>
                </li>
            )}
        </ul>
    )
}