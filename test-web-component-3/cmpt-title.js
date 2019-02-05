(function() {
  class CmptTitle extends HTMLElement {
    constructor() {
      super();


      this.updateTitle = this.updateTitle.bind(this);
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
        <button type="button">change title</button>
      `;
      this.updateTitleBtn = this.shadowRoot.querySelector('button');
    }

    connectedCallback() {
      this.updateTitleBtn.addEventListener('click', this.updateTitle);

      if (!this.hasAttribute('newTitle')) {
        this.setAttribute('newTitle', 'test');
      }
    }
  }

  window.customElements.define('cmpt-title', CmptTitle);
})();