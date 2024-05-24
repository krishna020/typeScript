// use of abstract
//differ  between interface and abstract

abstract class cameraMode{
    public name:string

    constructor(name:string)
    {
        this.name=name
    }

    abstract showPhoto():void

    public showHiddenPhoto()
    {
        console.log('hii hidden photo')
    }
}

class User extends cameraMode
{
    constructor(name:string)
    {
        super(name)
    }

    public showPhoto(): void {
        console.log('hii')
    }
}