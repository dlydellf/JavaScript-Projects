// This function gets the task from input:
function get_todos() {
  // This creates an array of tasks that are inputed:
  var todos = new Array();
  // This pulls the task that was saved in the web browser's memory:
  var todos_str = localStorage.getItem("todo");
  /* If !input == null, then "JSON.parse()" will communicate with the web browser to make the task a JS object: */
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}
/* This function adds the inputed task to the "get_todos()" array: */
function add() {
  // This takes the inputed task & creates a variable of it: */
  var task = document.getElementById("task").value;
  var todos = get_todos();
  // This adds a new task to the array's end:
  todos.push(task);
  // This converts the task input to a JSON string:
  localStorage.setItem("todo", JSON.stringify(todos));
  document.getElementById("task").value = "";
  show();
  return false;
}

// This function keeps the tasks permanetly displayed on the screen:
function show() {
  // This sets the task that was retrieved as a vaariable:
  var todos = get_todos();
  // This sets up each task as an unordered list:
  var html = "<ui>";
  // This displays a task to the list in the order that it was inputed:
  for (var i = 0; i < todos.length; i++) {
    /* This also displays the task as a list, and creates the button with the "x": */
    html += `<li> ${todos[i]} <button class="remove" id= ${[i]} >x</button></li>`;
  }
  html += "</ui>";
  // This displays the task as a list:
  document.getElementById("todos").innerHTML = html;
}
// This displays the inputed task when the "Add Item" button is clicked:
document.getElementById("add").addEventListener("click", add);
// This will keep the inputs displayed permanently on the screen:
show();
