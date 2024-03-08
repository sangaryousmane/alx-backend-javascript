export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string' && typeof length === 'number' && typeof students === 'array') {
      this.name = name;
      this.length = length;
      this.students = students;
    }
  }

  set name(name) {
    if (typeof name === 'string') this._name = name;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    }
  }

  set students(students) {
    if (typeof students === 'array') {
      this._students = students;
    }
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
}
