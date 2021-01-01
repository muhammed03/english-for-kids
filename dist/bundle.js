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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _layout_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






document.cardsMap = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["cardToMap"])(_cards__WEBPACK_IMPORTED_MODULE_2__["default"]);
document.idMap = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["idToCategoryMap"])(_cards__WEBPACK_IMPORTED_MODULE_2__["default"]);
var switchButton = document.querySelector(".switch-button");
var switchBtnRight = document.querySelector('.switch-button-case.right');
var switchBtnLeft = document.querySelector('.switch-button-case.left');
var activeSwitch = document.querySelector('.active');
var switchModeButton = document.querySelector(".switch-mode-button");
var categoryList = document.querySelector(".category-list");
var wordsList = document.querySelector(".words-list");

for (var i = 0; i < Object.keys(document.cardsMap).length; i++) {
  var category = Object.keys(document.cardsMap)[i];
  categoryList.appendChild(Object(_layout_utils__WEBPACK_IMPORTED_MODULE_3__["createCategoryCard"])({
    name: category,
    url: document.cardsMap[category][0].image,
    audioSrc: document.cardsMap[category][0].audioSrc,
    id: "category-".concat(i)
  }));
}

window.addEventListener("popstate", function () {
  var selectedCategoryId = document.location.hash;
  var selectedCategoryName = document.idMap[selectedCategoryId];
  console.log(selectedCategoryId, selectedCategoryName);
  var selectedWords = document.cardsMap[selectedCategoryName];
  wordsList.innerHTML = "";
  document.querySelector('.score-display').innerHTML = '';
  document.game = null;

  if (document.location.hash) {
    // alip tastaysin
    categoryList.classList.add("hidden");
    switchButton.classList.remove("hidden");
    var _i = 0;

    var _iterator = _createForOfIteratorHelper(selectedWords),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var word = _step.value;
        wordsList.appendChild(Object(_layout_utils__WEBPACK_IMPORTED_MODULE_3__["createWordCard"])({
          name: document.cardsMap[selectedCategoryName][_i].word,
          url: document.cardsMap[selectedCategoryName][_i].image,
          audioSrc: document.cardsMap[selectedCategoryName][_i].audioSrc,
          id: "category-".concat(_i),
          translation: document.cardsMap[selectedCategoryName][_i].translation
        }));
        _i++;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    // qosasing  
    categoryList.classList.remove("hidden");
    switchButton.classList.add("hidden");
    switchModeButton.classList.add("hidden");
    switchLeft();
  }

  console.log(document.location.hash);
});
switchModeButton.addEventListener('click', function () {
  document.querySelector('.score-display').innerHTML = '';
  var currentCategoryId = document.location.hash;

  if (currentCategoryId) {
    var currentCategoryName = document.idMap[currentCategoryId];
    document.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](document.cardsMap[currentCategoryName]);
    var word = document.game.getRound();
    var audio = document.getElementById(word);
    audio.play();
  } else {
    console.log("No category was selected. Cannot start a game on main menu");
  }
});
/* Switch toggle mode*/

function switchLeft() {
  switchBtnRight.classList.remove('active-case');
  switchBtnLeft.classList.add('active-case');
  activeSwitch.style.left = '0%';
  switchModeButton.style.display = "none";
  document.game = null;
  document.querySelector('.score-display').innerHTML = '';
}

function switchRight() {
  switchBtnRight.classList.add('active-case');
  switchBtnLeft.classList.remove('active-case');
  activeSwitch.style.left = '50%';
  switchModeButton.style.display = "block";
}

switchBtnLeft.addEventListener('click', function () {
  switchLeft();
}, false);
switchBtnRight.addEventListener('click', function () {
  switchRight();
}, false);
/* Switch toggle mode*/

Object(_layout_utils__WEBPACK_IMPORTED_MODULE_3__["createSidebar"])(Object.keys(document.cardsMap));
Object(_layout_utils__WEBPACK_IMPORTED_MODULE_3__["initBurgerMenu"])();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TOTAL_ATTEMPTS = 8;

var Game = /*#__PURE__*/function () {
  function Game(wordList) {
    _classCallCheck(this, Game);

    this.attempts = TOTAL_ATTEMPTS;
    this.words = wordList;
    this.totalCorrect = 0;
    this.secretWord = null;
  }

  _createClass(Game, [{
    key: "isFinished",
    value: function isFinished() {
      return this.attempts === 0;
    }
  }, {
    key: "hasWon",
    value: function hasWon() {
      return this.totalCorrect === TOTAL_ATTEMPTS;
    }
  }, {
    key: "getCorrectlyGuessed",
    value: function getCorrectlyGuessed() {
      return this.totalCorrect;
    }
  }, {
    key: "getRound",
    value: function getRound() {
      // randomly select word from list
      var index = Math.floor(Math.random() * this.words.length); // set secretWord to chosen word

      this.secretWord = this.words[index]; //delete from index element from words

      this.words = this.words.filter(function (word, idx) {
        return index !== idx;
      }); // return audio of the secretWord

      return this.secretWord.word;
    }
  }, {
    key: "checkWord",
    value: function checkWord(guessedWord) {
      this.attempts--;
      var result = "WRONG";

      if (guessedWord === this.secretWord.word) {
        result = "CORRECT";
        this.totalCorrect++;
      }

      return result;
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardToMap", function() { return cardToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idToCategoryMap", function() { return idToCategoryMap; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var cardToMap = function cardToMap(cards) {
  var _cards = _toArray(cards),
      categories = _cards[0],
      rest = _cards.slice(1);

  var cardsMap = {};

  for (var i = 0; i < categories.length; i++) {
    cardsMap[categories[i]] = rest[i];
  }

  return cardsMap;
};
var idToCategoryMap = function idToCategoryMap(cards) {
  var _cards2 = _slicedToArray(cards, 1),
      categories = _cards2[0];

  var idMap = {};

  for (var i = 0; i < categories.length; i++) {
    idMap["#category-".concat(i)] = categories[i];
  }

  return idMap;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cards = [['Action set-A', 'Action set-B', 'Animal set-A', 'Animal set-B', 'Clothes', 'Emotions', 'Kitchen', 'Sport'], [{
  word: 'cry',
  translation: 'плакать',
  image: 'img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: 'img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: 'img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: 'img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: 'img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: 'img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: 'img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: 'img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: 'img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: 'img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: 'img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: 'img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: 'img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: 'img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: 'img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: 'img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: 'img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: 'img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: 'img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: 'img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: 'img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: 'img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: 'img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: 'img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: 'img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: 'img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: 'img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: 'img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: 'img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: 'img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: 'img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: 'img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], [{
  word: 'skirt',
  translation: 'юбка',
  image: 'img/skirt.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: 'img/pants.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: 'img/blouse.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: 'img/dress.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: 'img/boot.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: 'img/shirt.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: 'img/coat.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: 'img/shoe.jpg',
  audioSrc: 'audio/shoe.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: 'img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: 'img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: 'img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: 'img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: 'img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: 'img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: 'img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: 'img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}], [{
  word: 'spoon',
  translation: 'ложка',
  image: 'img/spoon.jpg',
  audioSrc: 'audio/spoon.mp3'
}, {
  word: 'kettle',
  translation: 'чайник',
  image: 'img/kettle.jpg',
  audioSrc: 'audio/kettle.mp3'
}, {
  word: 'knife',
  translation: 'нож',
  image: 'img/knife.jpg',
  audioSrc: 'audio/knife.mp3'
}, {
  word: 'fork',
  translation: 'вилка',
  image: 'img/fork.jpg',
  audioSrc: 'audio/fork.mp3'
}, {
  word: 'fridge',
  translation: 'холодильник',
  image: 'img/fridge.jpg',
  audioSrc: 'audio/fridge.mp3'
}, {
  word: 'cup',
  translation: 'чашка',
  image: 'img/cup.jpg',
  audioSrc: 'audio/cup.mp3'
}, {
  word: 'tongs',
  translation: 'щипцы',
  image: 'img/tongs.jpg',
  audioSrc: 'audio/tongs.mp3'
}, {
  word: 'bowl',
  translation: 'пиала',
  image: 'img/bowl.jpg',
  audioSrc: 'audio/bowl.mp3'
}], [{
  word: 'football',
  translation: 'футбол',
  image: 'img/football.jpg',
  audioSrc: 'audio/football.mp3'
}, {
  word: 'boxing',
  translation: 'бокс',
  image: 'img/boxing.jpg',
  audioSrc: 'audio/boxing.mp3'
}, {
  word: 'yoga',
  translation: 'йога',
  image: 'img/yoga.jpg',
  audioSrc: 'audio/yoga.mp3'
}, {
  word: 'golf',
  translation: 'гольф',
  image: 'img/golf.jpg',
  audioSrc: 'audio/golf.mp3'
}, {
  word: 'cricket',
  translation: 'крикет',
  image: 'img/cricket.jpg',
  audioSrc: 'audio/cricket.mp3'
}, {
  word: 'cycling',
  translation: 'велоспорт',
  image: 'img/cycling.jpg',
  audioSrc: 'audio/cycling.mp3'
}, {
  word: 'wrestling',
  translation: 'борьба',
  image: 'img/wrestling.jpg',
  audioSrc: 'audio/wrestling.mp3'
}, {
  word: 'judo',
  translation: 'дзюдо',
  image: 'img/judo.jpg',
  audioSrc: 'audio/judo.mp3'
}]];
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategoryCard", function() { return createCategoryCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWordCard", function() { return createWordCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSidebar", function() { return createSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBurgerMenu", function() { return initBurgerMenu; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var switchBtnRight = document.querySelector('.switch-button-case.right');
var switchBtnLeft = document.querySelector('.switch-button-case.left');
var createCategoryCard = function createCategoryCard(category) {
  var card = document.createElement('div');
  card.classList.add("category-card");
  var cardImageWrapper = document.createElement("div");
  cardImageWrapper.classList.add("category-card-image-wrapper");
  var cardImage = document.createElement("img");
  cardImage.src = "assets/".concat(category.url);
  cardImageWrapper.appendChild(cardImage);
  var cardName = document.createElement("div");
  cardName.classList.add("category-card-name");
  cardName.innerHTML = category.name;
  card.appendChild(cardImageWrapper);
  card.appendChild(cardName);
  var link = window.document.createElement("a");
  link.href = "#".concat(category.id);
  link.appendChild(card);
  return link;
};
var createWordCard = function createWordCard(word) {
  var flipClick = false;
  var wordCard = document.createElement("div");
  wordCard.classList.add("word-card");
  var wordCardImageWrapper = document.createElement("div");
  wordCardImageWrapper.classList.add("word-card-image");
  wordCardImageWrapper.classList.add("card-compact");
  var wordCardImage = document.createElement("img");
  wordCardImage.src = "assets/".concat(word.url);
  wordCardImageWrapper.appendChild(wordCardImage);
  wordCard.appendChild(wordCardImageWrapper);
  var wordCardCaption = document.createElement("div");
  wordCardCaption.classList.add("word-card-caption");
  var flipButton = document.createElement("button");
  flipButton.classList.add("flip-button");
  wordCardCaption.appendChild(flipButton);
  var wordCardCaptionTitle = document.createElement("span");
  wordCardCaptionTitle.classList.add("word-card-caption-title");
  wordCardCaptionTitle.innerText = word.name;
  wordCardCaption.appendChild(wordCardCaptionTitle);
  switchBtnLeft.addEventListener('click', function () {
    wordCardCaption.style.display = " flex";
  }, false);
  switchBtnRight.addEventListener('click', function () {
    wordCardCaption.style.display = "none";
  }, false);
  flipButton.addEventListener('click', function () {
    if (!flipClick) {
      wordCardCaptionTitle.innerText = word.translation;
      wordCardCaption.style.transform = "rotateY(180deg)";
      wordCard.style.transform = "rotateY(180deg)";
      console.log("Russian:", flipClick);
      flipClick = true;
    } else {
      wordCard.style.transform = "rotateY(360deg)";
      wordCardCaption.style.transform = "rotateY(360deg)";
      wordCardCaptionTitle.innerText = word.name;
      console.log("English:", flipClick);
      flipClick = false;
    }
  });
  var singleCardAudio = document.createElement('audio');
  singleCardAudio.classList.add('single-card-audio');
  singleCardAudio.src = "assets/".concat(word.audioSrc);
  singleCardAudio.controls = true;
  singleCardAudio.id = word.name;
  wordCardCaption.appendChild(singleCardAudio);
  var listenButton = document.createElement("button");
  listenButton.classList.add("listen-button");
  wordCardCaption.appendChild(listenButton);
  listenButton.addEventListener('click', function () {
    singleCardAudio.play();
  });
  var correctAudio = document.querySelector(".correct");
  correctAudio.controls = true;
  correctAudio.src = "assets/audio/correct.mp3";
  var errorAudio = document.querySelector(".error");
  errorAudio.controls = true;
  errorAudio.src = "assets/audio/error.mp3";
  var resultAudio = document.querySelector('.result-audio');
  resultAudio.controls = true;
  wordCard.addEventListener("click", function () {
    if (document.game) {
      var result = document.game.checkWord(word.name);

      if (result === "CORRECT") {
        // juldyzdy append jasa
        var stars = document.createElement('div');
        stars.classList.add("stars-win");
        document.querySelector('.score-display').appendChild(stars);
        correctAudio.play();
        wordCard.style.backgroundColor = "green";
      } else {
        var _stars = document.createElement('div');

        _stars.classList.add("stars-lose");

        document.querySelector('.score-display').appendChild(_stars);
        errorAudio.play();
        wordCard.style.backgroundColor = "red";
      }

      if (!document.game.isFinished()) {
        var nextWord = document.game.getRound();
        var audio = document.getElementById(nextWord);
        window.setTimeout(function () {
          audio.play();
        }, 1000);
      } else {
        // uttyng degen soz jazylady
        var resultPage = document.querySelector(".result-page");
        document.querySelector('.result-score-number').innerText = "Your score is ".concat(document.game.getCorrectlyGuessed(), "!");

        if (document.game.getCorrectlyGuessed() > 4) {
          resultPage.classList.add('win');
          resultAudio.src = 'assets/audio/success.mp3';
        } else {
          resultPage.classList.add('lose');
          resultAudio.src = 'assets/audio/failure.mp3';
        }

        resultPage.classList.toggle("hidden");
        resultAudio.play();
        window.setTimeout(function () {
          resultPage.classList.toggle("hidden");
        }, 4000); // juldyzdar tazalanady

        document.querySelector('.score-display').innerHTML = ''; // oyin tazalanady

        document.game = null;
      }
    } else {
      console.log("Game has not started!");
    }
  });
  wordCard.appendChild(wordCardCaption);
  return wordCard;
};
var createSidebar = function createSidebar(links) {
  var sidebar = document.createElement("aside");
  sidebar.classList.add("sidebar");
  var closeButton = document.createElement("button");
  closeButton.classList.add("sidebar-close-button");
  closeButton.innerText = 'X';
  closeButton.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-closed");
  });
  sidebar.appendChild(closeButton);
  var mainPageLink = document.createElement("a");
  mainPageLink.innerText = "Main page";
  mainPageLink.href = '#';
  sidebar.appendChild(mainPageLink);
  sidebar.appendChild(closeButton);
  var i = 0;

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var lk = _step.value;
      var categoryLink = document.createElement("a");
      categoryLink.classList.add("sidebar-link");
      categoryLink.href = "#category-".concat(i);
      categoryLink.innerText = lk;
      sidebar.appendChild(categoryLink);
      i++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  document.querySelector("#root").appendChild(sidebar);
};
function initBurgerMenu() {
  var burger = document.querySelector(".burger-menu");
  var sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("sidebar-closed");
  burger.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-closed");
  });
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_power_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _public_img_power_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_power_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_refresh_button_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _public_img_refresh_button_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_refresh_button_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_volume_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _public_img_volume_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_img_volume_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_img_success_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _public_img_failure_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _public_img_star_win_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _public_img_star_win_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_img_star_win_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_img_star_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _public_img_star_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_img_star_svg__WEBPACK_IMPORTED_MODULE_8__);
// Imports









var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_img_power_svg__WEBPACK_IMPORTED_MODULE_2___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_img_refresh_button_svg__WEBPACK_IMPORTED_MODULE_3___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_img_volume_svg__WEBPACK_IMPORTED_MODULE_4___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_img_success_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_img_failure_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_img_star_win_svg__WEBPACK_IMPORTED_MODULE_7___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_img_star_svg__WEBPACK_IMPORTED_MODULE_8___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\r\n    background: #C9D6FF;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    \r\n}\r\n\r\n#root {\r\n    position: relative;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\nbutton {\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.category-list {\r\n    z-index: 0;\r\n    width: 80%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    margin: 100px auto;\r\n}\r\n\r\n.category-card {\r\n    margin-top: 60px;\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 40px;\r\n    box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);\r\n    cursor: pointer;\r\n    transition: 1.2s ease-out all;\r\n    margin-left: 60px;\r\n    margin-right: 60px;\r\n    background-image: linear-gradient(to right, red , yellow);\r\n}\r\n\r\n.category-card:hover {\r\n    transform: scale(0.9, 0.9);\r\n    box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), \r\n      -5px -5px 30px 15px rgba(0,0,0,0.22);\r\n}\r\n\r\n.category-card-image-wrapper {\r\n    width: inherit;\r\n    height: inherit;\r\n    border-radius: 40px;\r\n}\r\n\r\n.category-card-image-wrapper > img {\r\n    width: inherit;\r\n    height: inherit;\r\n    border-radius: 40px;\r\n    object-fit: cover;\r\n}\r\n\r\n.category-card-name {\r\n    text-align: center;\r\n    border-radius: 0px 0px 40px 40px;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    margin-top: 0px;\r\n    height: 40px;\r\n    color: black;\r\n}\r\n\r\n.card-audio {\r\n    display: none;\r\n}\r\n\r\n.words-list {\r\n    z-index: 0;\r\n    width: 85%;\r\n    margin: 130px auto 30px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n\r\n\r\n.single-card-audio {\r\n    display: none;\r\n}\r\n\r\n@media all and (max-width: 500px) {\r\n    .category-list, .single-words-list {\r\n      flex-direction: column;   \r\n    }\r\n}\r\n\r\n/*side bar*/\r\n\r\n\r\n\r\n\r\n\r\n.switch-mode-button {\r\n    margin: 0 auto;\r\n    width: 100px;\r\n    height: 100px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: auto;\r\n    border: none;\r\n    outline: none;\r\n    background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.cover {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.word-card {\r\n    background-color: rgb(105, 235, 240);\r\n    width: 200px;\r\n    margin-right: 100px;\r\n    margin-top: 30px;\r\n    border-radius: 20px;\r\n    transition: 1s;\r\n}\r\n\r\n.word-card:hover {\r\n    transform: scale(1.2);\r\n    box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), \r\n    -5px -5px 30px 15px rgba(0,0,0,0.22);\r\n}\r\n.word-card-image img {\r\n    transition: 1s;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.word-card-caption {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 90px;\r\n    transition: 1s;\r\n}\r\n\r\n.word-card-caption-title {\r\n    margin-top: 20px;\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.flip-button {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    transform: skewY(-12deg);\r\n    margin-top: 30px;\r\n    margin-left: 10px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-size: 30px;\r\n    border: none;\r\n    background-repeat: no-repeat;\r\n    background-color: rgba(255, 255, 255, 0);\r\n    transition: 0.4s;\r\n}\r\n\r\n.flip-button:hover {\r\n    transition: 0.4s;\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.listen-button {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    transform: skewY(-12deg);\r\n    margin-top: 30px;\r\n    margin-right: 10px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-size: 30px;\r\n    border: none;\r\n    background-repeat: no-repeat;\r\n    background-color: rgba(255, 255, 255, 0);\r\n    transition: .3s;\r\n}\r\n\r\n.listen-button:hover {\r\n    margin-right: 5px;\r\n    transition: .3s;\r\n}\r\n.card-compact {\r\n    height: 200px;\r\n}\r\n\r\n.result-page {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 10;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: 70%;\r\n}\r\n\r\n.result-score-number {\r\n    font-size: 9rem;\r\n    text-align: center;\r\n}\r\n.win {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.lose {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n/* reusable */\r\n\r\n\r\n\r\n/*tiispe*/\r\n\r\n\r\n.burger-menu {\r\n    position: relative;\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    left: 10%;\r\n    top: 10px;\r\n}\r\n\r\n\r\n/* MENU */\r\n.burger-menu span {\r\n    display: block;\r\n    background-color: black;\r\n    padding: 3px;\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.sidebar {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100vh;\r\n    background: #c0c0aa;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #1cefff, #c0c0aa);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #1cefff, #c0c0aa); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 100px 20px;\r\n    transition: 1s;\r\n}\r\n\r\n.sidebar a {\r\n    font-size: 2rem;\r\n    text-decoration: none;\r\n    color: blue;\r\n}\r\n\r\n.sidebar a:focus {\r\n    color: coral;\r\n}\r\n\r\n.sidebar-close-button {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    border: none;\r\n    background-color: rgba(250, 235, 215, 0);\r\n    font-size: 2rem;\r\n    outline: none;\r\n}\r\n\r\n.sidebar-closed {\r\n    left: -300px;\r\n    background-color: chartreuse;\r\n}\r\n\r\n/* */\r\n\r\n\r\n.switch-button {\r\n    width: 400px;\r\n    height: 40px;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 20px;\r\n    will-change: transform;\r\n    z-index: 197 !important;\r\n    cursor: pointer;\r\n    transition: 0.3s ease all;\r\n    border: 1px solid black;\r\n}\r\n.switch-button-case {\r\n    display: inline-block;\r\n    background: none;\r\n    width: 49%;\r\n    height: 100%;\r\n    color: black;\r\n    position: relative;\r\n    border: none;\r\n    transition: 0.3s ease all;\r\n    text-transform: uppercase;\r\n    letter-spacing: 5px;\r\n    padding-bottom: 1px;\r\n    font-weight: 900;\r\n}\r\n.switch-button-case:hover {\r\n    color: rgb(29, 26, 26);\r\n    cursor: pointer;\r\n}\r\n.switch-button-case:focus {\r\n    outline: none;\r\n}\r\n.switch-button .active {\r\n    background: #232526;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 50%;\r\n    height: 100%;\r\n    z-index: -1;\r\n    transition: 0.3s ease-out all;\r\n}\r\n.switch-button .active-case {\r\n    color: white;\r\n}\r\n.signature {\r\n    position: fixed;\r\n    font-family: sans-serif;\r\n    font-weight: 100;\r\n    bottom: 10px;\r\n    left: 0;\r\n    letter-spacing: 4px;\r\n    font-size: 10px;\r\n    width: 100vw;\r\n    text-align: center;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.score-display {\r\n    height: 60px;\r\n    position: absolute;\r\n    top: 130px;\r\n    left: 10%;\r\n    display: flex;\r\n}\r\n\r\n\r\n.main-title {\r\n    position: absolute;\r\n    font-size: 5rem;\r\n    width: 100%;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    font-weight: 700;\r\n}\r\n\r\n.stars-win {\r\n    width: 60px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: auto;\r\n    border: none;\r\n    outline: none;\r\n    background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.stars-lose {\r\n    width: 60px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: auto;\r\n    border: none;\r\n    outline: none;\r\n    background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.yellow {\r\n    color: coral;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 322.72 322.72' style='enable-background:new 0 0 322.72 322.72;' xml:space='preserve'%3e %3cpath style='fill:%235E9641;' d='M161.36,8C76.662,8,8,76.662,8,161.36s68.662,153.36,153.36,153.36s153.36-68.662,153.36-153.36l0,0 C314.632,76.698,246.022,8.088,161.36,8L161.36,8z'/%3e %3cg%3e %3cpath style='fill:%23022400;' d='M161.36,0C72.243,0,0,72.243,0,161.36s72.243,161.36,161.36,161.36s161.36-72.243,161.36-161.36l0,0 C322.632,72.28,250.44,0.088,161.36,0L161.36,0z M161.36,306.64C81.08,306.64,16,241.56,16,161.28S81.08,15.92,161.36,15.92 S306.72,81,306.72,161.28c0,0.027,0,0.053,0,0.08c-0.088,80.244-65.116,145.272-145.36,145.36L161.36,306.64z'/%3e %3cpath style='fill:%23022400;' d='M208.72,85.68c-3.901-2.075-8.745-0.595-10.82,3.306c-1.869,3.513-0.872,7.865,2.34,10.214 c34.291,21.495,44.665,66.719,23.17,101.01s-66.719,44.665-101.01,23.17c-34.291-21.495-44.665-66.719-23.17-101.01 c5.875-9.373,13.797-17.295,23.17-23.17c3.901-2.075,5.381-6.919,3.306-10.82s-6.919-5.381-10.82-3.306 c-0.336,0.179-0.659,0.381-0.966,0.606c-41.785,26.178-54.436,81.273-28.258,123.058s81.273,54.436,123.058,28.258 c41.785-26.178,54.436-81.273,28.258-123.058C229.815,102.505,220.154,92.843,208.72,85.68z'/%3e %3cpath style='fill:%23022400;' d='M161.36,155.44c4.418,0,8-3.582,8-8V44.72c0-4.418-3.582-8-8-8s-8,3.582-8,8v102.72 C153.36,151.858,156.942,155.44,161.36,155.44z'/%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3c/svg%3e"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='64px' height='64px'%3e%3cpath fill='%2332BEA6' d='M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z'/%3e%3cpath fill='%23FFF' d='M436.2 180.1c-10.3 0-20.7.1-31 .1-23.3-52.2-69-89.9-126.6-98.9C214.2 71.2 152.7 101 116 153.6c-16.3 23.3 22 45.2 38.2 22 50.3-72 157.8-65.5 201.9 4.7-9.6 0-19.1 0-28.7.1-2.7 0-4.6 1.2-5.7 2.9-1.9 2.1-2.7 5.1-.6 8.2 18.2 28.2 36.4 56.5 54.6 84.7 3.1 4.7 9.7 4.7 12.7 0 18.1-28.3 36.1-56.7 54.2-85C445.5 186.4 441.5 180.1 436.2 180.1zM358.3 335.1c-49.9 71.5-156.1 65.6-200.9-3 9.2 0 18.3 0 27.5-.1 2.7 0 4.6-1.2 5.7-2.9 1.9-2.1 2.7-5.1.6-8.2-18.2-28.2-36.4-56.5-54.6-84.7-3.1-4.8-9.7-4.7-12.7 0-18.1 28.3-36.1 56.7-54.2 85-3 4.7.9 11 6.3 11 10.7 0 21.3-.1 32-.1 23.5 51.3 68.8 88.3 125.9 97.3 64.3 10.1 125.8-19.8 162.5-72.3C412.7 333.8 374.4 312 358.3 335.1z'/%3e%3c/svg%3e"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3e %3ccircle style='fill:%23FFD400;' cx='256' cy='256' r='256'/%3e %3cpath style='fill:%23FF9F00;' d='M511.686,268.679L406.033,163.026l-6.712,4.529L308.32,75L75,330.097l181.891,181.891 C393.617,511.521,505.091,403.879,511.686,268.679z'/%3e %3cpolygon style='fill:%23444444;' points='203.114,229.628 201.629,256.142 199.72,292.412 166.985,330.097 75,330.097 75,181.904 166.773,181.904 166.985,181.691 '/%3e %3cpolygon style='fill:%23292929;' points='201.629,256.142 199.72,292.412 166.985,330.097 75,330.097 75,256.142 '/%3e %3cg%3e %3cpath style='fill:%2300ABE9;' d='M352.156,256.142c0,13.575-4.03,27.149-11.878,38.815l-17.816-11.666 c5.515-8.271,8.273-17.816,8.273-27.149c0-9.333-2.758-18.878-8.273-27.151l17.816-11.666 C348.126,228.991,352.156,242.567,352.156,256.142z'/%3e %3cpath style='fill:%2300ABE9;' d='M437,256.142c0,29.907-8.908,59.815-26.301,85.904l-4.666,7.212l-17.605-11.879l4.666-6.999 c15.06-22.484,22.696-48.362,22.696-74.238c0-25.878-7.636-51.755-22.696-74.238l-4.666-7l17.605-11.878l4.666,7.212 C428.092,196.327,437,226.234,437,256.142z'/%3e %3cpath style='fill:%2300ABE9;' d='M394.367,256.142c0,21.634-6.152,43.27-18.878,62.36l-4.667,7.211l-17.816-11.878l4.878-6.999 c10.181-15.485,15.273-33.09,15.273-50.694c0-17.605-5.092-35.211-15.273-50.694l-4.878-7l17.816-11.878l4.667,7.212 C388.215,212.871,394.367,234.506,394.367,256.142z'/%3e %3c/g%3e %3cpolygon style='fill:%235A5A5A;' points='308.32,75 308.32,437 166.985,330.097 166.985,181.691 '/%3e %3cpolygon style='fill:%23444444;' points='166.985,256.142 308.32,256.142 308.32,437 166.985,330.097 '/%3e %3cg%3e %3cpath style='fill:%230095FF;' d='M330.734,256.142h21.422c0,13.575-4.03,27.149-11.878,38.815l-17.816-11.666 C327.977,275.02,330.734,265.475,330.734,256.142z'/%3e %3cpath style='fill:%230095FF;' d='M394.367,256.142c0,21.634-6.152,43.27-18.878,62.36l-4.667,7.211l-17.816-11.878l4.878-6.999 c10.181-15.485,15.273-33.09,15.273-50.694L394.367,256.142L394.367,256.142z'/%3e %3cpath style='fill:%230095FF;' d='M437,256.142c0,29.907-8.908,59.815-26.301,85.904l-4.666,7.212l-17.605-11.879l4.666-6.999 c15.06-22.484,22.696-48.362,22.696-74.238H437z'/%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3c/svg%3e"

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "eaec39d7be0e51e56fb1182a8aec698f.jpg");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f7b0f130a798f2fc378622f00a110db9.jpg");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3c!-- Created with Inkscape (http://www.inkscape.org/) --%3e %3csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://web.resource.org/cc/' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='64' height='64' id='svg2' sodipodi:version='0.32' inkscape:version='0.44' version='1.0' sodipodi:docbase='C:%5cDocuments and Settings%5cKris%5cMy Documents%5cMy Pictures%5cWikipedia' sodipodi:docname='Empty Star.svg'%3e %3cdefs id='defs4' /%3e %3csodipodi:namedview id='base' pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1.0' gridtolerance='10000' guidetolerance='10' objecttolerance='10' inkscape:pageopacity='0.0' inkscape:pageshadow='2' inkscape:zoom='3.4678899' inkscape:cx='49.5' inkscape:cy='21.5' inkscape:document-units='px' inkscape:current-layer='layer1' width='64px' height='64px' showgrid='true' gridspacingx='2px' gridspacingy='2px' gridempspacing='4' inkscape:window-width='847' inkscape:window-height='582' inkscape:window-x='133' inkscape:window-y='72' /%3e %3cmetadata id='metadata7'%3e %3crdf:RDF%3e %3ccc:Work rdf:about=''%3e %3cdc:format%3eimage/svg+xml%3c/dc:format%3e %3cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3e %3c/cc:Work%3e %3c/rdf:RDF%3e %3c/metadata%3e %3cg inkscape:label='Layer 1' inkscape:groupmode='layer' id='layer1'%3e %3cpath sodipodi:type='star' style='fill:%23ffd86f;fill-opacity:1;stroke:%23ffd86f;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' id='path3651' sodipodi:sides='5' sodipodi:cx='31.934996' sodipodi:cy='32.065002' sodipodi:r1='24.493324' sodipodi:r2='10.409663' sodipodi:arg1='0.9442689' sodipodi:arg2='1.5725874' inkscape:flatsided='false' inkscape:rounded='2.4286129e-017' inkscape:randomized='0' d='M 46.296296,51.906272 L 31.916351,42.474649 L 17.502712,51.8547 L 22.029072,35.264028 L 8.654054,24.454438 L 25.831443,23.632463 L 31.978866,7.5717174 L 38.068716,23.65438 L 55.243051,24.537884 L 41.829396,35.299492 L 46.296296,51.906272 z ' transform='matrix(0.986858,0,0,1.03704,0.471316,1.159472)' /%3e %3c/g%3e %3c/svg%3e"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3c!-- Created with Inkscape (http://www.inkscape.org/) --%3e %3csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://web.resource.org/cc/' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='64' height='64' id='svg2' sodipodi:version='0.32' inkscape:version='0.44' version='1.0' sodipodi:docbase='C:%5cDocuments and Settings%5cKris%5cMy Documents%5cMy Pictures%5cWikipedia' sodipodi:docname='Empty Star.svg'%3e %3cdefs id='defs4' /%3e %3csodipodi:namedview id='base' pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1.0' gridtolerance='10000' guidetolerance='10' objecttolerance='10' inkscape:pageopacity='0.0' inkscape:pageshadow='2' inkscape:zoom='3.4678899' inkscape:cx='49.5' inkscape:cy='21.5' inkscape:document-units='px' inkscape:current-layer='layer1' width='64px' height='64px' showgrid='true' gridspacingx='2px' gridspacingy='2px' gridempspacing='4' inkscape:window-width='847' inkscape:window-height='582' inkscape:window-x='133' inkscape:window-y='72' /%3e %3cmetadata id='metadata7'%3e %3crdf:RDF%3e %3ccc:Work rdf:about=''%3e %3cdc:format%3eimage/svg+xml%3c/dc:format%3e %3cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3e %3c/cc:Work%3e %3c/rdf:RDF%3e %3c/metadata%3e %3cg inkscape:label='Layer 1' inkscape:groupmode='layer' id='layer1'%3e %3cpath sodipodi:type='star' style='fill:white;fill-opacity:1;stroke:%237f7f7f;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1' id='path3651' sodipodi:sides='5' sodipodi:cx='31.934996' sodipodi:cy='32.065002' sodipodi:r1='24.493324' sodipodi:r2='10.409663' sodipodi:arg1='0.9442689' sodipodi:arg2='1.5725874' inkscape:flatsided='false' inkscape:rounded='2.4286129e-017' inkscape:randomized='0' d='M 46.296296,51.906272 L 31.916351,42.474649 L 17.502712,51.8547 L 22.029072,35.264028 L 8.654054,24.454438 L 25.831443,23.632463 L 31.978866,7.5717174 L 38.068716,23.65438 L 55.243051,24.537884 L 41.829396,35.299492 L 46.296296,51.906272 z ' transform='matrix(0.986858,0,0,1.03704,0.471316,1.159472)' /%3e %3c/g%3e %3c/svg%3e"

/***/ })
/******/ ]);