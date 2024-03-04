export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
	  value = appendString + value;
	  array.push(value);
  }
  return array;
}
