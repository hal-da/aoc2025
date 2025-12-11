import {test} from './input.js'
const data = test.split('\n').map(line => line.split(''))
console.log(data)
const findStart = () => {
    for (let i = 0; i <data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if(data[i][j]==='S') return [i,j]
        }
    }
}
const [startI,startJ] = findStart();
console.log(startI, startJ);