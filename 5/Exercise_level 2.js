console.log('Exercise: level 2')

// 1

console.log(countries)
console.log(webTechs)

// 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// First remove all the punctuations and change the string to array and count the number of words in the array
words = text.replace(/[^\w\s]/gi,'').split(' ')
 console.log(words)
 console.log(words.length)

 // 3
 const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    console.log(shoppingCart)
    shoppingCart.unshift('Meat')
    console.log(shoppingCart)
    shoppingCart.push('Sugar')
    console.log(shoppingCart)
    // remove 'Honey' if you are allergic to honey
    shoppingCart.splice(4,1)
    console.log(shoppingCart)
    // modify Tea to 'Green Tea'
    shoppingCart[3] = 'Green Tea'
    console.log(shoppingCart)

    // 4

    countries.includes('ETHIOPIA') ?
    console.log('ETHIOPIA is included in the array') :
    countries.push('ETHIOPIA')
    console.log(countries)

    // 5
    webTechs.includes('Sass') ?
    console.log('Sass is included in the array') :
    webTechs.push('Sass')
    console.log(webTechs)

    // 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullstack = frontEnd.concat(backEnd)

console.log(fullstack)



    
