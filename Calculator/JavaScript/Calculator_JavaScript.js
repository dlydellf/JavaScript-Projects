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
  const {
    Display_Value, Wait_Second_Operand
  } = Calculator
  /*  Checks if "Wait_Second_Operand" == TRUE, and sets "Display_Value"
  to the key that was clicked */
  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit
    Calculator,.Wait_Second_Operand = false
  } else {
    /* Overwrites Display_Value if the current value is "0":
    otherwise, it adds onto it: */
    Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit
  }
}