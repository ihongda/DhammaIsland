import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

class DhammaBook extends LitElement {
  static get properties() {
    return {
      BookID: { type: Number },
      DhammaBook: { type: Array }
    }
  }

  constructor() {
    super();
    this.BookID = 0;
  }

  firstUpdated() {
    fetch('/static/DhammaBook.json')
      .then((r) => r.json())
      .then((r) => {
        this.DhammaBook = r.DhammaBook;
      });
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  _render({}) {
    return html`

    `;
  }
}

customElements.define('dhamma-book', DhammaBook);