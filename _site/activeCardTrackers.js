let createActiveTracker = document.getElementById('create-active-tracker');
let increaseTrackerSize = document.getElementById('increase-tracker-size');
let decreaseTrackerSize = document.getElementById('decrease-tracker-size');
let tracker11 = document.getElementById('tracker1-1');
let tracker12 = document.getElementById('tracker1-2');
let tracker13 = document.getElementById('tracker1-3');
let tracker14 = document.getElementById('tracker1-4');
let tracker15 = document.getElementById('tracker1-5');
let tracker16 = document.getElementById('tracker1-6');
let tracker21 = document.getElementById('tracker2-1');
let tracker22 = document.getElementById('tracker2-2');
let tracker23 = document.getElementById('tracker2-3');
let tracker24 = document.getElementById('tracker2-4');
let tracker25 = document.getElementById('tracker2-5');
let tracker26 = document.getElementById('tracker2-6');
let tracker31 = document.getElementById('tracker3-1');
let tracker32 = document.getElementById('tracker3-2');
let tracker33 = document.getElementById('tracker3-3');
let tracker34 = document.getElementById('tracker3-4');
let tracker35 = document.getElementById('tracker3-5');
let tracker36 = document.getElementById('tracker3-6');
let tracker41 = document.getElementById('tracker4-1');
let tracker42 = document.getElementById('tracker4-2');
let tracker43 = document.getElementById('tracker4-3');
let tracker44 = document.getElementById('tracker4-4');
let tracker45 = document.getElementById('tracker4-5');
let tracker46 = document.getElementById('tracker4-6');
let tracker51 = document.getElementById('tracker5-1');
let tracker52 = document.getElementById('tracker5-2');
let tracker53 = document.getElementById('tracker5-3');
let tracker54 = document.getElementById('tracker5-4');
let tracker55 = document.getElementById('tracker5-5');
let tracker56 = document.getElementById('tracker5-6');
let tracker61 = document.getElementById('tracker6-1');
let tracker62 = document.getElementById('tracker6-2');
let tracker63 = document.getElementById('tracker6-3');
let tracker64 = document.getElementById('tracker6-4');
let tracker65 = document.getElementById('tracker6-5');
let tracker66 = document.getElementById('tracker6-6');

increaseTrackerSize.onclick = () => {
  if(trackerSize<6){
    trackerSize++;
    trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
    decreaseTrackerSize.classList.remove("at-min");
    if(trackerSize === 6){
      increaseTrackerSize.classList.add("at-max");
    }
  }
}

decreaseTrackerSize.onclick = () => {
  if(trackerSize>1){
    trackerSize--;
    trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
    increaseTrackerSize.classList.remove("at-max");
    if(trackerSize === 1){
      decreaseTrackerSize.classList.add("at-min");
    }
  }
}

createActiveTracker.onclick = () => {
  var activeCardsWithBorder = document.querySelectorAll(".active-selected");
  activeCardWithBorder = activeCardsWithBorder[0];
  if(!(activeCardWithBorder.classList.contains("has-tracker"))){
  switch(trackerSize){
    case 1:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
           activeCard.classList.remove("active-selected");
           activeCard.classList.add("has-tracker");
           switch (i){
            case 0:
              var card1Trackers = document.querySelectorAll(".tracker-button1");
              var card1Tracker1 = card1Trackers[0];
              card1Tracker1.classList.remove("invisible");
              card1TrackerCounter = 1;
              break;
            case 1:
              var card2Trackers = document.querySelectorAll(".tracker-button2");
              var card2Tracker1 = card2Trackers[0];
              card2Tracker1.classList.remove("invisible");
              card2TrackerCounter = 1;
              break;
            case 2:
              var card3Trackers = document.querySelectorAll(".tracker-button3");
              var card3Tracker1 = card3Trackers[0];
              card3Tracker1.classList.remove("invisible");
              card3TrackerCounter = 1;
              break;
            case 3:
              var card4Trackers = document.querySelectorAll(".tracker-button4");
              var card4Tracker1 = card4Trackers[0];
              card4Tracker1.classList.remove("invisible");
              card4TrackerCounter = 1;
              break;
            case 4:
              var card5Trackers = document.querySelectorAll(".tracker-button5");
              var card5Tracker1 = card5Trackers[0];
              card5Tracker1.classList.remove("invisible");
              card5TrackerCounter = 1;
              break;
            case 5:
              var card6Trackers = document.querySelectorAll(".tracker-button6");
              var card6Tracker1 = card6Trackers[0];
              card6Tracker1.classList.remove("invisible");
              card6TrackerCounter = 1;
              break;
           }
          }
        }).call(this,i);
      }
      break;
    case 2:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<2){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 2;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<2){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<2){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<2){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<2){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<2){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    case 3:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<3){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 3;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<3){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<3){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<3){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<3){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<3){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    case 4:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
          activeCard.classList.remove("active-selected");
          activeCard.classList.add("has-tracker");
          switch (i){
           case 0:
             var card1Trackers = document.querySelectorAll(".tracker-button1");
             for(var j = 0; j<card1Trackers.length; j++){
               (function () {
                 var card1Tracker = card1Trackers[j];
                 if(j<4){
                   card1Tracker.classList.remove("invisible");
                   card1TrackerCounter = 4;
                 }
               }).call(this, j);
             }
             break;
           case 1:
           var card2Trackers = document.querySelectorAll(".tracker-button2");
           for(var j = 0; j<card2Trackers.length; j++){
             (function () {
               var card2Tracker = card2Trackers[j];
               if(j<4){
                 card2Tracker.classList.remove("invisible");
                 card2TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 2:
           var card3Trackers = document.querySelectorAll(".tracker-button3");
           for(var j = 0; j<card3Trackers.length; j++){
             (function () {
               var card3Tracker = card3Trackers[j];
               if(j<4){
                 card3Tracker.classList.remove("invisible");
                 card3TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 3:
           var card4Trackers = document.querySelectorAll(".tracker-button4");
           for(var j = 0; j<card4Trackers.length; j++){
             (function () {
               var card4Tracker = card4Trackers[j];
               if(j<4){
                 card4Tracker.classList.remove("invisible");
                 card4TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 4:
           var card5Trackers = document.querySelectorAll(".tracker-button5");
           for(var j = 0; j<card5Trackers.length; j++){
             (function () {
               var card5Tracker = card5Trackers[j];
               if(j<4){
                 card5Tracker.classList.remove("invisible");
                 card5TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 5:
           var card6Trackers = document.querySelectorAll(".tracker-button6");
           for(var j = 0; j<card6Trackers.length; j++){
             (function () {
               var card6Tracker = card6Trackers[j];
               if(j<4){
                 card6Tracker.classList.remove("invisible");
                 card6TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
          }
          }
        }).call(this,i);
      }
      break;
    case 5:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<5){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 5;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<5){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<5){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<5){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<5){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<5){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    case 6:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<6){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 6;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<6){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<6){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<6){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<6){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<6){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
    activesSelected = 0;
}
}

var trackerUseButtons1 = document.querySelectorAll(".tracker-button1");
for (var i = 0; i<trackerUseButtons1.length; i++){
  (function (){
    var trackerUseButton1 = trackerUseButtons1[i];
    trackerUseButton1.onclick = () => {
      if (trackerUseButton1 === trackerUseButtons1[0]){
        trackerUseButton1.classList.add("invisible");
      }else if (trackerUseButton1.previousSibling.classList.contains("invisible")){
        trackerUseButton1.classList.add("invisible");
      } if(card1TrackerCounter === 1 && trackerUseButton1 === trackerUseButtons1[0]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 2 && trackerUseButton1 === trackerUseButtons1[1]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card1TrackerCounter === 3 && trackerUseButton1 === trackerUseButtons1[2]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 4 && trackerUseButton1 === trackerUseButtons1[3]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 5 && trackerUseButton1 === trackerUseButtons1[4]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 6 && trackerUseButton1 === trackerUseButtons1[5]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons2 = document.querySelectorAll(".tracker-button2");
for (var i = 0; i<trackerUseButtons2.length; i++){
  (function (){
    var trackerUseButton2 = trackerUseButtons2[i];
    trackerUseButton2.onclick = () => {
      if (trackerUseButton2 === trackerUseButtons2[0]){
        trackerUseButton2.classList.add("invisible");
      }else if (trackerUseButton2.previousSibling.classList.contains("invisible")){
        trackerUseButton2.classList.add("invisible");
      } if(card2TrackerCounter === 1 && trackerUseButton2 === trackerUseButtons2[0]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 2 && trackerUseButton2 === trackerUseButtons2[1]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card2TrackerCounter === 3 && trackerUseButton2 === trackerUseButtons2[2]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 4 && trackerUseButton2 === trackerUseButtons2[3]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 5 && trackerUseButton2 === trackerUseButtons2[4]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 6 && trackerUseButton2 === trackerUseButtons2[5]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons3 = document.querySelectorAll(".tracker-button3");
for (var i = 0; i<trackerUseButtons3.length; i++){
  (function (){
    var trackerUseButton3 = trackerUseButtons3[i];
    trackerUseButton3.onclick = () => {
      if (trackerUseButton3 === trackerUseButtons3[0]){
        trackerUseButton3.classList.add("invisible");
      }else if (trackerUseButton3.previousSibling.classList.contains("invisible")){
        trackerUseButton3.classList.add("invisible");
      } if(card3TrackerCounter === 1 && trackerUseButton3 === trackerUseButtons3[0]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 2 && trackerUseButton3 === trackerUseButtons3[1]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card3TrackerCounter === 3 && trackerUseButton3 === trackerUseButtons3[2]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 4 && trackerUseButton3 === trackerUseButtons3[3]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 5 && trackerUseButton3 === trackerUseButtons3[4]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 6 && trackerUseButton3 === trackerUseButtons3[5]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons4 = document.querySelectorAll(".tracker-button4");
for (var i = 0; i<trackerUseButtons4.length; i++){
  (function (){
    var trackerUseButton4 = trackerUseButtons4[i];
    trackerUseButton4.onclick = () => {
      if (trackerUseButton4 === trackerUseButtons4[0]){
        trackerUseButton4.classList.add("invisible");
      }else if (trackerUseButton4.previousSibling.classList.contains("invisible")){
        trackerUseButton4.classList.add("invisible");
      } if(card4TrackerCounter === 1 && trackerUseButton4 === trackerUseButtons4[0]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 2 && trackerUseButton4 === trackerUseButtons4[1]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card4TrackerCounter === 3 && trackerUseButton4 === trackerUseButtons4[2]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 4 && trackerUseButton4 === trackerUseButtons4[3]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 5 && trackerUseButton4 === trackerUseButtons4[4]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 6 && trackerUseButton4 === trackerUseButtons4[5]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons5 = document.querySelectorAll(".tracker-button5");
for (var i = 0; i<trackerUseButtons5.length; i++){
  (function (){
    var trackerUseButton5 = trackerUseButtons5[i];
    trackerUseButton5.onclick = () => {
      if (trackerUseButton5 === trackerUseButtons5[0]){
        trackerUseButton5.classList.add("invisible");
      }else if (trackerUseButton5.previousSibling.classList.contains("invisible")){
        trackerUseButton5.classList.add("invisible");
      } if(card5TrackerCounter === 1 && trackerUseButton5 === trackerUseButtons5[0]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 2 && trackerUseButton5 === trackerUseButtons5[1]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card5TrackerCounter === 3 && trackerUseButton5 === trackerUseButtons5[2]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 4 && trackerUseButton5 === trackerUseButtons5[3]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 5 && trackerUseButton5 === trackerUseButtons5[4]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 6 && trackerUseButton5 === trackerUseButtons5[5]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons6 = document.querySelectorAll(".tracker-button6");
for (var i = 0; i<trackerUseButtons6.length; i++){
  (function (){
    var trackerUseButton6 = trackerUseButtons6[i];
    trackerUseButton6.onclick = () => {
      if (trackerUseButton6 === trackerUseButtons6[0]){
        trackerUseButton6.classList.add("invisible");
      }else if (trackerUseButton6.previousSibling.classList.contains("invisible")){
        trackerUseButton6.classList.add("invisible");
      } if(card6TrackerCounter === 1 && trackerUseButton6 === trackerUseButtons6[0]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 2 && trackerUseButton6 === trackerUseButtons6[1]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card6TrackerCounter === 3 && trackerUseButton6 === trackerUseButtons6[2]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 4 && trackerUseButton6 === trackerUseButtons6[3]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 5 && trackerUseButton6 === trackerUseButtons6[4]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 6 && trackerUseButton6 === trackerUseButtons6[5]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}
