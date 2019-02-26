import {User,Product} from "./models";
import * as properties from "./config/properties.json";
import {default as DirWatch} from "./dirwatcher.js";
import {default as Importer} from "./importer.js";

console.log("Starting ....");

new User();
new Product();
console.log(`Property name is ${properties.name}`);

const importer = new Importer();
const dirwatch = new DirWatch();
dirwatch.on('changed', function () {
    console.log('Start event processing');
    importer.import('data').then(res => console.log(res));
        console.log('end event processing');
});
dirwatch.watch('data',2000);

console.log("Ending ....");

