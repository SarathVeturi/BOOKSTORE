let myLibrary=[];
let bookCount=0, bookNumber=0, pageCount=0;
function Book(name,author,pages){
    this.name=name;
    this.author=author;
    this.pages=pages;
}

Book.prototype.info=function(){
    return `${this.name} is written by "${this.author}", has ${this.pages} pages, and ${this.status}`;
}

const submit=document.querySelector("#submit");
const tracker=document.querySelector("#tracker");
const tracker1=document.querySelector("#tracker1");
const tracker2=document.querySelector("#tracker2");

function addBookToLibrary(name, author, pages)
{
    myLibrary.push(new Book(name, author, pages));
    const div=document.createElement("div");
    const bName=document.createElement("h1");
    const bAuthor=document.createElement("h2");
    const bPages=document.createElement("h3");
    const bRead=document.createElement("button");
    const bDelete=document.createElement("button");
    const buttons=document.createElement("div");

    div.setAttribute("class", "books");
    buttons.setAttribute("class", "buttons");
    bRead.setAttribute("class", "readButton");
    bDelete.setAttribute("class", "delButton");

    bName.textContent=`"${myLibrary[bookCount].name.toUpperCase()}"`;
    bAuthor.textContent=`- By -  ${myLibrary[bookCount].author} -`;
    bPages.textContent=`Number of Pages: ${myLibrary[bookCount].pages}`;
    bRead.textContent="Read";
    bDelete.textContent="Delete";

    pageCount=Number(pageCount)+Number(pages);

    bDelete.addEventListener("click", function(){
        container.removeChild(div);
        bookNumber--;
        pageCount=pageCount-pages;
        tracker1.textContent=`You Have ${bookNumber} Books in Your Library`;
        tracker2.textContent=`Total PageCount: ${pageCount}`;    
    });

    bRead.addEventListener("click", function(){
        if(bRead.getAttribute("class")==="readButton")
        {
            bRead.textContent="Marked As Read";
            bRead.style.backgroundColor='green';
            bRead.style.color='white';
            bRead.removeAttribute("class", "readButton");
            bRead.setAttribute("class", "notReadButton");
        }
        else{
            bRead.textContent="Read";
            bRead.style.backgroundColor="rgb(167, 175, 189)";
            bRead.removeAttribute("class", "notReadButton");
            bRead.setAttribute("class", "readButton");
        }
    });

    bookNumber++;bookCount++;
    tracker1.textContent=`You Have ${bookNumber} Books in Your Library`;
    tracker2.textContent=`Total PageCount: ${pageCount}`;
    container.appendChild(div);
    div.appendChild(bName);
    div.appendChild(bAuthor);
    div.appendChild(bPages);
    div.appendChild(buttons);
    buttons.appendChild(bRead);
    buttons.appendChild(bDelete);
}
 
tracker1.textContent= "You don't have any books, add some";
submit.addEventListener("click", function(){
    name=prompt("Name of the Book:");
    author=prompt("Author name:");
    pages=prompt("Number of pages:");
    addBookToLibrary(name, author,pages);
});