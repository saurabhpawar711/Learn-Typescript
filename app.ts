const number1 = document.getElementById('num1') as HTMLInputElement;
const number2 = document.getElementById('num2') as HTMLInputElement;

const numResults: Array<number> = [];
const stringResults: Array<string> = [];

type NumOrString = number | string;

interface resultObj {
    val: number; 
    timestamp: Date;
}

function add(number1: NumOrString, number2: NumOrString) {
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        return number1 + number2;
    }
    else if (typeof number1 === 'string' && typeof number2 === 'string') {
        return number1 + ' ' + number2;
    }
    return +number1 + +number2;
}

function printResults(resultObj: resultObj) {
    console.log(resultObj.val);
}

const btn = document.querySelector('button')!;
btn.addEventListener('click', addNumber);

function addNumber() {
    const num1 = number1.value;
    const num2 = number2.value;
    const result = add(+num1, +num2);
    numResults.push(result as number);
    const stringResult = add(num1, num2);
    stringResults.push(stringResult as string);
    printResults({ val: result as number, timestamp: new Date() })
    console.log(numResults, stringResults);
}

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('Done');
    }, 1000)
});

myPromise
.then((result) => {
    console.log(result);
})
