const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
  // using for loop
      // for(i = 0; i <= 10; i++){
      //   console.log(i)
      // }
      // console.log('Iterate 0 to 10 using for loop')

      // let j = 0
      // while (j <= 10){
      //   console.log(j)
      //   j++
        
      // }
      // console.log('Iterate 0 to 10 using while loop')

      // let k = 0
      // do {
      //   console.log(k)
      //   k++
      // } while (k <= 10)
      // console.log('Iterate 0 to 10 using do while loop')

     

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for(i = 10; i >=0; i--){
  console.log(i)
}
console.log('Iterate 0 to 10 using for loop')

let j = 10
while (j >= 0){
  console.log(j)
  j--
  
}
console.log('Iterate 0 to 10 using while loop')

let k = 10
do {
  console.log(k)
  k--
} while (k >= 0)
console.log('Iterate 0 to 10 using do while loop')

//3. Iterate 0 to n using for loop
let n = 4 //= Number(prompt('Enter some number'));  
for(a = 0; a <= n; a++){
    console.log(a);
  }

//4. Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

let str = '';
for(i = 0; i <= 7; i++){
  str += '#'
  console.log(`${str}`)
}

// 5. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for(i = 0; i <= 10; i++){
  console.log(`${ i} x ${i} = ${i * i}`);
}

// 6.Using loop print the following pattern

// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

console.log('i   i^2   i^3')
for(i = 0; i <= 10; i++){
  console.log(`${i}   ${i**2}   ${i**3}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
console.log('Print only even numbers')
for(i = 0; i <= 100; i++){
  if (i % 2 == 0) {
    console.log(i);
  }}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
console.log('Print only odd numbers')
for(i = 0; i <= 100; i++){
  if (i % 2 == 1) {
    console.log(i);
  }}
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
console.log('Print only prime numbers')
for(i = 0; i <= 100; i++){
  if (i % i == 1) {
    console.log(i);
  }}
// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers
console.log('Print sum of 100 numbers')
sum = 0;
for(i = 0; i <= 100; i++){
  sum += i ;
    console.log(sum);
  }

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

console.log('Print sum of even and odd numbers')
sum_of_even = 0;
sum_of_odd  = 0;
for(i = 0; i <= 100; i++){
  if (i % 2 == 0){
  sum_of_even += i;}
  else {
  sum_of_odd += i;
  }
  }
  console.log(`sum of even numbers is: ${sum_of_even}\nsum of odd numbers is: ${sum_of_odd}  `);

 // 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
 console.log('Print sum of even and odd numbers as array')
 
 sum_array = [0,0];
 for(i = 0; i <= 100; i++){
   if (i % 2 == 0){
   sum_array[0] += i;}
   else {
   sum_array[1] += i;
   }}
   console.log(`${sum_array}`)

  // 13. Develop a small script which generate array of 5 random numbers
  random_array = [];
  for(i = 0; i < 5; i++){
    random_array.push(Math.floor(Math.random(5) * 100))
  }
  console.log(random_array)

  // 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
  unique_random_array = [];
  for(i = 5; unique_random_array.length < i;){
    ran = Math.floor(Math.random() * 10);
    if (unique_random_array.indexOf(ran) === -1 ){
      unique_random_array.push(ran);
    }
  }
  console.log(unique_random_array)

  // 15. Develop a small script which generate a six characters random id:
  char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  unique_id = ''
  for(i = 0; i <6; i++ ){
    random_char = Math.floor(Math.random() * char.length );
    unique_id += char[random_char]
  }
  console.log(unique_id);