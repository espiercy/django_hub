var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var age = prompt("Enter Your Age");
var height = prompt("Enter Your Height in centimeters");
var petName = prompt("Enter a pet name.");

if (firstName[0] === lastName[0] &&
    age > 20 &&
    age < 30 &&
    height >= 170 &&
    petName[petName.length - 1] === "y") {
      console.log("secret");
    }
else{
  console.log("no secret");
}
