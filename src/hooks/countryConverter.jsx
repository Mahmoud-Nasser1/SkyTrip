export default function countryConverter(city) {
  if (!city) return "";

  const code = city.replace(/\s+/g, "").slice(0, 3).toUpperCase();

  return `${city} (${code})`;
}
