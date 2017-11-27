var domBuilder = (function() {
var masChance;
var masItem;
var buttonStart;
var addChanceCommon;
var addChanceUncommon;
var addChanceRare;
var addChanceMythical;
var addChanceLegendary;
var itemCarousel;
var img;
var inputChance;
var chanceCommon = 350;
var chanceUncommon = 300;
var chanceRare = 200;
var chanceMythical = 140;
var chanceLegendary = 10;
var addChance = 0;
var sumChance;
var randomResult;

function init(){
  createMas();
  getElement();
  initListeners();
}

function createMas(){
masChance = [chanceCommon, chanceUncommon, chanceRare, chanceMythical, chanceLegendary];
masItem = [common, uncommon, rare, mythical, legendary];
}

function getElement(){
buttonStart = document.getElementById("buttonStartId");
addChanceCommon = document.getElementById("addChanceCommonId");
addChanceUncommon = document.getElementById("addChanceUncommonId");
addChanceRare = document.getElementById("addChanceRareId");
addChanceMythical = document.getElementById("addChanceMythicalId");
addChanceLegendary = document.getElementById("addChanceLegendaryId");
itemCarousel = document.getElementsByClassName("itemCarouselClassId");
img = document.getElementById("imageId");
inputChance = document.getElementById("inputId");
}

function addChanceEvent(index){
  addChance = parseInt(inputChance.value);
  masChance[index] += addChance;
  addChance = 0;
}

function initListeners(){
  buttonStart.addEventListener("click", random);
  addChanceCommon.addEventListener("click", function(){addChanceEvent(0)});
  addChanceUncommon.addEventListener("click", function(){addChanceEvent(1)});
  addChanceRare.addEventListener("click", function(){addChanceEvent(2)});
  addChanceMythical.addEventListener("click", function(){addChanceEvent(3)});
  addChanceLegendary.addEventListener("click", function(){addChanceEvent(4)});
}

function random(){
  sumChance = 0;
  for (var x = 0; x < 5; x++)
  {
    sumChance += masChance[x];
  }
  randomResult = Math.floor(Math.random() * sumChance + 1) + 0;
  checkItem();
}

function checkItem(){
  var time = 0;
  for(var i = 0; i<5; i++){
    if (randomResult <= (time += masChance[i])){
      resultItem(masItem[i]);
      break;
    }
  }
}

function resultItem(item){
  switch(item){
    case common: img.src = "img/common.png";
      break;
    case uncommon: img.src = "img/uncommon.png";
      break;
    case rare: img.src = "img/rare.png";
      break;
    case mythical: img.src = "img/mythical.jpg";
      break;
    case legendary: img.src = "img/legendary.jpg";
      break;
  }
}

return {
  init: init
};

})();


