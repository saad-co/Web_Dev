var hitgoal = Math.floor(Math.random()*10);
function makebuble() {
  var clutter = "";
  for (var i = 1; i <= 90; i++) {
    var rdm = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rdm}</div>`;
  }
  document.querySelector(".pbbtm").innerHTML = clutter;
}
var timmer = 60;
function playtime() {
  var change = document.querySelector("#distim");
  // timmer = 10;
  var timmerint = setInterval(function () {
    if (timmer > 0) {
      timmer = timmer - 1;
      change.innerHTML = timmer;
    } else {
      clearInterval(timmerint);
    }
  }, 1000);
}

function gethit() {
  hitgoal = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitgoal;
}

gethit();

var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#score").innerHTML = score;
}

document.querySelector(".pbbtm").addEventListener("click", function (dets) {
  var clienthit = Number(dets.target.innerHTML);
  console.log(clienthit);
  console.log(hitgoal);
  if (clienthit === hitgoal) {
    // console.log("ok");
    increaseScore();
    if(timmer>0)
    {
      if(score < 100)
      {
        increaseScore();
        makebuble();
        gethit();
      }
      else
      {
        document.querySelector(".pbbtm").innerHTML = "You Won";
        document.querySelector(".pbbtm").style.fontSize = "10vw";
      }
    }
    else
    {
      document.querySelector(".pbbtm").innerHTML = "Game Over";
      document.querySelector(".pbbtm").style.fontSize = "10vw";
    }
  }
});

makebuble();
playtime();

// increaseScore();
