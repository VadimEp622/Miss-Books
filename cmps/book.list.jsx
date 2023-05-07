import { BookPreview } from '../cmps/book-preview.jsx'

export function BookList(props) {

    return (
        <ul className="book-list">
            {props.books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section className="flex">
                        <button onClick={() => onRemoveBook(book.id)} >Remove Book</button>
                        <button onClick={() => onSelectBook(book)} >Select Book</button>
                    </section>
                </li>
            )}
        </ul>
    )
}