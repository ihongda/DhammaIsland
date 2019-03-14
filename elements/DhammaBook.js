import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { linq } from "https://unpkg.com/linq@3.1.1/linq.js";

class DhammaBook extends LitElement {
  static get properties() {
    return {
      BookID: { type: Number },
      DhammaBook: { type: Array },
      ShowCount: { type: Number }
    }
  }

  constructor() {
    super();
    this.BookID = 0;
    this.ShowCount = 3;
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
      <!-- <script type="text/javascript" src="/lib/linq.js"></script> -->
      <link href="https://cdn.staticfile.org/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">
      <div class="card-group">
        ${this.DhammaBook.map(item => html`
          <div class="card">
            <img class="card-img-top" src="http://neo.dhammaisland.com/UploadedFiles/BookCover/${ item.CoverPicture }" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${ item.BookName }</h5>
                <p class="card-text">${unsafeHTML(item.Introduction)}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">作者：${ item.Author }</small>
                <a href="${ item.DownloadLink }" class="btn btn-primary btn-sm" >下载</a>
                
              </div>
          </div>
        `)}
      </div>
    `;
  }
}

customElements.define('dhamma-book', DhammaBook);