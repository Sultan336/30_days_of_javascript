console.log('Exercise: level 1')
// 1
const arr = new Array
console.log(arr)

// 2
arr_1 = [[],NaN,null,`${2 + 2}`,2%2]
console.log(arr_1)

// 3
console.log(arr_1.length)

// 4
// Get the first item, the middle item and the last item of the arr_1
console.log(arr_1[0]) // first item
console.log(arr_1[Math.floor((arr_1.length - 1)/2)]) // middle item
console.log(arr_1[arr_1.length-1]) // last item

// 5
let mixedDataTypes = [1, '2', true, null, undefined, [], {}, () => {}, Symbol('symbol')]
console.log(mixedDataTypes)
console.log(mixedDataTypes.length)

// 6
let  itCompanies = ['Google', 'Facebook', 'Microsoft', 'Apple', 'Amazon', 'IBM', 'Oracle', 'Alphabet']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[Math.floor((itCompanies.length - 1)/2)])
console.log(itCompanies[itCompanies.length-1])

// 10
// Print out each company in the array
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// 11
// Change each company name to uppercase one by one and print them out
for (i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}

// 12
console.log(`${itCompanies.join(' ')} are big IT companies`)

// 13 
let searchTechComp = prompt("enter company to search");
if (itCompanies.includes(searchTechComp)) {
    console.log(searchTechComp)
} else {
    console.log("company not found")
}
// 14
// Filter out companies which have more than one 'o' without the filter method
// Filter method 
let filteredCompanies = itCompanies.filter(company => company.includes('oo'))
console.log(filteredCompanies)
// without usingg the filter method
let oo = []
for (i = 0; i < itCompanies.length; i++) {
    itCompanies[i].includes('oo') ? 
    oo.push(itCompanies[i]) : null
}
 console.log(oo)
// 15
// console.log(itCompanies.sort())
// console.log(itCompanies.reverse())

// 17
console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(itCompanies.length -1, 3))

// 20
console.log(itCompanies.splice(0, 1))
console.log(itCompanies.splice(itCompanies.length - 1, 1))
console.log(itCompanies.splice(Math.floor((itCompanies.length - 1)/2), 1))
console.log(itCompanies.splice())
console.log(itCompanies)
