// const wrapper = document.getElementById("wrapper")
// console.log(wrapper);

// const banner = document.getElementById("page-banner")
// console.log(banner);

// const titles = document.getElementsByClassName("title")
// console.log(titles);

// const listItems = document.getElementsByTagName("li")
// console.log(Array.isArray(listItems));
// console.log(Array.from(listItems));

// const ul = document.querySelector("ul")
// console.log(ul);

// const list = document.querySelector("li")
// console.log(list);

// const lis = document.querySelectorAll("li")
// console.log(lis);





// const addForm = document.forms["add-book"]
// addForm.addEventListener("submit", (event)=>{
//     event.preventDefault()
//     const value = addForm.querySelector('input[type="text"]').value
//     // console.log(value);
//     const li = document.createElement("li")
//     const bookName = document.createElement("span")
//     bookName.textContent = value
//     const deleteBtn = document.createElement("span")
//     deleteBtn.textContent = "delete"
//     li.appendChild(bookName)
//     li.appendChild(deleteBtn)
//     bookList.appendChild(li)
//     bookName.classList.add("name")
//     deleteBtn.classList.add("delete")
//     addForm.reset()
// })





const bookList = document.querySelector("#book-list ul")

bookList.addEventListener("click", (event)=>{
    console.log(event)
    if(event.target.textContent === "delete"){
        const li = event.target.parentElement
        bookList.removeChild(li)
        // const li = event.target.closest("li")
        // li.remove()
    }
})



const addBookForm = document.getElementById("add-book")
addBookForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const value = addBookForm.querySelector("#add-book input").value.trim()

    if(value!==""){
    const {newLiTag, firstSpanTag, secondSpanTag} = createNewElements()

    addClassName(firstSpanTag, secondSpanTag)
    addTextContent(firstSpanTag, value, secondSpanTag)
    appendChildren(newLiTag, firstSpanTag, secondSpanTag)
    addBookForm.reset()
    }else{
        alert("Are you kidding me?... You wan die?... Please enter a book name!")
    }

})

function createNewElements(){
    let newLiTag = document.createElement("li")
    let firstSpanTag = document.createElement("span")
    let secondSpanTag = document.createElement("span")
    return {newLiTag, firstSpanTag, secondSpanTag}
}

function addClassName(firstSpanTag, secondSpanTag){
    firstSpanTag.classList.add("name")
    secondSpanTag.classList.add("delete")
}

function addTextContent(firstSpanTag, value, secondSpanTag){
    firstSpanTag.textContent = value
    secondSpanTag.textContent = "delete"
}

function appendChildren(newLiTag, firstSpanTag, secondSpanTag){
    newLiTag.appendChild(firstSpanTag)
    newLiTag.appendChild(secondSpanTag)
    bookList.appendChild(newLiTag)
}




const searchBook = document.querySelector("#search-books input")
const listOfBooks = document.getElementById("book-list")

searchBook.addEventListener("keyup", (event)=>{
    event.preventDefault()

    const searchTerm = event.target.value.toLowerCase()
    const books = listOfBooks.getElementsByTagName("li")
    for(let book of books){
       let title = book.firstElementChild.textContent.toLowerCase()
       if(title.includes(searchTerm)){
        book.style.display = "block"
       }else{
        book.style.display = "none"
       }
    }
}) 




