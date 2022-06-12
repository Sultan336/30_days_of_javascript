// while loop
let i = 0
while (i <= 5){
    console.log(i)
    i++
}
console.log('looping over numbers')
// do while loop
let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)
console.log('looping over numbers')
//for of loop

const numbers = [1,2,3,4,5]
// just printing the numbers
for (const num of numbers){
    console.log(num)
}
console.log('looping over numbers')
// multiplying numbers
for (const num of numbers){
    console.log(num * num)
}
console.log('looping over numbers and multiplying')
// summing up numbers
let sum = 0
for (const num of numbers){
    sum += num
    
}
console.log(sum)
console.log('looping over numbers and summing them up')

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  for (const tech of webTechs) {
    console.log(tech.toUpperCase())
  }

  for (const tech of webTechs) {
    console.log(tech[0])
  }

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []

for (const country of countries){
    newArr.push(country.toUpperCase())
}
console.log(newArr)

// break

for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }
console.log('break')
// continue

for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)}
console.log('continue')   