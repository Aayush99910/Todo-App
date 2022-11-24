/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Gugi&family=Jaldi&family=Montserrat:wght@600&family=MuseoModerno&family=Noto+Serif+Khojki:wght@600&family=Roboto+Mono&family=Roboto:wght@300&family=Salsa&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-footer-color: #3C4048;\n    /* colors for header and footer */\n    /* BA94D1 */\n    /* 5DA7DB */\n    /* 3C4048 */\n    /* 0D4C92 */\n    --sidebar-bg-color: #EFEFEF;\n    --sidebar-hover-bg-color: #c2c0c0;\n}\n\n.green {\n    background-color: rgb(81, 167, 81);\n}\n\n.yellow {\n    background-color: rgb(210, 165, 94);\n}\n\n.red {\n    background-color: rgb(203, 86, 86);\n}\n\nbody {\n    height: 100vh;\n    background-color: #D9D9D9;\n    display: flex;\n    flex-direction: column;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nheader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--header-footer-color);\n    padding: 10px;\n}\n\nheader p {\n    font-family: \"Gugi\", sans-serif;\n    font-size: 55px;\n    color: white;\n}\n\n#g {\n    color: black;\n}\n\n#i {\n    color: green;\n}\n\nheader > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader > div > button {\n    padding: 5px 10px;\n    background-color: black;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 20px;\n    font-family: \"Comic Neue\", sans-serif;\n}\n\nmain {\n    width: 100%;\n    height: 80%;\n    display: flex;\n}\n\n.sidebar-container {\n    height: 100%;\n    width: 20%;\n    padding: 30px 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: var(--sidebar-bg-color);\n}\n\n.sidebar-container-div {\n    height: 40px;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    font-family: \"Comic Neue\", sans-serif;\n    font-size: 20px;\n    padding: 2px 2px;\n    align-items: center;\n    transition: 0.20s;\n}\n\n.sidebar-container-div:hover {\n    cursor: pointer;\n    background-color: var(--sidebar-hover-bg-color);\n}\n\n.main-body-container {\n    width: 80%;\n    height: 100%;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    overflow-y: scroll;\n}\n\n.add-btn-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.body-heading {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 30px;\n}\n\n.main-body-todos {\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    display: flex;\n}\n\n.todo-container {\n    width: 100%;}\n\n.todo-container-heading {\n    display: flex;\n    height: 40px;\n    width: 100%;\n    justify-content: space-between;\n    padding: 8px;\n    align-items: center;\n    border-radius: 3px;\n}\n\n.todo-container-heading:hover {\n    cursor: pointer;\n    background-color: #c0c0c0;\n}\n\n.empty-todos {\n    font-family: \"Comic Neue\", sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n} \n\n.title {\n    font-family: 'MuseoModerno', cursive;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.dueDate {\n    font-family: \"Roboto Mono\", sans-serif;\n}\n\n.priority {\n    font-family: \"Roboto\", sans-serif;\n}\n\n#add-task-btn,\n#add-project-btn {\n    background-color: #D9D9D9;\n    border: none;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 18px;\n    font-weight: bold;\n    padding: 0.5rem;\n    border-radius: 8px;\n    transition: 0.20s;\n}\n\n#add-project-btn {\n    background-color: var(--sidebar-bg-color);\n}\n\n#add-task-btn:hover,\n#add-project-btn:hover {\n    background-color: #b8b5b5;\n    cursor: pointer;\n}\n\n.add-project-container {\n    display: flex; \n    justify-content: center;\n}   \n\n.add-project-container:hover {\n    background-color: var(--sidebar-bg-color);\n}\n\n#modal {\n    margin: auto;\n    padding: 1em;\n    transition: 015s;\n    border: none;\n    width: 300px;\n    background-color: #3C4048;\n    border-radius: 6px;\n}\n\n#modal::backdrop {\n    background: rgb(0 0 0);\n    opacity: 0.3;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n}\n\nform > p {\n    font-family: \"Roboto\", sans-serif;\n    font-weight: bold;\n    font-size: 20px;\n    text-align: center;\n    color: white;\n}\n\n.input-label-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.input-label-container > input,\n.input-label-container > select{\n    height: 35px;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.input-label-container > label {\n    font-family: \"Jaldi\", sans-serif;\n    font-size: 20px;\n    color: white;\n}\n\ntextarea {\n    height: 80px;\n    padding: 5px;\n}\n\n.button-container {\n    display: flex;\n    justify-content: flex-end;\n    gap: 4px;\n}\n\ninput, select, textarea {\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n}\n\n#add, \n#cancel {\n    padding: 7px 15px;\n    border: none;\n    background-color: #78C677;\n    border-radius: 5px;\n    color: white;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 16px;\n}\n\n#cancel {\n    background-color: #D66666;\n}\n\n#add:hover {\n    cursor: pointer;\n    background-color: #1eb41c;\n}\n\n#cancel:hover {\n    cursor: pointer;\n    background-color: rgba(172, 26, 26, 0.857);\n}\n\n.completed-delete-dropdown-container {\n    width: 8%;\n    min-width: 50px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.completed-btn,\n.dropdown-btn,\n.delete-btn {\n    border: none;\n    cursor: pointer;\n    background: none;\n}\n\n.completed-btn:hover,\n.dropdown-btn:hover,\n.delete-btn:hover {\n    color: white;\n}\n\n.todo-container-body {\n    height: 0;\n    overflow: hidden;\n    background-color: rgb(245, 245, 245);\n    transition: 0.20s ease-in;\n}\n\n.show-todo-container-body {\n    height: 100px;\n    padding: 0.5rem;\n}\n\n.priority-dueDate-container {\n    display: flex;\n    justify-content: space-between;\n    margin: 15px 0px;\n}\n\n.todo-body-priority,\n.todo-body-dueDate,\n.todo-body-description {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 16.5px;\n}\n\n.rotate {\n    transform: rotate(180deg);\n}\n\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--header-footer-color);\n    height: 7%;\n}\n\nfooter p{\n    font-family: \"Comic Neue\", sans-serif;\n    color: white;\n    font-size: 18px;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAEA;IACI,8BAA8B;IAC9B,iCAAiC;IACjC,WAAW;IACX,WAAW;IACX,WAAW;IACX,WAAW;IACX,2BAA2B;IAC3B,iCAAiC;AACrC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,4CAA4C;IAC5C,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,qCAAqC;IACrC,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,+CAA+C;AACnD;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,WAAW,CAAC;;AAEhB;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,8BAA8B;IAC9B,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,iCAAiC;AACrC;;AAEA;;IAEI,yBAAyB;IACzB,YAAY;IACZ,iCAAiC;IACjC,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;;IAEI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,QAAQ;AACZ;;AAEA;IACI,iCAAiC;IACjC,eAAe;AACnB;;AAEA;;IAEI,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,0CAA0C;AAC9C;;AAEA;IACI,SAAS;IACT,eAAe;IACf,aAAa;IACb,8BAA8B;AAClC;;AAEA;;;IAGI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;;;IAGI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,gBAAgB;IAChB,oCAAoC;IACpC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;;;IAGI,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4CAA4C;IAC5C,UAAU;AACd;;AAEA;IACI,qCAAqC;IACrC,YAAY;IACZ,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Gugi&family=Jaldi&family=Montserrat:wght@600&family=MuseoModerno&family=Noto+Serif+Khojki:wght@600&family=Roboto+Mono&family=Roboto:wght@300&family=Salsa&display=swap');\n\n:root {\n    --header-footer-color: #3C4048;\n    /* colors for header and footer */\n    /* BA94D1 */\n    /* 5DA7DB */\n    /* 3C4048 */\n    /* 0D4C92 */\n    --sidebar-bg-color: #EFEFEF;\n    --sidebar-hover-bg-color: #c2c0c0;\n}\n\n.green {\n    background-color: rgb(81, 167, 81);\n}\n\n.yellow {\n    background-color: rgb(210, 165, 94);\n}\n\n.red {\n    background-color: rgb(203, 86, 86);\n}\n\nbody {\n    height: 100vh;\n    background-color: #D9D9D9;\n    display: flex;\n    flex-direction: column;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nheader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--header-footer-color);\n    padding: 10px;\n}\n\nheader p {\n    font-family: \"Gugi\", sans-serif;\n    font-size: 55px;\n    color: white;\n}\n\n#g {\n    color: black;\n}\n\n#i {\n    color: green;\n}\n\nheader > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader > div > button {\n    padding: 5px 10px;\n    background-color: black;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 20px;\n    font-family: \"Comic Neue\", sans-serif;\n}\n\nmain {\n    width: 100%;\n    height: 80%;\n    display: flex;\n}\n\n.sidebar-container {\n    height: 100%;\n    width: 20%;\n    padding: 30px 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: var(--sidebar-bg-color);\n}\n\n.sidebar-container-div {\n    height: 40px;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    font-family: \"Comic Neue\", sans-serif;\n    font-size: 20px;\n    padding: 2px 2px;\n    align-items: center;\n    transition: 0.20s;\n}\n\n.sidebar-container-div:hover {\n    cursor: pointer;\n    background-color: var(--sidebar-hover-bg-color);\n}\n\n.main-body-container {\n    width: 80%;\n    height: 100%;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    overflow-y: scroll;\n}\n\n.add-btn-container {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.body-heading {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 30px;\n}\n\n.main-body-todos {\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    display: flex;\n}\n\n.todo-container {\n    width: 100%;}\n\n.todo-container-heading {\n    display: flex;\n    height: 40px;\n    width: 100%;\n    justify-content: space-between;\n    padding: 8px;\n    align-items: center;\n    border-radius: 3px;\n}\n\n.todo-container-heading:hover {\n    cursor: pointer;\n    background-color: #c0c0c0;\n}\n\n.empty-todos {\n    font-family: \"Comic Neue\", sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n} \n\n.title {\n    font-family: 'MuseoModerno', cursive;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.dueDate {\n    font-family: \"Roboto Mono\", sans-serif;\n}\n\n.priority {\n    font-family: \"Roboto\", sans-serif;\n}\n\n#add-task-btn,\n#add-project-btn {\n    background-color: #D9D9D9;\n    border: none;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 18px;\n    font-weight: bold;\n    padding: 0.5rem;\n    border-radius: 8px;\n    transition: 0.20s;\n}\n\n#add-project-btn {\n    background-color: var(--sidebar-bg-color);\n}\n\n#add-task-btn:hover,\n#add-project-btn:hover {\n    background-color: #b8b5b5;\n    cursor: pointer;\n}\n\n.add-project-container {\n    display: flex; \n    justify-content: center;\n}   \n\n.add-project-container:hover {\n    background-color: var(--sidebar-bg-color);\n}\n\n#modal {\n    margin: auto;\n    padding: 1em;\n    transition: 015s;\n    border: none;\n    width: 300px;\n    background-color: #3C4048;\n    border-radius: 6px;\n}\n\n#modal::backdrop {\n    background: rgb(0 0 0);\n    opacity: 0.3;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n}\n\nform > p {\n    font-family: \"Roboto\", sans-serif;\n    font-weight: bold;\n    font-size: 20px;\n    text-align: center;\n    color: white;\n}\n\n.input-label-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.input-label-container > input,\n.input-label-container > select{\n    height: 35px;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.input-label-container > label {\n    font-family: \"Jaldi\", sans-serif;\n    font-size: 20px;\n    color: white;\n}\n\ntextarea {\n    height: 80px;\n    padding: 5px;\n}\n\n.button-container {\n    display: flex;\n    justify-content: flex-end;\n    gap: 4px;\n}\n\ninput, select, textarea {\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n}\n\n#add, \n#cancel {\n    padding: 7px 15px;\n    border: none;\n    background-color: #78C677;\n    border-radius: 5px;\n    color: white;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 16px;\n}\n\n#cancel {\n    background-color: #D66666;\n}\n\n#add:hover {\n    cursor: pointer;\n    background-color: #1eb41c;\n}\n\n#cancel:hover {\n    cursor: pointer;\n    background-color: rgba(172, 26, 26, 0.857);\n}\n\n.completed-delete-dropdown-container {\n    width: 8%;\n    min-width: 50px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.completed-btn,\n.dropdown-btn,\n.delete-btn {\n    border: none;\n    cursor: pointer;\n    background: none;\n}\n\n.completed-btn:hover,\n.dropdown-btn:hover,\n.delete-btn:hover {\n    color: white;\n}\n\n.todo-container-body {\n    height: 0;\n    overflow: hidden;\n    background-color: rgb(245, 245, 245);\n    transition: 0.20s ease-in;\n}\n\n.show-todo-container-body {\n    height: 100px;\n    padding: 0.5rem;\n}\n\n.priority-dueDate-container {\n    display: flex;\n    justify-content: space-between;\n    margin: 15px 0px;\n}\n\n.todo-body-priority,\n.todo-body-dueDate,\n.todo-body-description {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 16.5px;\n}\n\n.rotate {\n    transform: rotate(180deg);\n}\n\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--header-footer-color);\n    height: 7%;\n}\n\nfooter p{\n    font-family: \"Comic Neue\", sans-serif;\n    color: white;\n    font-size: 18px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "renderTodayTodos": () => (/* binding */ renderTodayTodos),
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos),
/* harmony export */   "renderUpcomingTodos": () => (/* binding */ renderUpcomingTodos),
/* harmony export */   "saveTodo": () => (/* binding */ saveTodo)
/* harmony export */ });
/*eslint-disable */

let todosArray; // initailising the todosarray

// getting todos from localStorage
const todosArrayFromLocalStorage = JSON.parse(localStorage.getItem('myTodos')); 


// if todos found in the localStorage we use that else
// make a new empty array
if (todosArrayFromLocalStorage) {
  todosArray = todosArrayFromLocalStorage;
} else {
  todosArray = [];
}

// DOM element
const body = document.querySelector('.main-body-todos');

// factory function which makes todo
const createTodo = (title, dueDate, priority, description, completed) => ({
  title,
  dueDate,
  priority,
  description,
  completed
});

// this function pushes the object todo in the array
// and then saves the todoArray in the localStorage
const saveTodo = (todo) => {
  todosArray.push(todo);
  _saveTodoToLocalStorage();
};

const renderTodos = () => {
  _renderTodos('all');
};

function renderTodayTodos() {
  _renderTodos('today');
}

const renderUpcomingTodos = () => {
  _renderTodos('upcoming');
};

// renders each todo
function _render(eachtodo) {
  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container');

  const todoContainerHeading = document.createElement('div');
  todoContainerHeading.classList.add('todo-container-heading');

  let title;
  let s;
  if (eachtodo.completed === true) {
    title = document.createElement('p');
    title.classList.add('title');
    s = document.createElement("s");
    s.textContent = eachtodo.title;
    title.append(s);
  }else {
    title = document.createElement('p');
    title.classList.add('title');
    title.textContent = eachtodo.title;
  }

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('completed-delete-dropdown-container');

  const completedBtn = document.createElement('button');
  completedBtn.classList.add('completed-btn');
  completedBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  const dropDown = document.createElement('button');
  dropDown.classList.add('dropdown-btn');
  dropDown.innerHTML = '<i class="fa-solid fa-angle-down"></i>';

  buttonDiv.append(completedBtn, deleteBtn, dropDown);

  const todoContainerBody = document.createElement('div');
  todoContainerBody.classList.add('todo-container-body');
  if (eachtodo.completed === true) {
    todoContainerBody.innerHTML = `
      <div class="priority-dueDate-container">
        <p class="todo-body-priority"><s>Priority: ${eachtodo.priority}</s></p>
        <p class="todo-body-dueDate"><s>DueDate: ${eachtodo.dueDate}</s></p>
      </div>
        <p class="todo-body-description"><s>Description: ${eachtodo.description}</s></p>
    `;
  }else {
    todoContainerBody.innerHTML = `
      <div class="priority-dueDate-container">
        <p class="todo-body-priority">Priority: ${eachtodo.priority}</p>
        <p class="todo-body-dueDate">DueDate: ${eachtodo.dueDate}</p>
      </div>
        <p class="todo-body-description">Description: ${eachtodo.description}</p>
    `;
  }
  /*eslint-disable */
  if (eachtodo.priority.toLowerCase() == 'low') {
    todoContainerHeading.classList.add('green');
  } else if (eachtodo.priority.toLowerCase() == 'medium') {
    todoContainerHeading.classList.add('yellow');
  } else if (eachtodo.priority.toLowerCase() == 'high') {
    todoContainerHeading.classList.add('red');
  }

  todoContainerHeading.append(title, buttonDiv);
  todoContainer.append(todoContainerHeading, todoContainerBody);
  body.append(todoContainer);
}

// renderTodo takes a argument
// renders according to the argument
// if choice is all renders all the todos
// if choice is today renders all the todos due today
/*eslint-disable */
function _renderTodos(choice) {
  const bodyHeading = document.getElementById('heading');
  body.innerHTML = ' ';
  if (todosArray.length === 0) {
    const div = document.createElement('div');
    div.classList.add('todo-container');
    div.style.justifyContent = 'center';
    const p = document.createElement('p');
    p.classList.add('empty-todos');
    p.textContent = 'There is currently no task added.';
    div.append(p);
    body.append(div);
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentday = new Date().getDate();

  if (choice == 'all') {
    bodyHeading.textContent = 'Inbox';
    todosArray.forEach((eachtodo) => {
      _render(eachtodo);
    });
  } else if (choice == 'today') {
    bodyHeading.textContent = 'Today';
    const todayDay = `${currentYear}-${currentMonth}-${currentday}`;

    todosArray.forEach((eachtodo) => {
      if (todayDay == eachtodo.dueDate) {
        _render(eachtodo);
      }
    });
  } else if (choice == 'upcoming') {
    bodyHeading.textContent = 'Upcoming Tasks';

    todosArray.forEach((eachtodo) => {
      const fulldate = eachtodo.dueDate.split('-');
      const [year, month, day] = fulldate;
      if (year > currentYear || month > currentMonth || day > currentday) {
        _render(eachtodo);
      }
    });
  }
  _addFunctionality();
}

// strikethrough function which puts a line on the text 
// whenever a user clicks on the complete function 
// it also removes the line when user clicks on it again
// here this function also calls updateTodo to update the 
// completed property to true or false
function _strikethrough(eachBtn) {
  eachBtn.addEventListener('click', () => {
    const todoContainer = eachBtn.parentElement.parentElement.parentElement;
    const todoContainerHeading = eachBtn.parentElement.parentElement;
    const todoPara = todoContainerHeading.querySelector("p");
    const todoTitle = todoPara.firstChild;
    todosArray.forEach(eachtodo => {
      if (eachtodo.title == todoTitle.textContent && eachtodo.completed === false) {
        _updateTodo(eachtodo.title, false);
        const allPara = todoContainer.querySelectorAll('p');
        allPara.forEach((eachPara) => {
            const strikeThroughElement = document.createElement('s');
            strikeThroughElement.textContent = eachPara.textContent;
            /*eslint-disable */
            eachPara.innerHTML = ''; 
            eachPara.append(strikeThroughElement);
        });
      }
      else if (eachtodo.title === todoTitle.textContent && eachtodo.completed === true) {
        _updateTodo(eachtodo.title, true);
        const allPara = todoContainer.querySelectorAll("p");
        allPara.forEach((eachPara) => {
          const eachStrikePara = eachPara.querySelector("s");
          let text = eachStrikePara.textContent;
          eachPara.innerHTML = '';
          eachPara.textContent = text;
        });
      }
    })
  });
}


// deleted a todo when user clicks on the deleteBtn
// it asks user for confirmation if they say yes 
// it proceeds to delete that particular obj from the array
// and at last it renders the new array
function _deleteTodo(eachBtn) {
  let newTodosArray;
  eachBtn.addEventListener('click', () => {
    const confirmation = confirm("Are you sure you want to delete this todo?");
    if (confirmation === true) {
      const todoContainer = eachBtn.parentElement.parentElement.parentElement;
      const todoContainerHeading = eachBtn.parentElement.parentElement;
      const todoPara = todoContainerHeading.querySelector("p");
      const todoTitle = todoPara.firstChild;
      newTodosArray = todosArray.filter(eachtodo => {
        if (eachtodo.title === todoTitle.textContent) {
          return false;
        }else {
          return true;
        }
      });
      todosArray = newTodosArray;
      _saveTodoToLocalStorage();
      renderTodos();
    }
    else {
      return;
    }
  })
}

// updatesTodo to either completed true or conpleted false
// and calls saveTodoToLocalStorage to update the new array
function _updateTodo (title, completed) {
  todosArray.forEach((eachtodo) => {
    if (eachtodo.title === title && completed === false) {
      eachtodo.completed = true;
      _saveTodoToLocalStorage();
    } else if (eachtodo.title === title && completed === true) {
      eachtodo.completed = false;
      _saveTodoToLocalStorage();
    }
  });
};

// saves the todoArray in the localStorage
function _saveTodoToLocalStorage() {
  localStorage.setItem('myTodos', JSON.stringify(todosArray));
}

// dropDownFunctionality
// when this function is invoked a new class is added to todo
// body container which makes it visible to the user
function _dropDownFunctionality(eachtodoContainer) {
  if (todosArray.length === 0) {
    return;
  }
  
  const todoContainerBody = eachtodoContainer.querySelector('.todo-container-body');
  const todoContainerHeading = eachtodoContainer.querySelector('.todo-container-heading');
  todoContainerHeading.addEventListener('click', (e) => {
    if (e.target.classList[1] === 'fa-check' || e.target.classList[1] === "fa-xmark") {
      return; // skips if the the user clicks on any other button
    }

    todoContainerBody.classList.toggle('show-todo-container-body');

    const buttonContainer = todoContainerHeading.querySelector('.completed-delete-dropdown-container');
    const dropDownBtn = buttonContainer.querySelector('.dropdown-btn');
    dropDownBtn.classList.toggle('rotate');
  });
}

// this function adds functionality like drop down 
// complete and delete 
function _addFunctionality() {
  // when todocontainer is clicked it drop downs 
  const todoContainer = document.querySelectorAll('.todo-container');
  todoContainer.forEach((eachtodoContainer) => {
    _dropDownFunctionality(eachtodoContainer); 
  });

  // when completedBtn is clicked text are crossed out
  const completedBtn = document.querySelectorAll('.completed-btn');
  completedBtn.forEach((eachBtn) => {
    _strikethrough(eachBtn);
  });

  // when deleteBtn is clicked the todo is deleted
  const deleteBtn = document.querySelectorAll('.delete-btn');
  deleteBtn.forEach((eachBtn) => {
    _deleteTodo(eachBtn);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.js */ "./src/Todo.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/*eslint-disable */
// importing all the modules from other files



// DOM elements
const modal = document.querySelector('#modal');
const addBtn = document.querySelector('#add-task-btn');
const cancelBtn = document.querySelector('#cancel');
const form = document.querySelector('form');
const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const upcomingTask = document.querySelector('#upcoming');

// event listener for add task btn
addBtn.addEventListener('click', () => {
  modal.showModal();
});

// event listener for cancel btn
cancelBtn.addEventListener('click', () => {
  modal.close();
});

// event listener for form
form.addEventListener('submit', (e) => {
  e.preventDefault(); // preventing the default 
  // getting all the input values from the form
  const titleInput = document.querySelector('#title');
  const dueDateInput = document.querySelector('#dueDate');
  const priorityInput = document.querySelector('#priority');
  const descriptionInput = document.querySelector("#description");

  // if empty form is submitted user is alerted about it
  if (titleInput.value === '' || dueDateInput.value === '' || priorityInput.value === '' || descriptionInput.value === '') {
    /*eslint-disable */
    alert('Please fill the form.'); 
    return; // skips the whole other code after this
  }

  // when submitted closes the modal and creates the todo by
  // calling the createTodo factory function which is
  // imported from Todo.js
  // then calls saveTodo function which saves the todo
  // in the localStorage lastly it renders them
  modal.close();
  const todo = (0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(titleInput.value, dueDateInput.value, priorityInput.value, descriptionInput.value, false);
  (0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.saveTodo)(todo);
  (0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();
});

// when today is clicked on the sidebar renderTodayTodos
// is called (which renders all the todo duedated today)
today.addEventListener('click', () => {
  (0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.renderTodayTodos)(); // renders all the todos duedates today
});

// renders all the todos
inbox.addEventListener('click', () => {
  (0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();
});

// renders all the upcoming todos
upcomingTask.addEventListener('click', () => {
  (0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.renderUpcomingTodos)();
});

// when the user logs in the pade we render the todos
(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map