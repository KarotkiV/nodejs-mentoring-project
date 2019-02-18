"use strict";

var _User = require("./models/User");

var _Product = require("./models/Product");

var properties = _interopRequireWildcard(require("./config/properties.json"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

console.log("Starting ....");
new _User.User();
new _Product.Product();
console.log(`Property name is ${properties.name}`);
console.log("Ending ....");
