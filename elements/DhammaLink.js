import { LitElement, html, css } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

class DhammaLink extends LitElement {
    static get properties() {
        return {
            LinkType: { type: Number },
            CardStyle: { type: Array },
            DhammaLink: { type: Array },
            CardTitle: { type: Array },
            RequestURL: { type: Array }
        };
    }

    constructor(){
        super();
        this.CardStyle = [
            "",
            "border-primary",
            "border-success",
            "border-info"
        ];
        this.CardTitle = [
            "",
            "经律",
            "禅师法谈",
            "综合类网站"
        ];
        this.requestURL = [
            "",
            "/static/SuttaVinayaLink.json",
            "/static/BhanteDhammaTalks.json",
            "/static/DhammaWebsite.json"
        ];

        this.DhammaLink = [];
    }

    firstUpdated(){        
        if (this.LinkType === 0 || this.LinkType > 3){
            this.LinkType = 1;
        }
        console.log(this.requestURL[this.LinkType]);
        fetch(this.requestURL[this.LinkType])
            .then((r) => r.json())
            .then((r) => {
                this.DhammaLink = r.DhammaLink;
                console.log(this.DhammaLink);
            });
    }

    render() {
      return html`
          <link href="https://cdn.staticfile.org/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet"></link>
          <div class="card ${this.CardStyle[this.LinkType]}">
              <div class="card-header">
                  ${ this.CardTitle[this.LinkType] }
              </div>
              <ul class="list-group list-group-flush">
                  ${this.DhammaLink.map(item => html`
                      <li class="list-group-item">${item.Description}</li>
                  `)}
              </ul>
          </div>
      `;
  }
}

customElements.define('dhamma-link', DhammaLink);
