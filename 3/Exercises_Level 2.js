console.log('Exercises_Level 2')

// 1
tri_base = +prompt('Enter the base of triangle', 'base')
tri_height = +prompt('Enter the height of triangle','height')
console.log(`The area of the triangle is: ${0.5 * tri_base *tri_height}`)

// 2
let side_a = +prompt('Enter the length of side_a of the triangle','Side_a')
let side_b = +prompt('Enter the length of side_b of the triangle','Side_b')
let side_c = +prompt('Enter the length of side_c of the triangle','Side_c')
let parameter = side_a + side_b + side_c
console.log(parameter)

// 3
let length = +prompt('Enter the length of rectangle','length')
let width = +prompt('Enter the width of rectangle','width')
let area_rec = length * width
let parameter_rec = 2 * (length + width)
console.log(`The area of rectangle is: ${area_rec} and it's prameter is ${parameter}`)

// 4
let radius_circle = +prompt('Enter the radius of circle','radius')
let area_circle = 3.14 * radius_circle**2
let parameter_circle = 2 * 3.14 * radius_circle
console.log(`The area of the circle is ${area_circle} and the circumference of the cirlce is ${parameter_circle}`)

// 5
/*
y = 2x -2
the slope is 2
x-intercept is (0,1)
y-intercept is (0,-2)
*/
let slope_0 = 2
// 6
let x1  = 2  
let x2  =  6
let y1  =  2
let y2  =  10

let slope = (y2 - y1)/(x2 - x1)
console.log(slope)

// 7
console.log(slope_0 == slope)

// 8
var x = -3
let quaradic_eq = x**2 + 6*x + 9

console.log(quaradic_eq) 
// 9
let hours = +prompt('Enter the number of hours you\'ve worked','hours')
let rate = +prompt ('Your hourly rate','rate per hour')
let pay = hours * rate
console.log(pay)
// 10
let name = 'Sultan'
let name_length = name.length
name_length > 7 ? console.log('your name is long') : console.log('your name is short')

// 11
let firstName = 'Sultan'
let lastName = 'Mehmood'

let firstname_length = firstName.length
let lastName_length = lastName.length

firstname_length < lastName_length ? 
console.log(`Your first name ${firstName}, is shorter than your family name, ${lastName}`) : NaN

// 12
let myAge = 250
let yourAge = 25
let age_diff = +(myAge - yourAge)
console.log(`I am ${age_diff} older than you`)

// 13
let time = new Date()
let birth = +prompt('Enter you birth year','Year of birth')
let current_age = time.getFullYear() - birth

current_age > 18 ? console.log(`you are ${current_age}. You are old enough to drive`) : console.log(`You are ${current_age}. You will be allowded to drive after ${18 - current_age} years`)

// 14
let age = +prompt('Enter you age','age')
console.log(`Also you are ${age *365 *24 *60 *60} seconds old`)

// 15

let YYYY = time.getFullYear()
let MM = time.getMonth()
let DD = time.getDay()
let HH = time.getHours()
let mm = time.getMinutes()

console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`)
console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`)
console.log(`${DD}/${MM}/${YYYY} ${HH}:${mm}`)



