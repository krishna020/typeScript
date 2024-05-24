"use strict";
const users = [];
const ids = [];
function identyOne(val) {
    return true;
}
// in above case we can't pass number or something ele
function identyTow(val) {
    return 'krishna';
}
console.log(identyTow(5));
// in above scenario we can pass anything and we can get anything, but it is not good pratice
// so use generic, it lock the type
function identyThree(val) {
    return val;
}
console.log(identyThree('3')); // it will take string and return string
