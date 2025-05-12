window.onload = function () {
    generateRandomCard(); 

    document.getElementById('changeCardBtn').onclick = generateRandomCard; 
};

function generateRandomCard() {
    const suits = ['spade', 'club', 'heart', 'diamond'];
    const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const suitEmojis = {
        spade: '♠',
        club: '♣',
        heart: '♥',
        diamond: '♦'
    };

    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomNumberIndex = Math.floor(Math.random() * cardNumbers.length);

    const randomSuit = suits[randomSuitIndex];
    const randomNumber = cardNumbers[randomNumberIndex];

    const cardElement = document.querySelector('.card');
    const numberElement = document.querySelector('.number');
    const topSuitElement = document.querySelector('.top-suit');
    const bottomSuitElement = document.querySelector('.bottom-suit');

    cardElement.classList.add(randomSuit);
    numberElement.textContent = randomNumber;

    topSuitElement.textContent = suitEmojis[randomSuit];
    bottomSuitElement.textContent = topSuitElement.textContent;

    if (randomSuit === 'heart' || randomSuit === 'diamond') {
        numberElement.style.color = 'red';
        topSuitElement.style.color = 'red';
        bottomSuitElement.style.color = 'red';
    } else {
        numberElement.style.color = 'black';
        topSuitElement.style.color = 'black';
        bottomSuitElement.style.color = 'black';
    }
}
