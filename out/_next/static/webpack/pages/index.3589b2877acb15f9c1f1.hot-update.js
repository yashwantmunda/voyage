/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HomePageSignupBlock.js":
/*!*******************************************!*\
  !*** ./components/HomePageSignupBlock.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePageSignupBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/HomePageSignup.module.css */ \"./components/css/HomePageSignup.module.css\");\n/* harmony import */ var _css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SignupBottomBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignupBottomBlock */ \"./components/SignupBottomBlock.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Applications/MAMP/htdocs/voyage-updated/voyage-web-next/components/HomePageSignupBlock.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction HomePageSignupBlock() {\n  _s();\n\n  var emailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n  var emailErrorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n  var ePattern = /^([\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4})?$/;\n\n  var emailSignUp = function emailSignUp() {\n    var email = emailRef.current.value;\n\n    if (email.length == 0 || !ePattern.test(email)) {\n      emailErrorRef.current.textContent = 'Invalid email';\n      return false;\n    }\n\n    console.log('valid');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: (_css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3___default().signupBlock),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container \".concat((_css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3___default().signupWrapper)),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3___default().signupBox),\n        \"data-scroll\": true,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: \"Get started with a 30-day free trial!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n          children: \"Sign up now to get access to the most powerful full-stack text message commerce platform in the world. We will get back to you in less than 1 business day. Your first 30 days of text messages are on us!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputBox),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            id: \"smailSignUpError\",\n            ref: emailErrorRef,\n            className: (_css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailError)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: (_css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputWrapper),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n              ref: emailRef,\n              type: \"text\",\n              name: \"email\",\n              id: \"emailSignUp\",\n              autoComplete: \"off\",\n              placeholder: \"ENTER YOUR EMAIL\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n              onClick: function onClick() {\n                return emailSignUp();\n              },\n              id: \"emailSubmit\",\n              children: \"SIGN UP\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: (_css_HomePageSignup_module_css__WEBPACK_IMPORTED_MODULE_3___default().extraInfo),\n          children: [\"or Text \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"DEMO\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 61\n          }, this), \" to \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"(323) 370-0977\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 82\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignupBottomBlock__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n\n_s(HomePageSignupBlock, \"OBj0sNa1HkHVIAmeW/uIqd+aoq0=\");\n\n_c = HomePageSignupBlock;\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePageSignupBlock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lUGFnZVNpZ251cEJsb2NrLmpzP2MwYTAiXSwibmFtZXMiOlsiSG9tZVBhZ2VTaWdudXBCbG9jayIsImVtYWlsUmVmIiwidXNlUmVmIiwiZW1haWxFcnJvclJlZiIsImVQYXR0ZXJuIiwiZW1haWxTaWduVXAiLCJlbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImxlbmd0aCIsInRlc3QiLCJ0ZXh0Q29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJlbWFpbEVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLG1CQUFULEdBQStCO0FBQUE7O0FBRTFDLE1BQU1DLFFBQVEsR0FBR0MsNkNBQU0sRUFBdkI7QUFDQSxNQUFNQyxhQUFhLEdBQUdELDZDQUFNLEVBQTVCO0FBRUksTUFBTUUsUUFBUSxHQUFHLHFDQUFqQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUlDLEtBQUssR0FBR0wsUUFBUSxDQUFDTSxPQUFULENBQWlCQyxLQUE3Qjs7QUFDQSxRQUFJRixLQUFLLENBQUNHLE1BQU4sSUFBZ0IsQ0FBaEIsSUFBcUIsQ0FBQ0wsUUFBUSxDQUFDTSxJQUFULENBQWNKLEtBQWQsQ0FBMUIsRUFBZ0Q7QUFDNUNILG1CQUFhLENBQUNJLE9BQWQsQ0FBc0JJLFdBQXRCLEdBQW9DLGVBQXBDO0FBQ0EsYUFBTyxLQUFQO0FBQ0g7O0FBRURDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFFSCxHQVREOztBQVlKLHNCQUNJO0FBQVMsYUFBUyxFQUFFQyxtRkFBcEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsc0JBQWVBLHFGQUFmLENBQWQ7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVBLGlGQUFoQjtBQUFrQywyQkFBbEM7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUcsbUJBQVMsRUFBRUEsbUZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFVSTtBQUFLLG1CQUFTLEVBQUVBLGdGQUFoQjtBQUFBLGtDQUNJO0FBQU0sY0FBRSxFQUFDLGtCQUFUO0FBQTRCLGVBQUcsRUFBRVgsYUFBakM7QUFBZ0QscUJBQVMsRUFBRVcsa0ZBQWlCQztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSyxjQUFFLEVBQUVELG9GQUFUO0FBQUEsb0NBQ0k7QUFBTyxpQkFBRyxFQUFFYixRQUFaO0FBQXNCLGtCQUFJLEVBQUMsTUFBM0I7QUFBa0Msa0JBQUksRUFBQyxPQUF2QztBQUErQyxnQkFBRSxFQUFDLGFBQWxEO0FBQWdFLDBCQUFZLEVBQUMsS0FBN0U7QUFBbUYseUJBQVcsRUFBQztBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBUSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1JLFdBQVcsRUFBakI7QUFBQSxlQUFqQjtBQUFzQyxnQkFBRSxFQUFDLGFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUFtQkk7QUFBRyxtQkFBUyxFQUFFUyxpRkFBZDtBQUFBLDhDQUF3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBeEMsdUJBQTZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQXdCSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEJIOztHQTlDdUJkLG1COztLQUFBQSxtQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSG9tZVBhZ2VTaWdudXBCbG9jay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9jc3MvSG9tZVBhZ2VTaWdudXAubW9kdWxlLmNzcyc7XG5pbXBvcnQgU2lnbnVwQm90dG9tQmxvY2sgZnJvbSAnLi9TaWdudXBCb3R0b21CbG9jayc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlU2lnbnVwQmxvY2soKSB7XG5cbiAgICBjb25zdCBlbWFpbFJlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGVtYWlsRXJyb3JSZWYgPSB1c2VSZWYoKTtcbiAgIFxuICAgICAgICBjb25zdCBlUGF0dGVybiA9IC9eKFtcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9KT8kLztcbiAgICAgICAgY29uc3QgZW1haWxTaWduVXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZW1haWwgPSBlbWFpbFJlZi5jdXJyZW50LnZhbHVlO1xuICAgICAgICAgICAgaWYgKGVtYWlsLmxlbmd0aCA9PSAwIHx8ICFlUGF0dGVybi50ZXN0KGVtYWlsKSkge1xuICAgICAgICAgICAgICAgIGVtYWlsRXJyb3JSZWYuY3VycmVudC50ZXh0Q29udGVudCA9ICdJbnZhbGlkIGVtYWlsJztcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWQnKTtcblxuICAgICAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNpZ251cEJsb2NrfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyICR7c3R5bGVzLnNpZ251cFdyYXBwZXJ9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWdudXBCb3h9IGRhdGEtc2Nyb2xsPlxuICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIEdldCBzdGFydGVkIHdpdGggYSAzMC1kYXkgZnJlZSB0cmlhbCFcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgICBTaWduIHVwIG5vdyB0byBnZXQgYWNjZXNzIHRvIHRoZSBtb3N0IHBvd2VyZnVsIGZ1bGwtc3RhY2sgdGV4dCBcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSBjb21tZXJjZSBwbGF0Zm9ybSBpbiB0aGUgd29ybGQuIFdlIHdpbGwgZ2V0IGJhY2sgXG4gICAgICAgICAgICAgICAgICAgIHRvIHlvdSBpbiBsZXNzIHRoYW4gMSBidXNpbmVzcyBkYXkuIFlvdXIgZmlyc3QgMzAgZGF5cyBcbiAgICAgICAgICAgICAgICAgICAgb2YgdGV4dCBtZXNzYWdlcyBhcmUgb24gdXMhXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEJveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInNtYWlsU2lnblVwRXJyb3JcIiByZWY9e2VtYWlsRXJyb3JSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsRXJyb3J9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5pbnB1dFdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e2VtYWlsUmVmfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxTaWduVXBcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBwbGFjZWhvbGRlcj1cIkVOVEVSIFlPVVIgRU1BSUxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlbWFpbFNpZ25VcCgpfSBpZD1cImVtYWlsU3VibWl0XCI+U0lHTiBVUDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5leHRyYUluZm99Pm9yIFRleHQgPHNwYW4+REVNTzwvc3Bhbj4gdG8gPHNwYW4+KDMyMykgMzcwLTA5Nzc8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2lnbnVwQm90dG9tQmxvY2sgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HomePageSignupBlock.js\n");

/***/ })

});