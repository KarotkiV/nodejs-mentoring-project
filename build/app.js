"use strict";

require("core-js/modules/es6.regexp.to-string");

var _models = require("./models");

var properties = _interopRequireWildcard(require("./config/properties.json"));

var _dirwatcher = _interopRequireDefault(require("./dirwatcher.js"));

var _importer = _interopRequireDefault(require("./importer.js"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

console.log('Starting ....');
new _models.User();
new _models.Product();
console.log(`Property name is ${properties.name}`);
const importer = new _importer.default();
const dirwatch = new _dirwatcher.default();
var dir = (0, _path.join)(__dirname, 'data');
importer.importDir(dir).then(res => console.log(res.toString())).catch(err => console.log(err));
dirwatch.on('dirwatcher:changed', function (event, filename) {
  console.log(`File was changed. Event: ${event} Filename: ${filename}`);
  importer.importFile(dir, filename).then(res => console.log(res.toString())).catch(err => console.log(err));
});
dirwatch.watch(dir, 5000);
console.log('Ending ....');
