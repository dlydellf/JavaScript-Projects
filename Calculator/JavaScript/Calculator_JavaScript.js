// Creates an object that keeps track of values:
const Calculator = {
  // Displays "0" on the screen:
  Display_Value: "0"
  // Holds the 1st operand for any expressions; set to "NULL" for now:
  First_Operand: null
  // Checks whether or not the 2nd operand has been input:
  Second_Operand: false
  // Holds the operator; set to "NULL" for now:
  operator: null
}

// Modifies values each time a button is pressed:
function Input_Digit(digit) {
  // Destructuring two properties from the "Calculator" object:
  const {
    Display_Value, Second_Operand
  } = Calculator
  /* If Second_Operand === TRUE, Display_Value is set
  to the key that was clicked */
  if (Second_Operand === true) {
    Calculator.Display_Value = digit
    Calculator.Second_Operand = false
  } else {
    /* Overwrites Display_Value if its current value is "0":
    otherwise, the presseed digit is added onto it: */
    Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit
  }
}

//This section handles the decimal point:
function Input_Decimal(dot) {
  /* Ensures that accidentially clicking the decimal point doesn't cause bugs in the operation: */
  if (Calculator.Second_Operand === true) 
    return;
  if (!Calculator.Display_Value.includes(dot)) {
    // If Display_Value doesn't already contain a decimal point, add one:
    Calculator.Display_Value += dot
  }
}

// This section handles operators:
function Handle_Operator(Next_Operator) {
  // Destructuring three properties from the "Calculator" object:
  const { First_Operand, Display_Value, operator } = Calculator
  /* Pressing an operator key converts the currently displayed number ("Display_Value") into a type=number, storing the result in Calculator.First_Operand (if it doesn't already exist): */
    const Value_of_Input = parseFloat(Display_Value)
    // If an operator already exists & Second_Operand === true, update the operator, then exit this (): */
    if (operator && Calculator.Second_Operand) {
      Calculator.operator = Next_Operator;
      return
    }
    if (First_Operand == null) {
      Calculator.First_Operand = Value_of_Input
    } else if (operator) {
      // Checks if an operator already exists:
      const Value_Now = First_Operand || 0;
      // If operator exists, property lookup is performed in the Perform_Calculation object & that operator's () is executed:
      let result = Perform_Calculation[operator](Value_Now, Value_of_Input)
      // A fixed number of numbers is added after the decimal:
      result = Number(result).toFixed(9)
      // Removes any trailing 0's:
      result = (result * 1).toString()
      Calculator.Display_Value = parseFloat(result)
      Calculator.First_Operand = parseFloat(result)
    }
    Calculator.Second_Operand = true
    Calculator.operator = Next_Operator
}

const Perform_Calculation = {
  "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
  "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
  "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
  "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
  "=": (First_Operand, Second_Operand) => Second_Operand
}