//import { authors } from './data.js';
import './custom/book-preview.js'

/**
 * Creates an HTML button element representing a book.
 * @param {Object} book - The book object.
 * @param {string} book.author - The ID of the author.
 * @param {string} book.id - The ID of the book.
 * @param {string} book.image - The URL of the book's image.
 * @param {string} book.title - The title of the book.
 * @returns {HTMLButtonElement} The HTML button element representing the book.
 */

// Function to create an HTML element for a book
export function createBookElement({ author, id, image, title }) {
    const bookElement = document.createElement('book-preview');
    bookElement.setAttribute('author', author);
    bookElement.setAttribute('id', id);
    bookElement.setAttribute('image', image);
    bookElement.setAttribute('title', title);
    return bookElement;
}

/**
 * Renders a list of books.
 * @param {Array<Object>} bookList - The list of books to render.
 */

// Function to render a list of books
export function renderBookList(bookList) {
    const initialBookList = document.createDocumentFragment();
    for (const book of bookList) {
        initialBookList.appendChild(createBookElement(book));
    }
    document.querySelector('[data-list-items]').appendChild(initialBookList);
}

/**
 * Creates HTML option elements for genres or authors.
 * @param {Object} data - The data object containing genres or authors.
 * @param {string} defaultText - The default option text.
 * @returns {DocumentFragment} The document fragment containing the option elements.
 */

// Function to create options for genres and authors
export function createOptionElements(data, defaultText) {
    const fragment = document.createDocumentFragment();
    const defaultOption = document.createElement('option');
    defaultOption.value = 'any';
    defaultOption.innerText = defaultText;
    fragment.appendChild(defaultOption);

    for (const [id, name] of Object.entries(data)) {
        const optionElement = document.createElement('option');
        optionElement.value = id;
        optionElement.innerText = name;
        fragment.appendChild(optionElement);
    }
    return fragment;
}

/**
 * Handles the theme change for the application.
 * @param {string} theme - The theme to apply ('day' or 'night').
 */

// Function to handle theme change
export function toggleTheme(theme) {
    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
}