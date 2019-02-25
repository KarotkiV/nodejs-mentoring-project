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
dirwatch.watch('\data',2000,importer);

//const importer = new Importer();
//importer.import('\data').then(resolve);

console.log("Ending ....");

