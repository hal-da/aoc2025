import { test, input } from './input.js';

let [ranges, ids] = input
    .split('\n\n')
    .map(
        (line) => line
            .split('\n')
    );
ids = ids.map(Number);
ranges = ranges.map(range => range.split('-').map(Number));

const puzzle1 = () =>{
    let count = {}
    ids.forEach(id => {
        ranges.forEach(range => {
            const [lower,upper] = range
            if (id >= lower && id <= upper){
                if(count[id])count[id]++;
                else count[id] = 1;
            }
        })
    })
    // console.log(Object.keys(count).length);
}

puzzle1();


const puzzle2 = () =>{
    const myRanges = {}

    while (ranges.length >0){
        let [lower, upper] = ranges.pop()
        const filteredRanges = ranges.filter(range => {
           return  !(range[0] >= upper || range[1] <= lower);
        });
        filteredRanges.forEach(range => {
            const [l,u]= range;
            if(l < lower)lower = l
            if(u > upper)upper = u
            const i = ranges.indexOf(range)
            ranges.splice(i,1);

        })
        // console.log('>>>>>',lower, upper, ranges);
        // console.log('filteredRanges', filteredRanges);
        myRanges[lower] = upper;
    }
    let sum = 0
    // console.log(myRanges);
    Object.entries(myRanges).forEach(([k,v])=> {
        // console.log(Number(k),v,v-Number(k)+1);
        sum += v-Number(k)+1
    })
    console.log(sum);
}

puzzle2();

// too high: 366825803001600
// too low:  354446125840674
