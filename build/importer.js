"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var fs = _interopRequireWildcard(require("fs"));

var _util = require("util");

var _path = require("path");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const readFileP = (0, _util.promisify)(fs.readFile);
const readDirP = (0, _util.promisify)(fs.readdir);

class Importer {
  constructor() {
    console.log('Importer module');
  }

  importDir(path) {
    return readDirP(path).then(filenames => {
      return Promise.all(filenames.map(filename => readFileP((0, _path.join)(path, filename))));
    });
  }

  importFile(path, filename) {
    return readFileP((0, _path.join)(path, filename));
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
