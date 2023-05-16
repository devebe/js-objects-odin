let myLibrary = []

function Book(title, author, pageCount, genre) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.genre = genre
}

function viewBook(book) {
    let card = document.createElement('div')
    card.setAttribute('id', 'Book')
    card.setAttribute('class', 'card')
    for (let i = 0; i < Object.keys(book).length; i++) {
        let data = document.createElement('p')
        data.setAttribute('id',`${Object.keys(book)[i]}`)
        data.textContent = Object.values(book)[i]
        card.appendChild(data)
    }
    document.getElementById('main').appendChild(card)
}

function viewLibrary() {
    myLibrary.forEach((book) => {
        viewBook(book)
    })
}

let book1 = new Book("The Chronicles of Narnia", "C.S. Lewis", 200, "Fantasy")
let book2 = new Book("Harry Potter and The Chamber of Secrets", "J.K. Rowling", 400, "Fantasy")
let book3 = new Book("Thinking Fast and Slow", "Daniel Kahneman", 400, "Science")
myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)
/* displayBooks()
styleBooks() */