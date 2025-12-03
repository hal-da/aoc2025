console.log('day2')
import {data} from './input.js';

let res1 = 0,
    res2 = 0;
console.time('test')
data.split(',')
    .map((d) => {
        d = d.split('-');
        for (let i = Number(d[0]); i <= d[1]; i++) {
            const s = i.toString();
            if (s.substring(0, s.length / 2) === s.substring(s.length / 2)) res1 += i; // puzzle 1
            if (/^(\d+)\1+$/.test(s)) res2 += i; // puzzle 2
        }
    });
console.log(res1);
console.log(res2);
console.timeEnd('test');