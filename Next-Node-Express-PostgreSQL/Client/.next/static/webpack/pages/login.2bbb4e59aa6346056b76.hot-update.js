webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/auth */ "./lib/auth.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1\\7\\WEB\\project\\www\\Next-Node-Express-PostgreSQL\\Client\\pages\\login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*
need to change layout buttons!! Done


*/





var Header = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Footer;
function login() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var onFinish = function onFinish(values) {
    console.log('Received values of form: ', values);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    className: "layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['1'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Login"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "2",
    onClick: function onClick() {
      return router.push('/');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Register"))), __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      paddingLeft: "40%",
      paddingTop: "10%"
    },
    name: "normal_login",
    className: "login-form",
    initialValues: {
      remember: true
    },
    onFinish: execLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Welcome to ", __jsx("span", {
    style: {
      color: "#00a3cc"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 22
    }
  }, "HARHUB")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    style: {
      width: "250pt"
    },
    name: "username",
    rules: [{
      required: true,
      message: 'Please input your Username!'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
      className: "site-form-item-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 24
      }
    }),
    placeholder: "Username",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    style: {
      width: "250pt"
    },
    name: "password",
    rules: [{
      required: true,
      message: 'Please input your Password!'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LockOutlined"], {
      className: "site-form-item-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }),
    type: "password",
    placeholder: "Password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "remember",
    valuePropName: "checked",
    noStyle: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "Remember me")), __jsx("span", {
    style: {
      marginLeft: "100px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "login-form-forgot",
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "Forgot password"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    className: "login-form-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "Log in"), __jsx("span", {
    style: {
      marginLeft: "160px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Or "), __jsx("a", {
    onClick: function onClick() {
      return router.push('/');
    },
    style: {
      color: "blue",
      textDecoration: "underline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 56
    }
  }, "register now!")))), __jsx(Footer, {
    style: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, " Harhub \xA92021 Created by.."));
}

_s(login, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

;

var execLogin = function execLogin(values) {
  //console.log(values.username,values.password)
  var creds = Object(_lib_auth__WEBPACK_IMPORTED_MODULE_4__["checkCreds"])(values.username, values.password);
  /*
  if(creds==true){
    router.push(`./${values.username}/upload`)
  }*/
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiQ29udGVudCIsIkZvb3RlciIsImxvZ2luIiwicm91dGVyIiwidXNlUm91dGVyIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsInJlbWVtYmVyIiwiZXhlY0xvZ2luIiwiY29sb3IiLCJ3aWR0aCIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm1hcmdpbkxlZnQiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRBbGlnbiIsImNyZWRzIiwiY2hlY2tDcmVkcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBSVFBLE0sR0FBNEJDLDJDLENBQTVCRCxNO0lBQVFFLE8sR0FBb0JELDJDLENBQXBCQyxPO0lBQVNDLE0sR0FBV0YsMkMsQ0FBWEUsTTtBQUNWLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFFOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixNQUF6QztBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLDJDQUFEO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUUsTUFBQyx5Q0FBRDtBQUFN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QUFHLFNBQVpBLFNBQVksQ0FBQ1AsTUFBRCxFQUFZO0FBQzVCO0FBQ0EsTUFBTWUsS0FBSyxHQUFHQyw0REFBVSxDQUFDaEIsTUFBTSxDQUFDaUIsUUFBUixFQUFpQmpCLE1BQU0sQ0FBQ2tCLFFBQXhCLENBQXhCO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQyxDQVBEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjJiYmI0ZTU5YWE2MzQ2MDU2Yjc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5uZWVkIHRvIGNoYW5nZSBsYXlvdXQgYnV0dG9ucyEhIERvbmVcclxuXHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3gsIExheW91dCwgTWVudSwgQnJlYWRjcnVtYiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY2hlY2tDcmVkcyB9IGZyb20gJy4uL2xpYi9hdXRoJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuXHJcblxyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKCkge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCB2YWx1ZXMgb2YgZm9ybTogJywgdmFsdWVzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgIDxIZWFkZXI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICA8TWVudSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5Mb2dpbjwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCgnLycpfT5SZWdpc3RlcjwvTWVudS5JdGVtPiBcclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgICA8Q29udGVudD5cclxuICAgIDxGb3JtXHJcbiAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiNDAlXCIsIHBhZGRpbmdUb3A6XCIxMCVcIn19XHJcbiAgICAgIG5hbWU9XCJub3JtYWxfbG9naW5cIlxyXG4gICAgICBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCJcclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIHJlbWVtYmVyOiB0cnVlLFxyXG4gICAgICB9fVxyXG4gICAgICBvbkZpbmlzaD17ZXhlY0xvZ2lufVxyXG4gICAgPlxyXG4gICAgICA8aDE+V2VsY29tZSB0byA8c3BhbiBzdHlsZT17e2NvbG9yOiBcIiMwMGEzY2NcIn19PkhBUkhVQjwvc3Bhbj48L2gxPlxyXG4gICAgICA8YnIvPiAgICAgXHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBzdHlsZT17e3dpZHRoOlwiMjUwcHRcIn19XHJcbiAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFVzZXJuYW1lIScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQgcHJlZml4PXs8VXNlck91dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn0gcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuXHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBzdHlsZT17e3dpZHRoOlwiMjUwcHRcIn19XHJcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIFBhc3N3b3JkIScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInJlbWVtYmVyXCIgdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIiBub1N0eWxlPlxyXG4gICAgICAgICAgPENoZWNrYm94PlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbSA+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTAwcHhcIn19PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tZm9yZ290XCIgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgRm9yZ290IHBhc3N3b3JkXHJcbiAgICAgICAgPC9hPjwvc3Bhbj5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG5cclxuXHJcbiAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1idXR0b25cIj5cclxuICAgICAgICAgIExvZyBpblxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlID17e21hcmdpbkxlZnQ6XCIxNjBweFwiLH19Pk9yIDwvc3Bhbj48YSBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKCcvJyl9IHN0eWxlPXt7Y29sb3I6XCJibHVlXCIsdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCJ9fT5yZWdpc3RlciBub3chPC9hPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvRm9ybT5cclxuICAgIDwvQ29udGVudD5cclxuICAgIDxGb290ZXIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT4gSGFyaHViIMKpMjAyMSBDcmVhdGVkIGJ5Li48L0Zvb3Rlcj5cclxuICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZXhlY0xvZ2luID0gKHZhbHVlcykgPT4ge1xyXG4gIC8vY29uc29sZS5sb2codmFsdWVzLnVzZXJuYW1lLHZhbHVlcy5wYXNzd29yZClcclxuICBjb25zdCBjcmVkcyA9IGNoZWNrQ3JlZHModmFsdWVzLnVzZXJuYW1lLHZhbHVlcy5wYXNzd29yZClcclxuICAvKlxyXG4gIGlmKGNyZWRzPT10cnVlKXtcclxuICAgIHJvdXRlci5wdXNoKGAuLyR7dmFsdWVzLnVzZXJuYW1lfS91cGxvYWRgKVxyXG4gIH0qL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=