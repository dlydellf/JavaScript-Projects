// Step 141:
var globalVariable = "is"; // Variable's scope is global, throughout the main.js

function global() {
  var localVariable = "isn't"; // Variable's scope is LOCAL to this function only
  console.log(`This ${globalVariable} a global variable.`);
}
function local() {
  console.log(`This ${localVariable} a global variable`); // References a variable tat's unavailable because of its local scope
}
global();
// local();
