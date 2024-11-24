const quotes = [
    { text: "Definitionen av galenskap är att göra samma sak gång på gång, men förvänta sig ett annat resultat.", author: "- Kevin" },
    { text: "Snälla pojkar får inte sälja.", author: "- Per" },
    { text: "Nu åker vi! NU ÅKER VI!!!!!1!1!1!1!111SHIFT.", author: "- Eric" },
    { text: "Den som inte är utbränd vid årets slut, den har fuskat!", author: "- Tomas Storm (Snabba Cash)" },
    { text: "Personlig utveckling och bekvämlighet samexisterar inte.", author: "- Ginni Rometty" },
    { text: "Det enda som står mellan dig och dina mål är bortförklaringarna till varför du aldrig når dem.", author: "- Jordan Belfort" },
    { text: "Om du inte kan så måste du, och om du måste så kan du.", author: "- Tony Robbins" },
    { text: "Sluta inte när du är trött, sluta när du är klar.", author: "- David Goggins" },
    { text: "Vissa personer vill att saker ska ske, vissa hoppas att det ska ske, andra ser till att det sker.", author: "- Michael Jordan" },
    { text: "Du missar 100% av skotten du inte skjuter.", author: "- Wayne Gretzky" },
    { text: "Man ska inte göra sitt bästa. Man ska göra det som krävs.", author: "- Mikael Arndt" },
    { text: "Hopp är ingen strategi.", author: "- August Walker (Mission Impossible VI)" },
    { text: "Har du vaknat?! Mata på! Mata på! Mata på!", author: "- John Andreas" },
    { text: 'Varje gång jag ska in i GetAccept, och skriver in "get" och trycker Enter, så kommer jag till en &#128016;.', author: "- Sebbe"},
    { text: "Telia är inte en operatör, det är en kult.", author: "- Christutter"},
    { text: "Varje missnöjd kund hotar din anställning.", author: "- Okänd"},
    { text: "Kunden är orsak till att du har ett arbete.", author: "- Okänd"},
    { text: "Ingen blir någonsin belönad för sin negativa inställning.", author: "- Okänd"},
    { text: "Du kan inte ändra vinden, men du kan trimma seglen.", author: "- Okänd"},
    { text: "Människan består av 65% vatten, resten inställning.", author: "- Okänd"}
];

let shuffledQuotes = [];
let currentIndex = 0;

function shuffleQuotes() {
    shuffledQuotes = quotes.slice();
    for (let i = shuffledQuotes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuotes[i], shuffledQuotes[j]] = [shuffledQuotes[j], shuffledQuotes[i]];
    }
}

function updateQuote() {
    const quoteElement = document.querySelector('#quote-block .quote');
    const authorElement = document.querySelector('#quote-block .author');

    if (currentIndex >= shuffledQuotes.length) {
        shuffleQuotes();
        currentIndex = 0;
    }

    const currentQuote = shuffledQuotes[currentIndex];
    quoteElement.innerHTML = currentQuote.text;
    authorElement.innerHTML = currentQuote.author;

    currentIndex++;
}

shuffleQuotes();
updateQuote();

    //5 minuter = 300,000 ms
    //3 minuter = 180.000 ms
    setInterval(updateQuote, 180000);