var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength : function() {
    console.log(this.name.length);
  },
  alertEmp : function() {
    alert("Employee name: " +
            this.name +
            " Employee Job: "
            + this.job +
            " Employee age: "
            + this.age);
  },
  printLastName : function() {
    var lastName = this.name.split(" ")[1];
    console.log(lastName);
  }
}
