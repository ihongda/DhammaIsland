import { LitElement, html, css } from 'lit-element';
//import { html, LitElement, css } from '/node_modules/lit-element/lit-element.js';

class DhammaIslandNavbar extends LitElement {
    render() {
        return html `
            <link href="https://cdn.staticfile.org/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">
            <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
                <span class="navbar-brand mb-0 h1">DhammaIsland-法洲</span>
            </nav>
        `;
    }
}

customElements.define('dhammaisland-navbar', DhammaIslandNavbar);