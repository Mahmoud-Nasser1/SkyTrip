export default function timeConverter(time) {
  if (!time) return "";
  
  if (time.toLowerCase().includes("am") || time.toLowerCase().includes("pm")) {
    return time;
  }

  const [hour, minute] = time.split(":");
  const h = parseInt(hour, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12}:${minute} ${ampm}`;
}