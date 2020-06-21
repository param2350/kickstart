'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Practice\\blockchain\\kickstart\\components\\layout.js';


if (typeof window != 'undefined') {
  setTimeout(function (_) {
    if (window.ethereum) {
      console.log("hey");

      try {
        window.ethereum.enable().then(function () {

          console.log('ethereum enable');
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('You have to install Metmask!');
    }
  }, 5000);
}

exports.default = function (props) {

  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })), _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIkhlYWQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZXRoZXJldW0iLCJjb25zb2xlIiwibG9nIiwiZW5hYmxlIiwidGhlbiIsImUiLCJhbGVydCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFHLE9BQUEsQUFBTyxVQUFWLEFBQW9CLGFBQWEsQUFDN0I7YUFBVyxhQUFLLEFBQ1o7UUFBRyxPQUFILEFBQVUsVUFBUyxBQUNqQjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O1VBQUksQUFDRjtlQUFBLEFBQU8sU0FBUCxBQUFnQixTQUFoQixBQUF5QixLQUFLLFlBQVcsQUFFdkM7O2tCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFIRCxBQUtEO0FBTkQsUUFPQSxPQUFBLEFBQU0sR0FBRyxBQUNQO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFDRjtBQWJELFdBZUssQUFDSDtZQUFBLEFBQU0sQUFDUDtBQUNGO0FBbkJILEtBQUEsQUFtQkssQUFFUjtBQUVEOztrQkFBZSxpQkFBUyxBQUVwQjs7eUJBQ0ksQUFBQzs7Z0JBQUQ7a0JBQUEsQUFHSTtBQUhKO0FBQUEsR0FBQTs7Z0JBR0k7a0JBSEosQUFHSSxBQUVBO0FBRkE7QUFBQSxzQkFFQSxBQUFDOztnQkFBRDtrQkFBQSxBQUNBO0FBREE7QUFBQTtTQUNBLEFBQ1EsQUFDSjtVQUZKLEFBRVM7Z0JBRlQ7a0JBTkosQUFLSSxBQUNBLEFBTUE7QUFOQTtBQUNJLHVCQUtKLEFBQUM7O2dCQUFEO2tCQVpKLEFBWUksQUFDQTtBQURBO0FBQUE7O2dCQUNBO2tCQWJKLEFBYUksQUFFRTtBQUZGO0FBQUEsWUFkUixBQUNJLEFBZVksQUFPbkI7QUF6QkQiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkU6L1ByYWN0aWNlL2Jsb2NrY2hhaW4va2lja3N0YXJ0In0=