export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = this._validateName(name);
    this.length = this._validateLength(length);
    this.students = this._validateStudents(students);
  }

  set name(name) {
    this._name = this._validateName(name);
  }

  set length(length) {
    this._length = this._validateLength(length);
  }

  set students(students) {
    this._students = this._validateStudents(students);
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  _validateStudents(students) {
    if (Array.isArray(students)) {
      return students;
    }

    throw new Error('Student is not an array');
  }

  _validateName(name) {
    if (typeof name === 'string') {
      return name;
    }
    throw new TypeError('Name must be a string');
  }

  _validateLength(length) {
    if (typeof length === 'number') {
      return length;
    }

    throw new TypeError('Length must be a number');
  }
}
