'use-strict';
$(document).ready(function(){

  h1Selector();
  liInOlSelector();
  linkSelector();
  imageSelector();
  checkboxInputSelector();
});

// declare your functions here...
function h1Selector(){
  return $("h1");
}

function liInOlSelector(){
  return $("ol li");
}

function linkSelector(){
  return $("div#box4 a");
}

function imageSelector(){
  return $("img[alt='cat sleeping']");
}

function checkboxInputSelector(){
  return $("input[type='radio']").wrap("<span class='pinky'></span>");
}
