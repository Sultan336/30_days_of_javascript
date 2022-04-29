// 1
let sentence_4 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence_4.match(/love/g))

// 2
let sentence_5 = 'ou cannot end a sentence with because because because is a conjunction'
console.log(sentence_5.match(/because/g))

// 3

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const text = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
cleanedText = text.replace(/[^a-z A-Z]/g,'')
// find the most frequent word
console.log(cleanedText)
most_frequent_word = cleanedText.split(' ').reduce((a,b) => a.match(b) ? a : b)
console.log(most_frequent_word)

//4
let text_1 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
numbers_in_text_1 = text_1.match(/\d+/g)
console.log(numbers_in_text_1)
// convert to text
var result = numbers_in_text_1.map(x => parseInt(x))
console.log(result)
console.log(`Sum of numbers in text_1 is ${result.reduce((a,b) => a + b)}`)
