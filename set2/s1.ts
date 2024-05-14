type Person={
    readonly _id:number,
    name:string,
    email:string,
    isSubscribe:boolean,
    ispaid?:boolean  // how to write optional fields
}

const person:Person=
{
   _id:1,
   name:"krishna",
   email:"krishna@gmail.com",
   isSubscribe:true
}
person.email="sam@gmai.com"
//person._id=2 //can't assign any value, because it only read property.

export {}