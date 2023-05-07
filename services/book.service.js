import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'

_createBooks()

export const bookService = {
    query,
    getBook,
    removeBook,

}

function query() {
    storageService.query(BOOK_KEY)
    .then((book) => book)
}


// get book
function getBook(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

// remove book
function removeBook(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

// create demo data for books
function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    
    if (!books || !books.length) {
        books = []
        books.push(_createBook('lord of the rings', 150))
        books.push(_createBook('harry potter', 100))
        books.push(_createBook('the zohan', 300))
        books.push(_createBook('freedom', 500))
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

// create book
function _createBook(name, price) {
    const book = {
        id: utilService.makeId(),
        name,
        price,
    }
    return book
}