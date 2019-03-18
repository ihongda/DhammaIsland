import { LitElement, html, css } from 'lit-element';

class DhammaIslandNav extends LitElement {
    static get properties() {
        return {
            channels: { type: Array }
        }
    }

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.channels = [];
    }

    firstUpdated() {
        fetch('http://dhammaisland.com/Models/api.ashx?method=GetChannels')
        //fetch('/static/channels.json')
            .then((r) => r.json())
            .then((r) => {
                this.channels = r.Channels;
            });
    }

    render() {
        const { channels } = this;
        return html `
            <!-- <script type="text/javascript" src="http://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script> -->
            <script type="text/javascript" src="https://cdn.staticfile.org/twitter-bootstrap/4.2.1/js/bootstrap.min.js"></script>
            <link href="https://cdn.staticfile.org/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">
            
            <ul id="myTabs" class="nav nav-tabs"  role="tablist">
                ${channels.map((item) => {
                    return html`
                            <li class="nav-item">
                            <a class="nav-link"  id="tab_${item.ChannelID}" data-toggle="tab" href="#${item.ElementID}" role="tab" aria-controls="${item.ElementID}" aria-selected="false">${item.ChannelName} </a>
                            </li>
                        `;
                    })
                }
            </ul>
            <div class="tab-content">
                    ${channels.map((item) => {
                        return html `
    
                            <div class="tab-pane fade"  id="${item.ElementID}" role="tabpanel" aria-labelledby="tab_${item.ChannelID}">
                                <br />
                                <p>${item.ChannelName}</p>
                            </div>
                            `;
                    })
                }
            </div>
        `;
    }

    // _onTabClick(elementID) {
    //     e.preventDefault();
    //     var a = document.getElementById(elementID);
    //     $(a).tab('show');
    //     //console.log(elementID);
    // }

}

customElements.define('dhammaisland-nav', DhammaIslandNav);