/*
there is no return type in setter method.
but not use void just simply avoid it.
you can write getter method ithout setter method.
*/

class User4 {
    private readonlybranch: string = "CSE"
    protected username:string='krishna'
    private _rollNo = 101
    constructor(
        public name: string,
        public email: string
    ) {}

    get getRollNo(): number {
        return this._rollNo
    }

    set setRollNo(unique_id: number) {
        if (unique_id > 1000) {
            this._rollNo = unique_id
        }
        else {
            throw new Error('number less than 10000')
        }
    }
}

/*
in protected keyword we can access inside the class and extends class but not for the out side class
*/
class subUser4 extends User4
{
    accountName:string='sam'
     changeUserName():string
     {
         this.accountName='Rahul'
         return this.accountName
     }
}

const user = new User4('krishna', 'krishna@gmail.com')

console.log(user.getRollNo)
