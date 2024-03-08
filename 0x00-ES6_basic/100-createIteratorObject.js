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
        }
        employeeIndex = 0;
        departmentIndex += 1;
        return this.next();
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
