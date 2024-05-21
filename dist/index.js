"use strict";
class User {
    constructor(name, email) {
        this.readonlybranch = "CSE";
        this.name = name;
        this.email = email;
    }
}
const user = new User('krishna', 'krishna@gmail.com');
//console.log(user.branch)
