import { LitElement, html, css } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

class DhammaLink extends LitElement {
    
    static get properties() {
        return {
            LinkType: { type: Number },
            CardStyle: { type: Array },
            DhammaLink: { type: Array },
            CardTitle: { type: String}            
        };
    }

    constructor(){
        super();
        this.CardStyle = [
            "border-primary",
            "border-success",
            "border-info"
        ]
    }

    firstUpdated(){
        let requestURL = "";
        switch(this.LinkType){
            case 1:
                requestURL = "/static/SuttaVinayaLink.json";
                CardTitle = "经律";
                break;
            case 2:
                requestURL = "/static/BhanteDhammaTalks.json";
                CardTitle = "禅师法谈";
                break;
            case 3:
                requestURL = "/static/DhammaWebsite.json";
                CardTitle = "综合类网站";
                break;                             
            default:
                requestURL = "/static/SuttaVinayaLink.json";     
        }
        fetch(requestURL)
            .then((r) => r.json())
            .then((r) => {
                this.DhammaLink = r.DhammaLink;
            });
    }

    render() {
      return html`
          <link href="https://cdn.staticfile.org/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet"></link>
          <div class="card ${this.CardStyle[this.LinkType]}">
              <div class="card-header">
                  ${ this.CardTitle }
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
