/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/component/_scrollAnimation.js":
/*!*************************************************!*\
  !*** ./assets/js/component/_scrollAnimation.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollAnimation: function() { return /* binding */ scrollAnimation; }\n/* harmony export */ });\nfunction scrollAnimation() {\n  $(window).on('load scroll',function (){\n\t\t$('.js-animation').each(function(){\n\t\t\tconst target = $(this).offset().top;\n\t\t\tconst scroll = $(window).scrollTop();\n\t\t\tconst height = $(window).height();\n\t\t\tif (scroll > target - height){\n\t\t\t\t$(this).addClass('is-active');\n\t\t\t}\n\t\t});\n\t});\n}\n\n//# sourceURL=webpack://gulp/./assets/js/component/_scrollAnimation.js?");

/***/ }),

/***/ "./assets/js/component/_scrollSmooth.js":
/*!**********************************************!*\
  !*** ./assets/js/component/_scrollSmooth.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollSmooth: function() { return /* binding */ scrollSmooth; }\n/* harmony export */ });\nfunction scrollSmooth() {\n  $('a[href^=\"#\"]').click(function(){\n\t\tconst speed = 500,\n\t\thref= $(this).attr(\"href\"),\n\t\ttarget = $(href == \"#\" || href == \"\" ? 'html' : href),\n\t\tposition = target.offset().top;\n\t\t$(\"html, body\").animate({scrollTop:position}, speed, \"swing\");\n\t\t\treturn false;\n\t});\n}\n\n//# sourceURL=webpack://gulp/./assets/js/component/_scrollSmooth.js?");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_scrollAnimation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/_scrollAnimation.js */ \"./assets/js/component/_scrollAnimation.js\");\n/* harmony import */ var _component_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/_scrollSmooth.js */ \"./assets/js/component/_scrollSmooth.js\");\n\n\n\n(0,_component_scrollAnimation_js__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation)();\n(0,_component_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_1__.scrollSmooth)();\n\n//# sourceURL=webpack://gulp/./assets/js/script.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/script.js");
/******/ 	
/******/ })()
;