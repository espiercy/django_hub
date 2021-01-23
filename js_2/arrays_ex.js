var roster = [];
var startApp = prompt("Would you like to start the roster web app? y/n")

function add() {
  var name = prompt("Enter the name you'd like to add to the roster.");
  roster.push(name);
}

function remove() {
  var name = prompt("Enter the name you'd like to remove to the roster.");
  var index = roster.indexOf(name);
  roster.splice(index, 1);
}

function display() {
  console.log(roster);
}

function applicationLoop(){
  var option = "";
  while (option !== "quit"){
    option = prompt("Please select an action: add, remove, display, quit");
    if (option === "add"){
      add();
    }
    else if (option === "remove" ){
      remove();
    }
    else if (option === "display"){
      display();
    }
  }

}

if (startApp[0] === "y") {
  applicationLoop();
}

alert("Thank you for using the roster app. Please refresh to restart.");
