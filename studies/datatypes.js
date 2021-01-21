/**
 * Datatypes
 * ---------
 * 
 * Numbers hold numerical data that is used in arithmetic calulations. Numbers
 * can store integers or floating point values. Numbers are used in conjunction 
 * with arithmetic operators to return values of type number.
 * 
 * When storing floating point values, note that the value is an approximation. 
 * Special classes must be used when using floating point values that require 
 * high levels of exactness.
 * 
 * Number literals do not require punctuation. For example, declaring and 
 * initializing a variable that holds a numeric datatype uses the following
 * syntax:
 */
 
 let integer = 5;
 let floatingPoint = 1.33;
 
/**
 * Strings hold "strings" of characters. They can hold no characters (empty
 * string), one character, or more than one character. They most frequently
 * hold textual data.
 * 
 * When user input enters the program, it often enters through the keyboard.
 * This input must be parsed using built-in methods to convert it to a number
 * or boolean datatype.
 * 
 * Strings are immutable. When a string manipulation method is used, the 
 * variable must be reassigned the return value of the method.
 * 
 * String literals must be surrounded by single or double quotation marks. The
 * syntax follows:
 */
 
 let name = "jon";
name = name.concat(' hourcade'); // return value is reassigned to name
 
/**
 * Booleans store one of two keywords: true or false. They are frequently
 * used to control the flow of the program. Often, an if statement will test
 * a boolean value. If the variable is equal to true, the code block will
 * execute. If the variable is equal to false, the code block will not
 * execute. Loops often test a variable containing a boolean value to 
 * determine if the loop should continue to run. They syntax is as follows:
 */
 
 let shouldExecute = true;
 
 if (shouldExecute) {
  // code to execute
 }
 
 let shouldRepeat = true;
 
 while(shouldRepeat) {
  // code to execute
  shouldRepeat = false;
 }
 
/**
 * An array is used to store groups of common entities. Arrays can store 
 * primitive or complex datatypes. They can store arrays, as well. Arrays are
 * made up of elements. Elements can be accessed using bracket notation using 
 * the index of the element. An array can be iterated over or stepped through 
 * using a loop. 
 * 
 * Arrays are a complex datatype. As such, a variable that contains an array
 * does not contain an array. Instead, it contains a memory address where the 
 * array is located. If an array is assigned to a variable, that variable
 * receives the memory address where the original array is located. A change to
 * the second variable results in a change to the first variable. The syntax 
 * and examples follow:
 */
 
 let favTeams = ["cardinals", "blues", "babycakes", "gold"];
 
 let iterations = favTeams.length;
 let count = 0;
 
 while (count < iterations) {
  console.log(favTeams[count]);
 }
 
 for (let i = 0; i < favTeams.length; ++i) {
  console.log(favTeams[i]);
 }
 
 let favTeamsCopy = favTeams; // favTeamsCopy points to same array as favTeams
 favTeamsCopy.push("jesters"); // both arrays contain "jesters"
 
/**
 * objects model real world entities. They contain key/value pairs. The only
 * way to access a value is through the key. Objects are complex datatypes, as
 * well. When an object is assigned to a variable, the variable contains a 
 * reference to a location in memory. Object properties can contain primitive
 * datatypes as well as arrays and object.
 * 
 * To access a property, use dot or bracket notation. If the key is contained
 * in a variable, bracket notation must be used. A for in loop can be used to 
 * iterate over every property in an object. Syntax follows:
 */
 
 let pet = {
  species: "dog",
  breed: "dachshund",
  name: "oliver",
  nickname: "weasel"
 };
 
 name = pet.name;
 let breed = pet["breed"];
 
 let key = "species";
 let species = pet[key];
 
 for (let key in pet) {
  console.log(`${key}: ${pet[key]}`);
 }
 
/**
 * A function is a reusable block of code. It encapsulates the logic to
 * peform one task between curly braces. Functions are similar to loop in that 
 * they allow programmers to avoid repeated code. However, loops are typically
 * used to step through a data structure and perform the same action or set of
 * actions on every element. Functions are created when a program executes the
 * same block of code multiple times throughout the program. Many loops call 
 * functions in their loop body and many functions loop over data structures
 * in their function body.
 * 
 * Function definitions are hoisted. As such, they can be defined anywhere in 
 * the program and invoked before they are defined. This hoisting allows 
 * functions to be defined together at the beginning or end of the program 
 * resulting in more readable code. Note that function expressions are not 
 * hoisted.
 * 
 * Functions should perform one task. Their name should reflect the task they
 * perform. If a function peforms more than one task, another function should
 * be created that is called by the first function. Thoughtful function names
 * make programs self-documenting.
 */
 
 // function is defined
 function greet(name) {
  console.log(`Hello! I'm ${name}. What is your name?`);
 }
 
 // function is invoked
 greet("ramon");
 
/**
 * Uninitialized variables are equal to undefined. When a var or a function
 * expression is hoisted to the top of the program, it is set equal to undefined
 * until the line of code where it is initiailzed. A program can reference an 
 * undefined variable. However, it is best practice to initialize a variable 
 * before it is referenced.
 * 
 * Null is similar to undefined in that both types imply nothingness. However, 
 * variables are intentionally set to null by the programmer.
 */
 
 let bookTitle;
 console.log(bookTitle); // outputs undefined to the console
 
 bookTitle = "the sirens of titan";
 console.log(bookTitle); // outputs the sirens of titan to the console
 
 console.log(author); // outputs undefined to the console
 var author = "tom robbins";
 console.log(author) // outputs tom robbins to the console
 
// pets property is set to null to indicate lucy does not have any pets
// if pets property is is set to undefined, it is unclear whether the property
// has been set
let person = {
 name: "lucy",
 occupation: "librarian",
 pets: null
}

/**
 * Infinity and negative infinity result when a number (or a negative number) is 
 * divided by zero. Infinite values are typically errors. If your application
 * accepts user input in the form of numbers and divides one number by another
 * number, the application should confirm the denominator is not equal to zero
 * before proceeding.
 * 
 * Not a Number, denoted by NaN, results when an application attempts to perform
 * a faulty mathematical operation. For example, if an undefined variale is used
 * in a calculation or a string variable is added to a number.
 */
 
 console.log(1/0); // outputs Infinity to the console
 console.log(-1/0); // outputs Infinity to the console
 console.log(undefined * 10); // outputs NaN to the console
 console.log("hi there" - 15) // outputs NaN to the console
 
/**
 * Complex datatypes include objects, arrays, and functions. Primitive 
 * datatypes include all other datatypes discussed. When a variable is set
 * equal to a primative datatype, the variable holds a copy of that value. This
 * is possible because primative datatypes have a definite size.
 * 
 * Copmlex datatypes, by comparison, have an indefinite size. Objects can hold
 * an unlimited number of properties, arrays can store an unlimited number of 
 * elements, and functions can have as many or as few lines of code, as
 * necessary. As such, when a variable is set equal to a complex datatype, the 
 * variable holds a location in memory where the value is located. This is 
 * known as a reference or a pointer.
 * 
 * When a variable is set equal to a variable containing a primitive data type,
 * the value is copied into the new variable. Altering the new variable has no
 * effect on the first variable. When a variable is set equal to a variable 
 * containing a complex datatype, the new variable points at the same location
 * in memory as the first variable. Altering the value the second variable 
 * points at alters the value the first variable points at (they are pointing
 * at the same object).
 */
 
 let var1 = 5;
 let var2 = var1;
 var2 = 15;
 console.log(var1); // 5 is output to the console
 
 let obj1 = {
  name: "jon",
 };
 let obj2 = obj1;
 obj2.name = "jonthan";
 console.log(obj1.name); // jonathan is output to the console