let myLibrary = []

function Book(title, author, pageCount, genre, rating) {
    this.title = title
    this.author = author
    this.pageCount = `${pageCount} pages`
    this.genre = genre
    this.rating = rating
}

// View functions

function viewBook(book) {
    let card = document.createElement('div')
    let keys = Object.keys(book)

    card.setAttribute('id', `${book.id}`)
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

function viewField(key) {
    let field = document.createElement('div')
    field.setAttribute('class', key)
    field.setAttribute('id', 'field')

    let label = document.createElement('label')
    label.setAttribute('name', key)
    label.textContent = key

    let input = document.createElement('input')
    input.setAttribute('name', key)
    input.setAttribute('placeholder', `Enter ${key}`)
    input.setAttribute('type', 'text')
    input.setAttribute('id', key)

    field.appendChild(label)
    field.appendChild(input)

    return form.appendChild(field)
}

function viewLibrary() {
    document.getElementById('main').textContent = ''
    myLibrary.forEach((book) => {
        viewBook(book)
    })
    listenAfterDOMLoad()
}

function viewModal() {
    modal.style.display = 'grid'
    form.textContent = ''
    viewForm()
}

function viewForm() {
    let book = new Book()
    Object.keys(book).forEach((key) => viewField(key))
}

function closeModal() {
    modal.style.display = 'none'
}

// Event controllers

function listenAfterDOMLoad() {
    let buttons = document.querySelectorAll('button.remove')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            removeBookfromLibrary(e.target.id)
            })
        }
    )
}

function updateId(book) {
    if (!book.id) {
        if (myLibrary.length == 1) {
            Object.assign(book, { id : 1 });
        } 
        else {
            let lastId = myLibrary[myLibrary.length - 2].id;
            Object.assign(book, { id : lastId + 1 })
        }
    } 
}

function addBooktoLibrary() {
    let book = new Book()
    book.title = document.querySelector('input#title').value
    book.author = document.querySelector('input#author').value
    book.pageCount = document.querySelector('input#pageCount').value
    book.genre = document.querySelector('input#genre').value
    book.rating = document.querySelector('input#rating').value
    console.log(book)
    myLibrary.push(book)
    myLibrary.forEach((book) => {
        updateId(book)
    })
    viewLibrary()
    closeModal()
}

function removeBookfromLibrary(bookIndex) {
    let target = myLibrary.indexOf((myLibrary.find(element => element.id == bookIndex)))
    myLibrary.splice(target, 1)
    viewLibrary()
}

let modal = document.getElementById('modal')

let form = document.getElementById('modal-content')

const showModal = document.getElementById('add-book')
showModal.addEventListener('click', viewModal)

const hideModal = document.getElementById('close')
hideModal.addEventListener('click', closeModal)

let submit = document.getElementById('submit-book')
submit.addEventListener('click', addBooktoLibrary)