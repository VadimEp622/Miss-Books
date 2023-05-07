export function BookPreview(props){
    return (
        <article className="book-preview">
            <h2>Car Vendor: {props.book.name}</h2>
            <h4>Max Speed: {props.book.price}</h4>
        </article>
    )
}