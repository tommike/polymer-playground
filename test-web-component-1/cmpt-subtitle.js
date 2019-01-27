(function() {
  class CmptSubtitle extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          p {
            font-size: 20px;
            line-height: 1.5;
            text-align: center;
          }
        </style>
        <p>Web Component subtitle</p>
      `;
    }
  }

  window.customElements.define('cmpt-subtitle', CmptSubtitle);
})();