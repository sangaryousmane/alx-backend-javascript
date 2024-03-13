interface Student {
 firstName: string,
 lastName: string,
 age: number,
 location: string
}

const student1: Student = {
 firstName: "Francis",
 lastName: "George",
 age: 34,
 location: "Gaborone"
};

const student2: Student = {
 firstName: "Jacob",
 lastName: "Pratt",
 age: 29,
 location: "Freetown"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

document.body.appendChild(table);
