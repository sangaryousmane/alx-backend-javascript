export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let employeeIndex = 0;
  let departmentIndex = 0;

  return {
    next() {
      if (departmentIndex < departments.length) {
        const department = departments[departmentIndex];
        const employees = report.allEmployees[department];

        if (employees && employeeIndex < employees.length) {
          return { value: employees[employeeIndex++], done: false };
        } else {
          employeeIndex = 0;
          departmentIndex++;
          return this.next(); 
        }
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}

