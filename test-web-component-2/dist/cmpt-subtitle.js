'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var CmptSubtitle = function (_HTMLElement) {
    _inherits(CmptSubtitle, _HTMLElement);

    function CmptSubtitle() {
      _classCallCheck(this, CmptSubtitle);

      var _this = _possibleConstructorReturn(this, (CmptSubtitle.__proto__ || Object.getPrototypeOf(CmptSubtitle)).call(this));

      _this.attachShadow({ mode: 'open' });
      _this.shadowRoot.innerHTML = '\n        <style>\n          p {\n            font-size: 20px;\n            line-height: 1.5;\n            text-align: center;\n          }\n        </style>\n        <p>Web Component subtitle</p>\n      ';
      return _this;
    }

    return CmptSubtitle;
  }(HTMLElement);

  window.customElements.define('cmpt-subtitle', CmptSubtitle);
})();