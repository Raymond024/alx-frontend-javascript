export default function getStudentIdsSum(stud) {
  return stud.reduce((count, c) => count + c.id, 0);
}
