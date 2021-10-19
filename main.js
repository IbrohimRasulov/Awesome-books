//! Add books to list and local storage
const list = document.querySelector('#list');
const addBook = document.querySelector('#add-book');

addBook.addEventListener('click', function(e){
  e.preventDefault();
  
  const title = document.querySelector('#book-title');
  const author = document.querySelector('#book-author');

  if(title !== undefined && author !== undefined){
    localStorage.setItem(title.value, author.value);
  }

  const li = document.createElement('li');
  const bookTitle = document.createElement('span');
  const bookAuthor = document.createElement('span');
  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = 'Remove';
  bookTitle.textContent = title.value;
  bookAuthor.textContent = author.value;

  li.classList.add('new-book');
  bookTitle.style.display = 'block';
  bookAuthor.style.display = 'block';


  li.appendChild(bookTitle);
  li.appendChild(bookAuthor);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  title.value = '';
  author.value = '';

  console.log(li);
});

//! Delete books from list
document.body.addEventListener('click', function(e){
  if(e.target.textContent == 'Remove'){
    e.target.parentElement.remove();
  }
})
