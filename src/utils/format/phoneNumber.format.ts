export function formatPhoneNumber(number: string) {
  const cleanedNumber = number.replace(/\D/g, "");
  const formattedNumber = cleanedNumber.replace(
    /(\d{2})(\d{1,5})(\d{0,4})/,
    (match, ddd, firstDigits, lastDigits) => {
      let formatted = `(${ddd})`;
      if (firstDigits) {
        formatted += ` ${firstDigits}`;
      }
      if (lastDigits) {
        formatted += `-${lastDigits}`;
      }
      return formatted;
    }
  );
  return formattedNumber;
}
