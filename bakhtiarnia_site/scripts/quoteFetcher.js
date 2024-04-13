const fallbackQuote = '"Not all those who wander are lost." - J.R.R. Tolkien';

function fetchQuote() {
    Papa.parse('/assets/data/quotes.csv', {
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