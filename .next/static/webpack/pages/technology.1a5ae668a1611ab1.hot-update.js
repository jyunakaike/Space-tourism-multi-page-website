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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Technology\": function() { return /* binding */ Technology; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology.module.css */ \"./src/components/Technology/technology.module.css\");\n/* harmony import */ var _technology_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_technology_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Technology = function(param) {\n    var technologyList = param.technologyList;\n    var myFunction = function myFunction(x) {\n        if (x.matches) {\n            // document.body.style.backgroundColor = \"yellow\";\n            console.log(\"matches\");\n        } else {\n            document.body.style.backgroundColor = \"pink\";\n            console.log(\"no matches\");\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), technology = ref[0], setTechnology = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), Loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), error1 = ref2[0], setError = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[0]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    }, []);\n    var handleButtonNumber = function(item) {\n        setLoading(true);\n        try {\n            setTechnology(technologyList[item]);\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setError(error);\n        }\n    };\n    var x1 = window.matchMedia(\"(max-width:820px)\");\n    myFunction(x1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-wrapper\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-title\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"03\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"SPACE LAUNCH 101\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, _this),\n                Loading == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-wrapper\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-numbers\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(0);\n                                            },\n                                            className: technology.name.toUpperCase() === \"LAUNCH VEHICLE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"1\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 228\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(1);\n                                            },\n                                            className: technology.name.toUpperCase() === \"SPACEPORT\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"2\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 223\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return handleButtonNumber(2);\n                                            },\n                                            className: technology.name.toUpperCase() === \"SPACE CAPSULE\" ? (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number-active\"]) : (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-number\"]),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: \"3\"\n                                            }, void 0, false, {\n                                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 227\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-detail\"]),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"THE TERMINOLOGY\\u2026\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: technology.name.toUpperCase()\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: technology.description\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_technology_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"technology-article-image\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: technology.images.landscape,\n                                width: \"99%\",\n                                height: \"40%\",\n                                layout: \"responsive\",\n                                objectFit: \"contain\",\n                                alt: \"\".concat(technology.name, \"-image\")\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 61,\n                    columnNumber: 25\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading\"\n                }, void 0, false, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Technology/index.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, _this);\n};\n_s(Technology, \"WWLMuFxHdm8veZ7pvi3qPNHl8xg=\");\n_c = Technology;\nvar _c;\n$RefreshReg$(_c, \"Technology\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2d5L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFnRTtBQUNqQztBQUVjOztBQUV0QyxJQUFNTSxVQUFVLEdBQUcsZ0JBQXdCO1FBQXJCQyxjQUFjLFNBQWRBLGNBQWM7UUEyQjlCQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ25CLElBQUlBLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO1lBQ1gsa0RBQWtEO1lBQ2xEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7U0FDekIsTUFBTTtZQUNIQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzdDTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7U0FDNUI7S0FDSjs7SUFsQ0QsSUFBb0NYLEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQU5sRCxVQU1xQixHQUFtQkEsR0FBVSxHQUE3QixFQU5yQixhQU1vQyxHQUFJQSxHQUFVLEdBQWQ7SUFDaEMsSUFBOEJBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQVA1QyxPQU9rQixHQUFnQkEsSUFBVSxHQUExQixFQVBsQixVQU84QixHQUFJQSxJQUFVLEdBQWQ7SUFDMUIsSUFBMEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFSN0MsTUFRZ0IsR0FBY0EsSUFBZSxHQUE3QixFQVJoQixRQVEwQixHQUFJQSxJQUFlLEdBQW5CO0lBR3RCQyxnREFBUyxDQUFDLFdBQU07UUFDWmtCLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSTtZQUNBRixhQUFhLENBQUNYLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDYSxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ3BCLENBQUMsT0FBT0MsS0FBSyxFQUFFO1lBQ1pELFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakJFLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO1NBQ2xCO0tBQ0osRUFBRSxFQUFFLENBQUM7SUFDTixJQUFNRSxrQkFBa0IsR0FBRyxTQUFDQyxJQUFJLEVBQUs7UUFDakNKLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSTtZQUNBRixhQUFhLENBQUNYLGNBQWMsQ0FBQ2lCLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcENKLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDcEIsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7WUFDWkQsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNqQkUsUUFBUSxDQUFDRCxLQUFLLENBQUM7U0FDbEI7S0FDSjtJQVlELElBQUlaLEVBQUMsR0FBR2dCLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLG1CQUFtQixDQUFDO0lBQzlDbEIsVUFBVSxDQUFDQyxFQUFDLENBQUM7SUFPYixxQkFDSSw4REFBQ2tCLFNBQU87UUFBQ0MsU0FBUyxFQUFFdkIsdUZBQThCO2tCQUM5Qyw0RUFBQ3dCLEtBQUc7WUFBQ0QsU0FBUyxFQUFFdkIscUZBQTRCOzs4QkFDeEMsOERBQUN3QixLQUFHO29CQUFDRCxTQUFTLEVBQUV2QixtRkFBMEI7O3NDQUN0Qyw4REFBQ3lCLElBQUU7c0NBQUMsSUFBRTs7Ozs7aUNBQUs7c0NBQ1gsOERBQUNDLElBQUU7c0NBQUMsa0JBQWdCOzs7OztpQ0FBSzs7Ozs7O3lCQUN2QjtnQkFFRFosT0FBTyxJQUFJLEtBQUssaUJBRWIsOERBQUNVLEtBQUc7b0JBQUNELFNBQVMsRUFBRXZCLDZGQUFvQzs7c0NBQ2hELDhEQUFDMkIsU0FBTzs0QkFBQ0osU0FBUyxFQUFFdkIscUZBQTRCOzs4Q0FDNUMsOERBQUN3QixLQUFHO29DQUFDRCxTQUFTLEVBQUV2Qiw2RkFBb0M7O3NEQUNoRCw4REFBQ3dCLEtBQUc7NENBQUNJLE9BQU8sRUFBRTt1REFBTVYsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOzZDQUFBOzRDQUFFSyxTQUFTLEVBQUUsVUFBVyxDQUFDTSxJQUFJLENBQUNDLFdBQVcsRUFBRSxLQUFLLGdCQUFnQixHQUFJOUIsbUdBQTBDLEdBQUdBLDRGQUFtQztzREFBRSw0RUFBQytCLElBQUU7MERBQUMsR0FBQzs7Ozs7cURBQUs7Ozs7O2lEQUFNO3NEQUMvTSw4REFBQ1AsS0FBRzs0Q0FBQ0ksT0FBTyxFQUFFO3VEQUFNVixrQkFBa0IsQ0FBQyxDQUFDLENBQUM7NkNBQUE7NENBQUVLLFNBQVMsRUFBRSxVQUFXLENBQUNNLElBQUksQ0FBQ0MsV0FBVyxFQUFFLEtBQUssV0FBVyxHQUFJOUIsbUdBQTBDLEdBQUdBLDRGQUFtQztzREFBRSw0RUFBQytCLElBQUU7MERBQUMsR0FBQzs7Ozs7cURBQUs7Ozs7O2lEQUFNO3NEQUMxTSw4REFBQ1AsS0FBRzs0Q0FBQ0ksT0FBTyxFQUFFO3VEQUFNVixrQkFBa0IsQ0FBQyxDQUFDLENBQUM7NkNBQUE7NENBQUVLLFNBQVMsRUFBRSxVQUFXLENBQUNNLElBQUksQ0FBQ0MsV0FBVyxFQUFFLEtBQUssZUFBZSxHQUFJOUIsbUdBQTBDLEdBQUdBLDRGQUFtQztzREFBRSw0RUFBQytCLElBQUU7MERBQUMsR0FBQzs7Ozs7cURBQUs7Ozs7O2lEQUFNOzs7Ozs7eUNBQzVNOzhDQUNOLDhEQUFDUCxLQUFHO29DQUFDRCxTQUFTLEVBQUV2Qiw0RkFBbUM7O3NEQUMvQyw4REFBQ3lCLElBQUU7c0RBQUMsdUJBRUo7Ozs7O2lEQUFLO3NEQUNMLDhEQUFDTSxJQUFFO3NEQUFFbkIsVUFBVSxDQUFDaUIsSUFBSSxDQUFDQyxXQUFXLEVBQUU7Ozs7O2lEQUFNO3NEQUN4Qyw4REFBQ0UsR0FBQztzREFBRXBCLFVBQVUsQ0FBQ3FCLFdBQVc7Ozs7O2lEQUFLOzs7Ozs7eUNBQzdCOzs7Ozs7aUNBQ0E7c0NBQ1YsOERBQUNULEtBQUc7NEJBQUNELFNBQVMsRUFBRXZCLDJGQUFrQztzQ0FDOUMsNEVBQUNELG1EQUFLO2dDQUFDbUMsR0FBRyxFQUFFdEIsVUFBVSxDQUFDdUIsTUFBTSxDQUFDQyxTQUFTO2dDQUFFQyxLQUFLLEVBQUMsS0FBSztnQ0FBQ0MsTUFBTSxFQUFDLEtBQUs7Z0NBQUNDLE1BQU0sRUFBQyxZQUFZO2dDQUFDQyxTQUFTLEVBQUMsU0FBUztnQ0FBQ0MsR0FBRyxFQUFFLEVBQUMsQ0FBa0IsTUFBTSxDQUF0QjdCLFVBQVUsQ0FBQ2lCLElBQUksRUFBQyxRQUFNLENBQUM7Ozs7O3FDQUFJOzs7OztpQ0FHM0k7Ozs7Ozt5QkFDSixpQkFFTiw4REFBQ0wsS0FBRzs4QkFBQyxTQUFPOzs7Ozt5QkFBTTs7Ozs7O2lCQUV4Qjs7Ozs7YUFDQSxDQUNiO0NBQ0o7R0FsRll2QixVQUFVO0FBQVZBLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVjaG5vbG9neS9pbmRleC5qcz8yNjhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RlY2hub2xvZ3kubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBUZWNobm9sb2d5ID0gKHsgdGVjaG5vbG9neUxpc3QgfSkgPT4ge1xuICAgIGNvbnN0IFt0ZWNobm9sb2d5LCBzZXRUZWNobm9sb2d5XSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0VGVjaG5vbG9neSh0ZWNobm9sb2d5TGlzdFswXSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uTnVtYmVyID0gKGl0ZW0pID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0VGVjaG5vbG9neSh0ZWNobm9sb2d5TGlzdFtpdGVtXSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbXlGdW5jdGlvbih4KSB7XG4gICAgICAgIGlmICh4Lm1hdGNoZXMpIHsgLy8gSWYgbWVkaWEgcXVlcnkgbWF0Y2hlc1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtYXRjaGVzXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicGlua1wiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBtYXRjaGVzXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgeCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDo4MjBweClcIilcbiAgICBteUZ1bmN0aW9uKHgpXG5cblxuXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktY29udGFpbmVyJ119PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS13cmFwcGVyJ119PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktdGl0bGUnXX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMz4wMzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5TUEFDRSBMQVVOQ0ggMTAxPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIChMb2FkaW5nID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLXdyYXBwZXInXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZSddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlcnMnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbk51bWJlcigwKX0gY2xhc3NOYW1lPXsodGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdMQVVOQ0ggVkVISUNMRScpID8gc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyLWFjdGl2ZSddIDogc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyJ119PjxoMT4xPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uTnVtYmVyKDEpfSBjbGFzc05hbWU9eyh0ZWNobm9sb2d5Lm5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NQQUNFUE9SVCcpID8gc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyLWFjdGl2ZSddIDogc3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtbnVtYmVyJ119PjxoMT4yPC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uTnVtYmVyKDIpfSBjbGFzc05hbWU9eyh0ZWNobm9sb2d5Lm5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NQQUNFIENBUFNVTEUnKSA/IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlci1hY3RpdmUnXSA6IHN0eWxlc1sndGVjaG5vbG9neS1hcnRpY2xlLW51bWJlciddfT48aDE+MzwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0ZWNobm9sb2d5LWFydGljbGUtZGV0YWlsJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRIRSBURVJNSU5PTE9HWeKAplxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGVjaG5vbG9neS5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0ZWNobm9sb2d5LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RlY2hub2xvZ3ktYXJ0aWNsZS1pbWFnZSddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGVjaG5vbG9neS5pbWFnZXMubGFuZHNjYXBlfSB3aWR0aD0nOTklJyBoZWlnaHQ9JzQwJScgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiBhbHQ9e2Ake3RlY2hub2xvZ3kubmFtZX0taW1hZ2VgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogOiA8SW1hZ2Ugc3JjPXt0ZWNobm9sb2d5LmltYWdlcy5wb3J0cmFpdH0gd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiBhbHQ9e2Ake3RlY2hub2xvZ3kubmFtZX0taW1hZ2VgfSAvPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiSW1hZ2UiLCJzdHlsZXMiLCJUZWNobm9sb2d5IiwidGVjaG5vbG9neUxpc3QiLCJteUZ1bmN0aW9uIiwieCIsIm1hdGNoZXMiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZWNobm9sb2d5Iiwic2V0VGVjaG5vbG9neSIsIkxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUJ1dHRvbk51bWJlciIsIml0ZW0iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwiaDIiLCJhcnRpY2xlIiwib25DbGljayIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsImgxIiwicCIsImRlc2NyaXB0aW9uIiwic3JjIiwiaW1hZ2VzIiwibGFuZHNjYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Technology/index.js\n");

/***/ })

});