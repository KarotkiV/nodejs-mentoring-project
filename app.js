import {User,Product} from "./models";
import * as properties from "./config/properties.json";

console.log("Starting ....");

new User();
new Product();
console.log(`Property name is ${properties.name}`);

console.log("Ending ....");

