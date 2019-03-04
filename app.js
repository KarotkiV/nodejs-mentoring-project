import { User, Product } from './models';
import * as properties from './config/properties.json';
import { default as DirWatch } from './dirwatcher.js';
import { default as Importer } from './importer.js';
import { join } from 'path';

console.log('Starting ....');

new User();
new Product();
console.log(`Property name is ${properties.name}`);

const importer = new Importer();
const dirwatch = new DirWatch();

var dir = join(__dirname, 'data');
importer.importDir(dir)
    .then(res => console.log(res.toString()))
    .catch(err => console.log(err));

dirwatch.on('dirwatcher:changed', function (event, filename) {
    console.log(`File was changed. Event: ${event} Filename: ${filename}`);
    importer.importFile(dir, filename)
        .then(res => console.log(res.toString()))
        .catch(err => console.log(err));
});
dirwatch.watch(dir, 5000);

console.log('Ending ....');

