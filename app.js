var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var numResults = [];
var stringResults = [];
function add(number1, number2) {
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        return number1 + number2;
    }
    else if (typeof number1 === 'string' && typeof number2 === 'string') {
        return number1 + ' ' + number2;
    }
    return +number1 + +number2;
}
function printResults(resultObj) {
    console.log(resultObj.val);
}
var btn = document.querySelector('button');
btn.addEventListener('click', addNumber);
function addNumber() {
    var num1 = number1.value;
    var num2 = number2.value;
    var result = add(+num1, +num2);
    numResults.push(result);
    var stringResult = add(num1, num2);
    stringResults.push(stringResult);
    printResults({ val: result, timestamp: new Date() });
    console.log(numResults, stringResults);
}
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Done');
    }, 1000);
});
myPromise
    .then(function (result) {
    console.log(result);
});
