let myLibrary = []

function Book(title, author, pageCount, genre, id) {
    this.title = title
    this.author = author
    this.pageCount = `${pageCount} pages`
    this.genre = genre
    this.id = id
}

function viewBook(book) {
    let card = document.createElement('div')
    let keys = Object.keys(book)
    card.setAttribute('id', 'book')
    card.setAttribute('class', 'card')

    for (let i = 0; i < (keys.length - 1); i++) {
        let data = document.createElement('p')
        data.setAttribute('id',`${keys[i]}`)
        data.textContent = Object.values(book)[i]
        card.appendChild(data)
    }

    let actions = document.createElement('div')
    actions.setAttribute('id','actions')

    let remove = document.createElement('button')
    remove.setAttribute('id', `${book.id}`)
    remove.setAttribute('class', 'remove')
    remove.textContent = 'Remove'

    actions.appendChild(remove)
    card.appendChild(actions)

    document.getElementById('main').appendChild(card)
}

function setId(poep) {
    poep.length > 1 ? x : 1
}

function viewLibrary() {
    document.getElementById('main').textContent = ''
    myLibrary.forEach((book) => {
        viewBook(book)
    })
}

function addBooktoLibrary() {
    
}

let book1 = new Book("The Chronicles of Narnia", "C.S. Lewis", 200, "Fantasy",1)
let book2 = new Book("Harry Potter and The Chamber of Secrets", "J.K. Rowling", 400, "Fantasy",2)
let book3 = new Book("Thinking Fast and Slow", "Daniel Kahneman", 400, "Science",3)
myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)
/* displayBooks()
styleBooks() */