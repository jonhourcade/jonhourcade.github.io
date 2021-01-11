// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // use static method of array class to return true if value is an array
    return Array.isArray(value);
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    if (Array.isArray(value)) return false; // static method of array class
    if (!value) return false; // if value is null, test evaluates to true (first evaluates to falsy before getting flipped by not operator)
    if (value instanceof Date) return false; // evaluates to true if the left operand can be casted to the right operand
    if (typeof value === "object") return true; // return true if it's an object
    return false; // return false if it's not an object
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    if (!value) return false; // evaluates to falsy, flipped to true with not operator
    if (value instanceof Date) return false; // can value be casted to date
    if (typeof value === "object" || Array.isArray()) return true; // if is object but not date or null or is array return true
    return false; // else retur false
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    
    if (typeof value === "string") return "string"; // typeof unary operator return string
    if (Array.isArray(value)) return "array";
    if (value === undefined) return "undefined"; // undefined doesn't need to be in quotes, its a type 
    if (typeof value === "number") return "number";
    if (typeof value === "boolean") return "boolean";
    if (value === null) return "null"; // same as undefined, could use falsy here if you wanted to be fancy
    if (typeof value === "function") return "function";
    if (value instanceof Date) return "date";
    if (isObject(value)) return "object";
    return undefined; // isn't necessary, will return undefined if you get to the end of the function and nothing has been returned
    
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
