"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n// ===>run in server\n\n\nvar __N_SSP = true;\n// ====>run in client\nfunction Home(props) {\n    const { courses  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app\",\n        style: {\n            direction: \"rtl\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"courses\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mrthr\\\\Desktop\\\\ismail safha\\\\nextjs\\\\server-side-rendring-nextjs\\\\client\\\\pages\\\\index.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: courses && courses.map((c, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: c.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mrthr\\\\Desktop\\\\ismail safha\\\\nextjs\\\\server-side-rendring-nextjs\\\\client\\\\pages\\\\index.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 29\n                        }, this)\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\Mrthr\\\\Desktop\\\\ismail safha\\\\nextjs\\\\server-side-rendring-nextjs\\\\client\\\\pages\\\\index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 29\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mrthr\\\\Desktop\\\\ismail safha\\\\nextjs\\\\server-side-rendring-nextjs\\\\client\\\\pages\\\\index.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mrthr\\\\Desktop\\\\ismail safha\\\\nextjs\\\\server-side-rendring-nextjs\\\\client\\\\pages\\\\index.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n} /* \r\nexport async function getServerSideProps(context) {\r\n  return {\r\n    props: {}, // will be passed to the page component as props\r\n  }\r\n}\r\n*/ \n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCO0FBQTRCOztBQWM1QixxQkFBcUI7QUFDTixTQUFTQyxLQUFNQyxLQUFLLEVBQUM7SUFDaEMsTUFBTSxFQUFDQyxRQUFPLEVBQUMsR0FBR0Q7SUFDbEIscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7UUFBTUMsT0FBTztZQUFDQyxXQUFXO1FBQUs7OzBCQUN6Qyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBRVBGLFdBQVlBLFFBQVFNLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxJQUFJO29CQUM1QixxQkFDSSw4REFBQ1A7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNPO3NDQUNJRixFQUFFRyxLQUFLOzs7Ozs7dUJBRldGOzs7OztnQkFNL0I7Ozs7Ozs7Ozs7OztBQU1wQixDQUFDLENBQ0Q7S0F0QndCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT0+cnVuIGluIHNlcnZlclxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIHNlbmQgZGF0YSB0byBzcnZlciB1c2UgZ2V0U2VydmVyU2lkZVByb3BzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcclxuICAgIC8vIGZldGNoIGRhdGEgIGZyb20gc2VydmVyIFxyXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvY291cnNlc1wiXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24odXJsKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjb3Vyc2VzOiBkYXRhPy5jb3Vyc2VzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG59XHJcbi8vID09PT0+cnVuIGluIGNsaWVudFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lIChwcm9wcyl7XHJcbiAgICBjb25zdCB7Y291cnNlc30gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIiBzdHlsZT17e2RpcmVjdGlvbjogJ3J0bCd9fT5cclxuICAgICAgICAgICAgPGgxPmNvdXJzZXM8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPiBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3Vyc2VzICYmICBjb3Vyc2VzLm1hcCgoYywgaSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG4vKiBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfVxyXG59XHJcbiovIl0sIm5hbWVzIjpbIkxpbmsiLCJIb21lIiwicHJvcHMiLCJjb3Vyc2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXJlY3Rpb24iLCJoMSIsIm1hcCIsImMiLCJpIiwiaDMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});