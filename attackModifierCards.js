//attack modifiers
let modifierDeck = document.getElementById('amDeck');
let playedModifiers = document.getElementById('playedModifiers');
let mod1 = "./1cards/plus0.png";
let mod2 = "./1cards/plus0.png";
let mod3 = "./1cards/plus0.png";
let mod4 = "./1cards/plus0.png";
let mod5 = "./1cards/plus0.png";
let mod6 = "./1cards/plus0.png";
let mod7 = "./1cards/plus1.png";
let mod8 = "./1cards/plus1.png";
let mod9 = "./1cards/plus1.png";
let mod10 = "./1cards/plus1.png";
let mod11 = "./1cards/plus1.png";
let mod12 = "./1cards/minus1.png";
let mod13 = "./1cards/minus1.png";
let mod14 = "./1cards/minus1.png";
let mod15 = "./1cards/minus1.png";
let mod16 = "./1cards/minus1.png";
let mod17 = "./1cards/minus2.png";
let mod18 = "./1cards/plus2.png";
let mod19 = "./1cards/curseShuffle.png";
let mod20 = "./1cards/blessShuffle.png";
let blessCard = "./1cards/bless.png";
let curseCard = "./1cards/curse.png";
let minus1 = "./1cards/newMinus1.png";
let modDeckArray = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11, mod12, mod13, mod14, mod15, mod16, mod17, mod18, mod19, mod20];
let defaultDeckArray = [];
let playedModifierArray = [];
let mustShuffle = document.getElementById("mustShuffle");
let blessButton = document.getElementById('bless');
let curseButton = document.getElementById('curse');
let shuffleModsButton = document.getElementById('shuffleMods');
let numOfCurses = 0;
let numOfBlesses = 0;
let addMinusOne = document.getElementById('add-minus-1');
let cardsInDeckText = document.getElementById("cardsInDeck");
let resetDeckButton = document.getElementById("reset-deck");
let usedMods = document.getElementById("used-modifier-cards");

modifierDeck.onclick = () => {
  if(modDeckArray.length>0){
    playedModifierArray.push(modDeckArray[0]);
    var DOM_img = document.createElement("img");
    DOM_img.src = playedModifierArray[playedModifierArray.length - 1];
    usedMods.appendChild(DOM_img);
    playedModifiers.classList.remove('hiding');
    playedModifiers.src = playedModifierArray[playedModifierArray.length - 1];
    playedModifiers.classList.add(`${modDeckArray[0]}`);
    modDeckArray.splice(0, 1);
    if (modDeckArray.length === 0){
      modifierDeck.classList.add("hiding");
    }
    if (playedModifiers.classList.contains("./1cards/curseShuffle.png") || playedModifiers.classList.contains("./1cards/blessShuffle.png")){
      mustShuffle.classList.remove("invisible");
    }
    if (playedModifiers.classList.contains("./1cards/curse.png")){
      numOfCurses--;
      cursesInDeck.innerHTML = "Extra Curses in Deck: "+numOfCurses;
    }
    if (playedModifiers.classList.contains("./1cards/bless.png")){
      numOfBlesses--;
      blessesInDeck.innerHTML = "Extra Blesses in Deck: "+numOfBlesses;
    }
    if (playedModifiers.classList.contains("./1cards/bless.png") || playedModifiers.classList.contains("./1cards/curse.png")){
      playedModifierArray.splice((playedModifierArray.length-1), 1);
      playedModifiers.classList.remove("./1cards/bless.png");
      playedModifiers.classList.remove("./1cards/curse.png");
    }
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  }
}

function shuffleModifierDeck (){
  while (playedModifierArray.length > 0){
    modDeckArray.push(playedModifierArray[playedModifierArray.length - 1]);
    playedModifierArray.pop();
    playedModifiers.src = '';
    modifierDeck.src = "./1cards/amBack.png"
    mustShuffle.classList.add('invisible');
    playedModifiers.className = "attack-modifier";
    playedModifiers.classList.add('hiding');
    modifierDeck.classList.remove("hiding");
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    usedMods.innerHTML = "";
    shuffleDeck();
  }
}

function shuffleDeck (){
  var deckCopy = modDeckArray.slice();
  modDeckArray = [];
  while (deckCopy.length>0){
    var randomNumber = Math.floor(Math.random()*deckCopy.length);
    modDeckArray.push(deckCopy[randomNumber]);
    deckCopy.splice(randomNumber,1);
  }
}

shuffleModsButton.onclick = () => {
  shuffleModifierDeck();
}

function blessDeck (){
  if(numOfBlesses<10){
    modDeckArray.push(blessCard);
    modifierDeck.classList.remove("hiding");
    numOfBlesses++
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    shuffleDeck();
    blessesInDeck.innerHTML = "Extra Blesses in Deck: "+numOfBlesses;
  }
}

blessButton.onclick = () => {
  blessDeck();
}

function curseDeck (){
  if (numOfCurses<10){
    modDeckArray.push(curseCard);
    modifierDeck.classList.remove("hiding");
    numOfCurses++
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    shuffleDeck();
    cursesInDeck.innerHTML = "Extra Curses in Deck: "+numOfCurses;
  }
}

curseButton.onclick = () => {
  curseDeck();
}

function addMinus1 (){
  modDeckArray.push(minus1);
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
}

addMinusOne.onclick = () => {
  addMinus1();
}

function resetDeck () {
  shuffleModifierDeck();
  modDeckArray = defaultDeckArray.slice();
  numOfCurses = 0;
  numOfBlesses = 0;
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  blessesInDeck.innerHTML = "Extra Blesses in Deck: "+numOfBlesses;
  cursesInDeck.innerHTML = "Extra Curses in Deck: "+numOfCurses;
  shuffleDeck();
}

resetDeckButton.onclick = () => {
  resetDeck();
}

var checkboxes = document.querySelectorAll(".checkbox");
for (var i = 0; i<checkboxes.length; i++){
  (function(){
    var checkbox = checkboxes[i];
    checkbox.onclick = () =>{
      if(!checkbox.classList.contains("checked")){
        checkbox.classList.add("checked");
      } else {
        checkbox.classList.remove("checked");
      }

    }
  }).call(this,i);
}
//Doomstalker Perks
  let dsConfirmPerksButton = document.getElementById("dsConfirmPerksButton");
  let dsPerk1 = document.getElementById("dsRemove2minus1-1");
  let dsPerk2 = document.getElementById("dsRemove2minus1-2");
  let dsPerk3 = document.getElementById("dsReplacePlus0withPlus1-1");
  let dsPerk4 = document.getElementById("dsReplacePlus0withPlus1-2");
  let dsPerk5 = document.getElementById("dsReplacePlus0withPlus1-3");
  let dsPerk6 = document.getElementById("dsAddRollingPlus1-1");
  let dsPerk7 = document.getElementById("dsAddRollingPlus1-2");
  let dsPerk8 = document.getElementById("dsAddPlus2Muddle");
  let dsPerk9 = document.getElementById("dsAddPlus1Poison");
  let dsPerk10 = document.getElementById("dsAddPlus1Wound");
  let dsPerk11 = document.getElementById("dsAddPlus1Immobilize");
  let dsPerk12 = document.getElementById("dsAddPlus0Stun");
  let dsPerk13 = document.getElementById("dsAddRollingAddTarget-1");
  let dsPerk14 = document.getElementById("dsAddRollingAddTarget-2");
  let dsPerk15 = document.getElementById("dsIgnoreNegEffects");
dsConfirmPerksButton.onclick = () =>{
  if(dsPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "dschosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(dsPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "dschosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (dsPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 2);
        let newCard = "./doomstalker/dsPerks/dsPlus1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "dschosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (dsPerk4.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod3){
        modDeckArray.splice(i, 2);
        let newCard = "./doomstalker/dsPerks/dsPlus1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk4", "dschosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (dsPerk5.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod5){
        modDeckArray.splice(i, 2);
        let newCard = "./doomstalker/dsPerks/dsPlus1.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk5", "dschosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (dsPerk6.classList.contains('checked')){
    let newCard = "./doomstalker/dsPerks/dsRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk6", "dschosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (dsPerk7.classList.contains('checked')){
    let newCard = "./doomstalker/dsPerks/dsRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk7", "dschosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (dsPerk8.classList.contains('checked')){
    let newCard = "./doomstalker/dsPerks/dsPlus2Muddle.png";
    modDeckArray.push(newCard);
    setCookie("perk8", "dschosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (dsPerk9.classList.contains('checked')){
    let newCard = "./doomstalker/dsPerks/dsPlus1Poison.png";
    modDeckArray.push(newCard);
    setCookie("perk9", "dschosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (dsPerk10.classList.contains('checked')){
    let newCard = "./doomstalker/dsPerks/dsPlus1Wound.png";
    modDeckArray.push(newCard);
    setCookie("perk10", "dschosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (dsPerk11.classList.contains('checked')){
    let newCard = "./doomstalker/dsPerks/dsPlus1Immobilize.png";
    modDeckArray.push(newCard);
    setCookie("perk11", "dschosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (dsPerk12.classList.contains('checked')){
    let newCard = "./doomstalker/dsPerks/dsPlus0Stun.png";
    modDeckArray.push(newCard);
    setCookie("perk12", "dschosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (dsPerk13.classList.contains('checked')){
    let newCard = "./doomstalker/dsPerks/dsRollingAddTarget.png";
    modDeckArray.push(newCard);
    setCookie("perk13", "dschosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (dsPerk14.classList.contains('checked')){
    let newCard = "./doomstalker/dsPerks/dsRollingAddTarget.png";
    modDeckArray.push(newCard);
    setCookie("perk14", "dschosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (dsPerk15.classList.contains('checked')){
    setCookie("perk15", "dschosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}
//Mindthief perks

  let mtConfirmPerksButton = document.getElementById("mtConfirmPerksButton");
  let mtPerk1 = document.getElementById("mtRemove2minus1-1");
  let mtPerk2 = document.getElementById("mtRemove2minus1-2");
  let mtPerk3 = document.getElementById("mtRemove4Plus0");
  let mtPerk4 = document.getElementById("mtReplaceTwoPlus1WithTwoPlus2");
  let mtPerk5 = document.getElementById("mtReplaceMinus2WithPlus0");
  let mtPerk6 = document.getElementById("mtPlus2Frost1");
  let mtPerk7 = document.getElementById("mtPlus2Frost2");
  let mtPerk8 = document.getElementById("mtAddTwoRollingPlus11");
  let mtPerk9 = document.getElementById("mtAddTwoRollingPlus12");
  let mtPerk10 = document.getElementById("mtAddRollingPull1");
  let mtPerk11 = document.getElementById("mtAddRollingMuddle");
  let mtPerk12 = document.getElementById("mtAddRollingImmobilize");
  let mtPerk13 = document.getElementById("mtAddRollingStun");
  let mtPerk14 = document.getElementById("mtAddRollingDisarmAndMuddle");
  let mtPerk15 = document.getElementById("mtIgnoreNegEffects");
mtConfirmPerksButton.onclick = () => {

  if(mtPerk1.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod12){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk1", "mtchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(mtPerk2.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod14){
        modDeckArray.splice(i, 2);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk2", "mtchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
 if (mtPerk3.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod1){
        modDeckArray.splice(i, 4);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk3", "mtchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (mtPerk4.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod7){
        modDeckArray.splice(i, 2);
        let newCard = "./mindthief/mtPerks/mtPlus2.png";
        modDeckArray.push(newCard);
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk4", "mtchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (mtPerk5.classList.contains('checked')){
    for (var i = 0; i<modDeckArray.length; i++){
      if(modDeckArray[i] === mod17){
        modDeckArray.splice(i, 1);
        let newCard = "./mindthief/mtPerks/mtPlus0.png";
        modDeckArray.push(newCard);
        i = modDeckArray.length;
        cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
      }
    }
    setCookie("perk5", "mtchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (mtPerk6.classList.contains('checked')){
    let newCard = "./mindthief/mtPerks/mtFrostPlus2.png";
    modDeckArray.push(newCard);
    setCookie("perk6", "mtchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (mtPerk7.classList.contains('checked')){
    let newCard = "./mindthief/mtPerks/mtFrostPlus2.png";
    modDeckArray.push(newCard);
    setCookie("perk7", "mtchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (mtPerk8.classList.contains('checked')){
    let newCard = "./mindthief/mtPerks/mtRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk8", "mtchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (mtPerk9.classList.contains('checked')){
    let newCard = "./mindthief/mtPerks/mtRollingPlus1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk9", "mtchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (mtPerk10.classList.contains('checked')){
    let newCard = "./mindthief/mtPerks/mtRollingPull1.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk10", "mtchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (mtPerk11.classList.contains('checked')){
    let newCard = "./mindthief/mtPerks/mtRollingMuddle.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk11", "mtchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (mtPerk12.classList.contains('checked')){
    let newCard = "./mindthief/mtPerks/mtRollingImmobilize.png";
    modDeckArray.push(newCard);
    modDeckArray.push(newCard);
    setCookie("perk12", "mtchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (mtPerk13.classList.contains('checked')){
    let newCard = "./mindthief/mtPerks/mtRollingStun.png";
    modDeckArray.push(newCard);
    setCookie("perk13", "mtchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (mtPerk14.classList.contains('checked')){
    let newCard1 = "./mindthief/mtPerks/mtRollingDisarm.png";
    let newCard2 = "./mindthief/mtPerks/mtRollingMuddle.png";
    modDeckArray.push(newCard1);
    modDeckArray.push(newCard2);
    setCookie("perk14", "mtchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (mtPerk15.classList.contains('checked')){
    setCookie("perk15", "mtchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}
