function Book(title, author, pageCount, genre) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.genre = genre
}

function createHTML(location, html, id, type, num) {
    for (let i = 0; i < num; i++) {
        let child = document.createElement(html);
        child.setAttribute('id', id);
        child.setAttribute('type', type);
        document.getElementById(location).appendChild(child);
    }
}

createHTML('main', 'form', "AddBookForm", 'form', 1);
createHTML('AddBookForm', 'input', "title", 'text', 2);


