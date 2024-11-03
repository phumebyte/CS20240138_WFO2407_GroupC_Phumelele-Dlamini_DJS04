import { authors } from '../data.js';

class BookPreview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const author = this.getAttribute('author');
        const id = this.getAttribute('id');
        const image = this.getAttribute('image');
        const title = this.getAttribute('title');
        const authorName = authors[author];

        this.shadowRoot.innerHTML = `
            
            <button class="preview" data-preview="${id}">
                <img class="preview__image" src="${image}" alt="${title}" />
                <div class="preview__info">
                    <h3 class="preview__title">${title}</h3>
                    <div class="preview__author">${authorName}</div>
                </div>
            </button>
        `;
    }
}

customElements.define('book-preview', BookPreview);