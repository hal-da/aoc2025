import { input } from './input.js';

const calculateUnrolledCalculations = (unrolledCalculations) => {
    const calculator = {
        '*': (arr) => arr.reduce((acc, el) => acc * el, 1),
        '+': (arr) => arr.reduce((acc, el) => acc + el, 0),
    };
    let sum = 0;
    Object.values(unrolledCalculations).forEach((v) => {
        const calculation = v.shift();
        const n = v.map(Number);
        if (n.at(-1) === 0) n.pop();
        const res = calculator[calculation](n);
        sum += res;
    });
    console.log(sum);
};

const puzzle1 = (input) => {
    const data = input.split('\n').map((line) => line.trim().split(/ +/));
    const unrolledCalculations = {};
    for (let i = data.length - 1; i >= 0; i--) {
        for (let j = 0; j < data[i].length; j++) {
            if (unrolledCalculations[j])
                unrolledCalculations[j].push(data[i][j]);
            else unrolledCalculations[j] = [data[i][j]];
        }
    }

    calculateUnrolledCalculations(unrolledCalculations);
};

const puzzle2 = (input) => {
    let data = input.split('\n');
    const diff = data[0].length - data.at(-1).length;
    for (let i = 0; i < diff; i++) {
        data[data.length - 1] += ' ';
    }
    const operators = data.pop().match(/([+*]\s*)/g);
    data = data.map((line) => line.split(''));
    const unrolledCalculations = {};
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        unrolledCalculations[i] = [operator[0]];
        for (let j = 0; j < operator.length; j++) {
            const n = [];
            for (let k = 0; k < data.length; k++) {
                n.push(data[k].shift());
            }
            unrolledCalculations[i].push(n.join(''));
        }
    }
    calculateUnrolledCalculations(unrolledCalculations);
};

puzzle1(input);
puzzle2(input);
