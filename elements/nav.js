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
        //fetch('http://dhammaisland.com/Models/api.ashx?method=GetChannels')
        fetch('/static/channels.json')
            .then((r) => r.json())
            .then((r) => {
                this.channels = r.Channels;
            });
    }

    render() {
            const { channels } = this;
            return html `
            <script type="text/javascript" src="http://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>
            <link href="https://cdn.staticfile.org/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">
            <script type="text/javascript" src="https://cdn.staticfile.org/twitter-bootstrap/4.2.1/js/bootstrap.min.js"></script>
            <ul id="myTabs" class="nav nav-tabs">
                ${channels.map((item) => {
                    return html`
                            <li class="nav-item">
                                <a class="nav-link" @click=${this._onTabClick} id="taba" href="#${item.ElementID}" >${item.ChannelName}</a>
                            </li>
                        `;
                    })
                }
            </ul>
            <div class="tab-content">
                    ${channels.map((item) => {
                        return html `
                            <div class="tab-pane fade" id="${item.ElementID}">
                                <br />
                                <p>${item.ChannelName}</p>
                            </div>
                            `;
                    })
                }
            </div>

        `;
    }
    _onTabClick(elementID) {
        // e.preventDefault();
        console.log(elementID);
        var a = this.shadowRoot.getElementById("DhammaTalks");
        $(a).tab('show');
        console.log(a);
    }

}

customElements.define('dhammaisland-nav', DhammaIslandNav);