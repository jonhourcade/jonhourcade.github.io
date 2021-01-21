/**
* Control Flow
* ------------
* Programs execute from top to bottom. Conditional operators create branches in
* our code. They allow the code to follow a different path given the state of 
* the program. They are the "brain" of the program in that they give or program
* decision making capabilities.
* 
* If Statements
* -------------
* If statements test a condition. If the condition tests true action is taken.
* They also allow us to skip action if a condition tests true. They use the 
* following syntax:
*/
 
let condition1 = true;

if (condition1) {
 // first line of code to execute
 // ...
 // nth line of code to execute
}
 
/**
* If Else Statements
* ------------------
* If else statements also test a condition. If the condition tests true, the
* code block following the if statement executes. If the condition tests 
* false, the code block following the else keyword executes.
* 
* If else statements are similar to if statments in that a condition is
* tested. However, when an if statement tests false, no action is taken. When
* an if else statement tests false, action is taken.
* 
* If else statements use the following sytax. Note that there is no condition
* tested following the else keyword:
*/

let condition2 = true;

if (condition2) {
  // code to execute if condition tests true
} else {
  // code to execute if condition tests false
}
  
/**
* If Else If Statements
* ---------------------
* If else if statements allow us to test multiple conditions in sequence. The
* first time a condtion tests true, the corresponding code block executes. If 
* no if statment tests true, no action is taken. An optional else block can 
* be added to the if else if chain. If no if statement tests true and an else
* block is included in the chain, the else block executes.
* 
* If else if statements should be used when a program can take three or more 
* paths depending on the state of the program. They use the following syntax:
*/ 
   
condition1 = false;
condition2 = false;
let condition3 = true;

if (condition1) {
   // code block to execute if condition1 tests true
} else if (condition2) {
   // code block to execute if condition2 tests true
} else if (condition3) {
   // code block to execute if condition3 tests true
}

// the following code sample includes an optional else block

condition1 = false;
condition2 = false;
condition3 = false;

if (condition1) {
   // code block to execute if condition1 tests true
} else if (condition2) {
   // code block to execute if condition2 tests true
} else if (condition3) {
   // code block to execute if condition3 tests true
} else {
   // code block to execute if all if statements test false
}

/**
* Switch Statements
* -----------------
* If else if statments can become complex and difficult to read and
* understand quickly. Switch statements provide a syntactically clean way to
* test multiple conditions one after another and take action when a "case"
* tests true. They use the following syntax:
*/
    
let number = 3;
    
switch(number) {
    case 1:
        console.log("Number is equal to 1")
        break;
    case 2:
        console.log("Number is equal to 2")
        break;
    case 3:
        console.log("Number is equal to 3")
        break;
    case 4:
        console.log("Number is equal to 4")
        break;
    case 5:
        console.log("Number is equal to 5")
        break;
    default:
        console.log("Number is not equal to 1 through 5");
}
    
/**
 * The switch keyword is followed by the variable you want to examine
 * surrounded by parenthesis. If the variable is equal to the value
 * following the case keyword, the corresponding code executes until a break
 * statement is reached. If no break statement is included, every line of 
 * executable code will run. If the variable passed into the switch statment 
 * does not equal any of the values following the case keywords, the 
 * (optional) default block executes.
 */