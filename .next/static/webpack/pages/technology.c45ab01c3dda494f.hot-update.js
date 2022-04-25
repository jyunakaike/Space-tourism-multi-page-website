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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Technology\": function() { return /* binding */ Technology; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology.module.css */ \"./src/components/Technology/technology.module.css\");\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_technology_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Technology = function(param) {\n    var technologyList = param.technologyList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), technology = ref[0], setTechnology = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), Loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), error1 = ref2[0], setError = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[0]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    }, []);\n    var handleButtonNumber = function(item) {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[item]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-wrapper\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-title\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"03\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"SPACE LAUNCH 101\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, _this),\n                    Loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-numbers\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return handleButtonNumber(0);\n                                        },\n                                        className: technology.name.toUpperCase() === \"LAUNCH VEHICLE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 224\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return handleButtonNumber(1);\n                                        },\n                                        className: technology.name.toUpperCase() === \"SPACEPORT\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: \"2\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 219\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: function() {\n                                            return handleButtonNumber(2);\n                                        },\n                                        className: technology.name.toUpperCase() === \"SPACE CAPSULE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 223\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-detail\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"THE TERMINOLOGY\\u2026\"\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: technology.name.toUpperCase()\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: technology.description\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, _this),\n            Loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-image\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: technology.images.portrait,\n                    width: \"100%\",\n                    height: \"100%\",\n                    layout: \"responsive\",\n                    objectFit: \"contain\",\n                    alt: \"\".concat(technology.name, \"-image\")\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 71,\n                    columnNumber: 25\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                lineNumber: 69,\n                columnNumber: 21\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading..\"\n            }, void 0, false, {\n                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                lineNumber: 75,\n                columnNumber: 21\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, _this);\n};\n_s(Technology, \"WWLMuFxHdm8veZ7pvi3qPNHl8xg=\");\n_c = Technology;\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2d5L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNwQjtBQUljOztBQUV0QyxJQUFNSyxVQUFVLEdBQUcsZ0JBQXdCO1FBQXJCQyxjQUFjLFNBQWRBLGNBQWM7O0lBQ3ZDLElBQW9DTCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFSbEQsVUFRcUIsR0FBbUJBLEdBQVUsR0FBN0IsRUFSckIsYUFRb0MsR0FBSUEsR0FBVSxHQUFkO0lBQ2hDLElBQThCQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFUNUMsT0FTa0IsR0FBZ0JBLElBQVUsR0FBMUIsRUFUbEIsVUFTOEIsR0FBSUEsSUFBVSxHQUFkO0lBQzFCLElBQTBCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBVjdDLE1BVWdCLEdBQWNBLElBQWUsR0FBN0IsRUFWaEIsUUFVMEIsR0FBSUEsSUFBZSxHQUFuQjtJQUV0QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pRLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSTtZQUNBRixhQUFhLENBQUNGLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDSSxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ3BCLENBQUMsT0FBT0MsS0FBSyxFQUFFO1lBQ1pELFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakJFLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO1NBQ2xCO0tBQ0osRUFBRSxFQUFFLENBQUM7SUFDTixJQUFNRSxrQkFBa0IsR0FBRyxTQUFDQyxJQUFJLEVBQUs7UUFDakNKLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSTtZQUNBRixhQUFhLENBQUNGLGNBQWMsQ0FBQ1EsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQ0osVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNwQixDQUFDLE9BQU9DLEtBQUssRUFBRTtZQUNaRCxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pCRSxRQUFRLENBQUNELEtBQUssQ0FBQztTQUNsQjtLQUNKO0lBQ0QscUJBQ0ksOERBQUNJLFNBQU87UUFBQ0MsU0FBUyxFQUFFWix1RkFBOEI7OzBCQUM5Qyw4REFBQ2EsS0FBRztnQkFBQ0QsU0FBUyxFQUFFWixxRkFBNEI7O2tDQUN4Qyw4REFBQ2EsS0FBRzt3QkFBQ0QsU0FBUyxFQUFFWixtRkFBMEI7OzBDQUN0Qyw4REFBQ2MsSUFBRTswQ0FBQyxJQUFFOzs7OztxQ0FBSzswQ0FDWCw4REFBQ0MsSUFBRTswQ0FBQyxrQkFBZ0I7Ozs7O3FDQUFLOzs7Ozs7NkJBQ3ZCO29CQUVEVixPQUFPLElBQUksS0FBSyxpQkFFYiw4REFBQ1csU0FBTzt3QkFBQ0osU0FBUyxFQUFFWixxRkFBNEI7OzBDQUM1Qyw4REFBQ2EsS0FBRztnQ0FBQ0QsU0FBUyxFQUFFWiw2RkFBb0M7O2tEQUNoRCw4REFBQ2EsS0FBRzt3Q0FBQ0ksT0FBTyxFQUFFO21EQUFNUixrQkFBa0IsQ0FBQyxDQUFDLENBQUM7eUNBQUE7d0NBQUVHLFNBQVMsRUFBRSxVQUFXLENBQUNNLElBQUksQ0FBQ0MsV0FBVyxFQUFFLEtBQUssZ0JBQWdCLEdBQUluQixtR0FBMEMsR0FBR0EsNEZBQW1DO2tEQUFFLDRFQUFDb0IsSUFBRTtzREFBQyxHQUFDOzs7OztpREFBSzs7Ozs7NkNBQU07a0RBQy9NLDhEQUFDUCxLQUFHO3dDQUFDSSxPQUFPLEVBQUU7bURBQU1SLGtCQUFrQixDQUFDLENBQUMsQ0FBQzt5Q0FBQTt3Q0FBRUcsU0FBUyxFQUFFLFVBQVcsQ0FBQ00sSUFBSSxDQUFDQyxXQUFXLEVBQUUsS0FBSyxXQUFXLEdBQUluQixtR0FBMEMsR0FBR0EsNEZBQW1DO2tEQUFFLDRFQUFDb0IsSUFBRTtzREFBQyxHQUFDOzs7OztpREFBSzs7Ozs7NkNBQU07a0RBQzFNLDhEQUFDUCxLQUFHO3dDQUFDSSxPQUFPLEVBQUU7bURBQU1SLGtCQUFrQixDQUFDLENBQUMsQ0FBQzt5Q0FBQTt3Q0FBRUcsU0FBUyxFQUFFLFVBQVcsQ0FBQ00sSUFBSSxDQUFDQyxXQUFXLEVBQUUsS0FBSyxlQUFlLEdBQUluQixtR0FBMEMsR0FBR0EsNEZBQW1DO2tEQUFFLDRFQUFDb0IsSUFBRTtzREFBQyxHQUFDOzs7OztpREFBSzs7Ozs7NkNBQU07Ozs7OztxQ0FDNU07MENBR04sOERBQUNQLEtBQUc7Z0NBQUNELFNBQVMsRUFBRVosNEZBQW1DOztrREFDL0MsOERBQUNjLElBQUU7a0RBQUMsdUJBRUo7Ozs7OzZDQUFLO2tEQUNMLDhEQUFDTSxJQUFFO2tEQUFFakIsVUFBVSxDQUFDZSxJQUFJLENBQUNDLFdBQVcsRUFBRTs7Ozs7NkNBQU07a0RBQ3hDLDhEQUFDRSxHQUFDO2tEQUFFbEIsVUFBVSxDQUFDbUIsV0FBVzs7Ozs7NkNBQUs7Ozs7OztxQ0FDN0I7Ozs7Ozs2QkFHQSxpQkFFViw4REFBQ1QsS0FBRztrQ0FBQyxTQUFPOzs7Ozs2QkFBTTs7Ozs7O3FCQUV4QjtZQUdEUixPQUFPLElBQUksS0FBSyxpQkFFYiw4REFBQ1EsS0FBRztnQkFBQ0QsU0FBUyxFQUFFWiwyRkFBa0M7MEJBRTlDLDRFQUFDRCxtREFBSztvQkFBQ3dCLEdBQUcsRUFBRXBCLFVBQVUsQ0FBQ3FCLE1BQU0sQ0FBQ0MsUUFBUTtvQkFBRUMsS0FBSyxFQUFDLE1BQU07b0JBQUNDLE1BQU0sRUFBQyxNQUFNO29CQUFDQyxNQUFNLEVBQUMsWUFBWTtvQkFBQ0MsU0FBUyxFQUFDLFNBQVM7b0JBQUNDLEdBQUcsRUFBRSxFQUFDLENBQWtCLE1BQU0sQ0FBdEIzQixVQUFVLENBQUNlLElBQUksRUFBQyxRQUFNLENBQUM7Ozs7O3lCQUFJOzs7OztxQkFDNUksaUJBR04sOERBQUNHLEdBQUM7MEJBQUMsV0FBUzs7Ozs7cUJBQUk7Ozs7OzthQUlsQixDQUNiO0NBQ0o7R0F6RVlwQixVQUFVO0FBQVZBLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVjaG5vbG9neS9pbmRleC5qcz8yNjhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5cblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RlY2hub2xvZ3kubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBUZWNobm9sb2d5ID0gKHsgdGVjaG5vbG9neUxpc3QgfSkgPT4ge1xuICAgIGNvbnN0IFt0ZWNobm9sb2d5LCBzZXRUZWNobm9sb2d5XSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldFRlY2hub2xvZ3kodGVjaG5vbG9neUxpc3RbMF0pO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIGNvbnN0IGhhbmRsZUJ1dHRvbk51bWJlciA9IChpdGVtKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldFRlY2hub2xvZ3kodGVjaG5vbG9neUxpc3RbaXRlbV0pO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1jb250YWluZXInXX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LXdyYXBwZXInXX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS10aXRsZSddfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzPjAzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlNQQUNFIExBVU5DSCAxMDE8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKExvYWRpbmcgPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXJzJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbk51bWJlcigwKX0gY2xhc3NOYW1lPXsodGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdMQVVOQ0ggVkVISUNMRScpID8gc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyLWFjdGl2ZSddIDogc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyJ119PjxoMT4xPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25OdW1iZXIoMSl9IGNsYXNzTmFtZT17KHRlY2hub2xvZ3kubmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU1BBQ0VQT1JUJykgPyBzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXItYWN0aXZlJ10gOiBzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXInXX0+PGgxPjI8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbk51bWJlcigyKX0gY2xhc3NOYW1lPXsodGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTUEFDRSBDQVBTVUxFJykgPyBzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXItYWN0aXZlJ10gOiBzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1udW1iZXInXX0+PGgxPjM8L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtZGV0YWlsJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUSEUgVEVSTUlOT0xPR1nigKZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0ZWNobm9sb2d5Lm5hbWUudG9VcHBlckNhc2UoKX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGVjaG5vbG9neS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAoTG9hZGluZyA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtaW1hZ2UnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz17dGVjaG5vbG9neS5pbWFnZXMucG9ydHJhaXR9IHdpZHRoPXsxNTAwfSBoZWlnaHQ9ezE1MDB9IGFsdD17YCR7dGVjaG5vbG9neS5uYW1lfS1pbWFnZWB9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGVjaG5vbG9neS5pbWFnZXMucG9ydHJhaXR9IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGxheW91dD1cInJlc3BvbnNpdmVcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgYWx0PXtgJHt0ZWNobm9sb2d5Lm5hbWV9LWltYWdlYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nLi48L3A+XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJzdHlsZXMiLCJUZWNobm9sb2d5IiwidGVjaG5vbG9neUxpc3QiLCJ0ZWNobm9sb2d5Iiwic2V0VGVjaG5vbG9neSIsIkxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUJ1dHRvbk51bWJlciIsIml0ZW0iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJoMiIsImFydGljbGUiLCJvbkNsaWNrIiwibmFtZSIsInRvVXBwZXJDYXNlIiwiaDEiLCJwIiwiZGVzY3JpcHRpb24iLCJzcmMiLCJpbWFnZXMiLCJwb3J0cmFpdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Technology/index.js\n");

/***/ })

});