export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }

  set name(name) {
    this._name = name;
  }

  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._code;
  }
}
