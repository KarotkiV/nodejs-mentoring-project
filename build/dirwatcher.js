"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dns = require("dns");

var _events = require("events");

var fs = _interopRequireWildcard(require("fs"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const logging = (event, filename) => console.log('File was changed. Event: ' + event + ' Filename: ' + filename);

class DirWatcher extends _events.EventEmitter {
  constructor() {
    super();
    console.log("DirWatcher module");
  }

  watch(path, delay) {
    setTimeout(function () {
      fs.watch(path, function (event, filename) {
        this.on('changed', () => logging(event, filename));

        if (event != null) {
          this.emit('changed');
        }
      });
    }, delay);
  }

}

var _default = DirWatcher;
exports.default = _default;
