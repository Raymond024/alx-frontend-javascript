export default function getListStudentIds(lis) {
  if (Array.isArray(lis)) {
    return lis.map((obj) => obj.id);
  }
  return [];
}
