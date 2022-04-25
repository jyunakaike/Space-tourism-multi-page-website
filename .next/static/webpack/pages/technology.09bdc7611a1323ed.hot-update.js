"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/technology",{

/***/ "./src/components/Technology/index.js":
/*!********************************************!*\
  !*** ./src/components/Technology/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Technology\": function() { return /* binding */ Technology; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology.module.css */ \"./src/components/Technology/technology.module.css\");\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_technology_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Technology = function(param) {\n    var technologyList = param.technologyList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), technology = ref[0], setTechnology = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), Loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), error1 = ref2[0], setError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: undefined,\n        height: undefined\n    }), windowSize = ref3[0], setWindowSize = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[0]);\n            setLoading(false);\n            if (true) {\n                var handleResize = function handleResize() {\n                    setWindowSize(window.innerWidth);\n                };\n                window.addEventListener(\"resize\", handleResize);\n                handleResize();\n                return function() {\n                    return window.removeEventListener(\"resize\", handleResize);\n                };\n            }\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    }, []);\n    console.log(windowSize);\n    var handleButtonNumber = function(item) {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[item]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-wrapper\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-title\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"03\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"SPACE LAUNCH 101\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, _this),\n                Loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-wrapper\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-numbers\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(0);\n                                            },\n                                            className: technology.name.toUpperCase() === \"LAUNCH VEHICLE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"1\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 228\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(1);\n                                            },\n                                            className: technology.name.toUpperCase() === \"SPACEPORT\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"2\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 223\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(2);\n                                            },\n                                            className: technology.name.toUpperCase() === \"SPACE CAPSULE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"3\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 227\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-detail\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"THE TERMINOLOGY\\u2026\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: technology.name.toUpperCase()\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: technology.description\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-image\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: technology.images.landscape,\n                                width: \"99%\",\n                                height: \"40%\",\n                                layout: \"responsive\",\n                                objectFit: \"contain\",\n                                alt: \"\".concat(technology.name, \"-image\")\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 25\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading\"\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 84,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, _this);\n};\n_s(Technology, \"Qub0bnT3yy6MedX+N5+zXSOJtAs=\");\n_c = Technology;\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsMkZBQWtDO3NDQUM5Qyw0RUFBQ0QsbURBQUs7Z0NBQUNvQyxHQUFHLEVBQUVoQyxVQUFVLENBQUNpQyxNQUFNLENBQUNDLFNBQVM7Z0NBQUU1QixLQUFLLEVBQUMsS0FBSztnQ0FBQ0UsTUFBTSxFQUFDLEtBQUs7Z0NBQUMyQixNQUFNLEVBQUMsWUFBWTtnQ0FBQ0MsU0FBUyxFQUFDLFNBQVM7Z0NBQUNDLEdBQUcsRUFBRSxFQUFDLENBQWtCLE1BQU0sQ0FBdEJyQyxVQUFVLENBQUMyQixJQUFJLEVBQUMsUUFBTSxDQUFDOzs7OztxQ0FBSTs7Ozs7aUNBRzNJOzs7Ozs7eUJBQ0osaUJBRU4sOERBQUNMLEtBQUc7OEJBQUMsU0FBTzs7Ozs7eUJBQU07Ozs7OztpQkFFeEI7Ozs7O2FBQ0EsQ0FDYjtDQUNKO0dBbkZZeEIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RlY2hub2xvZ3kvaW5kZXguanM/MjY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90ZWNobm9sb2d5Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgVGVjaG5vbG9neSA9ICh7IHRlY2hub2xvZ3lMaXN0IH0pID0+IHtcbiAgICBjb25zdCBbdGVjaG5vbG9neSwgc2V0VGVjaG5vbG9neV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0VGVjaG5vbG9neSh0ZWNobm9sb2d5TGlzdFswXSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRXaW5kb3dTaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlUmVzaXplKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc29sZS5sb2cod2luZG93U2l6ZSlcblxuICAgIGNvbnN0IGhhbmRsZUJ1dHRvbk51bWJlciA9IChpdGVtKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldFRlY2hub2xvZ3kodGVjaG5vbG9neUxpc3RbaXRlbV0pO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktY29udGFpbmVyJ119PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS13cmFwcGVyJ119PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktdGl0bGUnXX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMz4wMzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5TUEFDRSBMQVVOQ0ggMTAxPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIChMb2FkaW5nID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLXdyYXBwZXInXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZSddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlcnMnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbk51bWJlcigwKX0gY2xhc3NOYW1lPXsodGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdMQVVOQ0ggVkVISUNMRScpID8gc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyLWFjdGl2ZSddIDogc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyJ119PjxoMT4xPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uTnVtYmVyKDEpfSBjbGFzc05hbWU9eyh0ZWNobm9sb2d5Lm5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NQQUNFUE9SVCcpID8gc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyLWFjdGl2ZSddIDogc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyJ119PjxoMT4yPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uTnVtYmVyKDIpfSBjbGFzc05hbWU9eyh0ZWNobm9sb2d5Lm5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NQQUNFIENBUFNVTEUnKSA/IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlci1hY3RpdmUnXSA6IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlciddfT48aDE+MzwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtZGV0YWlsJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRIRSBURVJNSU5PTE9HWeKAplxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0ZWNobm9sb2d5LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1pbWFnZSddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGVjaG5vbG9neS5pbWFnZXMubGFuZHNjYXBlfSB3aWR0aD0nOTklJyBoZWlnaHQ9JzQwJScgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiBhbHQ9e2Ake3RlY2hub2xvZ3kubmFtZX0taW1hZ2VgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogOiA8SW1hZ2Ugc3JjPXt0ZWNobm9sb2d5LmltYWdlcy5wb3J0cmFpdH0gd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiBhbHQ9e2Ake3RlY2hub2xvZ3kubmFtZX0taW1hZ2VgfSAvPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiSW1hZ2UiLCJzdHlsZXMiLCJUZWNobm9sb2d5IiwidGVjaG5vbG9neUxpc3QiLCJ0ZWNobm9sb2d5Iiwic2V0VGVjaG5vbG9neSIsIkxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsIndpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0Iiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQnV0dG9uTnVtYmVyIiwiaXRlbSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsImgyIiwiYXJ0aWNsZSIsIm9uQ2xpY2siLCJuYW1lIiwidG9VcHBlckNhc2UiLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsInNyYyIsImltYWdlcyIsImxhbmRzY2FwZSIsImxheW91dCIsIm9iamVjdEZpdCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Technology/index.js\n");

/***/ })

});