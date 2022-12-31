const form = document.getElementById("form");
const titleTxt = document.getElementById("title");
const authorTxt = document.getElementById("author");
const pagesTxt = document.getElementById("pages");
const readBtn = document.getElementById("readBtn");
const removeBtn = document.getElementById("removeBtn");
const cards = document.getElementById("cards");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBooktoLibrary(title, author, pages, read) {
  title = document.getElementById("Book").value;
  author = document.getElementById("Author").value;
  pages = document.getElementById("Pages").value;
  read = document.getElementById("read").value;

  let book = new Book(title, author, pages, read);
  mylibrary.push(book);
  titleTxt.innerHTML = title;
  authorTxt.innerHTML = author;
  pagesTxt.innerHTML = pages;

  console.log(book)
  event.preventDefault();
}

function toggleRead() {
  if(read === "on") {
    read = "off"
    readBtn.style.backgroundColor = "red";
  } else {
    read = "on"
    readBtn.style.backgroundColor = "green";
  }
}

function remove() {
  cards.remove();
}

form.addEventListener("submit", addBooktoLibrary);
readBtn.addEventListener("click", toggleRead);
removeBtn.addEventListener("click", remove);



