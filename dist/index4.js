"use strict";
/*
there is no return type in setter method.
but not use void just simply avoid it.
you can write getter method ithout setter method.
*/
class User4 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.readonlybranch = "CSE";
        this.username = 'krishna';
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
/*
in protected keyword we can access inside the class and extends class but not for the out side class
*/
class subUser4 extends User4 {
    constructor() {
        super(...arguments);
        this.accountName = 'sam';
    }
    changeUserName() {
        this.accountName = 'Rahul';
        return this.accountName;
    }
}
const user = new User4('krishna', 'krishna@gmail.com');
console.log(user.getRollNo);
