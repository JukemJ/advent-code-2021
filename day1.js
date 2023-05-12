const fs = require('fs')
const input = fs.readFileSync('day1.txt').toString().split('\n')
input.pop()

//part 1
let sum = 0
for(let i = 1; i < input.length; i++){
    if(+input[i] > +input[i-1]) sum++
}
console.log(sum)

//part 2
sum = 0
let start = input.slice(0,3).reduce((a,b) => a + +b,0)
for(let i = 0; i < input.length - 2; i++){
    if(input.slice(i,i+3).reduce((a,b) => a + +b,0) > start) sum++
    start = input.slice(i,i+3).reduce((a,b) => a + +b,0)
}
console.log(sum)