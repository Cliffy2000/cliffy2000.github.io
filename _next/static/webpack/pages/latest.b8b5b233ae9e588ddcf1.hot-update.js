self["webpackHotUpdate_N_E"]("pages/latest",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Navigation.module.css */ "./styles/Navigation.module.css");
/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Cliff\\Desktop\\website\\components\\Navigation.js";




function Navigation() {
  var content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, {
      collapseOnSelect: true,
      bg: "dark",
      variant: "dark",
      expand: "md",
      className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__.default.Brand, {
        className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().brand),
        children: "Cliff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.default.Link, {
          href: "/",
          className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.default.Link, {
          href: "/latest",
          className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),
          children: "Latest"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.default.Link, {
          href: "/projects",
          className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.default.Link, {
          href: "/about",
          className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);

  return content;
}
_c = Navigation;

var _c;

$RefreshReg$(_c, "Navigation");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjb250ZW50Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQ25DLE1BQUlDLE9BQU8sZ0JBQ1Q7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFRLHNCQUFnQixNQUF4QjtBQUF5QixRQUFFLEVBQUMsTUFBNUI7QUFBbUMsYUFBTyxFQUFDLE1BQTNDO0FBQWtELFlBQU0sRUFBQyxJQUF6RDtBQUE4RCxlQUFTLEVBQUVDLDhFQUF6RTtBQUFBLDhCQUNFLDhEQUFDLGlFQUFEO0FBQWMsaUJBQVMsRUFBRUEsNEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBLGdDQUNFLDhEQUFDLDZEQUFEO0FBQVUsY0FBSSxFQUFDLEdBQWY7QUFBbUIsbUJBQVMsRUFBRUEsMkVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsNkRBQUQ7QUFBVSxjQUFJLEVBQUMsU0FBZjtBQUF5QixtQkFBUyxFQUFFQSwyRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSw4REFBQyw2REFBRDtBQUFVLGNBQUksRUFBQyxXQUFmO0FBQTJCLG1CQUFTLEVBQUVBLDJFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFLDhEQUFDLDZEQUFEO0FBQVUsY0FBSSxFQUFDLFFBQWY7QUFBd0IsbUJBQVMsRUFBRUEsMkVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUFhQSxTQUFPRCxPQUFQO0FBQ0Q7S0FmdUJELFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGF0ZXN0LmI4YjViMjMzYWU5ZTU4OGRkY2YxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2aWdhdGlvbi5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XHJcbiAgbGV0IGNvbnRlbnQgPVxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBjb2xsYXBzZU9uU2VsZWN0IGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCIgZXhwYW5kPSdtZCcgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH0+Q2xpZmY8L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8TmF2PlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+SG9tZTwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9sYXRlc3RcIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5MYXRlc3Q8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvcHJvamVjdHNcIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5Qcm9qZWN0czwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PkFib3V0PC9OYXYuTGluaz5cclxuICAgICAgICA8L05hdj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8L2Rpdj47XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=