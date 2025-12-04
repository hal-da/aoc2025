import {data} from "./input.js";

const input = data.split('\n').map(line => line.split(''))

const findAdjacentRolls = (i, j) => {
    let adjacentRolls = 0
    for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
            if (i + k >= 0 && j + l >= 0 && i + k < input.length && j + l < input[i].length && !(k === 0 && l === 0)) {
                if (input[i + k][j + l] === '@') {
                    adjacentRolls++
                    if (adjacentRolls >= 4) return false
                }
            }
        }
    }
    return true
}

const solve = (puzzle) => {
    let rollsRemoved = 0
    let rollsRemovedThisRound = 0
    do {
        const removableRolls = []
        rollsRemovedThisRound = 0
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[i].length; j++) {
                if (input[i][j] === '@') {
                    if (findAdjacentRolls(i, j)) {
                        rollsRemovedThisRound++
                        removableRolls.push([i, j])
                    }
                }
            }
        }
        rollsRemoved += rollsRemovedThisRound
        removableRolls.forEach(roll => {
            input[roll[0]][roll[1]] = '.'
        })
    } while (rollsRemovedThisRound !== 0 && puzzle === 2)
    console.log(rollsRemoved)
}

solve(1)
solve(2)


