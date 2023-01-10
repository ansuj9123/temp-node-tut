
// commonJs, every file is module (by default)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./06-alternative-flavor");
require("./7-mind-grenade");
console.log(data);

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);

const os = require("os");

// //info about current user
const user = os.userInfo();
console.log(user);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalMem(),
    freeMem: os.freemem(),
};

console.log(currentOs);