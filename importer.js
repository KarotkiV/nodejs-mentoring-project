import * as fs from 'fs';
import { promisify } from 'util';
import { join } from 'path';

const readFileP = promisify(fs.readFile);
const readDirP = promisify(fs.readdir);

class Importer {
    constructor() {
        console.log('Importer module');
    }

    importDir(path) {
        return readDirP(path).then(filenames => {
            return Promise.all(filenames.map(filename => readFileP(join(path, filename))));
        });
    }

    importFile(path, filename) {
        return readFileP(join(path, filename));
    }

    importSync(path) {
        let res = [];
        fs.readdir(path, function (err, filenames) {
            filenames.forEach(function (filename) {
                fs.readFile(`${path}\\${filename}`, 'utf-8', function (err, data) {
                    res = res.concat(data);
                })
            })
        });
        return res;
    }

}

export default Importer;