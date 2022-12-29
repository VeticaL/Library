const btnActive = document.querySelector(".btnActive");
const book = document.querySelector("#book");
const Author = document.querySelector("#Author");
const Pages = document.querySelector("#Pages");
const checkbox = document.querySelector("#checkbox");
const submit = document.querySelector(".submit");

btnActive.style.display = "none";

function showform() {
    if (btnActive.style.display !== "none") {
        btnActive.style.display = "none";
      } else {
        btnActive.style.display = "flex";
      }
}

function value() {
    
    let author = Author.value
    let pages = Pages.value
    let isread = checkbox.value
    console.log(title, author, pages, isread)
    console.log("da")
}





// let mylibrary = [];

// function book(title, author, pages, isread) {
//  this.title = title
//  this.author = author
//  this.pages = pages
//  this.isread = isread
// }

// function addBookRoLibrary() {

// }