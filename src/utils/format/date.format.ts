export function formatDate(value: string) {
  const cleanedValue = value.replace(/\D/g, "");
  const formattedValue = cleanedValue.replace(
    /(\d{2})(\d{0,2})(\d{0,4})/,
    (match, day, month, year) => {
      let formatted = `${day}`;
      if (month) {
        formatted += `/${month}`;
      }
      if (year) {
        formatted += `/${year}`;
      }
      return formatted;
    }
  );
  return formattedValue;
}
