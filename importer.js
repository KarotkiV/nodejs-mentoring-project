import * as fs from 'fs';

class Importer {
    constructor() {
        console.log("Importer module");
    }

    import(path) {
        return new Promise(function (resolve, reject) {
            fs.readdir(path, function (err, filenames) {
                if (err) reject(err);
                let res = [];

                filenames.forEach(function (filename) {
                    fs.readFile(`${path}\\${filename}`, 'utf-8', function (err, data) {
                        if (err) reject(err);
                        res = res.concat(data);
                    });
                })
                resolve(res);
            });
        });
    }

    import(path, filename) {
        return new Promise(function (resolve, reject) {
            fs.readFile(`${path}\\${filename}`, 'utf-8', function (err, data) {
                if (err) reject(err);
                resolve(data);
            })
        });
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