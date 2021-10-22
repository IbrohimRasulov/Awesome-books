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
        li.classList = 'list-group-item list-group-item-light oddBook';

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

const tabs = document.querySelector('.nav-pills')
const listBtn = document.querySelector('.section-1');
const addBtn = document.querySelector('.section-2');
const contactBtn = document.querySelector('.section-3');

tabs.addEventListener('click', function(e){
  if (e.target.textContent == 'List') {
    listBtn.classList.remove('hide');
    addBtn.classList.add('hide');
    contactBtn.classList.add('hide');
  } else if (e.target.textContent == 'Add new') {
    listBtn.classList.add('hide');
    addBtn.classList.remove('hide');
    contactBtn.classList.add('hide');
  } else {
    listBtn.classList.add('hide');
    addBtn.classList.add('hide');
    contactBtn.classList.remove('hide');

    // active[1].classList.remove('active');
    // active[2].classList.remove('active');
    // active[-1].classList.add('active');
  }
});
