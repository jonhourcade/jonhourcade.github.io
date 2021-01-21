/**
 * Functions
 * ---------
 * A function is a reusable block of code that peforms one task. Functions 
 * generally accept input, do something to that input, and return the input. 
 * Functions also accept input, so something based on that input, and return 
 * the value based on that input. Functions encapsulate logic.
 * 
 * Functions are similar to loops in that they allow us to avoid repeatd code.
 * However, loops are used to iterate over data structures and peform the same
 * action or set of actions on every element in the data structure. Functions 
 * perform a specific task. Many loops call functions in their loop body and 
 * many functions loop over a data structure in their function body.
 * 
 * Before a function can be called, it must be defined. Function definitions use 
 * the reserved keyword function followed by the name of the funtion. Function 
 * definitions are hoisted. When an anonymous or arrow function is set equal to
 * a variable, this is known as a function expression. If the function is set 
 * equal to a variable declared using the keyword var, the variable name is 
 * hoisted and set to undefined.
 */

function yell(message) { // function definition, name of the funtion is yell
    console.log(message.toUpperCase());
}

const speakNormally = function(message) { // function expression, anonymous
    // function is set equal to the variable, speakNormally
    console.log(message);
}

const whisper = (message) => { // function expression, arrow function is set
    // equal to the variable whisper
    console.log(message.toLowerCase());
}

/**
 * When a function is defined, the values enclosed in the parenthesis are known
 * as its parameters. When a function is invoked, the values passed into the
 * function are known as arguments. Functions may or may not accept parameters.
 * They may also accept optional parameters. Functions may or may include a 
 * return keyword. If no return statment is included, undefined is returned
 * from the function. The previous functions require one parameter, message.
 */

/**
 * To invoke a function, the name of the function or variable that references a
 * function is followed by a pair of parenthesis. If the function definition 
 * includes parameters, the arguments should be included between the pair of
 * parenthesis.
 */

function getGreeting(salutation, name) { // function definition that accepts
    // multiple parameters
    if (name) { // if name has been provided
        return `${salutation}, my name is ${name}.`; // return template literal
    }
    else return salutation; // if name has not been provided return salutation
}

const getGoodbye = () => { // function expression that accepts no parameters
    // arrow function is used
    return "See ya later, alligator!"; // keyword return is used to return 
    // string from the function
};

/**
 * Variables declared using the let and const keywords are only visible in the
 * function body. A variable declared using the keyword var is visible after
 * the function body ends. You can declare a variable in a function body that
 * has the same name as a variable with global scope. If you do so, the local
 * variable has precedence. Any reference to this variable will reference the 
 * local variable. If a function has an inner function, the inner function can
 * reference variables declared in both the parent and grandparent scope. The 
 * parent grandparent and parent scope do not have access to variables
 * declared in the innner function.
 */

let boardgame = "risk";

function outputFavoriteBoardgame() {
    console.log(boardgame); // function has access to boardgame variable
    // boardgame has global scope
    // boardgame is in parent scope
}

outputFavoriteBoardgame(); // function invoked, risk output to console

function outputLeastFavoriteBoardgame() {
    let boardgame = "candyland"; // local boardgame variable has precedence
    // over global boardgame variable
    console.log(boardgame);
}

outputLeastFavoriteBoardgame(); // function invoked, candyland output to console

function outputOkayBoardgame() {
    let boardgame = "candyland"; // has precedence over global variable that
    // shares name

    function innerFunction() {
        let boardgame = "backgammon"; // has precedence over local variable
        // that shares name
    }

    innerFunction();

}

outputOkayBoardgame(); // function invoked, backgammon output to the console

/**
 * Closure allows programmers to keep dynamic variables alive after the
 * function has executed. This is especially useful an outer function returns
 * an inner function that references a parameter passed into the outer
 * function
 */

function callMeByMyName(name) {

    return function() {
        console.log(name, name, name, name, name);
    };
}

let callFunc = callMeByMyName("jonathan");

// callFunc = function() { console.log(jonathan, jonathan, jonathan, 
//     jonathan, jonathan); };

callFunc(); // outputs jonathan jonathan jonathan jonathan jonathan
// to the console

/**
 * Closure also mimics the private access modifier found in other
 * programming languages. It prevents client code from having direct access
 * to instance variables. The only way to access instance variables is
 * through methods that have been added to the object. Factory functions are
 * often used to return objects that have methods that have access to
 * private variables.
 */

function createUser(theAge, theSex, theLocation) {

    let age = theAge;
    let sex = theSex;
    let location = theLocation;

    return {

        getAge() {
            return age;
        },

        getSex() {
            return sex;
        },

        getLocation() {
            return location;
        }
    };
}

/**
 * When the createUser function is invoked, a user object is returned. The only
 * way to access the age, sex, and location variables is through the getAge, 
 * getSex, and getLocation methods.
 */
 
let user = createUser(32, "male", "new orleans");

console.log(user.age);  // will throw an error, age is not a property of user
// object

console.log(user.getAge()); // 32 output to console

