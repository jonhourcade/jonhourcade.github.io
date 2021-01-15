/**
 * Operators
 * ---------
 * An operator is a symbol that represents an action or a process (source: 
 * https://www.techopedia.com/definition/3485/operator-programming). 
 * 
 * The single equals sign is the assignement operator. The assignment operator
 * is used to initialize and reassign variables. The right operand (the value or
 * reference to the right of the single equals sign) is assigned to the left
 * operand (the variable to the left of the single equals sign). The syntax
 * is as follows:
 */
 
 let name = "quasimodo";
 const gargoyles = ["victor", "hugo", "laverne"];
 
 /**
  * Arithmetic operators perform mathematical calculations on numerical data. A
  * numerical value is returned. The following binary arithmetic operators
  * perform common arithmetic operations:
  */
  
  let value1 = 5;
  let value2 = 10;
  
  let sum = value1 + value2;
  let difference = value1 - value2;
  let product = value1 * value2;
  let quotient = value1 / value2;
  
  let squareRoot = value1 ** (1/2); // if a value is raised to a fraction
                                    // the nth root is returned (n is equal to
                                    // the right operand)
                                    
  let squared = value1 ** 2; // if a value is raised to a whole number the value
                                // to the nth power is returned (n is equal to 
                                // the right operand)
                                
  let remainder = value1 % value2; // the modulus operator is very useful when 
                                    // determining if a number is odd or even
                                    // or if a number is divisible by another
                                    // number
                                    
/**
 * The increment unary operator adds one to a variable holding a whole number
 * and reassigns the variable to the new value. The decrement unary operator
 * subtracts one from the value held by the variable before reassignment. This
 * operator is commonly used in for loops to alter the loop control variable. 
 * The syntax follows:
 */
 
 let count = 0;
 count++;
 console.log(count); // 1 is output to console
 
 count = 10;
 count--;
 console.log(count); // 9 is output to console
 
 /** 
  * In the previous examples, the increment and decrement operators are the
  * only actions taking place in lines 53 and 57. As such, the operators can go 
  * in front of or behind the variable. The prefix increment operator is placed
  * in front of the variable. The variable is incremented and assigned before
  * it is used. The postfix increment operator is placed after the variable. The
  * variable is used before it is incremented and assigned.
  */
  
  count = 0;
  console.log(count++); // 0 is output
  console.log(count); // 1 is output
  
  count = 0;
  console.log(++count); // 1 is output
  console.log(count); // 1 is output
  
  /**
   * Comparison operators are used to compare two values. They return a true if
   * the comparison tests true and false if the comparison tests false. 
   * Comparison operators are often used in if statements and to test loop 
   * control variables.
   */
   
   value1 = 25;
   value2 = 50;
   let value3 = 25;
   
   // greater than tests true if the left operand is greater than the right 
   // operand
   if (value1 > value2) {/* statements to execute */ }
   
   // greater than or equal to tests true if the left operand is greater than or 
   // equal to the right operand
   if (value1 >= value2) {/* statements to execute */ }
   
   // less than tests true if the left operand is less than the right operand
   if (value1 < value2) {/* statements to execute */ }
   
   // less than or equal to tests true if the left operand is less than or equal
   // to the right operand
   if (value1 <= value2) {/* statements to execute */ }
   
   // stricly equals test true if the type and value of the left operand is 
   // equal to the type and value of the right operand
   if (value1 === value2) {/* statements to execute */ }
   
   // stricly not equals test true if the type and value of the left operand is 
   // not equal to the type and value of the right operand
   if (value1 !== value2) {/* statements to execute */ }
   
   /**
    * Equal to (==) and not equal to (!=) can be used to test if the value of
    * the left operand is equal or not equal to the value of the right operand.
    * Type is ignored. Use of these operators is not recommended.
    * 
    * Logical operators are used in conjunction with comparison operators and 
    * return values from functions to contorl program flow. Logical operators 
    * return a boolean value. The and operator (&&) tests true if the the 
    * boolean value to the left and right of the operator is true. If one or 
    * both operators is false, the and operator returns false. The or operator,
    * (||) returns true if one of the operands is true and false if none of the 
    * operandsd are true.
    * 
    * An exlusive or logical operator (xor) is not available in Javascript. 
    * Many languages do include an xor operator. This tests true if one operand
    * tests true and the other operand tests false.
    */
    
    let author = {
        first: "haruki",
        last: "murakami"    
    }
    
    // if first name is haruki and last name is murakami
    if (author.first === "haruki" && author.last === "murakami") {
        // this line of code will execute
        console.log(`${author.first} ${author.last} is a fantastic author.`);
    }
    
    let outfit = {
        top: "flannel shirt",
        bottom: "skinny jeans"
    }
    
    // if top is a flannel shirt or denim shirt
    if (outfit.top === "flannel shirt" || outfit.top === "denim shirt") {
        // this line of code will execute
        console.log("cool outfit!")
    } 
    
    /**
     * The not operator (!) reverses a boolean value. It is especially useful 
     * when combined with methods.
     */
     
     let shoppingList = [
         "chicken thighs",
         "eggs",
         "coffee",
         "bread",
         "peanut butter"
         ];
         
     // includes is a method that returns true if the array on which the method
     // is called upon includes the value or reference passed into the method
     
     // the method would return true if the list includes beer
     // the ! reverses the meaning of the if statement
     // it now returns true if the list DOES NOT include beer
     if (!shoppingList.includes("beer")) {
         console.log("beer is not included in the shopping list")
     }
     
     /**
      * Binary operators require two operands, a left operand and a right
      * operand. Every operator mentioned except for !, ++, and -- are binary
      * operators.
      * 
      * Unary operators require one operand. The typeof operator returns a
      * string value equal to the type of the value to the right of the
      * operator. This operator is often combined with a comparison operator.
      */
      
      let program = "operation spark";
      
      // typeof program returns "string"
      // the binary strictly equals operator compares the return value of typeof
      // program with "string"
      if (typeof program === "string") {
          console.log("the program variable is of type string")
      }