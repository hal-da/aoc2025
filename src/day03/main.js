import {data} from "./input.js";

const input = data.split('\n')
let sum = 0

// puzzle 1
input.forEach(line => {
    let maxTensPlace = 0
    let maxTensPlaceIndex = 0
    let maxOnePlace = 0
    for (let i = 0; i < line.length - 1; i++) {
        if (Number(line[i]) > maxTensPlace) {
            maxTensPlace = line[i]
            maxTensPlaceIndex = i
        }
    }

    for (let i = maxTensPlaceIndex + 1; i < line.length; i++) {
        if (Number(line[i]) > maxOnePlace) {
            maxOnePlace = line[i]
        }
    }
    sum += Number(maxTensPlace + maxOnePlace)
})

console.log(sum)

// puzzle 2
sum = BigInt(0)
input.forEach(line => {
    let firstHighestNumber = 0
    let firstHighestNumberIndex = 0
    let maxNumber = ''
    // find first highest number
    for (let i = 0; i < line.length - 11; i++) {
        if (Number(line[i]) > firstHighestNumber) {
            firstHighestNumber = Number(line[i])
            firstHighestNumberIndex = i
        }
    }
    maxNumber += firstHighestNumber
    for (let i = 11; i > 0; i--) {
        let m = 0
        for (let j = firstHighestNumberIndex + 1; j <= line.length - i; j++) {
            if (Number(line[j]) > m) {
                m = Number(line[j])
                firstHighestNumberIndex = j
            }
        }
        maxNumber += m
    }
    sum += BigInt(maxNumber)
})
console.log(sum.toString())