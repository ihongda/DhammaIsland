import { LitElement, html, css } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

class DhammaPhrase extends LitElement {
    static get properties() {
        return {
            page: { type: Number },
            itemsPerPage: { type: Number },
            phrase: { type: Array },
            alertStyle: { type: Array },
            DhammaPhrase: { type: Array }
        };
    }

    constructor() {
        super();
        this.page = 1;
        this.itemsPerPage = 15;
        this.alertStyle = [
            "alert-primary",
            "alert-secondary",
            "alert-success",
            "alert-danger",
            "alert-warning",
            "alert-info",
            "alert-dark"
        ];
        this.DhammaPhrase = [];
    }

    firstUpdated() {
        fetch('/static/DhammaPhrase.json')
            .then((r) => r.json())
            .then((r) => {
                this.DhammaPhrase = r.DhammaPhrase;
            });
    }

    render() {
        function randomFrom(lowerValue, upperValue) {
            return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
        }
        return html`
            <link href="https://cdn.staticfile.org/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">
            </link>
            ${this.DhammaPhrase.map(item => html`
                <div class="alert ${this.alertStyle[randomFrom(0, 6)]}" role="alert">
                    ${unsafeHTML(item.dhamma)}
                </div>
            `)}
        `;
    }
}

customElements.define('dhamma-phrase', DhammaPhrase);