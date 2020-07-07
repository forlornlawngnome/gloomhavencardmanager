let healthCounter = document.getElementById('health-counter');
let xpCounter = document.getElementById('xp-counter');
let bearHealthCounter = document.getElementById('bear-health-counter');
let lootCounter = document.getElementById('loot-counter');


xpUp.onclick = () => {
  xpCount++;
  xpCounter.innerHTML = xpCount;
  xpDown.classList.remove("at-min");
}

xpDown.onclick = () => {
  if(xpCount>0){
    xpCount--;
    xpCounter.innerHTML = xpCount;
    if(xpCount === 0){
      xpDown.classList.add("at-min");
    }
  }
}

lootUp.onclick = () => {
  lootCount++;
  lootCounter.innerHTML = lootCount;
  lootDown.classList.remove("at-min");
}

lootDown.onclick = () => {
  if(lootCount>0){
    lootCount--;
    lootCounter.innerHTML = lootCount;
    if(lootCount === 0){
      lootDown.classList.add("at-min");
    }
  }
}

healButton.onclick = () => {
  if(!poisoned && health<maxHealth){
    health++;
    healthCounter.innerHTML =  health + "/" + maxHealth;
    damageButton.classList.remove("at-min");
    wounded = false;
    woundedToken.classList.add('hiding');
    if(health === maxHealth){
      healButton.classList.add("at-max");
    }
  }
}
damageButton.onclick = () =>{
  if(health>0){
    health--;
    healthCounter.innerHTML =  health + "/" + maxHealth;
    healButton.classList.remove("at-max");
    if(health === 0){
      damageButton.classList.add("at-min");
    }
  }
}

let healBearButton = document.getElementById("heal-bear");
let damageBearButton = document.getElementById("damage-bear");

healBearButton.onclick = () => {
  if(!poisoned && bearHealth<bearMaxHealth){
    bearHealth++;
    bearHealthCounter.innerHTML =  "Bear Health<br/>"+bearHealth + "/" + bearMaxHealth;
    damageBearButton.classList.remove("at-min");
    bearWounded = false;
    bearWoundedToken.classList.add('hiding');
    if(bearHealth === bearMaxHealth){
      healBearButton.classList.add("at-max");
    }
  }
}
damageBearButton.onclick = () =>{
  if(bearHealth>0){
    bearHealth--;
    bearHealthCounter.innerHTML =  "Bear Health<br/>"+bearHealth + "/" + bearMaxHealth;
    healBearButton.classList.remove("at-max");
    if(bearHealth === 0){
      damageBearButton.classList.add("at-min");
    }
  }
}


levelUp.onclick = () => {
  if(levelCount<9){
    levelCount++
    levelCounter.innerHTML = "Level: "+levelCount;
    levelDown.classList.remove("at-min");
    if(levelCount === 9){
      levelUp.classList.add("at-max");
    }
  }
}

levelDown.onclick = () =>{
  if(levelCount>1){
    levelCount--
    levelCounter.innerHTML = "Level: "+levelCount;
    levelUp.classList.remove("at-max");
    if(levelCount === 1){
      levelDown.classList.add("at-min");
    }
  }
}