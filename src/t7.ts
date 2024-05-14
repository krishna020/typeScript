type Person={
    name:string,
    age:number,
    isActive:boolean
}

function showObject(person:Person):{}
{
   return [person.name,person.age,person.isActive]
}

console.log(showObject({name:"krishna",age:26, isActive:true}))

export {}