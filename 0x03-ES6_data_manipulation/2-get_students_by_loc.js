export default function getStudentsByLocation(stud, city) {
  return stud.filter((obj) => obj.location === city);
}
