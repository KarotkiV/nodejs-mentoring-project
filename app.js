console.log("Starting ....");

import {User} from "./models/User";
new User();

import {Product} from "./models/Product";
new Product();

import * as properties from "./config/properties.json";
console.log(`Property name is ${properties.name}`);

console.log("Ending ....");

