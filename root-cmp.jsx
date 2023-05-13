const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from "./cmps/app-header.jsx"
import { UserMsg } from "./cmps/user-msg.jsx"
import { Vision } from "./cmps/vision.jsx"
import { Team } from "./cmps/team.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { BookIndex } from "./views/book-index.jsx"
import { BookEdit } from './views/book-edit.jsx'
import { BookDetails } from "./views/book-details.jsx"
import { BookAdd } from "./views/book-add.jsx"

export function App() {

    return (
        <Router>
            <section className="app main-layout">
                <AppHeader />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} >
                            <Route path="/about/vision" element={<Vision />} />
                            <Route path="/about/team" element={<Team />} />
                        </Route>
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                        <Route path="/google/newbook" element={<BookAdd />} />
                    </Routes>
                </main>
                <UserMsg />
            </section>
        </Router >
    )
}