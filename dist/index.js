"use strict";
class Instagram {
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
    takeStory() {
        console.log('this is my story');
    }
}
class Youtube {
    constructor(cameraMode, filter, brust, video) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.video = video;
    }
}
