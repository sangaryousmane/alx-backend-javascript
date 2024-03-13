
interface DirectorInterface {
 workFromHome(): string;
 getCoffeeBreak(): string;
 workDirectorTasks(): string;
}

interface TeacherInterface {
 workFromHome(): string;
 getCoffeeBreak(): string;
 workTeacherTasks(): string;
}

class Director implements DirectorInterface {
 
 workFromHome(): string {
 return "Working from home";
 }

 getToWork(): string {
 return "Getting a coffee break";
 }

 workDirectorTasks(): string {
 return "Getting to director tasks";
 }

}

class Teacher implements TeacherInterface {
 workFromHome(): string {
 return "Cannot work from home";
 }

 getCoffeeBreak(): string {
 return "Cannot have a break";
 }

 workTeacherTasks(): string {
 return "Getting to work";
 }
}

const createEmployee: Teacher | Director = (salary: number | string) => {
 
 if ((typeof salary === "number") && (salary < 500)) {
    return new Teacher();
   } else {
    return new Director();
   }
}

const isDirector = (employee?: Director) => {
 return typeof employee === Director;
}

const executeWork = (employee) => {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  }
  else {
   employee.workTeacherTasks();
  }
}


