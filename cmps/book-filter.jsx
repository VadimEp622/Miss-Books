
const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)


    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    const { name, price } = filterByToEdit

    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>

            <form onSubmit={onSubmitFilter}>
                <label htmlFor="tnamext">Name:</label>
                <input value={name} onChange={handleChange} name="name" id="name" type="text" placeholder="By Book Name" />

                <label htmlFor="price">Price:</label>
                <input value={price} onChange={handleChange} type="number" name="price" id="price" placeholder="By Min Price" />

                <button>Filter Books</button>
            </form>

        </section>
    )
}