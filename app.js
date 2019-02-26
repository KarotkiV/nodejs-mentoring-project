import { User, Product } from "./models";
import * as properties from "./config/properties.json";
import { default as DirWatch } from "./dirwatcher.js";
import { default as Importer } from "./importer.js";

console.log("Starting ....");

new User();
new Product();
console.log(`Property name is ${properties.name}`);

const importer = new Importer();
const dirwatch = new DirWatch();
const path = 'data';
importer.import(path).then(res => console.log(res)).catch(err => console.log(err));
dirwatch.on('changed', function (event, filename) {
    console.log(`File was changed. Event: ${event} Filename: ${filename}`);
    importer.import(path, filename).then(res => console.log(res)).catch(err => console.log(err));
});
dirwatch.watch(path, 5000);

console.log("Ending ....");

