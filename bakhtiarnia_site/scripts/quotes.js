document.addEventListener('DOMContentLoaded', function() {
  const lang = document.documentElement.lang; // Reads the lang attribute from the <html> tag
  let quotesFile = '';

  switch(lang) {
    case 'en':
      quotesFile = '/assets/data/quotes_en.json';
      break;
    case 'fr':
      quotesFile = '/assets/data/quotes_fr.json';
      break;
    case 'fa':
      quotesFile = '/assets/data/quotes_fa.json';
      break;
    default:
      quotesFile = '/assets/data/quotes_en.json'; // Default to English if no match
  }

  fetch(quotesFile)
    .then(response => response.json())
    .then(data => {
      const quotesArray = data.quotes;
      const randomIndex = Math.floor(Math.random() * quotesArray.length);
      const quote = quotesArray[randomIndex];
      document.querySelector('.quote-text').textContent = quote.quote;
      document.querySelector('.author-quote').textContent = quote.author;
    })
    .catch(error => console.error('Error:', error));
});
