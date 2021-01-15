/**
 * Loops
 * -----
 * Loops are used to execute a line or block of code repeatedly. They are most 
 * frequently used to interate over or step through an array and perform the 
 * same action or set of actions on every element in the array. They are used
 * to process data.
 * 
 * There are two different kinds of loops: while loops and for loops. While
 * loops are used when the number of iterations is unknown prior to execution of
 * the loop. For loops are used when the number of iterations is known prior to
 * execution of the loop.
 * 
 * While loops use the following syntax. Note that the loop control variable is
 * initialized prior to the while keyword. The loop control variable is then
 * tested. If the loop control variable tests true, the loop body executes. The 
 * loop control variable is altered in the loop body. As soon as the loop 
 * control variable tests false, the program executes the line following the 
 * loop body.
 */
 
 let count = 0;
 
 while (count <= 10) {
    console.log(count); // zero through ten is output to console
    ++count;
 }
 
count = 10;
 
 while (count >= 0) {
    console.log(count); // ten through zero is output to console
    --count;
 }
 
/**
 * While loops continue to execute until the loop control variable tests false. 
 * As such, if the loop control varable is not altered, the loop will execute
 * infinitely. If the loop control variable is never true, the loop will never 
 * execute.
 * 
 * A for loop uses the following syntax. Note that, like a while loop, the loop
 * control variable is initialized, tested, and altered at the end of every
 * iteration. The compact syntax is prefered by developers to that of the while
 * loop. For loops should be used when the index will be referenced in the loop
 * body.
 */
 
 for (let i = 0; i < 10; ++i) {
     console.log(`Iteration number ${i}`)
 }
 
 /**
  * For loops can use a decrementing loop control variable, as well. This allows
  * us to step backwards through an array. Note the second and third arguments
  * in the following code sample. The number against which we are testing the
  * loop control variable is less than the value to which it was initialized.
  * The loop control variable is decremented by one at the end of every
  * iteration.
  */
  
  let dogs = ["robbie", "misty", "sara", "oliver", "kira"];
  
  // i is initialized to the length of the array minus one because
  // arrays are zero indexed
  
  // the loop is repeated as long as i is greater than or equal to 
  // zero so we can access the first element in the array
  for (let i = dogs.length - 1; i >= 0; --i) {
      console.log(`${dogs[i]} was a good dog`)
  }
 
 /**
  * For loops come in additional flavors: for of and for in. For of loops step
  * through every element in an array. They should be used when the index of the 
  * loop is not used in the loop body. They should be used because they syntax
  * is easier to understand. The syntax follows:
  */
  
  let colors = ["red", "orange", "yellow", "green", "blue"];
  
  for (let color of colors) {
      console.log(color); // can refer to element as color, not colors[i]
  }
  
  /** For in loops allow us to examine every key contained in an object and 
   * reference that key. The key can be used to access the value associated with
   * that key. They use the following syntax. Note that when accessing the value 
   * no quotation marks surround key because key is a string.
   */
   
   let person = {
     name: "Jon",
     age: 32,
     canDriveWell: false
   };
   
   for (let key in person) {
       console.log(`${key}: ${person[key]}`)
   }