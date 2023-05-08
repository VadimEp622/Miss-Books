const { useState } = React

const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { BookIndex } from "./views/book-index.jsx"
import { BookEdit } from './views/book-edit.jsx'
import { BookDetails } from "./views/book-details.jsx"

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
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/bookIndex" element={<BookIndex />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}