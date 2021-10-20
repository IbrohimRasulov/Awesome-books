const list = document.querySelector('#list');
const form = document.querySelector('form');
const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');

const bookArray = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  removeBook() {
    let key = this.title;
    localStorage.removeItem(key);
  }
}

class Books {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    let book = new Book(title, author);
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
        const bookAuthor = document.createElement('span');
        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'Remove';
        deleteBtn.classList.add('remove');
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;

        deleteBtn.addEventListener('click', (e) => {
          // const key = book.title;
          // localStorage.removeItem(key);
          const bookToDelete = new Book(book.title, book.author);
          e.target.parentNode.remove();
          bookToDelete.removeBook();
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
