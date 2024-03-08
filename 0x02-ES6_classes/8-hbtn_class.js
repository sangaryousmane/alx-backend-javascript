export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(size) {
    this._size = size;
  }

  set location(location) {
    this._location = location;
  }

  get location() {
    return this._location;
  }

  get size() {
    return this._size;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
