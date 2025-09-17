let score = 0;
let clickWeight = 1;
let initialFontSize = 64;
let upClickCost1 = 10;
let upClickCost2 = 500;
let upClickCost3 = 25000;
let upAutoCost1 = 50;
let upAutoCost2 = 50;
let upAutoCost3 = 50;
let clickCount = 1;
let autoCount = 0;
let rebirthCount = 0;
let rebirthCost = 10000;

document.getElementById("carten").addEventListener("click", scoreUp);
document.getElementById("upgrade1").addEventListener("click", upgrade1Fun);
document.getElementById("upgrade2").addEventListener("click", upgrade2Fun);
setSizeOfScore();

function scoreUp() {
  score = score + clickWeight;
  setSizeOfScore();
}

function upgrade1Fun() {
  if (score >= Math.floor(upClickCost1)) {
    score = score - upClickCost1;
    upClickCost1 = upClickCost1 + upClickCost1 * 1.2;
    clickWeight = clickWeight + 1;
    clickCount = clickCount + 1;
    setSizeOfScore();
    document.getElementById("upClick1").innerText =
      "$" + Math.floor(upClickCost1);
    document.getElementById("clickDis").innerText = "Click: " + clickCount;
  }
}

function upgrade2Fun() {
  if (score >= Math.floor(upAutoCost1)) {
    score = score - upAutoCost1;
    upAutoCost1 = upAutoCost1 + upAutoCost1 * 1.2;
    //////////AUTO CLICKER//////////
    autoCount = autoCount + 1;
    setSizeOfScore();
    document.getElementById("upAuto1").innerText =
      "$" + Math.floor(upAutoCost1);
    document.getElementById("autoDis").innerText = "Autoclick: " + autoCount;
  }
}

function setSizeOfScore() {
  document.getElementById("counter").style.fontSize =
    initialFontSize - Math.floor(score) / 50 + "px";
  document.getElementById("counter").innerText = Math.floor(score) + "g";
}

function upgrade3Fun() {
  if (score >= Math.floor(upClickCost2)) {
    score = score - upClickCost2;
    upClickCost2 = upClickCost2 + upClickCost2 * 1.1;
    clickWeight = clickWeight + 100;
    clickCount = clickCount + 100;
    setSizeOfScore();
    document.getElementById("upClick2").innerText =
      "$" + Math.floor(upClickCost2);
    document.getElementById("clickDis").innerText = "Click: " + clickCount;
  }
}

function upgrade4Fun() {
  if (score >= Math.floor(upAutoCost2)) {
    score = score - upAutoCost2;
    upAutoCost2 = upAutoCost2 + upAutoCost2 * 1.1;
    //////////AUTO CLICKER//////////
    autoCount = autoCount + 10;
    setSizeOfScore();
    document.getElementById("upAuto1").innerText =
      "$" + Math.floor(upAutoCost2);
    document.getElementById("autoDis").innerText = "Autoclick: " + autoCount;
  }
}