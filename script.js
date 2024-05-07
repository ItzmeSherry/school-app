document.getElementById('drawCard').addEventListener('click', function() {
    const type = document.getElementById('readingType').value;
    const numCards = getNumberOfCards(type);
    const cards = drawCards(numCards);
    displayCards(cards);
});

function getNumberOfCards(type) {
    switch (type) {
        case 'single':
            return 1;
        case 'three-card':
            return 3;
        case 'celtic-cross':
            return 10;
        case 'love':
            return 6;
        default:
            return 1;
    }
}

function drawCards(numCards) {
    const totalCards = 78; // Total number of tarot cards
    let cards = [];
    while (cards.length < numCards) {
        let card = Math.floor(Math.random() * totalCards) + 1;
        if (!cards.includes(card)) {
            cards.push(card);
        }
    }
    return cards.map(card => ({ name: `Card ${card}`, imageUrl: `images/card${card}.jpg` }));
}

function displayCards(cards) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = ''; // Clear previous cards
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'tarot-card';
        cardDiv.innerHTML = `<img src=${card.cardimage} alt="${card.name}" style="width:100px;"><p>${card.name}</p>`;
        container.appendChild(cardDiv);
        
    });
}
