//flipped card path
let flippedCard = "./brute/brBack.png";

//cards in hand
let handSize = 0;
let cardHand1 = document.getElementById('card1');
let cardHand2 = document.getElementById('card2');
let cardHand3 = document.getElementById('card3');
let cardHand4 = document.getElementById('card4');
let cardHand5 = document.getElementById('card5');
let cardHand6 = document.getElementById('card6');
let cardHand7 = document.getElementById('card7');
let cardHand8 = document.getElementById('card8');
let cardHand9 = document.getElementById('card9');
let cardHand10 = document.getElementById('card10');
let cardHand11 = document.getElementById('card11');
let cardHand12 = document.getElementById('card12');

//cards that are discarded, lost, or active
let discard1 = document.getElementById('discard1');
let discard2 = document.getElementById('discard2');
let discard3 = document.getElementById('discard3');
let discard4 = document.getElementById('discard4');
let discard5 = document.getElementById('discard5');
let discard6 = document.getElementById('discard6');
let discard7 = document.getElementById('discard7');
let discard8 = document.getElementById('discard8');
let discard9 = document.getElementById('discard9');
let discard10 = document.getElementById('discard10');
let discard11 = document.getElementById('discard11');
let discard12 = document.getElementById('discard12');
let lost1 = document.getElementById('lost1');
let lost2 = document.getElementById('lost2');
let lost3 = document.getElementById('lost3');
let lost4 = document.getElementById('lost4');
let lost5 = document.getElementById('lost5');
let lost6 = document.getElementById('lost6');
let lost7 = document.getElementById('lost7');
let lost8 = document.getElementById('lost8');
let lost9 = document.getElementById('lost9');
let lost10 = document.getElementById('lost10');
let lost11 = document.getElementById('lost11');
let lost12 = document.getElementById('lost12');
let active1 = document.getElementById('active1');
let active2 = document.getElementById('active2');
let active3 = document.getElementById('active3');
let active4 = document.getElementById('active4');
let active5 = document.getElementById('active5');
let active6 = document.getElementById('active6');

//buttons for play
let playCardsButton = document.getElementById('play-cards-button');
let discardButton = document.getElementById('discard-button');
let loseButton = document.getElementById('lose-button');
let activateButton = document.getElementById('activate-button');
let recoverDiscardButton = document.getElementById('recover-discard-button');
let shortRestButton = document.getElementById('short-rest-button');
let longRestButton = document.getElementById('long-rest-button');
let discardActiveCardButton = document.getElementById('discard-active-card');
let loseActiveCardButton = document.getElementById('lose-active-card');
let recoverLostCardButton = document.getElementById('recover-lost');
let loseCardFromRestButton = document.getElementById('lose-discard-button');
let rerollShortRestButton = document.getElementById('reroll-random-card-button');
let confirmCharacterButton = document.getElementById('confirm-character-button');
let togglePoison = document.getElementById('toggle-poison');
let toggleWounded = document.getElementById('toggle-wounded');
let toggleImmobilized = document.getElementById('toggle-immobilized');
let toggleDisarmed = document.getElementById('toggle-disarmed');
let toggleStunned = document.getElementById('toggle-stunned');
let toggleMuddled = document.getElementById('toggle-muddled');
let toggleInvisible = document.getElementById('toggle-invisible');
let toggleStrengthened = document.getElementById('toggle-strengthened');
let toggleBearPoison = document.getElementById('toggle-bear-poison');
let toggleBearWounded = document.getElementById('toggle-bear-wounded');
let toggleBearImmobilized = document.getElementById('toggle-bear-immobilized');
let toggleBearDisarmed = document.getElementById('toggle-bear-disarmed');
let toggleBearStunned = document.getElementById('toggle-bear-stunned');
let toggleBearMuddled = document.getElementById('toggle-bear-muddled');
let toggleBearInvisible = document.getElementById('toggle-bear-invisible');
let toggleBearStrengthened = document.getElementById('toggle-bear-strengthened');
let xpUp = document.getElementById('xp-up');
let xpDown = document.getElementById('xp-down');
let healButton = document.getElementById('heal');
let damageButton = document.getElementById('damage');
let lootUp = document.getElementById('loot-up');
let lootDown = document.getElementById('loot-down');
let levelUp = document.getElementById('level-up');
let levelDown = document.getElementById('level-down');
let confirmLevel = document.getElementById('confirm-level');
let goBack = document.getElementById('go-back1');
let goBack2 = document.getElementById('go-back2');
let loseHandCard = document.getElementById('lose-hand-card');
let loseDiscardButton = document.getElementById('lose-discard-button2');
//play cards variables

let playCard1 = "";
let playCard2 = "";

//counters
let cardCount = 0;
let discardCount = 0;
let cardCounter = document.getElementById('card-counter');
let cardsInPlayCounter = 0;
let chooseCardsNumber = document.getElementById('choose-cards-number');
let health = 0;
let xpCount = 0;
let maxHealth = 0;
let levelCounter = document.getElementById('level-counter');
let levelCount = 1;
let trackerSize = 1;
let trackerSizeCounter = document.getElementById('tracker-size');
let card1TrackerCounter = 0;
let card2TrackerCounter = 0;
let card3TrackerCounter = 0;
let card4TrackerCounter = 0;
let card5TrackerCounter = 0;
let card6TrackerCounter = 0;
let numberOfActiveCards = 0;
let bearHealth = 0;
let bearMaxHealth = 0;
let lootCount = 0;

//characters
let brute = document.getElementById('brute');
let cragheart = document.getElementById('cragheart');
let mindthief = document.getElementById('mindthief');
let spellweaver = document.getElementById('spellweaver');
let scoundrel = document.getElementById('scoundrel');
let tinkerer = document.getElementById('tinkerer');
let beastTyrant = document.getElementById('beastTyrant');
let doomStalker = document.getElementById('doomStalker');
let nightshroud = document.getElementById("nightshroud");
let berserker = document.getElementById("berserker");
let sunkeeper = document.getElementById("sunkeeper");

//status effects
let poisoned = false;
let poisonedToken = document.getElementById('poisoned');
let wounded = false;
let woundedToken = document.getElementById('wounded');
let disarmed = false;
let disarmedToken = document.getElementById('disarmed');
let immobilized = false;
let immobilizedToken = document.getElementById('immobilized');
let stunned = false;
let stunnedToken = document.getElementById('stunned');
let muddled = false;
let muddledToken = document.getElementById('muddled');
let strengthened = false;
let strengthenedToken = document.getElementById('strengthened');
let invisible = false;
let invisibleToken = document.getElementById('invisible');
let bearPoisoned = false;
let bearPoisonedToken = document.getElementById('bear-poisoned');
let bearWounded = false;
let bearWoundedToken = document.getElementById('bear-wounded');
let bearDisarmed = false;
let bearDisarmedToken = document.getElementById('bear-disarmed');
let bearImmobilized = false;
let bearImmobilizedToken = document.getElementById('bear-immobilized');
let bearStunned = false;
let bearStunnedToken = document.getElementById('bear-stunned');
let bearMuddled = false;
let bearMuddledToken = document.getElementById('bear-muddled');
let bearStrengthened = false;
let bearStrengthenedToken = document.getElementById('bear-strengthened');
let bearInvisible = false;
let bearInvisibleToken = document.getElementById('bear-invisible');

let characterSelected = false;
var characterPortraits = document.querySelectorAll(".character");
for (var i = 0; i<characterPortraits.length; i++){
  (function (){
    var characterPortrait = characterPortraits[i];
    characterPortrait.onclick = () => {
      if (!isSelected(characterPortrait) && !characterSelected){
        characterSelected = true;
        characterPortrait.classList.add("character-selected");
        confirmCharacterButton.classList.remove("not-without-more-selected");
      } else if(!isSelected(characterPortrait) && characterSelected){
        var charactersSelected = document.querySelectorAll(".character-selected");
        var selectedCharacter = charactersSelected[0];
        selectedCharacter.classList.remove("character-selected");
        characterPortrait.classList.add("character-selected");
      } else if(isSelected(characterPortrait) && characterSelected){
        characterSelected = false;
        characterPortrait.classList.remove("character-selected");
        confirmCharacterButton.classList.add("not-without-more-selected");
      }
    }
  }).call(this,i);
}
