export function getDateDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Calculate the difference in milliseconds
  const diffInMs = d1 - d2;

  // Convert milliseconds to days
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24)) - 1;
}

export function formatDate(dateString) {
  const date = new Date(dateString);

  // Get day and month
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });

  // Function to add ordinal suffix (st, nd, rd, th)
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Covers 11th-13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinalSuffix(day)} ${month}`;
}
