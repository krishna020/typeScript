const users:Array<string>=[]

const ids:Array<number>=[]

function identyOne(val:(string|boolean)):(string|boolean)
{
   return true
}
// in above case we can't pass number or something ele

function identyTow(val:any):any
{
    return 'krishna'
}

console.log(identyTow(5))

// in above scenario we can pass anything and we can get anything, but it is not good pratice
// so use generic, it lock the type

function identyThree<Type>(val:Type):Type{
    return val
}

console.log(identyThree('3'))  // it will take string and return string