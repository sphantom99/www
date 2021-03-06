webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return landingPage; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Project-www\\www\\Next-Node-Express-PostgreSQL\\Client\\pages\\register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Header = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"].Footer;

function landingPage() {
  function handleRegister() {
    console.log(values);
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Layout"], {
    className: "layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"], {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['2'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 14
    }
  }, "Login"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Register"))), __jsx(Content, {
    style: {
      padding: '0 50px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    onFinish: handleRegister,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "email",
    label: "E-mail",
    rules: [{
      type: 'email',
      message: 'The input is not valid E-mail!'
    }, {
      required: true,
      message: 'Please input your E-mail!'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "password",
    label: "Password",
    rules: [{
      required: true,
      message: 'Please input your password!'
    }],
    hasFeedback: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "confirm",
    label: "Confirm Password",
    dependencies: ['password'],
    hasFeedback: true,
    rules: [{
      required: true,
      message: 'Please confirm your password!'
    }, function (_ref) {
      var getFieldValue = _ref.getFieldValue;
      return {
        validator: function validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }

          return Promise.reject(new Error('The two passwords that you entered do not match!'));
        }
      };
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "agreement",
    valuePropName: "checked",
    rules: [{
      validator: function validator(_, value) {
        return value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement'));
      }
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "I have read the", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/agreement",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 14
    }
  }, "agreement")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, "Register")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }))), __jsx(Footer, {
    style: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }, " Harhub \xA92021 Created by.."));
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiQ29udGVudCIsIkZvb3RlciIsImxhbmRpbmdQYWdlIiwiaGFuZGxlUmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwidmFsdWVzIiwicGFkZGluZyIsInR5cGUiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJnZXRGaWVsZFZhbHVlIiwidmFsaWRhdG9yIiwiXyIsInZhbHVlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0lBQ1FBLE0sR0FBNEJDLDJDLENBQTVCRCxNO0lBQVFFLE8sR0FBb0JELDJDLENBQXBCQyxPO0lBQVNDLE0sR0FBV0YsMkMsQ0FBWEUsTTtBQUN6QjtBQUVlLFNBQVNDLFdBQVQsR0FBd0I7QUFFckMsV0FBU0MsY0FBVCxHQUEyQjtBQUN6QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQVo7QUFFRDs7QUFDRCxTQUNFLE1BQUMsMkNBQUQ7QUFBUSxhQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFFRSxNQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFlBQXhCO0FBQXFDLHVCQUFtQixFQUFFLENBQUMsR0FBRCxDQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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RkYsRUF3RkUsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4RkYsQ0FOQSxFQWlHQSxNQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FqR0EsQ0FaQSxFQXFIQSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQXJIQSxDQURGO0FBMkhEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjU4Zjg5ODM1NjIxMDgzYTA0MjVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXQsIE1lbnUsIEJyZWFkY3J1bWIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0O1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFuZGluZ1BhZ2UgKCkge1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlZ2lzdGVyICgpIHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgIDxIZWFkZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgIDxNZW51IHRoZW1lPVwiZGFya1wiIG1vZGU9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycyJ119PlxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgXHQ8YT5Mb2dpbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5SZWdpc3RlcjwvTWVudS5JdGVtPlxuICAgICAgPC9NZW51PlxuICAgIDwvSGVhZGVyPlxuICAgIDxDb250ZW50IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDUwcHgnIH19PlxuICAgIDxSb3c+XG4gICAgICA8Q29sIHNwYW49ezh9PjwvQ29sPlxuICAgICAgPENvbCBzcGFuPXs4fT48YnIvPjwvQ29sPlxuICAgICAgPENvbCBzcGFuPXs4fT48L0NvbD5cbiAgICA8L1Jvdz5cbiAgICA8Um93PlxuICAgICAgPENvbCBzcGFuPXs4fT48L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17OH0+XG4gICAgICA8Rm9ybVxuICAgICAgICBvbkZpbmlzaCA9IHtoYW5kbGVSZWdpc3Rlcn1cbiAgICAgID5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgbGFiZWw9XCJFLW1haWxcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhlIGlucHV0IGlzIG5vdCB2YWxpZCBFLW1haWwhJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIEUtbWFpbCEnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dCAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgcGFzc3dvcmQhJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBoYXNGZWVkYmFja1xuICAgICAgPlxuICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJjb25maXJtXCJcbiAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XG4gICAgICAgIGhhc0ZlZWRiYWNrXG4gICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGNvbmZpcm0geW91ciBwYXNzd29yZCEnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgKHsgZ2V0RmllbGRWYWx1ZSB9KSA9PiAoe1xuICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZSgncGFzc3dvcmQnKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignVGhlIHR3byBwYXNzd29yZHMgdGhhdCB5b3UgZW50ZXJlZCBkbyBub3QgbWF0Y2ghJykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cblxuXG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJhZ3JlZW1lbnRcIlxuICAgICAgICB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiXG4gICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsaWRhdG9yOiAoXywgdmFsdWUpID0+XG4gICAgICAgICAgICAgIHZhbHVlID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1Nob3VsZCBhY2NlcHQgYWdyZWVtZW50JykpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxDaGVja2JveD5cbiAgICAgICAgICBJIGhhdmUgcmVhZCB0aGUgXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hZ3JlZW1lbnRcIj5cbiAgICAgICAgICAgIFx0PGE+YWdyZWVtZW50PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9DaGVja2JveD5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICA8L0Zvcm0+XG5cblxuXG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17OH0+PC9Db2w+XG4gICAgPC9Sb3c+XG5cbiAgICA8Um93PlxuICAgICAgPENvbCBzcGFuPXs4fT48L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17OH0+PC9Db2w+XG4gICAgICA8Q29sIHNwYW49ezh9PjwvQ29sPlxuICAgIDwvUm93PlxuXG4gICAgICBcbiAgICA8L0NvbnRlbnQ+XG4gICAgPEZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PiBIYXJodWIgwqkyMDIxIENyZWF0ZWQgYnkuLjwvRm9vdGVyPlxuICA8L0xheW91dD5cblxuICApXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9