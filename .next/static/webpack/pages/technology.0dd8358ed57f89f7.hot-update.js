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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Technology\": function() { return /* binding */ Technology; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology.module.css */ \"./src/components/Technology/technology.module.css\");\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_technology_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Technology = function(param) {\n    var technologyList = param.technologyList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), technology = ref[0], setTechnology = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), Loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), error1 = ref2[0], setError = ref2[1];\n    var x = window.matchMedia(\"(max-width:820px)\");\n    console.log(x.matches);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[0]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    }, []);\n    var handleButtonNumber = function(item) {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[item]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-wrapper\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-title\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"03\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"SPACE LAUNCH 101\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this),\n                Loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-wrapper\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-numbers\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(0);\n                                            },\n                                            className: technology.name.toUpperCase() === \"LAUNCH VEHICLE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"1\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 228\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(1);\n                                            },\n                                            className: technology.name.toUpperCase() === \"SPACEPORT\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"2\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 223\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(2);\n                                            },\n                                            className: technology.name.toUpperCase() === \"SPACE CAPSULE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"3\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 227\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-detail\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"THE TERMINOLOGY\\u2026\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: technology.name.toUpperCase()\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: technology.description\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-image\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: technology.images.landscape,\n                                width: \"99%\",\n                                height: \"40%\",\n                                layout: \"responsive\",\n                                objectFit: \"contain\",\n                                alt: \"\".concat(technology.name, \"-image\")\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 25\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading\"\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, _this);\n};\n_s(Technology, \"WWLMuFxHdm8veZ7pvi3qPNHl8xg=\");\n_c = Technology;\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVZBLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVjaG5vbG9neS9pbmRleC5qcz8yNjhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGVjaG5vbG9neS5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IFRlY2hub2xvZ3kgPSAoeyB0ZWNobm9sb2d5TGlzdCB9KSA9PiB7XG4gICAgY29uc3QgW3RlY2hub2xvZ3ksIHNldFRlY2hub2xvZ3ldID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgbGV0IHggPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6ODIwcHgpXCIpXG4gICAgY29uc29sZS5sb2coeC5tYXRjaGVzKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0VGVjaG5vbG9neSh0ZWNobm9sb2d5TGlzdFswXSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uTnVtYmVyID0gKGl0ZW0pID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0VGVjaG5vbG9neSh0ZWNobm9sb2d5TGlzdFtpdGVtXSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWNvbnRhaW5lciddfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktd3JhcHBlciddfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LXRpdGxlJ119PlxuICAgICAgICAgICAgICAgICAgICA8aDM+MDM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDI+U1BBQ0UgTEFVTkNIIDEwMTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAoTG9hZGluZyA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS13cmFwcGVyJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXJzJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25OdW1iZXIoMCl9IGNsYXNzTmFtZT17KHRlY2hub2xvZ3kubmFtZS50b1VwcGVyQ2FzZSgpID09PSAnTEFVTkNIIFZFSElDTEUnKSA/IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlci1hY3RpdmUnXSA6IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlciddfT48aDE+MTwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbk51bWJlcigxKX0gY2xhc3NOYW1lPXsodGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTUEFDRVBPUlQnKSA/IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlci1hY3RpdmUnXSA6IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlciddfT48aDE+MjwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbk51bWJlcigyKX0gY2xhc3NOYW1lPXsodGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTUEFDRSBDQVBTVUxFJykgPyBzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXItYWN0aXZlJ10gOiBzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXInXX0+PGgxPjM8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLWRldGFpbCddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUSEUgVEVSTUlOT0xPR1nigKZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RlY2hub2xvZ3kubmFtZS50b1VwcGVyQ2FzZSgpfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGVjaG5vbG9neS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtaW1hZ2UnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXt0ZWNobm9sb2d5LmltYWdlcy5wb3J0cmFpdH0gd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiBhbHQ9e2Ake3RlY2hub2xvZ3kubmFtZX0taW1hZ2VgfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGVjaG5vbG9neS5pbWFnZXMubGFuZHNjYXBlfSB3aWR0aD0nOTklJyBoZWlnaHQ9JzQwJScgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiBhbHQ9e2Ake3RlY2hub2xvZ3kubmFtZX0taW1hZ2VgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwic3R5bGVzIiwiVGVjaG5vbG9neSIsInRlY2hub2xvZ3lMaXN0IiwidGVjaG5vbG9neSIsInNldFRlY2hub2xvZ3kiLCJMb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ4Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaGVzIiwiaGFuZGxlQnV0dG9uTnVtYmVyIiwiaXRlbSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsImgyIiwiYXJ0aWNsZSIsIm9uQ2xpY2siLCJuYW1lIiwidG9VcHBlckNhc2UiLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsInNyYyIsImltYWdlcyIsImxhbmRzY2FwZSIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Technology/index.js\n");

/***/ })

});