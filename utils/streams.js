'use strict';

var program = require('commander');
var fs = require('fs');
var extRegex = require('ext-to-regex');

function transform(str) {
    process.stdout.write(str.toUpperCase());
}

function reverse(str) {
    var result = str
        .split('')
        .reverse()
        .join('')
        .trim();
    process.stdout.write(result);
}

function outputFile(pathFile) {
    var rs = fs.createReadStream(pathFile, 'utf-8');
    rs.on('data', data => {
        process.stdout.write(data);
    });
}

function convertFromFile(pathFile) {
    var content = fs.readFileSync(pathFile, 'utf-8', function (err) {
        if (err) {
            throw err;
        }
    }).toString();

    var json = {};
    content.split(',').forEach(element => {
        var line = element.split('=');
        json[line[0]] = line[1];
    });

    process.stdout.write(JSON.stringify(json));
}

function convertToFile(pathFile) {
    var content = fs.readFileSync(pathFile, 'utf-8', function (err) {
        if (err) {
            throw err;
        }
    }).toString();

    var json = {};
    content.split(new RegExp('[,\r\n\t]+')).forEach(element => {
        var line = element.split('=');
        json[line[0]] = line[1];
    });

    var pathArr = pathFile.split('/');
    var fileName = pathArr[pathArr.length - 1].replace('csv', 'json');
    fs.writeFile(fileName, JSON.stringify(json), function (err) {
        if (err) throw err;
    });
}

function createBundle(path) {
    var resultData = [];
    var regex = new RegExp(extRegex('.css'));
    var files = fs.readdirSync(path).filter(function (value) { return (regex.test(value) || value == 'bundle.css') });
    files.forEach(file => {
        var data = fs.readFileSync(file, 'utf-8');
        resultData = resultData.concat('\n').concat(data);
    });

    if (fs.existsSync('bundle.css')) {
        fs.appendFileSync('bundle.css', resultData.join(''));
    } else {
        fs.writeFileSync('bundle.css', resultData.join(''));
    }
}

program
    .version('0.0.1')
    .option('-a,--action <required>', 'Action')
    .option('-f,--file <required>', 'Path to file')
    .option('-p,--path <required>', 'Path to folder containing css files');

program
    .command('help')
    .description('command list')
    .action(function () {
        program.help()
    });

try {
    program.parse(process.argv);
} catch (err) {
    console.log(`caught exception with message ${err.message}`);
    program.help();
}

if (process.argv.length === 2) {
    program.help()
}

switch (program.action) {
    case 'convertToFile':
        convertToFile(program.file);
        break;
    case 'reverse':
        process.stdin.on('readable', () => {
            var text = process.stdin.read().toString();
            reverse(text);
        });
        break;
    case 'transform':
        process.stdin.on('readable', () => {
            var text = process.stdin.read().toString();
            transform(text);
        });
        break;
    case 'outputFile':
        outputFile(program.file);
        break;
    case 'convertFromFile':
        convertFromFile(program.file);
        break;
    case 'cssBundler':
        createBundle(program.path);
        break;
    default:
        console.log('Command or option was not recognized');
        program.help();
}
