"use strict";
/*
there is no return type in setter method.
but not use void just simply avoid it.
you can write getter method ithout setter method.
*/
class User3 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.readonlybranch = "CSE";
        this._rollNo = 101;
    }
    get getRollNo() {
        return this._rollNo;
    }
    set setRollNo(unique_id) {
        if (unique_id > 1000) {
            this._rollNo = unique_id;
        }
        else {
            throw new Error('number less than 10000');
        }
    }
}
const user3 = new User('krishna', 'krishna@gmail.com');
console.log(user.getRollNo);
