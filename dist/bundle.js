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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/create.component.js":
/*!********************************************!*\
  !*** ./src/components/create.component.js ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateComponent\", function() { return CreateComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n/* harmony import */ var _core_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/form */ \"./src/core/form.js\");\n/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/validators */ \"./src/core/validators.js\");\n/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.services */ \"./src/services/api.services.js\");\n\n\n\n\nclass CreateComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(id) {\n    super(id);\n  }\n\n  init() {\n    this.$el.addEventListener('submit', submitHandler.bind(this));\n    this.form = new _core_form__WEBPACK_IMPORTED_MODULE_1__[\"Form\"](this.$el, {\n      title: [_core_validators__WEBPACK_IMPORTED_MODULE_2__[\"Validators\"].required],\n      fulltext: [_core_validators__WEBPACK_IMPORTED_MODULE_2__[\"Validators\"].required, _core_validators__WEBPACK_IMPORTED_MODULE_2__[\"Validators\"].minLength(15)]\n    });\n  }\n\n}\n\nasync function submitHandler(event) {\n  event.preventDefault();\n\n  if (this.form.isValid()) {\n    const formData = {\n      type: this.$el.type.value,\n      date: new Date().toLocaleDateString(),\n      ...this.form.value()\n    };\n    await _services_api_services__WEBPACK_IMPORTED_MODULE_3__[\"apiService\"].createPost(formData);\n    alert('Post is created');\n    this.form.clear();\n  }\n}\n\n//# sourceURL=webpack:///./src/components/create.component.js?");

/***/ }),

/***/ "./src/components/favorite.component.js":
/*!**********************************************!*\
  !*** ./src/components/favorite.component.js ***!
  \**********************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavoriteComponent\", function() { return FavoriteComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.services */ \"./src/services/api.services.js\");\n/* harmony import */ var _templates_post_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/post.template */ \"./src/templates/post.template.js\");\n\n\n\nclass FavoriteComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(id, {\n    loader\n  }) {\n    super(id);\n    this.loader = loader;\n  }\n\n  init() {\n    this.$el.addEventListener('click', linkClickHandler.bind(this));\n  }\n\n  onShow() {\n    const favorites = JSON.parse(localStorage.getItem('favorites'));\n    const html = renderList(favorites);\n    this.$el.insertAdjacentHTML('afterbegin', html);\n  }\n\n  onHide() {\n    this.$el.innerHTML = '';\n  }\n\n}\n\nasync function linkClickHandler(event) {\n  event.preventDefault();\n\n  if (event.target.classList.contains('js-link')) {\n    const postId = event.target.dataset.id;\n    console.log(postId);\n    this.$el.innerHTML = '';\n    this.loader.show();\n    const post = await _services_api_services__WEBPACK_IMPORTED_MODULE_1__[\"apiService\"].fetchPostsById(postId);\n    this.loader.hide();\n    this.$el.insertAdjacentHTML('afterbegin', Object(_templates_post_template__WEBPACK_IMPORTED_MODULE_2__[\"renderPost\"])(post, false));\n  }\n}\n\nfunction renderList(list = []) {\n  if (list && list.length) {\n    return `\n      <ul>\n        ${list.map(i => `<li><a href=\"#\" class=\"js-link\" data-id=\"${i.id}\">${i.title}</a></li>`).join(' ')}\n      </ul>\n    `;\n  }\n\n  return `<p> Nothing to display here </p>`;\n}\n\n//# sourceURL=webpack:///./src/components/favorite.component.js?");

/***/ }),

/***/ "./src/components/header.component.js":
/*!********************************************!*\
  !*** ./src/components/header.component.js ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderComponent\", function() { return HeaderComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n\nclass HeaderComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(id) {\n    super(id);\n  }\n\n  init() {\n    if (localStorage.getItem('visited')) {\n      this.hide();\n    }\n\n    this.$el.querySelector('.js-header-start').addEventListener('click', buttonHandler.bind(this));\n  }\n\n}\n\nfunction buttonHandler() {\n  localStorage.setItem('visited', JSON.stringify(true));\n  this.hide();\n}\n\n//# sourceURL=webpack:///./src/components/header.component.js?");

/***/ }),

/***/ "./src/components/loader.component.js":
/*!********************************************!*\
  !*** ./src/components/loader.component.js ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoaderComponent\", function() { return LoaderComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n\nclass LoaderComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(id) {\n    super(id);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/loader.component.js?");

/***/ }),

/***/ "./src/components/navigation.component.js":
/*!************************************************!*\
  !*** ./src/components/navigation.component.js ***!
  \************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationComponent\", function() { return NavigationComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n\nclass NavigationComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(id) {\n    super(id);\n    this.tabs = [];\n  }\n\n  init() {\n    this.$el.addEventListener('click', tabClickHandler.bind(this));\n  }\n\n  registerTabs(tabs) {\n    this.tabs = tabs;\n  }\n\n}\n\nfunction tabClickHandler(event) {\n  event.preventDefault();\n\n  if (event.target.classList.contains('tab')) {\n    Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {\n      tab.classList.remove('active');\n    });\n    event.target.classList.add('active');\n    const activeTab = this.tabs.find(t => t.name === event.target.dataset.name);\n    this.tabs.forEach(t => t.component.hide());\n    activeTab.component.show();\n  }\n}\n\n//# sourceURL=webpack:///./src/components/navigation.component.js?");

/***/ }),

/***/ "./src/components/posts.component.js":
/*!*******************************************!*\
  !*** ./src/components/posts.component.js ***!
  \*******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostsComponent\", function() { return PostsComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n/* harmony import */ var _services_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.services */ \"./src/services/api.services.js\");\n/* harmony import */ var _services_transform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/transform.service */ \"./src/services/transform.service.js\");\n/* harmony import */ var _templates_post_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/post.template */ \"./src/templates/post.template.js\");\n\n\n\n\nclass PostsComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(id, {\n    loader\n  }) {\n    super(id);\n    this.loader = loader;\n  }\n\n  init() {\n    this.$el.addEventListener('click', buttonHandler.bind(this));\n  }\n\n  async onShow() {\n    this.loader.show();\n    const fbData = await _services_api_services__WEBPACK_IMPORTED_MODULE_1__[\"apiService\"].fetchPosts();\n\n    if (fbData) {\n      const posts = _services_transform_service__WEBPACK_IMPORTED_MODULE_2__[\"TransformService\"].fbObjectToArray(fbData);\n      const html = posts.map(post => Object(_templates_post_template__WEBPACK_IMPORTED_MODULE_3__[\"renderPost\"])(post, true));\n      this.loader.hide();\n      this.$el.insertAdjacentHTML('afterbegin', html.join(' '));\n    } else {\n      this.loader.hide();\n      this.$el.insertAdjacentHTML('afterbegin', '<p>You have not added any posts yet</p>');\n    }\n  }\n\n  onHide() {\n    this.$el.innerHTML = '';\n  }\n\n}\n\nasync function buttonHandler(event) {\n  const $el = event.target;\n  const id = $el.dataset.id;\n  const title = $el.dataset.title; //delete post from database and bookmarks\n\n  if ($el.classList.contains('js-delete')) {\n    event.preventDefault();\n    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];\n    const candidate = favorites.find(p => p.id === id);\n\n    if (candidate) {\n      favorites = favorites.filter(p => p.id !== id);\n    }\n\n    localStorage.setItem('favorites', JSON.stringify(favorites));\n    await _services_api_services__WEBPACK_IMPORTED_MODULE_1__[\"apiService\"].deletePostById(id);\n    this.hide();\n    this.show();\n  }\n\n  if (id && !$el.classList.contains('js-delete')) {\n    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];\n    const candidate = favorites.find(p => p.id === id);\n\n    if (candidate) {\n      //delete element\n      $el.textContent = 'Bookmark';\n      $el.classList.add('button-primary');\n      $el.classList.remove('button-danger');\n      favorites = favorites.filter(p => p.id !== id);\n    } else {\n      //add element\n      $el.classList.remove('button-primary');\n      $el.classList.add('button-danger');\n      $el.textContent = 'Delete bookmark';\n      favorites.push({\n        id,\n        title\n      });\n    }\n\n    localStorage.setItem('favorites', JSON.stringify(favorites));\n  }\n}\n\n//# sourceURL=webpack:///./src/components/posts.component.js?");

/***/ }),

/***/ "./src/core/component.js":
/*!*******************************!*\
  !*** ./src/core/component.js ***!
  \*******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\n  constructor(id) {\n    //pass id of html element \n    this.$el = document.getElementById(id);\n    this.init();\n  }\n\n  init() {}\n\n  onShow() {}\n\n  onHide() {}\n\n  hide() {\n    this.$el.classList.add('hide');\n    this.onHide();\n  }\n\n  show() {\n    this.$el.classList.remove('hide');\n    this.onShow();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/component.js?");

/***/ }),

/***/ "./src/core/form.js":
/*!**************************!*\
  !*** ./src/core/form.js ***!
  \**************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\nclass Form {\n  constructor(form, controls) {\n    this.form = form;\n    this.controls = controls;\n  }\n\n  value() {\n    const value = {};\n    Object.keys(this.controls).forEach(control => {\n      value[control] = this.form[control].value;\n    });\n    return value;\n  }\n\n  isValid() {\n    let isFormValid = true;\n    Object.keys(this.controls).forEach(control => {\n      const validators = this.controls[control];\n      let isValid = true;\n      validators.forEach(validator => {\n        isValid = validator(this.form[control].value) && isValid;\n      });\n      isValid ? clearError(this.form[control]) : setError(this.form[control]);\n      isFormValid = isFormValid && isValid;\n    });\n    return isFormValid;\n  }\n\n  clear() {\n    Object.keys(this.controls).forEach(control => {\n      this.form[control].value = '';\n    });\n  }\n\n}\n\nfunction setError($control) {\n  clearError($control);\n  const error = '<p class=\"validation-error\">Cannot be blank</p>';\n  $control.classList.add('invalid');\n  $control.insertAdjacentHTML('afterend', error);\n}\n\nfunction clearError($control) {\n  $control.classList.remove('invalid');\n\n  if ($control.nextSibling) {\n    $control.closest('.form-control').removeChild($control.nextSibling);\n  }\n}\n\n//# sourceURL=webpack:///./src/core/form.js?");

/***/ }),

/***/ "./src/core/validators.js":
/*!********************************!*\
  !*** ./src/core/validators.js ***!
  \********************************/
/*! exports provided: Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Validators\", function() { return Validators; });\nclass Validators {\n  static required(value = '') {\n    return value && value.trim();\n  }\n\n  static minLength(length) {\n    return value => {\n      return value.length >= length;\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./src/core/validators.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header.component */ \"./src/components/header.component.js\");\n/* harmony import */ var _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation.component */ \"./src/components/navigation.component.js\");\n/* harmony import */ var _components_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create.component */ \"./src/components/create.component.js\");\n/* harmony import */ var _components_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/posts.component */ \"./src/components/posts.component.js\");\n/* harmony import */ var _components_favorite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/favorite.component */ \"./src/components/favorite.component.js\");\n/* harmony import */ var _components_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loader.component */ \"./src/components/loader.component.js\");\n\n\n\n\n\n\nnew _components_header_component__WEBPACK_IMPORTED_MODULE_0__[\"HeaderComponent\"]('header');\nconst navigation = new _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__[\"NavigationComponent\"]('navigation');\nconst loader = new _components_loader_component__WEBPACK_IMPORTED_MODULE_5__[\"LoaderComponent\"]('loader');\nconst create = new _components_create_component__WEBPACK_IMPORTED_MODULE_2__[\"CreateComponent\"]('create');\nconst posts = new _components_posts_component__WEBPACK_IMPORTED_MODULE_3__[\"PostsComponent\"]('posts', {\n  loader\n});\nconst favorite = new _components_favorite_component__WEBPACK_IMPORTED_MODULE_4__[\"FavoriteComponent\"]('favorite', {\n  loader\n});\nnavigation.registerTabs([{\n  name: 'create',\n  component: create\n}, {\n  name: 'posts',\n  component: posts\n}, {\n  name: 'favorite',\n  component: favorite\n}]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/services/api.services.js":
/*!**************************************!*\
  !*** ./src/services/api.services.js ***!
  \**************************************/
/*! exports provided: apiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiService\", function() { return apiService; });\nclass ApiService {\n  constructor(baseUrl) {\n    this.url = baseUrl;\n  }\n\n  async createPost(post) {\n    try {\n      const request = new Request(this.url + '/posts.json', {\n        method: 'post',\n        body: JSON.stringify(post)\n      });\n      return useRequest(request);\n    } catch (error) {\n      console.error(error);\n    }\n  }\n\n  async fetchPosts() {\n    try {\n      const request = new Request(this.url + '/posts.json', {\n        method: 'get'\n      });\n      return useRequest(request);\n    } catch (error) {\n      console.error(error);\n    }\n  }\n\n  async fetchPostsById(id) {\n    try {\n      const request = new Request(this.url + `/posts/${id}.json`, {\n        method: 'get'\n      });\n      return useRequest(request);\n    } catch (error) {\n      console.error(error);\n    }\n  }\n\n  async deletePostById(id) {\n    try {\n      console.log(id);\n      const request = new Request(this.url + `/posts/${id}.json`, {\n        method: 'delete'\n      });\n      return useRequest(request);\n    } catch (error) {\n      console.error(error);\n    }\n  }\n\n}\n\nasync function useRequest(request) {\n  const response = await fetch(request);\n  return await response.json();\n}\n\nconst apiService = new ApiService('https://javascript-blog-abc1d.firebaseio.com/');\n\n//# sourceURL=webpack:///./src/services/api.services.js?");

/***/ }),

/***/ "./src/services/transform.service.js":
/*!*******************************************!*\
  !*** ./src/services/transform.service.js ***!
  \*******************************************/
/*! exports provided: TransformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TransformService\", function() { return TransformService; });\nclass TransformService {\n  static fbObjectToArray(fbData) {\n    return Object.keys(fbData).map(key => {\n      const item = fbData[key];\n      item.id = key;\n      return item;\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/services/transform.service.js?");

/***/ }),

/***/ "./src/templates/post.template.js":
/*!****************************************!*\
  !*** ./src/templates/post.template.js ***!
  \****************************************/
/*! exports provided: renderPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPost\", function() { return renderPost; });\nfunction renderPost(post, withButton) {\n  const tag = post.type === 'news' ? `<li class=\"tag tag-blue tag-rounded\">${post.type}</li>` : `<li class=\"tag tag-rounded\">${post.type}</li>`;\n  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];\n  const candidate = favorites.find(p => p.id === post.id);\n  const button = candidate ? `<button class=\"button-round button-danger button-small\" data-id=\"${post.id}\" data-title=\"${post.title}\">Delete bookmark</button>` : `<button class=\"button-round button-primary button-small\" data-id=\"${post.id}\" data-title=\"${post.title}\">Bookmark</button>`;\n  return `\n    <div class=\"panel\">\n      <div class=\"panel-head\">\n        <p class=\"panel-title\"><a href=\"#\"><i class=\"fa fa-trash-alt js-delete\" data-id=\"${post.id}\"></i></a> ${post.title}</p>\n        <ul class=\"tags\">\n          ${tag}\n        </ul>\n      </div>\n      <div class=\"panel-body\">\n        <p class=\"multi-line\">${post.fulltext}</p>\n      </div>\n      <div class=\"panel-footer w-panel-footer\">\n        <small>${post.date}</small>\n        ${withButton ? button : ''}\n      </div>\n    </div>\n  `;\n}\n\n//# sourceURL=webpack:///./src/templates/post.template.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });