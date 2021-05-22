// Creates an object that keeps track of values:
const Calculator = {
  // Displays "0" on the screen:
  Display_Value: "0"
  // Holds the 1st operand for any expressions; set to "NULL" for now:
  First_Operand: null
  // Checks whether or not the 2nd operand has been input:
  Wait_Second_Operand: false
  // Holds the operator; set to "NULL" for now:
  operator: null
}

// Modifies values each time a button is pressed:
function Input_Digit(digit) {
  // Destructures two properties from the "Calculator" object:
  const {
    Display_Value, Wait_Second_Operand
  } = Calculator
  /* If Wait_Second_Operand === TRUE, Display_Value is set
  to the key that was clicked */
  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit
    Calculator.Wait_Second_Operand = false
  } else {
    /* Overwrites Display_Value if its current value is "0":
    otherwise, it adds onto it: */
    Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit
  }
}

//This section handles decimal points:
function Input_Decimal(dot) {
  /* Ensures that accidentially clicking the decimal point
  doesn't cause bugs in your operation: */
  if (Calculator.Wait_Second_Operand === true) 
    return;
  if (!Calculator.Display_Value.includes(dot)) {
    // if Display_Value doesn't already contain a decimal point, add one
    Calculator.Display_Value += dot
  }
}