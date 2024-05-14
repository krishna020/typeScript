// for function
// in case of function, it is importent to use type

function Add(num:number)
{
    return(num+2)  
}

//console.log(Add(2))

//... how to set default value.

const show=(name:string, email:string, ispaid:boolean=false)=>
{
   return [name, email, ispaid]
}

console.log(show('krishna',"krishna@gmail.com"))

export {}