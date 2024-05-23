"use strict";
// use of abstract
//differ  between interface and abstract
class cameraMode {
    constructor(name) {
        this.name = name;
    }
    showHiddenPhoto() {
        console.log('hii hidden photo');
    }
}
class User extends cameraMode {
    constructor(name) {
        super(name);
    }
    showPhoto() {
        console.log('hii');
    }
}
