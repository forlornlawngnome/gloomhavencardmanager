//function for clicking Hand
var hand = document.querySelectorAll(".hand");
for (var i = 0; i < hand.length; i++) {
  (function () {
  var handCard = hand[i];
    handCard.onclick = (function () {
      if (isFlipped(chosenCard1) && isFlipped(chosenCard2) && mustLoseCount<1){
      if(!isSelected(handCard) && handChosen === true && cardCount<2 && !isFlipped(handCard)){
        handCard.classList.add("add-border");
        cardCount++;
        if(cardCount === 2){
          playCardsButton.classList.remove("not-without-more-cards");
          loseHandCard.classList.add("not-without-more-selected");
        } else if(cardCount === 1){
          loseHandCard.classList.remove("not-without-more-selected");
        }
      } else if (isSelected(handCard)){
        handCard.classList.remove("add-border");
        cardCount--;
        playCardsButton.classList.add("not-without-more-cards");
        if (cardCount === 1){
          loseHandCard.classList.remove("not-without-more-selected");
        } else if(cardCount === 0){
          loseHandCard.classList.add("not-without-more-selected");
        }
      }
    } else {
      if(!isSelected(handCard) && handChosen === true && cardCount<1 && !isFlipped(handCard)){
        handCard.classList.add("add-border");
        cardCount++;
        loseHandCard.classList.remove("not-without-more-selected");
      } else if(!isSelected(handCard) && handChosen === true && cardCount === 1){
        for (var j = 0; j<hand.length; j++){
          if (hand[j].classList.contains("add-border")){
            hand[j].classList.remove("add-border");
            j = hand.length;
          }
        } handCard.classList.add("add-border");
      }else if (isSelected(handCard)){
        handCard.classList.remove("add-border");
        cardCount--;
        loseHandCard.classList.add("not-without-more-selected");
      }
    }
    });
  }).call(this, i);
};

playCardsButton.onclick = () => {
  //document.getElementById("hand-cards").style.backgroundColor = "red";
  if(cardCount === 2 && mustLoseCount<1 && !(shortResting) && !(longResting)){
    if(cardHand1.classList.contains("add-border")){
      getCard1(cardHand1);
    }else if(cardHand2.classList.contains("add-border")){
      getCard1(cardHand2);
    }else if(cardHand3.classList.contains("add-border")){
      getCard1(cardHand3);
    }else if(cardHand4.classList.contains("add-border")){
      getCard1(cardHand4);
    }else if(cardHand5.classList.contains("add-border")){
      getCard1(cardHand5);
    }else if(cardHand6.classList.contains("add-border")){
      getCard1(cardHand6);
    }else if(cardHand7.classList.contains("add-border")){
      getCard1(cardHand7);
    }else if(cardHand8.classList.contains("add-border")){
      getCard1(cardHand8);
    }else if(cardHand9.classList.contains("add-border")){
      getCard1(cardHand9);
    }else if(cardHand10.classList.contains("add-border")){
      getCard1(cardHand10);
    }else if(cardHand11.classList.contains("add-border")){
      getCard1(cardHand11);
    }
    if(cardHand2.classList.contains("add-border")){
      getCard2(cardHand2);
    }else if(cardHand3.classList.contains("add-border")){
      getCard2(cardHand3);
    }else if(cardHand4.classList.contains("add-border")){
      getCard2(cardHand4);
    }else if(cardHand5.classList.contains("add-border")){
      getCard2(cardHand5);
    }else if(cardHand6.classList.contains("add-border")){
      getCard2(cardHand6);
    }else if(cardHand7.classList.contains("add-border")){
      getCard2(cardHand7);
    }else if(cardHand8.classList.contains("add-border")){
      getCard2(cardHand8);
    }else if(cardHand9.classList.contains("add-border")){
      getCard2(cardHand9);
    }else if(cardHand10.classList.contains("add-border")){
      getCard2(cardHand10);
    }else if(cardHand11.classList.contains("add-border")){
      getCard2(cardHand11);
    }else if(cardHand12.classList.contains("add-border")){
      getCard2(cardHand12);
    }
    cardCount = 0;
    chosenCard1.src = playCard1;
    chosenCard1.classList.remove("flipped");
    chosenCard2.src = playCard2;
    chosenCard2.classList.remove("flipped");
    cardsInPlayCounter = 2;
    shortRestButton.classList.add("not-while-in-play");
    longRestButton.classList.add("not-while-in-play");
    loseCardFromRestButton.classList.add("not-while-in-play");
    rerollShortRestButton.classList.add("not-while-in-play");
    playCardsButton.classList.add("not-without-more-cards");
  }
};

let chosenCard1 = document.getElementById('chosen-card-1');
let chosenCard2 = document.getElementById('chosen-card-2');
let chosenCounter = 0;
chosenCard1.onclick = () => {
  if(chosenCounter < 1 && !isSelected(chosenCard1) && !isFlipped(chosenCard1) && mustLoseCount<1){
    chosenCard1.classList.add("add-border");
    chosenCounter++;
    discardButton.classList.remove("not-without-more-selected");
    loseButton.classList.remove("not-without-more-selected");
    activateButton.classList.remove("not-without-more-selected");
  } else if (chosenCounter === 1 && isSelected(chosenCard1)){
    chosenCard1.classList.remove("add-border");
    chosenCounter--;
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  } else if (chosenCounter == 1 && !isSelected(chosenCard1) && !isFlipped(chosenCard1)){
    chosenCard2.classList.remove("add-border");
    chosenCard1.classList.add("add-border");
  }
};

chosenCard2.onclick = () => {
  if(chosenCounter < 1 && !isSelected(chosenCard2) && !isFlipped(chosenCard2) && mustLoseCount<1){
    chosenCard2.classList.add("add-border");
    chosenCounter++;
    discardButton.classList.remove("not-without-more-selected");
    loseButton.classList.remove("not-without-more-selected");
    activateButton.classList.remove("not-without-more-selected");
  } else if (chosenCounter == 1 && isSelected(chosenCard2)){
    chosenCard2.classList.remove("add-border");
    chosenCounter--;
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  } else if (chosenCounter == 1 && !isSelected(chosenCard2) && !isFlipped(chosenCard2)){
    chosenCard1.classList.remove("add-border");
    chosenCard2.classList.add("add-border");
  }
};

discardButton.onclick = () => {
  if(chosenCard1.classList.contains("add-border") && mustLoseCount<1){
    if(discard1.classList.contains("flipped")){
      discard1.src = chosenCard1.src;
      discard1.classList.remove("hiding");
      discard1.classList.remove("flipped")
    } else if(discard2.classList.contains("flipped")){
      discard2.src = chosenCard1.src;
      discard2.classList.remove("hiding");
      discard2.classList.remove("flipped")
    } else if(discard3.classList.contains("flipped")){
      discard3.src = chosenCard1.src;
      discard3.classList.remove("hiding");
      discard3.classList.remove("flipped")
    } else if(discard4.classList.contains("flipped")){
      discard4.src = chosenCard1.src;
      discard4.classList.remove("hiding");
      discard4.classList.remove("flipped")
    } else if(discard5.classList.contains("flipped")){
      discard5.src = chosenCard1.src;
      discard5.classList.remove("hiding");
      discard5.classList.remove("flipped")
    } else if(discard6.classList.contains("flipped")){
      discard6.src = chosenCard1.src;
      discard6.classList.remove("hiding");
      discard6.classList.remove("flipped")
    } else if(discard7.classList.contains("flipped")){
      discard7.src = chosenCard1.src;
      discard7.classList.remove("hiding");
      discard7.classList.remove("flipped")
    } else if(discard8.classList.contains("flipped")){
      discard8.src = chosenCard1.src;
      discard8.classList.remove("hiding");
      discard8.classList.remove("flipped")
    } else if(discard9.classList.contains("flipped")){
      discard9.src = chosenCard1.src;
      discard9.classList.remove("hiding");
      discard9.classList.remove("flipped")
    } else if(discard10.classList.contains("flipped")){
      discard10.src = chosenCard1.src;
      discard10.classList.remove("hiding");
      discard10.classList.remove("flipped")
    } else if(discard11.classList.contains("flipped")){
      discard11.src = chosenCard1.src;
      discard11.classList.remove("hiding");
      discard11.classList.remove("flipped")
    } else if(discard12.classList.contains("flipped")){
      discard12.src = chosenCard1.src;
      discard12.classList.remove("hiding");
      discard12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    discardCount++;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
    if(discardCount>1){
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  }
  if(chosenCard2.classList.contains("add-border") && mustLoseCount<1){
    if(discard1.classList.contains("flipped")){
      discard1.src = chosenCard2.src;
      discard1.classList.remove("hiding");
      discard1.classList.remove("flipped")
    } else if(discard2.classList.contains("flipped")){
      discard2.src = chosenCard2.src;
      discard2.classList.remove("hiding");
      discard2.classList.remove("flipped")
    } else if(discard3.classList.contains("flipped")){
      discard3.src = chosenCard2.src;
      discard3.classList.remove("hiding");
      discard3.classList.remove("flipped")
    } else if(discard4.classList.contains("flipped")){
      discard4.src = chosenCard2.src;
      discard4.classList.remove("hiding");
      discard4.classList.remove("flipped")
    } else if(discard5.classList.contains("flipped")){
      discard5.src = chosenCard2.src;
      discard5.classList.remove("hiding");
      discard5.classList.remove("flipped")
    } else if(discard6.classList.contains("flipped")){
      discard6.src = chosenCard2.src;
      discard6.classList.remove("hiding");
      discard6.classList.remove("flipped")
    } else if(discard7.classList.contains("flipped")){
      discard7.src = chosenCard2.src;
      discard7.classList.remove("hiding");
      discard7.classList.remove("flipped")
    } else if(discard8.classList.contains("flipped")){
      discard8.src = chosenCard2.src;
      discard8.classList.remove("hiding");
      discard8.classList.remove("flipped")
    } else if(discard9.classList.contains("flipped")){
      discard9.src = chosenCard2.src;
      discard9.classList.remove("hiding");
      discard9.classList.remove("flipped")
    } else if(discard10.classList.contains("flipped")){
      discard10.src = chosenCard2.src;
      discard10.classList.remove("hiding");
      discard10.classList.remove("flipped")
    }
    else if(discard11.classList.contains("flipped")){
      discard11.src = chosenCard2.src;
      discard11.classList.remove("hiding");
      discard11.classList.remove("flipped")
    } else if(discard12.classList.contains("flipped")){
      discard12.src = chosenCard2.src;
      discard12.classList.remove("hiding");
      discard12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    discardCount++
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");

    }
    if(discardCount>1){
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
      }
    };

loseButton.onclick = () => {
  if(chosenCard1.classList.contains("add-border") && mustLoseCount<1){
    if(lost1.classList.contains("flipped")){
      lost1.src = chosenCard1.src;
      lost1.classList.remove("hiding");
    lost1.classList.remove("flipped")
    } else if(lost2.classList.contains("flipped")){
      lost2.src = chosenCard1.src;
      lost2.classList.remove("hiding");
      lost2.classList.remove("flipped")
    } else if(lost3.classList.contains("flipped")){
      lost3.src = chosenCard1.src;
      lost3.classList.remove("hiding");
      lost3.classList.remove("flipped")
    } else if(lost4.classList.contains("flipped")){
      lost4.src = chosenCard1.src;
      lost4.classList.remove("hiding");
      lost4.classList.remove("flipped")
    } else if(lost5.classList.contains("flipped")){
      lost5.src = chosenCard1.src;
      lost5.classList.remove("hiding");
      lost5.classList.remove("flipped")
    } else if(lost6.classList.contains("flipped")){
      lost6.src = chosenCard1.src;
      lost6.classList.remove("hiding");
      lost6.classList.remove("flipped")
    } else if(lost7.classList.contains("flipped")){
      lost7.src = chosenCard1.src;
      lost7.classList.remove("hiding");
      lost7.classList.remove("flipped")
    } else if(lost8.classList.contains("flipped")){
      lost8.src = chosenCard1.src;
      lost8.classList.remove("hiding");
      lost8.classList.remove("flipped")
    } else if(lost9.classList.contains("flipped")){
      lost9.src = chosenCard1.src;
      lost9.classList.remove("hiding");
      lost9.classList.remove("flipped")
    } else if(lost10.classList.contains("flipped")){
      lost10.src = chosenCard1.src;
      lost10.classList.remove("hiding");
      lost10.classList.remove("flipped")
    } else if(lost11.classList.contains("flipped")){
      lost11.src = chosenCard1.src;
      lost11.classList.remove("hiding");
      lost11.classList.remove("flipped")
    } else if(lost12.classList.contains("flipped")){
      lost12.src = chosenCard1.src;
      lost12.classList.remove("hiding");
      lost12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
  if(chosenCard2.classList.contains("add-border") && mustLoseCount<1){
    if(lost1.classList.contains("flipped")){
      lost1.src = chosenCard2.src;
      lost1.classList.remove("hiding");
      lost1.classList.remove("flipped")
    } else if(lost2.classList.contains("flipped")){
      lost2.src = chosenCard2.src;
      lost2.classList.remove("hiding");
      lost2.classList.remove("flipped")
    } else if(lost3.classList.contains("flipped")){
      lost3.src = chosenCard2.src;
      lost3.classList.remove("hiding");
      lost3.classList.remove("flipped")
    } else if(lost4.classList.contains("flipped")){
      lost4.src = chosenCard2.src;
      lost4.classList.remove("hiding");
      lost4.classList.remove("flipped")
    } else if(lost5.classList.contains("flipped")){
      lost5.src = chosenCard2.src;
      lost5.classList.remove("hiding");
      lost5.classList.remove("flipped")
    } else if(lost6.classList.contains("flipped")){
      lost6.src = chosenCard2.src;
      lost6.classList.remove("hiding");
      lost6.classList.remove("flipped")
    } else if(lost7.classList.contains("flipped")){
      lost7.src = chosenCard2.src;
      lost7.classList.remove("hiding");
      lost7.classList.remove("flipped")
    } else if(lost8.classList.contains("flipped")){
      lost8.src = chosenCard2.src;
      lost8.classList.remove("hiding");
      lost8.classList.remove("flipped")
    } else if(lost9.classList.contains("flipped")){
      lost9.src = chosenCard2.src;
      lost9.classList.remove("hiding");
      lost9.classList.remove("flipped")
    } else if(lost10.classList.contains("flipped")){
      lost10.src = chosenCard2.src;
      lost10.classList.remove("hiding");
      lost10.classList.remove("flipped")
    } else if(lost11.classList.contains("flipped")){
      lost11.src = chosenCard2.src;
      lost11.classList.remove("hiding");
      lost11.classList.remove("flipped")
    } else if(lost12.classList.contains("flipped")){
      lost12.src = chosenCard2.src;
      lost12.classList.remove("hiding");
      lost12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
};

activateButton.onclick = () => {
  if(chosenCard1.classList.contains("add-border") && mustLoseCount<1 && numberOfActiveCards<6){
    if(active1.classList.contains("flipped")){
      active1.src = chosenCard1.src;
      active1.classList.remove("hiding");
      active1.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active2.classList.contains("flipped")){
      active2.src = chosenCard1.src;
      active2.classList.remove("hiding");
      active2.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active3.classList.contains("flipped")){
      active3.src = chosenCard1.src;
      active3.classList.remove("hiding");
      active3.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active4.classList.contains("flipped")){
      active4.src = chosenCard1.src;
      active4.classList.remove("hiding");
      active4.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active5.classList.contains("flipped")){
      active5.src = chosenCard1.src;
      active5.classList.remove("hiding");
      active5.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active6.classList.contains("flipped")){
      active6.src = chosenCard1.src;
      active6.classList.remove("hiding");
      active6.classList.remove("flipped");
      numberOfActiveCards++;
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
  if(chosenCard2.classList.contains("add-border") && mustLoseCount<1 && numberOfActiveCards<6){
    if(active1.classList.contains("flipped")){
      active1.src = chosenCard2.src;
      active1.classList.remove("hiding");
      active1.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active2.classList.contains("flipped")){
      active2.src = chosenCard2.src;
      active2.classList.remove("hiding");
      active2.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active3.classList.contains("flipped")){
      active3.src = chosenCard2.src;
      active3.classList.remove("hiding");
      active3.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active4.classList.contains("flipped")){
      active4.src = chosenCard2.src;
      active4.classList.remove("hiding");
      active4.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active5.classList.contains("flipped")){
      active5.src = chosenCard2.src;
      active5.classList.remove("hiding");
      active5.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active6.classList.contains("flipped")){
      active6.src = chosenCard2.src;
      active6.classList.remove("hiding");
      active6.classList.remove("flipped");
      numberOfActiveCards++;
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
};

let discardsSelected = 0;
var discards = document.querySelectorAll(".discarded");
for (var i = 0; i < discards.length; i++) {
  (function () {
  var discardedCard = discards[i];
    discardedCard.onclick = (function () {
      if(!isSelected(discardedCard) && mustLoseCount<1 && discardsSelected === 0){
        discardedCard.classList.add("discard-selected");
        discardsSelected++;
        loseDiscardButton.classList.remove("not-without-more-selected");
        if(longResting){
          loseCardFromRestButton.classList.remove("not-unless-resting");
        } else {
          recoverDiscardButton.classList.remove("not-without-more-selected");
        }
      } else if (!isSelected(discardedCard) && discardsSelected === 1){
        var selectedDiscardedCards = document.querySelectorAll(".discard-selected");
        var selectedDiscardedCard = selectedDiscardedCards[0];
        selectedDiscardedCard.classList.remove("discard-selected");
        discardedCard.classList.add("discard-selected");
      } else if (isSelected(discardedCard) && discardsSelected === 1){
        discardedCard.classList.remove("discard-selected");
        discardsSelected--;
        loseDiscardButton.classList.add("not-without-more-selected");
        if(longResting){
          loseCardFromRestButton.classList.add("not-unless-resting");
        } else {
          recoverDiscardButton.classList.add("not-without-more-selected");
        }
      }
    });
  }).call(this, i);
};

let lostSelectedCounter = 0;
var lostCards = document.querySelectorAll(".lost");
for (var i = 0; i < lostCards.length; i++) {
  (function () {
  var lostCard = lostCards[i];
    lostCard.onclick = (function () {
      if(!isSelected(lostCard) && lostSelectedCounter === 0){
        lostCard.classList.add("lost-selected");
        lostSelectedCounter++
        recoverLostCardButton.classList.remove("not-without-more-selected");
      } else if(!isSelected(lostCard) && lostSelectedCounter === 1){
        var selectedLostCards = document.querySelectorAll(".lost-selected");
        var selectedLostCard = selectedLostCards[0];
        selectedLostCard.classList.remove("lost-selected");
        lostCard.classList.add("lost-selected");
      } else {
        lostCard.classList.remove("lost-selected");
        lostSelectedCounter--;
        recoverLostCardButton.classList.add("not-without-more-selected");
      }
    });
  }).call(this, i);
};


let activesSelected = 0;
var actives = document.querySelectorAll(".active-card");
for (var i = 0; i < actives.length; i++) {
  (function () {
  var activeCard = actives[i];
    activeCard.onclick = (function () {
      if(!isSelected(activeCard) && activesSelected === 0){
        activeCard.classList.add("active-selected");
        activesSelected++;
        discardActiveCardButton.className = "button";
        loseActiveCardButton.className = "button";
        createActiveTracker.className = "button";
        if(activeCard.classList.contains("has-tracker")){
          createActiveTracker.classList.add("not-without-more-selected");
        }
      } else if(!isSelected(activeCard) && activesSelected ===1){
        var activeCardsSelected = document.querySelectorAll(".active-selected");
        var activeCardSelected = activeCardsSelected[0];
        activeCard.classList.add("active-selected");
        activeCardSelected.classList.remove("active-selected");
        discardActiveCardButton.classList.remove("not-without-more-selected");
        loseActiveCardButton.classList.remove("not-without-more-selected");
        createActiveTracker.classList.remove("not-without-more-selected");
        if(activeCard.classList.contains("has-tracker")){
          createActiveTracker.classList.add("not-without-more-selected");
        }
      } else {
        activeCard.classList.remove("active-selected");
        activesSelected--;
        discardActiveCardButton.classList.add("not-without-more-selected");
        loseActiveCardButton.classList.add("not-without-more-selected");
        createActiveTracker.classList.add("not-without-more-selected");
      }
    });
  }).call(this, i);
};

discardActiveCardButton.onclick = () => {
  if(!mustLose && activesSelected === 1){
    var activeCardsSelected = document.querySelectorAll(".active-selected");
    var activeCardSelected = activeCardsSelected[0];
    for (var i = 0; i<discards.length; i++){
      var discardedCard = discards[i];
      if(discardedCard.classList.contains("flipped")){
        discardedCard.src = activeCardSelected.src;
        discardedCard.classList.remove("flipped");
        discardedCard.classList.remove("hiding");
        i = discards.length;
        flipActive(activeCardSelected);
        activesSelected = 0;
        numberOfActiveCards--;
        discardCount++;
      }
    }
    if(discardCount>1){
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
  }
}

loseActiveCardButton.onclick = () => {
  if(activesSelected === 1){
    var activeCardsSelected = document.querySelectorAll(".active-selected");
    var activeCardSelected = activeCardsSelected[0];
    for (var i = 0; i<lostCards.length; i++){
      var lostCard = lostCards[i];
      if(lostCard.classList.contains("flipped")){
        lostCard.src = activeCardSelected.src;
        lostCard.classList.remove("flipped");
        lostCard.classList.remove("hiding");
        i = lostCards.length;
        flipActive(activeCardSelected);
        activesSelected = 0;
        numberOfActiveCards--;
      }
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
  }
}

recoverLostCardButton.onclick = () => {
  if(!shortResting && !longResting && !mustLose && lostSelectedCounter>0){
    lostSelectedCounter = 0;
    var selectedLostCards = document.querySelectorAll(".lost-selected");
    var selectedLostCard = selectedLostCards[0];
    recoverLostCardButton.classList.add("not-without-more-selected");
    selectedLostCard.classList.remove("lost-selected");
    var cardsInHand = document.querySelectorAll(".hand");
      for (var i = 0; i<cardsInHand.length; i++){
        (function () {
          var cardInHand = cardsInHand[i];
          if(cardInHand.classList.contains("flipped")){
            cardInHand.src = selectedLostCard.src;
            cardInHand.classList.remove("flipped");
            cardInHand.classList.remove("hiding");
            flipLost(selectedLostCard);
            i = cardsInHand.length;
          }
        }).call(this,i);
      }
    }
}
