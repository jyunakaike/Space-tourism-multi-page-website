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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Technology\": function() { return /* binding */ Technology; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology.module.css */ \"./src/components/Technology/technology.module.css\");\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_technology_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Technology = function(param) {\n    var technologyList = param.technologyList;\n    var myFunction = function myFunction(x) {\n        if (x.matches) {\n            // document.body.style.backgroundColor = \"yellow\";\n            console.log(\"matches\");\n        } else {\n            document.body.style.backgroundColor = \"pink\";\n            console.log(\"no matches\");\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), technology = ref[0], setTechnology = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), Loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), error1 = ref2[0], setError = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[0]);\n            setLoading(false);\n            if (window != undefined) {\n                var x = window.matchMedia(\"(max-width:820px)\");\n                if (x.matches) {\n                    // document.body.style.backgroundColor = \"yellow\";\n                    console.log(\"matches\");\n                } else {\n                    document.body.style.backgroundColor = \"pink\";\n                    console.log(\"no matches\");\n                }\n            }\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    }, []);\n    var handleButtonNumber = function(item) {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[item]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    };\n    var x1 = window.matchMedia(\"(max-width:820px)\");\n    myFunction(x1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-wrapper\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-title\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"03\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"SPACE LAUNCH 101\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, _this),\n                Loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-wrapper\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-numbers\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(0);\n                                            },\n                                            className: technology.name.toUpperCase() === \"LAUNCH VEHICLE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"1\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 228\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(1);\n                                            },\n                                            className: technology.name.toUpperCase() === \"SPACEPORT\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"2\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 223\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(2);\n                                            },\n                                            className: technology.name.toUpperCase() === \"SPACE CAPSULE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"3\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 227\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-detail\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"THE TERMINOLOGY\\u2026\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: technology.name.toUpperCase()\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: technology.description\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-image\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: technology.images.landscape,\n                                width: \"99%\",\n                                height: \"40%\",\n                                layout: \"responsive\",\n                                objectFit: \"contain\",\n                                alt: \"\".concat(technology.name, \"-image\")\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 92,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 91,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 76,\n                    columnNumber: 25\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading\"\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 98,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n            lineNumber: 68,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, _this);\n};\n_s(Technology, \"WWLMuFxHdm8veZ7pvi3qPNHl8xg=\");\n_c = Technology;\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2d5L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFnRTtBQUNqQztBQUVjOztBQUV0QyxJQUFNTSxVQUFVLEdBQUcsZ0JBQXdCO1FBQXJCQyxjQUFjLFNBQWRBLGNBQWM7UUF5QzlCQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ25CLElBQUlBLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO1lBQ1gsa0RBQWtEO1lBQ2xEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7U0FDekIsTUFBTTtZQUNIQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzdDTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7U0FDNUI7S0FDSjs7SUFoREQsSUFBb0NYLEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQU5sRCxVQU1xQixHQUFtQkEsR0FBVSxHQUE3QixFQU5yQixhQU1vQyxHQUFJQSxHQUFVLEdBQWQ7SUFDaEMsSUFBOEJBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQVA1QyxPQU9rQixHQUFnQkEsSUFBVSxHQUExQixFQVBsQixVQU84QixHQUFJQSxJQUFVLEdBQWQ7SUFDMUIsSUFBMEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFSN0MsTUFRZ0IsR0FBY0EsSUFBZSxHQUE3QixFQVJoQixRQVEwQixHQUFJQSxJQUFlLEdBQW5CO0lBR3RCQyxnREFBUyxDQUFDLFdBQU07UUFDWmtCLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSTtZQUNBRixhQUFhLENBQUNYLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDYSxVQUFVLENBQUMsS0FBSyxDQUFDO1lBR2pCLElBQUlHLE1BQU0sSUFBSUMsU0FBUyxFQUFFO2dCQUNyQixJQUFJZixDQUFDLEdBQUdjLE1BQU0sQ0FB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Q00sSUFBRTtzREFBRXBCLFVBQVUsQ0FBQ2tCLElBQUksQ0FBQ0MsV0FBVyxFQUFFOzs7OztpREFBTTtzREFDeEMsOERBQUNFLEdBQUM7c0RBQUVyQixVQUFVLENBQUNzQixXQUFXOzs7OztpREFBSzs7Ozs7O3lDQUM3Qjs7Ozs7O2lDQUNBO3NDQUNWLDhEQUFDVCxLQUFHOzRCQUFDRCxTQUFTLEVBQUV4QiwyRkFBa0M7c0NBQzlDLDRFQUFDRCxtREFBSztnQ0FBQ29DLEdBQUcsRUFBRXZCLFVBQVUsQ0FBQ3dCLE1BQU0sQ0FBQ0MsU0FBUztnQ0FBRUMsS0FBSyxFQUFDLEtBQUs7Z0NBQUNDLE1BQU0sRUFBQyxLQUFLO2dDQUFDQyxNQUFNLEVBQUMsWUFBWTtnQ0FBQ0MsU0FBUyxFQUFDLFNBQVM7Z0NBQUNDLEdBQUcsRUFBRSxFQUFDLENBQWtCLE1BQU0sQ0FBdEI5QixVQUFVLENBQUNrQixJQUFJLEVBQUMsUUFBTSxDQUFDOzs7OztxQ0FBSTs7Ozs7aUNBRzNJOzs7Ozs7eUJBQ0osaUJBRU4sOERBQUNMLEtBQUc7OEJBQUMsU0FBTzs7Ozs7eUJBQU07Ozs7OztpQkFFeEI7Ozs7O2FBQ0EsQ0FDYjtDQUNKO0dBakdZeEIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RlY2hub2xvZ3kvaW5kZXguanM/MjY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90ZWNobm9sb2d5Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgVGVjaG5vbG9neSA9ICh7IHRlY2hub2xvZ3lMaXN0IH0pID0+IHtcbiAgICBjb25zdCBbdGVjaG5vbG9neSwgc2V0VGVjaG5vbG9neV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldFRlY2hub2xvZ3kodGVjaG5vbG9neUxpc3RbMF0pO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAod2luZG93ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOjgyMHB4KVwiKVxuICAgICAgICAgICAgICAgIGlmICh4Lm1hdGNoZXMpIHsgLy8gSWYgbWVkaWEgcXVlcnkgbWF0Y2hlc1xuICAgICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWF0Y2hlc1wiKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJwaW5rXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gbWF0Y2hlc1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcbiAgICBjb25zdCBoYW5kbGVCdXR0b25OdW1iZXIgPSAoaXRlbSkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRUZWNobm9sb2d5KHRlY2hub2xvZ3lMaXN0W2l0ZW1dKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBteUZ1bmN0aW9uKHgpIHtcbiAgICAgICAgaWYgKHgubWF0Y2hlcykgeyAvLyBJZiBtZWRpYSBxdWVyeSBtYXRjaGVzXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hdGNoZXNcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJwaW5rXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIG1hdGNoZXNcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCB4ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOjgyMHB4KVwiKVxuICAgIG15RnVuY3Rpb24oeClcblxuXG5cblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWNvbnRhaW5lciddfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktd3JhcHBlciddfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LXRpdGxlJ119PlxuICAgICAgICAgICAgICAgICAgICA8aDM+MDM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDI+U1BBQ0UgTEFVTkNIIDEwMTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAoTG9hZGluZyA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS13cmFwcGVyJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXJzJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25OdW1iZXIoMCl9IGNsYXNzTmFtZT17KHRlY2hub2xvZ3kubmFtZS50b1VwcGVyQ2FzZSgpID09PSAnTEFVTkNIIFZFSElDTEUnKSA/IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlci1hY3RpdmUnXSA6IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlciddfT48aDE+MTwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbk51bWJlcigxKX0gY2xhc3NOYW1lPXsodGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTUEFDRVBPUlQnKSA/IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlci1hY3RpdmUnXSA6IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlciddfT48aDE+MjwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbk51bWJlcigyKX0gY2xhc3NOYW1lPXsodGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTUEFDRSBDQVBTVUxFJykgPyBzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXItYWN0aXZlJ10gOiBzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXInXX0+PGgxPjM8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLWRldGFpbCddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUSEUgVEVSTUlOT0xPR1nigKZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RlY2hub2xvZ3kubmFtZS50b1VwcGVyQ2FzZSgpfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGVjaG5vbG9neS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtaW1hZ2UnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RlY2hub2xvZ3kuaW1hZ2VzLmxhbmRzY2FwZX0gd2lkdGg9Jzk5JScgaGVpZ2h0PSc0MCUnIGxheW91dD1cInJlc3BvbnNpdmVcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgYWx0PXtgJHt0ZWNobm9sb2d5Lm5hbWV9LWltYWdlYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDogPEltYWdlIHNyYz17dGVjaG5vbG9neS5pbWFnZXMucG9ydHJhaXR9IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGxheW91dD1cInJlc3BvbnNpdmVcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgYWx0PXtgJHt0ZWNobm9sb2d5Lm5hbWV9LWltYWdlYH0gLz4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsIkltYWdlIiwic3R5bGVzIiwiVGVjaG5vbG9neSIsInRlY2hub2xvZ3lMaXN0IiwibXlGdW5jdGlvbiIsIngiLCJtYXRjaGVzIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGVjaG5vbG9neSIsInNldFRlY2hub2xvZ3kiLCJMb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJtYXRjaE1lZGlhIiwiaGFuZGxlQnV0dG9uTnVtYmVyIiwiaXRlbSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsImgyIiwiYXJ0aWNsZSIsIm9uQ2xpY2siLCJuYW1lIiwidG9VcHBlckNhc2UiLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsInNyYyIsImltYWdlcyIsImxhbmRzY2FwZSIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Technology/index.js\n");

/***/ })

});