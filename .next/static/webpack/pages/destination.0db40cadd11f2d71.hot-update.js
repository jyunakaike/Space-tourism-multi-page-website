"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/destination",{

/***/ "./src/components/Destination/index.js":
/*!*********************************************!*\
  !*** ./src/components/Destination/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _destination_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destination.module.css */ \"./src/components/Destination/destination.module.css\");\n/* harmony import */ var _destination_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_destination_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar destination = function(param) {\n    var destinationNames = param.destinationNames;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(destinationNames), destinationList = ref[0], setDestinationList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(destinationNames[0]), destinationItem = ref1[0], setDestinationItem = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setDestinationList(destinationNames);\n        setDestinationItem(destinationNames[0]);\n    }, []);\n    var handleTitle = function(item) {\n        setDestinationItem(destinationNames[item]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_destination_module_css__WEBPACK_IMPORTED_MODULE_3___default().background),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_destination_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"destination-container\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_destination_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"destination-image\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_destination_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"destination-image-title\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"01\"\n                                }, void 0, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, _this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \" PICK YOUR DESTINATION \"\n                                }, void 0, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_destination_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"destination-image-size\"]),\n                            children: destinationItem ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: destinationItem.images.png,\n                                layout: \"fill\",\n                                objectFit: \"cover\",\n                                alt: destinationItem.name\n                            }, void 0, false, {\n                                fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, _this) : loading\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_destination_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"destination-detail\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_destination_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"destination-nameList\"]),\n                            children: destinationList.map(function(item, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: function() {\n                                        return handleTitle(index);\n                                    },\n                                    className: destinationItem.name === item.name ? (_destination_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"destination-nameList-active\"]) : (_destination_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"destination-nameList-noactive\"]),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: item.name.toUpperCase()\n                                    }, item.name, false, {\n                                        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, item.name, false, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: destinationItem.name.toUpperCase()\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: destinationItem.description\n                        }, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_destination_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"destination-nameList-detail\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"AVG. DISTANCE\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: destinationItem.distance.toUpperCase()\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"EST. TRAVEL TIME\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: destinationItem.travel.toUpperCase()\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/mnt/d/frontendmentor/challenge11/space-tourism/src/components/Destination/index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(destination, \"Poas2aN+IUsBptpg5ytya7o558I=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (destination);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXN0aW5hdGlvbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDcEI7QUFFZTs7QUFFOUMsSUFBTUssV0FBVyxHQUFHLGdCQUEwQjtRQUF2QkMsZ0JBQWdCLFNBQWhCQSxnQkFBZ0I7OztJQUNyQyxJQUE4Q0wsR0FBMEIsR0FBMUJBLCtDQUFRLENBQUNLLGdCQUFnQixDQUFDLEVBTjFFLGVBTXdCLEdBQXdCTCxHQUEwQixHQUFsRCxFQU54QixrQkFNNEMsR0FBSUEsR0FBMEIsR0FBOUI7SUFDMUMsSUFBOENBLElBQTZCLEdBQTdCQSwrQ0FBUSxDQUFDSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQVA3RSxlQU93QixHQUF3QkwsSUFBNkIsR0FBckQsRUFQeEIsa0JBTzRDLEdBQUlBLElBQTZCLEdBQWpDO0lBRTFDQyxnREFBUyxDQUFDLFdBQU07UUFDZE0sa0JBQWtCLENBQUNGLGdCQUFnQixDQUFDLENBQUM7UUFDckNJLGtCQUFrQixDQUFDSixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4QyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBR1AsSUFBT0ssV0FBVyxHQUFHLFNBQUNDLElBQUksRUFBSztRQUM3QkYsa0JBQWtCLENBQUNKLGdCQUFnQixDQUFDTSxJQUFJLENBQUMsQ0FBQztLQUMzQztJQUdELHFCQUNFLDhEQUFDQyxTQUFPO1FBQUNDLFNBQVMsRUFBRVYsMkVBQWlCO2tCQUNuQyw0RUFBQ1ksS0FBRztZQUFDRixTQUFTLEVBQUVWLHlGQUErQjs7OEJBQzdDLDhEQUFDWSxLQUFHO29CQUFDRixTQUFTLEVBQUVWLHFGQUEyQjs7c0NBQ3pDLDhEQUFDWSxLQUFHOzRCQUFDRixTQUFTLEVBQUVWLDJGQUFpQzs7OENBQy9DLDhEQUFDYSxJQUFFOzhDQUFDLElBQUU7Ozs7O3lDQUFLO2dDQUFBLEdBQUM7OENBQUEsOERBQUNDLElBQUU7OENBQUMseUJBQXVCOzs7Ozt5Q0FBSzs7Ozs7O2lDQUN4QztzQ0FDTiw4REFBQ0YsS0FBRzs0QkFBQ0YsU0FBUyxFQUFFViwwRkFBZ0M7c0NBRzVDLGVBQWdCLGlCQUVkLDhEQUFDRCxtREFBSztnQ0FBQ2dCLEdBQUcsRUFBRVYsZUFBZSxDQUFDVyxNQUFNLENBQUNDLEdBQUc7Z0NBQUVDLE1BQU0sRUFBQyxNQUFNO2dDQUFDQyxTQUFTLEVBQUMsT0FBTztnQ0FBQ0MsR0FBRyxFQUFFZixlQUFlLENBQUNnQixJQUFJOzs7OztxQ0FBSSxHQUNuR0MsT0FBTzs7Ozs7aUNBRVQ7Ozs7Ozt5QkFDRjs4QkFDTiw4REFBQ1YsS0FBRztvQkFBQ0YsU0FBUyxFQUFFVixzRkFBNEI7O3NDQUMxQyw4REFBQ1ksS0FBRzs0QkFBQ0YsU0FBUyxFQUFFVix3RkFBOEI7c0NBRTFDRyxlQUFlLENBQUNvQixHQUFHLENBQUMsU0FBQ2YsSUFBSSxFQUFFZ0IsS0FBSztxREFDOUIsOERBQUNaLEtBQUc7b0NBQUNhLE9BQU8sRUFBRTsrQ0FBSWxCLFdBQVcsQ0FBQ2lCLEtBQUssQ0FBQztxQ0FBQTtvQ0FBbUJkLFNBQVMsRUFBRSxlQUFnQixDQUFDVyxJQUFJLEtBQUtiLElBQUksQ0FBQ2EsSUFBSSxHQUFHckIsK0ZBQXNDLEdBQUdBLGlHQUF1Qzs4Q0FDdEwsNEVBQUNhLElBQUU7a0RBQWtCTCxJQUFJLENBQUNhLElBQUksQ0FBQ0ssV0FBVyxFQUFFO3VDQUFuQ2xCLElBQUksQ0FBQ2EsSUFBSTs7Ozs4Q0FBZ0M7bUNBRFJiLElBQUksQ0FBQ2EsSUFBSTs7OzswQ0FFL0M7NkJBQUEsQ0FDUDs7Ozs7aUNBRUM7c0NBRU4sOERBQUNNLElBQUU7c0NBQUV0QixlQUFlLENBQUNnQixJQUFJLENBQUNLLFdBQVcsRUFBRTs7Ozs7aUNBQU07c0NBQzdDLDhEQUFDRSxHQUFDO3NDQUNDdkIsZUFBZSxDQUFDd0IsV0FBVzs7Ozs7aUNBQzFCO3NDQUVKLDhEQUFDQyxJQUFFOzs7O2lDQUFHO3NDQUdOLDhEQUFDbEIsS0FBRzs0QkFBQ0YsU0FBUyxFQUFFViwrRkFBcUM7OzhDQUNuRCw4REFBQ1ksS0FBRzs7c0RBQ0YsOERBQUNDLElBQUU7c0RBQUMsZUFBYTs7Ozs7aURBQUs7c0RBQ3RCLDhEQUFDQyxJQUFFO3NEQUFFVCxlQUFlLENBQUMwQixRQUFRLENBQUNMLFdBQVcsRUFBRTs7Ozs7aURBQU07Ozs7Ozt5Q0FDN0M7OENBRU4sOERBQUNkLEtBQUc7O3NEQUNGLDhEQUFDQyxJQUFFO3NEQUFDLGtCQUFnQjs7Ozs7aURBQUs7c0RBQ3pCLDhEQUFDQyxJQUFFO3NEQUFFVCxlQUFlLENBQUMyQixNQUFNLENBQUNOLFdBQVcsRUFBRTs7Ozs7aURBQU07Ozs7Ozt5Q0FDM0M7Ozs7OztpQ0FDRjs7Ozs7O3lCQUVGOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0csQ0FDWjtDQUNGO0dBbkVLekIsV0FBVztBQXFFakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVzdGluYXRpb24vaW5kZXguanM/ZmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9kZXN0aW5hdGlvbi5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IGRlc3RpbmF0aW9uID0gKHsgZGVzdGluYXRpb25OYW1lcyB9KSA9PiB7XG4gIGNvbnN0IFtkZXN0aW5hdGlvbkxpc3QsIHNldERlc3RpbmF0aW9uTGlzdF0gPSB1c2VTdGF0ZShkZXN0aW5hdGlvbk5hbWVzKTtcbiAgY29uc3QgW2Rlc3RpbmF0aW9uSXRlbSwgc2V0RGVzdGluYXRpb25JdGVtXSA9IHVzZVN0YXRlKGRlc3RpbmF0aW9uTmFtZXNbMF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGVzdGluYXRpb25MaXN0KGRlc3RpbmF0aW9uTmFtZXMpO1xuICAgIHNldERlc3RpbmF0aW9uSXRlbShkZXN0aW5hdGlvbk5hbWVzWzBdKVxuICB9LCBbXSk7XG5cblxuICBjb25zdCAgaGFuZGxlVGl0bGUgPSAoaXRlbSkgPT4ge1xuICAgIHNldERlc3RpbmF0aW9uSXRlbShkZXN0aW5hdGlvbk5hbWVzW2l0ZW1dKVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImRlc3RpbmF0aW9uLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJkZXN0aW5hdGlvbi1pbWFnZVwiXX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImRlc3RpbmF0aW9uLWltYWdlLXRpdGxlXCJdfSA+XG4gICAgICAgICAgICA8aDM+MDE8L2gzPiA8aDI+IFBJQ0sgWU9VUiBERVNUSU5BVElPTiA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJkZXN0aW5hdGlvbi1pbWFnZS1zaXplXCJdfT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAoZGVzdGluYXRpb25JdGVtKVxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtkZXN0aW5hdGlvbkl0ZW0uaW1hZ2VzLnBuZ30gbGF5b3V0PSdmaWxsJyBvYmplY3RGaXQ9J2NvdmVyJyBhbHQ9e2Rlc3RpbmF0aW9uSXRlbS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgIDogbG9hZGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImRlc3RpbmF0aW9uLWRldGFpbFwiXX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImRlc3RpbmF0aW9uLW5hbWVMaXN0XCJdfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGVzdGluYXRpb25MaXN0Lm1hcCgoaXRlbSwgaW5kZXggKT0+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+aGFuZGxlVGl0bGUoaW5kZXgpfSAga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT17KGRlc3RpbmF0aW9uSXRlbS5uYW1lID09PSBpdGVtLm5hbWUpID9zdHlsZXNbICdkZXN0aW5hdGlvbi1uYW1lTGlzdC1hY3RpdmUnXSA6IHN0eWxlc1snZGVzdGluYXRpb24tbmFtZUxpc3Qtbm9hY3RpdmUnXSB9PlxuICAgICAgICAgICAgICAgICAgPGgzIGtleT17aXRlbS5uYW1lfT57aXRlbS5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGgxPntkZXN0aW5hdGlvbkl0ZW0ubmFtZS50b1VwcGVyQ2FzZSgpfTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7ZGVzdGluYXRpb25JdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxociAvPlxuXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZGVzdGluYXRpb24tbmFtZUxpc3QtZGV0YWlsXCJdfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMz5BVkcuIERJU1RBTkNFPC9oMz5cbiAgICAgICAgICAgICAgPGgyPntkZXN0aW5hdGlvbkl0ZW0uZGlzdGFuY2UudG9VcHBlckNhc2UoKX08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMz5FU1QuIFRSQVZFTCBUSU1FPC9oMz5cbiAgICAgICAgICAgICAgPGgyPntkZXN0aW5hdGlvbkl0ZW0udHJhdmVsLnRvVXBwZXJDYXNlKCl9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uID5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZXN0aW5hdGlvblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwic3R5bGVzIiwiZGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbk5hbWVzIiwiZGVzdGluYXRpb25MaXN0Iiwic2V0RGVzdGluYXRpb25MaXN0IiwiZGVzdGluYXRpb25JdGVtIiwic2V0RGVzdGluYXRpb25JdGVtIiwiaGFuZGxlVGl0bGUiLCJpdGVtIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImJhY2tncm91bmQiLCJkaXYiLCJoMyIsImgyIiwic3JjIiwiaW1hZ2VzIiwicG5nIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiYWx0IiwibmFtZSIsImxvYWRpbmciLCJtYXAiLCJpbmRleCIsIm9uQ2xpY2siLCJ0b1VwcGVyQ2FzZSIsImgxIiwicCIsImRlc2NyaXB0aW9uIiwiaHIiLCJkaXN0YW5jZSIsInRyYXZlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Destination/index.js\n");

/***/ })

});