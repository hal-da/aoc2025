import { test, data } from './input.js';

const input = test.split('\n').map(line => line.split(',').map(Number));
const distances = {}
let inputStrings = input.map(line => line.join(''))
const calculateDistance = (a, b) =>   {
    return Math.sqrt(
        Math.pow(a[0] - b[0],2)
        +Math.pow(a[1] - b[1],2)
        +Math.pow(a[2] - b[2],2)
        )
}
const inputCopy = JSON.parse(JSON.stringify(input));
while (inputCopy.length > 1) {
    const start = inputCopy.shift();
    inputCopy.forEach((element) => {
        const d = calculateDistance(start, element);
        distances[d] = [start, element];
    })
}
const sortedKeys = Object.keys(distances).sort((a, b) => Number(a) -Number(b));
const firstKey = sortedKeys.shift()
const connections = [distances[firstKey].map(x=>x.join(''))]

const puzzle1 =()=> {
    while (sortedKeys.length > 0 || inputStrings.length > 0 || connections.length ===1) {
        const k = sortedKeys.shift();
        const circuit = distances[k]

        const [boxA, boxB] = circuit.map(box => box.join(''));
        let alreadyConnected = false;
        let indexForConnection = -1

        connections.forEach((connection, index) => {
            const indexA = connection.indexOf(boxA);
            const indexB = connection.indexOf(boxB);
            if (indexA > -1 && indexB > -1) {
                alreadyConnected = true;}
            else if (indexA > -1 && indexB === -1) {
                connections[index].push(boxB)
                // remove from input strings
                inputStrings = inputStrings.filter(x => x !== boxB)

                console.log( boxA, boxB);
                if(alreadyConnected) {
                    connections[index] = [
                        ...new Set([
                            ...connections[indexForConnection],
                            ...connections[index],
                        ]),
                    ];
                    connections.splice(indexForConnection, 1);
                }
                alreadyConnected = true;
                indexForConnection = index
            }
            else if (indexA === -1 && indexB > -1) {
                connections[index].push(boxA)
                inputStrings = inputStrings.filter(x => x !== boxA)
                console.log( boxA, boxB);
                if(alreadyConnected) {
                    connections[index] = [
                        ...new Set([
                            ...connections[indexForConnection],
                            ...connections[index],
                        ]),
                    ];
                    connections.splice(indexForConnection, 1);
                }
                alreadyConnected = true;
                indexForConnection = index
            }
        })
        if (!alreadyConnected) {
            connections.push([boxA, boxB])
        }
    }
}

