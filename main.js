const list = document.querySelector('#list');
const form = document.querySelector('form');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');

const bookArray = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addToLocalStorage() {
  const key = title.value;
  localStorage.setItem(key, JSON.stringify(bookArray));
}

function addNewBook() {
  const newBook = new Book(title.value, author.value);
  bookArray.push(newBook);
  addToLocalStorage();
}

form.addEventListener('submit', addNewBook);

function showBook() {
  Object.keys(localStorage).forEach((key) => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(key));

    if (localStorage) {
      dataFromLocalStorage.forEach((book) => {
        const li = document.createElement('li');
        const bookTitle = document.createElement('span');
        const bookAuthor = document.createElement('span');
        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'Remove';
        deleteBtn.classList.add('remove');
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;

        deleteBtn.addEventListener('click', (e) => {
          const key = book.title;
          localStorage.removeItem(key);

          e.target.parentNode.remove();
        });

        li.classList.add('new-book');
        bookTitle.style.display = 'block';
        bookAuthor.style.display = 'block';

        li.appendChild(bookTitle);
        li.appendChild(bookAuthor);
        li.appendChild(deleteBtn);
        list.appendChild(li);
      });
    }
  });
}

showBook();
