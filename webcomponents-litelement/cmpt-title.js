import { LitElement, html } from 'lit-element';

class CmptTitle extends LitElement {

  render(){
    return html`
        <h1>Web Component title</h1>
    `;
  }
}

customElements.define('cmpt-title', CmptTitle);

