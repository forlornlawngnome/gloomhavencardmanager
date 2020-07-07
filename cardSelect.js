//card selecting functions
var cards = document.querySelectorAll(".chooseCardsTable");
for (var i = 0; i < cards.length; i++) {
  (function () {
  var card = cards[i];
    card.onclick = (function () {
      if (!isSelected(card.firstChild) && cardCount<handSize){
        card.firstChild.classList.add("add-border");
        cardCount++;
        cardCounter.innerHTML = cardCount + "/"+ handSize;
        if(cardCount === handSize){
          confirmHandButton.classList.remove("not-without-more-selected")
        }
        if(cardHand1.classList.contains("flipped")){
            cardHand1.src = card.firstChild.src;
            cardHand1.classList.remove("flipped");
            cardHand1.classList.add(`${this.id}`)
          } else if (cardHand2.classList.contains("flipped")){
            cardHand2.src = card.firstChild.src;
            cardHand2.classList.remove("flipped");
            cardHand2.classList.add(`${this.id}`);
          } else if (cardHand3.classList.contains("flipped")){
            cardHand3.src = card.firstChild.src;
            cardHand3.classList.remove("flipped");
            cardHand3.classList.add(`${this.id}`);
          } else if (cardHand4.classList.contains("flipped")){
            cardHand4.src = card.firstChild.src;
            cardHand4.classList.remove("flipped");
            cardHand4.classList.add(`${this.id}`);
          } else if (cardHand5.classList.contains("flipped")){
            cardHand5.src = card.firstChild.src;
            cardHand5.classList.remove("flipped");
            cardHand5.classList.add(`${this.id}`);
          } else if (cardHand6.classList.contains("flipped")){
            cardHand6.src = card.firstChild.src;
            cardHand6.classList.remove("flipped");
            cardHand6.classList.add(`${this.id}`);
          } else if (cardHand7.classList.contains("flipped")){
            cardHand7.src = card.firstChild.src;
            cardHand7.classList.remove("flipped");
            cardHand7.classList.add(`${this.id}`);
          } else if (cardHand8.classList.contains("flipped")){
            cardHand8.src = card.firstChild.src;
            cardHand8.classList.remove("flipped");
            cardHand8.classList.add(`${this.id}`);
          } else if (cardHand9.classList.contains("flipped")){
            cardHand9.src = card.firstChild.src;
            cardHand9.classList.remove("flipped");
            cardHand9.classList.add(`${this.id}`);
          } else if (cardHand10.classList.contains("flipped")){
            cardHand10.src = card.firstChild.src;
            cardHand10.classList.remove("flipped");
            cardHand10.classList.add(`${this.id}`);
          } else if (cardHand11.classList.contains("flipped")){
            cardHand11.src = card.firstChild.src;
            cardHand11.classList.remove("flipped");
            cardHand11.classList.add(`${this.id}`);
          } else if (cardHand12.classList.contains("flipped")){
            cardHand12.src = card.firstChild.src;
            cardHand12.classList.remove("flipped");
            cardHand12.classList.add(`${this.id}`);
          }
      } else {
        card.firstChild.classList.remove("add-border");
        if(cardHand1.classList.contains(`${this.id}`)){
          flipCard(cardHand1);
          cardHand1.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand2.classList.contains(`${this.id}`)){
          flipCard(cardHand2);
          cardHand2.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand3.classList.contains(`${this.id}`)){
          flipCard(cardHand3);
          cardHand3.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand4.classList.contains(`${this.id}`)){
          flipCard(cardHand4);
          cardHand4.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand5.classList.contains(`${this.id}`)){
          flipCard(cardHand5);
          cardHand5.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand6.classList.contains(`${this.id}`)){
          flipCard(cardHand6);
          cardHand6.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand7.classList.contains(`${this.id}`)){
          flipCard(cardHand7);
          cardHand7.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand8.classList.contains(`${this.id}`)){
          flipCard(cardHand8);
          cardHand8.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand9.classList.contains(`${this.id}`)){
          flipCard(cardHand9);
          cardHand9.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand10.classList.contains(`${this.id}`)){
          flipCard(cardHand10);
          cardHand10.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand11.classList.contains(`${this.id}`)){
          flipCard(cardHand11);
          cardHand11.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand12.classList.contains(`${this.id}`)){
          flipCard(cardHand12);
          cardHand12.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        }
      }
    });
  }).call(this, i);
};

const isSelected = card => {
  if (card.classList.contains("add-border") || card.classList.contains("discard-selected") || card.classList.contains("lost-selected") || card.classList.contains("active-selected") || card.classList.contains("character-selected")){
    return true;
  } else{
    return false;
  }
};

const isFlipped = card => {
  if (card.classList.contains("flipped")){
    return true;
  } else {
    return false;
  }
};

const flipCard = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("hand");
  card.classList.add("hiding");
  if(!handChosen){
  cardCount--;
  cardCounter.innerHTML = cardCount + "/"+ handSize;
}
};

const getCard1 = (card) => {
  playCard1 = card.src;
  flipCard(card);
};

const getCard2 = (card) => {
  playCard2 = card.src;
  flipCard(card);
};

const flipChosenCard = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("card-in-play");
};

const flipDiscard = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("discarded");
  card.classList.add("hiding");
}

const flipActive = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("active-card");
  card.classList.add("hiding");
}

const flipLost = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("lost");
  card.classList.add("hiding");
}

//Confirm button variables and function
let confirmHandButton = document.getElementById('confirm-hand');
let initialTable = document.getElementById('initial-table');
let handChosen = false;
let blessesInDeck = document.getElementById('blessesInDeck');
let cursesInDeck = document.getElementById('cursesInDeck');

confirmHandButton.onclick = () => {
  if(cardCount === handSize){
  initialTable.parentNode.removeChild(initialTable);
  document.getElementById('play-game').className = 'visible';
  document.getElementById('chosen-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
  document.getElementById('active-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
  document.getElementById('discarded-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
  document.getElementById('lost-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
  confirmHandButton.classList.add("hiding");
  goBack.classList.add("hiding");
  goBack2.classList.add("hiding");
  playCardsButton.classList.remove("hiding");
  playCardsButton.classList.add("visible");
  cardCount = 0;
  handChosen = true;
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  longRestButton.classList.add("not-without-more-cards");
  shortRestButton.classList.add("not-without-more-cards");
  discardButton.classList.add("not-without-more-selected");
  loseButton.classList.add("not-without-more-selected");
  activateButton.classList.add("not-without-more-selected");
  loseCardFromRestButton.classList.add("not-unless-resting");
  rerollShortRestButton.classList.add("not-unless-resting");
  recoverDiscardButton.classList.add("not-without-more-selected");
  recoverLostCardButton.classList.add("not-without-more-selected");
  playCardsButton.classList.add("not-without-more-cards");
  discardActiveCardButton.classList.add("not-without-more-selected");
  loseActiveCardButton.classList.add("not-without-more-selected");
  createActiveTracker.classList.add("not-without-more-selected");
  healButton.classList.add("at-max");
  xpDown.classList.add("at-min");
  decreaseTrackerSize.classList.add("at-min");
  loseHandCard.classList.remove("hiding");
  shuffleDeck();
  }
}