/**
 * Variables
 * ---------
 * Variables are named containers that store store data. They store values in 
 * the case of primitive data types (examples: numbers, strings, booleans) and 
 * references in the case of complex datatypes (objects, arrays, and functions).
 * 
 * Variables allow developers to create dynamic programs that produce different
 * output given different input. They also result in source code that is easier
 * to maintain and understand.
 * 
 * Before a variable can be referenced in an application, the variable must be
 * declared. A variable declaration reserves a location in memory for the value
 * or reference assigned to the varaible. Variable declarations follow this 
 * syntax:
 */
 
 var num;
 let string;
 const boolean;
 
 /**
  * A variable that has been declared but not assigned a value or reference is
  * undefined. The assignment operator is used to assign a value or reference to
  * the variable. The assignment operator is the single equals sign. The right 
  * operand is assigned to the left operand. Variable assignments follow this
  * syntax. They are reassigned using the same syntax:
  */
  
  num = 1;
  string = "string of text";
  boolean = true;
  
  /** 
   * Var Versus Let Versus Const
   * ---------------------------
   * The keyword let should be used with a variable that will be reassigned 
   * during the life of the program. Lets can be declared in one line of code 
   * and initialized later in the code.
   * 
   * The keyword const should be used with a variable will not be reassigned 
   * during the life of the program. Consts must be declared and initialized in 
   * the same line of code. Variabled declared with the keyword const cannot
   * be reassigned. An error will be thrown if the program attempts to do so.
   * 
   * The keyword var was used to declare variables (both static and dynamic) 
   * prior to the introduction of let and const. It is found in legacy code but 
   * should not be used.
   * 
   * Hoisting
   * -------
   * When an application runs, the Javascript intepreter scans the file. It
   * finds all varaibles defined using the keyword var and all function
   * declarations. These variables and functions are "hoisted" to the top of the 
   * file. After this is complete, the Javascript interpreter begins to execute 
   * the file from the top to the bottom of the file.
   * 
   * Variables declared with keywords let and const are not hoisted. Function
   * expressions (functions assigned to varaibles) are not hoisted, as well. If
   * a function is set equal to a variable declared with they keyword var, only
   * the declaration will be hoisted. The variable will be undefined until the
   * line of code that assigns the function to the varaible.
   * 
   * Hoisting allows us to organize our Javascript files. We can group our
   * function definitions together instead dispersing them throughout the
   * file. This adds to the readability of a program.
   * 
   * Note: even if the var keyword is used, a variable should always be defined
   * before it is referenced in a program.
   */
   
   