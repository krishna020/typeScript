interface takePhoto {
    cameraMode: string
    filter: string
    brust: number
}

interface story
{
    takeStory():void
}


class Instagram implements takePhoto {
    constructor(
      public cameraMode: string,
      public filter: string,
      public brust: number
    )
    {}
    takeStory():void
    {
        console.log('this is my story')
    }
}

class Youtube implements takePhoto
{
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number,
        public video:string
    )
    {

    }
}