// for loop structure
for(i=0; i<=5; i++){
    console.log(i)
}

for (i=5; i>=0; i--){
    console.log(i)
}

// Multiplication table
for(i=0; i<=10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(i = 0; i< countries.length; i++){
    newArr.push(countries[i].toUpperCase())
    
}
console.log(newArr)
//Adding all elements in the array
const numbers =[1,2,3,4,5]
let sum = 0
for(let i=0;i< numbers.length;i++){
    sum = sum + numbers[i]    
}
//Creating a new array based on the existing array
const newArr_1 = []
for(let i = 0; i < numbers.length; i++){
    newArr_1.push( numbers[i] ** 2)
  
  }
  console.log(newArr_1) 


