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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Technology\": function() { return /* binding */ Technology; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology.module.css */ \"./src/components/Technology/technology.module.css\");\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_technology_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Technology = function(param) {\n    var technologyList = param.technologyList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), technology = ref[0], setTechnology = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), Loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), error1 = ref2[0], setError = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[0]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    }, []);\n    var handleButtonNumber = function(item) {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[item]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-wrapper\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-title\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"03\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"SPACE LAUNCH 101\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, _this),\n                    Loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-numbers\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return handleButtonNumber(0);\n                                        },\n                                        className: technology.name.toUpperCase() === \"LAUNCH VEHICLE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 224\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return handleButtonNumber(1);\n                                        },\n                                        className: technology.name.toUpperCase() === \"SPACEPORT\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: \"2\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 219\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return handleButtonNumber(2);\n                                        },\n                                        className: technology.name.toUpperCase() === \"SPACE CAPSULE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 223\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-detail\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"THE TERMINOLOGY\\u2026\"\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: technology.name.toUpperCase()\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: technology.description\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, _this),\n            Loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-image\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: technology.images.portrait,\n                    width: \"100%\",\n                    height: \"100%\",\n                    alt: \"\".concat(technology.name, \"-image\")\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 71,\n                    columnNumber: 25\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                lineNumber: 69,\n                columnNumber: 21\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading..\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                lineNumber: 75,\n                columnNumber: 21\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, _this);\n};\n_s(Technology, \"WWLMuFxHdm8veZ7pvi3qPNHl8xg=\");\n_c = Technology;\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2d5L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNwQjtBQUljOztBQUV0QyxJQUFNSyxVQUFVLEdBQUcsZ0JBQXdCO1FBQXJCQyxjQUFjLFNBQWRBLGNBQWM7O0lBQ3ZDLElBQW9DTCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFSbEQsVUFRcUIsR0FBbUJBLEdBQVUsR0FBN0IsRUFSckIsYUFRb0MsR0FBSUEsR0FBVSxHQUFkO0lBQ2hDLElBQThCQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFUNUMsT0FTa0IsR0FBZ0JBLElBQVUsR0FBMUIsRUFUbEIsVUFTOEIsR0FBSUEsSUFBVSxHQUFkO0lBQzFCLElBQTBCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBVjdDLE1BVWdCLEdBQWNBLElBQWUsR0FBN0IsRUFWaEIsUUFVMEIsR0FBSUEsSUFBZSxHQUFuQjtJQUV0QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pRLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSTtZQUNBRixhQUFhLENBQUNGLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDSSxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ3BCLENBQUMsT0FBT0MsS0FBSyxFQUFFO1lBQ1pELFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakJFLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO1NBQ2xCO0tBQ0osRUFBRSxFQUFFLENBQUM7SUFDTixJQUFNRSxrQkFBa0IsR0FBRyxTQUFDQyxJQUFJLEVBQUs7UUFDakNKLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSTtZQUNBRixhQUFhLENBQUNGLGNBQWMsQ0FBQ1EsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQ0osVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNwQixDQUFDLE9BQU9DLEtBQUssRUFBRTtZQUNaRCxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pCRSxRQUFRLENBQUNELEtBQUssQ0FBQztTQUNsQjtLQUNKO0lBQ0QscUJBQ0ksOERBQUNJLFNBQU87UUFBQ0MsU0FBUyxFQUFFWix1RkFBOEI7OzBCQUM5Qyw4REFBQ2EsS0FBRztnQkFBQ0QsU0FBUyxFQUFFWixxRkFBNEI7O2tDQUN4Qyw4REFBQ2EsS0FBRzt3QkFBQ0QsU0FBUyxFQUFFWixtRkFBMEI7OzBDQUN0Qyw4REFBQ2MsSUFBRTswQ0FBQyxJQUFFOzs7OztxQ0FBSzswQ0FDWCw4REFBQ0MsSUFBRTswQ0FBQyxrQkFBZ0I7Ozs7O3FDQUFLOzs7Ozs7NkJBQ3ZCO29CQUVEVixPQUFPLElBQUksS0FBSyxpQkFFYiw4REFBQ1csU0FBTzt3QkFBQ0osU0FBUyxFQUFFWixxRkFBNEI7OzBDQUM1Qyw4REFBQ2EsS0FBRztnQ0FBQ0QsU0FBUyxFQUFFWiw2RkFBb0M7O2tEQUNoRCw4REFBQ2EsS0FBRzt3Q0FBQ0ksT0FBTyxFQUFFO21EQUFNUixrQkFBa0IsQ0FBQyxDQUFDLENBQUM7eUNBQUE7d0NBQUVHLFNBQVMsRUFBRSxVQUFXLENBQUNNLElBQUksQ0FBQ0MsV0FBVyxFQUFFLEtBQUssZ0JBQWdCLEdBQUluQixtR0FBMEMsR0FBR0EsNEZBQW1DO2tEQUFFLDRFQUFDb0IsSUFBRTtzREFBQyxHQUFDOzs7OztpREFBSzs7Ozs7NkNBQU07a0RBQy9NLDhEQUFDUCxLQUFHO3dDQUFDSSxPQUFPLEVBQUU7bURBQU1SLGtCQUFrQixDQUFDLENBQUMsQ0FBQzt5Q0FBQTt3Q0FBRUcsU0FBUyxFQUFFLFVBQVcsQ0FBQ00sSUFBSSxDQUFDQyxXQUFXLEVBQUUsS0FBSyxXQUFXLEdBQUluQixtR0FBMEMsR0FBR0EsNEZBQW1DO2tEQUFFLDRFQUFDb0IsSUFBRTtzREFBQyxHQUFDOzs7OztpREFBSzs7Ozs7NkNBQU07a0RBQzFNLDhEQUFDUCxLQUFHO3dDQUFDSSxPQUFPLEVBQUU7bURBQU1SLGtCQUFrQixDQUFDLENBQUMsQ0FBQzt5Q0FBQTt3Q0FBRUcsU0FBUyxFQUFFLFVBQVcsQ0FBQ00sSUFBSSxDQUFDQyxXQUFXLEVBQUUsS0FBSyxlQUFlLEdBQUluQixtR0FBMEMsR0FBR0EsNEZBQW1DO2tEQUFFLDRFQUFDb0IsSUFBRTtzREFBQyxHQUFDOzs7OztpREFBSzs7Ozs7NkNBQU07Ozs7OztxQ0FDNU07MENBR04sOERBQUNQLEtBQUc7Z0NBQUNELFNBQVMsRUFBRVosNEZBQW1DOztrREFDL0MsOERBQUNjLElBQUU7a0RBQUMsdUJBRUo7Ozs7OzZDQUFLO2tEQUNMLDhEQUFDTSxJQUFFO2tEQUFFakIsVUFBVSxDQUFDZSxJQUFJLENBQUNDLFdBQVcsRUFBRTs7Ozs7NkNBQU07a0RBQ3hDLDhEQUFDRSxHQUFDO2tEQUFFbEIsVUFBVSxDQUFDbUIsV0FBVzs7Ozs7NkNBQUs7Ozs7OztxQ0FDN0I7Ozs7Ozs2QkFHQSxpQkFFViw4REFBQ1QsS0FBRztrQ0FBQyxTQUFPOzs7Ozs2QkFBTTs7Ozs7O3FCQUV4QjtZQUdEUixPQUFPLElBQUksS0FBSyxpQkFFYiw4REFBQ1EsS0FBRztnQkFBQ0QsU0FBUyxFQUFFWiwyRkFBa0M7MEJBRTlDLDRFQUFDRCxtREFBSztvQkFBQ3dCLEdBQUcsRUFBRXBCLFVBQVUsQ0FBQ3FCLE1BQU0sQ0FBQ0MsUUFBUTtvQkFBRUMsS0FBSyxFQUFDLE1BQU07b0JBQUNDLE1BQU0sRUFBQyxNQUFNO29CQUFDQyxHQUFHLEVBQUUsRUFBQyxDQUFrQixNQUFNLENBQXRCekIsVUFBVSxDQUFDZSxJQUFJLEVBQUMsUUFBTSxDQUFDOzs7Ozt5QkFBSTs7Ozs7cUJBQ3BHLGlCQUdOLDhEQUFDRyxHQUFDOzBCQUFDLFdBQVM7Ozs7O3FCQUFJOzs7Ozs7YUFJbEIsQ0FDYjtDQUNKO0dBekVZcEIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RlY2hub2xvZ3kvaW5kZXguanM/MjY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90ZWNobm9sb2d5Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgVGVjaG5vbG9neSA9ICh7IHRlY2hub2xvZ3lMaXN0IH0pID0+IHtcbiAgICBjb25zdCBbdGVjaG5vbG9neSwgc2V0VGVjaG5vbG9neV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRUZWNobm9sb2d5KHRlY2hub2xvZ3lMaXN0WzBdKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcbiAgICBjb25zdCBoYW5kbGVCdXR0b25OdW1iZXIgPSAoaXRlbSkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRUZWNobm9sb2d5KHRlY2hub2xvZ3lMaXN0W2l0ZW1dKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktY29udGFpbmVyJ119PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS13cmFwcGVyJ119PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktdGl0bGUnXX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMz4wMzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5TUEFDRSBMQVVOQ0ggMTAxPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIChMb2FkaW5nID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZSddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVycyddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25OdW1iZXIoMCl9IGNsYXNzTmFtZT17KHRlY2hub2xvZ3kubmFtZS50b1VwcGVyQ2FzZSgpID09PSAnTEFVTkNIIFZFSElDTEUnKSA/IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlci1hY3RpdmUnXSA6IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlciddfT48aDE+MTwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uTnVtYmVyKDEpfSBjbGFzc05hbWU9eyh0ZWNobm9sb2d5Lm5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NQQUNFUE9SVCcpID8gc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyLWFjdGl2ZSddIDogc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyJ119PjxoMT4yPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25OdW1iZXIoMil9IGNsYXNzTmFtZT17KHRlY2hub2xvZ3kubmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU1BBQ0UgQ0FQU1VMRScpID8gc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyLWFjdGl2ZSddIDogc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyJ119PjxoMT4zPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLWRldGFpbCddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEhFIFRFUk1JTk9MT0dZ4oCmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RlY2hub2xvZ3kuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgKExvYWRpbmcgPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLWltYWdlJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9e3RlY2hub2xvZ3kuaW1hZ2VzLnBvcnRyYWl0fSB3aWR0aD17MTUwMH0gaGVpZ2h0PXsxNTAwfSBhbHQ9e2Ake3RlY2hub2xvZ3kubmFtZX0taW1hZ2VgfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RlY2hub2xvZ3kuaW1hZ2VzLnBvcnRyYWl0fSB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBhbHQ9e2Ake3RlY2hub2xvZ3kubmFtZX0taW1hZ2VgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcuLjwvcD5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsInN0eWxlcyIsIlRlY2hub2xvZ3kiLCJ0ZWNobm9sb2d5TGlzdCIsInRlY2hub2xvZ3kiLCJzZXRUZWNobm9sb2d5IiwiTG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQnV0dG9uTnVtYmVyIiwiaXRlbSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsImgyIiwiYXJ0aWNsZSIsIm9uQ2xpY2siLCJuYW1lIiwidG9VcHBlckNhc2UiLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsInNyYyIsImltYWdlcyIsInBvcnRyYWl0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Technology/index.js\n");

/***/ })

});