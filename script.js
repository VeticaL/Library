let mylibrary = [];

function Book(title, author, pages, read) {
 this.title = title
 this.author = author
 this.pages = pages
 this.read = read
}

function addBookRoLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read)
  mylibrary.push(book)
}


const fname = document.querySelector("#book")
const writer = document.querySelector("#Author")
const page = document.querySelector("#Pages")

function value() {
    let Name = fname.value
    let Writer = writer.value
    console.log(Name, Writer)
}



let book = new Book("yp", "djaj" , "ajkdl", 1)
console.log(book)