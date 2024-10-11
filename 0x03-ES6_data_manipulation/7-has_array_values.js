export default function hasValuesFromArray(set, arra) {
  return arra.every((value) => set.has(value));
}
