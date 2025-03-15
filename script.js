const catalogContainer = document.querySelector(".book-catalog");
const footer = document.querySelector("footer");
const btn = footer.querySelector('.add-btn');
let id=0;
const catalog =[];
function Book(name, author, pages, id){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.id=id;
}
function start(){
    btn.addEventListener("click", ()=>{
        let tempName = prompt("Name of Book?");
        let tempAuthor = prompt("Name of Author?");
        let tempPages = prompt("Total Page Count?")
        addBook(new Book(tempName,tempAuthor,tempPages,id))
        id++;
    })
}
function addBook(book){
    catalog.push(book);
    let temp = document.createElement('div');
    temp.classList.add("book");

    tempTitle = document.createElement('div');
    tempTitle.textContent=book.name;
    tempTitle.classList.add("book-title");

    tempAuthor = document.createElement('div');
    tempAuthor.textContent="by " + book.author;
    tempAuthor.classList.add("book-author");


    tempPages = document.createElement('div');
    tempPages.textContent=book.pages;
    tempPages.classList.add("book-pages");

    tempBtn = document.createElement('button');
    tempBtn.textContent="Remove"
    tempBtn.classList.add("book-remove");
    tempBtn.addEventListener('click', ()=>{
        temp.remove();
        catalog.remove(book);
    })

    tempStatus=document.createElement('button');
    tempStatus.classList.add("not-read");
    tempStatus.textContent="Not Read";
    tempStatus.addEventListener("click", ()=>{
        if(tempStatus.textContent=="Not Read"){
            tempStatus.textContent="Read";
            tempStatus.classList.remove("not-read");
            tempStatus.classList.add("read");
        }else{
            tempStatus.textContent="Not Read"
            tempStatus.classList.remove("read");
            tempStatus.classList.add("not-read");
        }
    })

    temp.append(tempTitle);
    temp.append(tempAuthor);
    temp.append(tempPages);
    temp.append(tempBtn);
    temp.append(tempStatus);

    catalogContainer.append(temp);
}

