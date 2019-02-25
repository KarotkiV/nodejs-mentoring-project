class Importer {
    constructor() {
        console.log("Importer module");
    }

    import(path) {
        return new Promise(function (resolve, reject) {
            const fs = require('fs');
            fs.readdir(path, function (err, filenames) {
                filenames.forEach(function (filename) {
                    fs.readFile(path + '\\' + filename, 'utf-8', function (err, data) {
                        console.log(data);
                    })
                })
            });
        });
    }

    importSync(path) {
        let res;
        const fs = require('fs');
        fs.readdir(path, function (err, filenames) {
            filenames.forEach(function (filename) {
                fs.readFile(path + '\\' + filename, 'utf-8', function (err, data) {
                    res = res.concat(data);
                })
            })
        });
        return res;
    }

}

export default Importer;