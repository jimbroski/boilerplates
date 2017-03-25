/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_support_misc__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Layout = function () {
  function Layout() {
    _classCallCheck(this, Layout);

    // this.bindFunctions();
    this.startup();
  }

  _createClass(Layout, [{
    key: "bindFunctions",
    value: function bindFunctions() {}
  }, {
    key: "startup",
    value: function startup() {
      console.log("Hello World");
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__app_support_misc__["a" /* showCookieBanner */])();
    }
  }]);

  return Layout;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (new Layout());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_app_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_app_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout__ = __webpack_require__(0);


// Global


// Load Page Specific Module
// let current_page = document.querySelector('[data-page]').getAttribute('data-page');

// import * as pages from './pages';
// pages[current_page]().init();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export readCookie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showCookieBanner; });
function readCookie(n) {
  var a = ('; ' + document.cookie).match(';\\s*' + n + '=([^;]+)');
  return a ? a[1] : '';
}

function showCookieBanner() {
  if (!readCookie('cookieBannerDismissed')) {
    var banner_wrapper = document.createElement('div');
    banner_wrapper.setAttribute("id", "cookieBanner");
    banner_wrapper.style.cssText = '\n      font-size: 0.7rem;\n      background-color: #ddd;\n      color: #444;\n      max-width: 200px;\n      padding: 16px;\n      position: fixed;\n      bottom: 0;\n      left: 0;';

    var banner_text = document.createElement('p');
    banner_text.innerHTML = '\n      This website uses cookies to ensure you get the best experience. By continuing to use this site, you are agreeing to our use of cookies.&nbsp;\n      <br />\n      <a href="/privacy">Learn more</a>';
    banner_wrapper.appendChild(banner_text);

    var banner_link = document.createElement('a');
    banner_link.innerHTML = 'Got it';
    banner_link.style.cssText = '\n      margin-top: 8px;\n      padding: 4px;\n      border: 1px solid #444;\n      display: inline-block;\n      cursor: pointer;';
    banner_link.addEventListener('click', function () {
      document.cookie = "cookieBannerDismissed=true";
      banner_wrapper.style.display = "none";
    });
    banner_wrapper.appendChild(banner_link);

    document.body.appendChild(banner_wrapper);
  }
}



/***/ })
/******/ ]);