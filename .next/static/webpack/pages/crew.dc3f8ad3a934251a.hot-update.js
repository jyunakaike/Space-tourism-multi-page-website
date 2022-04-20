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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Crew\": function() { return /* binding */ Crew; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _crew_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crew.module.css */ \"./src/components/Crew/crew.module.css\");\n/* harmony import */ var _crew_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_crew_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Crew = function(param) {\n    var crewList = param.crewList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), error1 = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), crew = ref2[0], setCrew = ref2[1];\n    // const [crewItem, setCrewItem] = useState();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        try {\n            setCrew(crewList[0]);\n            setLoading(false);\n        } catch (error) {\n            setError(error);\n            setLoading(false);\n        }\n    }, []);\n    var handleSpanButton = function(item) {\n        setLoading(true);\n        try {\n            setCrew(crewList[item]);\n            setLoading(false);\n        } catch (error) {\n            setError(error);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-wrapper\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-title\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"02\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"MEET YOUR CREW\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, _this),\n                    loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-detail\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: crew.role.toUpperCase()\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: crew.name.toUpperCase()\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: crew.bio\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 27\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"loading... \"\n                    }, void 0, false, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 27\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: function() {\n                                    return handleSpanButton(0);\n                                },\n                                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: function() {\n                                    return handleSpanButton(1);\n                                },\n                                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: function() {\n                                    return handleSpanButton(2);\n                                },\n                                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: function() {\n                                    return handleSpanButton(3);\n                                },\n                                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-image\"]),\n                children: loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: crew.images.png,\n                    width: 500,\n                    height: 500,\n                    alt: \"Images of \".concat(crew.name)\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 61,\n                    columnNumber: 25\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"loading...\"\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 25\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, _this);\n};\n_s(Crew, \"FphvK74YwS3QHQkoGWSjUe3193o=\");\n_c = Crew;\nvar _c;\n$RefreshReg$(_c, \"Crew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DcmV3L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNwQjtBQUVPOztBQUUvQixJQUFNSyxJQUFJLEdBQUcsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDM0IsSUFBOEJMLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFOaEQsT0FNa0IsR0FBZ0JBLEdBQWMsR0FBOUIsRUFObEIsVUFNOEIsR0FBSUEsR0FBYyxHQUFsQjtJQUMxQixJQUEwQkEsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBUHhDLE1BT2dCLEdBQWNBLElBQVUsR0FBeEIsRUFQaEIsUUFPMEIsR0FBSUEsSUFBVSxHQUFkO0lBQ3RCLElBQXdCQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFSdEMsSUFRZSxHQUFhQSxJQUFVLEdBQXZCLEVBUmYsT0FRd0IsR0FBSUEsSUFBVSxHQUFkO0lBQ3BCLDhDQUE4QztJQUU5Q0MsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBSTtZQUNBVSxPQUFPLENBQUNOLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQkUsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUVwQixDQUFDLE9BQU9DLEtBQUssRUFBRTtZQUNaQyxRQUFRLENBQUNELEtBQUssQ0FBQztZQUNmRCxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ3BCO0tBQ0osRUFBRSxFQUFFLENBQUM7SUFFTixJQUFNSyxnQkFBZ0IsR0FBRyxTQUFDQyxJQUFJLEVBQUk7UUFDOUJOLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSTtZQUNBSSxPQUFPLENBQUNOLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLENBQUM7WUFDdkJOLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDcEIsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7WUFDWkMsUUFBUSxDQUFDRCxLQUFLLENBQUM7WUFDZkQsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNwQjtLQUNKO0lBRUQscUJBQ0ksOERBQUNPLFNBQU87UUFBQ0MsU0FBUyxFQUFFWiwyRUFBd0I7OzBCQUN4Qyw4REFBQ2EsS0FBRztnQkFBQ0QsU0FBUyxFQUFFWix5RUFBc0I7O2tDQUNsQyw4REFBQ2EsS0FBRzt3QkFBQ0QsU0FBUyxFQUFFWix1RUFBb0I7OzBDQUNoQyw4REFBQ2MsSUFBRTswQ0FBQyxJQUFFOzs7OztxQ0FBSzswQ0FDWCw4REFBQ0MsSUFBRTswQ0FBQyxnQkFBYzs7Ozs7cUNBQUs7Ozs7Ozs2QkFDckI7b0JBRURaLE9BQU8sSUFBSSxLQUFLLGlCQUNYLDhEQUFDVSxLQUFHO3dCQUFDRCxTQUFTLEVBQUVaLHdFQUFxQjs7MENBQ25DLDhEQUFDYyxJQUFFOzBDQUFFUCxJQUFJLENBQUNTLElBQUksQ0FBQ0MsV0FBVyxFQUFFOzs7OztxQ0FBTTswQ0FDbEMsOERBQUNDLElBQUU7MENBQUVYLElBQUksQ0FBQ1ksSUFBSSxDQUFDRixXQUFXLEVBQUU7Ozs7O3FDQUFNOzBDQUNsQyw4REFBQ0csR0FBQzswQ0FBRWIsSUFBSSxDQUFDYyxHQUFHOzs7OztxQ0FBSzs7Ozs7OzZCQUNmLGlCQUNKLDhEQUFDUixLQUFHO2tDQUFDLGFBQVc7Ozs7OzZCQUFNO2tDQUVoQyw4REFBQ0EsS0FBRzt3QkFBQ0QsU0FBUyxFQUFFWix5RUFBc0I7OzBDQUNsQyw4REFBQ3NCLE1BQUk7Z0NBQUNDLE9BQU8sRUFBRTsyQ0FBSWQsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2lDQUFBO2dDQUFFRyxTQUFTLEVBQUVaLDhFQUEyQjs7Ozs7cUNBQUk7MENBQ2xGLDhEQUFDc0IsTUFBSTtnQ0FBQ0MsT0FBTyxFQUFFOzJDQUFJZCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7aUNBQUE7Z0NBQUVHLFNBQVMsRUFBRVosOEVBQTJCOzs7OztxQ0FBSTswQ0FDbEYsOERBQUNzQixNQUFJO2dDQUFDQyxPQUFPLEVBQUU7MkNBQUlkLGdCQUFnQixDQUFDLENBQUMsQ0FBQztpQ0FBQTtnQ0FBRUcsU0FBUyxFQUFFWiw4RUFBMkI7Ozs7O3FDQUFLOzBDQUNuRiw4REFBQ3NCLE1BQUk7Z0NBQUNDLE9BQU8sRUFBRTsyQ0FBSWQsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2lDQUFBO2dDQUFFRyxTQUFTLEVBQUVaLDhFQUEyQjs7Ozs7cUNBQUk7Ozs7Ozs2QkFDaEY7Ozs7OztxQkFDSjswQkFDTiw4REFBQ2EsS0FBRztnQkFBQ0QsU0FBUyxFQUFFWix1RUFBb0I7MEJBRTVCLE9BQVEsSUFBSSxLQUFLLGlCQUViLDhEQUFFRCxtREFBSztvQkFBQ3lCLEdBQUcsRUFBRWpCLElBQUksQ0FBQ2tCLE1BQU0sQ0FBQ0MsR0FBRztvQkFBRUMsS0FBSyxFQUFFLEdBQUc7b0JBQUVDLE1BQU0sRUFBRSxHQUFHO29CQUFFQyxHQUFHLEVBQUUsWUFBVyxDQUFZLE9BQVZ0QixJQUFJLENBQUNZLElBQUksQ0FBRTs7Ozs7eUJBQUksaUJBRXhGLDhEQUFDTixLQUFHOzhCQUFDLFlBQVU7Ozs7O3lCQUFNOzs7OztxQkFHM0I7Ozs7OzthQUNBLENBQ2I7Q0FDSjtHQS9EWVosSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NyZXcvaW5kZXguanM/ZWQ0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jcmV3Lm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgY29uc3QgQ3JldyA9ICh7IGNyZXdMaXN0IH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2NyZXcsIHNldENyZXddID0gdXNlU3RhdGUoKTtcbiAgICAvLyBjb25zdCBbY3Jld0l0ZW0sIHNldENyZXdJdGVtXSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0Q3JldyhjcmV3TGlzdFswXSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlU3BhbkJ1dHRvbiA9IChpdGVtKT0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0Q3JldyhjcmV3TGlzdFtpdGVtXSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1snY3Jldy1jb250YWluZXInXX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjcmV3LXdyYXBwZXInXX0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctdGl0bGUnXX0gPlxuICAgICAgICAgICAgICAgICAgICA8aDM+MDI8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDI+TUVFVCBZT1VSIENSRVc8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKGxvYWRpbmcgPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctZGV0YWlsJ119ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NyZXcucm9sZS50b1VwcGVyQ2FzZSgpfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntjcmV3Lm5hbWUudG9VcHBlckNhc2UoKX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjcmV3LmJpb308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdj5sb2FkaW5nLi4uIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjcmV3LWJ1dHRvbnMnXX0gPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKT0+aGFuZGxlU3BhbkJ1dHRvbigwKX0gY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuJ119IC8+IFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKT0+aGFuZGxlU3BhbkJ1dHRvbigxKX0gY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuJ119IC8+IFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKT0+aGFuZGxlU3BhbkJ1dHRvbigyKX0gY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuJ119ICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKT0+aGFuZGxlU3BhbkJ1dHRvbigzKX0gY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuJ119IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctaW1hZ2UnXX0gPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKGxvYWRpbmcgPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8IEltYWdlIHNyYz17Y3Jldy5pbWFnZXMucG5nfSB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0gYWx0PXtgSW1hZ2VzIG9mICR7Y3Jldy5uYW1lfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsInN0eWxlcyIsIkNyZXciLCJjcmV3TGlzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNyZXciLCJzZXRDcmV3IiwiaGFuZGxlU3BhbkJ1dHRvbiIsIml0ZW0iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJoMiIsInJvbGUiLCJ0b1VwcGVyQ2FzZSIsImgxIiwibmFtZSIsInAiLCJiaW8iLCJzcGFuIiwib25DbGljayIsInNyYyIsImltYWdlcyIsInBuZyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Crew/index.js\n");

/***/ })

});