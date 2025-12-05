import {test, data} from './input.js';

let [ranges, ids] = data
    .split('\n\n')
    .map(
        (line) => line
            .split('\n')
    );
ids = ids.map(Number);
ranges = ranges.map(range => range.split('-').map(Number));

const puzzle1 = () => {
    let count = {}
    ids.forEach(id => {
        ranges.forEach(range => {
            const [lower, upper] = range
            if (id >= lower && id <= upper) {
                count[id] = true;
            }
        })
    })
    console.log(Object.keys(count).length);
}

puzzle1();

const puzzle2 = () => {
    const r2 = JSON.parse(JSON.stringify(ranges))
    let foundSomeOverlappingChanges = true
    const counter = {}
    while (foundSomeOverlappingChanges) {
        foundSomeOverlappingChanges = false
        ranges = ranges.map(range => {
            let [lower, upper] = range
            if(counter[lower])delete counter[lower]

            r2.forEach(range2 => {
                const [lower2, upper2] = range2
                if(lower2 <= upper && lower <= upper2){

                    if (lower2 < lower) {
                        lower = lower2
                        foundSomeOverlappingChanges = true
                    }
                    if (upper2 > upper) {
                        upper = upper2
                        foundSomeOverlappingChanges = true
                    }
                }
            })
            counter[lower] = upper;
            return [lower, upper]
        })
    }
    let sum = 0
    for (const key in counter) {
        sum += counter[key] - key + 1;
    }
    console.log(sum)
}

puzzle2()