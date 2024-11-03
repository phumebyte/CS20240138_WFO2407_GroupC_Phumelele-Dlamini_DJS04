class SearchForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        
            <form data-search-form>
                <input type="text" name="title" placeholder="Search by title" />
                <select name="genre" data-search-genres></select>
                <select name="author" data-search-authors></select>
                <button type="submit">Search</button>
                <button type="button" data-search-cancel>Cancel</button>
            </form>
        `;
    }
}

customElements.define('search-form', SearchForm);