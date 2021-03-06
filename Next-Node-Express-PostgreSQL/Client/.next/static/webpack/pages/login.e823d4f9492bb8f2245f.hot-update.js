webpackHotUpdate_N_E("pages/login",{

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: checkCreds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCreds", function() { return checkCreds; });
/* harmony import */ var D_Project_www_www_Next_Node_Express_PostgreSQL_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Project_www_www_Next_Node_Express_PostgreSQL_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Project_www_www_Next_Node_Express_PostgreSQL_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Project_www_www_Next_Node_Express_PostgreSQL_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var password_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! password-hash */ "./node_modules/password-hash/lib/password-hash.js");
/* harmony import */ var password_hash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(password_hash__WEBPACK_IMPORTED_MODULE_2__);



function checkCreds(_x, _x2) {
  return _checkCreds.apply(this, arguments);
} //export async function register()

/*
1. get password of username
2. create user with hashed password
3. see if user exists
*/

function _checkCreds() {
  _checkCreds = Object(D_Project_www_www_Next_Node_Express_PostgreSQL_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Project_www_www_Next_Node_Express_PostgreSQL_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(username, password) {
    return D_Project_www_www_Next_Node_Express_PostgreSQL_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Hash of ".concat(password, " is: ").concat(Object(password_hash__WEBPACK_IMPORTED_MODULE_2__["generate"])(password))); //const res = await fetch(`http://localhost:5000/login/${username}`);
            //const match = verify(password,res)    
            //return creds;

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkCreds.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2F1dGguanMiXSwibmFtZXMiOlsiY2hlY2tDcmVkcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZ2VuZXJhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLFNBQWVBLFVBQXRCO0FBQUE7QUFBQSxDLENBT0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O3lXQVpPLGlCQUEwQkMsUUFBMUIsRUFBb0NDLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEMsbUJBQU8sQ0FBQ0MsR0FBUixtQkFBdUJGLFFBQXZCLGtCQUF1Q0csOERBQVEsQ0FBQ0gsUUFBRCxDQUEvQyxHQURHLENBRUg7QUFDQTtBQUNBOztBQUpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZTgyM2Q0Zjk0OTJiYjhmMjI0NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2VuZXJhdGUsIHZlcmlmeX0gZnJvbSAncGFzc3dvcmQtaGFzaCdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0NyZWRzKHVzZXJuYW1lLCBwYXNzd29yZCl7XHJcbiAgICBjb25zb2xlLmxvZyhgSGFzaCBvZiAke3Bhc3N3b3JkfSBpczogJHtnZW5lcmF0ZShwYXNzd29yZCl9YClcclxuICAgIC8vY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9sb2dpbi8ke3VzZXJuYW1lfWApO1xyXG4gICAgLy9jb25zdCBtYXRjaCA9IHZlcmlmeShwYXNzd29yZCxyZXMpICAgIFxyXG4gICAgLy9yZXR1cm4gY3JlZHM7XHJcbn1cclxuXHJcbi8vZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKClcclxuLypcclxuMS4gZ2V0IHBhc3N3b3JkIG9mIHVzZXJuYW1lXHJcbjIuIGNyZWF0ZSB1c2VyIHdpdGggaGFzaGVkIHBhc3N3b3JkXHJcbjMuIHNlZSBpZiB1c2VyIGV4aXN0c1xyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=