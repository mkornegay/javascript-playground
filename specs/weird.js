// //"use strict"
// //fun with number precision
// console.log(0.1+0.2);
// console.log(0.1+0.2 == 0.3);

// //strange variable scope
// var a = b = 3;
// console.log(a);
// console.log(b);

// //testing for integer ecma script 5 and below
// function isInteger(x)
// {
//     return (x ^ 0) === x;
// }
// console.log(`Ecma 5 test for integer: ${isInteger(10.2)}`);

// //testing for integer ecma script 6
// console.log(`Ecma 6 test for integer: ${Number.isInteger(10.2)}`);

// //test for palindrome
// function palindromeTest(phrase)
// {
//     phrase = phrase.replace(/\W/g, '')
//     return (phrase == phrase.split('').reverse().join(''));
// }
// console.log(palindromeTest('level'));

//parameters and optional parameters
function add(x, y) {
    if (y != undefined) {
        return x + y;
    }
    else {
        return function (y) {
            return x + y;
        }
    }


}
console.log(add(2, 3));
console.log(add(2)(3));

//array split and splice
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1 length: " + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2 length: " + arr2.length + " last=" + arr2.slice(-1));
