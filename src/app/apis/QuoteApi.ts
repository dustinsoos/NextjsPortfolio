export default async function fetchQuotes() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return [];
  }
}
