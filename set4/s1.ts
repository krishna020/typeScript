// interface 

interface User 
{
   name:string,
   readonly dbId:number,
   googleId ?:number
   address:string,
   startTrial():string,
   getTrial(userId:number):number
   
}

const user:User={
   name:"krishna",
   dbId:11,
   address:"Allahabad",
   startTrial:()=>
   {
      return 'hii krishna'
   },
   getTrial: function (id=12)  // we can give differ name 
   {
      return 10;
   }
}

export {}