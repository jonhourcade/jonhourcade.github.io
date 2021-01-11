// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // use for of/for each loop cause you don't need index
  for (let val of array) {
    console.log(val);
  }
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // use for loop cause you do need index
  // for (let i = array.length - 1; i >= 0; --i) {
  //   console.log(array[i]);
  // }
  
  array.reverse().forEach((n)=>{
    console.log(n);
  })
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  let keys = [];
  
  // iterate over keys
  for (let key in object) {
    // push keys, not values, into array
    keys.push(key);
  }
  
  return keys;
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // iterate over keys
  for (let key in object) {
    // output keys to console
    console.log(key);
  }
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  let values = [];
  
  // iterate over keys
  for (let key in object) {
    // push values,not keys, into array
    values.push(object[key]);
  }
  
  return values;
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // iterate over keys
  for (let key in object) {
    // output values to console
    console.log(object[key]);
  }
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  let count = 0;
  
  // iterate over keys
  for (let key in object) {
    // use prefix increment operator to add one to count and reassign to count
    ++count;
  }
  
  return count;
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  let keys = [];
  
  // iterate over keys
  for (let key in object) {
    // push key into array
    keys.push(key);
  }
  
  // iterate over array backwards
  for (let i = keys.length - 1; i >= 0; --i) {
    // output value of key at index
    console.log(object[keys[i]]);
  }

}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
