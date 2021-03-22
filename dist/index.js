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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: CLIENT_ID, PLUGIN_TITLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLIENT_ID\", function() { return CLIENT_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLUGIN_TITLE\", function() { return PLUGIN_TITLE; });\nvar CLIENT_ID =  false ? undefined : '3074457355995945552';\r\nvar PLUGIN_TITLE =  false ? undefined : 'TT_Local Run';\r\n\n\n//# sourceURL=webpack:///./src/config.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ \"./src/config.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar icon24 = \"<svg version=\\\"1.1\\\" id=\\\"team_topologies_logo_btn\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 103 103\\\" style=\\\"enable-background:new 0 0 339 103;\\\" xml:space=\\\"preserve\\\">\\n<g>\\n  <path fill=\\\"#59FBE3\\\" d=\\\"M66.4,49.7v33.6h-9.2c-6.7,0-12.1-5.4-12.1-12.1V49.7h7.1H66.4z\\\" />\\n  <path fill=\\\"#9B79EE\\\" d=\\\"M66.4,22.8v5.7h-2.1h-7.1H45.1V10.7h9.2C61,10.7,66.4,16.1,66.4,22.8z\\\" />\\n  <path fill=\\\"#9B79EE\\\" d=\\\"M40,49.7v33.6h-9.2c-6.7,0-12.1-5.4-12.1-12.1V49.7H40z\\\" />\\n  <path fill=\\\"#FFDF56\\\" d=\\\"M30.8,28.5c-6.7,0-12.1,5.4-12.1,12.1v9.2H40h12.2h14.2h5.9h1.6c6.7,0,12.1-5.4,12.1-12.1v-9.2\\\" />\\n  <path fill=\\\"#59FBE3\\\" d=\\\"M40,22.8v5.7h-9.2c-6.7,0-12.1,5.4-12.1,12.1V10.7h9.2C34.6,10.7,40,16.1,40,22.8z\\\" />\\n  <path fill=\\\"#F2195C\\\" d=\\\"M66.4,28.5v9.2c0,6.7-6,12.1-13.4,12.1h-7.9v-9.2c0-6.7,6.1-12.1,13.5-12.1H66.4z\\\" />\\n</g>\\n</svg>\";\r\nmiro.onReady(function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        miro.initialize({\r\n            extensionPoints: {\r\n                getWidgetMenuItems: function () {\r\n                    return Promise.resolve({\r\n                        tooltip: config__WEBPACK_IMPORTED_MODULE_0__[\"PLUGIN_TITLE\"],\r\n                        svgIcon: icon24,\r\n                        onClick: function (widgets) {\r\n                            miro.board.ui.openLeftSidebar('details-panel.html');\r\n                        },\r\n                    });\r\n                },\r\n                toolbar: function () { return __awaiter(void 0, void 0, void 0, function () {\r\n                    var permissions, canEdit, authorized;\r\n                    return __generator(this, function (_a) {\r\n                        switch (_a.label) {\r\n                            case 0: return [4 /*yield*/, miro.currentUser.getCurrentBoardPermissions()];\r\n                            case 1:\r\n                                permissions = _a.sent();\r\n                                canEdit = permissions.findIndex(function (p) { return p === 'EDIT_CONTENT'; }) !== -1;\r\n                                return [4 /*yield*/, miro.isAuthorized()];\r\n                            case 2:\r\n                                authorized = _a.sent();\r\n                                if (authorized && canEdit) {\r\n                                    return [2 /*return*/, {\r\n                                            title: config__WEBPACK_IMPORTED_MODULE_0__[\"PLUGIN_TITLE\"],\r\n                                            svgIcon: icon24,\r\n                                            librarySvgIcon: icon24,\r\n                                            toolbarSvgIcon: icon24,\r\n                                            onClick: function () {\r\n                                                miro.board.ui.openLibrary('content-panel.html', { title: config__WEBPACK_IMPORTED_MODULE_0__[\"PLUGIN_TITLE\"] });\r\n                                            },\r\n                                        }];\r\n                                }\r\n                                return [2 /*return*/];\r\n                        }\r\n                    });\r\n                }); },\r\n            },\r\n        });\r\n        return [2 /*return*/];\r\n    });\r\n}); });\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });