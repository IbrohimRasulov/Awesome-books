const list = document.querySelector('#list');
const form = document.querySelector('form');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  removeBook() {
    const key = this.title;
    localStorage.removeItem(key);
  }
}

/* eslint max-classes-per-file: ["error", 2] */

class Books {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
  }
}

const newBooks = new Books();

function addToLocalStorage() {
  const key = title.value;
  localStorage.setItem(key, JSON.stringify(newBooks));
}

function addNewBook() {
  newBooks.addBook(title.value, author.value);
  addToLocalStorage();
}

form.addEventListener('submit', addNewBook);

function showBook() {
  Object.keys(localStorage).forEach((key) => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(key));

    if (localStorage) {
      dataFromLocalStorage.books.forEach((book) => {
        const li = document.createElement('li');
        const bookTitle = document.createElement('span');
        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'Remove';
        bookTitle.textContent = `"${book.title}" by ${book.author}`;

        deleteBtn.classList = 'remove btn btn-danger btn-sm float-end';
        list.classList = 'list-group';
        li.classList = 'list-group-item list-group-item-light';

        deleteBtn.addEventListener('click', (e) => {
          const bookToDelete = new Book(book.title, book.author);
          e.target.parentNode.remove();
          bookToDelete.removeBook();
        });

        li.appendChild(bookTitle);
        li.appendChild(deleteBtn);
        list.appendChild(li);
      });
    }
  });
}

showBook();
