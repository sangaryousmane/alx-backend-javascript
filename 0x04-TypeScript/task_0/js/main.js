var student1 = {
    firstName: "Francis",
    lastName: "George",
    age: 34,
    location: "Gaborone"
};
var student2 = {
    firstName: "Jacob",
    lastName: "Pratt",
    age: 29,
    location: "Freetown"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
document.body.appendChild(table);
