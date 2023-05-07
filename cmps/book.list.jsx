import { BookPreview } from '../cmps/book-preview.jsx'

export function BookList(props) {

    return (
        <ul className="book-list">
            {props.books.map(book =>
                <li key={book.name}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onRemoveBook(book.id)} >Remove Book</button>
                        <button onClick={() => onSelectBook(book)} >Select Book</button>
                    </section>
                </li>
            )}
        </ul>
    )
}