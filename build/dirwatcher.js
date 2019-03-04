"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = require("events");

var fs = _interopRequireWildcard(require("fs"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class DirWatcher extends _events.EventEmitter {
  constructor() {
    super();
    console.log('DirWatcher module');
  }

  watch(path, delay) {
    let that = this;
    setTimeout(function () {
      fs.watch(path, function (event, filename) {
        if (event != null) {
          that.emit('dirwatcher:changed', event, filename);
        }
      });
    }, delay);
  }

}

var _default = DirWatcher;
exports.default = _default;
