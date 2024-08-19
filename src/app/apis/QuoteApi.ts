const proxyUrl = "https://api.allorigins.win/get?url=";
const targetUrl = encodeURIComponent("https://zenquotes.io/api/quotes/");

export default async function fetchQuotes() {
  try {
    const response = await fetch(proxyUrl + targetUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const quotes = JSON.parse(data.contents);
    return quotes;
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return [];
  }
}
