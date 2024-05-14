"use strict";
// for function
// in case of function, it is importent to use type
Object.defineProperty(exports, "__esModule", { value: true });
function Add(num) {
    return (num + 2);
}
//console.log(Add(2))
//... how to set default value.
var show = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
    return [name, email, ispaid];
};
console.log(show('krishna', "krishna@gmail.com"));
