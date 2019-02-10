import { LitElement, html } from 'lit-element';

class CmptTitle extends LitElement {
  static get properties() {
    return {
      customString: { type: String },
      customArray: { type: Array },
      customBoolean: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.customString = 'text for custom property';
    this.customArray = [1,2,3];
    this.customBoolean = true;
  }

  render(){
    return html`
        <h1>Web Component title</h1>
        <p>${this.customString}</p>
        <ul>${this.customArray.map(i => html`<li>${i}</li>`)}</ul>
        ${this.customBoolean ?
          html`<p>Render some HTML if myBool is true</p>`:
          html`<p>Render some other HTML if myBool is false</p>`}
        slot1: <slot name="one"></slot>
        slot2: <slot name="two"></slot>
    `;
  }
}

customElements.define('cmpt-title', CmptTitle);

