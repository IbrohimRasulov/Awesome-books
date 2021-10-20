//! Add books to list
const list = document.querySelector('#list');
const addBook = document.querySelector('#add-book');

addBook.addEventListener('click', function(e){
  e.preventDefault();
  
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;

  addBookToStorage(title, author);

  console.log(li);
});

//! Store books in local storage
function addBookToStorage(title, author){
  localStorage.setItem(title, author);
}

//! Show books from local storage
document.addEventListener('DOMContentLoaded', function(){
  for (let i = 0; i < localStorage.length; i += 1) {
    const title = localStorage.key(i);
    const author = localStorage.getItem(localStorage.key(i));
  
    const li = document.createElement('li');
    const bookTitle = document.createElement('span');
    const bookAuthor = document.createElement('span');
    const deleteBtn = document.createElement('button');
  
    deleteBtn.textContent = 'Remove';
    deleteBtn.classList.add('remove');
    bookTitle.textContent = title;
    bookAuthor.textContent = author;
  
    li.classList.add('new-book');
    bookTitle.style.display = 'block';
    bookAuthor.style.display = 'block';
  
  
    li.appendChild(bookTitle);
    li.appendChild(bookAuthor);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
})

//! Delete books from list
document.body.addEventListener('click', function(e){
  if(e.target.classList.contains('remove')){
    e.target.parentElement.remove();
  }
})