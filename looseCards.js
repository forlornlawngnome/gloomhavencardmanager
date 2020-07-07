//Can this be above with card playing? Leaving it where it is to not mess up js
loseDiscardButton.onclick = () => {
  var selectedDiscards = document.querySelectorAll(".discard-selected");
  if(discardsSelected === 1){
  for (var i = 0; i<lostCards.length; i++){
    var lostCard = lostCards[i];
    if(lostCard.classList.contains("flipped")){
      lostCard.src = selectedDiscards[0].src;
      lostCard.classList.remove("flipped");
      lostCard.classList.remove("hiding");
      i = lostCards.length;
      flipDiscard(selectedDiscards[0]);
      discardsSelected--;
      discardCount--;
      recoverDiscardButton.classList.add("not-without-more-selected");
      loseDiscardButton.classList.add("not-without-more-selected");
      loseCardFromRestButton.classList.add("not-unless-resting");
    }
  }
}
  if(discardCount === 0 && longResting){
    longResting = false;
    mustLose = false;
    playCardsButton.classList.remove("not-while-resting");
    shortRestButton.classList.remove("not-while-resting");
    longRestButton.classList.remove("not-while-resting");
    loseCardFromRestButton.classList.add("not-unless-resting");
    shortRestButton.classList.add("not-without-more-cards");
    longRestButton.classList.add("not-without-more-cards");
    loseDiscardButton.classList.add("not-without-more-selected");
    Element.prototype.remove = function() {
      this.parentElement.removeChild(this);
    }
    document.getElementById('choose-to-lose').remove();
  }
}


loseHandCard.onclick = () => {
  if(cardCount === 1){
    var cardsInHand = document.querySelectorAll(".hand");
    for (var j = 0; j<cardsInHand.length; j++){
      var cardInHand = cardsInHand[j];
      if (cardInHand.classList.contains("add-border")){
        for (var i = 0; i<lostCards.length; i++){
          var lostCard = lostCards[i];
          if(lostCard.classList.contains("flipped")){
            lostCard.src = cardInHand.src;
            lostCard.classList.remove("flipped");
            lostCard.classList.remove("hiding");
            i = lostCards.length;
            flipCard(cardInHand);
            cardCount--;
            loseHandCard.classList.add('not-without-more-selected');
          }
        }
      }
    }
  }
}