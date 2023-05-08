const { Link, NavLink } = ReactRouterDOM


export function AppHeader({ onSetPage }) {

    return (
        <header className="app-header full main-layout">
            <h1>Miss Books App</h1>
            <nav className="app-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/bookindex">Book index</NavLink>
            </nav>
        </header>
    )
}