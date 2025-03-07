const catalogContainer = document.querySelector(".container");
const catalog =[];
function book(name, author, pages, id){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.id=id;
}
function addBook(book){
    catalog.push(book);
}