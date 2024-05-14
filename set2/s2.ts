type cardNumber={
     cardnumber:number
}

type cardCvv={
    cvv:number
}

// suppose we want to add then and creating a ne object

type cardDetails=cardNumber & cardCvv & {cardHolder:string}

let carddetails:cardDetails={
    cardnumber:123,
    cvv:11,
    cardHolder:"krishna"
}

console.log(carddetails)

export {}
