import { LitElement, html, css } from 'lit-element';

class DhammaIslandNav extends LitElement {

    static get properties() {
        return {
            channels: { type: Array }
        }
    }
    constructor() {
        super();
        this.channels = [];
    }

    firstUpdated() {
        fetch('http://dhammaisland.com/Models/api.ashx?method=GetChannels', { mode: 'no-cors' })
            .then((r) => r.json())
            .then((r) => {
                this.channels = r.results;
            });
    }

    render() {
            const { channels } = this;
            return html `
            <link href="https://cdn.staticfile.org/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">
            <ul id="myTabs" class="nav nav-tabs">
                ${channels.map((item) => {
                    return html`<
                            <li class="nav-item active">
                                <a class="nav-link" href="#home" id="${item.ElementID}">${item.ChannelName}</a>
                            </li>
                        `;
                    })
                }
            </ul>
        `;
    }
}

customElements.define('dhammaisland-nav', DhammaIslandNav);