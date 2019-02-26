"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var fs = _interopRequireWildcard(require("fs"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Importer {
  constructor() {
    console.log("Importer module");
  }

  import(path) {
    return new Promise(function (resolve, reject) {
      fs.readdir(path, function (err, filenames) {
        if (err) reject(err);
        let res = '';
        filenames.forEach(function (filename) {
          fs.readFile(`${path}\\${filename}`, 'utf-8', function (err, data) {
            if (err) reject(err);
            res = res.concat(data);
          });
        });
        resolve(res);
      });
    });
  }

  import(path, filename) {
    return new Promise(function (resolve, reject) {
      fs.readFile(`${path}\\${filename}`, 'utf-8', function (err, data) {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  importSync(path) {
    let res = [];
    fs.readdir(path, function (err, filenames) {
      filenames.forEach(function (filename) {
        fs.readFile(`${path}\\${filename}`, 'utf-8', function (err, data) {
          res = res.concat(data);
        });
      });
    });
    return res;
  }

}

var _default = Importer;
exports.default = _default;
