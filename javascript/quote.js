const quotes = [
    { text: "Definitionen av galenskap är att göra samma sak gång på gång, men förvänta sig ett annat resultat.", author: "- Kevin" },
    { text: "Snälla pojkar får inte sälja.", author: "- Per" },
    { text: "Nu åker vi! NU ÅKER VI!!!!!1!1!1!1!111SHIFT.", author: "- Eric" }
];

let currentIndex = 0;

    function updateQuote() {
        const quoteElement = document.querySelector('#quote-block .quote');
        const authorElement = document.querySelector('#quote-block .author');
        
        quoteElement.textContent = quotes[currentIndex].text;
        authorElement.textContent = quotes[currentIndex].author;

        currentIndex = (currentIndex + 1) % quotes.length;
    }

    updateQuote();

    //5 minuter = 300,000 ms
    setInterval(updateQuote, 300000);