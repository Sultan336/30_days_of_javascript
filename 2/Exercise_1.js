console.log('Welcome to the JavaScript console!\nExcersise 1:')

let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(`Length of the challenge: ${challenge.length}`)

challenge_to_upper = challenge.toUpperCase()
challenge_to_lower = challenge.toLowerCase()
console.log(`Challenge to upper: ${challenge_to_upper}`)
console.log(`Challenge to lower: ${challenge_to_lower}`)

// 6
console.log(`Slicing challenge using substr() method: ${challenge.substr(3, 4)}`)
console.log(`Slicing challenge using substring() method: ${challenge.substring(3, 7)}`)

// 7
console.log(challenge.substr(3,challenge.length -1))

//8
console.log('Does challenge include Script? ' +(challenge.includes('Script')))

//9
console.log(`Spliting challenge into an array using split() method:  ${challenge.split('')}`)
console.log(`Spliting challenge using split() method with spaces:  ${challenge.split(' ')}`)

//11
string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(', '))

//12
console.log(challenge.replace('JavaScript', 'Python'))

//13
console.log(challenge.charAt(15))

//14
console.log(`Character code of J is: ${challenge.charCodeAt(11)}`)

//15
console.log(`Index of a is: ${challenge.indexOf('a')}`)

//16
console.log(`Last index of a is: ${challenge.lastIndexOf('a')}`)

//17
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(`Sentence: ${sentence}`)
console.log(`First occurance of the the word 'because' in sentence is : ${sentence.indexOf('because')}`)
console.log(`Last occurance of the the word 'because' in sentence is : ${sentence.lastIndexOf('because')}`)

//19
let sentence_1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(`Sentence_1: ${sentence_1}`)
console.log(sentence_1.search('because'))
//20
let sentence_2 = '   You cannot end a sentence with because because because is a conjunction'
console.log(`Sentence_2: ${sentence_2.trim()}`)

//21
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))

//23
let find_all_a = /a/gi
console.log(challenge.match(find_all_a))

//24
let string_1 = '30 days of '
let string_2 = 'javascript'
console.log(string_1.concat(string_2))

//25
console.log(`Challenge x 2: ${challenge.repeat(2)}`)