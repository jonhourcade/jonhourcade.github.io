/**
 * String Manipulation
 * -------------------
 * User input often enters an application through the keyboard as a string.
 * Users are prone to error. As such, strings should be converted into a
 * standard format prior to use in an application. For this reason, many useful
 * methods are available to format strings. Remember, strings are immutable. The
 * return value of the sting should be reassigned to the string upon which the 
 * method was called.
 * 
 * The toUpperCase method returns a string with every character capitalized. The
 * toLowerCase method returns a string with every character non-capitalized.
 * These methods can be used to properly format names (every first character 
 * should be capitalized, every subsequent letter should be lower case). They 
 * are also useful when characters or words need to be tested for equality but
 * capitalization does not matter.
 */
 
let string1 = "chicken parm";
let string2 = "Chicken Parm";

string2 = string2.toLowerCase();
console.log(string2); // string2 output to the console

string2 = "Chicken Parm";

let isEqual = string1.toUpperCase() === string2.toUpperCase();
console.log(isEqual); // true output to the console
 
/**
 * The concat method "adds" the string passed into the method to the string
 * that the concat method is called upon (the string before the dot). The same
 * effect can be achieved using the plus operator (+) or the add and assign 
 * operator (+=). When the concat method or addition operator is used, the 
 * return value must be reassigned to the string upon which the method was
 * called upon.
 */
 
let firstName = "Matthew";
let middleName = "Paige";
let lastName = "Damon";

let fullName = firstName.concat(" ").concat(middleName); // method chaining used
// add space between first and middle name
console.log(fullName); // Matthew Paige output to console

fullName += " ";
console.log(fullName); // "Mathew Paige " output to console (note space added to
// end of string)

fullName = fullName + lastName;
console.log(fullName); // Matthew Paige Damon output to console

/**
 * The include method checks whether the string passed into the method is 
 * contained in the string upon which the method is called. True is returned if
 * the calling string contains the argument and false is returned if the calling
 * string does not contain the argument.
 */
 
 let email1 = "bender@planetexpress.com";
 let email2 = "drz@hotmail.com";
 
 function isPlanetExpressEmail(email) {
  return email.include("planetexpress.com");
 }
 
 console.log(isPlanetExpressEmail(email1)); // outputs true to console
 console.log(isPlanetExpressEmail(email2)); // outputs false to console
 
/** The substring and slice methods return a portion of the string upon which
 * the method was called. A starting index is passed into the method (remember
 * that strings are zero-based). An ending index can be passed into the method.
 * The ending index is non-inclusive. It should be equal the index of the
 * character you would like to extract plus one. If no ending index is passed
 * into the method, all remaining characters in the string are returned.
 */
 
let names = [
 "stan marsh",
 "kyle broflovski",
 "eric cartman",
 "kenny mccormick"
 ];
 
 
let newNames = [];

newNames.push(names[0].substr(0,4));
newNames.push(names[1].slice(0,4));
newNames.push(names[2].substr(0,4));
newNames.push(names[3].slice(0,5));

console.log(newNames); // outputs ["stan","kyle", "eric", "kenny"] to the 
// console
 
/**
 * The indexOf method is similar to the include method. It checks whether or not
 * a string passed into the array is contained in the string upon which the 
 * method was called. It returns the index of the first instance of string 
 * passed into the method as an argument if more than one instance exists. It 
 * returns -1 if the string passed into the method as an argument does not 
 * exist. This method could be used in conjunction with other string 
 * manipulation methods such as substring or slice when a dynamic index is 
 * required.
 */
 
 let email3 = "hank@stricklandpropane.com";
 let username = email3.substr(0,email3.indexOf("@"));
 console.log(username); // outputs hank to the console
 
/**
 * The split method breaks converts a string into an array of strings based
 * on delimiter passed into the method. If an empty string is passed into the
 * method, an array of characters is returned. If a space is passed into the 
 * method, an array of words is returned. If a \n is passed into the method,
 * an array of paragraphs is returned.
 * 
 * This method is especially useful when combined with the Array class join
 * method. The join method joins an array of strings with a delimter passed into
 * the method. A string can be split. The resulting array can iterated over and 
 * processed. The processed array can be joined using the delimter supplied to
 * the split method.
 */
 
 let title = "hard boiled wonderland and the end of the world";
 
 let words = title.split(" "); // title split on spaces
 
 for (let i = 0; i < words.length; ++i) {
  
  let chars = words[i].split(""); // word split into characters
  
  for (let j = 0; j < chars.length; ++j) {
   // characters formatted based on index
   if (j === 0) chars[j] = chars[j].toUpperCase();
   else chars[j] = chars[j].toLowerCase();
  }
  
  words[i] = chars.join("") //characters joined back into words
  
 }
 
 title = words.join(" "); // words joined with spaces
 
 console.log(title); // Hard Boiled Wonderland And The End Of The World
 // output to console