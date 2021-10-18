const bookList = [];

const title = document.querySelector('#bookTitle');
const author = document.querySelector('#bookAuthor');
const btn = document.querySelector('#addBtn');
const booklist = document.querySelector('ul');

btn.addEventListener('click', function(){
  const newBook = document.createElement('li');
  const bookTitle = document.createElement('span');
  const bookAuthor = document.createElement('span');
  const deleteBtn = document.createElement('button');
  
  bookTitle.innerText = title;
  console.log(bookTitle);
})
