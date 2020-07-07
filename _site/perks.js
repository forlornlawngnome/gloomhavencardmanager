function confirmPerks(){
  document.getElementById("initial-table").classList.remove("hiding");
  document.getElementById('hand-cards').classList.remove("hiding");
  let revealedCards = document.querySelectorAll(".hand");
  for (let i = 0; i<handSize; i++){
    let revealedCard = revealedCards[i];
    revealedCard.classList.remove("hiding");
  };
  document.getElementById("confirm-buttons").classList.remove("hiding");
  chooseCardsNumber.innerHTML = "Choose "+ handSize+ " Cards";
  cardCounter.innerHTML = "0/"+handSize;
  healthCounter.innerHTML = health + "/" + maxHealth;
  bearHealthCounter.innerHTML = "Bear Health<br/>"+ bearHealth + "/" + bearMaxHealth;
  xpCounter.innerHTML = xpCount;
  chosenCard1.src = flippedCard;
  chosenCard2.src = flippedCard;
  trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
  document.getElementById("perk-section").classList.add("hiding");
  goBack2.classList.remove("hiding");
}

let brConfirmPerksButton = document.getElementById('brConfirmPerksButton');
let btConfirmPerksButton = document.getElementById('btConfirmPerksButton');
let chConfirmPerksButton = document.getElementById('chConfirmPerksButton');
let swConfirmPerksButton = document.getElementById('swConfirmPerksButton');
let scConfirmPerksButton = document.getElementById('scConfirmPerksButton');
let tiConfirmPerksButton = document.getElementById('tiConfirmPerksButton');
let nsConfirmPerksButton = document.getElementById('nsConfirmPerksButton');


//Cragheart

let chPerk1 = document.getElementById("chPerk1");
let chPerk2 = document.getElementById("chPerk2-1");
let chPerk3 = document.getElementById("chPerk2-2");
let chPerk4 = document.getElementById("chPerk2-3");
let chPerk5 = document.getElementById("chPerk3");
let chPerk6 = document.getElementById("chPerk4-1");
let chPerk7 = document.getElementById("chPerk4-2");
let chPerk8 = document.getElementById("chPerk5-1");
let chPerk9 = document.getElementById("chPerk5-2");
let chPerk10 = document.getElementById("chPerk6");
let chPerk11 = document.getElementById("chPerk7-1");
let chPerk12 = document.getElementById("chPerk7-2");
let chPerk13 = document.getElementById("chPerk8");
let chPerk14 = document.getElementById("chPerk9");
let chPerk15 = document.getElementById("chPerk10");
chConfirmPerksButton.onclick = () => {
  if(chPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 4);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "chchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(chPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 1);
        let newCard = "./cragheart/chPerks/chPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "chchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(chPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod13){
        modDeckArray.splice(i, 1);
        let newCard = "./cragheart/chPerks/chPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "chchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(chPerk4.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 1);
        let newCard = "./cragheart/chPerks/chPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk4", "chchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (chPerk5.classList.contains('checked')){
      let newCard1 = "./cragheart/chPerks/chMinus2.png";
      let newCard2 = "./cragheart/chPerks/chPlus2.png";
      modDeckArray.push(newCard1);
      modDeckArray.push(newCard2);
      modDeckArray.push(newCard2);
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      setCookie("perk5", "chchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (chPerk6.classList.contains('checked')){
    let newCard = "./cragheart/chPerks/chPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk6", "chchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (chPerk7.classList.contains('checked')){
    let newCard = "./cragheart/chPerks/chPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk7", "chchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (chPerk8.classList.contains('checked')){
    let newCard = "./cragheart/chPerks/chPlus2Muddle.png";
    modDeckArray.push(newCard);
    setCookie("perk8", "chchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (chPerk9.classList.contains('checked')){
    let newCard = "./cragheart/chPerks/chPlus2Muddle.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "chchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (chPerk10.classList.contains('checked')){
    let newCard = "./cragheart/chPerks/chRollingPush2.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk10", "chchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (chPerk11.classList.contains('checked')){
    let newCard = "./cragheart/chPerks/chRollingEarth.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk11", "chchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (chPerk12.classList.contains('checked')){
    let newCard = "./cragheart/chPerks/chRollingEarth.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk12", "chchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (chPerk13.classList.contains('checked')){
    let newCard = "./cragheart/chPerks/chRollingWind.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk13", "chchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (chPerk14.classList.contains('checked')){
    setCookie("perk14", "chchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (chPerk15.classList.contains('checked')){
    setCookie("perk15", "chchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Brute
let brPerk1 = document.getElementById("brPerk1");
let brPerk2 = document.getElementById("brPerk2");
let brPerk3 = document.getElementById("brPerk3-1");
let brPerk4 = document.getElementById("brPerk3-2");
let brPerk5 = document.getElementById("brPerk4");
let brPerk6 = document.getElementById("brPerk5-1");
let brPerk7 = document.getElementById("brPerk5-2");
let brPerk8 = document.getElementById("brPerk6");
let brPerk9 = document.getElementById("brPerk7-1");
let brPerk10 = document.getElementById("brPerk7-2");
let brPerk11 = document.getElementById("brPerk8");
let brPerk12 = document.getElementById("brPerk9-1");
let brPerk13 = document.getElementById("brPerk9-2");
let brPerk14 = document.getElementById("brPerk10");
let brPerk15 = document.getElementById("brPerk11");

brConfirmPerksButton.onclick = () => {
  if(brPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "brchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(brPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 1);
        let newCard = "./brute/brPerks/brPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "brchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(brPerk3.classList.contains('checked')){
    let newCard = "./brute/brPerks/brPlus1.png"
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    setCookie("perk3", "brchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(brPerk4.classList.contains('checked')){
    let newCard = "./brute/brPerks/brPlus1.png"
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    setCookie("perk4", "brchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (brPerk5.classList.contains('checked')){
      let newCard = "./brute/brPerks/brPlus3.png";
      modDeckArray.push(newCard);
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      setCookie("perk5", "brchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (brPerk6.classList.contains('checked')){
    let newCard = "./brute/brPerks/brRollingPush1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk6", "brchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (brPerk7.classList.contains('checked')){
    let newCard = "./brute/brPerks/brRollingPush1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk7", "brchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (brPerk8.classList.contains('checked')){
    let newCard = "./brute/brPerks/brRollingPierce3.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk8", "brchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (brPerk9.classList.contains('checked')){
    let newCard = "./brute/brPerks/brRollingStun.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "brchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (brPerk10.classList.contains('checked')){
    let newCard = "./brute/brPerks/brRollingStun.png";
    modDeckArray.push(newCard);
    setCookie("perk10", "brchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (brPerk11.classList.contains('checked')){
    let newCard1 = "./brute/brPerks/brRollingDisarm.png";
    let newCard2 = "./brute/brPerks/brRollingMuddle.png";
    modDeckArray.push(newCard1);
    modDeckArray.push(newCard2);
    setCookie("perk11", "brchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (brPerk12.classList.contains('checked')){
    let newCard = "./brute/brPerks/brRollingAddTarget.png";
    modDeckArray.push(newCard);
    setCookie("perk12", "brchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (brPerk13.classList.contains('checked')){
    let newCard = "./brute/brPerks/brRollingAddTarget.png";
    modDeckArray.push(newCard);
    setCookie("perk13", "brchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (brPerk14.classList.contains('checked')){
    let newCard = "./brute/brPerks/brPlus1Shield.png";
    modDeckArray.push(newCard);
    setCookie("perk14", "brchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (brPerk15.classList.contains('checked')){
    let newCard = "./brute/brPerks/brPlus1.png";
    modDeckArray.push(newCard);
    setCookie("perk15", "brchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

//spellweaver

let swPerk1 = document.getElementById("swPerk1");
let swPerk2 = document.getElementById("swPerk2-1");
let swPerk3 = document.getElementById("swPerk2-2");
let swPerk4 = document.getElementById("swPerk3-1");
let swPerk5 = document.getElementById("swPerk3-2");
let swPerk6 = document.getElementById("swPerk4");
let swPerk7 = document.getElementById("swPerk5");
let swPerk8 = document.getElementById("swPerk6");
let swPerk9 = document.getElementById("swPerk7");
let swPerk10 = document.getElementById("swPerk8-1");
let swPerk11 = document.getElementById("swPerk8-2");
let swPerk12 = document.getElementById("swPerk9-1");
let swPerk13 = document.getElementById("swPerk9-2");
let swPerk14 = document.getElementById("swPerk10");
let swPerk15 = document.getElementById("swPerk11");

swConfirmPerksButton.onclick = () => {
  if(swPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 4);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "swchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(swPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 1);
        let newCard = "./spellweaver/swperks/swPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "swchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(swPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod13){
        modDeckArray.splice(i, 1);
        let newCard = "./spellweaver/swperks/swPlus1.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "swchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(swPerk4.classList.contains('checked')){
    let newCard = "./spellweaver/swperks/swPlus1.png"
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    setCookie("perk4", "swchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (swPerk5.classList.contains('checked')){
    let newCard = "./spellweaver/swperks/swPlus1.png"
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    setCookie("perk5", "swchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (swPerk6.classList.contains('checked')){
    let newCard = "./spellweaver/swperks/swPlus0Stun.png";
    modDeckArray.push(newCard);
    setCookie("perk6", "swchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (swPerk7.classList.contains('checked')){
    let newCard = "./spellweaver/swperks/swPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk7", "swchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (swPerk8.classList.contains('checked')){
    let newCard = "./spellweaver/swperks/swPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk8", "swchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (swPerk9.classList.contains('checked')){
    let newCard = "./spellweaver/swperks/swPlus1Curse.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "swchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (swPerk10.classList.contains('checked')){
    let newCard = "./spellweaver/swperks/swPlus2Fire.png";
    modDeckArray.push(newCard);
    setCookie("perk10", "swchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (swPerk11.classList.contains('checked')){
    let newCard = "./spellweaver/swperks/swPlus2Fire.png";
    modDeckArray.push(newCard);
    setCookie("perk11", "swchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (swPerk12.classList.contains('checked')){
    let newCard = "./spellweaver/swperks/swPlus2Frost.png";
    modDeckArray.push(newCard);
    setCookie("perk12", "swchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (swPerk13.classList.contains('checked')){
    let newCard = "./spellweaver/swperks/swPlus2Frost.png";
    modDeckArray.push(newCard);
    setCookie("perk13", "swchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (swPerk14.classList.contains('checked')){
    let newCard1 = "./spellweaver/swperks/swRollingEarth.png";
    let newCard2 = "./spellweaver/swperks/swRollingWind.png"
    modDeckArray.push(newCard1);
    modDeckArray.push(newCard2);
    setCookie("perk14", "swchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (swPerk15.classList.contains('checked')){
    let newCard1 = "./spellweaver/swperks/swRollingLight.png";
    let newCard2 = "./spellweaver/swperks/swRollingDark.png"
    modDeckArray.push(newCard1);
    modDeckArray.push(newCard2);
    setCookie("perk15", "swchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

//Scoundrel

let scPerk1 = document.getElementById("scPerk1-1");
let scPerk2 = document.getElementById("scPerk1-2");
let scPerk3 = document.getElementById("scPerk2");
let scPerk4 = document.getElementById("scPerk3");
let scPerk5 = document.getElementById("scPerk4");
let scPerk6 = document.getElementById("scPerk5-1");
let scPerk7 = document.getElementById("scPerk5-2");
let scPerk8 = document.getElementById("scPerk6-1");
let scPerk9 = document.getElementById("scPerk6-2");
let scPerk10 = document.getElementById("scPerk7");
let scPerk11 = document.getElementById("scPerk8-1");
let scPerk12 = document.getElementById("scPerk8-2");
let scPerk13 = document.getElementById("scPerk9");
let scPerk14 = document.getElementById("scPerk10");
let scPerk15 = document.getElementById("scPerk11");

scConfirmPerksButton.onclick = () => {
  if(scPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "scchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(scPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "scchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(scPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 4);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "scchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(scPerk4.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod17){
        modDeckArray.splice(i, 1);
        let newCard = "./scoundrel/scPerks/scPlus0.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk4", "scchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (scPerk5.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod16){
        modDeckArray.splice(i, 1);
        let newCard = "./scoundrel/scPerks/scPlus1.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk5", "scchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (scPerk6.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod5){
        modDeckArray.splice(i, 1);
        let newCard = "./scoundrel/scPerks/scPlus2.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk6", "scchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (scPerk7.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod6){
        modDeckArray.splice(i, 1);
        let newCard = "./scoundrel/scPerks/scPlus2.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk7", "scchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (scPerk8.classList.contains('checked')){
    let newCard = "./scoundrel/scPerks/scRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk8", "scchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (scPerk9.classList.contains('checked')){
    let newCard = "./scoundrel/scPerks/scRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk9", "scchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (scPerk10.classList.contains('checked')){
    let newCard = "./scoundrel/scPerks/scRollingPierce3.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk10", "scchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (scPerk11.classList.contains('checked')){
    let newCard = "./scoundrel/scPerks/scRollingPoison.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk11", "scchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (scPerk12.classList.contains('checked')){
    let newCard = "./scoundrel/scPerks/scRollingPoison.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk12", "scchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (scPerk13.classList.contains('checked')){
    let newCard = "./scoundrel/scPerks/scRollingMuddle.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk13", "scchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (scPerk14.classList.contains('checked')){
    let newCard = "./scoundrel/scPerks/scRollingInvisible.png";
    modDeckArray.push(newCard);
    setCookie("perk14", "scchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (scPerk15.classList.contains('checked')){
    setCookie("perk15", "scchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

//Tinkerer
let tiPerk1 = document.getElementById("tiPerk1-1");
let tiPerk2 = document.getElementById("tiPerk1-2");
let tiPerk3 = document.getElementById("tiPerk2");
let tiPerk4 = document.getElementById("tiPerk3");
let tiPerk5 = document.getElementById("tiPerk4");
let tiPerk6 = document.getElementById("tiPerk5");
let tiPerk7 = document.getElementById("tiPerk6");
let tiPerk8 = document.getElementById("tiPerk7-1");
let tiPerk9 = document.getElementById("tiPerk7-2");
let tiPerk10 = document.getElementById("tiPerk8-1");
let tiPerk11 = document.getElementById("tiPerk8-2");
let tiPerk12 = document.getElementById("tiPerk9-1");
let tiPerk13 = document.getElementById("tiPerk9-2");
let tiPerk14 = document.getElementById("tiPerk10");
let tiPerk15 = document.getElementById("tiPerk11");

tiConfirmPerksButton.onclick = () => {
  if(tiPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "tichosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(tiPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "tichosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(tiPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod17){
        modDeckArray.splice(i, 1);
        let newCard = "./tinkerer/tiperks/tiPlus0.png"
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "tichosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(tiPerk4.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk4", "tichosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (tiPerk5.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiPlus3.png";
    modDeckArray.push(newCard);
    setCookie("perk5", "tichosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (tiPerk6.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiRollingFire.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk6", "tichosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (tiPerk7.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiRollingMuddle.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk7", "tichosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (tiPerk8.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk8", "tichosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (tiPerk9.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "tichosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (tiPerk10.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk10", "tichosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (tiPerk11.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk11", "tichosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (tiPerk12.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiPlus1Heal2.png";
    modDeckArray.push(newCard);
    setCookie("perk12", "tichosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (tiPerk13.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiPlus1Heal2.png";
    modDeckArray.push(newCard);
    setCookie("perk13", "tichosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (tiPerk14.classList.contains('checked')){
    let newCard = "./tinkerer/tiperks/tiPlus0AddTarget.png";
    modDeckArray.push(newCard);
    setCookie("perk14", "tichosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (tiPerk15.classList.contains('checked')){
    setCookie("perk15", "tichosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

//Beast tyrant
let btPerk1 = document.getElementById("btPerk1");
let btPerk2 = document.getElementById("btPerk2-1");
let btPerk3 = document.getElementById("btPerk2-2");
let btPerk4 = document.getElementById("btPerk2-3");
let btPerk5 = document.getElementById("btPerk3-1");
let btPerk6 = document.getElementById("btPerk3-2");
let btPerk7 = document.getElementById("btPerk4-1");
let btPerk8 = document.getElementById("btPerk4-2");
let btPerk9 = document.getElementById("btPerk5-1");
let btPerk10 = document.getElementById("btPerk5-2");
let btPerk11 = document.getElementById("btPerk6-1");
let btPerk12 = document.getElementById("btPerk6-2");
let btPerk13 = document.getElementById("btPerk6-3");
let btPerk14 = document.getElementById("btPerk7");
let btPerk15 = document.getElementById("btPerk8");

btConfirmPerksButton.onclick = () => {
  if(btPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "btchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(btPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 1);
        let newCard = "./beasttyrant/btPerks/btPlus1.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "btchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(btPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod15){
        modDeckArray.splice(i, 1);
        let newCard = "./beasttyrant/btPerks/btPlus1.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "btchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(btPerk4.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod16){
        modDeckArray.splice(i, 1);
        let newCard = "./beasttyrant/btPerks/btPlus1.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk4", "btchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (btPerk5.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 1);
        let newCard = "./beasttyrant/btPerks/btPlus2.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk5", "btchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (btPerk6.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod2){
        modDeckArray.splice(i, 1);
        let newCard = "./beasttyrant/btPerks/btPlus2.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk6", "btchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (btPerk7.classList.contains('checked')){
    let newCard = "./beasttyrant/btPerks/btPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk7", "btchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (btPerk8.classList.contains('checked')){
    let newCard = "./beasttyrant/btPerks/btPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk8", "btchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (btPerk9.classList.contains('checked')){
    let newCard = "./beasttyrant/btPerks/btPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "btchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (btPerk10.classList.contains('checked')){
    let newCard = "./beasttyrant/btPerks/btPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk10", "btchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (btPerk11.classList.contains('checked')){
    let newCard = "./beasttyrant/btPerks/btRollingHeal1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk11", "btchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (btPerk12.classList.contains('checked')){
    let newCard = "./beasttyrant/btPerks/btRollingHeal1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk12", "btchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (btPerk13.classList.contains('checked')){
    let newCard = "./beasttyrant/btPerks/btRollingHeal1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk13", "btchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (btPerk14.classList.contains('checked')){
    let newCard = "./beasttyrant/btPerks/btRollingEarth.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk14", "btchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (btPerk15.classList.contains('checked')){
    setCookie("perk15", "btchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

  //nightshroud

  let nsPerk1 = document.getElementById("nsPerk1-1");
  let nsPerk2 = document.getElementById("nsPerk1-2");
  let nsPerk3 = document.getElementById("nsPerk2");
  let nsPerk4 = document.getElementById("nsPerk3-1");
  let nsPerk5 = document.getElementById("nsPerk3-2");
  let nsPerk6 = document.getElementById("nsPerk4-1");
  let nsPerk7 = document.getElementById("nsPerk4-2");
  let nsPerk8 = document.getElementById("nsPerk5-1");
  let nsPerk9 = document.getElementById("nsPerk5-2");
  let nsPerk10 = document.getElementById("nsPerk6-1");
  let nsPerk11 = document.getElementById("nsPerk6-2");
  let nsPerk12 = document.getElementById("nsPerk7");
  let nsPerk13 = document.getElementById("nsPerk8");
  let nsPerk14 = document.getElementById("nsPerk9");
  let nsPerk15 = document.getElementById("nsPerk10");
  let hasMinus1 = 0;

nsConfirmPerksButton.onclick = () => {
if(nsPerk1.classList.contains('checked')){
  for (var i = 0; i<modDeckArray.length; i++){
    if(modDeckArray[i] === mod12){
      modDeckArray.splice(i, 2);
      i = modDeckArray.length;
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    }
  }
  setCookie("perk1", "nschosen", 365);
} else {
  setCookie("perk1", "notChosen", 365);
}
if(nsPerk2.classList.contains('checked')){
  for (var i = 0; i<modDeckArray.length; i++){
    if(modDeckArray[i] === mod14){
      modDeckArray.splice(i, 2);
      i = modDeckArray.length;
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    }
  }
  setCookie("perk2", "nschosen", 365);
} else {
  setCookie("perk2", "notChosen", 365);
}
if(nsPerk3.classList.contains('checked')){
  for (var i = 0; i<modDeckArray.length; i++){
    if(modDeckArray[i] === mod1){
      modDeckArray.splice(i, 4);
      i = modDeckArray.length;
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    }
  }
  setCookie("perk3", "nschosen", 365);
} else {
  setCookie("perk3", "notChosen", 365);
}
if(nsPerk4.classList.contains('checked')){
  let newCard = "./nightshroud/nsPerks/nsMinus1Dark.png";
  modDeckArray.push(newCard);
  hasMinus1++;
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  setCookie("perk4", "nschosen", 365);
} else {
  setCookie("perk4", "notChosen", 365);
}
if (nsPerk5.classList.contains('checked')){
  let newCard = "./nightshroud/nsPerks/nsMinus1Dark.png";
  modDeckArray.push(newCard);
  hasMinus1++;
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  setCookie("perk5", "nschosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
if (nsPerk6.classList.contains('checked') && (hasMinus1> 0)){
      hasMinus1--;
      modDeckArray.pop();
      let newCard = "./nightshroud/nsPerks/nsPlus1Dark.png";
      modDeckArray.unshift(newCard);
      cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      setCookie("perk6", "nschosen", 365);
    } else {
      setCookie("perk6", "notChosen", 365);
    }
if (nsPerk7.classList.contains('checked') && (hasMinus1> 0)){
    hasMinus1--;
    modDeckArray.pop();
    let newCard = "./nightshroud/nsPerks/nsPlus1Dark.png";
    modDeckArray.unshift(newCard);
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    setCookie("perk7", "nschosen", 365);
} else {
  setCookie("perk7", "notChosen", 365);
}
if (nsPerk8.classList.contains('checked')){
  let newCard = "./nightshroud/nsPerks/nsPlus1Invisible.png";
  modDeckArray.push(newCard);
  setCookie("perk8", "nschosen", 365);
} else {
  setCookie("perk8", "notChosen", 365);
}
if (nsPerk9.classList.contains('checked')){
  let newCard = "./nightshroud/nsPerks/nsPlus1Invisible.png";
  modDeckArray.push(newCard);
  setCookie("perk9", "nschosen", 365);
} else {
  setCookie("perk9", "notChosen", 365);
}
if (nsPerk10.classList.contains('checked')){
  let newCard = "./nightshroud/nsPerks/nsRollingMuddle.png";
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  setCookie("perk10", "nschosen", 365);
} else {
  setCookie("perk10", "notChosen", 365);
}
if (nsPerk11.classList.contains('checked')){
  let newCard = "./nightshroud/nsPerks/nsRollingMuddle.png";
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  setCookie("perk11", "nschosen", 365);
} else {
  setCookie("perk11", "notChosen", 365);
}
if (nsPerk12.classList.contains('checked')){
  let newCard = "./nightshroud/nsPerks/nsRollingHeal1.png";
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  setCookie("perk12", "nschosen", 365);
} else {
  setCookie("perk12", "notChosen", 365);
}
if (nsPerk13.classList.contains('checked')){
  let newCard = "./nightshroud/nsPerks/nsRollingCurse.png";
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  setCookie("perk13", "nschosen", 365);
} else {
  setCookie("perk13", "notChosen", 365);
}
if (nsPerk14.classList.contains('checked')){
  let newCard = "./nightshroud/nsPerks/nsRollingAddTarget.png";
  modDeckArray.push(newCard);
  setCookie("perk14", "nschosen", 365);
} else {
  setCookie("perk14", "notChosen", 365);
}
if (nsPerk15.classList.contains('checked')){
  let newCard = "./nightshroud/nsPerks/nsPlus1.png";
  modDeckArray.push(newCard);
  modDeckArray.push(newCard);
  setCookie("perk15", "nschosen", 365);
} else {
  setCookie("perk15", "notChosen", 365);
}
defaultDeckArray = modDeckArray.slice();
confirmPerks();
}

//berserker

let bePerk1 = document.getElementById("bePerk1");
let bePerk2 = document.getElementById("bePerk2");
let bePerk3 = document.getElementById("bePerk3-1");
let bePerk4 = document.getElementById("bePerk3-2");
let bePerk5 = document.getElementById("bePerk4-1");
let bePerk6 = document.getElementById("bePerk4-2");
let bePerk7 = document.getElementById("bePerk5-1");
let bePerk8 = document.getElementById("bePerk5-2");
let bePerk9 = document.getElementById("bePerk6-1");
let bePerk10 = document.getElementById("bePerk6-2");
let bePerk11 = document.getElementById("bePerk7");
let bePerk12 = document.getElementById("bePerk8");
let bePerk13 = document.getElementById("bePerk9-1");
let bePerk14 = document.getElementById("bePerk9-2");
let bePerk15 = document.getElementById("bePerk10");

beConfirmPerksButton.onclick = () => {
    if(bePerk1.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod12){
                modDeckArray.splice(i, 2);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        setCookie("perk1", "bechosen", 365);
    } else {
        setCookie("perk1", "notChosen", 365);
    }
    if(bePerk2.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod1){
                modDeckArray.splice(i, 4);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        setCookie("perk2", "bechosen", 365);
    } else {
        setCookie("perk2", "notChosen", 365);
    }
    if(bePerk3.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod14){
                modDeckArray.splice(i, 1);
                let newCard = "./berserker/bePerks/bePlus1.png"
                modDeckArray.push(newCard);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        setCookie("perk3", "bechosen", 365);
    } else {
        setCookie("perk3", "notChosen", 365);
    }
    if(bePerk4.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod15){
                modDeckArray.splice(i, 1);
                let newCard = "./berserker/bePerks/bePlus1.png"
                modDeckArray.push(newCard);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
        setCookie("perk4", "bechosen", 365);
    } else {
        setCookie("perk4", "notChosen", 365);
    }
    if (bePerk5.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod5){
                modDeckArray.splice(i, 1);
                let newCard = "./berserker/bePerks/beRollingPlus2.png"
                modDeckArray.push(newCard);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
        setCookie("perk5", "bechosen", 365);
    } else {
        setCookie("perk5", "notChosen", 365);
    }
    if (bePerk6.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod6){
                modDeckArray.splice(i, 1);
                let newCard = "./berserker/bePerks/beRollingPlus2.png"
                modDeckArray.push(newCard);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
        setCookie("perk6", "bechosen", 365);
    } else {
        setCookie("perk6", "notChosen", 365);
    }
    if (bePerk7.classList.contains('checked')){
        let newCard = "./berserker/bePerks/beRollingWound.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
        setCookie("perk7", "bechosen", 365);
    } else {
        setCookie("perk7", "notChosen", 365);
    }
    if (bePerk8.classList.contains('checked')){
        let newCard = "./berserker/bePerks/beRollingWound.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        setCookie("perk8", "bechosen", 365);
    } else {
        setCookie("perk8", "notChosen", 365);
    }
    if (bePerk9.classList.contains('checked')){
        let newCard = "./berserker/bePerks/beRollingStun.png";
        modDeckArray.push(newCard);
        setCookie("perk9", "bechosen", 365);
    } else {
        setCookie("perk9", "notChosen", 365);
    }
    if (bePerk10.classList.contains('checked')){
        let newCard = "./berserker/bePerks/beRollingStun.png";
        modDeckArray.push(newCard);
        setCookie("perk10", "bechosen", 365);
    } else {
        setCookie("perk10", "notChosen", 365);
    }
    if (bePerk11.classList.contains('checked')){
        let newCard = "./berserker/bePerks/beRollingPlus1Disarm.png";
        modDeckArray.push(newCard);
        setCookie("perk11", "bechosen", 365);
    } else {
        setCookie("perk11", "notChosen", 365);
    }
    if (bePerk12.classList.contains('checked')){
        let newCard = "./berserker/bePerks/beRollingHeal1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        setCookie("perk12", "bechosen", 365);
    } else {
        setCookie("perk12", "notChosen", 365);
    }
    if (bePerk13.classList.contains('checked')){
        let newCard = "./berserker/bePerks/bePlus2Fire.png";
        modDeckArray.push(newCard);
        setCookie("perk13", "bechosen", 365);
    } else {
        setCookie("perk13", "notChosen", 365);
    }
    if (bePerk14.classList.contains('checked')){
        let newCard = "./berserker/bePerks/bePlus2Fire.png";
        modDeckArray.push(newCard);
        setCookie("perk14", "bechosen", 365);
    } else {
        setCookie("perk14", "notChosen", 365);
    }
    if (bePerk15.classList.contains('checked')){
        setCookie("perk15", "bechosen", 365);
    } else {
        setCookie("perk15", "notChosen", 365);
    }
    defaultDeckArray = modDeckArray.slice();
    confirmPerks();
}


//sunkeeper

let skPerk1 = document.getElementById("skPerk1-1");
let skPerk2 = document.getElementById("skPerk1-2");
let skPerk3 = document.getElementById("skPerk2");
let skPerk4 = document.getElementById("skPerk3");
let skPerk5 = document.getElementById("skPerk4");
let skPerk6 = document.getElementById("skPerk5-1");
let skPerk7 = document.getElementById("skPerk5-2");
let skPerk8 = document.getElementById("skPerk6-1");
let skPerk9 = document.getElementById("skPerk6-2");
let skPerk10 = document.getElementById("skPerk7");
let skPerk11 = document.getElementById("skPerk8-1");
let skPerk12 = document.getElementById("skPerk8-2");
let skPerk13 = document.getElementById("skPerk9");
let skPerk14 = document.getElementById("skPerk10");
let skPerk15 = document.getElementById("skPerk11");

skConfirmPerksButton.onclick = () => {
    if(skPerk1.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod12){
                modDeckArray.splice(i, 2);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        setCookie("perk1", "bechosen", 365);
    } else {
        setCookie("perk1", "notChosen", 365);
    }
    if(skPerk2.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod14){
                modDeckArray.splice(i, 2);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        setCookie("perk2", "bechosen", 365);
    } else {
        setCookie("perk2", "notChosen", 365);
    }
    if(skPerk3.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod1){
                modDeckArray.splice(i, 4);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        setCookie("perk3", "bechosen", 365);
    } else {
        setCookie("perk3", "notChosen", 365);
    }
    if(skPerk4.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod17){
                modDeckArray.splice(i, 1);
                let newCard = "./sunkeeper/skPerks/skPlus0.png";
                modDeckArray.push(newCard);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
        setCookie("perk4", "bechosen", 365);
    } else {
        setCookie("perk4", "notChosen", 365);
    }
    if (skPerk5.classList.contains('checked')){
        for (var i = 0; i<modDeckArray.length; i++){
            if(modDeckArray[i] === mod5){
                modDeckArray.splice(i, 1);
                let newCard = "./sunkeeper/skPerks/skPlus2.png";
                modDeckArray.push(newCard);
                i = modDeckArray.length;
                cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
            }
        }
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
        setCookie("perk5", "bechosen", 365);
    } else {
        setCookie("perk5", "notChosen", 365);
    }
    if (skPerk6.classList.contains('checked')){
        let newCard = "./sunkeeper/skPerks/skRollingPlus1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
        setCookie("perk6", "bechosen", 365);
    } else {
        setCookie("perk6", "notChosen", 365);
    }
    if (skPerk7.classList.contains('checked')){
        let newCard = "./sunkeeper/skPerks/skRollingPlus1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
        setCookie("perk7", "bechosen", 365);
    } else {
        setCookie("perk7", "notChosen", 365);
    }
    if (skPerk8.classList.contains('checked')){
        let newCard = "./sunkeeper/skPerks/skRollingHeal1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        setCookie("perk8", "bechosen", 365);
    } else {
        setCookie("perk8", "notChosen", 365);
    }
    if (skPerk9.classList.contains('checked')){
        let newCard = "./sunkeeper/skPerks/skRollingHeal1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        setCookie("perk9", "bechosen", 365);
    } else {
        setCookie("perk9", "notChosen", 365);
    }
    if (skPerk10.classList.contains('checked')){
        let newCard = "./sunkeeper/skPerks/skRollingStun.png";
        modDeckArray.push(newCard);
        setCookie("perk10", "bechosen", 365);
    } else {
        setCookie("perk10", "notChosen", 365);
    }
    if (skPerk11.classList.contains('checked')){
        let newCard = "./sunkeeper/skPerks/skRollingLight.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        setCookie("perk11", "bechosen", 365);
    } else {
        setCookie("perk11", "notChosen", 365);
    }
    if (skPerk12.classList.contains('checked')){
        let newCard = "./sunkeeper/skPerks/skRollingLight.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        setCookie("perk12", "bechosen", 365);
    } else {
        setCookie("perk12", "notChosen", 365);
    }
    if (skPerk13.classList.contains('checked')){
        let newCard = "./sunkeeper/skPerks/skRollingShield1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        setCookie("perk13", "bechosen", 365);
    } else {
        setCookie("perk13", "notChosen", 365);
    }
    if (skPerk14.classList.contains('checked')){
        let newCard = "./sunkeeper/skPerks/skPlus1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        setCookie("perk14", "bechosen", 365);
    } else {
        setCookie("perk14", "notChosen", 365);
    }
    if (skPerk15.classList.contains('checked')){
        setCookie("perk15", "bechosen", 365);
    } else {
        setCookie("perk15", "notChosen", 365);
    }
    defaultDeckArray = modDeckArray.slice();
    confirmPerks();
}