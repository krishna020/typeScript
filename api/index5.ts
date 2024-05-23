interface takePhoto1 {
    cameraMode: string
    filter: string
    brust: number
}

interface story2
{
    takeStory():void
}


class Instagram1 implements takePhoto1 {
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

class Youtube1 implements takePhoto1
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