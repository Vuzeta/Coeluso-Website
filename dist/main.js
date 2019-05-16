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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/js/comment.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ \"./src/js/elements.js\");\n/* harmony import */ var _wave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wave.js */ \"./src/js/wave.js\");\n/* harmony import */ var _showNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showNavbar.js */ \"./src/js/showNavbar.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n //webpack sass\n\nObject(_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"changeComment\"])(); //box6 function to show comments\n\nsetInterval(_wave_js__WEBPACK_IMPORTED_MODULE_2__[\"playWave\"], 220); //box2 wave function\n\n_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"Elements\"].copyYear.textContent = new Date().getFullYear(); // copy current year\n\n_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"Elements\"].hamburger.addEventListener('click', function () {\n  _elements_js__WEBPACK_IMPORTED_MODULE_1__[\"Elements\"].hamburger.classList.toggle(\"is-active\");\n  Object(_showNavbar_js__WEBPACK_IMPORTED_MODULE_3__[\"showNav\"])(_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"Elements\"].headerLinks);\n}, false);\n_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"Elements\"].copyYear.textContent = new Date().getFullYear(); // copy current year\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/comment.js":
/*!***************************!*\
  !*** ./src/js/comment.js ***!
  \***************************/
/*! exports provided: changeComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeComment\", function() { return changeComment; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar userArray = [\"Paweł Wasik\", \"Mateusz Machnik\", \"Frond-End Developer\"];\nvar commentArray = [\"Lorem ipsum dolor sit amet\", \"Lorem ipsum lorem ipsum\", \"ipsum lorem amet sit\"];\n\nvar arrWithDot = _toConsumableArray(document.querySelectorAll('.comment__slider span'));\n\nvar userSpan = document.querySelector('.comment--user');\nvar commentDesc = document.querySelector('.comment--desc');\nvar counter = 0;\nvar timeSlide = 2000;\nvar activeSlide = 0;\nfunction changeComment() {\n  var intervalSlide = setInterval(function () {\n    changeUserAndDesc();\n    ++counter;\n  }, timeSlide);\n}\n\nvar changeUserAndDesc = function changeUserAndDesc() {\n  userSpan.textContent = \"\".concat(userArray[counter % userArray.length], \", \");\n  commentDesc.textContent = \"\".concat(commentArray[counter % commentArray.length]);\n  changeSlider();\n};\n\nvar changeSlider = function changeSlider() {\n  arrWithDot.forEach(function (el) {\n    el.classList.remove('active');\n  });\n  arrWithDot[counter % 3].classList.add('active');\n};\n\n//# sourceURL=webpack:///./src/js/comment.js?");

/***/ }),

/***/ "./src/js/elements.js":
/*!****************************!*\
  !*** ./src/js/elements.js ***!
  \****************************/
/*! exports provided: Elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Elements\", function() { return Elements; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar Elements = {\n  hamburger: document.querySelector(\".hamburger\"),\n  headerLinks: document.querySelector(\".header__list\"),\n  waveLines: _toConsumableArray(document.querySelectorAll('.wave div')),\n  copyYear: document.querySelector('.span--year')\n};\n\n//# sourceURL=webpack:///./src/js/elements.js?");

/***/ }),

/***/ "./src/js/showNavbar.js":
/*!******************************!*\
  !*** ./src/js/showNavbar.js ***!
  \******************************/
/*! exports provided: showNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showNav\", function() { return showNav; });\nvar show = function show(elem) {\n  window.setTimeout(function () {\n    elem.classList.remove('header__list');\n    elem.classList.add('header__list--active');\n  }, 250);\n  elem.style.height = \"auto\";\n};\n\nvar hide = function hide(elem) {\n  elem.style.height = elem.scrollHeight + 'px';\n  window.setTimeout(function () {\n    elem.style.height = '0';\n  }, 1);\n  window.setTimeout(function () {\n    elem.classList.remove('header__list--active');\n    elem.classList.add('header__list');\n  }, 250);\n};\n\nvar showNav = function showNav(elem) {\n  if (elem.classList.contains('header__list--active')) {\n    hide(elem);\n    return;\n  }\n\n  show(elem);\n};\n\n//# sourceURL=webpack:///./src/js/showNavbar.js?");

/***/ }),

/***/ "./src/js/wave.js":
/*!************************!*\
  !*** ./src/js/wave.js ***!
  \************************/
/*! exports provided: playWave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playWave\", function() { return playWave; });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/js/elements.js\");\n\nvar heightPercentile = ['4%', '5%', '6%', '7%', '8%', '9%', '10%', '12%', '14%', '15%', '16%', '18%', '20%', '22%', '24%', '30%', '40%', '50%', '60%', '80%', '90%', '100%'];\nvar topPercentile = ['48.5%', '48%', '47.5%', '47%', '46%', '45.5%', '45%', '44%', '43%', '42.5%', '42%', '41%', '40%', '39%', '38%', '35%', '30%', '25%', '20%', '15%', '10%', '5%', '0%'];\n\nvar generateNumber = function generateNumber() {\n  return Math.floor(Math.random() * 22);\n};\n\nvar playWave = function playWave() {\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].waveLines.forEach(function (el) {\n    var i = generateNumber();\n    el.style.height = heightPercentile[i];\n    el.style.top = topPercentile[i];\n  });\n};\n\n//# sourceURL=webpack:///./src/js/wave.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });