const { useEffect, useState, useRef } = React

export function BookEdit() {

    const nameRef = useRef('');
    const priceRef = useRef(0);


    return (
        <div>

            <label >Enter price</label>
            <input type="text" ref={nameRef} />

            <label >Enter name</label>
            <input type="number" ref={priceRef} />

            <button >Add book</button>
        </div>
    )
}