console.log('Exercise: level 3')

// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages)
ages.sort()
console.log(ages) 
// meadian age 
const median_age = ages[Math.floor((ages.length-1) / 2)]
console.log(median_age)
// average age
const average_age = ages.reduce((a,b) => a + b, 0) / ages.length
console.log(average_age)
console.log(ages.sort()[0])
console.log(ages.sort()[ages.length-1])
console.log(`${(ages.sort()[ages.length-1]) - ages.sort()[0] }` )  


let middleCountry =  `the middle country is ${countries[countries.length / 2]}`
console.log(middleCountry)

if (countries.length % 2 === 0) {
    let a = countries.length / 2;
    console.log(countries.slice(0, a));
    console.log(countries.slice(a + 1,countries.length -1))
} else {
    countries.push("korea");
    let b = countries.length / 2;
    console.log(countries.slice(0, b));
    console.log(countries.slice(b + 1, countries.length - 1))
}

