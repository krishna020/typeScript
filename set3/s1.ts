// union
// basically we are making a new type

let id:string | number ="12aw"
console.log(id)

// real life example
type user={name:string, id:number}
type admin={userName:string, id:number}

let client : user|admin={name:"krishna",id:2}

// similar for function
 function add(a:number|string, b:number|string)
 {
    return [a,b];
 }
  console.log(add(2,3))
  console.log(add('2','3'))

export {}