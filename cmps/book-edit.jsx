const { useEffect, useState, useRef } = React

export function BookEdit() {

    const nameRef = useRef('');
    const priceRef = useRef(0);



    return (
        <section className="book-edit">

            <article>
                <label>Enter price:</label>
                <input type="text" ref={nameRef} />
            </article>

            <article>
                <label>Enter name:</label>
                <input type="number" ref={priceRef} />
            </article>

            <button>Add book</button>
        </section>
    )
}