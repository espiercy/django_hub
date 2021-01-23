function hello(){
  console.log("hi");
}

function helloYou(name){
  console.log("hi " + name);
}

function addNum(num1, num2){
  console.log(num1 + num2);
}

function helloSomeone(name="Evan"){
  console.log("hi " + name);
}

function formal(name="Sam", title="Sir"){
  return title + " " + name;
}

function timesFive(numInput){
  var result = numInput * 5;
  return result;
}

var v = " GLOBAL V";
var stuff = "GLOBAL STUFF";

function fun(stuff){
  console.log(v);
  stuff = "Resassign stuff inside func";
  console.log(stuff);
}
