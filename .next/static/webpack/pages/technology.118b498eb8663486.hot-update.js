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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Technology\": function() { return /* binding */ Technology; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology.module.css */ \"./src/components/Technology/technology.module.css\");\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_technology_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Technology = function(param) {\n    var technologyList = param.technologyList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), technology = ref[0], setTechnology = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), Loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), error1 = ref2[0], setError = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[0]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    }, []);\n    var handleButtonNumber = function(item) {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[item]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-wrapper\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-title\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"03\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"SPACE LAUNCH 101\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this),\n                Loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-wrapper\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-numbers\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(0);\n                                            },\n                                            className: technology.name.toUpperCase() === \"LAUNCH VEHICLE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"1\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 228\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(1);\n                                            },\n                                            className: technology.name.toUpperCase() === \"SPACEPORT\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"2\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 223\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(2);\n                                            },\n                                            className: technology.name.toUpperCase() === \"SPACE CAPSULE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"3\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 227\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-detail\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"THE TERMINOLOGY\\u2026\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: technology.name.toUpperCase()\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: technology.description\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-image\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: technology.images.landscape,\n                                width: \"100%\",\n                                height: \"60%\",\n                                layout: \"responsive\",\n                                objectFit: \"contain\",\n                                alt: \"\".concat(technology.name, \"-image\")\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 25\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading\"\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, _this);\n};\n_s(Technology, \"WWLMuFxHdm8veZ7pvi3qPNHl8xg=\");\n_c = Technology;\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2d5L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNwQjtBQUVjOztBQUV0QyxJQUFNSyxVQUFVLEdBQUcsZ0JBQXdCO1FBQXJCQyxjQUFjLFNBQWRBLGNBQWM7O0lBQ3ZDLElBQW9DTCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFObEQsVUFNcUIsR0FBbUJBLEdBQVUsR0FBN0IsRUFOckIsYUFNb0MsR0FBSUEsR0FBVSxHQUFkO0lBQ2hDLElBQThCQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFQNUMsT0FPa0IsR0FBZ0JBLElBQVUsR0FBMUIsRUFQbEIsVUFPOEIsR0FBSUEsSUFBVSxHQUFkO0lBQzFCLElBQTBCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBUjdDLE1BUWdCLEdBQWNBLElBQWUsR0FBN0IsRUFSaEIsUUFRMEIsR0FBSUEsSUFBZSxHQUFuQjtJQUV0QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pRLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSTtZQUNBRixhQUFhLENBQUNGLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDSSxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ3BCLENBQUMsT0FBT0MsS0FBSyxFQUFFO1lBQ1pELFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakJFLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO1NBQ2xCO0tBQ0osRUFBRSxFQUFFLENBQUM7SUFDTixJQUFNRSxrQkFBa0IsR0FBRyxTQUFDQyxJQUFJLEVBQUs7UUFDakNKLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSTtZQUNBRixhQUFhLENBQUNGLGNBQWMsQ0FBQ1EsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQ0osVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNwQixDQUFDLE9BQU9DLEtBQUssRUFBRTtZQUNaRCxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pCRSxRQUFRLENBQUNELEtBQUssQ0FBQztTQUNsQjtLQUNKO0lBQ0QscUJBQ0ksOERBQUNJLFNBQU87UUFBQ0MsU0FBUyxFQUFFWix1RkFBOEI7a0JBQzlDLDRFQUFDYSxLQUFHO1lBQUNELFNBQVMsRUFBRVoscUZBQTRCOzs4QkFDeEMsOERBQUNhLEtBQUc7b0JBQUNELFNBQVMsRUFBRVosbUZBQTBCOztzQ0FDdEMsOERBQUNjLElBQUU7c0NBQUMsSUFBRTs7Ozs7aUNBQUs7c0NBQ1gsOERBQUNDLElBQUU7c0NBQUMsa0JBQWdCOzs7OztpQ0FBSzs7Ozs7O3lCQUN2QjtnQkFJRFYsT0FBTyxJQUFJLEtBQUssaUJBRWIsOERBQUNRLEtBQUc7b0JBQUNELFNBQVMsRUFBRVosNkZBQW9DOztzQ0FDaEQsOERBQUNnQixTQUFPOzRCQUFDSixTQUFTLEVBQUVaLHFGQUE0Qjs7OENBQzVDLDhEQUFDYSxLQUFHO29DQUFDRCxTQUFTLEVBQUVaLDZGQUFvQzs7c0RBQ2hELDhEQUFDYSxLQUFHOzRDQUFDSSxPQUFPLEVBQUU7dURBQU1SLGtCQUFrQixDQUFDLENBQUMsQ0FBQzs2Q0FBQTs0Q0FBRUcsU0FBUyxFQUFFLFVBQVcsQ0FBQ00sSUFBSSxDQUFDQyxXQUFXLEVBQUUsS0FBSyxnQkFBZ0IsR0FBSW5CLG1HQUEwQyxHQUFHQSw0RkFBbUM7c0RBQUUsNEVBQUNvQixJQUFFOzBEQUFDLEdBQUM7Ozs7O3FEQUFLOzs7OztpREFBTTtzREFDL00sOERBQUNQLEtBQUc7NENBQUNJLE9BQU8sRUFBRTt1REFBTVIsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOzZDQUFBOzRDQUFFRyxTQUFTLEVBQUUsVUFBVyxDQUFDTSxJQUFJLENBQUNDLFdBQVcsRUFBRSxLQUFLLFdBQVcsR0FBSW5CLG1HQUEwQyxHQUFHQSw0RkFBbUM7c0RBQUUsNEVBQUNvQixJQUFFOzBEQUFDLEdBQUM7Ozs7O3FEQUFLOzs7OztpREFBTTtzREFDMU0sOERBQUNQLEtBQUc7NENBQUNJLE9BQU8sRUFBRTt1REFBTVIsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOzZDQUFBOzRDQUFFRyxTQUFTLEVBQUUsVUFBVyxDQUFDTSxJQUFJLENBQUNDLFdBQVcsRUFBRSxLQUFLLGVBQWUsR0FBSW5CLG1HQUEwQyxHQUFHQSw0RkFBbUM7c0RBQUUsNEVBQUNvQixJQUFFOzBEQUFDLEdBQUM7Ozs7O3FEQUFLOzs7OztpREFBTTs7Ozs7O3lDQUM1TTs4Q0FDTiw4REFBQ1AsS0FBRztvQ0FBQ0QsU0FBUyxFQUFFWiw0RkFBbUM7O3NEQUMvQyw4REFBQ2MsSUFBRTtzREFBQyx1QkFFSjs7Ozs7aURBQUs7c0RBQ0wsOERBQUNNLElBQUU7c0RBQUVqQixVQUFVLENBQUNlLElBQUksQ0FBQ0MsV0FBVyxFQUFFOzs7OztpREFBTTtzREFDeEMsOERBQUNFLEdBQUM7c0RBQUVsQixVQUFVLENBQUNtQixXQUFXOzs7OztpREFBSzs7Ozs7O3lDQUM3Qjs7Ozs7O2lDQUNBO3NDQUNWLDhEQUFDVCxLQUFHOzRCQUFDRCxTQUFTLEVBQUVaLDJGQUFrQztzQ0FFOUMsNEVBQUNELG1EQUFLO2dDQUFDd0IsR0FBRyxFQUFFcEIsVUFBVSxDQUFDcUIsTUFBTSxDQUFDQyxTQUFTO2dDQUFFQyxLQUFLLEVBQUMsTUFBTTtnQ0FBQ0MsTUFBTSxFQUFDLEtBQUs7Z0NBQUNDLE1BQU0sRUFBQyxZQUFZO2dDQUFDQyxTQUFTLEVBQUMsU0FBUztnQ0FBQ0MsR0FBRyxFQUFFLEVBQUMsQ0FBa0IsTUFBTSxDQUF0QjNCLFVBQVUsQ0FBQ2UsSUFBSSxFQUFDLFFBQU0sQ0FBQzs7Ozs7cUNBQUk7Ozs7O2lDQUM1STs7Ozs7O3lCQUNKLGlCQUVOLDhEQUFDTCxLQUFHOzhCQUFDLFNBQU87Ozs7O3lCQUFNOzs7Ozs7aUJBRXhCOzs7OzthQUlBLENBQ2I7Q0FDSjtHQWxFWVosVUFBVTtBQUFWQSxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RlY2hub2xvZ3kvaW5kZXguanM/MjY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RlY2hub2xvZ3kubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBUZWNobm9sb2d5ID0gKHsgdGVjaG5vbG9neUxpc3QgfSkgPT4ge1xuICAgIGNvbnN0IFt0ZWNobm9sb2d5LCBzZXRUZWNobm9sb2d5XSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldFRlY2hub2xvZ3kodGVjaG5vbG9neUxpc3RbMF0pO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIGNvbnN0IGhhbmRsZUJ1dHRvbk51bWJlciA9IChpdGVtKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldFRlY2hub2xvZ3kodGVjaG5vbG9neUxpc3RbaXRlbV0pO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1jb250YWluZXInXX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LXdyYXBwZXInXX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS10aXRsZSddfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzPjAzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlNQQUNFIExBVU5DSCAxMDE8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIChMb2FkaW5nID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLXdyYXBwZXInXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZSddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlcnMnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbk51bWJlcigwKX0gY2xhc3NOYW1lPXsodGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdMQVVOQ0ggVkVISUNMRScpID8gc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyLWFjdGl2ZSddIDogc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyJ119PjxoMT4xPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uTnVtYmVyKDEpfSBjbGFzc05hbWU9eyh0ZWNobm9sb2d5Lm5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NQQUNFUE9SVCcpID8gc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyLWFjdGl2ZSddIDogc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyJ119PjxoMT4yPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uTnVtYmVyKDIpfSBjbGFzc05hbWU9eyh0ZWNobm9sb2d5Lm5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NQQUNFIENBUFNVTEUnKSA/IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlci1hY3RpdmUnXSA6IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlciddfT48aDE+MzwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtZGV0YWlsJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRIRSBURVJNSU5PTE9HWeKAplxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0ZWNobm9sb2d5LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1pbWFnZSddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9e3RlY2hub2xvZ3kuaW1hZ2VzLnBvcnRyYWl0fSB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIGFsdD17YCR7dGVjaG5vbG9neS5uYW1lfS1pbWFnZWB9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0ZWNobm9sb2d5LmltYWdlcy5sYW5kc2NhcGV9IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzYwJScgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiBhbHQ9e2Ake3RlY2hub2xvZ3kubmFtZX0taW1hZ2VgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwic3R5bGVzIiwiVGVjaG5vbG9neSIsInRlY2hub2xvZ3lMaXN0IiwidGVjaG5vbG9neSIsInNldFRlY2hub2xvZ3kiLCJMb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVCdXR0b25OdW1iZXIiLCJpdGVtIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwiaDIiLCJhcnRpY2xlIiwib25DbGljayIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsImgxIiwicCIsImRlc2NyaXB0aW9uIiwic3JjIiwiaW1hZ2VzIiwibGFuZHNjYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Technology/index.js\n");

/***/ })

});