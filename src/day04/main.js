import {data} from "./input.js";

const solve = (puzzle) => {
    const input = data.split('\n').map(line => line.split(''))

    const findAdjacentRolls = (i, j) => {
        let adjacentRolls = 0
        for (let k = -1; k <= 1; k++) {
            for (let l = -1; l <= 1; l++) {
                const ik = i + k
                const jl = j + l
                if (ik >= 0 && jl >= 0 && ik < input.length && jl < input[i].length && !(k === 0 && l === 0)) {
                    if (input[ik][jl] === '@') {
                        adjacentRolls++
                        if (adjacentRolls === 4) return false
                    }
                }
            }
        }
        return true
    }

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
            const [i, j] = roll
            input[i][j] = '.'
        })
    } while (rollsRemovedThisRound !== 0 && puzzle === 2)
    console.log(rollsRemoved)
}

solve(1)
solve(2)