function confirmCharacter(){
  if(characterSelected){
  if(cragheart.classList.contains("character-selected")){
    let characterChoice = "Cragheart";
    setCookie("character", "cragheart", 365);
    document.getElementById("cragheart-perks").classList.remove("hiding");
    flippedCard = "./cragheart/crBack.jpg";
    handSize = 11;
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if(!(i === 14)){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './cragheart/0"+i+".jpg' />";
        } else {
          cardToChooseFrom.innerHTML = "";
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 10;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 2:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 3:
      maxHealth = 14;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 4:
      maxHealth = 16;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 5:
      maxHealth = 18;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 6:
      maxHealth = 20;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 7:
      maxHealth = 22;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 8:
      maxHealth = 24;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 26;
      health = maxHealth;
      break;
    }
  } else if(brute.classList.contains("character-selected")){
    let characterChoice = "Brute";
    setCookie("character", "brute", 365);
    document.getElementById("brute-perks").classList.remove("hiding");
    flippedCard = "./brute/brBack.png";
    handSize = 10
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<13) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './brute/br"+i+".png' />";
        } else {
          cardToChooseFrom.innerHTML = '';
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 10;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 2:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 3:
      maxHealth = 14;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 4:
      maxHealth = 16;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 5:
      maxHealth = 18;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 6:
      maxHealth = 20;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 7:
      maxHealth = 22;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 8:
      maxHealth = 24;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 26;
      health = maxHealth;
      break;
    }
  } else if(mindthief.classList.contains("character-selected")){
    let characterChoice = "Mindthief";
    setCookie("character", "mindthief", 365);
    document.getElementById("mindthief-perks").classList.remove("hiding");
    flippedCard = "./mindthief/mtBack.jpg";
    handSize = 10
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<13) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './mindthief/mt"+i+".jpg' />";
        } else {
          cardToChooseFrom.innerHTML = '';
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 6;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 2:
      maxHealth = 7;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 3:
      maxHealth = 8;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 4:
      maxHealth = 9;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 5:
      maxHealth = 10;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 6:
      maxHealth = 11;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 7:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 8:
      maxHealth = 13;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 14;
      health = maxHealth;
      break;
    }
  } else if(spellweaver.classList.contains("character-selected")){
    let characterChoice = "Spellweaver";
    setCookie("character", "spellweaver", 365);
    document.getElementById("spellweaver-perks").classList.remove("hiding");
    flippedCard = "./spellweaver/swBack.jpg";
    handSize = 8
    cardHand9.classList.add("hiding");
    cardHand10.classList.add("hiding");
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<11) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './spellweaver/sw"+i+".jpg' />";
        } else {
          cardToChooseFrom.innerHTML = '';
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 6;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 2:
      maxHealth = 7;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 3:
      maxHealth = 8;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 4:
      maxHealth = 9;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 5:
      maxHealth = 10;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 6:
      maxHealth = 11;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 7:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 8:
      maxHealth = 13;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 14;
      health = maxHealth;
      break;
    }
  } else if(scoundrel.classList.contains("character-selected")){
    let characterChoice = "Scoundrel";
    setCookie("character", "scoundrel", 365);
    document.getElementById("scoundrel-perks").classList.remove("hiding");
    flippedCard = "./scoundrel/scBack.jpg";
    handSize = 9
    cardHand10.classList.add("hiding");
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<12) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './scoundrel/sc"+i+".jpg' />";
        } else {
          cardToChooseFrom.innerHTML = '';
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 8;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 2:
      maxHealth = 9;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 3:
      maxHealth = 11;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 4:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 5:
      maxHealth = 14;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 6:
      maxHealth = 15;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 7:
      maxHealth = 17;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 8:
      maxHealth = 18;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 20;
      health = maxHealth;
      break;
    }
  } else if(tinkerer.classList.contains("character-selected")){
    let characterChoice = "Tinkerer";
    setCookie("character", "tinkerer", 365);
    document.getElementById("tinkerer-perks").classList.remove("hiding");
    flippedCard = "./tinkerer/tiBack.jpg";
    handSize = 12
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './tinkerer/ti"+i+".jpg' />";
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 8;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 2:
      maxHealth = 9;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 3:
      maxHealth = 11;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 4:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 5:
      maxHealth = 14;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 6:
      maxHealth = 15;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 7:
      maxHealth = 17;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 8:
      maxHealth = 18;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 20;
      health = maxHealth;
      break;
    }
  } else if(doomStalker.classList.contains("character-selected")){
    let characterChoice = "Doomstalker";
    setCookie("character", "doomstalker", 365);
    document.getElementById("doomstalker-perks").classList.remove("hiding");
    flippedCard = "./doomstalker/dsBack.jpg";
    handSize = 12
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './doomstalker/ds"+i+".jpg' />";
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 8;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 2:
      maxHealth = 9;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 3:
      maxHealth = 11;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 4:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 5:
      maxHealth = 14;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 6:
      maxHealth = 15;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 7:
      maxHealth = 17;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 8:
      maxHealth = 18;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 20;
      health = maxHealth;
      break;
    }
  } else if(beastTyrant.classList.contains("character-selected")){
    let characterChoice = "Beast Tyrant";
    setCookie("character", "beasttyrant", 365);
    document.getElementById("beast-tyrant-perks").classList.remove("hiding");
    flippedCard = "./beasttyrant/btBack.jpg";
    handSize = 10
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    document.getElementById("bear-health").classList.remove("hiding");
    document.getElementById("bear-health-counter").classList.remove("hiding");
    document.getElementById("damage-bear").classList.remove("hiding");
    document.getElementById("heal-bear").classList.remove("hiding");
    document.getElementById("bear-status-effects").classList.remove("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<13) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './beasttyrant/bt"+i+".jpg' />";
        } else {
          cardToChooseFrom.innerHTML = '';
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 6;
      health = maxHealth;
      bearMaxHealth = 10;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 2:
      maxHealth = 7;
      health = maxHealth;
      bearMaxHealth = 12;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 3:
      maxHealth = 8;
      health = maxHealth;
      bearMaxHealth = 14;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 4:
      maxHealth = 9;
      health = maxHealth;
      bearMaxHealth = 16;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 5:
      maxHealth = 10;
      health = maxHealth;
      bearMaxHealth = 18;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 6:
      maxHealth = 11;
      health = maxHealth;
      bearMaxHealth = 20;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 7:
      maxHealth = 12;
      health = maxHealth;
      bearMaxHealth = 22;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 8:
      maxHealth = 13;
      health = maxHealth;
      bearMaxHealth = 24;
      bearHealth = bearMaxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 14;
      health = maxHealth;
      bearMaxHealth = 26;
      bearHealth = bearMaxHealth;
      break;
    }
  } else if(nightshroud.classList.contains("character-selected")){
    let characterChoice = "nightshroud";
    setCookie("character", "nightshroud", 365);
    document.getElementById("nightshroud-perks").classList.remove("hiding");
    flippedCard = "./nightshroud/NS/nsBack.png";
    handSize = 9
    cardHand10.classList.add("hiding");
    cardHand11.classList.add("hiding");
    cardHand12.classList.add("hiding");
    var hand = document.querySelectorAll(".hand");
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    for (var i = 0; i<cardsToChooseFrom.length; i++){
      (function (){
        var cardToChooseFrom = cardsToChooseFrom[i];
        if((i>-1 && i<12) || i>14){
          cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './nightshroud/NS/ns"+i+".png' />";
        } else {
          cardToChooseFrom.innerHTML = '';
        }
      }).call(this,i);
    }
    for (var j = 0; j<hand.length; j++){
      (function () {
        var handCardBack = hand[j];
        handCardBack.src = flippedCard;
      }).call(this,j);
    }
    switch (levelCount) {
      case 1:
      maxHealth = 8;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 15; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 3; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 2:
      maxHealth = 9;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 17; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 4; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 3:
      maxHealth = 11;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 19; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 5; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 4:
      maxHealth = 12;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 21; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 6; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 5:
      maxHealth = 14;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 23; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 7; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 6:
      maxHealth = 15;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 25; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 8; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 7:
      maxHealth = 17;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 27; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 9; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 8:
      maxHealth = 18;
      health = maxHealth;
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for(var i = 29; i<cardsToChooseFrom.length; i++){
        var cardToChooseFrom = cardsToChooseFrom[i];
        cardToChooseFrom.innerHTML = "";
      }
      var levelTitles = document.querySelectorAll(".level");
      for(var j = 10; j<levelTitles.length; j++){
        var levelTitle = levelTitles[j];
        levelTitle.classList.add("hiding");
      }
      break;
      case 9:
      maxHealth = 20;
      health = maxHealth;
      break;
    }
  } else if(berserker.classList.contains("character-selected")){
      let characterChoice = "berserker";
      setCookie("character", "berserker", 365);
      document.getElementById("berserker-perks").classList.remove("hiding");
      flippedCard = "./berserker/BE/beBack.png";
      handSize = 10;
      cardHand11.classList.add("hiding");
      cardHand12.classList.add("hiding");
      var hand = document.querySelectorAll(".hand");
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for (var i = 0; i<cardsToChooseFrom.length; i++){
          (function (){
              var cardToChooseFrom = cardsToChooseFrom[i];
              if((i>-1 && i<13) || i>14){
                  cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './berserker/BE/be"+i+".png' />";
              } else {
                  cardToChooseFrom.innerHTML = '';
              }
          }).call(this,i);
      }
      for (var j = 0; j<hand.length; j++){
          (function () {
              var handCardBack = hand[j];
              handCardBack.src = flippedCard;
          }).call(this,j);
      }
      switch (levelCount) {
          case 1:
              maxHealth = 10;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 15  ; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 3; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 2:
              maxHealth = 12;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 17; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 4; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 3:
              maxHealth = 14;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 19; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 5; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 4:
              maxHealth = 16;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 21; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 6; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 5:
              maxHealth = 18;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 23; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 7; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 6:
              maxHealth = 20;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 25; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 8; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 7:
              maxHealth = 22;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 27; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 9; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 8:
              maxHealth = 24;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 29; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 10; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 9:
              maxHealth = 26;
              health = maxHealth;
              break;
      }
  } else if(sunkeeper.classList.contains("character-selected")){
      let characterChoice = "sunkeeper";
      setCookie("character", "sunkeeper", 365);
      document.getElementById("sunkeeper-perks").classList.remove("hiding");
      flippedCard = "./sunkeeper/SK/skBack.png";
      handSize = 11;
      cardHand12.classList.add("hiding");
      var hand = document.querySelectorAll(".hand");
      var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for (var i = 0; i<cardsToChooseFrom.length; i++){
          (function (){
              var cardToChooseFrom = cardsToChooseFrom[i];
              if((i>-1 && i<14) || i>14){
                  cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './sunkeeper/SK/sk"+i+".png' />";
              } else {
                  cardToChooseFrom.innerHTML = '';
              }
          }).call(this,i);
      }
      for (var j = 0; j<hand.length; j++){
          (function () {
              var handCardBack = hand[j];
              handCardBack.src = flippedCard;
          }).call(this,j);
      }
      switch (levelCount) {
          case 1:
              maxHealth = 10;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 15  ; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 3; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 2:
              maxHealth = 12;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 17; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 4; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 3:
              maxHealth = 14;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 19; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 5; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 4:
              maxHealth = 16;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 21; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 6; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 5:
              maxHealth = 18;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 23; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 7; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 6:
              maxHealth = 20;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 25; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 8; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 7:
              maxHealth = 22;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 27; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 9; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 8:
              maxHealth = 24;
              health = maxHealth;
              var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
              for(var i = 29; i<cardsToChooseFrom.length; i++){
                  var cardToChooseFrom = cardsToChooseFrom[i];
                  cardToChooseFrom.innerHTML = "";
              }
              var levelTitles = document.querySelectorAll(".level");
              for(var j = 10; j<levelTitles.length; j++){
                  var levelTitle = levelTitles[j];
                  levelTitle.classList.add("hiding");
              }
              break;
          case 9:
              maxHealth = 26;
              health = maxHealth;
              break;
      }
  }
  goBack.classList.remove("hiding");
  document.getElementById("select-class-section").classList.add("hiding");
  document.getElementById("level-selection").classList.add("hiding");
  document.getElementById("perk-section").classList.remove("hiding");
  setCookie("level", `${levelCount}`, 365);
}
}


confirmCharacterButton.onclick = () => {
  confirmCharacter();
}
