"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/usuarios/allusers";
exports.ids = ["pages/api/usuarios/allusers"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxPQUFPLEdBQUcsRUFBRTtBQUVsQixJQUFJQyxNQUFNO0FBQ1YsSUFBSUMsYUFBYTtBQUVqQixJQUFJLENBQUNMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQsSUFBSU4sSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkwsTUFBTSxHQUFHLElBQUlOLGdEQUFXLENBQUNDLEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7UUFDdkNLLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdMLE1BQU0sQ0FBQ00sT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNETCxhQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUosYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG5cclxubGV0IGNsaWVudDtcclxubGV0IGNsaWVudFByb21pc2U7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsXCIpO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxyXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgfVxyXG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxyXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiTk9ERV9FTlYiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/usuarios/allusers.js":
/*!****************************************!*\
  !*** ./pages/api/usuarios/allusers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return;\n    }\n    const cliente = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const data = req.body;\n    const { page , info  } = data;\n    var perPage = 6;\n    const db = cliente.db(\"myFirstDatabase\");\n    // total number of records from database\n    var total = await db.collection(\"usuarios\").count();\n    // Calculating number of pagination links required\n    var pages = Math.ceil(total / perPage);\n    // get current page number\n    var pageNumber = page == null ? 1 : page;\n    // get records to skip\n    var startFrom = (pageNumber - 1) * perPage;\n    // get data from mongo DB using pagination\n    var resul = await db.collection(\"usuarios\").find(info).sort({\n        id: -1\n    }).skip(startFrom).limit(perPage).toArray();\n    res.json({\n        pages: pages,\n        usuarios: resul\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXN1YXJpb3MvYWxsdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFFbEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNQyxPQUFPLEdBQUcsTUFBTUwsb0RBQWE7SUFFbkMsTUFBTU0sSUFBSSxHQUFHSixHQUFHLENBQUNLLElBQUk7SUFDckIsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLElBQUksR0FBRSxHQUFHSCxJQUFJO0lBRTNCLElBQUlJLE9BQU8sR0FBRyxDQUFDO0lBRWYsTUFBTUMsRUFBRSxHQUFHTixPQUFPLENBQUNNLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUN4Qyx3Q0FBd0M7SUFDeEMsSUFBSUMsS0FBSyxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxLQUFLLEVBQUU7SUFFbkQsa0RBQWtEO0lBQ2xELElBQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxJQUFJLENBQUNMLEtBQUssR0FBR0YsT0FBTyxDQUFDO0lBRXRDLDBCQUEwQjtJQUMxQixJQUFJUSxVQUFVLEdBQUdWLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHQSxJQUFJO0lBRXhDLHNCQUFzQjtJQUN0QixJQUFJVyxTQUFTLEdBQUcsQ0FBQ0QsVUFBVSxHQUFHLENBQUMsSUFBSVIsT0FBTztJQUUxQywwQ0FBMEM7SUFDMUMsSUFBSVUsS0FBSyxHQUFHLE1BQU1ULEVBQUUsQ0FDakJFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FDdEJRLElBQUksQ0FBQ1osSUFBSSxDQUFDLENBQ1ZhLElBQUksQ0FBQztRQUFFQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQUUsQ0FBQyxDQUNoQkMsSUFBSSxDQUFDTCxTQUFTLENBQUMsQ0FDZk0sS0FBSyxDQUFDZixPQUFPLENBQUMsQ0FDZGdCLE9BQU8sRUFBRTtJQUVadkIsR0FBRyxDQUFDd0IsSUFBSSxDQUFDO1FBQUVaLEtBQUssRUFBRUEsS0FBSztRQUFFYSxRQUFRLEVBQUVSLEtBQUs7S0FBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS91c3Vhcmlvcy9hbGx1c2Vycy5qcz9mODY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xpZW50ZSA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICBjb25zdCB7IHBhZ2UsIGluZm8gfSA9IGRhdGE7XHJcblxyXG4gIHZhciBwZXJQYWdlID0gNjtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnRlLmRiKFwibXlGaXJzdERhdGFiYXNlXCIpO1xyXG4gIC8vIHRvdGFsIG51bWJlciBvZiByZWNvcmRzIGZyb20gZGF0YWJhc2VcclxuICB2YXIgdG90YWwgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXN1YXJpb3NcIikuY291bnQoKTtcclxuXHJcbiAgLy8gQ2FsY3VsYXRpbmcgbnVtYmVyIG9mIHBhZ2luYXRpb24gbGlua3MgcmVxdWlyZWRcclxuICB2YXIgcGFnZXMgPSBNYXRoLmNlaWwodG90YWwgLyBwZXJQYWdlKTtcclxuXHJcbiAgLy8gZ2V0IGN1cnJlbnQgcGFnZSBudW1iZXJcclxuICB2YXIgcGFnZU51bWJlciA9IHBhZ2UgPT0gbnVsbCA/IDEgOiBwYWdlO1xyXG5cclxuICAvLyBnZXQgcmVjb3JkcyB0byBza2lwXHJcbiAgdmFyIHN0YXJ0RnJvbSA9IChwYWdlTnVtYmVyIC0gMSkgKiBwZXJQYWdlO1xyXG5cclxuICAvLyBnZXQgZGF0YSBmcm9tIG1vbmdvIERCIHVzaW5nIHBhZ2luYXRpb25cclxuICB2YXIgcmVzdWwgPSBhd2FpdCBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJ1c3Vhcmlvc1wiKVxyXG4gICAgLmZpbmQoaW5mbylcclxuICAgIC5zb3J0KHsgaWQ6IC0xIH0pXHJcbiAgICAuc2tpcChzdGFydEZyb20pXHJcbiAgICAubGltaXQocGVyUGFnZSlcclxuICAgIC50b0FycmF5KCk7XHJcblxyXG4gIHJlcy5qc29uKHsgcGFnZXM6IHBhZ2VzLCB1c3VhcmlvczogcmVzdWwgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY2xpZW50ZSIsImRhdGEiLCJib2R5IiwicGFnZSIsImluZm8iLCJwZXJQYWdlIiwiZGIiLCJ0b3RhbCIsImNvbGxlY3Rpb24iLCJjb3VudCIsInBhZ2VzIiwiTWF0aCIsImNlaWwiLCJwYWdlTnVtYmVyIiwic3RhcnRGcm9tIiwicmVzdWwiLCJmaW5kIiwic29ydCIsImlkIiwic2tpcCIsImxpbWl0IiwidG9BcnJheSIsImpzb24iLCJ1c3VhcmlvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/usuarios/allusers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/usuarios/allusers.js"));
module.exports = __webpack_exports__;

})();