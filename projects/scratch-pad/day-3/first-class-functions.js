// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    
    // const func = createGreaterThanFilter(5);
    // func holds the following function: function(input) {return input > 5}
    // func(10) returns true
    return function(input) {
        return input > base;
    }
    
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    
    return function(input) {
        return input < base;
    };
    
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    
    // just like before, currying is used so each function takes one argument
    // arrow function, same end result, different syntax (except when this reference is used)
    return (string) => {
        return string[0].toLowerCase() === startsWith.toLowerCase();
    };

}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    
    return (string) => {
        return string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
    };

}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    
    // reduce method "reduces" array to single value, in this case, an array
    // reduce will pass each element in the strings array into the callback function
    // callback function returns the accumulator, an array, with a new element added
    // the new element is a string from the strings array
    return strings.reduce(function(modStrs, string) {
        return modStrs.concat([modify(string)]);
    }, []);

}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    
    // every method looks at every element in the strings array
    // and passes it into the callback
    // call back passes the element into the test function that is 
    // supplied to the all string pass function
    // if every element returns true, every returns true
    // if an element returns false, every returns false
    return strings.every(function(value) {
        return test(value);
    });
    
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
