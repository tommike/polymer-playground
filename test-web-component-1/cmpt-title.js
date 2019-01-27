(function() {
  class CmptTitle extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          h1 {
            font-size: 30px;
            line-height: 1.5;
            text-align: center;
          }
        </style>
        <h1>Web Component title</h1>
      `;
    }
  }

  window.customElements.define('cmpt-title', CmptTitle);
})();