const { Link, NavLink } = ReactRouterDOM


export function AppHeader({ onSetPage }) {

    return (
        <header className="app-header full main-layout">
            <h1>Miss Books App</h1>
            <nav className="app-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book">Our Books</NavLink>
                <NavLink to="/book/edit">New Book</NavLink>
                <NavLink to="/google/newbook">Add google book</NavLink>
            </nav>
        </header>
    )
}