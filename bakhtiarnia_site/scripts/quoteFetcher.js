const fallbackQuotes = {
    'en': {quote: 'Not all those who wander are lost.', author: 'J.R.R. Tolkien'},
    'fa': {quote: 'آن‌هایی که سرگردانند، همه گم نشده‌اند.', author: 'جی. آر. آر. تالکین'},
    'fr': {quote: 'Ce ne sont pas tous ceux qui errent qui sont perdus.', author: 'J.R.R. Tolkien'}
};

function fetchQuote() {
    let lang = document.documentElement.lang; // Get language from HTML tag
    let fallbackQuote = fallbackQuotes[lang] || fallbackQuotes['en']; // Get fallback quote for the language

    Papa.parse(`/assets/data/quotes-${lang}.csv`, {
        download: true,
        header: true,
        complete: function(results) {
            const quotes = results.data
                .map(row => ({quote: row.quote, author: row.author}))
                .filter(quote => quote.quote !== '' && quote.author !== ''); // Filter out empty quotes
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex] || fallbackQuote;
            document.querySelector('.quote-text').textContent = quote.quote;
            document.querySelector('.author-quote').textContent = quote.author;
        },
        error: function() {
            console.error('Error reading CSV file');
            document.querySelector('.quote-text').textContent = fallbackQuote.quote;
            document.querySelector('.author-quote').textContent = fallbackQuote.author;
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchQuote);
