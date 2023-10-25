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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "(api)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function hashPassword(password) {\n    const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n    return isValid;\n}\nasync function auth(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (session) {\n        res.json({\n            content: \"ok\"\n        });\n    } else {\n        res.json({\n            error: \"error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ0k7QUFDdEMsZUFBZUcsWUFBWSxDQUFDQyxRQUFRLEVBQUU7SUFDM0MsTUFBTUMsY0FBYyxHQUFHLE1BQU1MLDhDQUFJLENBQUNJLFFBQVEsRUFBRSxFQUFFLENBQUM7SUFDL0MsT0FBT0MsY0FBYyxDQUFDO0FBQ3hCLENBQUM7QUFFTSxlQUFlQyxjQUFjLENBQUNGLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQzdELE1BQU1FLE9BQU8sR0FBRyxNQUFNTixpREFBTyxDQUFDRyxRQUFRLEVBQUVDLGNBQWMsQ0FBQztJQUN2RCxPQUFPRSxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVNLGVBQWVDLElBQUksQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDbkMsTUFBTUMsT0FBTyxHQUFHLE1BQU1ULDJEQUFVLENBQUM7UUFBRU8sR0FBRztLQUFFLENBQUM7SUFFekMsSUFBSUUsT0FBTyxFQUFFO1FBQ1hELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO1lBQ1BDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsT0FBTztRQUNMSCxHQUFHLENBQUNFLElBQUksQ0FBQztZQUNQRSxLQUFLLEVBQUUsT0FBTztTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNoLCBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcclxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2gocGFzc3dvcmQsIDEyKTtcclxuICByZXR1cm4gaGFzaGVkUGFzc3dvcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlQYXNzd29yZChwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpIHtcclxuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xyXG4gIHJldHVybiBpc1ZhbGlkO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aChyZXEsIHJlcykge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xyXG5cclxuICBpZiAoc2Vzc2lvbikge1xyXG4gICAgcmVzLmpzb24oe1xyXG4gICAgICBjb250ZW50OiBcIm9rXCIsXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLmpzb24oe1xyXG4gICAgICBlcnJvcjogXCJlcnJvclwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJoYXNoIiwiY29tcGFyZSIsImdldFNlc3Npb24iLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwidmVyaWZ5UGFzc3dvcmQiLCJpc1ZhbGlkIiwiYXV0aCIsInJlcSIsInJlcyIsInNlc3Npb24iLCJqc29uIiwiY29udGVudCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/auth.js\n");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxPQUFPLEdBQUcsRUFBRTtBQUVsQixJQUFJQyxNQUFNO0FBQ1YsSUFBSUMsYUFBYTtBQUVqQixJQUFJLENBQUNMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQsSUFBSU4sSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkwsTUFBTSxHQUFHLElBQUlOLGdEQUFXLENBQUNDLEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7UUFDdkNLLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdMLE1BQU0sQ0FBQ00sT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNETCxhQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUosYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG5cclxubGV0IGNsaWVudDtcclxubGV0IGNsaWVudFByb21pc2U7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsXCIpO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxyXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgfVxyXG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxyXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiTk9ERV9FTlYiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    site: \"http://localhost:3000\",\n    secret: process.env.SECRET,\n    session: {\n        jwt: true\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            async authorize (credentials) {\n                const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n                const usersCollection = client.db(\"ccnetwork\").collection(\"users\");\n                const user = await usersCollection.findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    throw new Error(\"usuario n\\xe3o existe.\");\n                }\n                const isValid = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(credentials.password, user.password);\n                if (!isValid) {\n                    throw new Error(\"verifique a senha.\");\n                }\n                return user;\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNDO0FBRWdDO0FBQ2Y7QUFDRjtBQUVqRCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QkssSUFBSSxFQUFFLHVCQUF1QjtJQUM3QkMsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTTtJQUMxQkMsT0FBTyxFQUFFO1FBQ1BDLEdBQUcsRUFBRSxJQUFJO0tBQ1Y7SUFDREMsU0FBUyxFQUFFO1FBQ1RWLHNFQUFtQixDQUFDO1lBQ2xCLE1BQU1XLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQixNQUFNQyxNQUFNLEdBQUcsTUFBTVgsb0RBQWE7Z0JBQ2xDLE1BQU1ZLGVBQWUsR0FBR0QsTUFBTSxDQUFDRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUNDLFVBQVUsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xFLE1BQU1DLElBQUksR0FBRyxNQUFNSCxlQUFlLENBQUNJLE9BQU8sQ0FBQztvQkFDekNDLEtBQUssRUFBRVAsV0FBVyxDQUFDTyxLQUFLO2lCQUN6QixDQUFDO2dCQUVGLElBQUksQ0FBQ0YsSUFBSSxFQUFFO29CQUNULE1BQU0sSUFBSUcsS0FBSyxDQUFDLHdCQUFxQixDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQsTUFBTUMsT0FBTyxHQUFHLE1BQU1wQix5REFBYyxDQUNsQ1csV0FBVyxDQUFDVSxRQUFRLEVBQ3BCTCxJQUFJLENBQUNLLFFBQVEsQ0FDZDtnQkFFRCxJQUFJLENBQUNELE9BQU8sRUFBRTtvQkFDWixNQUFNLElBQUlELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELE9BQU9ILElBQUksQ0FBQztZQUNkLENBQUM7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyB2ZXJpZnlQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXV0aFwiO1xyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBzaXRlOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG4gIHNlc3Npb246IHtcclxuICAgIGp3dDogdHJ1ZSxcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKFwiY2NuZXR3b3JrXCIpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uLmZpbmRPbmUoe1xyXG4gICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzdWFyaW8gbsOjbyBleGlzdGUuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKFxyXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2ZXJpZmlxdWUgYSBzZW5oYS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJ1c2VFZmZlY3QiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwidmVyaWZ5UGFzc3dvcmQiLCJjbGllbnRQcm9taXNlIiwic2l0ZSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJzZXNzaW9uIiwiand0IiwicHJvdmlkZXJzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJjbGllbnQiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsIiwiRXJyb3IiLCJpc1ZhbGlkIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();