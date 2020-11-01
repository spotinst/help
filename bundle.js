/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/_variables.pcss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./src/styles/_variables.pcss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":root {\\n  /* Palette  */\\n  --color-blue-gray: #34495e;\\n  --color-blue: #0086ff;\\n  --color-white: #fff;\\n  --color-green: #42b983;\\n  --color-yellow: #ffe484;\\n  --color-purple: #d9a9ff;\\n  --color-red: #ff8383;\\n\\n  /* Theme */\\n  --theme-color-primary: #0086ff;\\n  --theme-color-secondary: #1f1f9a;\\n\\n  /* Text */\\n  --text-color-base: #1a202c;\\n  --text-color-secondary: #a0aec0;\\n  --text-color-tertiary: #7f8c9f;\\n\\n  /* Fonts  */\\n  --font-family-text: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Helvetica, Arial, sans-serif, \\\"Apple Color Emoji\\\",\\n    \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\";\\n  --font-family-code: \\\"Roboto Mono\\\", \\\"Open Sans\\\", sans-serif;\\n\\n  /* Breakpoints */\\n  --breakpoint-sm: 640px;\\n  --breakpoint-md: 768px;\\n  --breakpoint-lg: 1024px;\\n  --breakpoint-xl: 1280px;\\n\\n  /* Helpers  */\\n  --unit: 8px;\\n\\n  /* ToC */\\n  --toc-width: 250px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/_variables.pcss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/base.pcss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./src/styles/base.pcss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  font-family: var(--font-family-text);\\n}\\n\\nhtml,\\nbody {\\n  font-size: 14px;\\n}\\n\\n@media (min-width: 420px) {\\n\\nhtml,\\nbody {\\n    font-size: 16px\\n}\\n  }\\n\\na {\\n  color: inherit;\\n  text-decoration: none !important;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/base.pcss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/icons.pcss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./src/styles/icons.pcss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".feather {\\n  width: 14px;\\n  height: 14px;\\n  stroke: currentColor;\\n  stroke-width: 2;\\n  stroke-linecap: round;\\n  stroke-linejoin: round;\\n  fill: none;\\n  margin-left: 2px;\\n  margin-bottom: -1px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/icons.pcss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/main.pcss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./src/styles/main.pcss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/postcss-loader/src!./_variables.pcss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/_variables.pcss\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/postcss-loader/src!./base.pcss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/base.pcss\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/postcss-loader/src!./sidebar.pcss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/sidebar.pcss\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/postcss-loader/src!./markdown.pcss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/markdown.pcss\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/postcss-loader/src!./toc.pcss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/toc.pcss\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_5___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/postcss-loader/src!./icons.pcss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/icons.pcss\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_6___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/postcss-loader/src!./scroll.pcss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/scroll.pcss\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_5___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_6___);\n// Module\nexports.push([module.i, \"\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/main.pcss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/markdown.pcss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./src/styles/markdown.pcss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".markdown-section {\\n  padding: 30px 0 0 50px;\\n  max-width: 70%;\\n}\\n\\n  .markdown-section a {\\n    color: var(--theme-color-primary);\\n  }\\n\\n  .markdown-section a.text-muted {\\n    color: var(--text-color-tertiary);\\n  }\\n\\n  .markdown-section a:hover {\\n    text-decoration: underline;\\n  }\\n\\n  .markdown-section a.anchor {\\n    border: none;\\n  }\\n\\n  .markdown-section .docsify-pagination-container {\\n    margin-top: 0;\\n  }\\n\\n  .markdown-section .docsify-pagination-container .pagination-item a .pagination-item-label,\\n        .markdown-section .docsify-pagination-container .pagination-item a .pagination-item-title {\\n          text-decoration: none;\\n          opacity: 0.3;\\n        }\\n\\n  .markdown-section .docsify-pagination-container .pagination-item a .pagination-item-title {\\n          font-size: 1.2em;\\n          margin-top: 0.2em;\\n        }\\n\\n  .markdown-section .docsify-pagination-container .pagination-item a:hover .pagination-item-title {\\n          text-decoration: none;\\n          opacity: 1;\\n        }\\n\\n  .markdown-section .docsify-pagination-container .pagination-item a:hover .pagination-item-label {\\n          opacity: 0.6;\\n        }\\n\\n  .markdown-section .page-edit {\\n    padding-top: 2.5em;\\n    padding-bottom: 1em;\\n    overflow: auto;\\n  }\\n\\n  .markdown-section .page-edit .edit-link,\\n    .markdown-section .page-edit .last-updated {\\n      font-family: var(--font-family-text);\\n      font-size: 14px;\\n      vertical-align: top;\\n    }\\n\\n  .markdown-section .page-edit .edit-link {\\n      display: inline-block;\\n    }\\n\\n  .markdown-section .page-edit .edit-link .github-link {\\n        color: var(--text-color-secondary);\\n        cursor: pointer;\\n      }\\n\\n  .markdown-section .page-edit .edit-link .github-icon {\\n        width: 15px;\\n        height: 15px;\\n        border: 0;\\n        vertical-align: middle;\\n        margin-right: 3px;\\n        margin-bottom: 3px;\\n        opacity: 70%;\\n      }\\n\\n  .markdown-section .page-edit .last-updated {\\n      float: right;\\n    }\\n\\n  .markdown-section .page-edit .last-updated .prefix {\\n        font-weight: 600;\\n        color: var(--text-color-secondary);\\n      }\\n\\n  .markdown-section .page-edit .last-updated .time {\\n        font-weight: 500;\\n        color: var(--text-color-tertiary);\\n      }\\n\\n  .markdown-section table {\\n    display: table;\\n  }\\n\\n  .markdown-section table tr {\\n      border-width: 0.15rem 0;\\n      border-style: solid;\\n      border-color: #f1f1f2;\\n    }\\n\\n  .markdown-section table tr:nth-child(2n) {\\n      background-color: transparent;\\n    }\\n\\n  .markdown-section table thead tr {\\n      text-transform: uppercase;\\n      font-size: 90%;\\n      border-top: none;\\n    }\\n\\n  .markdown-section table tbody tr:last-of-type {\\n      border-bottom: none;\\n    }\\n\\n  .markdown-section table th,\\n    .markdown-section table td {\\n      border: none;\\n      padding: 1.1rem 0.5rem;\\n      text-align: left;\\n    }\\n\\n  .markdown-section table td p {\\n      margin: 0;\\n    }\\n\\n  .markdown-section table blockquote {\\n      margin: 1em 0;\\n    }\\n\\n  .markdown-section table blockquote > p {\\n        font-weight: 500;\\n      }\\n\\n  .markdown-section em,\\n  .markdown-section code {\\n    color: var(--theme-color-primary);\\n    font-family: var(--font-family-code) !important;\\n  }\\n\\n  .markdown-section em span, .markdown-section code span {\\n      font-family: var(--font-family-code) !important;\\n    }\\n\\n  .markdown-section .token.variable,\\n  .markdown-section .token.atrule,\\n  .markdown-section .token.regex,\\n  .markdown-section .token.statement,\\n  .markdown-section .token.tag,\\n  .markdown-section .token.keyword {\\n    color: var(--color-blue);\\n  }\\n\\n  .markdown-section .token.string,\\n  .markdown-section .token.number,\\n  .markdown-section .token.punctuation,\\n  .markdown-section .token.boolean {\\n    color: inherit;\\n  }\\n\\n  .markdown-section .token.function,\\n  .markdown-section .token.property {\\n    color: var(--theme-color-primary);\\n  }\\n\\n  .markdown-section .token.boolean,\\n  .markdown-section .token.number {\\n    color: var(--theme-color-primary);\\n  }\\n\\n  .markdown-section .token.string {\\n    color: #42b983;\\n  }\\n\\n  .markdown-section .docsify-copy-code-button {\\n    font-size: 0.7em !important;\\n  }\\n\\n  .markdown-section h2 {\\n    padding-bottom: 0.3rem;\\n    border-bottom: 1px solid #eaecef;\\n  }\\n\\n  .markdown-section .anchor:before {\\n    content: \\\"#\\\";\\n    float: left;\\n    margin-left: -0.87em;\\n    padding-right: 0.23em;\\n    opacity: 0;\\n  }\\n\\n  .markdown-section .anchor:hover:before {\\n    opacity: 1;\\n  }\\n\\n  .markdown-section blockquote {\\n    padding: 0.05em 1em;\\n    background-color: #0286ff0d;\\n  }\\n\\n  .markdown-section blockquote p {\\n      font-style: italic;\\n      font-weight: 500;\\n    }\\n\\n  .markdown-section blockquote.info {\\n      background-color: #f8f8f8;\\n      color: #42b983;\\n      border-left: 4px solid var(--color-green);\\n    }\\n\\n  .markdown-section blockquote.warning {\\n      background-color: #ffe48438;\\n      color: #856404;\\n      border-left: 4px solid var(--color-yellow);\\n    }\\n\\n  .markdown-section blockquote.danger {\\n      background-color: #ff838324;\\n      color: #721c24;\\n      border-left: 4px solid var(--color-red);\\n    }\\n\\n  .markdown-section img:not(.github-icon) {\\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\\n  }\\n\\n@media screen and (max-width: 768px) {\\n  .markdown-section {\\n    padding: 30px 0 0 20px;\\n    max-width: 80% !important;\\n  }\\n          .markdown-section .docsify-pagination-container .pagination-item a .pagination-item-title {\\n            font-size: 0.8em;\\n          }\\n      .markdown-section .page-edit .edit-link {\\n        font-size: 0.8em;\\n      }\\n\\n      .markdown-section .page-edit .last-updated {\\n        display: none;\\n      }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/markdown.pcss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/scroll.pcss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./src/styles/scroll.pcss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".scroll-to-top {\\n  color: var(--text-color-tertiary) !important;\\n}\\n\\n@media screen and (max-width: 768px) {\\n  .scroll-to-top {\\n    display: none !important;\\n  }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/scroll.pcss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/sidebar.pcss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./src/styles/sidebar.pcss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".sidebar {\\n  /* Reorder sidebar */\\n  overflow: hidden;\\n  background-color: #fafbfc;\\n}\\n\\n  .sidebar .search {\\n    position: absolute;\\n    width: 100%;\\n    max-height: 100%;\\n    top: 160px;\\n    border-top: 1px solid #eeeeee;\\n    z-index: 10;\\n    background-color: #ffffff;\\n    overflow-y: auto; /* make only the search results scrollable */\\n    padding: var(--unit) 0;\\n  }\\n\\n  .sidebar .search::-webkit-scrollbar {\\n      width: 2px; /* width of the entire scrollbar */\\n    }\\n\\n  .sidebar .search::-webkit-scrollbar-thumb {\\n      border-radius: 20px; /* roundness of the scroll thumb */\\n      border: 3px solid var(--text-color-tertiary); /* creates padding around scroll thumb */\\n    }\\n\\n  .sidebar .search .search-keyword,\\n    .sidebar .search a:hover {\\n      color: var(--theme-color-primary);\\n    }\\n\\n  .sidebar .search input {\\n      font-weight: 500;\\n      padding-left: calc(var(--unit) * 5);\\n    }\\n\\n  .sidebar .search input:focus {\\n      border: 1px solid white !important;\\n      box-shadow: none !important;\\n    }\\n\\n  .sidebar .search .matching-post {\\n      padding: calc(var(--unit) * 2.5);\\n    }\\n\\n  .sidebar .search .matching-post h2 {\\n        font-size: 14px;\\n        margin: 10px 0 0 0;\\n        color: var(--text-color-tertiary);\\n      }\\n\\n  .sidebar .search .matching-post p {\\n        margin: 10px 0 10px 0;\\n        color: var(--text-color-tertiary);\\n      }\\n\\n  .sidebar h1 {\\n    position: absolute;\\n    top: 30px;\\n    left: 0;\\n    width: 100%;\\n  }\\n\\n  .sidebar .sidebar-nav {\\n    position: absolute;\\n    width: calc(100% - calc(var(--unit) * 5));\\n    top: 220px;\\n    overflow-y: auto; /* make only the nav scrollable */\\n    height: calc(100% - 168px); /* top (130px) + toggle (38px) */\\n    box-sizing: content-box;\\n    padding-left: calc(var(--unit) * 5);\\n  }\\n\\n  .sidebar .logo {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n\\n  .sidebar .logo img {\\n      height: 100px;\\n      margin-right: 40px;\\n    }\\n\\n  .sidebar {\\n  font-family: var(--font-family-text);\\n}\\n\\n  /* For collapsing all but current page */\\n\\n  .sidebar .collapse ul {\\n    display: none;\\n  }\\n\\n  /* Reorder sidebar */\\n\\n  .sidebar li {\\n    margin: 0;\\n  }\\n\\n  .sidebar li a {\\n      height: 28px;\\n    }\\n\\n  /* Top-level ul */\\n\\n  .sidebar .sidebar-nav > ul {\\n    margin: 0;\\n  }\\n\\n  .sidebar .sidebar-nav > ul > li:nth-child(1) {\\n      margin-top: calc(var(--unit) * 3);\\n    }\\n\\n  .sidebar .sidebar-nav > ul > li {\\n      margin: var(--unit) 0;\\n    }\\n\\n  .sidebar .sidebar-nav > ul > li > a {\\n        color: var(--color-blue-gray) !important;\\n      }\\n\\n  .sidebar .sidebar-nav > ul > li a {\\n        font-weight: 500;\\n        color: var(--text-color-tertiary);\\n      }\\n\\n  .sidebar .sidebar-nav > ul > li > p {\\n        font-size: 12px;\\n        font-weight: 700;\\n        text-transform: uppercase;\\n        margin-top: 22px;\\n        color: var(--color-blue-gray);\\n      }\\n\\n  /* Sub-level ul */\\n\\n  .sidebar .sidebar-nav > ul ul {\\n    border-left: 1px solid rgba(0, 0, 0, 0.07);\\n    margin: 0;\\n  }\\n\\n  .sidebar .sidebar-nav > ul ul > li {\\n      padding-left: 15px;\\n    }\\n\\n  .sidebar .sidebar-nav > ul ul > li a {\\n        font-size: 14px;\\n      }\\n\\n  /* For highlighting the currently selected page */\\n\\n  .sidebar ul li.active > a {\\n    border-right: calc(var(--unit) / 2.25) solid;\\n    color: var(--theme-color-primary) !important;\\n    font-weight: 600;\\n  }\\n\\n  /* Provide some differentiation between section headings and sub-pages in the sidebar */\\n\\n  .sidebar .section-link {\\n    font-style: italic;\\n  }\\n\\n  .sidebar ul li a {\\n    font-size: 14px;\\n  }\\n\\n  .sidebar ul li a:hover {\\n      color: var(--theme-color-primary);\\n    }\\n\\n  .sidebar .app-sub-sidebar li:before {\\n    display: none;\\n  }\\n\\n  .sidebar .search .clear-button {\\n    cursor: pointer;\\n  }\\n\\n.sidebar-toggle {\\n  background: none;\\n  top: 6.3rem;\\n  left: calc(300px + 1rem);\\n  cursor: pointer;\\n  width: 1.5rem;\\n  height: 1.5rem;\\n  padding: 0;\\n  transition: left 0.25s ease-out;\\n}\\n\\n.sidebar-toggle :hover {\\n    opacity: 0.8;\\n  }\\n\\n.sidebar-toggle .sidebar-toggle-button:hover {\\n    opacity: 1;\\n  }\\n\\n.sidebar-toggle span {\\n    background-color: var(--theme-color-primary);\\n    height: calc(var(--unit) / 2.25);\\n    width: 1.5rem;\\n    position: absolute;\\n    left: 0;\\n    margin: 0;\\n    transform-origin: 0;\\n    border-radius: 1px;\\n  }\\n\\n.sidebar-toggle span:nth-child(1) {\\n      top: 0;\\n    }\\n\\n.sidebar-toggle span:nth-child(2) {\\n      top: 0.5rem;\\n    }\\n\\n.sidebar-toggle span:nth-child(3) {\\n      top: 1rem;\\n    }\\n\\nbody.close .sidebar-toggle {\\n  transition: left 0.25s ease-out;\\n  width: 1.5rem;\\n  height: 1.5rem;\\n  left: 1.5rem;\\n}\\n\\nbody.close .sidebar-toggle span {\\n    transform-origin: center;\\n  }\\n\\n@media screen and (max-width: 768px) {\\n  body .sidebar-toggle {\\n    left: 1rem;\\n  }\\n\\n  body.close .sidebar-toggle {\\n    left: calc(300px + 1.5rem);\\n  }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/sidebar.pcss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/toc.pcss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./src/styles/toc.pcss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".page_toc {\\n  margin-top: 40px;\\n  border: none !important;\\n}\\n\\n  .page_toc p.title {\\n    font-size: 14px !important;\\n    font-weight: 700 !important;\\n    margin-top: 7px !important;\\n    padding-bottom: 10px !important;\\n    color: var(--color-blue-gray);\\n  }\\n\\n  .page_toc a {\\n    font-weight: 500 !important;\\n    font-size: 14px !important;\\n    color: var(--text-color-tertiary) !important;\\n    line-height: 28px !important;\\n  }\\n\\n  .page_toc a span {\\n      color: var(--text-color-tertiary) !important;\\n    }\\n\\n  .page_toc a:hover span {\\n      color: var(--theme-color-primary) !important;\\n    }\\n\\n  .page_toc div[class^=\\\"lv\\\"] {\\n    margin-left: 0 !important;\\n    border-left: 1px solid rgba(0, 0, 0, 0.07);\\n    padding-left: 15px;\\n    padding-right: 15px;\\n  }\\n\\n  .page_toc div.active {\\n    border-left: calc(var(--unit) * 1 / 3) solid;\\n    border-left-color: var(--theme-color-primary) !important;\\n    padding-left: calc(16px - var(--unit) * 1 / 3);\\n  }\\n\\n  .page_toc div.active a span {\\n      color: var(--theme-color-primary) !important;\\n      font-weight: 600;\\n    }\\n\\n  .page_toc .lv3 a {\\n    padding-left: 15px;\\n    border-left: 1px solid rgba(0, 0, 0, 0.07);\\n  }\\n\\naside.nav.nothing {\\n  width: var(--toc-width) !important; /* Always preserve space for ToC */\\n}\\n\\n@media screen and (max-width: 1300px) {\\n  .page_toc {\\n    display: none;\\n  }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/toc.pcss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_docsify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/docsify */ \"./src/scripts/docsify.js\");\n/* harmony import */ var _styles_main_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.pcss */ \"./src/styles/main.pcss\");\n// Scripts\n\n\n\n// Styles\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/docsify.js":
/*!********************************!*\
  !*** ./src/scripts/docsify.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins */ \"./src/scripts/plugins.js\");\n\n\nwindow.$docsify = {\n  // General\n  // ---------------------------------------------------------------------------\n  name: `<div class=\"logo\"><img src=\"/_media/images/spot.png\"/></div>`,\n  homepage: \"/connect-your-cloud-provider/README.md\",\n  notFoundPage: true,\n  formatUpdated: \"{MM}/{DD}, {HH}:{mm}\",\n  ga: \"UA-68573156-10\",\n\n  // Navigation\n  // ---------------------------------------------------------------------------\n  routerMode: \"history\", // default: 'hash'\n  alias: {\n    // ensures there's only ever one single sidebar (see #301)\n    \"/.*/_sidebar.md\": \"/_sidebar.md\",\n  },\n  maxLevel: 1,\n  subMaxLevel: 1,\n  loadSidebar: true,\n  auto2top: true,\n  autoHeader: false,\n  coverpage: false,\n\n  // Search\n  // ---------------------------------------------------------------------------\n  search: {\n    paths: \"auto\",\n    placeholder: `Search (Press \"/\" to focus)`,\n    noData: \"No Results.\",\n  },\n\n  // Theme\n  // ---------------------------------------------------------------------------\n  noEmoji: true,\n  themeColor: \"#0086ff\",\n\n  // Local Plugins\n  // ---------------------------------------------------------------------------\n  plugins: [_plugins__WEBPACK_IMPORTED_MODULE_0__[\"pageEditPlugin\"], _plugins__WEBPACK_IMPORTED_MODULE_0__[\"tocPlugin\"], _plugins__WEBPACK_IMPORTED_MODULE_0__[\"featherPlugin\"], _plugins__WEBPACK_IMPORTED_MODULE_0__[\"searchFocusPlugin\"]],\n\n  // Plugin: @spotinst/help\n  // ---------------------------------------------------------------------------\n  editOnGitHub: {\n    base: \"https://github.com/spotinst/help/edit/master/src/docs\",\n  },\n\n  // Plugin: @imyelo/docsify-pagination\n  // ---------------------------------------------------------------------------\n  pagination: {\n    crossChapter: true,\n    crossChapterText: false,\n  },\n\n  // Plugin: @lyingdragon/docsify-plugin-page-toc\n  // ---------------------------------------------------------------------------\n  toc: {\n    title: \"On This Page\",\n  },\n\n  // Plugin: @jhildenbiddle/docsify-tabs\n  // ---------------------------------------------------------------------------\n  tabs: {\n    persist: true,\n    sync: true,\n    theme: \"material\",\n    tabComments: true,\n    tabHeadings: true,\n  },\n\n  // Plugin: @zhengxiangqi/docsify-scroll-to-top\n  // ---------------------------------------------------------------------------\n  scrollToTop: {\n    auto: true,\n    text: \"↑\",\n    right: 15,\n    bottom: 15,\n    offset: 500,\n  },\n};\n\n\n//# sourceURL=webpack:///./src/scripts/docsify.js?");

/***/ }),

/***/ "./src/scripts/plugins.js":
/*!********************************!*\
  !*** ./src/scripts/plugins.js ***!
  \********************************/
/*! exports provided: searchFocusPlugin, tocPlugin, featherPlugin, pageEditPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchFocusPlugin\", function() { return searchFocusPlugin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tocPlugin\", function() { return tocPlugin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"featherPlugin\", function() { return featherPlugin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageEditPlugin\", function() { return pageEditPlugin; });\n/**\n * Binds an event handler to the \"keydown\" JavaScript event.\n * The event handler sets focus on the search input element.\n *\n * Invoked after initial completion.\n *\n * @param hook\n */\nconst searchFocusPlugin = (hook) => {\n  hook.ready(() => {\n    const inputElements = document.querySelectorAll(\"input[type=search]\");\n    if (inputElements && inputElements.length) {\n      const searchInput = inputElements[0];\n      const handleKeyDown = (event) => {\n        if (event.key === \"/\" && searchInput.current !== document.activeElement) {\n          event.preventDefault();\n          searchInput.focus();\n        }\n      };\n      window.addEventListener(\"keydown\", handleKeyDown);\n    }\n  });\n};\n\n/**\n * Overrides the ToC title and adds a scroll listener.\n *\n * Invoked each time after the data is fully loaded.\n *\n * @param hook\n */\nconst tocPlugin = (hook) => {\n  hook.doneEach(() => {\n    const nav = window.Docsify.dom.find(\".nav\");\n    if (nav) {\n      // override the toc title\n      const title = window.$docsify[\"toc\"].title;\n      const titleEl = window.Docsify.dom.find(\".page_toc p.title\");\n      if (titleEl && title) {\n        titleEl.innerHTML = title;\n      }\n    }\n  });\n};\n\n/**\n * Replaces all elements that have a data-feather attribute with SVG markup\n * corresponding to the element's data-feather attribute value.\n *\n * Invoked each time after the data is fully loaded.\n *\n * @param hook\n */\nconst featherPlugin = (hook) => {\n  // eslint-disable-next-line no-undef\n  hook.doneEach(feather.replace);\n};\n\n/**\n * Generates an Edit on GitHub button on every page to allow users to click on\n * the button to open corresponding Markdown editing page on GitHub.\n *\n * Invoked each time before parsing the Markdown file.\n *\n * @param hook\n * @param vm\n */\nconst pageEditPlugin = (hook, vm) => {\n  hook.beforeEach((content) => {\n    return content + \"\\n\\n\" + renderPageEdit(vm.route.file);\n  });\n};\n\n/**\n * Renders a footer element that contains both `Edit on GitHub` link and last\n * updated timestamp of the current file.\n *\n * @param file\n * @returns {string}\n */\nconst renderPageEdit = (file) => {\n  let editLinkEl = renderEditLink(file);\n  let lastUpdateEl = renderLastUpdated();\n  return `<div class=\"page-edit\">${editLinkEl}${lastUpdateEl}</div>`;\n};\n\n/**\n * Renders a div that contains the last updated timestamp of the current file.\n *\n * @returns {string}\n */\nconst renderLastUpdated = () => {\n  return `<div class=\"last-updated\"><span class=\"prefix\">Last Updated: </span><span class=\"time\">{docsify-updated}</span></div>`;\n};\n\n/**\n * Renders a footer element that contains both `Edit on GitHub` link.\n *\n * @param file\n * @returns {string}\n */\nconst renderEditLink = (file) => {\n  window.editDocHandler = (event) => {\n    const docBase = window.$docsify[\"editOnGitHub\"].base;\n\n    if (docBase && file) {\n      const editLink = docBase + file;\n      window.open(editLink);\n      event.preventDefault();\n      return false;\n    } else {\n      return true;\n    }\n  };\n\n  return `<div class=\"edit-link\"><a class=\"github-link\" onclick=\"editDocHandler(event)\"><img class=\"github-icon\" src=\"/_media/images/github.png\" /> Edit on GitHub</a></div>`;\n};\n\n\n//# sourceURL=webpack:///./src/scripts/plugins.js?");

/***/ }),

/***/ "./src/styles/main.pcss":
/*!******************************!*\
  !*** ./src/styles/main.pcss ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_postcss_loader_src_index_js_main_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/postcss-loader/src!./main.pcss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/styles/main.pcss\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_postcss_loader_src_index_js_main_pcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_postcss_loader_src_index_js_main_pcss__WEBPACK_IMPORTED_MODULE_1__);\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_postcss_loader_src_index_js_main_pcss__WEBPACK_IMPORTED_MODULE_1___default.a, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_postcss_loader_src_index_js_main_pcss__WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});\n\n//# sourceURL=webpack:///./src/styles/main.pcss?");

/***/ })

/******/ });