console.log('Excercise: level 2')

// 1
let score = +prompt('Enter your score')

switch (true) {
    case score >= 80 && score <= 100:
        console.log('A')
        break
    case score >=70 && score <= 89:
        console.log('B')
        break
    case score >= 60 && score <= 69:
        console.log('C')
        break
    case score >= 50 && score <= 59:
        console.log('D')
        break
    case score >= 0 && score <= 49:
        console.log('F')
        break
    default:
        console.log('Invalid score')
}

// 2
let month = prompt('Enter the month').toLowerCase()
switch (month) {
    case 'september':
    case 'october':
    case'november':
        console.log('Autumn')
        break
    case 'deccember':
    case 'january':
    case 'february':
        console.log('Winter')
        break
    case 'march':
    case 'april':
    case 'may':
        console.log('Spring')
        break
    case 'june':
    case 'july' :
    case 'august':
        console.log('Summer')
        break
    default:
        console.log('Invalid month')
}

// 3
let day = prompt('Enter the day','sunday').toLowerCase()
switch (day) {
    case 'sunday':
    case 'satuday':
    console.log(`${day} is a weekend day`)
        break
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
    console.log(`${day} is a working day`)
        break
    default:
        console.log('Invalid day')
}