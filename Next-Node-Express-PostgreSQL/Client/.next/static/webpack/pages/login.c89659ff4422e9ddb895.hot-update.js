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
  var creds = Object(_lib_auth__WEBPACK_IMPORTED_MODULE_4__["checkCreds"])(values.username, values.password);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiQ29udGVudCIsIkZvb3RlciIsImxvZ2luIiwicm91dGVyIiwidXNlUm91dGVyIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsInJlbWVtYmVyIiwiZXhlY0xvZ2luIiwiY29sb3IiLCJ3aWR0aCIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm1hcmdpbkxlZnQiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRBbGlnbiIsImNyZWRzIiwiY2hlY2tDcmVkcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBSVFBLE0sR0FBNEJDLDJDLENBQTVCRCxNO0lBQVFFLE8sR0FBb0JELDJDLENBQXBCQyxPO0lBQVNDLE0sR0FBV0YsMkMsQ0FBWEUsTTtBQUNWLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFFOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixNQUF6QztBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLDJDQUFEO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUUsTUFBQyx5Q0FBRDtBQUFN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QUFHLFNBQVpBLFNBQVksQ0FBQ1AsTUFBRCxFQUFZO0FBQzVCLE1BQU1lLEtBQUssR0FBR0MsNERBQVUsQ0FBQ2hCLE1BQU0sQ0FBQ2lCLFFBQVIsRUFBaUJqQixNQUFNLENBQUNrQixRQUF4QixDQUF4QjtBQUVELENBSEQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYzg5NjU5ZmY0NDIyZTlkZGI4OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbm5lZWQgdG8gY2hhbmdlIGxheW91dCBidXR0b25zISEgRG9uZVxyXG5cclxuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja2JveCwgTGF5b3V0LCBNZW51LCBCcmVhZGNydW1iIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjaGVja0NyZWRzIH0gZnJvbSAnLi4vbGliL2F1dGgnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW4oKSB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHZhbHVlcyBvZiBmb3JtOiAnLCB2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgPEhlYWRlcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgIDxNZW51IHRoZW1lPVwiZGFya1wiIG1vZGU9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycxJ119PlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPkxvZ2luPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCIgb25DbGljaz17KCk9PnJvdXRlci5wdXNoKCcvJyl9PlJlZ2lzdGVyPC9NZW51Lkl0ZW0+IFxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L0hlYWRlcj5cclxuICAgIDxDb250ZW50PlxyXG4gICAgPEZvcm1cclxuICAgICAgc3R5bGU9e3twYWRkaW5nTGVmdDogXCI0MCVcIiwgcGFkZGluZ1RvcDpcIjEwJVwifX1cclxuICAgICAgbmFtZT1cIm5vcm1hbF9sb2dpblwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIlxyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgcmVtZW1iZXI6IHRydWUsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uRmluaXNoPXtleGVjTG9naW59XHJcbiAgICA+XHJcbiAgICAgIDxoMT5XZWxjb21lIHRvIDxzcGFuIHN0eWxlPXt7Y29sb3I6IFwiIzAwYTNjY1wifX0+SEFSSFVCPC9zcGFuPjwvaDE+XHJcbiAgICAgIDxici8+ICAgICBcclxuICAgICAgPGJyLz5cclxuICAgICAgPGJyLz5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6XCIyNTBwdFwifX1cclxuICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgVXNlcm5hbWUhJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dCBwcmVmaXg9ezxVc2VyT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fSBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6XCIyNTBwdFwifX1cclxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgUGFzc3dvcmQhJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicmVtZW1iZXJcIiB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiIG5vU3R5bGU+XHJcbiAgICAgICAgICA8Q2hlY2tib3g+UmVtZW1iZXIgbWU8L0NoZWNrYm94PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtID5cclxuICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMDBweFwifX0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1mb3Jnb3RcIiBocmVmPVwiXCI+XHJcbiAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmRcclxuICAgICAgICA8L2E+PC9zcGFuPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcblxyXG5cclxuICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWJ1dHRvblwiPlxyXG4gICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPHNwYW4gc3R5bGUgPXt7bWFyZ2luTGVmdDpcIjE2MHB4XCIsfX0+T3IgPC9zcGFuPjxhIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy8nKX0gc3R5bGU9e3tjb2xvcjpcImJsdWVcIix0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIn19PnJlZ2lzdGVyIG5vdyE8L2E+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gICAgPC9Db250ZW50PlxyXG4gICAgPEZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PiBIYXJodWIgwqkyMDIxIENyZWF0ZWQgYnkuLjwvRm9vdGVyPlxyXG4gIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBleGVjTG9naW4gPSAodmFsdWVzKSA9PiB7XHJcbiAgY29uc3QgY3JlZHMgPSBjaGVja0NyZWRzKHZhbHVlcy51c2VybmFtZSx2YWx1ZXMucGFzc3dvcmQpXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=