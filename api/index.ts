class User
{
    public name:string;
    email:string
    private  readonlybranch:string="CSE"
    constructor(name:string, email:string)
    {
        this.name=name;
        this.email=email
    }
}

const user=new User('krishna','krishna@gmail.com')

//console.log(user.branch)
