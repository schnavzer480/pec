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
    { text: "Hopp är ingen strategi.", author: "- August Walker (Mission Impossible VI" }
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