webpackHotUpdate_N_E("pages/agreement",{

/***/ "./pages/agreement.js":
/*!****************************!*\
  !*** ./pages/agreement.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return agreement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "D:\\Project-www\\www\\Next-Node-Express-PostgreSQL\\Client\\pages\\agreement.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Title = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Title,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Paragraph;
function agreement() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, "Terms of agreement"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "Employee tab"), __jsx(Paragraph, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Here you can access a table with the information of all employes. In every row there are 2 buttons, EDIT and DELETE.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 56
    }
  }), "If you press this EDIT button, you will be navigated to a Form which will be already filled with the information, of the Employee you want to edit.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 39
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, "You will not be able to leave anything blank."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 58
    }
  }), "If you press the DELETE button, you will delete the corresponding employee."), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "Hire tab"), __jsx(Paragraph, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, "Here you can access a Form in which you will be asked to fill it with the employee's information.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 103
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }, "You will not be able to leave anything blank.")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/register",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 14
    }
  }, "Back to registration form")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWdyZWVtZW50LmpzIl0sIm5hbWVzIjpbIlRpdGxlIiwiVHlwb2dyYXBoeSIsIlBhcmFncmFwaCIsImFncmVlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0lBQ1FBLEssR0FBb0JDLCtDLENBQXBCRCxLO0lBQU9FLFMsR0FBYUQsK0MsQ0FBYkMsUztBQUNBLFNBQVNDLFNBQVQsR0FBb0I7QUFDbEMsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREQsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLEVBR0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkhBRW1EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGbkQseUpBSWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKbEMsRUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUxELEVBS3FEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMckQsZ0ZBSEYsRUFXRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkYsRUFhRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwR0FDa0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURsRyxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBRkQsQ0FiRixFQWlCRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkMsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURWLENBbEJELENBREQ7QUF3QkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWdyZWVtZW50LjIyZmUzYmQwNmY0NzE2NDBmMDU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgVGl0bGUsIFBhcmFncmFwaH0gPSBUeXBvZ3JhcGh5O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZ3JlZW1lbnQoKXtcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8VGl0bGU+VGVybXMgb2YgYWdyZWVtZW50PC9UaXRsZT5cclxuXHRcdFx0XHQ8aDI+RW1wbG95ZWUgdGFiPC9oMj5cclxuXHRcdFx0XHQ8UGFyYWdyYXBoPlxyXG5cdFx0XHRcdFx0SGVyZSB5b3UgY2FuIGFjY2VzcyBhIHRhYmxlIHdpdGggdGhlIGluZm9ybWF0aW9uIG9mIGFsbCBlbXBsb3llcy5cclxuXHRcdFx0XHRcdEluIGV2ZXJ5IHJvdyB0aGVyZSBhcmUgMiBidXR0b25zLCBFRElUIGFuZCBERUxFVEUuPGJyLz5cclxuXHRcdFx0XHRcdElmIHlvdSBwcmVzcyB0aGlzIEVESVQgYnV0dG9uLCB5b3Ugd2lsbCBiZSBuYXZpZ2F0ZWQgdG8gYSBGb3JtIHdoaWNoIHdpbGwgYmUgYWxyZWFkeSBmaWxsZWQgd2l0aCB0aGUgaW5mb3JtYXRpb24sXHJcblx0XHRcdFx0XHRvZiB0aGUgRW1wbG95ZWUgeW91IHdhbnQgdG8gZWRpdC48YnIvPlxyXG5cdFx0XHRcdFx0PGI+WW91IHdpbGwgbm90IGJlIGFibGUgdG8gbGVhdmUgYW55dGhpbmcgYmxhbmsuPC9iPjxici8+XHJcblx0XHRcdFx0XHRJZiB5b3UgcHJlc3MgdGhlIERFTEVURSBidXR0b24sIHlvdSB3aWxsIGRlbGV0ZSB0aGUgY29ycmVzcG9uZGluZyBlbXBsb3llZS4gXHJcblx0XHRcdFx0PC9QYXJhZ3JhcGg+XHJcblx0XHRcdFx0PERpdmlkZXIvPlxyXG5cdFx0XHRcdDxoMj5IaXJlIHRhYjwvaDI+XHJcblx0XHRcdFx0PFBhcmFncmFwaD5cclxuXHRcdFx0XHRcdEhlcmUgeW91IGNhbiBhY2Nlc3MgYSBGb3JtIGluIHdoaWNoIHlvdSB3aWxsIGJlIGFza2VkIHRvIGZpbGwgaXQgd2l0aCB0aGUgZW1wbG95ZWUncyBpbmZvcm1hdGlvbi48YnIvPlxyXG5cdFx0XHRcdFx0PGI+WW91IHdpbGwgbm90IGJlIGFibGUgdG8gbGVhdmUgYW55dGhpbmcgYmxhbmsuPC9iPlxyXG5cdFx0XHRcdDwvUGFyYWdyYXBoPlxyXG5cdFx0XHRcdDxEaXZpZGVyLz5cclxuXHRcdFx0PExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICBcdDxhPkJhY2sgdG8gcmVnaXN0cmF0aW9uIGZvcm08L2E+XHJcbiAgICAgICAgICBcdDwvTGluaz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9