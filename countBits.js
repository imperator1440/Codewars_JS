"use strict";

let countBits = function(n) {
    let result = 0;
    while (n >= 1) {
        if (n%2 == 1) {
           result++; 
        }
        n = parseInt(n /= 2);
        console.log(n);
    }
    return result;
};