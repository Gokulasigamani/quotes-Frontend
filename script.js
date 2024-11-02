const colorThemes = [
    { background: '#ff9a9e', card: '#ffb7c3' },
    { background: '#fad0c4', card: '#f7d8e2' },
    { background: '#a1c4fd', card: '#cde2fe' },
    { background: '#c2e9fb', card: '#d6f1ff' },
    { background: '#84fab0', card: '#a3f7c2' },
    { background: '#ffecd2', card: '#fff5e5' },
];

async function getQuote() {
    try {
        const response = await fetch('https://quotes-backend-zuhm.onrender.com/api/quote');
        const data = await response.json();

        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        const appContainer = document.querySelector('body');
        const quoteCard = document.getElementById('quote-card');

        const theme = colorThemes[Math.floor(Math.random() * colorThemes.length)];

        appContainer.style.backgroundColor = theme.background;
        quoteCard.style.backgroundColor = theme.card;

        quoteText.style.opacity = 0;
        quoteAuthor.style.opacity = 0;

        setTimeout(() => {
            quoteText.textContent = `"${data.quote}"`;
            quoteAuthor.textContent = `— ${data.author}`;

            quoteText.style.opacity = 1;
            quoteAuthor.style.opacity = 1;
        }, 300);
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote-text').textContent = "Oops! Couldn't fetch a quote.";
        document.getElementById('quote-author').textContent = "";
    }
}
