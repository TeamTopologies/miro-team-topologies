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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content-panel.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content-panel.ts":
/*!******************************!*\
  !*** ./src/content-panel.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar images = [\r\n    { src: 'img/Asset_1.svg', width: 267.02, height: 218.31 },\r\n    { src: 'img/Asset_11.svg', width: 204.36, height: 375.54 },\r\n    { src: 'img/Asset_12.svg', width: 252.37, height: 254.81 },\r\n    { src: 'img/Asset_13.svg', width: 262.87, height: 364.2 },\r\n    { src: 'img/Asset_14.svg', width: 256.19, height: 365.41 },\r\n    { src: 'img/Asset_15.svg', width: 259.2, height: 181.74 },\r\n    { src: 'img/Asset_17.svg', width: 255, height: 175.65 },\r\n    { src: 'img/Asset_18.svg', width: 249.34, height: 225.69 },\r\n    { src: 'img/Asset_19.svg', width: 257.34, height: 305.2 },\r\n    { src: 'img/Asset_20.svg', width: 245.67, height: 174.88 },\r\n    { src: 'img/Asset_21.svg', width: 263.63, height: 246.18 },\r\n    { src: 'img/Asset_22.svg', width: 254.62, height: 334.65 },\r\n    { src: 'img/Asset_23.svg', width: 251.08, height: 234.84 },\r\n    { src: 'img/Asset_24.svg', width: 251.44, height: 270.31 },\r\n    { src: 'img/Asset_25.svg', width: 246.51, height: 278.04 },\r\n    { src: 'img/Asset_26.svg', width: 125.58, height: 123.66 },\r\n    { src: 'img/Asset_27.svg', width: 109.91, height: 213.59 },\r\n    { src: 'img/Asset_28.svg', width: 215.6, height: 156.79 },\r\n    { src: 'img/Asset_29.svg', width: 193.6, height: 195.33 },\r\n    { src: 'img/Asset_3.svg', width: 239.27, height: 281.26 },\r\n    { src: 'img/Asset_32.svg', width: 139.77, height: 150.23 },\r\n    { src: 'img/Asset_33.svg', width: 127.36, height: 162.64 },\r\n    { src: 'img/Asset_34.svg', width: 163.54, height: 211.2 },\r\n    { src: 'img/Asset_35.svg', width: 212.54, height: 93.78 },\r\n    { src: 'img/Asset_36.svg', width: 160.19, height: 110.65 },\r\n    { src: 'img/Asset_37.svg', width: 188.59, height: 127.25 },\r\n    { src: 'img/Asset_38.svg', width: 247.68, height: 473.78 },\r\n    { src: 'img/Asset_39.svg', width: 282.79, height: 213.35 },\r\n    { src: 'img/Asset_40.svg', width: 228.45, height: 139.07 },\r\n    { src: 'img/Asset_41.svg', width: 213.14, height: 168.79 },\r\n    { src: 'img/Asset_42.svg', width: 239.71, height: 196.94 },\r\n    { src: 'img/Asset_43.svg', width: 174.07, height: 262.56 },\r\n    { src: 'img/Asset_45.svg', width: 134.8, height: 118.42 },\r\n    { src: 'img/Asset_46.svg', width: 220.27, height: 159.99 },\r\n    { src: 'img/Asset_47.svg', width: 137.35, height: 113.94 },\r\n    { src: 'img/Asset_48.svg', width: 233.98, height: 277.4 },\r\n    { src: 'img/Asset_49.svg', width: 103.23, height: 109.1 },\r\n    { src: 'img/Asset_50.svg', width: 234.95, height: 265.47 },\r\n    { src: 'img/Asset_51.svg', width: 155.91, height: 133.13 },\r\n    { src: 'img/Asset_52.svg', width: 199.46, height: 163.54 },\r\n    { src: 'img/Asset_53.svg', width: 224.52, height: 222.51 },\r\n    { src: 'img/Asset_54.svg', width: 315.1, height: 278.03 },\r\n    { src: 'img/Asset_55.svg', width: 197, height: 85.03 },\r\n    { src: 'img/Asset_56.svg', width: 70.92, height: 108.35 },\r\n    { src: 'img/Asset_6.svg', width: 265, height: 177.19 },\r\n    { src: 'img/Asset_7.svg', width: 215.65, height: 138.67 },\r\n    { src: 'img/Asset_8.svg', width: 251.67, height: 266.92 },\r\n    { src: 'img/Asset_9.svg', width: 211.51, height: 246.24 },\r\n];\r\nfunction getImage(img) {\r\n    return \"<div class=\\\"draggable-item image-box\\\">\\n                          <img src=\\\"\" + img.src + \"\\\" data-image-url=\\\"https://realtimeboard.com/api/awesome-plugins/plugins/rtb_sticker_pack/\" + img.src + \"\\\">\\n              </div>\";\r\n}\r\nfunction addShapes(container) {\r\n    container.innerHTML += \"<div class=\\\"shape draggable-item green\\\" data-color=\\\"0ca788\\\">I am shape</div><div class=\\\"shape draggable-item red\\\" data-color=\\\"f24726\\\">Me too</div>\";\r\n}\r\nfunction addImages(container) {\r\n    container.innerHTML += images.map(function (i) { return getImage(i); }).join('');\r\n}\r\nfunction createImage(canvasX, canvasY, url) {\r\n    return miro.board.widgets.create({\r\n        type: 'image',\r\n        url: url,\r\n        x: canvasX,\r\n        y: canvasY,\r\n    });\r\n}\r\nfunction createShape(canvasX, canvasY, color, text) {\r\n    return miro.board.widgets.create({\r\n        type: 'shape',\r\n        text: text,\r\n        x: canvasX,\r\n        y: canvasY,\r\n        style: {\r\n            textColor: '#fff',\r\n            backgroundColor: '#' + color,\r\n            borderColor: 'transparent',\r\n        },\r\n    });\r\n}\r\nfunction bootstrap() {\r\n    var _this = this;\r\n    var container = document.getElementById('tt-content-panel');\r\n    if (!container) {\r\n        return;\r\n    }\r\n    addShapes(container);\r\n    addImages(container);\r\n    var currentImageUrl;\r\n    var imageOptions = {\r\n        draggableItemSelector: 'img',\r\n        onClick: function (targetElement) { return __awaiter(_this, void 0, void 0, function () {\r\n            var url, widget;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        url = targetElement.getAttribute('data-image-url');\r\n                        return [4 /*yield*/, createImage(0, 0, url)];\r\n                    case 1:\r\n                        widget = (_a.sent())[0];\r\n                        miro.board.viewport.zoomToObject(widget);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        }); },\r\n        getDraggableItemPreview: function (targetElement) {\r\n            //drag-started\r\n            currentImageUrl = targetElement.getAttribute('data-image-url');\r\n            return {\r\n                width: 100,\r\n                height: 100,\r\n                url: currentImageUrl,\r\n            };\r\n        },\r\n        onDrop: function (canvasX, canvasY) {\r\n            console.log('onDrop 1');\r\n            createImage(canvasX, canvasY, currentImageUrl);\r\n        },\r\n    };\r\n    miro.board.ui.initDraggableItemsContainer(container, imageOptions);\r\n    var currentShapeColor;\r\n    var currentShapeText;\r\n    var shapeOptions = {\r\n        draggableItemSelector: '.shape',\r\n        onClick: function (targetElement) { return __awaiter(_this, void 0, void 0, function () {\r\n            var color, text, widget;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        color = targetElement.getAttribute('data-color');\r\n                        text = targetElement.innerText;\r\n                        return [4 /*yield*/, createShape(0, 0, color, text)];\r\n                    case 1:\r\n                        widget = (_a.sent())[0];\r\n                        miro.board.viewport.zoomToObject(widget);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        }); },\r\n        getDraggableItemPreview: function (targetElement) {\r\n            currentShapeColor = targetElement.getAttribute('data-color');\r\n            currentShapeText = targetElement.innerText;\r\n            return {\r\n                url: \"data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill='%23\" + currentShapeColor + \"' height='140' width='140'/%3E%3C/g%3E%3C/svg%3E\",\r\n            };\r\n        },\r\n        onDrop: function (canvasX, canvasY) {\r\n            console.log('onDrop 2');\r\n            createShape(canvasX, canvasY, currentShapeColor, currentShapeText);\r\n        },\r\n    };\r\n    miro.board.ui.initDraggableItemsContainer(container, shapeOptions);\r\n}\r\nmiro.onReady(bootstrap);\r\n\n\n//# sourceURL=webpack:///./src/content-panel.ts?");

/***/ })

/******/ });