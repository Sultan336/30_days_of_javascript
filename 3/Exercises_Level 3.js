console.log('Exercises: Level 3')
let now = new Date()

let YYYY = now.getFullYear()
let MM = now.getMonth().toString().padStart(2, "0")
let DD = now.getDay().toString().padStart(2, "0")
let HH = now.getHours().toString().padStart(2, "0")
let mm = now.getMinutes().toString().padStart(2, "0")

console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`)