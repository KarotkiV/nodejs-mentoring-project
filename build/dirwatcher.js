"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dns = require("dns");

const EventEmitter = require('events');

class DirWatcher {
  constructor() {
    console.log("DirWatcher module");
  }

  watch(path, delay, importer) {
    const fs = require('fs');

    setTimeout(function () {
      fs.watch(path, function (event, filename) {
        if (event != null) {
          const emitter = new EventEmitter();

          const logging = () => {
            console.log('File was changed. Event: ' + event + ' Filename: ' + filename);
          };

          emitter.on('changed', logging);
          emitter.on('changed', () => {
            importer.import(path).then(_dns.resolve);
          });
          emitter.emit('changed');
        }
      });
    }, delay);
  }

}

var _default = DirWatcher;
exports.default = _default;
