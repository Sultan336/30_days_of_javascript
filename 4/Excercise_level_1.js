console.log('Excercise: level 1')
// 1 
let age = +prompt('Enter your age')
age >= 18 ? console.log('You are old enough to drive') : console.log(`You will be old enough to drive after ${18-age} years.`)

// 2
let myage = 25
if (age > myage)
    console.log(`You are ${age - myage} years older than me`)
    else if (age < myage)
    console.log(`You are ${myage - age} years younger than me`)
    else
    console.log('You are the same age as me')

    // 3
    let a = 4
    let b = 3
    if (a > b)
    console.log(`${a} is greater than ${b}`)
    else
    console.log(`${b} is greater than ${a}`)

    // ternary operator
    a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

    // 4
let is_even = 9
if (is_even % 2 == 0)
    console.log(`${is_even} is even`)
    else
    console.log(`${is_even} is odd`)
