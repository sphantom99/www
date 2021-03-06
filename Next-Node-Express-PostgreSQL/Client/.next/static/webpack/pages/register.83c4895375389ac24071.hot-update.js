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
  function handleRegister(vaues) {
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
    onFinish: function onFinish() {
      return handleRegister();
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiQ29udGVudCIsIkZvb3RlciIsImxhbmRpbmdQYWdlIiwiaGFuZGxlUmVnaXN0ZXIiLCJ2YXVlcyIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZXMiLCJwYWRkaW5nIiwidHlwZSIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsImdldEZpZWxkVmFsdWUiLCJ2YWxpZGF0b3IiLCJfIiwidmFsdWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7SUFDUUEsTSxHQUE0QkMsMkMsQ0FBNUJELE07SUFBUUUsTyxHQUFvQkQsMkMsQ0FBcEJDLE87SUFBU0MsTSxHQUFXRiwyQyxDQUFYRSxNO0FBQ3pCO0FBRWUsU0FBU0MsV0FBVCxHQUF3QjtBQUVyQyxXQUFTQyxjQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQVo7QUFFRDs7QUFDRCxTQUNFLE1BQUMsMkNBQUQ7QUFBUSxhQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFFRSxNQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFlBQXhCO0FBQXFDLHVCQUFtQixFQUFFLENBQUMsR0FBRCxDQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBM0VBLENBREEsQ0FGRixFQXdGRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhGRixDQU5BLEVBaUdBLE1BQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQWpHQSxDQVpBLEVBcUhBLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBckhBLENBREY7QUEySEQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuODNjNDg5NTM3NTM4OWFjMjQwNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dCwgTWVudSwgQnJlYWRjcnVtYiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYW5kaW5nUGFnZSAoKSB7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVnaXN0ZXIgKHZhdWVzKSB7XG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcblxuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICA8SGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICA8TWVudSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMiddfT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgIFx0PGE+TG9naW48L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+UmVnaXN0ZXI8L01lbnUuSXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICA8L0hlYWRlcj5cbiAgICA8Q29udGVudCBzdHlsZT17eyBwYWRkaW5nOiAnMCA1MHB4JyB9fT5cbiAgICA8Um93PlxuICAgICAgPENvbCBzcGFuPXs4fT48L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17OH0+PGJyLz48L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17OH0+PC9Db2w+XG4gICAgPC9Sb3c+XG4gICAgPFJvdz5cbiAgICAgIDxDb2wgc3Bhbj17OH0+PC9Db2w+XG4gICAgICA8Q29sIHNwYW49ezh9PlxuICAgICAgPEZvcm1cbiAgICAgICAgb25GaW5pc2ggPSB7KCk9PmhhbmRsZVJlZ2lzdGVyKCl9XG4gICAgICA+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgIGxhYmVsPVwiRS1tYWlsXCJcbiAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsIScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBFLW1haWwhJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8SW5wdXQgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgaGFzRmVlZGJhY2tcbiAgICAgID5cbiAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBuYW1lPVwiY29uZmlybVwiXG4gICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgIGRlcGVuZGVuY2llcz17WydwYXNzd29yZCddfVxuICAgICAgICBoYXNGZWVkYmFja1xuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBjb25maXJtIHlvdXIgcGFzc3dvcmQhJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICh7IGdldEZpZWxkVmFsdWUgfSkgPT4gKHtcbiAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoJ3Bhc3N3b3JkJykgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1RoZSB0d28gcGFzc3dvcmRzIHRoYXQgeW91IGVudGVyZWQgZG8gbm90IG1hdGNoIScpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG5cblxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBuYW1lPVwiYWdyZWVtZW50XCJcbiAgICAgICAgdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcjogKF8sIHZhbHVlKSA9PlxuICAgICAgICAgICAgICB2YWx1ZSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdTaG91bGQgYWNjZXB0IGFncmVlbWVudCcpKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8Q2hlY2tib3g+XG4gICAgICAgICAgSSBoYXZlIHJlYWQgdGhlIFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWdyZWVtZW50XCI+XG4gICAgICAgICAgICBcdDxhPmFncmVlbWVudDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgPC9Gb3JtPlxuXG5cblxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIHNwYW49ezh9PjwvQ29sPlxuICAgIDwvUm93PlxuXG4gICAgPFJvdz5cbiAgICAgIDxDb2wgc3Bhbj17OH0+PC9Db2w+XG4gICAgICA8Q29sIHNwYW49ezh9PjwvQ29sPlxuICAgICAgPENvbCBzcGFuPXs4fT48L0NvbD5cbiAgICA8L1Jvdz5cblxuICAgICAgXG4gICAgPC9Db250ZW50PlxuICAgIDxGb290ZXIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT4gSGFyaHViIMKpMjAyMSBDcmVhdGVkIGJ5Li48L0Zvb3Rlcj5cbiAgPC9MYXlvdXQ+XG5cbiAgKVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==