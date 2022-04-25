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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Crew\": function() { return /* binding */ Crew; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _crew_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crew.module.css */ \"./src/components/Crew/crew.module.css\");\n/* harmony import */ var _crew_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_crew_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Crew = function(param) {\n    var crewList = param.crewList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), error1 = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), crew = ref2[0], setCrew = ref2[1];\n    // const [crewItem, setCrewItem] = useState();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        try {\n            setCrew(crewList[0]);\n            setLoading(false);\n        } catch (error) {\n            setError(error);\n            setLoading(false);\n        }\n    }, []);\n    var handleSpanButton = function(item) {\n        setLoading(true);\n        try {\n            setCrew(crewList[item]);\n            setLoading(false);\n        } catch (error) {\n            setError(error);\n            setLoading(false);\n        }\n    };\n    // console.log(crew.name)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-wrapper\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-title\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"02\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"MEET YOUR CREW\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-detail-wrapper\"]),\n                    children: [\n                        loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-detail\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: crew.role.toUpperCase()\n                                }, void 0, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: crew.name.toUpperCase()\n                                }, void 0, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: crew.bio\n                                }, void 0, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 29\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"loading... \"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 29\n                        }, _this),\n                        loading != true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: function() {\n                                        return handleSpanButton(0);\n                                    },\n                                    className: crew.name === \"Douglas Hurley\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                                }, void 0, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: function() {\n                                        return handleSpanButton(1);\n                                    },\n                                    className: crew.name === \"Mark Shuttleworth\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                                }, void 0, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: function() {\n                                        return handleSpanButton(2);\n                                    },\n                                    className: crew.name === \"Victor Glover\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                                }, void 0, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: function() {\n                                        return handleSpanButton(3);\n                                    },\n                                    className: crew.name === \"Anousheh Ansari\" ? (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span-active\"]) : (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-buttons-span\"])\n                                }, void 0, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 29\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Loading...\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_crew_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"crew-image\"]),\n                            children: loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: crew.images.png,\n                                layout: \"responsive\",\n                                objectFit: \"contain\",\n                                width: 500,\n                                height: 500,\n                                alt: \"Images of \".concat(crew.name)\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 33\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"loading...\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Crew/index.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, _this);\n};\n_s(Crew, \"FphvK74YwS3QHQkoGWSjUe3193o=\");\n_c = Crew;\nvar _c;\n$RefreshReg$(_c, \"Crew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUssQ0FBQ08sSUFBSSxLQUFLLG1CQUFtQixHQUFJbkIscUZBQWtDLEdBQUdBLDhFQUEyQjs7Ozs7eUNBQUk7OENBQy9KLDhEQUFDc0IsTUFBSTtvQ0FBQ0MsT0FBTyxFQUFFOytDQUFNZCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7cUNBQUE7b0NBQUVHLFNBQVMsRUFBRSxJQUFLLENBQUNPLElBQUksS0FBSyxlQUFlLEdBQUluQixxRkFBa0MsR0FBR0EsOEVBQTJCOzs7Ozt5Q0FBSTs4Q0FDM0osOERBQUNzQixNQUFJO29DQUFDQyxPQUFPLEVBQUU7K0NBQU1kLGdCQUFnQixDQUFDLENBQUMsQ0FBQztxQ0FBQTtvQ0FBRUcsU0FBUyxFQUFFLElBQUssQ0FBQ08sSUFBSSxLQUFLLGlCQUFpQixHQUFJbkIscUZBQWtDLEdBQUdBLDhFQUEyQjs7Ozs7eUNBQUk7Ozs7OztpQ0FDM0osaUJBRU4sOERBQUNhLEtBQUc7c0NBQUMsWUFBVTs7Ozs7aUNBQU07c0NBRTdCLDhEQUFDQSxLQUFHOzRCQUFDRCxTQUFTLEVBQUVaLHVFQUFvQjtzQ0FFNUIsT0FBUSxJQUFJLEtBQUssaUJBRWIsOERBQUVELG1EQUFLO2dDQUFDeUIsR0FBRyxFQUFFakIsSUFBSSxDQUFDa0IsTUFBTSxDQUFDQyxHQUFHO2dDQUFFQyxNQUFNLEVBQUMsWUFBWTtnQ0FBQ0MsU0FBUyxFQUFDLFNBQVM7Z0NBQUNDLEtBQUssRUFBRSxHQUFHO2dDQUFFQyxNQUFNLEVBQUUsR0FBRztnQ0FBRUMsR0FBRyxFQUFFLFlBQVcsQ0FBWSxPQUFWeEIsSUFBSSxDQUFDWSxJQUFJLENBQUU7Ozs7O3FDQUFJLGlCQUVoSSw4REFBQ04sS0FBRzswQ0FBQyxZQUFVOzs7OztxQ0FBTTs7Ozs7aUNBRzNCOzs7Ozs7eUJBQ0o7Ozs7OztpQkFFSjs7Ozs7YUFFQSxDQUNiO0NBQ0o7R0EvRVlaLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DcmV3L2luZGV4LmpzP2VkNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY3Jldy5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IGNvbnN0IENyZXcgPSAoeyBjcmV3TGlzdCB9KSA9PiB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtjcmV3LCBzZXRDcmV3XSA9IHVzZVN0YXRlKCk7XG4gICAgLy8gY29uc3QgW2NyZXdJdGVtLCBzZXRDcmV3SXRlbV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldENyZXcoY3Jld0xpc3RbMF0pXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGhhbmRsZVNwYW5CdXR0b24gPSAoaXRlbSkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRDcmV3KGNyZXdMaXN0W2l0ZW1dKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKGNyZXcubmFtZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzWydjcmV3LWNvbnRhaW5lciddfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctd3JhcHBlciddfSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY3Jldy10aXRsZSddfSA+XG4gICAgICAgICAgICAgICAgICAgIDxoMz4wMjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5NRUVUIFlPVVIgQ1JFVzwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjcmV3LWRldGFpbC13cmFwcGVyJ119PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAobG9hZGluZyA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY3Jldy1kZXRhaWwnXX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NyZXcucm9sZS50b1VwcGVyQ2FzZSgpfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57Y3Jldy5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NyZXcuYmlvfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5sb2FkaW5nLi4uIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGxvYWRpbmcgIT0gdHJ1ZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctYnV0dG9ucyddfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNwYW5CdXR0b24oMCl9IGNsYXNzTmFtZT17KGNyZXcubmFtZSA9PT0gXCJEb3VnbGFzIEh1cmxleVwiKSA/IHN0eWxlc1snY3Jldy1idXR0b25zLXNwYW4tYWN0aXZlJ10gOiBzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNwYW5CdXR0b24oMSl9IGNsYXNzTmFtZT17KGNyZXcubmFtZSA9PT0gXCJNYXJrIFNodXR0bGV3b3J0aFwiKSA/IHN0eWxlc1snY3Jldy1idXR0b25zLXNwYW4tYWN0aXZlJ10gOiBzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNwYW5CdXR0b24oMil9IGNsYXNzTmFtZT17KGNyZXcubmFtZSA9PT0gXCJWaWN0b3IgR2xvdmVyXCIpID8gc3R5bGVzWydjcmV3LWJ1dHRvbnMtc3Bhbi1hY3RpdmUnXSA6IHN0eWxlc1snY3Jldy1idXR0b25zLXNwYW4nXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlU3BhbkJ1dHRvbigzKX0gY2xhc3NOYW1lPXsoY3Jldy5uYW1lID09PSBcIkFub3VzaGVoIEFuc2FyaVwiKSA/IHN0eWxlc1snY3Jldy1idXR0b25zLXNwYW4tYWN0aXZlJ10gOiBzdHlsZXNbJ2NyZXctYnV0dG9ucy1zcGFuJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NyZXctaW1hZ2UnXX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkaW5nID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgSW1hZ2Ugc3JjPXtjcmV3LmltYWdlcy5wbmd9IGxheW91dD1cInJlc3BvbnNpdmVcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IGFsdD17YEltYWdlcyBvZiAke2NyZXcubmFtZX1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsInN0eWxlcyIsIkNyZXciLCJjcmV3TGlzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNyZXciLCJzZXRDcmV3IiwiaGFuZGxlU3BhbkJ1dHRvbiIsIml0ZW0iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJoMiIsInJvbGUiLCJ0b1VwcGVyQ2FzZSIsImgxIiwibmFtZSIsInAiLCJiaW8iLCJzcGFuIiwib25DbGljayIsInNyYyIsImltYWdlcyIsInBuZyIsImxheW91dCIsIm9iamVjdEZpdCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Crew/index.js\n");

/***/ })

});