'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var CmptTitle = function (_HTMLElement) {
    _inherits(CmptTitle, _HTMLElement);

    function CmptTitle() {
      _classCallCheck(this, CmptTitle);

      var _this = _possibleConstructorReturn(this, (CmptTitle.__proto__ || Object.getPrototypeOf(CmptTitle)).call(this));

      _this.attachShadow({ mode: 'open' });
      _this.shadowRoot.innerHTML = '\n        <style>\n          h1 {\n            font-size: 30px;\n            line-height: 1.5;\n            text-align: center;\n          }\n        </style>\n        <h1>Web Component title</h1>\n      ';
      return _this;
    }

    return CmptTitle;
  }(HTMLElement);

  window.customElements.define('cmpt-title', CmptTitle);
})();