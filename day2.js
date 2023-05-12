const fs = require('fs')
const input = fs.readFileSync('day2.txt').toString().split('\n')
input.pop()

//part 1
const pos = [0,0]
for(let x of input){
    x = x.split(' ')
    //console.log(x)
    switch (x[0]){
        case 'forward': pos[0] += +x[1];break;
        case 'up': pos[1] -= +x[1];break;
        case 'down': pos[1] += +x[1];break;
    }
}
console.log(pos[0]*pos[1])

//part 2
let horiz = 0
let depth = 0
let aim = 0
for(let x of input){
    x = x.split(' ')
    //console.log(x)
    switch (x[0]){
        case 'forward': 
            horiz += +x[1]
            depth += +x[1] * aim 
            break
        case 'up': 
            aim -= +x[1]
            break
        case 'down':
            aim += +x[1]
            break
    }
}
console.log(horiz*depth)