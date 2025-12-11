import { input, test2, test } from './input.js';

const map = {};
input
    .split('\n')
    .map((line) => line.split(': '))
    .forEach((l) => {
        const k = l.shift();
        map[k] = l[0].split(' ');
    });
const puzzle1 = () => {
    const out = 'out';
    const you = 'you';
    const stack = [you];
    let ways = 0;
    while (stack.length > 0) {
        const next = stack.shift();
        map[next].forEach((newNext) => {
            if (newNext !== out) {
                stack.push(newNext);
            } else {
                ways++;
            }
        });
    }
    console.log(ways);

}

puzzle1();