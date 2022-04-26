(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1695:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Layout_header__ZbfKF",
	"header-menu-container": "Layout_header-menu-container__NZa_E",
	"header-menu": "Layout_header-menu___4JF8",
	"header-menu-active": "Layout_header-menu-active__bSECR",
	"header-menu-icon": "Layout_header-menu-icon__w7w_2"
};


/***/ }),

/***/ 7870:
/***/ ((module) => {

// Exports
module.exports = {
	"Modal": "Modal_Modal__533zj",
	"Modal-header": "Modal_Modal-header__xPBhR",
	"cross": "Modal_cross__1CC2j",
	"Modal-List": "Modal_Modal-List__7Mfxo",
	"Modal-List-detail": "Modal_Modal-List-detail__txbmF"
};


/***/ }),

/***/ 6110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: ./src/components/Modal/Modal.module.css
var Modal_module = __webpack_require__(7870);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
;// CONCATENATED MODULE: ./src/components/Modal/index.js





const Modal = ({ setOpenModal , openModal  })=>{
    const handleCloseMenu = ()=>{
        setOpenModal(!openModal);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Modal_module_default()).Modal,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Modal_module_default())["Modal-header"],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineClose, {
                        className: (Modal_module_default()).cross,
                        onClick: ()=>handleCloseMenu()
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>handleCloseMenu()
                    ,
                    className: (Modal_module_default())["Modal-List"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Modal_module_default())["Modal-List-detail"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "00 "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "HOME "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/destination",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Modal_module_default())["Modal-List-detail"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "01 "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "DESTINATION"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/crew",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Modal_module_default())["Modal-List-detail"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "02 "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "CREW"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/technology",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Modal_module_default())["Modal-List-detail"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "03 "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "TECHNOLOGY"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Modal = (Modal);

;// CONCATENATED MODULE: ./src/assets/shared/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.bc447a32.svg","height":48,"width":48});
// EXTERNAL MODULE: ./src/components/Layout/Layout.module.css
var Layout_module = __webpack_require__(1695);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./src/components/Layout/index.js






// images



const Layout = ({ children  })=>{
    let router = (0,router_namespaceObject.useRouter)();
    const { 0: openModal , 1: setOpenModal  } = (0,external_react_.useState)(false);
    const handleOpenModal = ()=>{
        setOpenModal(!openModal);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Layout_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo,
                        alt: "logo",
                        width: 50,
                        height: 50
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Layout_module_default())["header-menu-container"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: router.pathname === "/" ? (Layout_module_default())["header-menu-active"] : (Layout_module_default())["header-menu"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "00 "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "HOME "
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/destination",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: router.pathname == "/destination" ? (Layout_module_default())["header-menu-active"] : (Layout_module_default())["header-menu"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "01 "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "DESTINATION"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/crew",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: router.pathname == "/crew" ? (Layout_module_default())["header-menu-active"] : (Layout_module_default())["header-menu"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "02 "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "CREW"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/technology",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: router.pathname == "/technology" ? (Layout_module_default())["header-menu-active"] : (Layout_module_default())["header-menu"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "03 "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "TECHNOLOGY"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineMenu, {
                        onClick: handleOpenModal,
                        className: (Layout_module_default())["header-menu-icon"]
                    })
                ]
            }),
            openModal ? /*#__PURE__*/ jsx_runtime_.jsx(components_Modal, {
                openModal: openModal,
                setOpenModal: setOpenModal
            }) : null,
            children
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);
;


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,397,675,676,664], () => (__webpack_exec__(6110)));
module.exports = __webpack_exports__;

})();