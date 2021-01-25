// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
 * START OF OUR LIBRARY!
 * Implement each function below its instructions
 */

/** _.identity
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Returns <value> unchanged
 * Examples:
 *   _.identity(5) === 5
 *   _.identity({a: "b"}) === {a: "b"}
 */

_.identity = function(value) {
    return value;
}


/** _.typeOf
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Return the type of <value> as a string
 *       Types are one of:
 *          - "string" 
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number" 
 *          - "boolean" 
 *          - "null"
 *          - "function"
 * Examples:
 * _.typeOf(134) -> "number"
 * _.typeOf("javascript") -> "string"
 * _.typeOf([1,2,3]) -> "array"
 */

_.typeOf = function(value) {

    if (typeof value === "string") return "string";
    if (Array.isArray(value)) return "array"; // an array is an objec, check before you check if value is object
    if (value === undefined) return "undefined"; // undefined is datatype, don't have to use typeof
    if (typeof value === "number") return "number";
    if (typeof value === "boolean") return "boolean";
    if (value === null) return "null"; // null is also datatype, don't have to use typeof
    if (typeof value === "function") return "function";
    if (typeof value === "object") return "object";

}

/** _.first
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the first element in <array>.
 *   3) Otherwise, return the first <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.first("ponies", 1) -> []
 *   _.first(["a", "b", "c"], "ponies") -> "a"
 *   _.first(["a", "b", "c"], 1) -> "a"
 *   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */

_.first = function(array, number) {

    if (!Array.isArray(array)) return [];
    if (!number || isNaN(number)) return array[0];

    let newArr = [...array];
    return newArr.splice(0, number); // if you use splice, use splice on clone
    // don't mutate the original array

}


/** _.last
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the last element in <array>.
 *   3) Otherwise, return the last <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */

_.last = function(array, number) {

    if (!Array.isArray(array) || number < 0) return [];
    if (!number || isNaN(number)) return array[array.length - 1];
    if (number > array.length) return array;

    let newArr = [...array]; // clone array because splice mutates array upon which it is called
    return newArr.splice(newArr.length - number, number);

}


/** _.indexOf
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return the index of <array> that is the first occurrance of <value>
 *   2) Return -1 if <value> is not in <array>
 *   3) Do not use [].indexOf()!
 * Edge Cases:
 *   1) What if <array> has multiple occurances of val?
 *   2) What if <val> isn't in <array>?
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */

_.indexOf = function(array, value) {

    for (let i = 0; i < array.length; ++i) {
        if (array[i] === value) return i;
    }

    return -1;

}

/** _.contains
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return true if <array> contains <value>
 *   2) Return false otherwise
 *   3) You must use the ternary operator in your implementation.
 * Edge Cases:
 *   1) did you use === ?
 *   2) what if no <value> is given?
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 */

_.contains = function(array, value) {
    let foundIt = false;

    for (let i = 0; i < array.length && !foundIt; i++) {
        foundIt = array[i] === value ? true : false;
    }

    return foundIt;
}


/** _.each
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) if <collection> is an array, call <function> once for each element
 *      with the arguments:
 *         the element, it's index, <collection>
 *   2) if <collection> is an object, call <function> once for each property
 *      with the arguments:
 *         the property's value, it's key, <collection>
 * Examples:
 *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
 *      -> should log "a" "b" "c" to the console
 */

_.each = function(collection, callback) {

    if (Array.isArray(collection)) {

        for (let i = 0; i < collection.length; ++i) {
            callback(collection[i], i, collection);
        }

    }
    else if (typeof collection === "object") {

        for (let key in collection) {
            callback(collection[key], key, collection);
        }

    }

}


/** _.unique
 * Arguments:
 *   1) An array
 * Objectives:
 *   1) Return a new array of all elements from <array> with duplicates removed
 *   2) Use _.indexOf() from above
 * Examples:
 *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */


_.unique = function(array) {

    let newArr = [];

    this.each(array, (element) => {
        if (!this.contains(newArr, element)) newArr.push(element); // have to use arrow function, if you use function keyword,
        // this refers to function, if you use arrow function, this refers to object
    });

    return newArr;

}


/** _.filter
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned true
 * Edge Cases:
 *   1) What if <function> returns something other than true or false?
 * Examples:
 *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 * Extra Credit:
 *   use _.each in your implementation
 */

_.filter = function(array, callback) {

    let newArr = [];

    this.each(array, function(element, index, array) {
        if (callback(element, index, array)) newArr.push(element);
    });

    return newArr;

}


/** _.reject
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned false
 *   3) This is the logical inverse if _.filter()
 * Examples:
 *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */

_.reject = function(array, callback) {

    let newArr = [];

    this.each(array, function(element, index, array) {
        if (!callback(element, index, array)) newArr.push(element);
    });

    return newArr;

}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, callback) {

    let testsTrue = [];
    let testsFalse = [];

    this.each(array, function(element, index, array) {
        if (callback(element, index, array)) testsTrue.push(element);
        else testsFalse.push(element);
    });

    return [
        testsTrue,
        testsFalse
    ];

}


/** _.map
 * Arguments:
 *   1) A collection
 *   2) a function
 * Objectives:
 *   1) call <function> for each element in <collection> passing the arguments:
 *        if <collection> is an array:
 *            the element, it's index, <collection>
 *        if <collection> is an object:
 *            the value, it's key, <collection>
 *   2) save the return value of each <function> call in a new array
 *   3) return the new array
 * Examples:
 *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */

_.map = function(collection, callback) {

    let newArr = [];

    this.each(collection, function(element, index, collection) {
        newArr.push(callback(element, index, collection));
    });

    return newArr;

}


/** _.pluck
 * Arguments:
 *   1) An array of objects
 *   2) A property
 * Objectives:
 *   1) Return an array containing the value of <property> for every element in <array>
 *   2) You must use _.map() in your implementation.
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */

_.pluck = function(objects, property) {
    return this.map(objects, object => object[property]);
}


/** _.every
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *      if <collection> is an array:
 *          current element, it's index, <collection>
 *      if <collection> is an object:
 *          current value, current key, <collection>
 *   2) If the return value of calling <function> for every element is true, return true
 *   3) If even one of them returns false, return false
 *   4) If <function> is not provided, return true if every element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
 *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */

_.every = function(collection, callback) {

    let allTrue = true;

    if (!callback) {

        this.each(collection, function(element) {
            if (!element) allTrue = false;
        });

    }
    else {

        this.each(collection, function(element, index, array) {
            if (!callback(element, index, array)) allTrue = false;
        });

    }

    return allTrue;

}


/** _.some
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *       if <collection> is an array:
 *        current element, it's index, <collection>
 *       if <collection> is an object:
 *        current value, current key, <collection>
 *   2) If the return value of calling <function> is true for at least one element, return true
 *   3) If it is false for all elements, return false
 *   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
 *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */

_.some = function(collection, callback) {

    let allTrue = false;

    if (!callback) {

        this.each(collection, function(element) { // can't use for loop cause each function processes arrays and objects appropriately
            if (element) allTrue = true;
        });

    }
    else {

        this.each(collection, function(element, index, array) {
            if (callback(element, index, array)) allTrue = true;
        });

    }

    return allTrue;

}


/** _.reduce
 * Arguments:
 *   1) An array
 *   2) A function
 *   3) A seed
 * Objectives:
 *   1) Call <function> for every element in <collection> passing the arguments:
 *         previous result, element, index
 *   2) Use the return value of <function> as the "previous result"
 *      for the next iteration
 *   3) On the very first iteration, use <seed> as the "previous result"
 *   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
 *   5) After the last iteration, return the return value of the final <function> call
 * Edge Cases:
 *   1) What if <seed> is not given?
 * Examples:
 *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
 */

_.reduce = function(array, callback, seed) {

    // let previousResult;

    // for (let i = 0; i < array.length; ++i) {

    //     if (i === 0) {

    //         if (seed) {
    //             previousResult = seed;
    //         }

    //         else if (!seed && (seed === 0 || seed === "")) {
    //             previousResult = seed;
    //         }

    //         else {
    //             previousResult = array[i];
    //             continue;
    //         }

    //     }

    //     previousResult = callback(previousResult, array[i], i);

    // }

    // return previousResult;

    let returnValue;

    if (seed !== undefined) {

        returnValue = seed;

        this.each(array, function(element, index, array) {
            returnValue = callback(returnValue, element, index, array);
        });

    }

    else {

        returnValue = array[0];

        this.each(array, function(element, index, array) {
            if (index !== 0) returnValue = callback(returnValue, element, index, array);
        });

    }

    return returnValue;

}

/** _.extend
 * Arguments:
 *   1) An Object
 *   2) An Object
 *   ...Possibly more objects
 * Objectives:
 *   1) Copy properties from <object 2> to <object 1>
 *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
 *   3) Return the update <object 1>
 * Examples:
 *   var data = {a:"one"};
 *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
 */

_.extend = function(obj1, obj2, ...remainingObjs) {

    for (let key in obj2) {
        obj1[key] = obj2[key];
    }

    if (remainingObjs) {

        for (let obj of remainingObjs) {

            for (let key in obj) {
                obj1[key] = obj[key];
            }
        }
    }

    return obj1;

}

// Creates a version of the function that can only be called one time. 
// Repeated calls to the modified function will have no effect, returning the value from the original call. 
// Useful for initialization functions, instead of having to set a boolean flag and then check it later.


_.once = function (callback) {

    let canInvoke = true;
    let returnValue;

    return function () {

        if (canInvoke) {
            returnValue = callback();
            canInvoke = false;
        }
        
        return returnValue;

    }
}

_.shuffle = function (array) {

    // Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.

    let newArr = [];

    for (let i = array.length - 1; i >= 0; --i) {
        newArr.push(array.splice(Math.floor(Math.random() * i), 1)[0]);
    }

    return newArr;

}

_.sortBy = function (list, iteratee) {

    // Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. 
    // iteratee may also be the string name of the property to sort by (eg. length). This function uses operator < (note).

    if (typeof iteratee === "function") {

        return list.map(function (element) {
            return [element, iteratee(element)];

        }).sort(function (el1, el2) {
            return el1[1] - el2[1];

        }).map(function (element) {
            return element[0];
        });

    } else if (typeof iteratee === "string") {

        return list.map(function (element) {
            return [element, element[iteratee]];

        }).sort(function (el1, el2) {
            return el1[1].length - el2[1].length;

        }).map(function (element) {
            return element[0];
        });

    }

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
