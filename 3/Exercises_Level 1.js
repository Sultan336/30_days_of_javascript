console.log('Exercises: Level 1')
// 1
let firstname = 'Sultan'
let lastname = 'Mehmood'
let country = 'Pakistan'
let city = 'Karachi' 
let age = 25
let isMarried = false
let year = new Date().getFullYear()

console.log(firstname, lastname, country, city, age, isMarried, year)
console.log(typeof(firstname), typeof(lastname), typeof(country), typeof(city), typeof(age), typeof(isMarried), typeof(year))

// 2 
console.log(`typeof '10' ${typeof('10')} is equal to 10 ${typeof(10)} ${'10' === 10}`)

// 3
console.log(`typeof parseint('9.8') ${typeof(parseInt('9.8'))} is equal to 10 ${typeof(10)} ${typeof(parseInt('9.8')) == 10}`)
let a = '9.8'
let b = parseInt(a)
console.log(typeof(b) === 10) 

// 4
// Write three JavaScript statement which provide truthy value
console.log(`${true === true} ${false === false} ${true !== false}`)

// Write three JavaScript statement which provide falsy value
console.log(`${NaN === undefined} ${[] === {}} ${true !== true}`)

// 5 
/*
true
true
flase
true
true
flase
flase
flase
true
flase
*/
console.log(`${4 > 3} ${4 >= 3} ${4 < 3} ${4 == 4} ${4 === 4} ${4 != 4}, ${4 !== 4}, ${4 != 4}, ${4 == '4'} ${4 === '4'}`)
console.log(`${!('python'.length == 'jargon'.length)} `)

// 6
/*
true && true --> true
true && false --> false
true || true --> true
true || flase --> true
false
true
true
flase
true
true
*/
console.log(`${4 > 3 && 10 < 12} ${4 > 3 && 10 > 12} ${4 > 3 || 10 < 12} ${4 > 3 || 10 > 12} ${!(4 > 3)} ${!(4 < 3)} ${!(false)} ${!(4 > 3 && 10 < 12)} ${!(4 > 3 && 10 > 12)} ${!(4 === '4')}`)
let string = 'dragon python'
console.log(!(string.match(/on/gi)))
 // 7
 const date = new Date()
 console.log(`year: ${date.getFullYear()}
month: ${date.getMonth()}
date: ${date.getDate()}
day: ${date.getDay()}
hours: ${date.getHours()}
minutes: ${date.getMinutes()}
seconds: ${date.getSeconds()}

 `)

