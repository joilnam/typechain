"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: "nicolas",
    age: 22,
    gender: "male"
};
var sayHi = function (person) {
    return "Hello ".concat(person.name, ", you are ").concat(person.age, ", you are a ").concat(person.gender, "!");
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map