/*
there is no return type in setter method.
but not use void just simply avoid it.
you can write getter method ithout setter method.
*/

class User3 {
    private readonlybranch: string = "CSE"
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

const user3 = new User('krishna', 'krishna@gmail.com')

console.log(user.getRollNo)
