//! Add books to list
const list = document.querySelector('#list');
const addBook = document.querySelector('#add-book');

addBook.addEventListener('click', function(){
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;

  const li = document.createElement('li');
  const bookTitle = document.createElement('span');
  const bookAuthor = document.createElement('span');
  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = 'Remove';
  bookTitle.textContent = title;
  bookAuthor.textContent = author;

  li.appendChild(bookTitle);
  li.appendChild(bookAuthor);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  title.value = '';
  author.value = '';
})


console.log(addForm);