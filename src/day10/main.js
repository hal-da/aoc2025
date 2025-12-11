import {test} from './input.js';

const data = test.replaceAll(/[(|)]/g,'').split('\n').map(line => line.split(' '));
console.log(data)


const map = {}
data.forEach((line,i) => {
    const target = line.shift().split('').map(el => {
        if(el === '.')return 0
        if(el === '#')return 1
    });
    target.pop()
    target.shift()
    line.pop()

    const amountBtn = target.length
    const buttons = []

    line.forEach((el, i) => {
        const arr = new Array(amountBtn).fill(0)
        el.split(',').forEach((btn) => arr[btn]=1)
        buttons.push(arr)
    })

    map[i] = {
        target,
        buttons
    }

    // console.log(target);
    // console.log(line);



})

console.log(map);