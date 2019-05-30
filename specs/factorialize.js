//function that factors a given number (using recursion)
function factorial(num){
    if (num < 0)
        return -1;
    else if (num === 0)
        return 1;
    else
        return (num * factorial(num - 1));
}

console.log(factorial(5));