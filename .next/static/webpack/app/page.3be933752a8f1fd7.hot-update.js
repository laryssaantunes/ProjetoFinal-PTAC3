"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Home.js":
/*!************************************!*\
  !*** ./src/app/components/Home.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/route */ \"(app-pages-browser)/./src/app/api/route.js\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.css */ \"(app-pages-browser)/./src/app/components/Home.css\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loading */ \"(app-pages-browser)/./src/app/components/Loading.js\");\n/* harmony import */ var _ErroGetFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErroGetFetch */ \"(app-pages-browser)/./src/app/components/ErroGetFetch.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Componente funcional para renderizar a lista de livros na Home\nconst HomeComponent = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Simulando a busca de dados\n        setTimeout(()=>{\n            setData(_api_route__WEBPACK_IMPORTED_MODULE_2__.listaDeLivros);\n            setLoading(false);\n        // Forçando um erro para testar o componente ErroGetFetch\n        /* try {\r\n        throw new Error(\"Erro forçado na busca de dados\");\r\n        setData(listaDeLivros);\r\n        setLoading(false);\r\n      } catch (err) {\r\n        setError(true);\r\n        setLoading(false);\r\n      }*/ }, 2000);\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n            lineNumber: 35,\n            columnNumber: 16\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErroGetFetch__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n            lineNumber: 39,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Bem-vindo \\xe0 nossa Livraria\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: _api_route__WEBPACK_IMPORTED_MODULE_2__.listaDeLivros.map((livro)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-image\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: livro.imagem,\n                                    alt: livro.titulo,\n                                    style: {\n                                        maxWidth: \"100px\",\n                                        maxHeight: \"150px\",\n                                        marginRight: \"10px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: livro.titulo\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Autor: \",\n                                            livro.autor\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Ano de Publica\\xe7\\xe3o: \",\n                                            livro.anoPublicacao\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"G\\xeanero: \",\n                                            livro.genero\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"ID:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 32\n                                            }, undefined),\n                                            \" \",\n                                            livro.id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, livro.id, true, {\n                        fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\escola\\\\Documents\\\\GitHub\\\\ProjetoFinal-PTAC3\\\\src\\\\app\\\\components\\\\Home.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomeComponent, \"2PgLPQiuBNjTAkk/0jl/V4wudig=\");\n_c = HomeComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeComponent);\nvar _c;\n$RefreshReg$(_c, \"HomeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUQ7QUFDTjtBQUN6QjtBQUNZO0FBQ1U7QUFFMUMsaUVBQWlFO0FBQ2pFLE1BQU1NLGdCQUFnQjs7SUFDbEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFHbkNDLGdEQUFTQSxDQUFDO1FBQ04sNkJBQTZCO1FBQzdCVyxXQUFXO1lBQ1RMLFFBQVFMLHFEQUFhQTtZQUNyQk8sV0FBVztRQUVqQix5REFBeUQ7UUFDeEQ7Ozs7Ozs7T0FPRSxHQUVDLEdBQUc7SUFDTCxHQUFHLEVBQUU7SUFFTCxJQUFJRCxTQUFTO1FBQ1gscUJBQU8sOERBQUNMLGdEQUFPQTs7Ozs7SUFDakI7SUFFQSxJQUFJTyxPQUFPO1FBQ1QscUJBQU8sOERBQUNOLHFEQUFZQTs7Ozs7SUFDdEI7SUFHRixxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNJZCxxREFBYUEsQ0FBQ2UsR0FBRyxDQUFDQyxDQUFBQSxzQkFDZiw4REFBQ0M7OzBDQUNHLDhEQUFDTjtnQ0FBSUMsV0FBVTswQ0FDZiw0RUFBQ007b0NBQUlDLEtBQUtILE1BQU1JLE1BQU07b0NBQUVDLEtBQUtMLE1BQU1NLE1BQU07b0NBQUVDLE9BQU87d0NBQUVDLFVBQVU7d0NBQVNDLFdBQVc7d0NBQVNDLGFBQWE7b0NBQU87Ozs7Ozs7Ozs7OzBDQUUvRyw4REFBQ2Y7O2tEQUVHLDhEQUFDZ0I7a0RBQUlYLE1BQU1NLE1BQU07Ozs7OztrREFDakIsOERBQUNNOzs0Q0FBRTs0Q0FBUVosTUFBTWEsS0FBSzs7Ozs7OztrREFDdEIsOERBQUNEOzs0Q0FBRTs0Q0FBb0JaLE1BQU1jLGFBQWE7Ozs7Ozs7a0RBQzFDLDhEQUFDRjs7NENBQUU7NENBQVNaLE1BQU1lLE1BQU07Ozs7Ozs7a0RBQ3hCLDhEQUFDSDs7MERBQUUsOERBQUNJOzBEQUFPOzs7Ozs7NENBQVk7NENBQUVoQixNQUFNaUIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7dUJBVmhDakIsTUFBTWlCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnJDO0dBeERNOUI7S0FBQUE7QUEwRE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0hvbWUuanM/YTZmOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxpc3RhRGVMaXZyb3MgfSBmcm9tIFwiLi4vYXBpL3JvdXRlXCI7XHJcbmltcG9ydCBcIi4vSG9tZS5jc3NcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vTG9hZGluZ1wiO1xyXG5pbXBvcnQgRXJyb0dldEZldGNoIGZyb20gXCIuL0Vycm9HZXRGZXRjaFwiO1xyXG5cclxuLy8gQ29tcG9uZW50ZSBmdW5jaW9uYWwgcGFyYSByZW5kZXJpemFyIGEgbGlzdGEgZGUgbGl2cm9zIG5hIEhvbWVcclxuY29uc3QgSG9tZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBTaW11bGFuZG8gYSBidXNjYSBkZSBkYWRvc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0RGF0YShsaXN0YURlTGl2cm9zKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIC8vIEZvcsOnYW5kbyB1bSBlcnJvIHBhcmEgdGVzdGFyIG8gY29tcG9uZW50ZSBFcnJvR2V0RmV0Y2hcclxuICAgICAvKiB0cnkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm8gZm9yw6dhZG8gbmEgYnVzY2EgZGUgZGFkb3NcIik7XHJcbiAgICAgICAgc2V0RGF0YShsaXN0YURlTGl2cm9zKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0qL1xyXG5cclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gPEVycm9HZXRGZXRjaCAvPjtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5CZW0tdmluZG8gw6Agbm9zc2EgTGl2cmFyaWE8L2gxPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bGlzdGFEZUxpdnJvcy5tYXAobGl2cm8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2xpdnJvLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXZyby5pbWFnZW19IGFsdD17bGl2cm8udGl0dWxvfSBzdHlsZT17eyBtYXhXaWR0aDogJzEwMHB4JywgbWF4SGVpZ2h0OiAnMTUwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19IC8+XHJcbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2xpdnJvLnRpdHVsb308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXV0b3I6IHtsaXZyby5hdXRvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Bbm8gZGUgUHVibGljYcOnw6NvOiB7bGl2cm8uYW5vUHVibGljYWNhb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Hw6puZXJvOiB7bGl2cm8uZ2VuZXJvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+SUQ6PC9zdHJvbmc+IHtsaXZyby5pZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lQ29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxpc3RhRGVMaXZyb3MiLCJMb2FkaW5nIiwiRXJyb0dldEZldGNoIiwiSG9tZUNvbXBvbmVudCIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJtYXAiLCJsaXZybyIsImxpIiwiaW1nIiwic3JjIiwiaW1hZ2VtIiwiYWx0IiwidGl0dWxvIiwic3R5bGUiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1hcmdpblJpZ2h0IiwiaDIiLCJwIiwiYXV0b3IiLCJhbm9QdWJsaWNhY2FvIiwiZ2VuZXJvIiwic3Ryb25nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Home.js\n"));

/***/ })

});