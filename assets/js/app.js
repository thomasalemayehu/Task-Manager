// Define UI Variables
const taskInput = document.querySelector("#task"); //the task input text field
const form = document.querySelector("#task-form"); //The form at the top
const filter = document.querySelector("#filter"); //the task filter text field
const taskList = document.querySelector(".collection"); //The ul
const clearBtn = document.querySelector(".clear-tasks"); //the all task clear button
const ascSorting = document.querySelector(".ascending-sort");
const descSorting = document.querySelector(".descending-sort");

const sorters = document.querySelectorAll(".sorters");

const reloadIcon = document.querySelector(".fa");

// Add Event Listener [Form , clearBtn and filter search input ]
// form submit
form.addEventListener("submit", addNewTask);
// Clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);
// Filter Task
filter.addEventListener("keyup", filterTasks);
// Clear Icon
taskList.addEventListener("click", removeTask);
// Event Listener for reload
reloadIcon.addEventListener("click", reloadPage);
// Add Event listener for descending
descSorting.addEventListener("click", sortEventD);
ascSorting.addEventListener("click", sortEventA);
// sorters.addEventListener("click", sortEvent);
// Add New  Task Function definition
function addNewTask(e) {
  e.preventDefault(); //disable form submission

  // Check empty entry
  if (taskInput.value === "") {
    taskInput.style.borderColor = "red";

    return;
  }

  // Create an li element when the user adds a task
  const li = document.createElement("li");
  // Adding a class
  li.className = "collection-item";

  // Create text node and append it
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new element for the link
  const link = document.createElement("a");
  // Add class and the x marker for a
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li

  const spanDate = document.createElement("span");
  spanDate.className = "span-date";
  spanDate.style.display = "none";
  // spanDate.style.display = "none";

  let today = new Date();

  const dateText = document.createTextNode(
    today.getFullYear() +
      "-" +
      today.getMonth() +
      "-" +
      today.getDate() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds()
  );
  spanDate.appendChild(dateText);
  li.appendChild(spanDate);
  li.appendChild(link);

  // Append to UL
  taskList.appendChild(li);
}

// Clear Task Function definition
function clearAllTasks() {
  tasksHTML = taskList.innerHTML;
  taskList.innerHTML = "";
}

// Remove Task function definition
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure about that ?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
// Reload Page Function
function reloadPage() {
  //using the reload fun on location object
  location.reload();
}
// Filter tasks function definition
function filterTasks(e) {
  let searchItem = filter.value;
  let collectionItems = document.querySelectorAll(".collection-item");
  collectionItems.forEach((item) => {
    if (item.textContent.indexOf(searchItem)) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}

// Sorting Calling Function
function sortEventD() {
  const spanDate = document.querySelectorAll(".span-date");
  const taskDates = Array.from(spanDate);
  const dates = bubbleSortD(taskDates);
  taskList.innerHTML = "";
  dates.forEach((date) => {
    taskList.appendChild(date.parentElement);
  });
}

function sortEventA() {
  const spanDate = document.querySelectorAll(".span-date");
  const taskDates = Array.from(spanDate);
  const dates = bubbleSortA(taskDates);
  taskList.innerHTML = "";
  dates.forEach((date) => {
    taskList.appendChild(date.parentElement);
  });
}
function bubbleSortD(arr) {
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j - 1].innerText < arr[j].innerText) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSortA(arr) {
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j - 1].innerText > arr[j].innerText) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Materialzie Dropdown
$(".dropdown-trigger").dropdown();
