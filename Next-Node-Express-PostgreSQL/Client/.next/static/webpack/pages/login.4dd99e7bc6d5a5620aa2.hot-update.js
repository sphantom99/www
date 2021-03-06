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





 //import jsCookie from 'js-cookie';

var Header = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Footer;
function login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      match = _useState.match,
      setMatch = _useState.setMatch;

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
      paddingTop: "10%",
      borderColor: "#001529"
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

_s(login, "jhRmocjgVzsEB1FiJrEoDNv8SOc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

;

var execLogin = function execLogin(values) {
  //console.log(values.username,values.password)
  var creds = Object(_lib_auth__WEBPACK_IMPORTED_MODULE_4__["checkCreds"])(values.username, values.password);
  sessionStorage.setItem('matched', true);
  console.log(localStorage.getItem('matched'));
  /*
  if(creds==true){
    router.push(`./${values.username}/upload`)
  }
  else
  {
    setMatch(false)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiQ29udGVudCIsIkZvb3RlciIsImxvZ2luIiwidXNlU3RhdGUiLCJtYXRjaCIsInNldE1hdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsImJvcmRlckNvbG9yIiwicmVtZW1iZXIiLCJleGVjTG9naW4iLCJjb2xvciIsIndpZHRoIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWFyZ2luTGVmdCIsInRleHREZWNvcmF0aW9uIiwidGV4dEFsaWduIiwiY3JlZHMiLCJjaGVja0NyZWRzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0lBRVFBLE0sR0FBNEJDLDJDLENBQTVCRCxNO0lBQVFFLE8sR0FBb0JELDJDLENBQXBCQyxPO0lBQVNDLE0sR0FBV0YsMkMsQ0FBWEUsTTtBQUNWLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxLQUFELENBREo7QUFBQSxNQUN2QkMsS0FEdUIsYUFDdkJBLEtBRHVCO0FBQUEsTUFDaEJDLFFBRGdCLGFBQ2hCQSxRQURnQjs7QUFFOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixNQUF6QztBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFD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LEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSmpELENBM0RGLENBREEsQ0FSQSxFQTRFQSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQTVFQSxDQURGO0FBZ0ZEOztHQXZGdUJ0QixLO1VBRVBLLHFEOzs7QUFxRmhCOztBQUVELElBQU1VLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNSLE1BQUQsRUFBWTtBQUM1QjtBQUNBLE1BQU1nQixLQUFLLEdBQUdDLDREQUFVLENBQUNqQixNQUFNLENBQUNrQixRQUFSLEVBQWlCbEIsTUFBTSxDQUFDbUIsUUFBeEIsQ0FBeEI7QUFDQUMsZ0JBQWMsQ0FBQ0MsT0FBZixDQUF1QixTQUF2QixFQUFpQyxJQUFqQztBQUNBcEIsU0FBTyxDQUFDQyxHQUFSLENBQVlvQixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBWjtBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyxDQWJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjRkZDk5ZTdiYzZkNWE1NjIwYWEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5uZWVkIHRvIGNoYW5nZSBsYXlvdXQgYnV0dG9ucyEhIERvbmVcclxuXHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3gsIExheW91dCwgTWVudSwgQnJlYWRjcnVtYiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY2hlY2tDcmVkcyB9IGZyb20gJy4uL2xpYi9hdXRoJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuLy9pbXBvcnQganNDb29raWUgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgY29uc3Qge21hdGNoLCBzZXRNYXRjaH0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCB2YWx1ZXMgb2YgZm9ybTogJywgdmFsdWVzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgIDxIZWFkZXI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICA8TWVudSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5Mb2dpbjwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCgnLycpfT5SZWdpc3RlcjwvTWVudS5JdGVtPiBcclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgICA8Q29udGVudD5cclxuICAgIDxGb3JtXHJcbiAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiNDAlXCIsIHBhZGRpbmdUb3A6XCIxMCVcIiwgYm9yZGVyQ29sb3I6XCIjMDAxNTI5XCJ9fVxyXG4gICAgICBuYW1lPVwibm9ybWFsX2xvZ2luXCJcclxuICAgICAgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICByZW1lbWJlcjogdHJ1ZSxcclxuICAgICAgfX1cclxuICAgICAgb25GaW5pc2g9e2V4ZWNMb2dpbn1cclxuICAgID5cclxuICAgICAgPGgxPldlbGNvbWUgdG8gPHNwYW4gc3R5bGU9e3tjb2xvcjogXCIjMDBhM2NjXCJ9fT5IQVJIVUI8L3NwYW4+PC9oMT5cclxuICAgICAgPGJyLz4gICAgIFxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjI1MHB0XCJ9fVxyXG4gICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBVc2VybmFtZSEnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IHByZWZpeD17PFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcblxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjI1MHB0XCJ9fVxyXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBQYXNzd29yZCEnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyZW1lbWJlclwiIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCIgbm9TdHlsZT5cclxuICAgICAgICAgIDxDaGVja2JveD5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0gPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwMHB4XCJ9fT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWZvcmdvdFwiIGhyZWY9XCJcIj5cclxuICAgICAgICAgIEZvcmdvdCBwYXNzd29yZFxyXG4gICAgICAgIDwvYT48L3NwYW4+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuXHJcblxyXG4gICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tYnV0dG9uXCI+XHJcbiAgICAgICAgICBMb2cgaW5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8c3BhbiBzdHlsZSA9e3ttYXJnaW5MZWZ0OlwiMTYwcHhcIix9fT5PciA8L3NwYW4+PGEgb25DbGljaz17KCk9PiByb3V0ZXIucHVzaCgnLycpfSBzdHlsZT17e2NvbG9yOlwiYmx1ZVwiLHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwifX0+cmVnaXN0ZXIgbm93ITwvYT5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8L0Zvcm0+XHJcbiAgICA8L0NvbnRlbnQ+XHJcbiAgICA8Rm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+IEhhcmh1YiDCqTIwMjEgQ3JlYXRlZCBieS4uPC9Gb290ZXI+XHJcbiAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGV4ZWNMb2dpbiA9ICh2YWx1ZXMpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKHZhbHVlcy51c2VybmFtZSx2YWx1ZXMucGFzc3dvcmQpXHJcbiAgY29uc3QgY3JlZHMgPSBjaGVja0NyZWRzKHZhbHVlcy51c2VybmFtZSx2YWx1ZXMucGFzc3dvcmQpXHJcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbWF0Y2hlZCcsdHJ1ZSlcclxuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWF0Y2hlZCcpKVxyXG4gIC8qXHJcbiAgaWYoY3JlZHM9PXRydWUpe1xyXG4gICAgcm91dGVyLnB1c2goYC4vJHt2YWx1ZXMudXNlcm5hbWV9L3VwbG9hZGApXHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICBzZXRNYXRjaChmYWxzZSlcclxuICB9Ki9cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9