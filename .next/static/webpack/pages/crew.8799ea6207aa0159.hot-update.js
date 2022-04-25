"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/crew",{

/***/ "./src/components/Crew/index.js":
/*!**************************************!*\
  !*** ./src/components/Crew/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Crew\": function() { return /* binding */ Crew; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _crew_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crew.module.css */ \"./src/components/Crew/crew.module.css\");\n/* harmony import */ var _crew_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_crew_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Crew = function(param) {\n    var crewList = param.crewList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), error1 = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), crew = ref2[0], setCrew = ref2[1];\n    // const [crewItem, setCrewItem] = useState();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        try {\n            setCrew(crewList[0]);\n            setLoading(false);\n        } catch (error) {\n            setError(error);\n            setLoading(false);\n        }\n    }, []);\n    var handleSpanButton = function(item) {\n        setLoading(true);\n        try {\n            setCrew(crewList[item]);\n            setLoading(false);\n        } catch (error) {\n            setError(error);\n            setLoading(false);\n        }\n    };\n    // console.log(crew.name)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-wrapper\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-title\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"02\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"MEET YOUR CREW\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-detail-wrapper\"]),\n                        children: [\n                            loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-detail\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: crew.role.toUpperCase()\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: crew.name.toUpperCase()\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: crew.bio\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 29\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"loading... \"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 29\n                            }, _this),\n                            loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: function() {\n                                            return handleSpanButton(0);\n                                        },\n                                        className: crew.name === \"Douglas Hurley\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: function() {\n                                            return handleSpanButton(1);\n                                        },\n                                        className: crew.name === \"Mark Shuttleworth\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: function() {\n                                            return handleSpanButton(2);\n                                        },\n                                        className: crew.name === \"Victor Glover\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: function() {\n                                            return handleSpanButton(3);\n                                        },\n                                        className: crew.name === \"Anousheh Ansari\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 29\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-image-mobile\"]),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: crew.images.png,\n                                    layout: \"responsive\",\n                                    objectFit: \"contain\",\n                                    width: 500,\n                                    height: 500,\n                                    alt: \"Images of \".concat(crew.name)\n                                }, void 0, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-image-desk\"]),\n                children: loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: crew.images.png,\n                    layout: \"responsive\",\n                    objectFit: \"contain\",\n                    width: 500,\n                    height: 500,\n                    alt: \"Images of \".concat(crew.name)\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 85,\n                    columnNumber: 25\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"loading...\"\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 87,\n                    columnNumber: 25\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, _this);\n};\n_s(Crew, \"FphvK74YwS3QHQkoGWSjUe3193o=\");\n_c = Crew;\nvar _c;\n$RefreshReg$(_c, \"Crew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ0MsS0FBSyxFQUFFLEdBQUc7b0JBQUVDLE1BQU0sRUFBRSxHQUFHO29CQUFFQyxHQUFHLEVBQUUsWUFBVyxDQUFZLE9BQVZ4QixJQUFJLENBQUNZLElBQUksQ0FBRTs7Ozs7eUJBQUksaUJBRWhJLDhEQUFDTixLQUFHOzhCQUFDLFlBQVU7Ozs7O3lCQUFNOzs7OztxQkFFM0I7Ozs7OzthQUVDLENBQ2Q7Q0FDSjtHQXZGWVosSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NyZXcvaW5kZXguanM/ZWQ0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jcmV3Lm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgY29uc3QgQ3JldyA9ICh7IGNyZXdMaXN0IH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2NyZXcsIHNldENyZXddID0gdXNlU3RhdGUoKTtcbiAgICAvLyBjb25zdCBbY3Jld0l0ZW0sIHNldENyZXdJdGVtXSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0Q3JldyhjcmV3TGlzdFswXSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlU3BhbkJ1dHRvbiA9IChpdGVtKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldENyZXcoY3Jld0xpc3RbaXRlbV0pXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coY3Jldy5uYW1lKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctY29udGFpbmVyJ119PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY3Jldy13cmFwcGVyJ119ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjcmV3LXRpdGxlJ119ID5cbiAgICAgICAgICAgICAgICAgICAgPGgzPjAyPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPk1FRVQgWU9VUiBDUkVXPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctZGV0YWlsLXdyYXBwZXInXX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkaW5nID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjcmV3LWRldGFpbCddfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y3Jldy5yb2xlLnRvVXBwZXJDYXNlKCl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntjcmV3Lm5hbWUudG9VcHBlckNhc2UoKX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y3Jldy5iaW99PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmxvYWRpbmcuLi4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAobG9hZGluZyA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY3Jldy1idXR0b25zJ119ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlU3BhbkJ1dHRvbigwKX0gY2xhc3NOYW1lPXsoY3Jldy5uYW1lID09PSBcIkRvdWdsYXMgSHVybGV5XCIpID8gc3R5bGVzWydjcmV3LWJ1dHRvbnMtc3Bhbi1hY3RpdmUnXSA6IHN0eWxlc1snY3Jldy1idXR0b25zLXNwYW4nXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlU3BhbkJ1dHRvbigxKX0gY2xhc3NOYW1lPXsoY3Jldy5uYW1lID09PSBcIk1hcmsgU2h1dHRsZXdvcnRoXCIpID8gc3R5bGVzWydjcmV3LWJ1dHRvbnMtc3Bhbi1hY3RpdmUnXSA6IHN0eWxlc1snY3Jldy1idXR0b25zLXNwYW4nXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlU3BhbkJ1dHRvbigyKX0gY2xhc3NOYW1lPXsoY3Jldy5uYW1lID09PSBcIlZpY3RvciBHbG92ZXJcIikgPyBzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuLWFjdGl2ZSddIDogc3R5bGVzWydjcmV3LWJ1dHRvbnMtc3BhbiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTcGFuQnV0dG9uKDMpfSBjbGFzc05hbWU9eyhjcmV3Lm5hbWUgPT09IFwiQW5vdXNoZWggQW5zYXJpXCIpID8gc3R5bGVzWydjcmV3LWJ1dHRvbnMtc3Bhbi1hY3RpdmUnXSA6IHN0eWxlc1snY3Jldy1idXR0b25zLXNwYW4nXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY3Jldy1pbWFnZS1tb2JpbGUnXX0gPlxuICAgICAgICAgICAgICAgICAgICA8IEltYWdlIHNyYz17Y3Jldy5pbWFnZXMucG5nfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSBhbHQ9e2BJbWFnZXMgb2YgJHtjcmV3Lm5hbWV9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxvYWRpbmcgPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBJbWFnZSBzcmM9e2NyZXcuaW1hZ2VzLnBuZ30gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0gYWx0PXtgSW1hZ2VzIG9mICR7Y3Jldy5uYW1lfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY3Jldy1pbWFnZS1kZXNrJ119ID5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIChsb2FkaW5nID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPCBJbWFnZSBzcmM9e2NyZXcuaW1hZ2VzLnBuZ30gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0gYWx0PXtgSW1hZ2VzIG9mICR7Y3Jldy5uYW1lfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L3NlY3Rpb24gPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJzdHlsZXMiLCJDcmV3IiwiY3Jld0xpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJjcmV3Iiwic2V0Q3JldyIsImhhbmRsZVNwYW5CdXR0b24iLCJpdGVtIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwiaDIiLCJyb2xlIiwidG9VcHBlckNhc2UiLCJoMSIsIm5hbWUiLCJwIiwiYmlvIiwic3BhbiIsIm9uQ2xpY2siLCJzcmMiLCJpbWFnZXMiLCJwbmciLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Crew/index.js\n");

/***/ })

});