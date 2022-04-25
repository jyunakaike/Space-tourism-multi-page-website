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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Crew\": function() { return /* binding */ Crew; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _crew_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crew.module.css */ \"./src/components/Crew/crew.module.css\");\n/* harmony import */ var _crew_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_crew_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Crew = function(param) {\n    var crewList = param.crewList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), error1 = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), crew = ref2[0], setCrew = ref2[1];\n    // const [crewItem, setCrewItem] = useState();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        try {\n            setCrew(crewList[0]);\n            setLoading(false);\n        } catch (error) {\n            setError(error);\n            setLoading(false);\n        }\n    }, []);\n    var handleSpanButton = function(item) {\n        setLoading(true);\n        try {\n            setCrew(crewList[item]);\n            setLoading(false);\n        } catch (error) {\n            setError(error);\n            setLoading(false);\n        }\n    };\n    // console.log(crew.name)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-wrapper\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-title\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"02\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"MEET YOUR CREW\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this),\n                loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-detail\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: crew.role.toUpperCase()\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: crew.name.toUpperCase()\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: crew.bio\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 48,\n                    columnNumber: 25\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"loading... \"\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 25\n                }, _this),\n                loading != true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            onClick: function() {\n                                return handleSpanButton(0);\n                            },\n                            className: crew.name === \"Douglas Hurley\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            onClick: function() {\n                                return handleSpanButton(1);\n                            },\n                            className: crew.name === \"Mark Shuttleworth\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            onClick: function() {\n                                return handleSpanButton(2);\n                            },\n                            className: crew.name === \"Victor Glover\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            onClick: function() {\n                                return handleSpanButton(3);\n                            },\n                            className: crew.name === \"Anousheh Ansari\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 25\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 67,\n                    columnNumber: 25\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-image\"]),\n                    children: loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: crew.images.png,\n                        layout: \"responsive\",\n                        objectFit: \"contain\",\n                        width: 500,\n                        height: 500,\n                        alt: \"Images of \".concat(crew.name)\n                    }, void 0, false, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 29\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"loading...\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 29\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, _this);\n};\n_s(Crew, \"FphvK74YwS3QHQkoGWSjUe3193o=\");\n_c = Crew;\nvar _c;\n$RefreshReg$(_c, \"Crew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdBLDhFQUEyQjs7Ozs7aUNBQUk7c0NBQy9KLDhEQUFDc0IsTUFBSTs0QkFBQ0MsT0FBTyxFQUFFO3VDQUFNZCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7NkJBQUE7NEJBQUVHLFNBQVMsRUFBRSxJQUFLLENBQUNPLElBQUksS0FBSyxlQUFlLEdBQUluQixxRkFBa0MsR0FBR0EsOEVBQTJCOzs7OztpQ0FBSTtzQ0FDM0osOERBQUNzQixNQUFJOzRCQUFDQyxPQUFPLEVBQUU7dUNBQU1kLGdCQUFnQixDQUFDLENBQUMsQ0FBQzs2QkFBQTs0QkFBRUcsU0FBUyxFQUFFLElBQUssQ0FBQ08sSUFBSSxLQUFLLGlCQUFpQixHQUFJbkIscUZBQWtDLEdBQUdBLDhFQUEyQjs7Ozs7aUNBQUk7Ozs7Ozt5QkFDM0osaUJBRU4sOERBQUNhLEtBQUc7OEJBQUMsWUFBVTs7Ozs7eUJBQU07OEJBRTdCLDhEQUFDQSxLQUFHO29CQUFDRCxTQUFTLEVBQUVaLHVFQUFvQjs4QkFFNUIsT0FBUSxJQUFJLEtBQUssaUJBRWIsOERBQUVELG1EQUFLO3dCQUFDeUIsR0FBRyxFQUFFakIsSUFBSSxDQUFDa0IsTUFBTSxDQUFDQyxHQUFHO3dCQUFFQyxNQUFNLEVBQUMsWUFBWTt3QkFBQ0MsU0FBUyxFQUFDLFNBQVM7d0JBQUNDLEtBQUssRUFBRSxHQUFHO3dCQUFFQyxNQUFNLEVBQUUsR0FBRzt3QkFBRUMsR0FBRyxFQUFFLFlBQVcsQ0FBWSxPQUFWeEIsSUFBSSxDQUFDWSxJQUFJLENBQUU7Ozs7OzZCQUFJLGlCQUVoSSw4REFBQ04sS0FBRztrQ0FBQyxZQUFVOzs7Ozs2QkFBTTs7Ozs7eUJBRzNCOzs7Ozs7aUJBQ0o7Ozs7O2FBSUEsQ0FDYjtDQUNKO0dBL0VZWixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3Jldy9pbmRleC5qcz9lZDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NyZXcubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCBjb25zdCBDcmV3ID0gKHsgY3Jld0xpc3QgfSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbY3Jldywgc2V0Q3Jld10gPSB1c2VTdGF0ZSgpO1xuICAgIC8vIGNvbnN0IFtjcmV3SXRlbSwgc2V0Q3Jld0l0ZW1dID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRDcmV3KGNyZXdMaXN0WzBdKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBoYW5kbGVTcGFuQnV0dG9uID0gKGl0ZW0pID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0Q3JldyhjcmV3TGlzdFtpdGVtXSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjcmV3Lm5hbWUpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1snY3Jldy1jb250YWluZXInXX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjcmV3LXdyYXBwZXInXX0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctdGl0bGUnXX0gPlxuICAgICAgICAgICAgICAgICAgICA8aDM+MDI8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDI+TUVFVCBZT1VSIENSRVc8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctZGV0YWlsLXdyYXBwZXInXX0+ICovfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKGxvYWRpbmcgPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjcmV3LWRldGFpbCddfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjcmV3LnJvbGUudG9VcHBlckNhc2UoKX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57Y3Jldy5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y3Jldy5iaW99PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmxvYWRpbmcuLi4gPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAobG9hZGluZyAhPSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY3Jldy1idXR0b25zJ119ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTcGFuQnV0dG9uKDApfSBjbGFzc05hbWU9eyhjcmV3Lm5hbWUgPT09IFwiRG91Z2xhcyBIdXJsZXlcIikgPyBzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuLWFjdGl2ZSddIDogc3R5bGVzWydjcmV3LWJ1dHRvbnMtc3BhbiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNwYW5CdXR0b24oMSl9IGNsYXNzTmFtZT17KGNyZXcubmFtZSA9PT0gXCJNYXJrIFNodXR0bGV3b3J0aFwiKSA/IHN0eWxlc1snY3Jldy1idXR0b25zLXNwYW4tYWN0aXZlJ10gOiBzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlU3BhbkJ1dHRvbigyKX0gY2xhc3NOYW1lPXsoY3Jldy5uYW1lID09PSBcIlZpY3RvciBHbG92ZXJcIikgPyBzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuLWFjdGl2ZSddIDogc3R5bGVzWydjcmV3LWJ1dHRvbnMtc3BhbiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNwYW5CdXR0b24oMyl9IGNsYXNzTmFtZT17KGNyZXcubmFtZSA9PT0gXCJBbm91c2hlaCBBbnNhcmlcIikgPyBzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuLWFjdGl2ZSddIDogc3R5bGVzWydjcmV3LWJ1dHRvbnMtc3BhbiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY3Jldy1pbWFnZSddfSA+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkaW5nID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IEltYWdlIHNyYz17Y3Jldy5pbWFnZXMucG5nfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSBhbHQ9e2BJbWFnZXMgb2YgJHtjcmV3Lm5hbWV9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJzdHlsZXMiLCJDcmV3IiwiY3Jld0xpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJjcmV3Iiwic2V0Q3JldyIsImhhbmRsZVNwYW5CdXR0b24iLCJpdGVtIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwiaDIiLCJyb2xlIiwidG9VcHBlckNhc2UiLCJoMSIsIm5hbWUiLCJwIiwiYmlvIiwic3BhbiIsIm9uQ2xpY2siLCJzcmMiLCJpbWFnZXMiLCJwbmciLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Crew/index.js\n");

/***/ })

});