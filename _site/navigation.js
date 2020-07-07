goBack.onclick = () => {
  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
  var handCards = document.querySelectorAll(".hand");
  document.getElementById("select-class-section").classList.remove("hiding");
  document.getElementById("level-selection").classList.remove("hiding");
  confirmHandButton.classList.add("not-without-more-selected");
  modDeckArray = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11, mod12, mod13, mod14, mod15, mod16, mod17, mod18, mod19, mod20];
  var perkLists = document.querySelectorAll(".perks");
  for (var j = 0; j<perkLists.length; j++){
    var perkList = perkLists[j];
    perkList.classList.add("hiding");
  }
  goBack.classList.add("hiding");
  goBack2.classList.add("hiding");
  document.getElementById("perk-section").classList.add("hiding");
  document.getElementById("bear-health").classList.add("hiding");
  document.getElementById("bear-health-counter").classList.add("hiding");
  document.getElementById("damage-bear").classList.add("hiding");
  document.getElementById("heal-bear").classList.add("hiding");
  document.getElementById("bear-status-effects").classList.add("hiding");
  flipCard(cardHand1);
  flipCard(cardHand2);
  flipCard(cardHand3);
  flipCard(cardHand4);
  flipCard(cardHand5);
  flipCard(cardHand6);
  flipCard(cardHand7);
  flipCard(cardHand8);
  flipCard(cardHand9);
  flipCard(cardHand10);
  flipCard(cardHand11);
  flipCard(cardHand12);
  cardHand1.classList.remove("hiding");
  cardHand2.classList.remove("hiding");
  cardHand3.classList.remove("hiding");
  cardHand4.classList.remove("hiding");
  cardHand5.classList.remove("hiding");
  cardHand6.classList.remove("hiding");
  cardHand7.classList.remove("hiding");
  cardHand8.classList.remove("hiding");
  cardHand9.classList.remove("hiding");
  cardHand10.classList.remove("hiding");
  cardHand11.classList.remove("hiding");
  cardHand12.classList.remove("hiding");
  cardCount = 0;
  cardCounter.innerHTML = cardCount + "/"+ handSize;
  var levelTitles = document.querySelectorAll(".level");
  for(var k = 3; k<levelTitles.length; k++){
    var levelTitle = levelTitles[k];
    levelTitle.classList.remove("hiding");
  }
  for (var i = 0; i<cardsToChooseFrom.length; i++){
    (function (){
      var card = cardsToChooseFrom[i];
      card.firstChild.classList.remove("add-border");
    }).call(this,i);
  }
}

goBack2.onclick = () => {
  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
  var handCards = document.querySelectorAll(".hand");
  document.getElementById("initial-table").classList.add("hiding");
  document.getElementById("hand-cards").classList.add("hiding");
  document.getElementById("confirm-buttons").classList.add("hiding");
  confirmHandButton.classList.add("not-without-more-selected");
  modDeckArray = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11, mod12, mod13, mod14, mod15, mod16, mod17, mod18, mod19, mod20];
  goBack.classList.remove("hiding");
  goBack2.classList.add("hiding");
  document.getElementById("perk-section").classList.remove("hiding");
  flipCard(cardHand1);
  flipCard(cardHand2);
  flipCard(cardHand3);
  flipCard(cardHand4);
  flipCard(cardHand5);
  flipCard(cardHand6);
  flipCard(cardHand7);
  flipCard(cardHand8);
  flipCard(cardHand9);
  flipCard(cardHand10);
  flipCard(cardHand11);
  flipCard(cardHand12);
  for (var j = 0; j<12; j++){
    var eachCardInHand = handCards[j];
    eachCardInHand.classList.add("hiding");
  }
  cardCount = 0;
  cardCounter.innerHTML = cardCount + "/"+ handSize;
  var levelTitles = document.querySelectorAll(".level");
  for(var k = levelCount+3; k<levelTitles.length; k++){
    var levelTitle = levelTitles[k];
    levelTitle.classList.add("hiding");
  }
  for (var i = 0; i<cardsToChooseFrom.length; i++){
    (function (){
      var card = cardsToChooseFrom[i];
      card.firstChild.classList.remove("add-border");
    }).call(this,i);
  }
}
