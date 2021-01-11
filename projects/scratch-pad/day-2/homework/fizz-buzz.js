// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // initialize i to 1 instead of zero because first number that should be output is 1
    // exit loop when i is less than 101 because last number that should be output is 100
    for (let i = 1; i < 101; ++i) {
        // first, test if i is divisible by three AND five
        // if you don't test this first, dead code
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            // continue skips the rest of the loop and starts the next iteration
            continue;
        }
                
        if (i % 3 === 0) {
            console.log("Fizz")
            continue;
        }
        
        if (i % 5 === 0) {
            console.log("Buzz");
            continue;
        } 
        
        // if i is not divisible by five and three, five, or three, output index
        console.log(i);
    }
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}