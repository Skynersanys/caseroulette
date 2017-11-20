var chanceCommon = 350;
var chanceUncommon = 300;
var chanceRare = 200;
var chanceMythical = 140;
var chanceLegendary = 10;

var sumChance;

var randomResult;

var masChance = [chanceCommon, chanceUncommon, chanceRare, chanceMythical, chanceLegendary];
var masItem = ['common', 'uncommon', 'rare', 'mythical', 'legendary'];

var buttonStart = document.getElementById("buttonStartId");
var addChanceCommon = document.getElementById("addChanceCommon");
var addChanceUncommon = document.getElementById("addChanceUncommon");
var addChanceRare = document.getElementById("addChanceRare");
var addChanceMythical = document.getElementById("addChanceMythical");
var addChanceLegendary = document.getElementById("addChanceLegendary");
var itemCarousel = document.getElementsByClassName("itemCarouselClass");
var img = document.getElementById("image");


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
    case 'common': img.src = "img/common.png";
      break;
    case 'uncommon': img.src = "img/uncommon.png";
      break;
    case 'rare': img.src = "img/rare.png";
      break;
    case 'mythical': img.src = "img/mythical.jpg";
      break;
    case 'legendary': img.src = "img/legendary.jpg";
      break;
  }
}


buttonStart.addEventListener("click", random);
addChanceCommon.addEventListener("click", function(){masChance[0] += 60;});
addChanceUncommon.addEventListener("click", function(){masChance[1] += 50});
addChanceRare.addEventListener("click", function(){masChance[2] += 40});
addChanceMythical.addEventListener("click", function(){masChance[3] += 30});
addChanceLegendary.addEventListener("click", function(){masChance[4] += 20});


