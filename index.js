let myLibrary = []

function Book(title, author, pageCount, genre, rating) {
    this.title = title
    this.author = author
    this.pageCount = `${pageCount} pages`
    this.genre = genre
    this.rating = rating
}

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

function viewLibrary() {
    document.getElementById('main').textContent = ''
    myLibrary.forEach((book) => {
        viewBook(book)
    })
    listenAfterDOMLoad()
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

let modal = document.getElementById('modal')

let form = document.getElementById('modal-content')

function viewModal() {
    modal.style.display = 'grid'
    form.textContent = ''
    viewForm()
}

function viewField(key) {
    let field = document.createElement('div')
    field.setAttribute('name', key)

    let label = document.createElement('label')
    label.setAttribute('name', key)
    label.textContent = key

    let input = document.createElement('input')
    input.setAttribute('name', key)
    input.setAttribute('placeholder', `Enter ${key}`)
    input.setAttribute('type', 'text')

    field.appendChild(label)
    field.appendChild(input)

    return form.appendChild(field)
}

function viewForm() {
    let book = new Book()
    Object.keys(book).forEach((key) => viewField(key))
}

function closeModal() {
    modal.style.display = 'none'
}

const showModal = document.getElementById('add-book')
showModal.addEventListener('click', viewModal)

const hideModal = document.getElementById('close')
hideModal.addEventListener('click', closeModal)

function addBooktoLibrary(book) {
    myLibrary.push(book)
    myLibrary.forEach((book) => {
        updateId(book)
    })
}

function removeBookfromLibrary(bookIndex) {
    let target = myLibrary.indexOf((myLibrary.find(element => element.id == bookIndex)))
    myLibrary.splice(target, 1)
    viewLibrary()
}

function listenAfterDOMLoad() {
    let buttons = document.querySelectorAll('button.remove')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            removeBookfromLibrary(e.target.id)
            })
        }
    )

    return buttons
}