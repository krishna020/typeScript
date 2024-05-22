class User1
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

const user1=new User1('krishna','krishna@gmail.com')

//console.log(user.branch)
