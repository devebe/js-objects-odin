function Book(title, author, pageCount, genre) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.genre = genre
}

function createHTML(location, html, id, type) {
    if (html === 'input') {
        let label = document.createElement('label')
        label.setAttribute('for', id)
        label.textContent = id
        document.getElementById(location).appendChild(label)
    }
    let child = document.createElement(html);
    if (html === 'button') {
        child.textContent = id
    }
    child.setAttribute('id', id);
    child.setAttribute('type', type);
    if (html === 'input') {
        child.setAttribute('placeholder', `Enter ${id}`)
        child.setAttribute('name', id)
    }
    document.getElementById(location).appendChild(child)
}

function addBookForm() {
    createHTML('main', 'form', "AddBookForm", 'form')
    createHTML('AddBookForm', 'input', "title", 'text') 
    createHTML('AddBookForm', 'input', "author", 'text')
    createHTML('AddBookForm', 'input', "amount of pages", 'text')
    createHTML('AddBookForm', 'input', "isRead", 'checkbox')
    createHTML('AddBookForm', 'button',"Submit", 'form')
}

document.getElementById('AddBook').addEventListener("click", addBookForm)

document.getElementById("Submit").addEventListener("click", () => {
    console.log("toegevoegd")
})