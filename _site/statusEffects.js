togglePoison.onclick = () =>{
  if(!poisoned){
    poisoned = true;
    poisonedToken.classList.remove('hiding');
    healButton.classList.add("poisoned");
  }else{
    poisoned = false;
    poisonedToken.classList.add('hiding');
    healButton.classList.remove("poisoned");
  }
}

toggleBearPoison.onclick = () =>{
  if(!bearPoisoned){
    bearPoisoned = true;
    bearPoisonedToken.classList.remove('hiding');
    healBearButton.classList.add("poisoned");
  }else{
    bearPoisoned = false;
    bearPoisonedToken.classList.add('hiding');
    healBearButton.classList.remove("poisoned");
  }
}

toggleWounded.onclick = () =>{
  if(!wounded){
    wounded = true;
    woundedToken.classList.remove('hiding');
  }else{
    wounded = false;
    woundedToken.classList.add('hiding');
  }
}

toggleBearWounded.onclick = () =>{
  if(!bearWounded){
    bearWounded = true;
    bearWoundedToken.classList.remove('hiding');
  }else{
    bearWounded = false;
    bearWoundedToken.classList.add('hiding');
  }
}

toggleImmobilized.onclick = () =>{
  if(!immobilized){
    immobilized = true;
    immobilizedToken.classList.remove('hiding');
  }else{
    immobilized = false;
    immobilizedToken.classList.add('hiding');
  }
}

toggleBearImmobilized.onclick = () =>{
  if(!bearImmobilized){
    bearImmobilized = true;
    bearImmobilizedToken.classList.remove('hiding');
  }else{
    bearImmobilized = false;
    bearImmobilizedToken.classList.add('hiding');
  }
}

toggleDisarmed.onclick = () =>{
  if(!disarmed){
    disarmed = true;
    disarmedToken.classList.remove('hiding');
  }else{
    disarmed = false;
    disarmedToken.classList.add('hiding');
  }
}

toggleBearDisarmed.onclick = () =>{
  if(!bearDisarmed){
    bearDisarmed = true;
    bearDisarmedToken.classList.remove('hiding');
  }else{
    bearDisarmed = false;
    bearDisarmedToken.classList.add('hiding');
  }
}

toggleStunned.onclick = () =>{
  if(!stunned){
    stunned = true;
    stunnedToken.classList.remove('hiding');
  }else{
    stunned = false;
    stunnedToken.classList.add('hiding');
  }
}

toggleBearStunned.onclick = () =>{
  if(!bearStunned){
    bearStunned = true;
    bearStunnedToken.classList.remove('hiding');
  }else{
    bearStunned = false;
    bearStunnedToken.classList.add('hiding');
  }
}

toggleMuddled.onclick = () =>{
  if(!muddled){
    muddled = true;
    muddledToken.classList.remove('hiding');
  }else{
    muddled = false;
    muddledToken.classList.add('hiding');
  }
}

toggleBearMuddled.onclick = () =>{
  if(!bearMuddled){
    bearMuddled = true;
    bearMuddledToken.classList.remove('hiding');
  }else{
    bearMuddled = false;
    bearMuddledToken.classList.add('hiding');
  }
}

toggleInvisible.onclick = () =>{
  if(!invisible){
    invisible = true;
    invisibleToken.classList.remove('hiding');
  }else{
    invisible = false;
    invisibleToken.classList.add('hiding');
  }
}

toggleBearInvisible.onclick = () =>{
  if(!bearInvisible){
    bearInvisible = true;
    bearInvisibleToken.classList.remove('hiding');
  }else{
    bearInvisible = false;
    bearInvisibleToken.classList.add('hiding');
  }
}

toggleStrengthened.onclick = () =>{
  if(!strengthened){
    strengthened = true;
    strengthenedToken.classList.remove('hiding');
  }else{
    strengthened = false;
    strengthenedToken.classList.add('hiding');
  }
}

toggleBearStrengthened.onclick = () =>{
  if(!bearStrengthened){
    bearStrengthened = true;
    bearStrengthenedToken.classList.remove('hiding');
  }else{
    bearStrengthened = false;
    bearStrengthenedToken.classList.add('hiding');
  }
}