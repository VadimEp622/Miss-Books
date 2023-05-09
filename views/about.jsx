const { Outlet, NavLink } = ReactRouterDOM

export function About() {
    return (
        <section className="about">
            <h1>About Miss Books...</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque magnam porro perferendis eos fugit. Dolorum asperiores ducimus quisquam. Fugiat magnam dolores illum laboriosam, nostrum minima accusamus beatae dicta nemo!</p>
            <nav >
                <NavLink to="/about/team" >Team</NavLink>
                <NavLink to="/about/vision">Vision</NavLink>
            </nav>

            <section className="flex justify-center">
                <Outlet />
            </section>
        </section>
    )
}