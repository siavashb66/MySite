const fallbackQuotes = {
    'en': '"Not all those who wander are lost." – J.R.R. Tolkien',
    'fa': '«آن‌هایی که سرگردانند، همه گم نشده‌اند.» - جی. آر. آر. تالکین',
    'fr': '"Ce ne sont pas tous ceux qui errent qui sont perdus." – J.R.R. Tolkien'
};

function fetchQuote() {
    let lang = document.documentElement.lang; // Get language from HTML tag
    let fallbackQuote = fallbackQuotes[lang] || fallbackQuotes['en']; // Get fallback quote for the language

    Papa.parse(`/assets/data/quotes-${lang}.csv`, {
        download: true,
        header: true,
        complete: function(results) {
            const quotes = results.data
                .map(row => `"${row.quote}"–${row.author}`)
                .filter(quote => quote !== '""–'); // Filter out empty quotes
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex] || fallbackQuote;
            document.querySelector('.quote').textContent = quote;
        },
        error: function() {
            console.error('Error reading CSV file');
            document.querySelector('.quote').textContent = fallbackQuote;
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchQuote);
