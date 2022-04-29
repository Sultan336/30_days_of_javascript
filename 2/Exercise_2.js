console.log('Welcome to the JavaScript console!\nExcersise 2:')

// 1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

// 2
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

// 3
a = '10'
b = 10
console.log(a === b)
console.log(typeof(a) == typeof(b))
let c = parseInt(a)
console.log(typeof(c) == typeof(b))

// 4
let d = '9.81'
let e = 10
console.log(d == e)
let f = parseFloat(d)
console.log(Math.round(f) == e)

// 5
let string = 'python and jargon'
console.log(string.includes('on'))

// 6
sentence = 'I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'))

// 7 8 9
console.log(Math.floor(Math.random()*101))
console.log(Math.floor(Math.random()*51))
console.log(Math.floor(Math.random()*256))

//10
let g = 'JavaScript'
console.log(g.charAt(Math.random()*10))

// 11
console.log('1 \t1 \t1 \t1 \t1\n2\t1 \t2 \t4 \t8 \n3 \t1 \t3 \t9 \t27 \n4 \t1 \t4 \t16 \t5 \n5 \t1 \t5 \t25 \t125')

// 12

let sentence_3 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence_3.substr(31,23))

