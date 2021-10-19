//! Add books to list and local storage
const list = document.querySelector('#list');
const addBook = document.querySelector('#add-book');

addBook.addEventListener('click', function(){
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;

  localStorage.setItem(title, author);

  const li = document.createElement('li');
  const bookTitle = document.createElement('span');
  const bookAuthor = document.createElement('span');
  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = 'Remove';
  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  li.style.listStyleType = 'none';

  li.appendChild(bookTitle);
  li.appendChild(bookAuthor);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  title.value = '';
  author.value = '';

  console.log(li);
});
