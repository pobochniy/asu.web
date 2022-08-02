function dateFomat(date: Date) {
  if (!date) return "";
  return date.toISOString().split("T")[0];
}

export default dateFomat;
