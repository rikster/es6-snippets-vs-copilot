//import es5 module (imp)
var es5Module = require("./es5Module");

//import es6 module (imp)
import { es6Module } from "./es6Module";
import moduleName from 'module';

//import es6 module with alias (imp)
import { es6Module as es6ModuleAlias } from "./es6Module";

//import es6 entire module w/o module name (imn)
import "./es6Module";
import 'module';

//import es5 entire module w/o module name
var es5Module = require("./es5Module");

//imports es6 only a prttion of the module
import { es6Module } from "./es6Module"; 

//imports everything as alias from the module
import * as es6ModuleAlias from "./es6Module";
import * as alias from 'module';

//imports only a portion of the module as alias (ima)
import { es6Module as es6ModuleAlias } from "./es6Module";
import { originalName as alias } from 'module';

//require package require(''); (rqr)
require('package');

//require es6 package
import package from "package";
import { env } from "process";

//require es5 package
var package = require("package");

//require package to const const packageName = require('packageName') (req)
const packageName = require('packageName');

//exports name variable export const nameVariable = localVariable (env)
export const nameVariable = localVariable;

//exports name function export const log = (parameter) => { console.log(parameter);}; (enf)
export const functionName = (params) => {
    
};

//exports default function export default function fileName (parameter){ console.log(parameter);}; (edf)
export default function fileName (parameter){
    console.log(parameter);
};

//exports default class export default class Calculator { }; (ecl)
export default class Calculator { };

export default class className {
    constructor() {
        
    }
};

//exports default class by extending a base one export default class Calculator extends BaseClass { }; (ece)
export default class Calculator extends BaseClass { };

