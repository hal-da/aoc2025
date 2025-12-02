import {test, puzzleInput, test2} from "./input.js";

const inp = puzzleInput.replaceAll('L', '-').replaceAll('R', '').split('\n').map(Number);
let position = 50
let zeros = 0

for (let i = 0; i < inp.length; i++) {
    const rotations = inp[i] % 100 // normalize
    const pSum = position + rotations // puzzle 2
    if (pSum < 0 && position > 0 || pSum > 100) zeros++ // puzzle 2 -
    const fullRotations = Math.trunc(Math.abs(inp[i]) / 100) // puzzle 2
    zeros += fullRotations
    position = (100 + position + rotations) % 100
    if (position === 0) zeros++ // puzzle 1
}

console.log('zeros: ', zeros)
