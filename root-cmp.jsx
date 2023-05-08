const { useState } = React

const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { BookIndex } from "./views/book-index.jsx"
import { Home } from "./views/home.jsx"

export function App() {

    const [page, setPage] = useState('bookindex')


    function handlePageChange(page) {
        setPage(page)
    }

    return (
        <Router>
            <section className="app main-layout">

                <AppHeader handlePageChange={handlePageChange} />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/bookindex" element={<BookIndex />} />
                        <Route path="/book/edit/:bookid" />
                        <Route path="/book/edit" />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}