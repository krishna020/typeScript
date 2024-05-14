type  Person={
    name:string,
    age:number,
    isSubscribe:boolean
}
const person1:Person={
    name:"krishna",
    age:25,
    isSubscribe:true
}
const person2:Person={
    name:"rahul",
    age:25,
    isSubscribe:false
}

let allUser:Person[]=[]
allUser.push(person1)
allUser.push(person2)

console.log(allUser)

export {}
