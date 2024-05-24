function another<T,U>(val1:T,val2:U):object
{
   return {
    val1,
    val2
   }
}

function another2<T,U extends number>(val1:T,val2:U):object
{
   return {
    val1,
    val2
   }
}

console.log(another(3,4))
console.log(another2(3,5))
