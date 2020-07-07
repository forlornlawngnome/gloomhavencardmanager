const shortRestLoop = card => {
    if(!(card.classList.contains("flipped"))){
      card.classList.add("must-lose");
      card.insertAdjacentHTML("afterend", "<br/><p class = 'must-lose'>Must Lose</p>");
      mustLoseCount++
    }
  }

let mustLose = false;
let shortResting = false;
let mustLoseCount = 0;
shortRestButton.onclick = () => {
  if(mustLoseCount === 0 && discardCount>1 && cardsInPlayCounter === 0 && !(longResting) && !(shortResting)){
  playCardsButton.classList.add("not-while-resting");
  shortRestButton.classList.add("not-while-resting");
  longRestButton.classList.add("not-while-resting");
  loseCardFromRestButton.classList.remove("not-unless-resting");
  rerollShortRestButton.classList.remove("not-unless-resting");
  recoverDiscardButton.classList.add("not-without-more-selected");
  loseDiscardButton.classList.add("not-without-more-selected");
  mustLose = true;
  shortResting = true;
  var discardedCards = document.querySelectorAll(".discarded");
  for (var i = 0; i<discardedCards.length; i++){
    var discardedCard = discardedCards[i];
    (function (){
      discardedCard.classList.remove("discard-selected");
    }).call(this,i);
  }
  let randomCard = Math.floor(Math.random()*discardCount);
  switch (randomCard) {
    case 0:
      for (var i = 0; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
        }
      break;
    case 1:
      for (var i = 1; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 2:
      for (var i = 2; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 3:
      for (var i = 3; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 4:
      for (var i = 4; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 5:
      for (var i = 5; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 6:
      for (var i = 6; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 7:
      for (var i = 7; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
      break;
    case 8:
      for (var i = 8; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
       break;
    case 9:
      for (var i = 9; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
    break;
    case 10:
      for (var i = 10; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
    break;
    case 11:
      for (var i = 11; i<discardedCards.length; i++){
        var discardedCard = discardedCards[i];
        shortRestLoop(discardedCard);
        i=discardedCards.length;
      }
    break;
  }
}
}

loseCardFromRestButton.onclick = () => {
  if(mustLoseCount>0 && mustLose && shortResting){
    playCardsButton.classList.remove("not-while-resting");
    shortRestButton.classList.remove("not-while-resting");
    longRestButton.classList.remove("not-while-resting");
    loseCardFromRestButton.classList.add("not-unless-resting");
    rerollShortRestButton.classList.remove("can-only-do-once");
    shortRestButton.classList.add("not-without-more-cards");
    longRestButton.classList.add("not-without-more-cards");
    rerollShortRestButton.classList.add("not-unless-resting");
    loseDiscardButton.classList.add("not-without-more-selected");
    mustLose = false;
    shortResting = false;
      var mustLoseCards = document.querySelectorAll(".must-lose");
        var mustLoseCard = mustLoseCards[0];
        (function (){
          for (var i = 0; i<lostCards.length; i++){
            var lostCard1 = lostCards[i];
            if(lostCard1.classList.contains("flipped")){
              lostCard1.classList.remove("flipped");
              lostCard1.classList.remove("hiding");
              lostCard1.src = mustLoseCard.src;
              i = lostCards.length;
            }
          }
        }).call(this, i);
        mustLoseCount = 0;
        discardCount = 0;
        discardsSelected = 0;
        mustLoseCard.nextSibling.remove();
        mustLoseCard.nextSibling.remove();
        flipDiscard(mustLoseCard);
        var discardedCards = document.querySelectorAll(".discarded");
        var cardsInHand = document.querySelectorAll(".hand");
        for (var j = 0; j<discardedCards.length; j++){
          (function (){
            var discardedCard = discardedCards[j];
            if(!(discardedCard.classList.contains("flipped"))){
              for (var k = 0; k<cardsInHand.length; k++){
                (function () {
                  var cardInHand = cardsInHand[k];
                  if(cardInHand.classList.contains("flipped")){
                    cardInHand.src = discardedCard.src;
                    cardInHand.classList.remove("flipped");
                    cardInHand.classList.remove("hiding");
                    flipDiscard(discardedCard);
                    k = cardsInHand.length;
                  }
                }).call(this,k);
            }
          }

        }).call(this,j);
      }
    } else if (longResting &&  discardsSelected === 1){
      playCardsButton.classList.remove("not-while-resting");
      shortRestButton.classList.remove("not-while-resting");
      longRestButton.classList.remove("not-while-resting");
      loseCardFromRestButton.classList.add("not-unless-resting");
      shortRestButton.classList.add("not-without-more-cards");
      longRestButton.classList.add("not-without-more-cards");
      loseDiscardButton.classList.add("not-without-more-selected");
      longResting = false;
      mustLose = false;
      var selectedDiscards = document.querySelectorAll(".discard-selected");
      var selectedDiscard = selectedDiscards[0];
      selectedDiscard.classList.remove("discard-selected");
      discardsSelected = 0;
      (function (){
        for (var i = 0; i<lostCards.length; i++){
          var lostCard1 = lostCards[i];
          if(lostCard1.classList.contains("flipped")){
            lostCard1.classList.remove("flipped");
            lostCard1.classList.remove("hiding");
            lostCard1.src = selectedDiscard.src;
            i = lostCards.length;
          }
        }
      }).call(this, i);
      discardCount = 0;
      Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
      }
      document.getElementById('choose-to-lose').remove();
      flipDiscard(selectedDiscard);
      var discardedCards = document.querySelectorAll(".discarded");
      var cardsInHand = document.querySelectorAll(".hand");
      for (var j = 0; j<discardedCards.length; j++){
        (function (){
          var discardedCard = discardedCards[j];
          if(!(discardedCard.classList.contains("flipped"))){
            for (var k = 0; k<cardsInHand.length; k++){
              (function () {
                var cardInHand = cardsInHand[k];
                if(cardInHand.classList.contains("flipped")){
                  cardInHand.src = discardedCard.src;
                  cardInHand.classList.remove("flipped");
                  cardInHand.classList.remove("hiding");
                  flipDiscard(discardedCard);
                  k = cardsInHand.length;
                }
              }).call(this,k);
          }
        }

      }).call(this,j);
    }
    if(poisoned){
      poisoned = false;
      poisonedToken.classList.add("hiding");
      healButton.classList.remove("poisoned");
      wounded = false;
      woundedToken.classList.add('hiding');
    } else if (health<maxHealth){
      health = health+2;
      healthCounter.innerHTML = health + "/" + maxHealth;
      wounded = false;
      woundedToken.classList.add('hiding');
      if(health>maxHealth){
        health = maxHealth;
        healthCounter.innerHTML = health + "/" + maxHealth;
      }
    }
  }
}

rerollShortRestButton.onclick = () => {
  if(mustLoseCount === 1){
    rerollShortRestButton.classList.add("can-only-do-once");
    health--;
    healButton.classList.remove("at-max");
    healthCounter.innerHTML =  health + "/" + maxHealth;
    var discardedCards = document.querySelectorAll(".discarded");
    for (var i = 0; i<discardedCards.length; i++){
      var discardedCard = discardedCards[i];
      (function (){
        discardedCard.classList.remove("discard-selected");
        if(discardedCard.classList.contains("must-lose")){
          discardedCard.classList.add("unloseable");
          i = discardedCards.length;
          discardedCard.classList.remove("must-lose");
          discardedCard.nextSibling.remove();
          discardedCard.nextSibling.remove();
        }
      }).call(this,i);
    }
      var randomCard2 = Math.floor(Math.random()*discardCount);
      var unloseable = document.querySelectorAll(".unloseable");
      var unloseableCard = unloseable[0];
      unloseableCard.classList.remove("unloseable");
      while (unloseableCard === discardedCards[randomCard2]){
        randomCard2 = Math.floor(Math.random()*discardCount);
      }
    switch (randomCard2) {
      case 0:
        for (var i = 0; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
          }
        break;
      case 1:
        for (var i = 1; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 2:
        for (var i = 2; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 3:
        for (var i = 3; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 4:
        for (var i = 4; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 5:
        for (var i = 5; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 6:
        for (var i = 6; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 7:
        for (var i = 7; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
        break;
      case 8:
        for (var i = 8; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
         break;
      case 9:
        for (var i = 9; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
      break;
      case 10:
        for (var i = 10; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
      break;
      case 11:
        for (var i = 11; i<discardedCards.length; i++){
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i=discardedCards.length;
        }
      break;
    }
  }
}


let longResting = false;
longRestButton.onclick = () => {
  if(discardCount>1 && mustLoseCount === 0 && cardsInPlayCounter === 0 && !(shortResting) && !(longResting)){
    document.getElementById('discard-table').insertAdjacentHTML("beforebegin", "<p id = 'choose-to-lose'>Choose One Card to Lose</p><br/>");
    playCardsButton.classList.add("not-while-resting");
    shortRestButton.classList.add("not-while-resting");
    longRestButton.classList.add("not-while-resting");
    recoverDiscardButton.classList.add("not-without-more-selected");
    mustLose = true;
    longResting = true;
    if (discardsSelected === 1){
      loseCardFromRestButton.classList.remove("not-unless-resting");
    }
  }
}

recoverDiscardButton.onclick = () => {
  if(!shortResting && !longResting && !mustLose && discardsSelected>0){
    discardsSelected = 0;
    discardCount--;
    recoverDiscardButton.classList.add("not-without-more-selected");
    loseDiscardButton.classList.add("not-without-more-selected");
    var selectedDiscards = document.querySelectorAll(".discard-selected");
    var selectedDiscard = selectedDiscards[0];
    selectedDiscard.classList.remove("discard-selected");
    var cardsInHand = document.querySelectorAll(".hand");
      for (var i = 0; i<cardsInHand.length; i++){
        (function () {
          var cardInHand = cardsInHand[i];
          if(cardInHand.classList.contains("flipped")){
            cardInHand.src = selectedDiscard.src;
            cardInHand.classList.remove("flipped");
            cardInHand.classList.remove("hiding");
            flipDiscard(selectedDiscard);
            i = cardsInHand.length;
          }
        }).call(this,i);
      }
      if(discardCount<2){
        shortRestButton.classList.add("not-without-more-cards");
        longRestButton.classList.add("not-without-more-cards");
      }
    }
}