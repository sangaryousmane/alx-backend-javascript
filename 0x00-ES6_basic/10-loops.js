export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    array.push(vappendString + value);
  }
  return array;
}
