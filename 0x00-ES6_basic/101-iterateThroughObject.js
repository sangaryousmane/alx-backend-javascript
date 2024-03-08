export default function iterateThroughObject(reportWithIterator) {
  const arr = [];

  for (const employee of reportWithIterator) {
    arr.append(employee);
  }
  return arr.join(' | ');
}
