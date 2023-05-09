import { utilService } from "../services/util.service.js"

const { useState, useEffect } = React

export function BookAddFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
        // }, [])
    }, [filterByToEdit])

    function handleChange({ target }) {
        console.log('target.value', target.value)
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    // const debouncedHandleChange = utilService.debounce(handleChange, 2000)

    const { title } = filterByToEdit

    /* maxLength=1 temporary protection until debounce implemented */
    return (
        <input
            type="search" name="title"
            value={title} onChange={handleChange}
            placeholder="By Book Title" maxLength={92} />

    )
}