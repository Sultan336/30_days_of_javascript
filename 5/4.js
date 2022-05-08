//Creating an array 
//1 using array constructor 

//const arr = Array()

// let arr = new Array()
// console.log(arr)

// 2 using square beackets []
const arr = []
console.log(arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banan')  // 0
console.log(index)

0 === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

console.log(typeof arr)

const numbers = [1, 2, 3, 4, 5, 6]
	//numbers.splice(3, 3, 7, 8, 9)
  console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
