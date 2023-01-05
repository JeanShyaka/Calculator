var screen = document.getElementById("displayBox");


function getSeven(){
  screen.value += document.getElementById("seven").value;
console.log(screen.value);
}

function getEight(){
  screen.value += "8";
}

function getNine(){
  screen.value += "9";
}

function getDivision(){
  screen.value += "/";
}

function getFour(){
  screen.value += "4";
}

function getFive(){
  screen.value += "5";
}

function getSix(){
  screen.value += "6";
}

function getMult(){
  screen.value += "*";
}

function getOne(){
  screen.value += "1";
}

function getTwo(){
  screen.value += "2";
}

function getThree(){
  screen.value += "3";
}

const getAdd = () => {
  screen.value += "+";
}

function getZero(){
  screen.value += "0";
}

function getDot(){
  screen.value += ".";
}

function getSub(){
  screen.value += "-";
}

function getClear(){
  screen.value = ""
}

function getEqual(){
const  result = eval(screen.value)
  screen.value = result;
} 